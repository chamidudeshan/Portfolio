"use client";

import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/lib/data";
import FadeIn from "./FadeIn";

const gradients = [
  "linear-gradient(135deg, rgba(139,92,246,0.25) 0%, rgba(109,40,217,0.1) 100%)",
  "linear-gradient(135deg, rgba(79,70,229,0.25) 0%, rgba(139,92,246,0.1) 100%)",
  "linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(196,91,219,0.15) 100%)",
  "linear-gradient(135deg, rgba(109,40,217,0.2) 0%, rgba(79,70,229,0.15) 100%)",
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding px-4 relative overflow-hidden">
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[120px] font-black text-white/[0.02] select-none pointer-events-none leading-none tracking-widest">
        WORK
      </span>

      <div className="max-w-6xl mx-auto relative">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-accent" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">What I&apos;ve Built</span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-accent" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">Projects</h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="card-glow group relative bg-bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300 flex flex-col h-full">

                {/* Gradient banner */}
                <div
                  className="h-28 relative flex items-end px-6 pb-4 flex-shrink-0"
                  style={{ background: gradients[i % gradients.length] }}
                >
                  {/* Project number */}
                  <span className="absolute top-3 right-5 text-5xl font-black text-white/10 select-none leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Shimmer line at bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px opacity-40"
                    style={{ background: "linear-gradient(90deg, transparent, #8B5CF6, transparent)" }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-bg-elevated border border-border text-text-muted font-mono hover:border-accent/30 hover:text-accent transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-border">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors group/link"
                    >
                      <FaGithub size={15} className="group-hover/link:scale-110 transition-transform" />
                      Source Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors group/link ml-auto"
                      >
                        <ExternalLink size={14} className="group-hover/link:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
