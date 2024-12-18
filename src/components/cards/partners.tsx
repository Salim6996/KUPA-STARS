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
          <div className="flex flex-wrap justify-center gap-4">
            <Skeleton className="w-16 h-16 rounded-full" />
            <Skeleton className="w-16 h-16 rounded-full" />
            <Skeleton className="w-16 h-16 rounded-full" />
            <Skeleton className="w-16 h-16 rounded-full" />
            <Skeleton className="w-16 h-16 rounded-full" />
            <Skeleton className="w-16 h-16 rounded-full" />
            <Skeleton className="w-16 h-16 rounded-full" />
            <Skeleton className="w-16 h-16 rounded-full" />
            <Skeleton className="w-16 h-16 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
