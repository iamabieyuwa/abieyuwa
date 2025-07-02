"use client"

import About from "./components/About";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}
