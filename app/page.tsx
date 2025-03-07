"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Profile from "@/components/Profile";
import NavDesktop from "@/components/NavDesktop";
import Socials from "@/components/Socials";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.id;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
          document.title = `pari: ${sectionId}`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    document.title = "pari: profile";

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-space-black text-space-white">
      <Nav activeSection={activeSection} />
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-7xl mx-auto">
        <div className="left lg:sticky lg:top-0 lg:h-screen flex flex-col lg:pl-28 lg:pr-8 p-6 lg:pt-24 lg:pb-16">
          <div className="lg:space-y-10">
            <Profile />
            <NavDesktop activeSection={activeSection} />
            <Socials />
          </div>
        </div>
        <div className="right p-6 lg:pt-24 lg:pb-16">
          <section id="about" className="section mb-24">
            <About />
          </section>
          <section id="projects" className="section mb-24">
            <Projects />
          </section>
          <section id="contact" className="section mb-24">
            <Contact />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
