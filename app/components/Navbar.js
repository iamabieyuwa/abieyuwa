"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HomeIcon,
  BriefcaseIcon,
  UserIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "#home", icon: HomeIcon },
  { name: "About", href: "#about", icon: UserIcon },
  { name: "Projects", href: "#projects", icon: BriefcaseIcon },
  { name: "Contact", href: "#contact", icon: EnvelopeIcon },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(navLinks[0].href);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80;
      let currentActive = navLinks[0].href;

      for (let i = 0; i < navLinks.length; i++) {
        const section = document.querySelector(navLinks[i].href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentActive = navLinks[i].href;
            break;
          }
        }
      }
      setActive(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
          px-4 sm:px-6 py-2 sm:py-3
          bg-gradient-to-r from-white via-pink-100 to-indigo-100 
          border border-white/40 shadow-lg backdrop-blur-lg
          rounded-full w-[90%] max-w-[500px] flex items-center justify-between"
      >
        {/* Desktop Nav */}
        <ul className="hidden sm:flex items-center gap-4">
          {navLinks.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              <a
                href={href}
                className={clsx(
                  "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition",
                  active === href
                    ? "bg-pink-500 text-white"
                    : "text-gray-700 hover:bg-pink-100"
                )}
              >
                <Icon className="h-4 w-4" />
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="sm:hidden ml-auto text-gray-800 text-xl p-2 rounded-full hover:bg-gray-100"
          aria-label="Toggle Menu"
        >
          {open ? <MdClose size={24} /> : <HiOutlineMenuAlt3 size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40
              bg-white shadow-xl rounded-2xl py-5 px-6 flex flex-col 
              items-stretch gap-4 w-[85%] max-w-[280px] sm:hidden
              border border-gray-100 backdrop-blur-md"
          >
            {navLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-800 
                hover:bg-pink-100 hover:text-pink-600 transition-all duration-200"
              >
                <Icon className="h-5 w-5" />
                <span className="text-base font-medium">{name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
