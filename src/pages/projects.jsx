import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "My Portfolio",
    description: "My futuristic and smooth-scrolling portfolio website built with React and Framer Motion.",
    image: "./src/assets/images/portfolio.JPG",
    tech: ["React", "React Router", "Framer Motion", "TailwindCSS", "API", "Vite"],
    demo: "https://khuzaima324.github.io/MyPortfolio/",
    code: "https://github.com/khuzaima324/myPortfolio.git",
  },
  {
    id: 2,
    title: "Currency Converter",
    description: "A React app that converts currencies using a live API with real-time exchange rates.",
    image: "./src/assets/images/currencyConvertor.JPG",
    tech: ["React", "TailwindCSS", "API", "Vite"],
    demo: "https://khuzaima324.github.io/ReactPract_4/",
    code: "https://github.com/khuzaima324/ReactPract_4.git",
  },
  {
    id: 3,
    title: "Random Password Genrator",
    description: "A Random password generating site with your own flexability for the Numbers, Charactors and Length.",
    image: "./src/assets/images/passwordGenerator.JPG",
    tech: ["React", "TailwindCSS"],
    demo: "https://khuzaima324.github.io/ReactPract_3/",
    code: "https://github.com/khuzaima324/ReactPract_4.git",
  },
  {
    id: 4,
    title: "Background Color Changer",
    description: "A simple background changer that change the color of the background as you typein.",
    image: "./src/assets/images/bgChanger.JPG",
    tech: ["React", "TailwindCSS", "Learning"],
    demo: "https://khuzaima324.github.io/ReactPract_2/",
    code: "https://github.com/khuzaima324/ReactPract_2.git",
  },
  {
    id: 5,
    title: "Dark & Light Mode",
    description: "A simple single card application that switch between the dark and light mode using the context API.",
    image: "./src/assets/images/DarkMode.JPG",
    tech: ["React", "TailwindCSS", "Context API", "Vite"],
    demo: "https://khuzaima324.github.io/ReactPract_7/",
    code: "https://github.com/khuzaima324/ReactPract_7.git",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[var(--color-secondary)] text-white py-16 px-6 " style={{ fontFamily: 'var(--font-orbitron)'}}>
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12"
        >
          My Projects & Practices
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-[var(--color-primary)] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Thumbnail */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover object-left-top"
              />



              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-zinc-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
