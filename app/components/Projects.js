"use client";
import { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import Image from "next/image";
import Airbnb from './images/Airbnb.png';
import Hulu from './images/Hulu.png';
import Portfolio from './images/Portfolio.png';
import TicTacToe from './images/TicTacToe.jpeg';
import Investment from './images/Investment.jpeg';
import Amazon from './images/Amazon.jpg';
import Dozewell from './images/Dozewell.jpg';

const projects = [
  { name: "Airbnb Clone", desc: "Airbnb homepage clone using React & CSS.", tags: ["React", "CSS"], image: Airbnb, demo: "https://airbnb-cl0ne.web.app/", github: "#", liveDisabled: false, githubDisabled: true },
  { name: "Hulu Clone", desc: "Hulu movie search app using public API.", tags: ["React", "API"], image: Hulu, demo: "https://hulu-cl0ne.web.app/", github: "#", liveDisabled: false, githubDisabled: true },
  { name: "Portfolio Site", desc: "Personal portfolio built with React.", tags: ["React", "Portfolio"], image: Portfolio, demo: "https://react-portfolio001.web.app/", github: "#", liveDisabled: false, githubDisabled: true },
  { name: "Tic Tac Toe", desc: "Tic Tac Toe game with React & Tailwind.", tags: ["React", "Tailwind"], image: TicTacToe, demo: "https://tic-tac-toe-pink-five.vercel.app/", github: "https://github.com/iamabieyuwa/tic-tac-toe", liveDisabled: false, githubDisabled: false },
  { name: "Investment App", desc: "Investment calculator with React & Tailwind.", tags: ["React", "Finance"], image: Investment, demo: "https://investment-app-chi.vercel.app/", github: "https://github.com/iamabieyuwa/investment-app", liveDisabled: false, githubDisabled: false },
  { name: "Amazon Clone", desc: "Amazon clone with Firebase login.", tags: ["React", "Firebase"], image: Amazon, demo: "https://challenge-8404d.web.app/", github: "#", liveDisabled: false, githubDisabled: true },
  { name: "Dozewell Sleep App", desc: "Sleep tracking app with calming UI.", tags: ["React", "Sleep"], image: Dozewell, demo: "https://dozewell.com.ng", github: "#", liveDisabled: false, githubDisabled: true },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, offset: 100 });
  }, []);

  return (
    <section id="projects" className=" relative pb-35 px-4 pt-18 bg-gradient-to-b from-black via-zinc-950 to-black text-white font-poppins">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 underline underline-offset-8 decoration-pink-400/40" data-aos="fade-up">
          Projects
        </h2>
        <p className="text-white/80 text-sm sm:text-base mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          A collection of projects crafted with passion — focused on performance, design, and usability.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="200">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.name + idx}
            whileHover={{ scale: 1.03 }}
            className="flex flex-col bg-zinc-900/80 border border-zinc-800 rounded-xl shadow-lg overflow-hidden transition-all"
          >
            <Image
              src={proj.image}
              alt={`${proj.name} screenshot`}
              className="w-full h-28 sm:h-32 object-cover"
              width={400}
              height={300}
              priority={idx < 2}  // SEO + speed: prioritize first images
            />
            <div className="p-3 flex-1 flex flex-col justify-between">
              <h3 className="text-sm font-bold text-white mb-1">{proj.name}</h3>
              <p className="text-xs text-white/80 mb-2">{proj.desc}</p>
              <div className="flex flex-wrap gap-1 mb-2">
                {proj.tags.map(tag => (
                  <span key={tag} className="bg-zinc-800 text-white text-[10px] px-2 py-0.5 rounded-full border border-zinc-700">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-800 text-white text-xs border border-zinc-700 hover:bg-zinc-700 transition-all ${
                    proj.githubDisabled ? "pointer-events-none opacity-50" : ""
                  }`}
                  aria-label={`View ${proj.name} source code on GitHub`}
                  tabIndex={proj.githubDisabled ? -1 : undefined}
                >
                  <FaGithub />
                  Code
                </a>
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 px-2 py-1 rounded-md bg-gradient-to-r from-fuchsia-500 to-rose-500 text-white text-xs hover:from-fuchsia-600 hover:to-rose-600 transition-all ${
                    proj.liveDisabled ? "pointer-events-none opacity-50" : ""
                  }`}
                  aria-label={`View ${proj.name} live demo`}
                  tabIndex={proj.liveDisabled ? -1 : undefined}
                >
                  <FaExternalLinkAlt />
                  Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}