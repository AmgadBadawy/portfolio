"use client";

import { useState } from "react";
import { Mail, MessageCircle, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function ContactFooter() {
  const { personalInfo } = portfolioData;
  const [copied, setCopied] = useState(false);

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="scroll-mt-20 border-t border-slate-800/80 pt-20 pb-12"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 p-8 text-center sm:p-12">
          <p className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
            Get In Touch
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
            I&apos;m currently available for Junior Frontend Developer roles and
            exciting web projects. Feel free to reach out directly via Gmail or
            WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {/* Direct Gmail Web Compose Link */}
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
            >
              <Mail className="h-4 w-4" />
              Send via Gmail ({personalInfo.email})
            </a>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-500/40 hover:text-cyan-300"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span className="text-emerald-300">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-cyan-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            {/* WhatsApp Link */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-3.5 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp ({personalInfo.phone})
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-400">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-cyan-400"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-cyan-400"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-900 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 {personalInfo.fullName}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
