"use client";
import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import Link from "next/link";
import { Skeleton } from "@/components/skeleton";
import { Button } from "@/components/button";
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

const Hero: React.FC = () => {
  const typingElement = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: ["Log", "Moderasyon", "Eğlence", "Brawl Stars", "Destek Bileti", "Sunucu Koruma"],
      typeSpeed: 90,
      backSpeed: 90,
      loop: true,
    };

    if (typingElement.current) {
      typed.current = new Typed(typingElement.current, options);
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return (
    <section className="bg-gray-900 text-white py-8 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="max-w-md mx-auto md:mx-0 md:mr-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-pink-500">
            KUPA STARS
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-8">
            Discord Sunucunuz{" "}
            <span className="text-pink-500" ref={typingElement}></span> için{" "}
            <span className="text-pink-500" ref={typingElement}></span> sistemi.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <div>
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
                    <DialogTitle>Davet Et</DialogTitle>
                    <DialogDescription className="text-base md:text-lg text-gray-300 py-4">
                      KUPA STARS botunu davet ederken, Hizmet Şartlarımızı ve
                      Gizlilik Politikamızı kabul etmiş olursunuz.
                    </DialogDescription>
                  </DialogHeader>
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
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="login">Premium</Button>
                </DialogTrigger>
                <DialogContent
                  style={{
                    background: "#020817",
                  }}
                >
                  <DialogHeader className="text-white">
                    <DialogTitle>Ah, bir sorun var...</DialogTitle>
                    <DialogDescription className="text-base md:text-lg text-gray-300 py-4">
                      Bu sayfa yakında açılacak.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="ghost">
                        Anladım
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-64">
          <Skeleton className="h-64 w-64 rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
