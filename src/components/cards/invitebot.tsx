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
              <DialogTitle>DISCORD BOTU ADI'ni Davet Et</DialogTitle>
              <DialogDescription className="text-base md:text-lg text-gray-300 py-4">
                DISCORD BOTU ADI'ni davet ettiğinizde, Hizmet Şartlarımızı ve
                Gizlilik Politikamızı kabul etmiş olursunuz.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4"></div>
            </div>
            <DialogFooter className="sm:justify-start">
              <Link href="https://discord.com/oauth2/authorize?client_id=BOT_ID&scope=bot&permissions=PERMISSIONS">
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
