"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react"; //Modern Slider Olusturucu
import "swiper/css";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Doğru bileşen adlarını kullanın

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  // CeyFlix
  {
    num: "01",
    category: "Frontend",
    title: "CeyFlix",
    description:
      "Ceyflix is a web application that aims to provide information about new movies and TV shows, allowing users to learn about their actors and writers, and offering an enjoyable experience.",
    stack: [
      { name: "Html 5" },
      { name: "React.js" },
      { name: "JavaScript" },
      { name: "React Redux" },
      { name: "Tailwind.css" },
      { name: "Axios" },
      { name: "Firebase" },
    ],
    image: "/assets/work/web2.png",
    live: "https://flix-cey.vercel.app/",
    github: "https://github.com/ceyhunozyilmaz/FlixCey",
  },
  // BoluWay
  {
    num: "02",
    category: "FullStack",
    title: "BoluWay",
    description:
      "This project aims to develop a website for a restaurant called BoluWay. The project is created using Next.js and TypeScript.",
    stack: [
      { name: "Html 5" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Css Modules" },
      { name: "PostgreSql" },
      { name: "Docker" },
      { name: "Prixma Studio" },
    ],
    image: "/assets/work/boluway1.png",
    live: "",
    github: "https://github.com/ceyhunozyilmaz/BoluWay",
  },
  // Vize Takip
  {
    num: "03",
    category: "FullStack",
    title: "Vize Takips",
    description:
      "This application is a React application where users can obtain information about and track their visa applications.",
    stack: [
      { name: "Html 5" },
      { name: "React.js" },
      { name: "JavaScript" },
      { name: "Material UI" },
      { name: ".Net" },
    ],
    image: "/assets/work/web1.png",
    live: "",
    github: "https://github.com/umutcanbuyuker/VisaApp",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSliceChange = (swiper) => {
    // Get curent slide index
    const currentIndex = swiper.activeIndex;

    // Update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline Num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}

              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* Remove The Last Comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* Border */}
              <div className="border border-white/20 mt-2"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSliceChange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px]  relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-fit:cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider Buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
