"use client";

import { useEffect, useState } from "react";
import {
  Command,
  Search,
  Download,
  Mail,
  FolderGit2,
  Award,
  X,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { personalInfo } = portfolioData;

  const scrollToSection = (id: string) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "Escape") {
        if (e.key === "Escape") {
          setOpen(false);
        } else {
          e.preventDefault();
          setOpen((prev) => !prev);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const actions = [
    {
      label: "Explore Featured Projects",
      category: "Navigation",
      icon: FolderGit2,
      perform: () => scrollToSection("projects"),
    },
    {
      label: "Test Interactive Frontend Lab",
      category: "Interactive",
      icon: Sparkles,
      perform: () => scrollToSection("frontend-lab"),
    },
    {
      label: "View Skills & Certificates",
      category: "Navigation",
      icon: Award,
      perform: () => scrollToSection("skills"),
    },
    {
      label: "Download Resume (PDF)",
      category: "Actions",
      icon: Download,
      perform: () => {
        setOpen(false);
        window.open(personalInfo.cvUrl, "_blank");
      },
    },
    {
      label: "Send Email via Gmail",
      category: "Contact",
      icon: Mail,
      perform: () => {
        setOpen(false);
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`,
          "_blank",
        );
      },
    },
    {
      label: "Open GitHub Profile",
      category: "Social",
      icon: GithubIcon,
      perform: () => {
        setOpen(false);
        window.open(personalInfo.githubUrl, "_blank");
      },
    },
    {
      label: "Open LinkedIn Profile",
      category: "Social",
      icon: LinkedinIcon,
      perform: () => {
        setOpen(false);
        window.open(personalInfo.linkedinUrl, "_blank");
      },
    },
  ];

  const filtered = actions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      {/* Floating Action Button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-6 bottom-6 z-40 flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/90 px-4 py-2.5 text-xs font-medium text-slate-300 shadow-2xl backdrop-blur-md transition hover:border-cyan-500/50 hover:text-white"
        aria-label="Open Command Menu"
      >
        <Command className="h-3.5 w-3.5 text-cyan-400" />
        <span>Quick Menu</span>
        <kbd className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[10px] text-cyan-300">
          Ctrl K
        </kbd>
      </button>

      {/* Modal Dialog */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/80 px-4 pt-20 backdrop-blur-sm">
          <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
            {/* Search Input Bar */}
            <div className="flex items-center border-b border-slate-800 px-4 py-3">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or jump to section..."
                className="w-full bg-transparent px-3 text-sm text-white placeholder-slate-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Actions List */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length > 0 ? (
                filtered.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={item.perform}
                      className="flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-left text-xs font-medium text-slate-300 transition hover:bg-cyan-500/15 hover:text-cyan-300"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-cyan-400" />
                        <span>{item.label}</span>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-500">
                        {item.category}
                      </span>
                    </button>
                  );
                })
              ) : (
                <p className="py-6 text-center text-xs text-slate-500">
                  No matching actions found.
                </p>
              )}
            </div>

            {/* Footer Tip */}
            <div className="flex items-center justify-between border-t border-slate-800/80 bg-slate-950/60 px-4 py-2 text-[11px] text-slate-500">
              <span>Navigate with mouse or keyboard</span>
              <kbd className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
                ESC to close
              </kbd>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
