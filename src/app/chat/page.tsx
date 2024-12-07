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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Hercai Chat
        </h1>
        <div className="flex items-center border rounded-lg overflow-hidden">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Bir şey yazın..."
            className="w-full p-4 text-gray-700 focus:outline-none"
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
              <path d="M22.182 2.398c.292.216.475.546.475.909 0 .053-.007.105-.02.158l-3.333 14c-.111.466-.452.82-.902.95-.45.13-.939-.017-1.26-.375l-3.957-4.422-2.55 2.025 1.063 3.678c.132.456.022.949-.288 1.3-.309.35-.773.498-1.221.384l-5-1.272c-.646-.165-1.084-.77-1.075-1.431.009-.661.478-1.238 1.125-1.379l2.388-.536 8.42-6.68-9.457 5.732-3.497.785c-.302.067-.614-.02-.846-.236-.232-.215-.358-.521-.34-.837.018-.317.18-.606.432-.783l20-13c.32-.207.724-.229 1.057-.058z" />
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
          <div className="mt-4 p-4 bg-gray-100 rounded-lg border">
            <strong>Cevap:</strong> {response}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
