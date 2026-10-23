import { portfolioData } from "@/data/portfolio";

export default function TechMarquee() {
  const allSkills = portfolioData.skillCategories.flatMap((c) => c.skills);
  // تكرار العناصر لضمان استمرارية الحركة بدون انقطاع
  const marqueeItems = [...allSkills, ...allSkills];

  return (
    <div className="relative w-full overflow-hidden border-y border-slate-800/80 bg-slate-950/70 py-4 backdrop-blur-md">
      {/* Side Fade Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-950 to-transparent" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee gap-4">
        {marqueeItems.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-4 py-1.5 text-xs font-semibold text-slate-300 transition duration-200 hover:border-cyan-500/50 hover:text-cyan-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
