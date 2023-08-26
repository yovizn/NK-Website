import ImageComp from "@components/utils/ImageComp";
import React from "react";
import Foto from "@public/images/Home/SelamatDatang.png";

export default function HomeHero() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col">
        <div className="w-full py-4 md:pt-10 md:pb-5">
          <h3 className="text-xl text-center">Informasi, Kreasi & Sejarah</h3>
        </div>

        <div className="max-md:container lg:w-screen mx-auto mb-10 md:mb-20">
          <ImageComp
            src={Foto}
            className={"h-[80dvh] w-full brightness-75"}
            imageClass={"object-top"}
            alt={"Tugu Selamat Datang, pada tahun 1991"}
            priority={true}
            key={Foto}
          />
        </div>

        <div className="max-md:container md:max-w-4xl md:mx-auto md:text-center">
          <p className="font-clashDisplay font-thin">Informasi</p>

          <h1 className="text-5xl md:text-7xl font-semibold uppercase text-primary">
            Nakula&nbsp;
            <span className="max-md:text-text max-md:block">Kresna</span>
          </h1>

          <p className="font-satoshi lg:text-xl py-10">
            Kami ingin memberikan informasi yang terpercaya dan kreasi yang
            menarik untuk di sajikan kepada masyarakat, Nakula Kresna. Ada pula
            sejarah yang menarik yang kami rasa perlu di sajikan untuk
            masyarakat.
          </p>
        </div>
      </div>
    </div>
  );
}
