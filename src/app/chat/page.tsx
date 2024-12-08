'use client';

import React, { useState } from 'react';
import { Hercai, QuestionData } from 'hercai';
import Image from 'next/image';
import { FaPaperPlane } from 'react-icons/fa';



// Hercai API Setup
const herc = new Hercai();

// Sohbet sayfası component'i
const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<
    { type: 'user' | 'ai'; content: string; id: string }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [editMessageId, setEditMessageId] = useState<string | null>(null);

  // Mesaj gönderme işlemi
  const sendMessage = async () => {
    if (!message) return;

    const newMessage = { type: 'user', content: message, id: Date.now().toString() };

    setMessages((prev) => [...prev, newMessage]);
    setMessage('');
    setLoading(true);

    try {
      const response: QuestionData = await herc.question({
        model: 'v3',
        content: message,
      });

      setMessages((prev) => [
        ...prev,
        {
          type: 'ai',
          content: response.reply,
          id: Date.now().toString(),
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: 'ai',
          content: 'API ile bağlantı kurulamadı. Lütfen tekrar deneyin.',
          id: Date.now().toString(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Mesaj düzenleme
  const editMessage = (id: string) => {
    const messageToEdit = messages.find((msg) => msg.id === id);
    if (messageToEdit && messageToEdit.type === 'user') {
      setMessage(messageToEdit.content);
      setEditMessageId(id);
    }
  };

  // Mesajı yeniden oluştur
  const regenerateMessage = (id: string) => {
    const messageToRegenerate = messages.find((msg) => msg.id === id && msg.type === 'user');
    if (messageToRegenerate) {
      setLoading(true);
      setMessages((prev) => prev.filter((msg) => msg.id !== id)); // Önceki mesajı sil
      setMessages((prev) => [...prev, { type: 'user', content: messageToRegenerate.content, id: Date.now().toString() }]); // Yeniden gönder
      sendMessage();
    }
  };

  // Mesajı kopyalama
  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
    alert('Mesaj kopyalandı!');
  };

  return (
    <div className="chat-container bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="chat-header p-4 bg-gray-800">
        <div className="flex items-center">
          <Image
            src="https://www.svgrepo.com/show/208310/user.svg"
            alt="User"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <h2 className="ml-4 text-xl">AI Chat</h2>
        </div>
      </div>

      <div className="chat-box flex-1 p-4 overflow-auto">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
            <div className="flex items-center">
              <div className={`message-box ${msg.type === 'user' ? 'bg-blue-500' : 'bg-gray-700'} p-3 rounded-lg`}>
                {msg.content}
              </div>

              <div className="message-options flex items-center space-x-2 ml-2">
                {msg.type === 'user' && (
                  <>
                    <FaEdit className="cursor-pointer" onClick={() => editMessage(msg.id)} />
                    <FaRegCopy className="cursor-pointer" onClick={() => copyMessage(msg.content)} />
                  </>
                )}
                {msg.type === 'ai' && (
                  <FaUndo className="cursor-pointer" onClick={() => regenerateMessage(msg.id)} />
                )}
              </div>
            </div>
          </div>
        ))}

        {loading && (
          <div className="loading-message text-center mt-4">
            <img src="https://superstorefinder.net/support/wp-content/uploads/2018/01/4colors.gif" alt="loading" className="w-12 h-12 mx-auto" />
          </div>
        )}
      </div>

      <div className="chat-input bg-gray-800 p-4 flex items-center">
        <input
          type="text"
          className="flex-1 p-2 rounded-lg bg-gray-700 text-white focus:outline-none"
          placeholder="Mesajınızı yazın..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="button"
          className="ml-2 text-white"
          onClick={sendMessage}
        >
          <FaPaperPlane size={24} />
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
