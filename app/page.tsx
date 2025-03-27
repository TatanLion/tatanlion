"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "@/components/Image";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import data from "../public/data/info.json";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { navbar, main, aboutMe, projects } = data["en"];

  const sectionsRef = useRef(new Map<number, HTMLDivElement>());

  const addToRefs = useCallback((id: number, el: HTMLDivElement | null) => {
    if (el) {
      sectionsRef.current.set(id, el);
    }
  }, []);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 10%",
            toggleActions: "play none none reset",
          },
        }
      );
    });
  }, []);

  const onScrollToSection = (sectionId: number) => {
    sectionsRef.current.get(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative w-full min-h-screen py-[15%] md:py-[2%]">
      <Image 
        src="shadow" 
        customClass="w-[70%] h-auto absolute left-[-7%] top-[-10%] pointer-events-none"
      />
      <Navbar navbar={navbar} onScrollToSection={onScrollToSection} />

      {[
        { id: 0, component: <Main main={main} /> },
        { id: 1, component: <AboutMe aboutMe={aboutMe} /> },
        { id: 2, component: <Projects projects={projects} /> },
      ].map(({ id, component }) => (
        <div key={id} ref={(el) => addToRefs(id, el)}>
          {component}
        </div>
      ))}
    </div>
  );
}