import React from "react";

const Partners: React.FC = () => {
  return (
    <>
      <style>
        {`
          .kupa-stars-effect {
            background: linear-gradient(90deg, #ff6b6b, #feca57, #1dd1a1, #5f27cd);
            background-size: 300% 300%;
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            animation: gradientMove 5s infinite;
          }

          @keyframes gradientMove {
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
              En İyi Sunucuların Güvendiği Güç:{" "}
              <span className="kupa-stars-effect">KUPA STARS</span>'ı kullanıyor
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
