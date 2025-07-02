"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HomeIcon, BriefcaseIcon, UserIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "#home", icon: HomeIcon },
  { name: "About", href: "#about", icon: UserIcon },
   { name: "Projects", href: "#projects", icon: BriefcaseIcon },
  { name: "Contact", href: "#contact", icon: EnvelopeIcon },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={clsx(
        "fixed top-0 left-0 w-full z-40 backdrop-blur-lg",
        "bg-black/70 border-b border-white/10 shadow-xl"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between font-mono">
        {/* Name/Brand */}
        <span className="text-white text-lg md:text-xl font-mono font-semibold tracking-widest select-none">
          Abieyuwa Imina
        </span>
        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-1 justify-end gap-10 items-center">
          {navLinks.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              <motion.a
                href={href}
                className="flex items-center gap-2 text-white text-base font-medium group relative py-1 px-2 transition"
                whileHover={{
                  scale: 1.08,
                  transition: { type: "spring", stiffness: 350, damping: 18 },
                }}
                tabIndex={0}
              >
                <Icon className="h-5 w-5 opacity-80" />
                <span className="tracking-wide">{name}</span>
                {/* Underline animation */}
                <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-white/80 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </motion.a>
            </li>
          ))}
        </ul>
        {/* Hamburger Button */}
        <button
          className="md:hidden text-white ml-2 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </div>
      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
          >
            <motion.ul
              className={clsx(
                "flex flex-col gap-2 px-7 pt-3 pb-6 bg-black/95 font-mono rounded-b-2xl border-x border-b border-white/10 shadow-xl"
              )}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navLinks.map(({ name, href, icon: Icon }) => (
                <li key={name}>
                  <motion.a
                    href={href}
                    className="flex items-center gap-3 text-white text-lg font-medium py-2 px-2 rounded-lg group relative transition"
                    onClick={() => setOpen(false)}
                    whileHover={{
                      scale: 1.06,
                      transition: { type: "spring", stiffness: 350, damping: 20 },
                    }}
                    tabIndex={0}
                  >
                    <Icon className="h-6 w-6 opacity-80" />
                    <span className="tracking-wide">{name}</span>
                    <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-white/80 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                  </motion.a>
                </li>
              ))}
              <span className="block text-white text-center font-mono font-semibold tracking-widest pt-4 pb-2 opacity-80 select-none">
                Abieyuwa Imina
              </span>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}