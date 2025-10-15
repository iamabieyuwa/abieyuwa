"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function Hero() {
  useEffect(() => {
    // Set 'once: true' for AOS so animations only run once, improving perceived performance
    AOS.init({ once: true, duration: 900 }); 
  }, []);

  return (
    <section
      id="home"
      // Adjusted padding for a more centred, full-screen look
      className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 pt-28 pb-20 text-center overflow-hidden font-outfit bg-white"
    >
      {/* 1. Animated Background Blobs - Intensified colors and blur for a moodier look */}
      {/* Add a keyframe for 'animation-delay' if not using Tailwind's JIT/config */}
      <motion.div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <motion.div className="absolute top-[200px] right-[-100px] w-[350px] h-[350px] bg-fuchsia-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000" />
      <motion.div className="absolute bottom-[-150px] left-[50%] w-[300px] h-[300px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      
      {/* Optional: Central radial gradient flare for depth */}
       <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-color-transparent)_50%,_rgba(255,255,255,1)_100%)]" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 max-w-5xl w-full px-2 sm:px-4"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight mb-6 tracking-tighter">
          {"Hey, I'm "}
          <span className="bg-gradient-to-r from-pink-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-md">
            Abieyuwa.
          </span>
          <br />
          
          {/* Typewriter - Bolder and more focused role */}
          <span className="block text-gray-700 font-extrabold text-xl sm:text-2xl md:text-3xl mt-4 tracking-normal">
            A{" "}
            <Typewriter
              words={[
                "Frontend Engineer",
                "Next.js Developer",
                "UI/UX Advocate",
                "React Specialist",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1800}
            />
          </span>
        </h1>

        <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-gray-600 font-medium leading-relaxed mt-4 mb-10">
          I specialize in building high-performance, SEO-friendly web applications. I transform modern design ideas into clean, functional experiences using React, Next.js, and Tailwind CSS.
        </p>

        {/* 2. Buttons - Use a more consistent gradient style */}
        <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-8 py-3 text-base sm:text-lg bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white rounded-full font-bold shadow-lg shadow-pink-500/50 hover:shadow-xl hover:from-pink-700 hover:to-fuchsia-700 transition transform hover:scale-[1.02]"
          >
            <FaCode />
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 text-base sm:text-lg border-2 border-fuchsia-500 text-fuchsia-600 rounded-full font-bold hover:bg-fuchsia-50 transition transform hover:scale-[1.02]"
          >
            Let’s Collaborate
          </a>
        </motion.div>

        {/* 3. Social Icons - Enhanced with gradient hover */}
        <motion.div 
            className="flex justify-center gap-6 mt-12 text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="https://github.com/iamabieyuwa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-2xl hover:text-pink-600 transition duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/abieyuwa-imina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-2xl hover:text-pink-600 transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:heisyuwa@gmail.com"
            aria-label="Email"
            className="text-2xl hover:text-pink-600 transition duration-300 transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://x.com/iamabieyuwa" // Updated handle
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="text-2xl hover:text-pink-600 transition duration-300 transform hover:scale-110"
          >
            <SiX />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}