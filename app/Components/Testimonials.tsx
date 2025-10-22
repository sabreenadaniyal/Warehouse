"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sandra C.",
    role: "Co-Founder at DigitalRFX",
    feedback:
      "They delivered a website that not only looks great but also functions flawlessly. Their expertise and dedication made our online presence stand out and boosted our business. Highly recommended!",
    image: "/reviews/SAndra_C..webp",
  },
  {
    name: "Bernard Renfro",
    role: "Manager at OBCR LLC",
    feedback:
      "Our experience working with the TrioNeX team was exceptional. They transformed our outdated website into a visually stunning and user-friendly platform that perfectly represents our brand.",
    image: "/reviews/1752563414844.jpeg",
  },
  {
    name: "Joyce M.",
    role: "Founder/CEO at WLJ",
    feedback:
      "Within just three months of launching my new website, I've seen a significant increase in leads and sales compared to the two years with my old design. A game-changer for my business!",
    image: "/reviews/images.jpeg",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full overflow-x-hidden px-4 sm:px-6 lg:px-8 py-16 text-gray-300"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 mb-4 text-center"
        >
          What Our Clients Are Saying
        </motion.h2>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "120px", opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-teal-400 to-indigo-500 mx-auto mb-10 sm:mb-14 rounded-full"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.2 },
                },
              }}
              className="bg-gray-900/50 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-teal-500/30 transition-all duration-300 text-center flex flex-col justify-between"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={test.image}
                  alt={test.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 italic text-sm sm:text-base mb-4 leading-relaxed break-words">
                “{test.feedback}”
              </p>

              <h3 className="text-teal-400 font-semibold text-base sm:text-lg mb-1">
                {test.name}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">{test.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
