"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, delay, motion } from "framer-motion";

const items = [
  {
    name: "Ticket One",
    img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg",
    role: "fullstack",
    about:
      "This project is a real-world event booking backend. It’s the kind of system you’d expect behind platforms where: users discover events, organizers create and manage them, seats are booked safely (without overbooking), tickets are generated as PDFs, and everything doesn’t fall apart under load.",
  },
  {
    name: "WhisperLink",
    img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg",
    role: "backend",
    about: "WhisperLink is a thoughtfully designed anonymous Q&A platform that enables open, honest conversations while prioritizing safety and user comfort. The platform allows individuals to create personalized, shareable links through which others can submit questions anonymously.",
  },
  {
    name: "Reflux",
    img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg",
    role: "frontend",
    about: "Designed and developed a modern web presence for the event that translates its creative energy into a clear, engaging, and cohesive digital experience. ReflUX is the flagship event of the UX Club at VIT Bhopal, celebrating the intersection of design, technology, and user experience.",
  },
  {
    name: "AI meeting Summarizer",
    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
    role: "fullstack",
    about: "full-stack application that automatically generates structured meeting summaries from raw transcripts using AI, and allows users to edit and share via email",
  },
  {
    name: "Load Balancer",
    img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
    role: "backend",
    about: 2025,
  },
  {
    name: "Bookshelf",
    img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg",
    role: "frontend",
    about: 2025,
  },
  {
    name: "Ottoman",
    img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
    role: "frontend",
    about: 2025,
  },
  {
    name: "Mirror",
    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
    role: "backend",
    about: 2025,
  },
];

export default function Images() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMouseEnter = (idx: number) => {
    if (hoveredIdx !== null && hoveredIdx !== idx) {
      setIsTransitioning(true);
      setTimeout(() => {
        setHoveredIdx(idx);
        setIsTransitioning(false);
      }, 150);
    } else {
      setHoveredIdx(idx);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
    setIsTransitioning(false);
  };

  return (
    <div
      className="h-[90vh] w-full flex flex-col font-['noto'] items-center py-5 relative overflow-hidden bg-zinc-950 text-white uppercase">
      {hoveredIdx !== null && (
        <div
          className={`fixed z-50 pointer-events-none transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          style={{
            left: mousePos.x + 30,
            top: mousePos.y - 130,
            transform: "translate(0, 0)",
          }}
          id="hover-image"
        >
          <div className="relative">
            {/* <img
              src={items[hoveredIdx].img}
              alt={items[hoveredIdx].name}
              className="w-32 h-52 object-cover transition-transform duration-300 hover:scale-105"
              style={{
                background: '#fff',
              }}
            /> */}
            {/* <div className="bg-white text-black w-52 h-72 px-4 font-['offbit-dot'] font-semibold tracking-wider leading-relaxed  py-3">
                <h1>{items[hoveredIdx].about}</h1>
            </div> */}
          </div>
        </div>
      )}

      <div className="w-full z-10">
        {items.map((item, idx) => (
          <div key={idx} className="w-full">
            <div
              className="w-full cursor-pointer flex items-center justify-between px-5 py-3 mb-1 text-white transition-all duration-500  text-lg hover:bg-white hover:text-zinc-950 hover:px-7  "
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-10">
                <span>( {String(idx + 1).padStart(3, "0")} )</span>
                <span className="font-semibold">{item.name}</span>
              </div>

              <span className="font-semibold">{item.role}</span>
            </div>

            <AnimatePresence>
              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden bg-zinc-950 px-5 w-2/3"
                >
                  <div className="text-zinc-300 text-3xl font-[noto] uppercase font-bold">
                    {item.about}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          #hover-image {
            left: 50% !important;
            top: 45% !important;
            transform: translate(-50%, -50%) !important;
          }
        }

        .group {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .group:hover {
          border-left-color: #fff;
        }
      `}</style>
    </div>
  );
}
