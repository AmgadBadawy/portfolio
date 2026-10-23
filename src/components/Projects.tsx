"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Layers, CheckCircle2, Filter } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import TiltCard from "@/components/TiltCard";
import { portfolioData, Project } from "@/data/portfolio";

const filterTabs = [
  { label: "All Projects", key: "all" },
  { label: "Next.js & React", key: "next" },
  { label: "UI / UX Design", key: "ui" },
  { label: "AI & Systems", key: "ai" },
];

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((project: Project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "next")
      return project.techStack.some((t) =>
        ["Next.js", "React", "TypeScript"].includes(t),
      );
    if (activeFilter === "ui")
      return project.techStack.some((t) =>
        ["HTML5", "Modern CSS3", "UI/UX", "RTL Design"].includes(t),
      );
    if (activeFilter === "ai")
      return (
        project.techStack.includes("AI Concept") ||
        project.badge === "Graduation Project"
      );
    return true;
  });

  return (
    <section id="projects" className="relative z-10 scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
              Portfolio Showcase
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-3 max-w-2xl text-slate-400">
              Hover over any project card to experience interactive 3D depth and
              explore live demos.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 p-1.5 backdrop-blur-md">
            <span className="flex items-center gap-1.5 px-2 text-xs font-semibold text-slate-400">
              <Filter className="h-3.5 w-3.5 text-cyan-400" />
            </span>
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
                  activeFilter === tab.key
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Tilt Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.title}
              maxTilt={5}
              className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md transition duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div>
                {/* Browser Frame Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-950 px-3.5 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="max-w-[160px] truncate font-mono text-[10px] text-slate-500">
                    {project.title.toLowerCase()}.app
                  </span>
                </div>

                {/* Project Screenshot */}
                <div className="aspect-[2.16/1] w-full overflow-hidden border-b border-slate-800/80 bg-slate-950">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} Preview`}
                      width={1200}
                      height={556}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-slate-600">
                      <span className="font-mono text-xs">
                        No Preview Available
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                      <Layers className="h-3 w-3" />
                      {project.badge}
                    </span>

                    <div className="relative z-30 flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                          aria-label={`${project.title} GitHub`}
                        >
                          <GithubIcon className="h-4 w-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg bg-cyan-500/15 px-3 py-1.5 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-500 hover:text-slate-950"
                        >
                          Live Demo
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-white transition group-hover:text-cyan-400">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-indigo-400">
                    {project.subtitle}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-slate-800/80 pt-4">
                    {project.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs leading-relaxed text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Footer */}
              <div className="flex flex-wrap gap-1.5 border-t border-slate-800/80 bg-slate-950/50 p-4 px-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-800 bg-slate-950 px-2.5 py-0.5 text-[11px] font-medium text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
