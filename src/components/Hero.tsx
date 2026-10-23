"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Terminal,
  Sparkles,
  Box,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { personalInfo } = portfolioData;
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`;

  // 3D Card Tilt & Spotlight State
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  // 3D Wireframe Canvas Reference
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({ rotateX, rotateY });
    setSpotlight({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  // 3D Rotating Geometric Core Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const angleX = 0.015;
    const angleY = 0.02;

    // Golden ratio icosahedron vertices in 3D space
    const t = (1 + Math.sqrt(5)) / 2;
    const rawVertices = [
      [-1, t, 0],
      [1, t, 0],
      [-1, -t, 0],
      [1, -t, 0],
      [0, -1, t],
      [0, 1, t],
      [0, -1, -t],
      [0, 1, -t],
      [t, 0, -1],
      [t, 0, 1],
      [-t, 0, -1],
      [-t, 0, 1],
    ];

    const vertices = rawVertices.map(([x, y, z]) => ({
      x: x * 36,
      y: y * 36,
      z: z * 36,
    }));

    // Connect nearby vertices to form 3D geometric edges
    const edges: [number, number][] = [];
    for (let i = 0; i < vertices.length; i++) {
      for (let j = i + 1; j < vertices.length; j++) {
        const dx = vertices[i].x - vertices[j].x;
        const dy = vertices[i].y - vertices[j].y;
        const dz = vertices[i].z - vertices[j].z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 80) {
          edges.push([i, j]);
        }
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Rotate vertices in 3D
      for (const v of vertices) {
        // Rotate Y
        const x1 = v.x * Math.cos(angleY) - v.z * Math.sin(angleY);
        const z1 = v.z * Math.cos(angleY) + v.x * Math.sin(angleY);
        // Rotate X
        const y2 = v.y * Math.cos(angleX) - z1 * Math.sin(angleX);
        const z2 = z1 * Math.cos(angleX) + v.y * Math.sin(angleX);

        v.x = x1;
        v.y = y2;
        v.z = z2;
      }

      // Project 3D to 2D with perspective depth
      const projected = vertices.map((v) => {
        const fov = 220;
        const scale = fov / (fov + v.z);
        return {
          x: cx + v.x * scale,
          y: cy + v.y * scale,
          z: v.z,
          scale,
        };
      });

      // Draw 3D edges
      for (const [i, j] of edges) {
        const p1 = projected[i];
        const p2 = projected[j];
        const depthAlpha = Math.max(0.15, (p1.z + p2.z + 140) / 280);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(34, 211, 238, ${depthAlpha * 0.65})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // Draw glowing 3D nodes
      for (const p of projected) {
        const alpha = Math.max(0.3, (p.z + 70) / 140);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5 * p.scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129, 140, 248, ${alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32"
    >
      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute top-32 right-10 -z-10 h-80 w-80 rounded-full bg-indigo-600/15 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-12">
        {/* Left Column: Intro & CTAs */}
        <div className="lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            {personalInfo.availability}
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <p className="mt-3 flex items-center gap-2 text-lg font-semibold text-slate-300 sm:text-xl">
            <Sparkles className="h-5 w-5 text-cyan-400" />
            {personalInfo.role}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
            {personalInfo.summary}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-cyan-400" />
            <span>{personalInfo.location}</span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:opacity-95"
            >
              Explore Projects
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href={personalInfo.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-500/50 hover:text-white"
            >
              <Download className="h-4 w-4 text-cyan-400" />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 transition hover:border-cyan-500/40 hover:text-cyan-400"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 transition hover:border-cyan-500/40 hover:text-cyan-400"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 transition hover:border-cyan-500/40 hover:text-cyan-400"
              aria-label="Send Email via Gmail"
              title="Send Email via Gmail"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive 3D Tilt Card + 3D Rotating Tech Core */}
        <div className="lg:col-span-5" style={{ perspective: "1000px" }}>
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
              transition:
                tilt.rotateX === 0
                  ? "transform 0.5s ease-out"
                  : "transform 0.08s ease-out",
            }}
            className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl backdrop-blur-xl"
          >
            {/* Dynamic Mouse Spotlight Glow */}
            <div
              className="pointer-events-none absolute -inset-px transition-opacity duration-300"
              style={{
                opacity: spotlight.opacity,
                background: `radial-gradient(350px circle at ${spotlight.x}% ${spotlight.y}%, rgba(34, 211, 238, 0.14), transparent 80%)`,
              }}
            />

            {/* Window Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-slate-800 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                <span>developer.config.ts</span>
              </div>
            </div>

            {/* 3D Rotating Geometric Core Floating Inside Card */}
            <div className="pointer-events-none absolute top-10 right-2 z-0 opacity-80">
              <canvas ref={canvasRef} width={160} height={160} />
            </div>

            {/* Code Content */}
            <div className="relative z-10 p-6 font-mono text-xs leading-relaxed text-slate-300 sm:text-sm">
              <p>
                <span className="text-indigo-400">const</span>{" "}
                <span className="text-cyan-300">engineer</span> = {"{"}
              </p>
              <p className="pl-4">
                name:{" "}
                <span className="text-emerald-300">
                  &apos;Amged Badawy&apos;
                </span>
                ,
              </p>
              <p className="pl-4">
                stack: [
                <span className="text-amber-300">&apos;Next.js&apos;</span>,{" "}
                <span className="text-amber-300">&apos;React&apos;</span>,{" "}
                <span className="text-amber-300">&apos;TypeScript&apos;</span>],
              </p>
              <p className="pl-4">
                styling:{" "}
                <span className="text-emerald-300">
                  &apos;Tailwind CSS&apos;
                </span>
                ,
              </p>
              <p className="pl-4">specialties: [</p>
              <p className="pl-8 text-amber-300">
                &apos;Reusable UI Architecture&apos;,
              </p>
              <p className="pl-8 text-amber-300">
                &apos;Arabic-First RTL Layouts&apos;,
              </p>
              <p className="pl-8 text-amber-300">
                &apos;Responsive &amp; Accessible Web&apos;
              </p>
              <p className="pl-4">],</p>
              <p className="pl-4">
                openToWork: <span className="text-cyan-400">true</span>
              </p>
              <p>{"};"}</p>

              {/* 3D Interactive Footer Badge */}
              <div className="mt-4 flex items-center justify-between border-t border-slate-800/80 pt-3 text-[11px] text-slate-400">
                <span className="inline-flex items-center gap-1.5 text-cyan-400">
                  <Box className="h-3.5 w-3.5 animate-pulse" />
                  3D Interactive Canvas Active
                </span>
                <span>Hover to tilt 3D</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
