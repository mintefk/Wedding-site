import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ couple }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Top Bar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
        <div className="flex justify-between items-center px-6 py-4">

          {/* Couple Name (Centered on Mobile) */}
          <h1 className="text-sm tracking-[0.4em] uppercase text-black font-light">
            {couple}
          </h1>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-6 h-6"
          >
            <span
              className={`absolute left-0 w-6 h-[2px] bg-black transition-all duration-300 ${
                isOpen ? "rotate-45 top-3" : "top-1"
              }`}
            />
            <span
              className={`absolute left-0 w-6 h-[2px] bg-black transition-all duration-300 ${
                isOpen ? "opacity-0 top-3" : "top-3"
              }`}
            />
            <span
              className={`absolute left-0 w-6 h-[2px] bg-black transition-all duration-300 ${
                isOpen ? "-rotate-45 top-3" : "top-5"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-10 uppercase tracking-[0.4em] text-lg text-black"
          >
            {["Story", "Events", "Location", "RSVP"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="hover:text-amber-500 transition"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}