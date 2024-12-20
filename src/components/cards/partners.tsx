import React from "react";
import { Skeleton } from "@/components/skeleton";

const Partners: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6">
            Birçok popüler sunucu{" "}
            <span className="text-pink-500">KUPA STARS</span>'ı kullanıyor
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            En İyi Sunucuların Güvendiği Güç:{" "}
            <span className="text-pink-500 font-semibold">KUPA STARS</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
