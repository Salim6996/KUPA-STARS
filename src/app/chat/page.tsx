"use client";

import { useState } from "react";

const ChatPage = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const fetchResponse = async () => {
    if (!question) return;
    try {
      const res = await fetch(
        `https://hercai.onrender.com/v3/hercai?question=${encodeURIComponent(
          question
        )}`
      );
      if (!res.ok) {
        throw new Error(`HTTP Hatası: ${res.status}`);
      }
      const data = await res.json();
      setResponse(data.reply || "Cevap alınamadı.");
    } catch (error) {
      console.error("Hata:", error);
      setResponse("API ile bağlantı kurulamadı.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hercai Chat</h1>
      <div className="mb-4 flex">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border border-gray-300 p-2 w-full"
          placeholder="Bir soru sorun..."
        />
        <button
          onClick={fetchResponse}
          className="bg-blue-500 text-white px-4 py-2 ml-2 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 21l16.5-9-16.5-9v7.5L14.25 12 3.75 13.5v7.5z"
            />
          </svg>
        </button>
      </div>
      {response && (
        <div className="mt-4 p-4 border border-gray-300 bg-gray-100">
          <strong>Cevap:</strong> {response}
        </div>
      )}
    </div>
  );
};

export default ChatPage;
