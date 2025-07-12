"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function Hero() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 pt-36 pb-20 text-center overflow-hidden font-satoshi bg-white"
    >
      {/* Animated Background Blobs */}
      <motion.div className="absolute top-[-80px] left-[-60px] w-[250px] h-[250px] bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob" />
      <motion.div className="absolute top-[300px] right-[-80px] w-[300px] h-[300px] bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-blob animation-delay-2000" />
      <motion.div className="absolute bottom-[-100px] left-[50%] w-[250px] h-[250px] bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl w-full px-2 sm:px-4 font-outfit"
      >
        <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-gray-800 leading-tight mb-5 font-sans">
          {"Hey, I'm "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Abieyuwa.
          </span>
          <br />
          <span className="block text-gray-600 font-semibold text-[14px] sm:text-base md:text-xl mt-2">
            <Typewriter
              words={[
                "Frontend Developer",
                "Programmer",
                "UI/UX Designer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={2000}
            />
          </span>
        </h1>

        <p className="mx-auto max-w-3xl sm:max-w-4xl text-[12px] sm:text-sm md:text-base text-black font-medium lg:leading-7 leading-5 text-balance mt-2 sm:mt-3 mb-5 sm:mb-6 font-sans">
          I’m a frontend developer focused on crafting sleek, responsive user interfaces using modern technologies. From clean layouts to smooth interactions, I turn design ideas into polished, functional experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2 lg:gap-3 justify-center mt-5 sm:mt-6">
          <a
            href="#projects"
            className="px-6 py-3 text-[13px] sm:px-5 sm:py-2.5 sm:text-base bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium shadow hover:opacity-90 transition"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-[13px] sm:px-5 sm:py-2.5 sm:text-base border border-pink-500 text-pink-600 rounded-lg font-medium hover:bg-pink-100 transition"
          >
            Let’s Connect
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-8 text-grey-500">
          <a
            href="https://github.com/iamabieyuwa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-pink-800 transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/abieyuwa-imina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-pink-800 transition"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:heisyuwa@gmail.com"
            aria-label="Email"
            className="hover:text-pink-800 transition"
          >
            <FaEnvelope size={22} />
          </a>
          <a
            href="https://x.com/@abieyuwaimina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-pink-800 transition"
          >
            <SiX size={22} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
