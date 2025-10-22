// "use client";

// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// export default function Hero() {
//   const words = ["Innovate.", "Design.", "Build."];
//   const [currentWord, setCurrentWord] = useState("");
//   const [wordIndex, setWordIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       if (charIndex < words[wordIndex].length) {
//         setCurrentWord((prev) => prev + words[wordIndex][charIndex]);
//         setCharIndex(charIndex + 1);
//       } else {
//         setTimeout(() => {
//           setCurrentWord("");
//           setCharIndex(0);
//           setWordIndex((wordIndex + 1) % words.length);
//         }, 1000);
//       }
//     }, 150);
//     return () => clearTimeout(timeout);
//   }, [charIndex, wordIndex, words]);

//   return (
//     <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden bg-black">
      
//       {/* Animated Gradient Background */}
//       <div className="absolute inset-0 -z-20 animate-gradient bg-[linear-gradient(270deg,#14b8a6,#6366f1,#8b5cf6,#14b8a6)] bg-[length:400%_400%]" />

//       {/* Floating Blurred Shapes */}
//       <div className="absolute w-60 h-60 bg-teal-500/20 rounded-full blur-3xl top-10 left-5 animate-float-slow"></div>
//       <div className="absolute w-80 h-80 bg-indigo-500/10 rounded-full blur-2xl bottom-16 right-5 animate-float"></div>

//       {/* Headline with Typewriter */}
//       <motion.h1
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 leading-tight text-center"
//       >
//         Build Digital <br /> Experiences That <span className="text-teal-400">{currentWord}</span>
//       </motion.h1>

//       {/* Subtitle */}
//       <motion.p
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.3 }}
//         className="mt-6 max-w-2xl text-gray-300 text-lg md:text-xl text-center"
//       >
//         We help businesses transform ideas into stunning digital experiences. <br />
//         Modern design, seamless functionality, and innovative technology all in one place.
//       </motion.p>

//       {/* CTA Buttons */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.6 }}
//         className="mt-8 flex flex-wrap gap-4 justify-center"
//       >
//         <a
//           href="#contact"
//           className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-teal-500 to-indigo-600 shadow-lg hover:shadow-teal-500/30 transition-all duration-300"
//         >
//           Get Started
//         </a>

//         <a
//           href="#services"
//           className="px-6 py-3 rounded-full font-semibold border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300"
//         >
//           View Services
//         </a>
//       </motion.div>

//       {/* Tailwind Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//         }
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         .animate-float { animation: float 6s ease-in-out infinite; }
//         .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
//         .animate-gradient { animation: gradient 15s ease infinite; }
//       `}</style>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// ✅ Move words outside the component
const words = ["Innovate.", "Design.", "Build."];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < words[wordIndex].length) {
        setCurrentWord((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCurrentWord("");
          setCharIndex(0);
          setWordIndex((wordIndex + 1) % words.length);
        }, 1000);
      }
    }, 150);

    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex]); // ✅ Removed "words" from dependencies

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden bg-black">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-20 animate-gradient bg-[linear-gradient(270deg,#14b8a6,#6366f1,#8b5cf6,#14b8a6)] bg-[length:400%_400%]" />

      {/* Floating Blurred Shapes */}
      <div className="absolute w-60 h-60 bg-teal-500/20 rounded-full blur-3xl top-10 left-5 animate-float-slow"></div>
      <div className="absolute w-80 h-80 bg-indigo-500/10 rounded-full blur-2xl bottom-16 right-5 animate-float"></div>

      {/* Headline with Typewriter */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 leading-tight text-center"
      >
        Build Digital <br /> Experiences That{" "}
        <span className="text-teal-400">{currentWord}</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-6 max-w-2xl text-gray-300 text-lg md:text-xl text-center"
      >
        We help businesses transform ideas into stunning digital experiences. <br />
        Modern design, seamless functionality, and innovative technology all in one place.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-8 flex flex-wrap gap-4 justify-center"
      >
        <a
          href="#contact"
          className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-teal-500 to-indigo-600 shadow-lg hover:shadow-teal-500/30 transition-all duration-300"
        >
          Get Started
        </a>

        <a
          href="#services"
          className="px-6 py-3 rounded-full font-semibold border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300"
        >
          View Services
        </a>
      </motion.div>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-gradient { animation: gradient 15s ease infinite; }
      `}</style>
    </section>
  );
}
