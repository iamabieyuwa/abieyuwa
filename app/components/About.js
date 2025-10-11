"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./Skills";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/600.css";
import Image from "next/image"; // Import Next.js Image component

export default function About() {
  useEffect(() => {
    // Only run AOS once, as the component itself uses Framer Motion's initial/animate
    AOS.init({ duration: 900, once: true, offset: 100 }); 
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="about"
      // Added light background gradient for depth and padding adjustments
      className="relative min-h-screen px-4 py-32 bg-gray-50 text-black overflow-hidden font-outfit"
    >
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 md:gap-16">
        {/* Text Content */}
        <div className="flex-1" data-aos="fade-right">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-gray-900">
            About <span className="text-pink-600">Me</span>
          </h2>

          <p className="text-gray-900 text-lg sm:text-xl md:text-2xl font-semibold mb-4 border-l-4 border-pink-500 pl-3">
            I enjoy crafting sleek, intuitive, and meaningful digital experiences.
          </p>

          <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            I&apos;m **Abieyuwa** — a passionate **self-taught Frontend Engineer** and designer based in Benin City, Nigeria. I specialize in translating creative ideas into clean, high-performance, and **user-friendly websites** using modern frameworks like **React** and **Next.js**.
          </p>

          <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
            I&apos;m always learning, exploring new technologies, and open to exciting challenges that push me to grow. My focus is on delivering projects with exceptional attention to detail and a commitment to **clean code** and **responsive design**. Let&apos;s collaborate and bring your ideas to life.
          </p>

          {/* Stats - Enhanced with gradient text and subtle shadows */}
          <div className="flex justify-start gap-8 sm:gap-12 mt-6 p-4 border-t border-b border-pink-100 bg-white shadow-inner rounded-lg">
            <div className="text-left">
              <p className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-fuchsia-600 drop-shadow-sm">
                <CountUp end={15} duration={2} enableScrollSpy scrollSpyOnce />+
              </p>
              <p className="text-sm sm:text-base text-gray-700 font-medium tracking-wider">
                Projects Completed
              </p>
            </div>
            <div className="text-left">
              <p className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-fuchsia-600 drop-shadow-sm">
                <CountUp end={12} duration={2} enableScrollSpy scrollSpyOnce />+
              </p>
              <p className="text-sm sm:text-base text-gray-700 font-medium tracking-wider">
                Happy Collaborators
              </p>
            </div>
            <div className="text-left">
              <p className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-fuchsia-600 drop-shadow-sm">
                <CountUp end={4} duration={2} enableScrollSpy scrollSpyOnce />+
              </p>
              <p className="text-sm sm:text-base text-gray-700 font-medium tracking-wider">
                Years Experience
              </p>
            </div>
          </div>
        </div>

        {/* Image - Enhanced Styling */}
        <motion.div
          className="w-full md:w-auto flex justify-center md:justify-end mt-8 md:mt-0 relative"
          data-aos="fade-left"
        >
          {/* Decorative Pink Square Background */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-pink-200/50 rounded-2xl -z-0 transform rotate-2 shadow-2xl transition-all duration-500"></div>
          
          <Image
            src="/me1.png"
            alt="Abieyuwa Imina, Frontend Engineer" // Enhanced alt text for SEO
            width={350} // Use Next/Image for better performance
            height={350} // Aspect ratio is 1:1, so width and height are the same
            className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] object-cover rounded-2xl border-4 border-white shadow-xl relative z-10 transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl"
          />
        </motion.div>
      </div>

      <div className="mt-20">
        <Skills />
      </div>
    </motion.section>
  );
}