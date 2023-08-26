import ImageComp from "@components/utils/ImageComp";
import Section from "@components/utils/Section";
import WordAnimation from "@components/utils/WordAnimation";
import { FasilitasKeamanan } from "@constants";
import React, { useState } from "react";
import Foto1 from "@public/images/Fasilitas/Keamanan/Cctv01.jpeg";
import Foto2 from "@public/images/Fasilitas/Keamanan/Cctv02.jpeg";
import Foto3 from "@public/images/Fasilitas/Keamanan/Gerbang02.jpeg";
import Foto4 from "@public/images/Fasilitas/Keamanan/Siskamling.jpeg";

export default function Keamanan() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`${theme} bg-text text-background`} id="keamanan">
      <div className="container mx-auto">
        <h3 className="text-4xl md:text-8xl text-center">
          Fasilitas Keamanan.
        </h3>
      </div>

      {FasilitasKeamanan.map((l, idx) => {
        return (
          <Section
            theme={l.theme}
            setTheme={setTheme}
            key={idx}
            className="dark:bg-background dark:text-text p-8 min-h-screen flex flex-col"
          >
            <div className="flex-1 flex-col flex justify-center lg:max-w-6xl lg:mx-auto gap-4">
              <h5 className="text-4xl md:text-6xl">
                <WordAnimation words={l.title} />
              </h5>
              <ImageComp
                src={l.src}
                alt={l.title}
                className="h-[28rem] md:h-[40rem] md:w-[40rem]"
              />
            </div>
          </Section>
        );
      })}

      <div className="dark:bg-background dark:text-text p-8 min-h-screen flex flex-col">
        <div className="w-full flex-1 flex-col flex justify-center lg:max-w-6xl lg:mx-auto gap-4">
          <h4 className="text-2xl md:text-4xl font-semibold uppercase">
            <WordAnimation words={"dan masih banyak lainnya."} />
          </h4>
          <div className="grid grid-cols-[2fr_3fr] md:grid-cols-[2fr_3fr] gap-x-4">
            <ImageComp
              className={"w-full h-[13rem] md:h-[40rem] rounded-xl"}
              src={Foto1}
            />
            <ImageComp
              className={"w-full h-[13rem] md:h-[40rem] rounded-xl"}
              src={Foto3}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4">
            <ImageComp
              className={"w-full h-[13rem] md:h-[40rem] rounded-xl"}
              src={Foto4}
            />
            <ImageComp
              className={"w-full h-[13rem] md:h-[40rem] rounded-xl"}
              src={Foto2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
