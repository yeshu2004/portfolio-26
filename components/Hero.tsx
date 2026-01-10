"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main className="relative h-screen w-screen bg-black overflow-hidden">
      {/* Grid */}
      <div className="grid h-full w-full grid-cols-12 grid-rows-12">
        {Array.from({ length: 150 }).map((_, i) => (
          <motion.div
            key={i}
            className="bg-black"
            whileHover={{ backgroundColor: "#ffffff" }}
            transition={{ duration: 1 }}
          />
        ))}
      </div>

      {/* Center Text */}
      <motion.h1
        className="
          absolute left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2
          text-white text-5xl md:text-7xl font-bold tracking-widest
          cursor-default
          mix-blend-difference
        "
        transition={{ duration: 0.2 }}
      >
        WELCOME
      </motion.h1>
    </main>
  );
}
