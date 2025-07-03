"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 py-8 bg-black font-poppins gap-20 lg:gap-60"
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center lg:items-start w-full max-w-xl text-center lg:text-left"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 leading-tight drop-shadow-lg font-poppins">
          {"Hey, I'm Abieyuwa."}
          <br />
          <span className="block text-white/80 font-semibold text-lg sm:text-2xl mt-2">
            <Typewriter
              words={[
                "Frontend Developer",
                "Programmer",
                "UI/UX Designer",
                "Web Enthusiast",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1800}
            />
          </span>
        </h1>
        <p className="text-neutral-300 text-sm sm:text-base mt-1 mb-3 font-normal max-w-lg">
          I’m passionate about crafting beautiful, accessible web experiences—turning ideas into delightful, performant products.
        </p>
        <div className="flex flex-row gap-2 mt-8 w-full lg:w-auto justify-center lg:justify-start">
          <a
            href="#projects"
            aria-label="See my work"
            className="px-5 py-2.5 bg-pink-500 text-white text-base rounded-lg shadow-md font-semibold transition-all hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
          >
            See My Work
          </a>
          <a
            href="#contact"
            aria-label="Contact Abieyuwa"
            className="px-4 py-2 bg-white text-black text-base rounded-lg shadow-md font-semibold transition-all hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            style={{ minWidth: "auto" }}
          >
            Hire Me
          </a>
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ 
          opacity: 1, 
          y: [0, -16, 0, 16, 0] // floating effect using tween for multiple keyframes
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: 0 // no infinite, just once
        }}
        className="w-full lg:w-auto flex justify-center"
      >
        <motion.img
          src="/me1.png"
          alt="Abieyuwa"
          className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-2xl object-cover shadow-2xl border-4 border-white/10"
          loading="lazy"
          aria-label="Abieyuwa's profile picture"
          initial={{ scale: 0.95 }}
          animate={{ scale: [0.98, 1.05, 0.98] }}
          transition={{
            duration: 3,
            repeat: 0,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  );
}