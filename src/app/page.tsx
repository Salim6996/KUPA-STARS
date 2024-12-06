import Image from "next/image";
import type { Metadata } from "next";
import Features from "@/components/cards/features";
import Servers from "@/components/cards/partners";
import Partners from "@/components/cards/servers";
import InviteBot from "@/components/cards/invitebot";
import Hero from "@/components/cards/hero";

export const metadata: Metadata = {
  title: "KUPA STARS",
  description: "Moderasyon, Eğlence, Oyun, Kullanıcı Komutları, Log Sistemi ve daha fazlasını içeren Discord Botu.",
  // Thumbnail ve logo ekleniyor
  openGraph: {
    images: [
      {
        url: "https://i.hizliresim.com/776do5x.png", // Thumbnail resminin linki
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    image: "https://i.hizliresim.com/776do5x.png", // Thumbnail resminin linki
  },
};

export default function Home() {
  return (
    <div>
      {/* Site logosu ekleme */}
      <div className="flex justify-center mb-6">
        <Image
          src="https://i.hizliresim.com/776do5x.png" // Logo dosyasının linki
          alt="KUPA STARS Logo"
          width={150} // İstediğiniz genişlik
          height={150} // İstediğiniz yükseklik
        />
      </div>

      <Hero />
      <Servers />
      <Features />
      {/*<Partners /> */}
      <InviteBot />
    </div>
  );
      }
