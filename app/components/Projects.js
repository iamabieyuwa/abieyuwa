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

// Example project data
const projects = [
  {
    name: "E-commerce Store",
    description:
      "A full-featured e-commerce store with product search, cart, checkout, and admin dashboard. Powered by Next.js, Stripe, MongoDB, and Chakra UI.",
    tags: ["Next.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    github: "#",
    demo: "#"
  },
  {
    name: "Dev Blog Platform",
    description:
      "A beautifully designed blogging platform for developers. Features markdown support, syntax highlighting, authentication, and custom themes. Built with Next.js, Prisma, and PostgreSQL.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Markdown"],
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    github: "#",
    demo: "#"
  },
  {
    name: "Weather Dashboard",
    description:
      "An interactive weather dashboard that provides real-time weather data, forecasts, and beautiful weather-based backgrounds using the OpenWeather API and Chart.js.",
    tags: ["React", "Chart.js", "OpenWeather API"],
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3f77?auto=format&fit=crop&w=600&q=80",
    github: "#",
    demo: "#"
  },
  {
    name: "Social Media App",
    description:
      "A real-time social media platform with chat, notifications, posts, likes, and comments. Built using React Native, Firebase, and Socket.io for lightning-fast updates.",
    tags: ["React Native", "Firebase", "Socket.io"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    github: "#",
    demo: "#"
  },
  {
    name: "Crypto Tracker",
    description:
      "A cryptocurrency price tracker with beautiful charts, historical data, and portfolio management. Built with Vue.js, CoinGecko API, and Chart.js.",
    tags: ["Vue.js", "Chart.js", "CoinGecko API"],
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    github: "#",
    demo: "#"
  },
  {
    name: "Recipe Finder",
    description:
      "A recipe search and meal planner using the Spoonacular API. Powerful filters for cuisine, health, and prep time. Built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "Tailwind", "Spoonacular API"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    github: "#",
    demo: "#"
  },
  {
    name: "Personal Budget App",
    description:
      "A budgeting app for tracking income, expenses, and savings. Offers charts, export, and multi-currency support. Built in React and Firebase.",
    tags: ["React", "Firebase", "Finance"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    github: "#",
    demo: "#"
  },
  {
    name: "Task Manager Pro",
    description:
      "Advanced task manager with kanban board, priorities, and reminders. Built using Angular, Express, and MongoDB.",
    tags: ["Angular", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    github: "#",
    demo: "#"
  },
  {
    name: "Fitness Tracker",
    description:
      "A fitness and workout tracker with calendar, statistics, and progress visualization. Built with React, Redux, and D3.js.",
    tags: ["React", "Redux", "D3.js"],
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3f77?auto=format&fit=crop&w=600&q=80",
    github: "#",
    demo: "#"
  },
  {
    name: "Portfolio Website",
    description:
      "A modern, responsive portfolio site built with Next.js, Tailwind CSS, and Framer Motion. Features interactive animations, dark mode, and blazing-fast performance.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, offset: 100 });
  }, []);

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Dots should match the number of "pages" (groups of slides)
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
  }, [projects.length]);

  // Swiper may need a slight delay to link to the pagination div
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.pagination?.render();
      swiperRef.current.swiper.pagination?.update();
    }
  });

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full px-2 sm:px-6 md:px-16 pt-6 pb-20 bg-gradient-to-b from-black via-zinc-950 to-black scroll-mt-20"
    >
      {/* Fancy background */}
      <motion.div
        className="absolute left-1/2 top-0 w-[600px] h-[340px] -translate-x-1/2 -z-10 pointer-events-none"
        initial={{ opacity: 0.4, scale: 1 }}
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.04, 1] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      >
        <svg width="100%" height="100%" viewBox="0 0 600 340" fill="none">
          <ellipse
            cx="300"
            cy="170"
            rx="290"
            ry="110"
            fill="white"
            fillOpacity="0.08"
          />
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2
  className="text-white text-3xl md:text-4xl font-extrabold mb-3 tracking-tight underline underline-offset-8 decoration-white/20 text-center"
  data-aos="fade-up"
>
  Projects
</h2>
        <p
          className="text-white/70 text-lg md:text-xl mb-10 text-center max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="70"
        >
          A selection of my favorite projects. Built with passion, polished with care, and always focused on user experience and performance.
        </p>

        {/* Swiper Carousel */}
        <div className="w-full relative">
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
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
                  "
                >
                  {/* Project Image */}
                  <div className="relative w-full h-48 sm:h-44 md:h-48 bg-zinc-800 flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                      draggable="false"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-80 pointer-events-none" />
                  </div>

                  {/* Project Content */}
                  <div className="flex flex-col flex-1 px-5 py-5 gap-2 justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                      <p className="text-white/80 text-base mb-2">{project.description}</p>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-800 text-white/80 border border-zinc-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 items-center">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex items-center gap-1 px-3 py-1.5 rounded-md bg-zinc-800/80 text-white/90 text-[15px] font-semibold border border-zinc-700
                            hover:bg-zinc-700 hover:text-white hover:border-white/70 transition-all duration-150
                            shadow
                          "
                        >
                          <FaGithub className="text-lg" />
                          <span>Code</span>
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex items-center gap-1 px-3 py-1.5 rounded-md bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500 text-white text-[15px] font-semibold
                            hover:from-fuchsia-600 hover:to-rose-600 transition-all duration-150
                            shadow"
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