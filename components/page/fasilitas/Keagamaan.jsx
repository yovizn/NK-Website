import ImageComp from "@components/utils/ImageComp";
import Section from "@components/utils/Section";
import WordAnimation from "@components/utils/WordAnimation";
import { FasilitasKeagamaan } from "@constants";
import { useState } from "react";

export default function ImageSection() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`${theme}`} id="keagamaan">
      <div className="container mx-auto">
        <h3 className="text-4xl md:text-8xl text-center">
          Fasilitas Keagamaan.
        </h3>
      </div>
      {FasilitasKeagamaan.map((l, idx) => {
        return (
          <Section
            theme={l.theme}
            setTheme={setTheme}
            key={idx}
            id={l.id}
            className="dark:bg-text dark:text-background p-8 min-h-screen flex flex-col"
          >
            <div className="flex-1 flex-col flex justify-center lg:max-w-6xl lg:mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
                <div className="flex flex-col gap-3 md:gap-8 justify-center ">
                  <h1 className="text-[39px] lg:text-7xl font-bold">
                    <WordAnimation words={l.title} />
                  </h1>
                  <p className="text-base md:text-lg">
                    <WordAnimation words={l.description} />
                  </p>
                </div>
                <ImageComp
                  src={`/images/Fasilitas/Keagamaan/${l.src}`}
                  alt={l.title}
                  className="h-[28rem] md:h-[40rem]"
                />
              </div>
            </div>
          </Section>
        );
      })}
    </div>
  );
}
