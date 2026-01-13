"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, SquareArrowOutUpRight } from "lucide-react";

const items = [
  {
    name: "Ticket One",
    img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg",
    role: "fullstack",
    about:
      "This project is a real-world event booking backend. It’s the kind of system you’d expect behind platforms where: users discover events, organizers create and manage them, seats are booked safely (without overbooking), tickets are generated as PDFs, and everything doesn’t fall apart under load.",
    link: "",
    github: "https://github.com/yeshu2004/go-event-booking",
  },
  {
    name: "Reflux",
    img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg",
    role: "frontend",
    about:
      "Designed and developed a modern web presence for the event that translates its creative energy into a clear, engaging, and cohesive digital experience. ReflUX is the flagship event of the UX Club at VIT Bhopal, celebrating the intersection of design, technology, and user experience.",
    link: "https://reflux-workshop.vercel.app/",
    github: "https://github.com/yeshu2004/ReflUX",
  },
  {
    name: "WhisperLink",
    img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg",
    role: "backend",
    about:
      "WhisperLink is a thoughtfully designed anonymous Q&A platform that enables open, honest conversations while prioritizing safety and user comfort. The platform allows individuals to create personalized, shareable links through which others can submit questions anonymously.",
    link: "",
    github: "https://github.com/yeshu2004/WhisperLink",
  },
  {
    name: "Web Crawler",
    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
    role: "Backend",
    about:
      "A simple and efficient web crawler written in Go. This is designed for crawling web pages and following links to deepen exploration(BFS approch).",
    link: "",
    github: "https://github.com/yeshu2004/go-web-crawler",
  },
  {
    name: "AI meeting Summarizer",
    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
    role: "fullstack",
    about:
      "Designed and built a full-stack application that transforms raw meeting transcripts into clear, structured summaries using AI. The platform enables users to review, edit, and share summaries seamlessly via email, helping teams capture decisions and insights without manual effort.",
    link: "",
    github: "https://github.com/yeshu2004/AI-powered-meeting-summarizer",
  },
  {
    name: "Load Balancer",
    img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
    role: "backend",
    about:
      "This Project the implementation of load balancing algorithms, specifically Simple Round Robin, Weighted Round Robin, and Sticky Sessions, to efficiently distribute incoming network traffic across multiple servers.",
    link: "",
    github: "https://github.com/yeshu2004/go-load-balancer",
  },
];

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const rowVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const easeOutBezier: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const easeCublic: [number, number, number, number] = [
    0.645, 0.045, 0.355, 1.0,
  ];

  const itemVariants = {
    hidden: { y: 100 },
    show: {
      y: 0,
      transition: {
        duration: 1,
        ease: easeOutBezier,
      },
    },
  };

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
    <div className="min-h-screen w-full flex flex-col font-['noto'] items-center py-5 pt-12 relative overflow-hidden bg-zinc-950 text-white uppercase">
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
        <div className="flex items-center px-5 uppercase text-zinc-400 justify-between text-lg py-2">
          <div className="flex items-center gap-10">
            <h1>Number</h1>
            <h1>Project</h1>
          </div>
          <h1>Category</h1>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          // viewport={{ once: true }}
          transition={{ duration: 1.2, ease: easeCublic }}
          className="h-[0.08rem] w-full bg-white origin-left"
        />
        {items.map((item, idx) => (
          <div key={idx} className="w-full">
            {/* ROW */}
            <motion.div
              variants={rowVariants}
              initial="hidden"
              whileInView="show"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              viewport={{ once: true, margin: "-40px" }}
              className="w-full cursor-pointer flex items-center justify-between px-5 py-2 text-lg hover:bg-white hover:text-zinc-950 hover:px-7 transition-all duration-500"
            >
              <div className="flex items-center gap-10">
                <div className="w-fit h-full overflow-hidden">
                  <motion.div variants={itemVariants}>
                    ( {String(idx + 1).padStart(3, "0")} )
                  </motion.div>
                </div>
                <div className="w-fit h-full overflow-hidden">
                  <motion.div variants={itemVariants} className="font-semibold">
                    {item.name}
                  </motion.div>
                </div>
              </div>

              <div className="w-fit h-full overflow-hidden">
                <motion.div variants={itemVariants} className="font-semibold">
                  {item.role}
                </motion.div>
              </div>
            </motion.div>

            {/* 👇 UNDERLINE */}
            <AnimatePresence>
              {openIdx != idx && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  // viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: easeCublic }}
                  className="h-[0.08rem] w-full bg-white origin-left"
                />
              )}
            </AnimatePresence>

            {/* EXPAND CONTENT */}
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto"}}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden bg-zinc-950 px-5 md:w-2/3"
                >
                  <div className="flex flex-col gap-2 pb-8">
                    <p className="text-zinc-300 md:text-3xl text-xl font-bold uppercase leading-snug">
                      {item.about}
                    </p>

                    <div className="flex gap-4">
                      {/* GitHub Button */}
                      {item.github && (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 border bg-white text-zinc-950 text-sm uppercase  font-semibold rounded-full flex items-center gap-2"
                        >
                          <Github color="black" size={12} />
                          GitHub 
                        </a>
                      )}

                      {/* Live Link Button (only if exists) */}
                      {item.link?.length > 0 && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 border bg-white text-zinc-950 text-sm uppercase  font-semibold rounded-full flex items-center gap-2 items-center"
                        >
                          <SquareArrowOutUpRight size={12} color="black" />
                          Live
                        </a>
                      )}
                    </div>
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
