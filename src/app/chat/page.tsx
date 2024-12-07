"use client";
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Image from "next/image";

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;

    setChatHistory([...chatHistory, { sender: "user", message }]);
    setMessage("");
    setIsLoading(true);
    setApiError(false);

    try {
      const res = await fetch(`https://hercai.onrender.com/v3/hercai?question=${encodeURIComponent(message)}`);
      if (!res.ok) {
        throw new Error("API ile bağlantı kurulamadı.");
      }
      const data = await res.json();

      setChatHistory([
        ...chatHistory,
        { sender: "bot", message: data.reply },
      ]);
    } catch (error) {
      setApiError(true);
      setChatHistory([
        ...chatHistory,
        {
          sender: "bot",
          message: "API ile bağlantı kurulamadı. Lütfen daha sonra tekrar deneyin.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container bg-gray-900 text-white min-h-screen flex flex-col justify-between">
      <div className="chat-header flex items-center justify-between p-4 bg-gray-800">
        <div className="flex items-center">
          {/* User Icon */}
          <div className="bg-green-600 rounded-full p-2">
            <Image
              src="https://www.svgrepo.com/show/505680/user.svg"
              alt="User"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </div>
          <h2 className="ml-4 text-xl">KUPA STARS Chat</h2>
        </div>
        <div className="chat-logo">
          {/* ChatGPT Logo */}
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
        {chatHistory.map((entry, index) => (
          <div key={index} className={`chat-message ${entry.sender === "user" ? "text-right" : "text-left"}`}>
            <div className="flex items-center justify-start">
              {entry.sender === "user" ? (
                <div className="bg-green-600 rounded-full p-2">
                  <Image
                    src="https://www.svgrepo.com/show/505680/user.svg"
                    alt="User"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
              ) : (
                <div className="bg-gray-600 rounded-full p-2">
                  <Image
                    src="https://cdn.worldvectorlogo.com/logos/chatgpt-6.svg"
                    alt="Bot"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
              )}
              <div className={`message p-2 rounded-lg inline-block max-w-xs ml-2 ${entry.sender === "user" ? "bg-blue-500" : "bg-gray-700"}`}>
                {entry.message}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="loading-message text-center mt-4">
            <img src="/loading.gif" alt="loading" className="w-8 h-8 mx-auto" />
            <p>Yanıt yükleniyor...</p>
          </div>
        )}
        
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
