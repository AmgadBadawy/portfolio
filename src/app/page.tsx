import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Projects from "@/components/Projects";
import FrontendLab from "@/components/FrontendLab";
import SkillsAndEducation from "@/components/SkillsAndEducation";
import ContactFooter from "@/components/ContactFooter";
import CommandPalette from "@/components/CommandPalette";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <InteractiveBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TechMarquee />
        <Projects />
        <FrontendLab />
        <SkillsAndEducation />
      </main>
      <div className="relative z-10">
        <ContactFooter />
      </div>
      <CommandPalette />
    </div>
  );
}
