"use client";

const PrivacyPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-4">Gizlilik Politikası</h1>
      <p className="text-lg max-w-3xl text-center mb-6">
        Kupa Stars olarak kullanıcılarımızın gizliliğini önemsiyor ve bilgilerinizi en yüksek güvenlik standartlarıyla koruyoruz. Aşağıda, botumuzun hangi bilgileri topladığı ve bu bilgilerin nasıl kullanıldığı detaylı bir şekilde açıklanmıştır.
      </p>
      <div className="text-left max-w-4xl space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Toplanan Bilgiler</h2>
          <ul className="list-disc ml-6">
            <li>
              **Kullanıcı Kimliği (ID)**: Kullanıcıların Discord üzerindeki benzersiz kimliği toplarız. Bu, botun temel işlevlerini yerine getirebilmesi için gereklidir.
            </li>
            <li>
              **Sunucu Bilgileri**: Sunucu adları, kimlikleri ve üyelik bilgileri gibi botun çalışması için gerekli olan veriler kaydedilir.
            </li>
            <li>
              **Komut Verileri**: Kullanıcıların bot ile etkileşimde bulunmak için kullandığı komutlar kaydedilir.
            </li>
            <li>
              **Mesaj İçeriği**: Botun belirli özelliklerini sağlamak için yalnızca belirli komutlarla gönderilen mesaj içeriği işlenir. Örneğin: `/yardım` veya `/premium` komutlarında.
            </li>
            <li>
              **Log Verileri**: Botun hata ayıklama ve performans geliştirme amacıyla bağlantı ve işlem loglarını toplayabiliriz.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Bilgilerin Kullanım Amaçları</h2>
          <p>
            Topladığımız veriler, yalnızca aşağıdaki amaçlar doğrultusunda kullanılmaktadır:
          </p>
          <ul className="list-disc ml-6">
            <li>Kullanıcıların komutlarının işlenmesi ve botun doğru çalışması.</li>
            <li>Performans iyileştirmeleri ve teknik sorunların giderilmesi.</li>
            <li>Bot özelliklerinin geliştirilmesi ve güncellenmesi.</li>
            <li>Kullanıcıya özel deneyimlerin sunulması.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Bilgilerin Saklanma Süresi</h2>
          <p>
            Kullanıcı ve sunucu bilgileri yalnızca gerekli olduğu süre boyunca saklanır:
          </p>
          <ul className="list-disc ml-6">
            <li>
              Bot kullanımının sona ermesi veya bir kullanıcının sunucudan çıkması durumunda, o kullanıcıya ait tüm veriler 30 gün içinde silinir.
            </li>
            <li>
              Talep üzerine, bilgiler daha erken bir tarihte kaldırılabilir (bkz: Kullanıcı Hakları).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Bilgilerin Güvenliği</h2>
          <p>
            Kullanıcı bilgileri, en güncel güvenlik standartları ile korunmaktadır. Verilere yalnızca yetkili personel erişebilir ve tüm işlemler şifrelenmiş bağlantılar üzerinden gerçekleştirilir.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Kullanıcı Hakları</h2>
          <ul className="list-disc ml-6">
            <li>Kendi verilerini görüntüleme, değiştirme ve silme hakkına sahiptir.</li>
            <li>Gizlilik politikası ile ilgili sorularını <a href="mailto:support@kupastars.com" className="text-blue-400 underline">support@kupastars.com</a> adresine yöneltebilir.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">İletişim</h2>
          <p>
            Gizlilik politikamız hakkında sorularınız varsa, <a href="mailto:support@kupastars.com" className="text-blue-400 underline">support@kupastars.com</a> üzerinden bizimle iletişime geçebilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;
