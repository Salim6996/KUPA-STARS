"use client";

const CompanyPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-4">Kullanım Şartları</h1>
      <p className="text-lg max-w-3xl text-center mb-6">
        Bu kullanım şartları, Kupa Stars botunun tüm kullanıcıları için geçerlidir. Botumuzu kullanarak, bu şartları kabul ettiğinizi beyan etmiş olursunuz.
      </p>
      <div className="text-left max-w-4xl space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Kullanıcı Sorumlulukları</h2>
          <ul className="list-disc ml-6">
            <li>Botu kötü amaçlı kullanmamak.</li>
            <li>Başka kullanıcıların deneyimini olumsuz etkileyecek eylemlerden kaçınmak.</li>
            <li>Gizlilik politikamıza uygun olarak botun izinlerini düzenlemek.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Sınırlamalar</h2>
          <p>
            Kupa Stars, herhangi bir kesinti, veri kaybı veya diğer sorunlardan dolayı sorumlu tutulamaz.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Değişiklik Hakkı</h2>
          <p>
            Gizlilik politikası ve kullanım şartlarında değişiklik yapma hakkımız saklıdır. Her değişiklik, bu sayfa üzerinden bildirilecektir.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CompanyPage;
