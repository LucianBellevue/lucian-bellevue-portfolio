"use client";

import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { CiLocationArrow1 } from "react-icons/ci";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20 h-full w-full dark:bg-black dark:bg-dot-red/[0.5] relative" id="projects">
      <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"
          />
      <h1 className="heading">
        A selection of my most{" "}
        <span className="text-red">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link, github}) => (
          <div
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={id}
          >
            <PinContainer
              title={link}
              href={link}
            >
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "rgb(0, 0, 0, 0)" }}
                >
                </div>
                <Image
                  src={img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  height={100}
                  width={100}
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-red-100">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#ffffff",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-red/[.5] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="icon5" className="p-2" height={48} width={48} />
                    </div>
                  ))}
                </div>


                <div className="flex justify-center items-center">
                  <a href={github} target="_blank">
                    <p className="flex lg:text-xl md:text-xs text-sm text-red-100 mr-2 hover:text-white ">
                      Github
                    </p>
                  </a>
                  <div className="flex lg:text-xl md:text-xs text-sm text-red-100 mr-2">|</div>
                  <a href={link} target="_blank">
                    <p className="flex lg:text-xl md:text-xs text-sm text-red-100 hover:text-white">
                      Live Site
                    </p>
                  </a>
                  <CiLocationArrow1 className="ms-3" color="#ff0000" />
                </div>
              </div>
                {id === 1 && (
                  <div
                    className="h-screen w-full dark:bg-black bg-white dark:bg-dot-red/[0.5] bg-dot-black-100/[0.5]
                    absolute top-0 left-0 flex items-center justify-center -z-10"
                    >
                    <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
                  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] -z-10"
                    />
                  </div>
                  )}

                  {id === 2 && (
                  <div
                    className="h-screen w-full dark:bg-black bg-white dark:bg-dot-red/[0.5] bg-dot-black-100/[0.5]
                    absolute top-0 left-0 flex items-center justify-center -z-10"
                    >
                    <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
                  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] -z-10"
                    />
                  </div>
                  )}

                  {id === 3 && (
                  <div
                    className="h-screen w-full dark:bg-black bg-white dark:bg-dot-red/[0.5] bg-dot-black-100/[0.5]
                    absolute top-0 left-0 flex items-center justify-center -z-10"
                    >
                    <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
                  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] -z-10"
                    />
                  </div>
                  )}

                  {id === 4 && (
                  <div
                    className="h-screen w-full dark:bg-black bg-white dark:bg-dot-red/[0.5] bg-dot-black-100/[0.5]
                    absolute top-0 left-0 flex items-center justify-center -z-10"
                    >
                    <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
                  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] -z-10"
                    />
                  </div>
                  )}
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
