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
  className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 py-8 bg-gradient-to-b from-black via-black to-[#0a0a0a] font-poppins gap-14 sm:gap-20 lg:gap-60 overflow-hidden"
>
  {/* Animated Glows */}
  <motion.div
    className="absolute inset-0 z-0"
    initial={{ opacity: 0.5, scale: 1 }}
    animate={{ opacity: [0.5, 0.7, 0.5], scale: [1, 1.03, 1] }}
    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
  >
    <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full blur-3xl bg-gradient-to-tr from-pink-400/20 via-pink-500/20 to-pink-600/20" />
    <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full blur-3xl bg-gradient-to-br from-pink-400/20 via-pink-500/20 to-pink-600/20" />
  </motion.div>


      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center lg:items-start w-full max-w-xl text-center lg:text-left"
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-2 leading-tight drop-shadow-lg">
          {"Hey, I'm "}
          <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
            Abieyuwa.
          </span>
          <br />
          <span className="block text-white/80 font-semibold text-base sm:text-2xl mt-2">
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
        <p className="text-neutral-300 text-xs sm:text-sm md:text-base mt-1 mb-3 font-normal max-w-lg">
          I craft sleek, accessible, and high-performing web experiences—turning ideas into digital products people love to use.
        </p>
        <div className="flex flex-row gap-2 mt-6 w-full lg:w-auto justify-center lg:justify-start">
          <a
            href="#projects"
            aria-label="See my projects"
            className="px-4 py-2 sm:px-5 sm:py-2.5 bg-pink-500 text-white text-sm sm:text-base rounded-lg shadow-md font-semibold transition-all hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            aria-label="Contact Abieyuwa"
            className="px-4 py-2 sm:px-4 sm:py-2.5 bg-white text-black text-sm sm:text-base rounded-lg shadow-md font-semibold transition-all hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Let’s Connect
          </a>
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ 
          opacity: 1, 
          y: [0, -16, 0, 16, 0]
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: 0
        }}
        className="relative z-10 w-full lg:w-auto flex justify-center"
      >
        <motion.img
          src="/me1.png"
          alt="Abieyuwa"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-2xl object-cover shadow-2xl border-4 border-white/10"
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
