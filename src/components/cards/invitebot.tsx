import React from "react";
import { Button } from "@/components/button";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";

const InviteBot: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Davet Etmeye Hazır Mısınız?</h2>
        <p className="text-lg text-gray-300 mb-8">
          Discord deneyiminizi botumuzla geliştirin. Moderasyon, güvenlik ve çok
          daha fazlasını geliştirin.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Davet Et</Button>
          </DialogTrigger>
          <DialogContent
            style={{
              background: "#020817",
            }}
          >
            <DialogHeader className="text-white">
              <DialogTitle>KUPA STARS'ı Davet Et</DialogTitle>
              <DialogDescription className="text-base md:text-lg text-gray-300 py-4">
                KUPA STARS'ı davet ettiğinizde, Hizmet Şartlarımızı ve
                Gizlilik Politikamızı kabul etmiş olursunuz.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4"></div>
            </div>
            <DialogFooter className="sm:justify-start">
              <Link href="https://discord.com/oauth2/authorize?client_id=1157351510984900618&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.gg%2FX93ESUR7SP&integration_type=0&scope=applications.commands+bot+identify">
                <a>
                  <Button variant="ghost">Anladım</Button>
                </a>
              </Link>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default InviteBot;
