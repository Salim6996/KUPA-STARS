"use client";

const PrivacyPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Gizlilik Politikası</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Toplanan Bilgiler</h2>
          <ul className="space-y-3 text-lg">
            <li>**Kullanıcı Kimliği**: Discord kullanıcı kimliği, botun işlevlerini yerine getirebilmesi için gereklidir.</li>
            <li>**Sunucu Bilgileri**: Sunucu adı ve üyelik bilgileri.</li>
            <li>**Komut Verileri**: Kullanıcıların komutları kaydedilir.</li>
            <li>**Mesaj İçeriği**: Yalnızca belirli komutlarla gönderilen mesajlar işlenir.</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Bilgilerin Kullanım Amaçları</h2>
          <p className="text-lg space-y-3">
            Toplanan veriler yalnızca aşağıdaki amaçlar doğrultusunda kullanılır:
            <ul className="list-disc ml-6 mt-4">
              <li>Botun doğru çalışması için gerekli verilerin işlenmesi.</li>
              <li>Teknik destek sağlanması ve hata ayıklama.</li>
              <li>Performans iyileştirmeleri yapılması.</li>
              <li>Kullanıcı deneyiminin geliştirilmesi.</li>
            </ul>
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Bilgilerin Saklanma Süresi</h2>
          <p className="text-lg">
            Kullanıcı bilgileri, yalnızca gerekli olduğu süre boyunca saklanır. Talep üzerine, veriler hemen silinebilir.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Veri Güvenliği</h2>
          <p className="text-lg">
            Verileriniz, endüstri standartlarına uygun şekilde korunmaktadır. Yalnızca yetkilendirilmiş kişiler erişebilir.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Kullanıcı Hakları</h2>
          <ul className="space-y-3 text-lg">
            <li>Verilerini görüntüleme, silme ve düzenleme hakkına sahiptir.</li>
            <li>Gizlilik politikasıyla ilgili sorularını bize iletebilir.</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">İletişim</h2>
          <p className="text-lg">
            Gizlilik politikamızla ilgili sorularınızı <a href="mailto:support@kupastars.com" className="text-blue-400">support@kupastars.com</a> adresine gönderebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
