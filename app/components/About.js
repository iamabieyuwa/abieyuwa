"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import Skills from "./Skills";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, offset: 100 });
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="about"
      className="relative min-h-screen px-4 py-24 bg-white text-black overflow-hidden font-sans lg:mt-8"
    >
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 text-center md:text-left">
        {/* Text Content */}
        <div className="flex-1" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            About
          </h2>

          <p className="text-gray-800 text-sm sm:text-base md:text-lg font-medium mb-3 font-sans">
            I enjoy crafting sleek, intuitive, and meaningful digital experiences.
          </p>

          <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed font-sans">
            I&apos;m Abieyuwa — a self-taught frontend developer and designer based in Benin City,
            Nigeria. I specialize in translating creative ideas into clean, responsive, and
            user-friendly websites.
          </p>

          <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
            I&apos;m always learning, exploring new technologies, and open to exciting challenges
            that push me to grow. Let&apos;s collaborate and bring your ideas to life.
          </p>

          {/* Animated Stats Section */}
          <div className="flex justify-center md:justify-start gap-6 sm:gap-10 mt-4">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-pink-500">
                <CountUp end={12} duration={2} />+
              </p>
              <p className="text-sm sm:text-base text-gray-700">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-pink-500">
                <CountUp end={10} duration={2} />+
              </p>
              <p className="text-sm sm:text-base text-gray-700">Clients Served</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-pink-500">
                <CountUp end={4} duration={2} />+
              </p>
              <p className="text-sm sm:text-base text-gray-700">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          data-aos="fade-left"
        >
          <img
            src="/me1.png"
            alt="Abieyuwa"
            className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] object-cover rounded-xl border-4 border-pink-400 shadow-lg"
          />
        </motion.div>
      </div>

      <Skills />
    </motion.section>
  );
}
