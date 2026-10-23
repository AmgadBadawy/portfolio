"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { GraduationCap, Award, Code2, ZoomIn, X } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import { portfolioData, Certification } from "@/data/portfolio";

export default function SkillsAndEducation() {
  const { skillCategories, education, certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="skills"
      className="relative z-10 scroll-mt-20 bg-slate-900/30 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Skills Section Header */}
        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
            Technical Arsenal
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Skills &amp; Engineering Practices
          </h2>
        </div>

        {/* 3D Skills Bento Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((group) => (
            <TiltCard
              key={group.category}
              maxTilt={7}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-md transition hover:border-cyan-500/40"
            >
              <div className="mb-4 flex items-center gap-2.5">
                <Code2 className="h-5 w-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-cyan-500/40 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Education Section */}
        <div id="education" className="mt-20 scroll-mt-24">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                Academic Degree
              </p>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
          </div>

          <TiltCard
            maxTilt={3}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-md transition hover:border-cyan-500/40"
          >
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <h4 className="text-lg font-bold text-white">
                  {education.degree}
                </h4>
                <p className="mt-1 text-sm text-slate-400">
                  {education.institution}
                </p>
              </div>
              <span className="self-start rounded-full bg-cyan-500/15 px-3.5 py-1 text-xs font-semibold text-cyan-300 sm:self-center">
                Class of {education.year}
              </span>
            </div>
          </TiltCard>
        </div>

        {/* Large 3D Visual Certifications Showcase */}
        <div className="mt-20">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">
                  Verified Credentials
                </p>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  Certificates &amp; Training
                </h3>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {certifications.map((cert) => (
              <TiltCard
                key={cert.title}
                maxTilt={5}
                glowColor="rgba(99, 102, 241, 0.16)"
                onClick={() => cert.image && setSelectedCert(cert)}
                className="group flex cursor-pointer flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md transition duration-300 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden border-b border-slate-800/80 bg-slate-950">
                  {cert.image ? (
                    <div className="relative h-full w-full">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        width={900}
                        height={620}
                        className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/50 opacity-0 transition group-hover:opacity-100">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-lg">
                          <ZoomIn className="h-3.5 w-3.5" />
                          Preview Certificate
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-slate-600">
                      <Award className="h-12 w-12 text-slate-700" />
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-xs font-semibold text-cyan-300">
                      {cert.year}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400 transition group-hover:text-cyan-400">
                      <ZoomIn className="h-3.5 w-3.5" />
                      Click to zoom
                    </span>
                  </div>

                  <h4 className="mt-3 text-base font-bold text-white transition group-hover:text-cyan-400">
                    {cert.title}
                  </h4>
                  {cert.subtitle && (
                    <p className="mt-0.5 text-xs font-medium text-indigo-400">
                      {cert.subtitle}
                    </p>
                  )}
                  <p className="mt-2 text-xs text-slate-400">{cert.issuer}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCert && selectedCert.image && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
              <div>
                <h4 className="text-base font-bold text-white">
                  {selectedCert.title}
                </h4>
                <p className="text-xs text-slate-400">
                  {selectedCert.issuer} • {selectedCert.year}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex max-h-[75vh] w-full items-center justify-center overflow-auto bg-slate-950 p-4">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                width={1200}
                height={850}
                className="max-h-[68vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
