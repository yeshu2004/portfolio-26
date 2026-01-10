"use client";

import { motion } from "framer-motion";

const COLS = 20;
const ROWS = 10;
const TOTAL = COLS * ROWS;

export default function Home() {
  return (
    <main className="relative h-screen w-screen bg-white overflow-hidden">
      {/* Grid */}
      <div
        className="grid h-full w-full"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        }}
      >
        {Array.from({ length: TOTAL }).map((_, i) => (
          <motion.div
            key={i}
            className="bg-zinc-950"
            initial={{ opacity: 1 }}
            whileHover={{
              opacity: 0,
              transition: { duration: 0 }, // instant disappear
            }}
            animate={{
              opacity: 1,
              transition: { duration: 0, delay: 0.25 }, // delayed return
            }}
          />
        ))}
      </div>

      {/* Center Text (true inversion) */}
      <div
        className="
          absolute left-1/2 top-1/2 w-full
          -translate-x-1/2 -translate-y-1/2
          text-white text-xl md:text-5xl
          pointer-events-none mix-blend-difference text-center leading-[1.1]
        "
      >
        <h1>HEY <span className="font-['offbit-dot'] font-bold">IT'S</span> ME<span className="font-['offbit-dot'] font-bold">!!</span></h1>
        <h1 className="">INDEPENDENT FULL<span className="font-['offbit-dot'] font-bold">-</span>STACK</h1>
        <h1 className="font-['offbit-dot'] font-bold md:pt-2">☼ DEVELOPER ☂</h1>
        <h1>BUILDING THINGS THAT WORK</h1>
        <h1><span className="font-['offbit-dot'] font-bold">BASED ✈</span> SOMEWHERE WITH <span className="font-['offbit-dot'] font-bold">WIFI</span></h1>
        <h1>PORTFOLIO <span className="font-[offbit-dot] font-bold">©</span> 2026 <span className="font-[offbit-dot] font-bold">☮✨</span></h1>


        {/* <h1 className="font-[offbit-dot]">☁ ☂☃☼☾☽☿♀♂. ⚡. ❄❅❆☘. ☯. ☮. ☭☢☣☠☤✠✡✦✧✩✪⌛⏳⚑⚐⚓⚔⚖⚙⚡. ✈</h1> */}
      </div>
    </main>
  );
}
