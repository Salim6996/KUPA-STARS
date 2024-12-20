import React from "react";

const Partners: React.FC = () => {
  return (
    <>
      <style>
        {`
          .kupa-stars-effect {
            background: linear-gradient(90deg, #ff0080, #ff8c00, #40e0d0);
            background-size: 200% 200%;
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            animation: shine 3s linear infinite;
            font-weight: bold;
            text-shadow: 0 0 5px #ff0080, 0 0 10px #ff8c00, 0 0 15px #40e0d0, 0 0 20px #ff0080;
          }

          @keyframes shine {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6">
              Birçok popüler sunucu{" "}
              <span className="kupa-stars-effect">KUPA STARS</span>'ı kullanıyor
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              En İyi Sunucuların Güvendiği Güç:{" "}
              <span className="kupa-stars-effect">KUPA STARS</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
