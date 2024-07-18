"use client";
import { CiLocationArrow1 } from "react-icons/ci";

import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { socialMedia } from "@/data";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 sm:px-10">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="red"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="red"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="red" />
      </div>
      <div
        className="h-screen w-full dark:bg-black bg-white dark:bg-dot-red/[0.5] bg-dot-black-100/[0.5]
       absolute top-0 left-0 flex items-center justify-center mx-auto"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-red max-w-80">
            Welcome to my portfolio
          </p>
          <TextGenerateEffect
            words="Hello, I&apos;m Lucian! a Full-Stack Software Engineer."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I am a continuous learner with a passion for frontend design.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<CiLocationArrow1 />}
              position='right'
              handleClick={() => {}}
            />
          </a>
          <div className="flex items-center md:gap-3 gap-6 mt-6">
                {socialMedia.map((info) => (
                  <div
                    key={info.id}
                    className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-lg border border-red-100/[0.5] hover:scale-110 transition-all"
                  >
                    <a href={info.link} target="_blank">
                    <img src={info.img} alt='social icons' width={20} height={20} />
                    </a>
                  </div>
                ))}
                <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-lg border border-red-100/[0.5] hover:scale-110 transition-all">
                  <a href="/LucianBellevueResume.pdf" target="_blank">
                  <img src='/pdf.svg' alt='pdf icon' width={20} height={20} />
                  </a>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
