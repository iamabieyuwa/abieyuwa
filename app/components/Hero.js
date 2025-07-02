"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <section id="home"
      className="
        relative flex flex-col
        lg:flex-row
        items-center
        justify-between
        min-h-screen
        px-4 sm:px-8 md:px-12 lg:px-16
        bg-black overflow-hidden
        pt-8 md:pt-8
        gap-0
      "
    >
      {/* Animated Background Bubbles */}
      <motion.div
        className="absolute left-1/3 top-1/4 w-[340px] h-[340px] sm:w-[500px] sm:h-[500px]  md:w-[600px] md:h-[600px] -z-10 pointer-events-none"
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: [1, 1.08, 1], opacity: [1, 1, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      >
        <svg width="100%" height="100%" viewBox="0 0 600 600" fill="none">
          <ellipse cx="300" cy="300" rx="260" ry="240" fill="white" fillOpacity="0.16" />
          <ellipse cx="370" cy="320" rx="120" ry="100" fill="white" fillOpacity="0.23" />
          <ellipse cx="230" cy="250" rx="80" ry="60" fill="white" fillOpacity="0.26" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute right-1/5 bottom-0 w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] md:w-[320px] md:h-[320px] blur-lg -z-10 pointer-events-none"
        initial={{ scale: 1, opacity: 0.6 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      >
        <svg width="100%" height="100%" viewBox="0 0 320 320" fill="none">
          <ellipse cx="160" cy="160" rx="120" ry="100" fill="white" fillOpacity="0.14" />
        </svg>
      </motion.div>

      {/* Hero Image - on top for mobile/tablet, right for desktop */}
      <motion.div
        initial={{ opacity: 0, y: -40, x: 0 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="
          flex flex-col items-center justify-center
          w-full
          mt-16 sm:mt-20 md:mt-24 lg:mt-0
          mb-0
          lg:mb-0
          lg:w-1/2
          order-first
          lg:order-last
          lg:items-end
          lg:pr-[8vw]
          
        "
      >
        <motion.img
          src="/me1.png"
          alt="Abieyuwa"
          className="
            w-40 h-40
            sm:w-56 sm:h-56 
            md:w-64 md:h-64
            lg:w-80 lg:h-80
            rounded-2xl md:rounded-3xl object-cover shadow-2xl border-4 border-white/10
          "
          whileHover={{ scale: 1.04, rotate: 2 }}
          transition={{ type: "spring", stiffness: 220 }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="
          flex-1 flex flex-col items-center
          lg:items-start
          justify-center z-10
          w-full
          max-w-2xl
          mx-auto
          lg:mx-0
          text-center
          lg:text-left
          mt-0
        "
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight drop-shadow-lg">
          Hello, I am{" "}
          <span className="inline-block underline underline-offset-8 decoration-white/40">
            Abieyuwa
          </span>
        </h1>
        <h2 className="text-lg sm:text-2xl md:text-3xl font-mono text-white mb-4 min-h-[1.5em]">
          <span className="pr-2">a</span>
          <span className="inline-block text-white">
            <Typewriter
              words={[
                "Frontend Developer.",
                "Programmer.",
                "UI/UX Designer."
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1800}
            />
          </span>
        </h2>
        <p className="text-white/80 mt-1 mb-3 max-w-xl text-base md:text-lg">
          I build modern, performant web apps with React and Next.js. Let's craft something impactful together.
        </p>
        <p className="text-white/60 mb-7 max-w-xl text-sm md:text-base">
          With a keen eye for design and a passion for user experience, I transform ideas into sleek, responsive interfaces. My expertise spans building scalable frontends, collaborating with cross-functional teams, and delivering projects that not only look great but also work seamlessly across devices. From landing pages to dashboards, I thrive on clean code, creative challenges, and bringing brands to life on the web.
        </p>
        {/* Buttons */}
        <div className="w-full flex flex-col sm:flex-row md:justify-center lg:justify-start justify-center items-center gap-4 mb-1">
          <a
            href="#projects"
            data-aos="fade-up"
            data-aos-delay="100"
            className="relative w-full sm:w-auto px-8 py-3 border-2 border-white text-black bg-white font-bold rounded-md uppercase tracking-wide text-center transition-all duration-150 hover:bg-black hover:text-white hover:border-white focus:outline-none focus:ring-2 focus:ring-white active:bg-neutral-900 active:text-white animate-pulse-border shadow-sm"
          >
            See My Work
          </a>
          <a
            href="#contact"
            data-aos="fade-up"
            data-aos-delay="200"
            className="relative w-full sm:w-auto px-8 py-3 border-2 border-white text-white bg-black font-bold rounded-md uppercase tracking-wide text-center transition-all duration-150 hover:bg-white hover:text-black hover:border-black focus:outline-none focus:ring-2 focus:ring-white active:bg-neutral-200 active:text-black animate-pulse-border shadow-sm"
          >
            Contact
          </a>
        </div>
        <style jsx>{`
          @keyframes pulseBorder {
            0% {
              box-shadow: 0 0 0 0 rgba(255,255,255,0.5), 0 0 0 0 rgba(0,0,0,0.5);
            }
            50% {
              box-shadow: 0 0 0 4px rgba(255,255,255,0.12), 0 0 0 8px rgba(0,0,0,0.07);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(255,255,255,0.5), 0 0 0 0 rgba(0,0,0,0.5);
            }
          }
          .animate-pulse-border {
            animation: pulseBorder 2s infinite;
          }
        `}</style>
      </motion.div>
    </section>
  );
}