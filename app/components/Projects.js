"use client";
import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import Image from "next/image";

// Images
import Airbnb from './images/Airbnb.png';
import Hulu from './images/Hulu.png';
import Portfolio from './images/Portfolio.png';
import TicTacToe from './images/TicTacToe.jpeg';
import Investment from './images/Investment.jpeg';
import Amazon from './images/Amazon.jpg';
import Dozewell from './images/Dozewell.jpg';
import Notes from './images/Notes.png';

const projects = [
  {
    name: "Airbnb Clone",
    desc: "A polished Airbnb homepage clone using React and CSS. Built with reusable components, dynamic search, and responsive layout design.",
    tags: ["React", "CSS"],
    image: Airbnb,
    demo: "https://airbnb-cl0ne.web.app/",
    github: "#",
    liveDisabled: false,
    githubDisabled: true,
  },
  {
    name: "Hulu Clone",
    desc: "Hulu movie app clone featuring a movie API integration, search, and category filters. Mobile-friendly with smooth animations.",
    tags: ["React", "API"],
    image: Hulu,
    demo: "https://hulu-cl0ne.web.app/",
    github: "#",
    liveDisabled: false,
    githubDisabled: true,
  },
  {
    name: "Portfolio Website",
    desc: "My personal portfolio built with React and styled with Tailwind. Animated using Framer Motion and hosted on Firebase.",
    tags: ["React", "Firebase"],
    image: Portfolio,
    demo: "https://react-portfolio001.web.app/",
    github: "#",
    liveDisabled: false,
    githubDisabled: true,
  },
  {
    name: "Tic Tac Toe Game",
    desc: "Classic Tic Tac Toe game built in React with Tailwind CSS. Two-player mode with a reset button and turn display logic.",
    tags: ["React", "Tailwind"],
    image: TicTacToe,
    demo: "https://tic-tac-toe-pink-five.vercel.app/",
    github: "https://github.com/iamabieyuwa/tic-tac-toe",
    liveDisabled: true,
    githubDisabled: false,
  },
  {
    name: "Investment App",
    desc: "ROI calculator app using compound interest. Interactive and responsive with clean UI.",
    tags: ["React", "Finance"],
    image: Investment,
    demo: "https://investment-app-chi.vercel.app/",
    github: "https://github.com/iamabieyuwa/investment-app",
    liveDisabled: true,
    githubDisabled: false,
  },
  {
    name: "Amazon Clone",
    desc: "Amazon-like product homepage clone using React and Firebase Auth for login.",
    tags: ["React", "Firebase"],
    image: Amazon,
    demo: "https://challenge-8404d.web.app/",
    github: "#",
    liveDisabled: false,
    githubDisabled: true,
  },
  {
    name: "Dozewell Sleep App",
    desc: "Sleep app with a relaxing UI built for tracking sleep sessions. Built using React.",
    tags: ["React", "UI"],
    image: Dozewell,
    demo: "https://dozewell.com.ng",
    github: "#",
    liveDisabled: false,
    githubDisabled: true,
  },
  {
    name: "Notes App",
    desc: "Basic notes app with add, search, and delete functionality. Uses local storage.",
    tags: ["React", "Tailwind"],
    image: Notes,
    demo: "https://notes-app-6mvx.vercel.app",
    github: "https://github.com/iamabieyuwa/notes-app",
    liveDisabled: false,
    githubDisabled: false,
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, once: false, offset: 100 });
  }, []);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative px-4 py-24 bg-white text-black font-poppins overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 underline underline-offset-8 decoration-pink-400/40"
          data-aos="fade-up"
        >
          Projects
        </h2>
        <p
          className="text-black/80 text-sm sm:text-base max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          A collection of frontend projects crafted with React, Firebase, Tailwind CSS, and modern design tools. These highlight my problem-solving and design thinking.
        </p>
      </div>

      <div
        className="flex flex-wrap justify-center gap-6 md:gap-8 px-2"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {displayedProjects.map((proj, idx) => (
          <motion.div
            key={proj.name + idx}
            whileHover={{ scale: 1.02 }}
            className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition-all w-[280px] sm:w-[300px] flex flex-col overflow-hidden"
          >
            <Image
              src={proj.image}
              alt={proj.name}
              width={400}
              height={200}
              className="w-full h-44 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-2">{proj.name}</h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-pink-100 text-pink-600 text-[11px] font-medium px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mt-auto">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium border border-gray-300 rounded-md hover:bg-gray-100 transition ${
                    proj.githubDisabled ? "pointer-events-none opacity-40" : ""
                  }`}
                >
                  <FaGithub />
                  Code
                </a>
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-pink-500 text-white rounded-md hover:bg-pink-600 transition ${
                    proj.liveDisabled ? "pointer-events-none opacity-40" : ""
                  }`}
                >
                  <FaExternalLinkAlt />
                  Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-12 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-block px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-md hover:from-fuchsia-600 hover:to-pink-600 transition"
        >
          {showAll ? "Show Less" : "View More Projects"}
        </button>
      </div>
    </section>
  );
}
