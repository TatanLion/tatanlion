"use client";

import { useEffect, useRef, useCallback, useState } from "react";
// NOTE Libraries
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "@/components/Image";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
// NOTE Data
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

  // NOTE Scroll Start
  const navbarRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollButton(!entry.isIntersecting);
      },
      { rootMargin: '0px', threshold: 0.5 }
    );

    if (navbarRef.current) {
      observer.observe(navbarRef.current);
    }

    return () => {
      if (navbarRef.current) {
        observer.unobserve(navbarRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen py-[15%] md:py-[2%]">
      <Image
        src="shadow"
        customClass="w-[70%] h-auto absolute left-[-7%] top-[-10%] pointer-events-none"
      />

      {/* Añadir ref a la navbar */}
      <div ref={navbarRef}>
        <Navbar navbar={navbar} onScrollToSection={onScrollToSection} />
      </div>

      {/* Botón de scroll que aparece cuando la navbar no está visible */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-[4%] right-[2%] bg-[#9231be] hover:bg-[#9231be]/70 w-[2.9rem] h-auto p-[.5%] rounded-full cursor-pointer z-50 transition-opacity duration-300 ${
          showScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Image src="row-up" customClass="w-full h-auto mx-auto" />
      </div>

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