"use client";

const CompanyPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Kullanım Şartları</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Kullanıcı Sorumlulukları</h2>
          <ul className="space-y-3 text-lg">
            <li>Botu kötüye kullanmamak.</li>
            <li>Başka kullanıcıların deneyimini bozacak davranışlardan kaçınmak.</li>
            <li>Botun izinlerini doğru bir şekilde yönetmek.</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Sınırlamalar</h2>
          <p className="text-lg">
            Bot kullanımınızda oluşacak herhangi bir kesinti, veri kaybı veya diğer sorunlardan dolayı sorumlu değiliz.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Değişiklik Hakkı</h2>
          <p className="text-lg">
            Gizlilik politikası ve kullanım şartlarında değişiklik yapma hakkımız saklıdır. Bu değişiklikler bu sayfa üzerinden yayınlanacaktır.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
