"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const current = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll();
  const opacityTrans = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [cols, setCols] = useState(0);
  const [rows, setRows] = useState(0);

  useEffect(() => {
    const update = () => {
      setCols(Math.floor(window.innerWidth / 40));
      setRows(Math.floor(window.innerHeight / 40));
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);
  if (!cols || !rows) return null;

  return (
    <main
      ref={current}
      className="h-[95vh] w-full sticky top-0 bg-white overflow-hidden"
    >
      {/* Grid */}
      <div
        className="grid h-full w-full"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: cols * rows }).map((_, i) => (
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

      {/* center text */}
      <motion.div
        style={{ opacity: opacityTrans }}
        className="
          absolute left-1/2 top-1/2 w-full
          -translate-x-1/2 -translate-y-1/2
          text-white text-4xl md:text-6xl
          pointer-events-none mix-blend-difference text-center font-['noto'] 
          select-none
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
        <h1 className="font-['offbit-dot'] tracking-normal font-bold">
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

        {/* giphy */}
        <div className="mt-20 absolute left-1/2 -translate-x-1/2 flex justify-center pointer-events-auto">
          <motion.div
            style={{
              width: 100,
              height: 100,
              position: "relative",
              opacity: opacityTrans,
            }}
          >
            <motion.img
              src="/cat.gif"
              alt="cat"
              className="h-16 md:h-full"
              style={{ opacity: opacityTrans }}
            />
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
