import Section from "@components/utils/Section";
import VideoPlayer from "@components/utils/VideoPlayer";
import WordAnimation from "@components/utils/WordAnimation";
import React, { useState } from "react";

export default function Lingkungan() {
  const [theme, setTheme] = useState("light");

  return (
    <div id="lingkungan">
      <Section
        theme={"light"}
        setTheme={setTheme}
        className="dark:bg-text dark:text-background p-8 min-h-screen flex flex-col"
      >
        <div className="flex-1 flex-col flex justify-center lg:max-w-6xl lg:mx-auto">
          <div className="mb-4 md:mb-10">
            <h4 className="text-2xl md:text-7xl font-bold uppercase">
              <WordAnimation words={"Kegiatan Lingkungan"} />
            </h4>
            <p className="font-medium">
              <WordAnimation
                words={
                  "Fogging untuk menjaga kesehatan lingkungan, dari nyamuk. Dan kami juga melakukan kegiatan gotong royong untuk menjaga kebersihan lingkungan."
                }
              />
            </p>
          </div>
          <div>
            <VideoPlayer
              src="/images/Fasilitas/Lingkungan/Fogging.mp4"
              className="max-w-7xl w-full h-[40rem] md:h-[50rem] overflow-hidden"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
