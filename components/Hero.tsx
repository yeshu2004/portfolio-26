"use client";

import { motion } from "framer-motion";

const COLS = 25;
const ROWS = 15;
const TOTAL = COLS * ROWS;

export default function Hero() {
  return (
    <main className="h-screen w-full sticky top-0 bg-white overflow-hidden">
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
              transition: { duration: 0 },
            }}
            animate={{
              opacity: 1,
              transition: { duration: 0, delay: 0.25 },
            }}
          />
        ))}
      </div>

      {/* Center Text */}
      <div
        className="
          absolute left-1/2 top-1/2 w-full
          -translate-x-1/2 -translate-y-1/2
          text-white text-xl md:text-5xl
          pointer-events-none mix-blend-difference text-center font-['noto']
        "
      >
        <h1>
          HEY{" "}
          <span className="font-['offbit-dot'] tracking-normal font-bold">
            IT'S
          </span>{" "}
          ME
          <span className="font-['offbit-dot'] tracking-normal font-bold">
            !!
          </span>
        </h1>
        <h1 className="">
          INDEPENDENT FULL
          <span className="font-['offbit-dot'] tracking-normal font-bold">
            -
          </span>
          STACK
        </h1>
        <h1 className="font-['offbit-dot'] tracking-normal font-bold md:pt-2">
          ☼ DEVELOPER ☂
        </h1>
        <h1>BUILDING THINGS THAT WORK</h1>
        <h1>
          <span className="font-['offbit-dot'] tracking-normal font-bold">
            BASED ✈
          </span>{" "}
          SOMEWHERE WITH{" "}
          <span className="font-['offbit-dot'] tracking-normal font-bold">
            WIFI
          </span>
        </h1>
        <h1>
          PORTFOLIO <span className="font-[offbit-dot] font-bold">©</span> 2026{" "}
          <span className="font-[offbit-dot] font-bold">☮✨</span>
        </h1>

        {/* Giphy */}
        <div className="mt-20 absolute left-1/2 -translate-x-1/2 flex justify-center pointer-events-auto">
          <div
            style={{
              width: 100,
              height: 100,
              position: "relative",
            }}
          >
            <iframe
              src="https://giphy.com/embed/UQ1EI1ML2ABQdbebup"
              width="100%"
              height="100%"
              style={{ position: "absolute" }}
              frameBorder="0"
              allowFullScreen
              className="giphy-embed h-16 md:h-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
