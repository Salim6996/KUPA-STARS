"use client";

import { useState } from "react";

const ChatPage = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchResponse = async () => {
    if (!question.trim()) return;
    setIsLoading(true);
    setError("");
    setResponse("");

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
      setError("API ile bağlantı kurulamadı. Lütfen daha sonra tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-2xl bg-gray-800 shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-200">
          KUPA STARS
        </h1>
        <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Bir şey yazın..."
            className="w-full p-4 bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none"
          />
          <button
            onClick={fetchResponse}
            className="p-4 bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M2.003 21 23 12 2.003 3 2 10l15 2-15 2 .003 7z" />
            </svg>
          </button>
        </div>
        {isLoading && (
          <div className="flex justify-center items-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-12 h-12"
            >
              <circle
                cx="50"
                cy="50"
                r="35"
                stroke="#4F46E5"
                strokeWidth="8"
                fill="none"
                strokeDasharray="164.93361431346415 56.97787143782138"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  dur="1s"
                  values="0 50 50;360 50 50"
                />
              </circle>
            </svg>
          </div>
        )}
        {error && (
          <p className="mt-4 text-center text-red-500">{error}</p>
        )}
        {response && (
          <div className="mt-4 p-4 bg-gray-700 rounded-lg border border-gray-600">
            <div className="flex items-start space-x-4">
              <div className="bg-gray-600 p-2 rounded-full">
                <img
                  src="/user-icon.svg"
                  alt="User"
                  className="w-8 h-8"
                />
              </div>
              <p className="text-gray-300">{question}</p>
            </div>
            <div className="flex items-start space-x-4 mt-4">
              <div className="bg-gray-600 p-2 rounded-full">
                <img
                  src="/chatgpt-icon.svg"
                  alt="ChatGPT"
                  className="w-8 h-8"
                />
              </div>
              <p className="text-gray-300">{response}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
