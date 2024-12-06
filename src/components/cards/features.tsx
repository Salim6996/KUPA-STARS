import React from "react";

const Features: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Özellikler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative overflow-hidden">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Discord Botu</h3>
              <p className="text-lg text-gray-300">
                Bu bot, Discord sunucularını yönetmek için bir dizi güçlü özellik sunar. Özel komutlar, moderasyon araçları ve kullanıcı etkileşimi sağlayarak sunucu deneyimini iyileştirir.
              </p>
            </div>
            <div className="absolute inset-0 rounded-lg border border-transparent hover:border-pink-500 transition duration-300 cursor-pointer"></div>
          </div>

          <div className="relative overflow-hidden">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Yüksek Güvenlik</h3>
              <p className="text-lg text-gray-300">
                Bot, sunucularınızdaki güvenliği artırmak için gelişmiş spam engelleme ve kullanıcı izleme özellikleri sunar. Bu, sunucunuzun huzurlu ve güvenli olmasını sağlar.
              </p>
            </div>
            <div className="absolute inset-0 rounded-lg border border-transparent hover:border-pink-500 transition duration-300 cursor-pointer"></div>
          </div>

          <div className="relative overflow-hidden">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Komutlar ve Özelleştirme</h3>
              <p className="text-lg text-gray-300">
                Bot, tamamen özelleştirilebilir komutlar sunar. Sunucu ihtiyaçlarınıza göre komutları değiştirebilir veya ekleyebilirsiniz.
              </p>
            </div>
            <div className="absolute inset-0 rounded-lg border border-transparent hover:border-pink-500 transition duration-300 cursor-pointer"></div>
          </div>

          <div className="relative overflow-hidden">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Özel Rol Sistemi</h3>
              <p className="text-lg text-gray-300">
                Bot, sunucunuzda özel roller oluşturmanıza ve bu rollerle kullanıcıları yönetmenize yardımcı olur.
              </p>
            </div>
            <div className="absolute inset-0 rounded-lg border border-transparent hover:border-pink-500 transition duration-300 cursor-pointer"></div>
          </div>

          <div className="relative overflow-hidden">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Otomatik Yanıtlar</h3>
              <p className="text-lg text-gray-300">
                Discord botu, belirli anahtar kelimelere göre otomatik yanıtlar verebilir, böylece kullanıcı etkileşimini hızlandırır.
              </p>
            </div>
            <div className="absolute inset-0 rounded-lg border border-transparent hover:border-pink-500 transition duration-300 cursor-pointer"></div>
          </div>

          <div className="relative overflow-hidden">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Müzik Sistemi</h3>
              <p className="text-lg text-gray-300">
                Bot, müzik çalma özelliği sunar. Kullanıcılar komutlarla müzik açabilir, durdurabilir ve kontrol edebilirler.
              </p>
            </div>
            <div className="absolute inset-0 rounded-lg border border-transparent hover:border-pink-500 transition duration-300 cursor-pointer"></div>
          </div>

          <div className="relative overflow-hidden">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Kapsamlı Moderasyon</h3>
              <p className="text-lg text-gray-300">
                Moderasyon araçları sayesinde, sunucunuzdaki istenmeyen içerikleri hızlı bir şekilde kontrol edebilir ve yönetebilirsiniz.
              </p>
            </div>
            <div className="absolute inset-0 rounded-lg border border-transparent hover:border-pink-500 transition duration-300 cursor-pointer"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
