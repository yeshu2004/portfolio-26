import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Lenis from "@/hooks/Lenis";

export default function Home() {
  return (
    <Lenis>
      <div className="scroll-smooth">
        <main className="relative">
          <Hero />
          <Projects />
        </main>
      </div>
    </Lenis>
  );
}
