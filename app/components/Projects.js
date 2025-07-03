"use client";
import { useEffect, useState, useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Airbnb from './images/Airbnb.png';
import Hulu from './images/Hulu.png';
import Portfolio from './images/Portfolio.png';
import TicTacToe from './images/TicTacToe.jpeg';
import Investment from './images/Investment.jpeg';
import Amazon from './images/Amazon.jpg';
import Dozewell from './images/Dozewell.jpg';
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import Image from "next/image";

const projects = [
  {
    name: "Airbnb Clone (Frontend Only)",
    description:
      "A responsive Airbnb homepage clone built with React and CSS. Features modern styled cards and a calendar attribute.",
    tags: ["React", "CSS", "Frontend"],
    image: Airbnb,
    github: "#",
    demo: "https://airbnb-cl0ne.web.app/",
    githubDisabled: true
  },
  {
    name: "Hulu Clone (Movie API)",
    description:
      "A Hulu clone with a movie search powered by a public API. Browse or search films instantly in a smooth React and CSS interface.",
    tags: ["React", "CSS", "Movie API", "Search"],
    image: Hulu,
    github: "#",
    demo: "https://hulu-cl0ne.web.app/",
    githubDisabled: true
  },
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio site built in React and CSS. Responsive, animated, and designed for clean presentation of projects and skills.",
    tags: ["React", "CSS", "Portfolio"],
    image: Portfolio,
    github: "#",
    demo: "https://react-portfolio001.web.app/",
    githubDisabled: true
  },
  {
    name: "Tic Tac Toe Game",
    description:
      "A modern Tic Tac Toe game using React and Tailwind CSS. Play against a friend with a minimalist, animated interface.",
    tags: ["React", "Tailwind", "Game"],
    image: TicTacToe,
    github: "https://github.com/iamabieyuwa/tic-tac-toe",
    demo: "https://tic-tac-toe-pink-five.vercel.app/"
  },
  {
    name: "Investment Calculator",
    description:
      "Calculate returns and visualize growth with this React and Tailwind app. Adjust inputs and see instant results and graphs.",
    tags: ["React", "Tailwind"],
    image: Investment,
    github: "https://github.com/iamabieyuwa/investment-app",
    demo: "https://investment-app-chi.vercel.app/"
  },
  {
    name: "Amazon Clone (Firebase)",
    description:
      "An Amazon.com clone with React, CSS, and Firebase login. It features product listings, shopping cart, and secure authentication.",
    tags: ["React", "CSS", "Firebase", "Authentication"],
    image: Amazon,
    github: "#",
    demo: "https://challenge-8404d.web.app/",
    githubDisabled: true
  },
  {
    name: "Dozewell Sleep Management App",
    description:
      "A modern sleep management app built as a frontend intern. Features charts, routines, and a calming UI for better sleep.",
    tags: ["Frontend", "React", "Sleep"],
    image: Dozewell,
    github: "#",
    demo: "https://dozewell.com.ng",
    githubDisabled: true
  }
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, offset: 100 });
  }, []);

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Responsive page count for custom dots
  const getPageCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return Math.ceil(projects.length / 3);
      if (window.innerWidth >= 640) return Math.ceil(projects.length / 1);
    }
    return Math.ceil(projects.length / 1);
  };
  const [pageCount, setPageCount] = useState(getPageCount());
  useEffect(() => {
    const handleResize = () => setPageCount(getPageCount());
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [projects]);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.pagination?.render();
      swiperRef.current.swiper.pagination?.update();
    }
  });

  return (
    <section
      id="projects"
      className="
        relative min-h-screen w-full 
        px-2 sm:px-4 md:px-8 lg:px-12 xl:px-0 
        pt-20 pb-20 
        bg-gradient-to-b from-black via-zinc-950 to-black 
        scroll-mt-20
        font-poppins
        box-border
        overflow-x-hidden
      "
    >

      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        <h2
          className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 tracking-tight underline underline-offset-8 decoration-white/20 text-center font-poppins"
          data-aos="fade-up"
        >
          Projects
        </h2>
        <p
          className="text-white/70 text-base sm:text-lg md:text-xl mb-10 text-center max-w-2xl font-poppins"
          data-aos="fade-up"
          data-aos-delay="70"
        >
          A selection of my favorite projects. Built with passion, polished with care, and always focused on user experience and performance.
        </p>

        {/* Swiper Carousel */}
        <div className="w-full relative max-w-full overflow-x-hidden">
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
            onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
            pagination={{
              clickable: true,
              el: '.projects-swiper-pagination',
              renderCustom: (_swiper, _current, _total) => {
                let dots = [];
                for (let i = 0; i < pageCount; i++) {
                  dots.push(
                    `<span class="projects-custom-dot${i === (Math.floor(activeIndex / 3)) ? " projects-custom-dot-active" : ""}" data-index="${i}"></span>`
                  );
                }
                return dots.join("");
              },
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="!pb-12"
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={project.name}>
                <motion.div
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
                  }}
                  className="
                    project-card
                    group relative flex flex-col
                    bg-zinc-900/90 border border-zinc-800/70
                    rounded-2xl shadow-xl
                    overflow-hidden
                    transition-all duration-300
                    hover:border-white/30 hover:shadow-2xl
                    cursor-pointer
                    w-full
                    max-w-[420px]
                    mx-auto
                  "
                >
                  {/* Project Image */}
                  <div className="relative w-full h-44 sm:h-44 md:h-48 bg-zinc-800 flex-shrink-0">
                    {typeof project.image === "string" ? (
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                        draggable="false"
                      />
                    ) : (
                      <Image
                        src={project.image.src}
                        alt={project.name}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                        draggable="false"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-80 pointer-events-none" />
                  </div>

                  {/* Project Content */}
                  <div className="flex flex-col flex-1 px-4 py-5 gap-2 justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 font-poppins">{project.name}</h3>
                      <p className="text-white/80 text-sm sm:text-base mb-2 font-poppins">{project.description}</p>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-800 text-white/80 border border-zinc-700 font-poppins"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 items-center">
                        {/* GitHub Button with Disability */}
                        <button
                          disabled={project.githubDisabled}
                          onClick={() => {
                            if (!project.githubDisabled && project.github && project.github !== "#") {
                              window.open(project.github, "_blank");
                            }
                          }}
                          className={`
                            flex items-center gap-1 px-3 py-1.5 rounded-md bg-zinc-800/80 text-white/90 text-[15px] font-semibold border border-zinc-700
                            hover:bg-zinc-700 hover:text-white hover:border-white/70 transition-all duration-150
                            shadow
                            ${project.githubDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
                            font-poppins
                          `}
                          title={project.githubDisabled ? "GitHub repo unavailable for this project" : "View code on GitHub"}
                          tabIndex={project.githubDisabled ? -1 : 0}
                        >
                          <FaGithub className="text-lg" />
                          <span>Code</span>
                        </button>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex items-center gap-1 px-3 py-1.5 rounded-md bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500 text-white text-[15px] font-semibold
                            hover:from-fuchsia-600 hover:to-rose-600 transition-all duration-150
                            shadow
                            font-poppins
                          "
                        >
                          <FaExternalLinkAlt className="text-sm" />
                          <span>Live</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Manual pagination div */}
          <div className="projects-swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}