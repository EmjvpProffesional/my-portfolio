import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";

export function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <Hero />
      <Skills />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}