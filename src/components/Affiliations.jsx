import React from "react";
import { motion } from "framer-motion";

function Affiliations() {
  return (
    <section className="w-full bg-gray-50 py-20 px-6 md:px-20 text-center relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white pointer-events-none" />

      {/* Heading */}
      <motion.h2
        className="relative text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Affiliations
      </motion.h2>

      {/* Divider Line */}
      <motion.div
        className="relative w-20 h-1 bg-black/80 mx-auto rounded-full mb-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      />

      {/* Paragraph */}
      <motion.p
        className="relative text-gray-900 max-w-4xl mx-auto leading-relaxed text-lg font-light"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span className="font-semibold text-black">Baryalay.law</span> is a
        member firm of{" "}
        <span className="font-semibold text-black">Abasin Consult</span>, a
        global network of closely affiliated corporate advisory service
        providers.  
        <br className="hidden md:block" />
        As a member, we are able to service clients across Pakistan, the United
        Kingdom, Europe, and the Middle East. The partner firms of Abasin
        Consult offer a comprehensive range of services including{" "}
        <span className="italic">
          corporate law, dispute resolution, tax, accounting, audit, financial,
          and transaction advisory
        </span>
        .
      </motion.p>

      {/* Button */}
<motion.a
  href="https://www.abasinconsult.com"
  target="_blank"
  rel="noopener noreferrer"
  className="relative mt-10 inline-block px-8 py-3 rounded-xl bg-black/90 text-white font-semibold shadow-lg overflow-hidden group transition-all duration-300"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
  viewport={{ once: true }}
>
  {/* Sliding Overlay */}
  <span
    className="absolute inset-0 bg-gradient-to-r from-white to-blue-200 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
    aria-hidden="true"
  />

  {/* Shine Effect (diagonal light streak) */}
  <span
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
    aria-hidden="true"
  />

  {/* Text */}
  <span className="relative z-10 group-hover:text-black transition-colors duration-300">
    Visit Abasin Consult
  </span>
</motion.a>

    </section>
  );
}

export default Affiliations;
