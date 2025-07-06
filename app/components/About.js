"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaGitAlt, FaJs, FaGithub, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaSass, FaGitlab
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiFirebase, SiFigma, SiRedux, SiJest
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const tools = [
  { name: "React", color: "bg-blue-100", text: "text-blue-900", icon: <FaReact className="text-[1.7rem] md:text-2xl" /> },
  { name: "Next.js", color: "bg-gray-100", text: "text-gray-900", icon: <SiNextdotjs className="text-[1.7rem] md:text-2xl" /> },
  { name: "Tailwind CSS", color: "bg-cyan-100", text: "text-cyan-900", icon: <SiTailwindcss className="text-[1.7rem] md:text-2xl" /> },
  { name: "JavaScript", color: "bg-yellow-100", text: "text-yellow-900", icon: <FaJs className="text-[1.7rem] md:text-2xl" /> },
  { name: "Redux", color: "bg-purple-100", text: "text-purple-900", icon: <SiRedux className="text-[1.7rem] md:text-2xl" /> },
  { name: "Firebase", color: "bg-orange-100", text: "text-orange-900", icon: <SiFirebase className="text-[1.7rem] md:text-2xl" /> },
  { name: "Git", color: "bg-red-100", text: "text-red-900", icon: <FaGitAlt className="text-[1.7rem] md:text-2xl" /> },
  { name: "GitHub", color: "bg-black text-white border border-gray-300", text: "", icon: <FaGithub className="text-[1.7rem] md:text-2xl" /> },
  { name: "GitLab", color: "bg-orange-200", text: "text-orange-900", icon: <FaGitlab className="text-[1.7rem] md:text-2xl" /> },
  { name: "UI/UX", color: "bg-amber-100", text: "text-amber-900", icon: <SiFigma className="text-[1.7rem] md:text-2xl" /> },
  { name: "Figma", color: "bg-pink-100", text: "text-pink-900", icon: <SiFigma className="text-[1.7rem] md:text-2xl" /> },
  { name: "HTML5", color: "bg-orange-200", text: "text-orange-900", icon: <FaHtml5 className="text-[1.7rem] md:text-2xl" /> },
  { name: "CSS3", color: "bg-blue-200", text: "text-blue-900", icon: <FaCss3Alt className="text-[1.7rem] md:text-2xl" /> },
  { name: "Node.js", color: "bg-green-200", text: "text-green-900", icon: <FaNodeJs className="text-[1.7rem] md:text-2xl" /> },
  { name: "Jest", color: "bg-pink-200", text: "text-pink-900", icon: <SiJest className="text-[1.7rem] md:text-2xl" /> },
  { name: "Sass", color: "bg-pink-100", text: "text-pink-800", icon: <FaSass className="text-[1.7rem] md:text-2xl" /> },
  { name: "Python", color: "bg-yellow-200", text: "text-yellow-900", icon: <FaPython className="text-[1.7rem] md:text-2xl" /> },
];

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
      className="relative flex flex-col min-h-[calc(100vh-72px)] px-4 py-16 bg-gradient-to-b from-black via-black to-[#0a0a0a] text-white overflow-hidden font-poppins"
    >
      {/* Subtle background ellipse with gradient */}
      <motion.div
        className="absolute left-1/2 top-20 w-[280px] sm:w-[400px] h-[220px] sm:h-[320px] -translate-x-1/2 -z-10 pointer-events-none"
        initial={{ opacity: 0.7, scale: 1 }}
        animate={{ opacity: [0.7, 0.8, 0.7], scale: [1, 1.04, 1] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      >
        <svg width="100%" height="100%" viewBox="0 0 340 340" fill="none">
          <defs>
            <radialGradient id="grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="170" cy="170" rx="160" ry="120" fill="url(#grad)" />
        </svg>
      </motion.div>

      {/* About Text */}
      <div className="w-full flex flex-col items-center text-center max-w-3xl mx-auto px-2 py-10" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 tracking-tight underline underline-offset-8 decoration-pink-400/40">
          About Me
        </h2>
        <p className="text-white font-semibold text-sm sm:text-base md:text-lg mb-3">
          I enjoy crafting sleek, intuitive, and meaningful digital experiences.
        </p>
        <p className="text-white/90 text-xs sm:text-sm md:text-base mb-2 font-normal">
          I&apos;m Abieyuwa — a self-taught frontend developer and designer based in Benin City, Nigeria.
          I blend creativity with code to build accessible, performant, and engaging websites.
          With 4+ years of experience, I&apos;m passionate about continuous learning, clean design,
          and turning ideas into reality.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="w-full flex flex-col items-center">
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 mt-2 px-2">
          {tools.map((tool, idx) => (
            <div
              key={tool.name + idx}
              className={`flex flex-col items-center justify-center ${tool.color} ${tool.text} rounded-xl shadow-md transition-all duration-300 hover:scale-105 aspect-square w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] md:w-[90px] md:h-[90px] px-2 py-2 md:px-3 md:py-3 text-center`}
              data-aos="fade-up"
              data-aos-delay={idx * 40}
            >
              <span className="mb-1 flex items-center justify-center w-full">{tool.icon}</span>
              <span className="w-full block text-[9px] sm:text-xs md:text-sm text-center font-semibold">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
