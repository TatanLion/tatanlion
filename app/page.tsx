"use client";
import { useRef } from "react";
// Components
import Image from "@/components/Image";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
// Data
import data from "../public/data/info.json";
import { NavBarProps } from '../types/index';


export default function Home() {
  const { navbar, main, aboutMe, projects } = data["en"];

  // Refs para cada sección
  const mainRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const refs = {
      main: mainRef,
      aboutMe: aboutMeRef,
      projects: projectsRef,
    };
    const ref = refs[section as keyof typeof refs];
    if (ref.current) {
      const y = ref.current.getBoundingClientRect().top + window.scrollY - 45;
      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <Image
        src="shadow.webp"
        customClass="
          w-[30rem] absolute left-[-15rem] top-[-2rem] 
          md:w-[40rem] md:left-[-15rem] md:top-[-15rem]
          lg:w-[48rem] lg:left-[-14rem] lg:top-[-22rem]
          pointer-events-none rotate-[60deg]
        "
      />

      {/* <Image
        src="lienzo.webp"
        customClass="
          w-vw absolute -left-[2rem] top-[18rem] 
          md:w-[40rem] md:-left-[4rem] md:top-[10rem]
          lg:w-[48rem] lg:-left-[6rem] lg:top-[24rem]
          pointer-events-none
        "
      /> */}

      <div className="relative z-10">
        {/* Pasar la función scrollToSection al Navbar */}
        <Navbar navbar={navbar} scrollToSection={scrollToSection} />

        <div ref={mainRef}>
          <Main main={main} />
        </div>
        <div ref={aboutMeRef}>
          <AboutMe aboutMe={aboutMe} />
        </div>
        <div ref={projectsRef}>
          <Projects projects={projects} />
        </div>
      </div>
    </div>
  );
}