"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [userMessage, setUserMessage] = useState<string>('');
  const [botResponse, setBotResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setBotResponse('Merhaba! Size nasıl yardımcı olabilirim?');
  }, []);

  const handleMessageSubmit = async () => {
    if (!userMessage.trim()) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `https://hercai.onrender.com/v3-32k/hercai?question=${encodeURIComponent(userMessage)}`
      );
      setBotResponse(response.data.reply);
    } catch (error) {
      setBotResponse('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Yapay Zeka Sohbet Botu</h1>
        <img src="https://example.com/some-banner.svg" alt="Sohbet Botu" className="banner" />
      </header>

      <div className="chatbox">
        <div className="messages">
          <div className="message user-message">
            <p>{userMessage}</p>
          </div>
          <div className="message bot-message">
            <p>{botResponse}</p>
          </div>
        </div>

        <div className="input-area">
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Mesajınızı yazın..."
          />
          <button onClick={handleMessageSubmit} disabled={loading}>
            {loading ? 'Yükleniyor...' : 'Gönder'}
          </button>
        </div>
      </div>

      <footer>
        <img src="https://example.com/footer-icon.svg" alt="footer" />
      </footer>

      <style jsx>{`
        .container {
          font-family: Arial, sans-serif;
          background-color: #f7f7f7;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }
        .header {
          text-align: center;
        }
        .banner {
          width: 100%;
          height: auto;
          margin-top: 10px;
        }
        .chatbox {
          width: 100%;
          max-width: 600px;
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          margin-top: 20px;
        }
        .messages {
          max-height: 300px;
          overflow-y: auto;
          margin-bottom: 20px;
        }
        .message {
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 8px;
        }
        .user-message {
          background-color: #e1f5fe;
          align-self: flex-start;
        }
        .bot-message {
          background-color: #f1f8e9;
          align-self: flex-end;
        }
        .input-area {
          display: flex;
          gap: 10px;
        }
        input {
          flex-grow: 1;
          padding: 10px;
          border: 2px solid #ccc;
          border-radius: 5px;
        }
        button {
          padding: 10px 15px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:disabled {
          background-color: #9e9e9e;
        }
        footer {
          margin-top: 30px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Home;
