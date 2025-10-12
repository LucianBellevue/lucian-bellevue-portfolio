
import React from "react";
import { CiMail } from "react-icons/ci";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
        <div
          className="h-full w-full dark:bg-black bg-white dark:bg-dot-red/[0.5] bg-dot-black-100/[0.5]
          relative top-0 left-0 flex items-center justify-center z-0"
          >
          <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"
          />
          <footer className="w-full py-12 my-[100px] md:my-[20px]" id="contact">
            <div className="flex flex-col items-center">
              <h1 className="heading lg:max-w-[45vw]">
                Your next <span className='text-red'>frontend developer</span> is just a click away.
              </h1>
              <p className="text-white md:mt-10 my-5 text-center">
                Reach out to me today! I&apos;m open to new opportunities.
              </p>
              <a href="mailto:lucian@lucianbellevue.com">
                <MagicButton
                  title="Hire me!"
                  icon={<CiMail />}
                  position="right"
                />
              </a>
            </div>
            <div className="flex mt-12 md:flex-row flex-col justify-between items-center z-10">
              <p className="md:text-base text-sm md:font-normal font-light">
                Copyright © 2024 Lucian Bellevue
              </p>
              <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((info) => (
                  <div
                    key={info.id}
                    className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-lg border border-red-100/[0.2] hover:scale-110 transition-all"
                  >
                    <a href={info.link} target="_blank">
                    <Image src={info.img} alt='social icons' width={20} height={20} />
                    </a>
                  </div>
                ))}
                <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-lg border border-red-100/[0.2] hover:scale-110 transition-all">
                  <a href="/LucianBellevueResume.pdf" target="_blank">
                  <Image src='/pdf.svg' alt='pdf icon' width={20} height={20} />
                  </a>
                </div>
              </div>
            </div>
          </footer>
    </div>
  );
};

export default Footer;
