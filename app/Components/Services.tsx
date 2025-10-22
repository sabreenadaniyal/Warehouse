"use client";

import { motion } from "framer-motion";
import { Monitor, Search, PenTool, Share2, Code, Smartphone, UserCheck, Layout } from "lucide-react";

const services = [
  { title: "Web Designing & Development", desc: "Building responsive and modern websites tailored to your needs.", icon: <Monitor className="w-10 h-10 text-teal-400 mx-auto mb-4" /> },
  { title: "Frontend Development", desc: "Creating interactive and responsive front-end interfaces using modern technologies.", icon: <Code className="w-10 h-10 text-teal-400 mx-auto mb-4" /> },
  { title: "App Development", desc: "Developing secure and performant mobile and web applications.", icon: <Smartphone className="w-10 h-10 text-teal-400 mx-auto mb-4" /> },
  { title: "UI/UX Design", desc: "Creating intuitive and engaging user interfaces for web and mobile apps.", icon: <Layout className="w-10 h-10 text-teal-400 mx-auto mb-4" /> },
  { title: "SEO", desc: "Improving website visibility to attract more organic traffic.", icon: <Search className="w-10 h-10 text-teal-400 mx-auto mb-4" /> },
  { title: "Graphic Designing", desc: "Designing visually stunning graphics for web, branding, and social media.", icon: <PenTool className="w-10 h-10 text-teal-400 mx-auto mb-4" /> },
  { title: "Social Media Marketing", desc: "Creating effective social media campaigns to grow your audience.", icon: <Share2 className="w-10 h-10 text-teal-400 mx-auto mb-4" /> },
  { title: "Tech Consulting", desc: "Providing expert guidance to optimize your digital strategy and workflows.", icon: <UserCheck className="w-10 h-10 text-teal-400 mx-auto mb-4" /> },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative max-w-7xl mx-auto px-6 py-16 text-gray-300"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 mb-3"
        >
          Our Digital Services
        </motion.h2>

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "6rem", opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-1 bg-gradient-to-r from-teal-400 to-indigo-500 mx-auto mb-2 rounded-full"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl mt-2"
        >
          Our Popular Services
        </motion.p>
      </div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: index * 0.2 } },
            }}
            className="bg-gray-900/50 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300"
          >
            {service.icon}
            <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm md:text-base">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
