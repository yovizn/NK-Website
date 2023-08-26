import Section from "@components/utils/Section";
import VideoPlayer from "@components/utils/VideoPlayer";
import WordAnimation from "@components/utils/WordAnimation";
import React, { useState } from "react";

export default function SeniOlahraga() {
  const [theme, setTheme] = useState("light");

  return (
    <div id="seni-olahraga">
      <Section
        theme={"dark"}
        setTheme={setTheme}
        className="dark:bg-text dark:text-background p-8 min-h-screen flex flex-col"
      >
        <div className="flex-1 flex-col flex justify-center lg:max-w-6xl lg:mx-auto">
          <div className="mb-4 md:mb-10">
            <h4 className="text-2xl md:text-7xl font-bold uppercase">
              <WordAnimation words={"Kegiatan Seni dan Olahraga"} />
            </h4>
            <p className="font-medium">
              <WordAnimation
                words={
                  "Seni dan Olahraga merupakan kegiatan yang rutin dilakukan oleh warga lingkungan Nakula Kresna. Kegiatan ini dilakukan untuk menjaga kebugaran dan kesehatan warga lingkungan Nakula Kresna."
                }
              />
            </p>
          </div>
          <div>
            <VideoPlayer
              src="/videos/Senam.mp4"
              className="max-w-7xl w-full h-[40rem] md:h-[50rem] overflow-hidden"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
