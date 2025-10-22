// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "#" },
//     { name: "About", href: "#about" },
//     { name: "Services", href: "#services" },
//     { name: "Portfolio", href: "#portfolio" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.7 }}
//       className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10"
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//         {/* Logo / Brand */}
//         <motion.h1
//           whileHover={{ scale: 1.1 }}
//           className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 cursor-pointer"
//         >
//           TrioNex.
//         </motion.h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center space-x-8 text-gray-300">
//           {navLinks.map((link) => (
//             <motion.li
//               key={link.name}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <a
//                 href={link.href}
//                 className="hover:text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 transition duration-300"
//               >
//                 {link.name}
//               </a>
//             </motion.li>
//           ))}
//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             href="#get-started"
//             className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-md hover:shadow-teal-500/25 transition-all duration-300"
//           >
//             Get Started
//           </motion.a>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-300"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <motion.ul
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10 flex flex-col items-center space-y-4 py-6"
//         >
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className="text-gray-300 hover:text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 transition duration-300"
//             >
//               {link.name}
//             </a>
//           ))}
//           <a
//             href="#get-started"
//             className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-md hover:shadow-teal-500/25 transition-all duration-300"
//           >
//             Get Started
//           </a>
//         </motion.ul>
//       )}
//     </motion.nav>
//   );
// }





"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo with TN circle and slogan */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-indigo-500 text-black font-extrabold text-lg shadow-md">
            TN
          </div>
          <div className="flex flex-col leading-tight">
            <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">
              TrioNex.
            </h1>
            <span className="text-[10px] text-gray-400 tracking-wider">
              Design. Develop. Deliver.
            </span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-300">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={link.href}
                className="hover:text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 transition duration-300"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-md hover:shadow-teal-500/25 transition-all duration-300"
          >
            Get Started
          </motion.a>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10 flex flex-col items-center space-y-4 py-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 transition duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#get-started"
            className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-md hover:shadow-teal-500/25 transition-all duration-300"
          >
            Get Started
          </a>
        </motion.ul>
      )}
    </motion.nav>
  );
}

