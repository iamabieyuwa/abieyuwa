import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiX } from "react-icons/si";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

// Navigation Links
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

// Social Icons (Updated X handle to match the metadata provided earlier)
const socials = [
  {
    href: "mailto:heisyuwa@gmail.com",
    icon: <FaEnvelope />,
    aria: "Email Abieyuwa Imina",
  },
  {
    href: "https://linkedin.com/in/abieyuwa-imina",
    icon: <FaLinkedin />,
    aria: "LinkedIn Profile",
  },
  {
    href: "https://x.com/iamabieyuwa", // Updated X/Twitter handle
    icon: <SiX />,
    aria: "X (Twitter) Profile",
  },
  {
    href: "https://github.com/iamabieyuwa",
    icon: <FaGithub />,
    aria: "GitHub Profile",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-4 py-10 bg-gray-900 font-poppins text-white">
      {/* Main content wrapper - The 'Glassy' Box */}
      <div
        className="
          max-w-7xl mx-auto
          bg-zinc-900/70 backdrop-blur-md border border-zinc-800/80
          rounded-2xl shadow-2xl shadow-black/50
          p-6 sm:p-8 md:p-10
          flex flex-col gap-8 md:gap-10
        "
      >
        {/* 1. Logo/Name (Top Left) and Socials (Top Right) */}
        <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
          {/* Logo/Name - Uses Gradient for visual pop */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-wider">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-400">
                Abieyuwa Imina
              </span>
            </h3>
            <p className="text-sm text-zinc-400 mt-1">Frontend Engineer & Designer</p>
          </div>

          {/* Social Icons - Uses Gradient Hover */}
          <div className="flex justify-center md:justify-end gap-3 sm:gap-4">
            {socials.map(({ href, icon, aria }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={aria}
                className="
                  text-zinc-400 text-xl sm:text-2xl rounded-full p-3 
                  bg-zinc-800/60 border border-zinc-700
                  transition-all duration-300 ease-in-out
                  hover:bg-gradient-to-r hover:from-pink-500 hover:to-fuchsia-500
                  hover:text-white hover:scale-110 shadow-md
                "
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-zinc-800/80"></div>

        {/* 2. Navigation Links & Copyright (Bottom Row) */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          {/* Navigation */}
          <nav className="flex gap-4 sm:gap-6 md:gap-8 flex-wrap justify-center md:justify-start">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-300 text-sm sm:text-base font-medium transition-colors duration-200 hover:text-pink-400 hover:underline underline-offset-4 focus:text-pink-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-center md:text-right text-zinc-500 text-xs sm:text-sm mt-4 md:mt-0">
            © {currentYear} Abieyuwa Imina. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}