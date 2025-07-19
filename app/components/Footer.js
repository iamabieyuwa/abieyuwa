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

// Social Icons
const socials = [
  {
    href: "mailto:heisayuwa@gmail.com",
    icon: <FaEnvelope />,
    aria: "Email",
  },
  {
    href: "https://linkedin.com/in/abieyuwa-imina",
    icon: <FaLinkedin />,
    aria: "LinkedIn",
  },
  {
    href: "https://x.com/@abieyuwaimina",
    icon: <SiX />,
    aria: "X",
  },
  {
    href: "https://github.com/iamabieyuwa",
    icon: <FaGithub />,
    aria: "GitHub",
  },
];

export default function Footer() {
  return (
    <footer className="w-full px-4 py-7 bg-black font-poppins">
      <div
        className="
          max-w-7xl mx-auto
          flex flex-col
          md:gap-6
          md:items-center
          md:justify-center
          lg:flex-row
          lg:items-start
          lg:justify-between
          bg-zinc-900/80 backdrop-blur-md border border-zinc-800/80
          rounded-2xl shadow-lg
          px-4
          sm:px-8
          md:px-10
          py-5
        "
      >
        {/* Each section is stacked with breathing room on tablet, row on desktop */}
        <div className="w-full flex flex-col gap-4 md:gap-6 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
          {/* Left: Name & copyright */}
          <div className="flex items-center gap-3 text-white/80 text-sm sm:text-base md:text-lg tracking-wide justify-center lg:justify-start w-full lg:w-auto font-poppins">
            <span>© {new Date().getFullYear()}</span>
            <span className="italic font-normal tracking-tight">Abieyuwa Imina</span>
          </div>

          {/* Center: Navigation */}
          <nav className="flex gap-2 sm:gap-4 md:gap-7 flex-wrap justify-center w-full lg:w-auto font-poppins">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 text-sm sm:text-base font-medium px-2 py-1 rounded-md transition-all duration-150 hover:bg-zinc-800/70 hover:text-white focus:bg-zinc-800/80 font-poppins"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Socials */}
          <div className="flex gap-2 sm:gap-3 items-center justify-center w-full lg:w-auto font-poppins">
            {socials.map(({ href, icon, aria }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={aria}
                className="
                  text-white/80 text-lg sm:text-xl rounded-full p-2 
                  backdrop-blur-sm bg-zinc-800/60 border border-zinc-700
                  transition-all duration-150
                  hover:bg-zinc-700/80 hover:text-white hover:scale-110
                  focus:bg-zinc-700/90 focus:text-white
                  font-poppins
                "
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}