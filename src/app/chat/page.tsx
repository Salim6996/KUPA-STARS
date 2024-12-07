"use client";
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Image from "next/image";

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [botReply, setBotReply] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;

    setIsLoading(true);
    setApiError(false);
    setBotReply(""); // Bot cevabını sıfırlıyoruz.

    try {
      const res = await fetch(`https://hercai.onrender.com/v3/hercai?question=${encodeURIComponent(message)}`);
      if (!res.ok) {
        throw new Error("API ile bağlantı kurulamadı.");
      }
      const data = await res.json();

      setBotReply(data.reply); // API'den gelen yanıtı set ediyoruz
    } catch (error) {
      setApiError(true);
      setBotReply("API ile bağlantı kurulamadı. Lütfen daha sonra tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container bg-gray-900 text-white min-h-screen flex flex-col justify-between">
      <div className="chat-header flex items-center justify-between p-4 bg-gray-800">
        <div className="flex items-center">
          <div className="bg-green-600 rounded-full p-2">
            <Image
              src="https://www.svgrepo.com/show/208310/user.svg"
              alt="User"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </div>
          <h2 className="ml-4 text-xl">KUPA STARS Chat</h2>
        </div>
        <div className="chat-logo">
          <Image
            src="https://cdn.worldvectorlogo.com/logos/chatgpt-6.svg"
            alt="Chatbot"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </div>
      </div>

      <div className="chat-box overflow-auto p-4 flex-1">
        {/* Kullanıcı mesajını göster */}
        <div className="chat-message text-right">
          <div className="flex items-center justify-end">
            <div className="bg-green-600 rounded-full p-2">
              <Image
                src="https://www.svgrepo.com/show/208310/user.svg"
                alt="User"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <div className="message p-2 rounded-lg inline-block max-w-xs ml-2 bg-blue-500">
              {message}
            </div>
          </div>
        </div>

        {/* Bot cevabını göster */}
        {isLoading ? (
          <div className="loading-message text-center mt-4">
            <img
              src="https://superstorefinder.net/support/wp-content/uploads/2018/01/4colors.gif"
              alt="loading"
              className="w-8 h-8 mx-auto"
            />
            <p>Yanıt yükleniyor...</p>
          </div>
        ) : (
          botReply && (
            <div className="chat-message text-left mt-4">
              <div className="flex items-center">
                <div className="bg-gray-600 rounded-full p-2">
                  <Image
                    src="https://cdn.worldvectorlogo.com/logos/chatgpt-6.svg"
                    alt="Bot"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <div className="message p-2 rounded-lg inline-block max-w-xs ml-2 bg-gray-700">
                  {botReply}
                </div>
              </div>
            </div>
          )
        )}

        {/* API hatası */}
        {apiError && (
          <div className="error-message text-center text-red-500 mt-4">
            API ile bağlantı kurulamadı. Lütfen daha sonra tekrar deneyin.
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="chat-input bg-gray-800 p-4 flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-2 rounded-lg bg-gray-700 text-white focus:outline-none"
          placeholder="Mesajınızı yazın..."
        />
        <button type="submit" className="ml-2 text-white">
          <FaPaperPlane size={24} />
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
