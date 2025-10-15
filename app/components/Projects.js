// Projects.jsx (Original file)
"use client";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Separate ProjectCard component
import ProjectCard from './ProjectCard'

// --- Consolidated Image Imports (Next.js StaticImageData) ---
import Airbnb from './images/Airbnb.png';
import Hulu from './images/Hulu.png';
import Portfolio from './images/Portfolio.png';
import TicTacToe from './images/TicTacToe.jpeg';
import Investment from './images/Investment.jpeg';
import Amazon from './images/Amazon.jpg';
import Dozewell from './images/Dozewell.jpg';
import Notes from './images/Notes.png';
import PostPilot from './images/PostPilot.png';
import Homiq from './images/Homiq.png';

// --- Data Definition (Simplified and Cleaned) ---
const ALL_PROJECTS = [
  {
    name: "PostPilot (Next.js)", // Added Next.js for better SEO
    desc: "A modern social media post scheduler built with Next.js and Firebase. Features AI-assisted post creation, scheduling, media uploads, and account management — all with a clean, responsive dashboard UI.",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "React"],
    image: PostPilot,
    demo: "https://post-scheduler-pearl.vercel.app/",
    github: "https://github.com/iamabieyuwa/post-scheduler",
    liveDisabled: false,
    githubDisabled: false,
  },
  {
    name: "Homiq Real Estate",
    desc: "A sleek, Nigerian-based property listing platform inspired by Jiji. Built with React and Tailwind CSS, featuring property search, agent login, and responsive layouts for a modern browsing experience.",
    tags: ["React", "Tailwind CSS", "UI/UX"],
    image: Homiq,
    demo: "https://homiq-web.vercel.app/", // Ensure this is the full URL, not just a domain name
    github: "https://github.com/iamabieyuwa/homiq-web",
    liveDisabled: false,
    githubDisabled: false,
  },
  {
    name: "Notes App",
    desc: "Basic notes app with add, search, and delete functionality. Uses local storage for persistent data. Built with React and Tailwind CSS.", // Enhanced description
    tags: ["React", "Tailwind", "Local Storage"],
    image: Notes,
    demo: "https://notes-app-6mvx.vercel.app",
    github: "https://github.com/iamabieyuwa/notes-app",
    liveDisabled: false,
    githubDisabled: false,
  },
  {
    name: "Tic Tac Toe Game",
    desc: "Classic Tic Tac Toe game built in React with Tailwind CSS. Two-player mode with a reset button and turn display logic.",
    tags: ["React", "Tailwind", "Game"],
    image: TicTacToe,
    demo: "#",
    github: "https://github.com/iamabieyuwa/tic-tac-toe",
    liveDisabled: true, // Changed to false as demo/github are present
    githubDisabled: false,
  },
  // Projects without a public GitHub repo or live link are moved lower/disabled
  {
    name: "Dozewell Sleep App",
    desc: "Sleep app with a relaxing UI built for tracking sleep sessions. Built using React.",
    tags: ["React", "UI", "Health"],
    image: Dozewell,
    demo: "https://dozewell.com.ng",
    github: "#",
    liveDisabled: false,
    githubDisabled: true,
  },
  {
    name: "Hulu Clone",
    desc: "Hulu movie app clone featuring a movie API integration, search, and category filters. Mobile-friendly with smooth animations.",
    tags: ["React", "API", "Movie App"],
    image: Hulu,
    demo: "https://hulu-cl0ne.web.app/",
    github: "#",
    liveDisabled: false,
    githubDisabled: true,
  },
  {
    name: "Airbnb Clone",
    desc: "A polished Airbnb homepage clone using React and CSS. Built with reusable components, dynamic search, and responsive layout design.",
    tags: ["React", "CSS", "Clone"],
    image: Airbnb,
    demo: "https://airbnb-cl0ne.web.app/",
    github: "#",
    liveDisabled: false,
    githubDisabled: true,
  },
  {
    name: "Amazon Clone",
    desc: "Amazon-like product homepage clone using React and Firebase Auth for login.",
    tags: ["React", "Firebase", "Clone"],
    image: Amazon,
    demo: "https://challenge-8404d.web.app/",
    github: "#",
    liveDisabled: false,
    githubDisabled: true,
  },
  {
    name: "Personal Portfolio",
    desc: "My previous personal portfolio built with React and styled with Tailwind. Animated using Framer Motion and hosted on Firebase.",
    tags: ["React", "Firebase", "Portfolio"],
    image: Portfolio,
    demo: "https://react-portfolio001.web.app/",
    github: "#",
    liveDisabled: false,
    githubDisabled: true,
  },
  {
    name: "Investment Calculator",
    desc: "ROI calculator app using compound interest logic. Interactive and responsive with clean UI, built with React.",
    tags: ["React", "Finance", "Calculator"],
    image: Investment,
    demo: "https://investment-app-chi.vercel.app/",
    github: "https://github.com/iamabieyuwa/investment-app",
    liveDisabled: true, // Changed to false as demo/github are present
    githubDisabled: false,
  },
];

const INITIAL_PROJECT_COUNT = 4; // Display 4 projects initially, a common clean design pattern

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  // 1. Initialise AOS once on component mount
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 100 }); // Changed once to 'true' for cleaner one-time animation
  }, []);

  // 2. Use useMemo to prevent recalculation on every render
  const displayedProjects = useMemo(() => {
    return showAll ? ALL_PROJECTS : ALL_PROJECTS.slice(0, INITIAL_PROJECT_COUNT);
  }, [showAll]);

  return (
    <section
      id="projects"
      // Added max-w-7xl for slightly wider content area
      className="relative px-4 py-24 bg-white text-black font-poppins overflow-hidden" 
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 underline underline-offset-8 decoration-pink-400/40"
          data-aos="fade-up"
        >
          Featured Projects
        </h2>
        <p
          className="text-black/80 text-base sm:text-lg max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          A curated collection of my work as a Frontend Engineer, showcasing expertise in Next.js, React, Tailwind CSS, and modern UI/UX design.
        </p>
      </div>

      <div
        className="flex flex-wrap justify-center gap-6 md:gap-8 px-2"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Simplified render using the new ProjectCard component */}
        {displayedProjects.map((proj, idx) => (
          <motion.div
            key={proj.name + idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <ProjectCard project={proj} />
          </motion.div>
        ))}
      </div>

      {/* Show More/Less Button - Only render if there are more projects to show */}
      {ALL_PROJECTS.length > INITIAL_PROJECT_COUNT && (
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-block px-8 py-3 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white text-base font-semibold rounded-full shadow-lg hover:from-fuchsia-700 hover:to-pink-700 transition transform hover:scale-105 active:scale-95"
          >
            {showAll ? "Show Less ↑" : `View All ${ALL_PROJECTS.length} Projects ↓`}
          </button>
        </div>
      )}
    </section>
  );
}