"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Website",
    desc: "A modern e-commerce website with React, Next.js, and Tailwind CSS.",
    image: "/portfolio/e-commerce.png",
  },
  {
    title: "Figma UI/UX Design",
    desc: "Interactive UI/UX prototypes created in Figma with modern design and responsive layouts.",
    image: "/portfolio/figma design.png",
  },
  {
    title: "Dynamic Resume Builder",
    desc: "Generates customizable resumes dynamically with modern templates and real-time editing features.",
    image: "/portfolio/dynamic resume.png",
  },
  {
    title: "Blog Platform",
    desc: "A full-featured blog platform with CMS integration.",
    image: "/portfolio/blog website.png",
  },
];

export default function Projects() {
  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-6 py-20 text-gray-300">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 mb-3 text-center"
      >
        Our Projects
      </motion.h2>

      {/* Animated underline */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "6rem", opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-1 bg-gradient-to-r from-teal-400 to-indigo-500 mx-auto mb-12 rounded-full"
      ></motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.a
            key={index}
            rel="noopener noreferrer"
            className="group bg-gray-900/50 rounded-xl overflow-hidden shadow-lg hover:shadow-teal-500/30 transition-shadow duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: index * 0.2 } },
            }}
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">{project.desc}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

