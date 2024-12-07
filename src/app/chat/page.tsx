"use client";

import { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    { role: "system", content: "Merhaba! Sana nasıl yardımcı olabilirim?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchResponse = async (question: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://hercai.onrender.com/v3/hercai?question=${encodeURIComponent(question)}`
      );
      const data = await response.json();
      return data.reply || "Bir hata oluştu. Lütfen tekrar deneyin.";
    } catch (error) {
      console.error("API çağrısı sırasında hata oluştu:", error);
      return "API ile bağlantı kurulamadı.";
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    // Kullanıcı mesajını ekle
    const newMessages = [...messages, { role: "user", content: userInput }];
    setMessages(newMessages);

    // API'den yanıt al
    const botResponse = await fetchResponse(userInput);

    // Yapay zeka yanıtını ekle
    setMessages([...newMessages, { role: "assistant", content: botResponse }]);
    setUserInput("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-2xl mx-auto flex flex-col space-y-4">
        <div className="flex-grow overflow-y-auto bg-gray-800 p-4 rounded-md shadow">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}
            >
              <p
                className={`inline-block p-2 rounded-md ${
                  message.role === "user" ? "bg-blue-500" : "bg-gray-700"
                }`}
              >
                {message.content}
              </p>
            </div>
          ))}
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            className="flex-grow p-2 rounded-md bg-gray-700 text-white focus:outline-none"
            placeholder="Mesajınızı yazın..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
            disabled={isLoading}
          >
            {isLoading ? "Gönderiliyor..." : "Gönder"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
