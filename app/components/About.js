"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaAccessibleIcon, FaGitAlt, FaJs, FaGithub, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaNpm, FaSass, FaGitlab, FaDatabase
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiFirebase, SiFigma, SiRedux, SiJest, SiExpress, SiMongodb, SiVercel, SiNetlify, SiPostman, SiWebpack
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

// List of tools unchanged
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
    // animate on navlink scroll
    const hash = window.location.hash;
    if (hash && document.querySelector(hash)) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, []);

  return (
    <section
      id="about"
      className="relative flex flex-col min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-65px)] px-2 sm:px-6 md:px-16 bg-black text-white overflow-hidden pt-24 pb-8 scroll-mt-20 font-poppins"
    >
      {/* Subtle background ellipse */}
      <motion.div
        className="absolute left-1/2 top-24 w-[320px] sm:w-[420px] h-[220px] sm:h-[320px] -translate-x-1/2 -z-10 pointer-events-none"
        initial={{ opacity: 0.7, scale: 1 }}
        animate={{ opacity: [0.7, 0.8, 0.7], scale: [1, 1.04, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      >
        <svg width="100%" height="100%" viewBox="0 0 340 340" fill="none">
          <ellipse
            cx="170"
            cy="170"
            rx="160"
            ry="120"
            fill="white"
            fillOpacity="0.07"
          />
        </svg>
      </motion.div>

      {/* About Text */}
      <div
        className="w-full flex flex-col items-center text-center max-w-3xl mx-auto px-4 py-10"
        data-aos="fade-up"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 tracking-tight underline underline-offset-8 decoration-pink-400/40 text-white font-poppins">
          About Me
        </h2>
        <p className="text-white font-semibold text-base sm:text-lg md:text-xl mb-3 tracking-wide font-poppins">
          I enjoy building intuitive, interactive digital experiences that make a difference.
        </p>
        <p className="text-white/90 text-sm sm:text-base md:text-lg mb-2 font-normal font-poppins">
          My name is Abieyuwa, a self-taught developer based in Benin, Edo State. With over 4 years of hands-on experience in web development, UI/UX design, and programming, I’m passionate about turning ideas into engaging products. I’m currently studying Computer Science, committed to continuous learning and growth.
        </p>
      </div>
      {/* Tools as grid: 2 per row on mobile, 3 per row on sm+, with padding and smaller card size */}
      <div className="w-full flex flex-col items-center">
        <div
          className="
            grid
            grid-cols-4
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
            gap-4
            mt-2
            justify-center
            min-h-[80px]
            px-2
          "
        >
          {tools.map((tool, idx) => (
            <div
              key={tool.name + idx}
              className={`
                flex flex-col items-center justify-center
                ${tool.color} ${tool.text}
                rounded-xl shadow-md font-semibold
                transition-all duration-300 hover:scale-105
                aspect-square
                w-[75px] h-[75px]
                sm:w-[92px] sm:h-[92px]
                md:w-[105px] md:h-[105px]
                px-2 py-2 md:px-4 md:py-4 text-center
                font-poppins
              `}
              data-aos="fade-up"
              data-aos-delay={idx * 40}
              style={{
                minHeight: "58px",
                maxWidth: "120px",
                backgroundClip: "padding-box",
                wordBreak: "break-word",
                whiteSpace: "normal"
              }}
            >
              <span className="mb-1 flex items-center justify-center w-full">{tool.icon}</span>
              <span className="w-full block text-[10px] sm:text-[12px] md:text-sm text-center font-semibold font-poppins">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}