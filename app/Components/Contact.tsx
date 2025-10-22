"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full overflow-x-hidden px-4 sm:px-6 lg:px-8 py-16 text-gray-300"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 mb-3 text-center"
        >
          Contact Us
        </motion.h2>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "6rem", opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-1 bg-gradient-to-r from-teal-400 to-indigo-500 mx-auto mb-6 rounded-full"
        ></motion.div>

        <p className="text-gray-400 text-center text-base sm:text-lg mb-10">
          Get in touch for collaboration
        </p>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 space-y-4 text-sm sm:text-base"
          >
            <p className="text-gray-400">
              Email:{" "}
              <a
                href="mailto:abc@gmail.com"
                className="text-teal-400 hover:underline break-all"
              >
                abc@gmail.com
              </a>
            </p>
            <p className="text-gray-400">
              Phone: <span className="text-teal-400">+1 (646) 555-3890</span>
            </p>
            <p className="text-gray-400">
              Location: <span className="text-teal-400">Carlyle Hall</span>
              <br />
              Address:{" "}
              <span className="text-teal-400">
                25 Union Square W, New York, NY 10003, USA
              </span>
            </p>
            <p className="text-gray-400">
              Feel free to reach out for project inquiries, collaborations, or
              just a friendly chat!
            </p>
          </motion.div>

          {/* Right - Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            onSubmit={handleSubmit}
            className="md:w-1/2 bg-gray-900/50 p-5 sm:p-6 rounded-xl shadow-lg space-y-4"
          >
            {submitted && (
              <p className="text-teal-400 font-semibold">
                Message sent successfully!
              </p>
            )}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200 focus:outline-teal-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200 focus:outline-teal-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200 focus:outline-teal-400 resize-none"
              rows={5}
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 text-white py-2 rounded font-semibold hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
