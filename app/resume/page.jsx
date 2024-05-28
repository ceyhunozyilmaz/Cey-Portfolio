"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//ABOUT DATA
const about = {
  title: "About me",
  description:
    "Hello! I am Ceyhun Özyılmaz, a professional Frontend Developer. I have been working in this field for about 2 years, making developments. Particularly, I am proficient in HTML, CSS, and JavaScript, as well as modern frontend frameworks and libraries such as React and Next.js. My future goal is to work with people who share the same passion as me and to learn new things every day. Being involved in innovative projects and keeping up with developments in the world of technology excites me.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ceyhun Özyılmaz",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+90) 537 299 20 55",
      link: "tel:+905372992055",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Turkish",
    },
    {
      fieldName: "Email",
      fieldValue: "ceyhunozylmaz14@hotmail.com",
      link: "mailto:ceyhunozylmaz14@hotmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English,Turkish",
    },
  ],
};

// // EXPERIENCE DATA
// const experience = {
//   icon: "/assets/resume/badge.svg",
//   title: "My experience",
//   description:
//     "For more than 2 years, I have been developing projects in related fields as a freelancer.",
// };

// EDUCATION DATA
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I have completed various educational programs and courses to enhance my skills in web development and software engineering.",
  items: [
    {
      institution: "Patika Academy - Frontend Web Development Patikası",
      degree: " Frontend Web Development Patikası",
      duration: "2023",
    },
    {
      institution: "Turkcel Akademi - Gelecegi Yazanlar",
      degree: " React 101, 201, 301, 401",
      duration: "2023",
    },
    {
      institution: "Btk Akademi",
      degree: "HTML5 ile Web Geliştirme",
      duration: "2023",
    },
    {
      institution: "Tech Istanbul, Kodluyoruz, Microsoft",
      degree: "Yazılıma Baslangıc Programı 2",
      duration: "2023",
    },
    {
      institution: "Arel University, Istanbul",
      duration: "2016 - 2018",
    },
  ],
};

// SKILLS DATA
const skills = {
  title: "My skills",
  description:
    "With various skills acquired during the software development process, I am proficient in developing web and desktop applications.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            {/* <TabsTrigger value="experience">Experience</TabsTrigger> */}
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* CONTENT */}
          <div className="min-h-[70vh] w-full">
            {/* EDUCATION  */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* DOT */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* SKILLS  */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gaap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols- gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* ABOUT  */}
            {/* ABOUT */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-28 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-md text-white/60 underline"
                          >
                            {item.fieldValue}
                          </a>
                        ) : (
                          <span className="text-md">{item.fieldValue}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
