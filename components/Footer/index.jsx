"use client";

import Sosmed from "@components/utils/Sosmed";
import Foto from "@public/images/Navbar/Logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto">
        <div className="py-10 flex justify-center gap-2">
          <div className="relative h-14 w-14 lg:h-10 lg:w-10">
            <Image
              fill
              priority={true}
              src={Foto}
              alt="Logo"
              sizes="50%"
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl md:text-4xl text-primary uppercase font-medium">
              Nakula Kresna
            </h1>
            <p className="text-base md:text-xl font-semibold text-accent">
              Perum. Bekasi Timur Permai
            </p>
          </div>
        </div>

        <div className="flex lg:flex-col justify-between items-center">
          <h3 className="text-lg md:text-xl">Hubungi Kami:</h3>
          <p className="md:text-lg">kresnanakula@gmail.com</p>
        </div>

        <div className="py-10">
          <Sosmed />
        </div>

        <div className="flex items-center justify-center pb-4">
          <p className="text-sm md:text-lg text-accent">
            © 2021 Nakula Kresna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
