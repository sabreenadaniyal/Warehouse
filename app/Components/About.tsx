"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  { title: "Web Development", desc: "Building responsive and modern websites with clean code." },
  { title: "UI/UX Design", desc: "Creating intuitive and stunning user interfaces for web & mobile." },
  { title: "App Development", desc: "Developing scalable and secure applications for businesses." },
  { title: "Tech Consulting", desc: "Providing expert guidance to optimize your digital strategy." },
];

const stats = [
  { number: 50, label: "Projects Completed" },
  { number: 100, label: "Happy Clients" },
  { number: 5, label: "Years Experience" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative max-w-7xl mx-auto px-6 py-16 text-gray-300 overflow-hidden"
    >
      {/* Top Split Layout */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 h-64 md:h-96 relative rounded-xl overflow-hidden flex-shrink-0"
        >
          <Image
            src="/about.jpg"
            alt="Team Working"
            fill
            className="rounded-xl object-cover shadow-lg"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 mb-4">
            About Us
          </h2>

          {/* Underline below heading */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100px", opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-teal-400 to-indigo-500 mb-6 rounded-full"
          />

          <p className="text-gray-400 mb-4 text-lg md:text-xl leading-relaxed">
            We are a passionate team of designers and developers dedicated to creating modern digital solutions. Our mission is to turn ideas into interactive experiences that engage users and help businesses grow.
          </p>
          <p className="text-gray-400 mb-4 text-lg md:text-xl leading-relaxed">
            From sleek websites to full-scale applications, we combine modern design, cutting-edge technology, and attention to detail to deliver exceptional results.
          </p>
        </motion.div>
      </div>

      {/* Features Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: index * 0.2 } },
            }}
            className="bg-gray-900/50 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-sm md:text-base">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Section */}
      <motion.div className="flex flex-wrap justify-center gap-12 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <p className="text-4xl md:text-5xl font-extrabold text-teal-400">{stat.number}+</p>
            <p className="text-gray-400 text-lg md:text-xl">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
