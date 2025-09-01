import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      className="relative w-full h-[92vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://baryalay.law/assets/bg-CRQvH-uD.jpeg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
        >
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
            Baryalay Law
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-5 text-lg md:text-2xl text-gray-200 font-light leading-relaxed"
        >
          Trusted Legal Expertise. Modern Solutions.  
          <br className="hidden md:block" />
          A Client-First Commitment.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col md:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9 }}
        >
          {/* Primary Button */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/about"
              className="px-7 py-3 rounded-xl bg-black text-white border border-white/20 font-semibold flex items-center gap-2 shadow-lg hover:bg-white hover:text-black transition-all duration-500"
            >
              Learn More <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Secondary Button */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="relative inline-block px-7 py-3 rounded-xl overflow-hidden font-semibold border border-white/60 text-white group"
            >
              {/* Sliding White Overlay */}
              <span
                className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out"
                aria-hidden="true"
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Contact Us
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
