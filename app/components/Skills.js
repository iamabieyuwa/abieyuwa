"use client";
import { FaReact, FaCss3Alt, FaJs, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiFigma, SiRedux } from "react-icons/si";

export default function Skills() {
  const icons = [
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
    { icon: <FaJs className="text-yellow-500" />, name: "JavaScript" },
    { icon: <FaReact className="text-cyan-400" />, name: "React" },
    { icon: <SiNextdotjs className="text-black" />, name: "Next.js" },
    { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind" },
    { icon: <SiFirebase className="text-orange-400" />, name: "Firebase" },
    { icon: <SiRedux className="text-purple-600" />, name: "Redux" },
    { icon: <FaGitAlt className="text-red-600" />, name: "Git" },
    { icon: <SiFigma className="text-pink-500" />, name: "Figma" },
  ];

  return (
    <div className="overflow-hidden py-8 w-full">
      <div className="whitespace-nowrap animate-scroll flex gap-8 px-4">
        {[...icons, ...icons].map((item, idx) => (
          <div
            key={idx}
            className="group relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-3xl sm:text-4xl bg-white shadow-md rounded-full border"
          >
            {item.icon}
            {/* Tooltip */}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Scroll Animation */}
     <style jsx>{`
  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .animate-scroll {
    animation: scroll 10s linear infinite; /* ← changed from 25s to 10s */
  }
`}</style>

    </div>
  );
}
