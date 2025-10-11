// components/ProjectCard.jsx

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

// Define a type/interface for better clarity (optional, but good practice)
/**
 * @typedef {object} Project
 * @property {string} name
 * @property {string} desc
 * @property {string[]} tags
 * @property {import("next/image").StaticImageData} image
 * @property {string} demo
 * @property {string} github
 * @property {boolean} liveDisabled
 * @property {boolean} githubDisabled
 */

/**
 * @param {{ project: Project }} props
 */
const ProjectCard = ({ project }) => {
  // Destructuring for cleaner access
  const { name, desc, tags, image, demo, github, liveDisabled, githubDisabled } = project;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition-all w-[280px] sm:w-[300px] flex flex-col overflow-hidden"
    >
      {/* Next.js Image Component Best Practices */}
      <Image
        src={image}
        alt={`${name} project screenshot`} // Enhanced alt text for SEO
        placeholder="blur" // Good practice for better loading UX
        sizes="(max-width: 640px) 100vw, 300px" // Inform browser about image size on different screens
        className="w-full h-44 object-cover"
        // Since the image dimensions are determined by CSS, fill might be better, 
        // but since you are using fixed width/height in the component props, 
        // we keep them here or use layout="responsive" if the container size changes.
        width={400} 
        height={200}
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold mb-2">{name}</h3>
          <p className="text-sm text-gray-600 mb-3 leading-relaxed">{desc}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
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
          {/* GitHub Link */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={githubDisabled} // Better accessibility for disabled links
            className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium border border-gray-300 rounded-md hover:bg-gray-100 transition 
              ${githubDisabled ? "pointer-events-none opacity-40 cursor-not-allowed" : ""}`}
          >
            <FaGithub />
            Code
          </a>
          {/* Live Demo Link */}
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={liveDisabled} // Better accessibility for disabled links
            className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-pink-500 text-white rounded-md hover:bg-pink-600 transition 
              ${liveDisabled ? "pointer-events-none opacity-40 cursor-not-allowed" : ""}`}
          >
            <FaExternalLinkAlt />
            Live
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;