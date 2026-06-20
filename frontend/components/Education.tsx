"use client";

import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Education() {
  return (
    <section id="education" className="section-padding px-4 relative overflow-hidden" style={{ background: "rgba(17,17,17,0.4)" }}>
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[100px] font-black text-white/[0.02] select-none pointer-events-none leading-none tracking-widest">
        EDUCATION
      </span>

      <div className="max-w-4xl mx-auto relative">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-accent" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">My Background</span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-accent" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">Education</h2>
        </FadeIn>

        <div className="relative">
          {/* Vertical glow line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px md:left-1/2"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(139,92,246,0.4), rgba(139,92,246,0.2), transparent)" }}
          />

          <div className="space-y-12">
            {education.map((item, i) => (
              <FadeIn key={i} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
                <div
                  className={`relative flex items-start gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 -translate-x-1/2 md:left-1/2 z-10">
                    <div
                      className="w-4 h-4 rounded-full border-2 border-accent bg-bg-primary"
                      style={{ boxShadow: "0 0 14px rgba(139,92,246,0.5), 0 0 4px rgba(139,92,246,0.8)" }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="card-glow bg-bg-surface border border-border rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 group relative overflow-hidden">
                      {/* Corner glow */}
                      <div
                        className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: "rgba(139,92,246,0.12)", transform: "translate(40%,-40%)" }}
                      />

                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent/15 transition-colors">
                          <GraduationCap size={16} className="text-accent" />
                        </div>
                        <div>
                          <h3 className="font-bold text-text-primary group-hover:text-accent transition-colors text-sm leading-snug">
                            {item.degree}
                          </h3>
                          <p className="text-xs mt-0.5 font-medium" style={{ color: "#00FF87" }}>
                            {item.institution}
                          </p>
                        </div>
                      </div>

                      <span className="inline-block text-xs px-2.5 py-1 rounded-md bg-bg-elevated border border-border text-text-muted mb-3 font-mono">
                        {item.period}
                      </span>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
