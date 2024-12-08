"use client";

import { useState } from "react";
import axios from "axios";

// Mesaj tipleri
interface Message {
  content: string;
  sender: "user" | "bot"; // Gönderen: Kullanıcı veya Bot
  timestamp: string;
}

export default function ChatPage() {
  const [question, setQuestion] = useState<string>(""); // Kullanıcı sorusu
  const [response, setResponse] = useState<string | null>(null); // Bot yanıtı
  const [loading, setLoading] = useState<boolean>(false); // Yükleniyor durumu
  const [messageHistory, setMessageHistory] = useState<Message[]>([]); // Mesaj geçmişi

  // API'den cevap almak için kullanılan fonksiyon
  const fetchResponse = async (question: string) => {
    if (!question.trim()) return; // Boş soru girilemez
    setLoading(true);

    try {
      const apiUrl = `https://hercai.onrender.com/v3-32k/hercai?question=${encodeURIComponent(question)}`;
      const { data } = await axios.get(apiUrl);

      if (data && data.reply) {
        // Yeni gelen mesajı ekle
        const newMessage: Message = {
          content: data.reply,
          sender: "bot",
          timestamp: new Date().toLocaleString(),
        };

        const userMessage: Message = {
          content: question,
          sender: "user",
          timestamp: new Date().toLocaleString(),
        };

        // Geçmişi güncelle
        setMessageHistory((prevMessages) => [
          ...prevMessages,
          userMessage,
          newMessage,
        ]);
        setResponse(data.reply); // Yanıtı sakla
      } else {
        throw new Error("Yanıt alınamadı.");
      }
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Soru gönderme
  const handleSubmit = () => {
    if (!question.trim()) return; // Boş soru girilemez
    fetchResponse(question); // API'yi çağır
    setQuestion(""); // Soruyu sıfırla
  };

  // Mesaj baloncuklarını render etme
  const renderMessageHistory = () => {
    return messageHistory.map((msg, index) => (
      <div
        key={index}
        style={{
          marginBottom: "15px",
          display: "flex",
          justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {/* Profil Resmi */}
          <img
            src={msg.sender === "user" ? "https://www.w3schools.com/w3images/avatar2.png" : "https://www.w3schools.com/w3images/avatar5.png"} // Profil resimleri
            alt={msg.sender === "user" ? "Kullanıcı" : "Bot"}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "2px solid #007bff",
            }}
          />

          <div
            style={{
              backgroundColor: msg.sender === "user" ? "#007bff" : "#e9e9eb",
              color: msg.sender === "user" ? "#fff" : "#000",
              borderRadius: "10px",
              padding: "12px 18px",
              maxWidth: "60%",
              wordBreak: "break-word",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p style={{ margin: 0, fontSize: "14px" }}>{msg.content}</p>
            <small
              style={{
                display: "block",
                textAlign: msg.sender === "user" ? "right" : "left",
                color: "#888",
                fontSize: "12px",
                marginTop: "5px",
              }}
            >
              {msg.timestamp}
            </small>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#333",
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Kupa Stars AI - Sohbet Başlat
      </h1>

      {/* Mesaj geçmişi */}
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "20px",
          maxHeight: "400px",
          overflowY: "auto",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
          marginBottom: "20px",
        }}
      >
        {renderMessageHistory()}
      </div>

      {/* Soru Gönderme Alanı */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Bir soru sorun..."
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            fontSize: "16px",
          }}
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "12px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 0.3s ease",
          }}
        >
          {loading ? "Yükleniyor..." : "Gönder"}
        </button>
      </div>

      {/* Yükleniyor göstergesi */}
      {loading && (
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#888",
            fontSize: "14px",
          }}
        >
          <p>Yükleniyor...</p>
        </div>
      )}
    </div>
  );
}
