"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-white/10 backdrop-blur-md text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* ===== Left Section - Brand Info ===== */}
        <div className="space-y-4 text-center md:text-left">
          <motion.h2
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 cursor-pointer"
          >
            TrioNex.
          </motion.h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering your digital presence through creativity, design, and innovation.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 pt-2">
            {[
              { Icon: Facebook, url: "#" },
              { Icon: Instagram, url: "#" },
              { Icon: Linkedin, url: "#" },
              { Icon: Github, url: "#" },
            ].map(({ Icon, url }, i) => (
              <motion.a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="text-gray-400 hover:text-teal-400 hover:drop-shadow-[0_0_8px_#14b8a6] transition duration-300"
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* ===== Center Section - Quick Links ===== */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-teal-500 inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#services" className="hover:text-teal-400 transition">Services</a></li>
            <li><a href="#about" className="hover:text-teal-400 transition">About Us</a></li>
            <li><a href="#portfolio" className="hover:text-teal-400 transition">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-teal-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* ===== Right Section - Payment Methods ===== */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-teal-500 inline-block pb-1">
            Payment Methods
          </h3>
          <div className="flex justify-center md:justify-end items-center gap-4 flex-wrap">
            
            {/* PayPal */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="border border-gray-600/50 rounded-xl p-2 hover:border-teal-400 transition"
            >
              <Image
                src="/payment/paypal.png"
                alt="PayPal"
                width={90}
                height={40}
                className="h-6 w-auto opacity-90 hover:opacity-100 transition-all duration-300"
              />
            </motion.div>

            {/* Stripe */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="border border-gray-600/50 rounded-xl p-2 hover:border-teal-400 transition"
            >
              <Image
                src="/payment/stripe.png"
                alt="Stripe"
                width={80}
                height={40}
                className="h-6 w-auto opacity-90 hover:opacity-100 transition-all duration-300"
              />
            </motion.div>
      
          </div>
        </div>
      </div>

      {/* ===== Divider & Bottom Text ===== */}
      <div className="border-t border-white/10 mt-8 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TrioNex. All rights reserved.
      </div>
    </footer>
  );
}
