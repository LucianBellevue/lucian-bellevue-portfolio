"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

import Lottie from "react-lottie";

import { cn } from "@/utils/cn";

import { BackgroundBeams } from "./BgBeams";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { div } from "three/examples/jsm/nodes/Nodes.js";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var m-auto px-2">
      <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-red/[0.5] dark:bg-black dark:border-red/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-12 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-red-100 dark:text-red-100"
        >
          I love coding
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-white"
        >
          and making magic with Nextjs
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/b1.svg"
            height="1200"
            width="1200"
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "TailwindCSS", "Typescript", "CSS3"];
  const rightLists = ["HTML5", "NextJS", "Javascript","Redux",];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "lucian@lucianbellevue.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-2xl border border-red/[0.3] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(0, 0, 0)",
        backgroundColor:"linear-gradient(90deg, #1d0404 0%, #230c0c 100%)",
        borderColor: "rgba(255, 0, 0, 0.247)",
        borderWidth: "1px",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation />
        )}

        {id === 5 && (
          <BackgroundBeams />
        )}

        {id === 1 && (
          <div
          className="h-screen w-full dark:bg-black bg-white dark:bg-dot-red/[0.5] bg-dot-black-100/[0.5]
          absolute top-0 left-0 flex items-center justify-center"
          >
          <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
          </div>
        )}

        {id === 1 && (
          <div className="h-full w-full flex flex-col items-center justify-center">
           <ThreeDCardDemo />
          </div>
        )}

        {id === 4 && (
          <div
          className="h-screen w-full dark:bg-black bg-white dark:bg-dot-red/[0.5] bg-dot-black-100/[0.5]
          absolute top-0 left-0 flex items-center justify-center"
          >
          <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
          </div>
        )}

        {id === 3 && (
          <div
          className="h-screen w-full dark:bg-black bg-white dark:bg-dot-red/[0.5] bg-dot-black-100/[0.5]
          absolute top-0 left-0 flex items-center justify-center"
          >
          <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
          </div>
        )}

        {id === 2 && (
          <div
          className="h-screen w-full dark:bg-black bg-white dark:bg-dot-red/[0.5] bg-dot-black-100/[0.5]
          absolute top-0 left-0 flex items-center justify-center"
          >
          <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
          </div>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-white z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>
          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50
                    lg:opacity-100 rounded-lg text-center bg-[#2e101036]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#2e101036]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#2e101036]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50
                    lg:opacity-100 rounded-lg text-center bg-[#2e101036]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy email address"}
                icon={<IoCopyOutline />}
                position="right"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
