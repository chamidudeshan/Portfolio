"use client";

import { skillCategories } from "@/lib/data";
import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

const iconMap: Record<string, string> = {
  js:       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  ts:       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  react:    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  next:     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  node:     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express:  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  python:   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  java:     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  mysql:    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  mongo:    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  git:      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  docker:   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  linux:    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
};

const invertIcons = new Set(["express", "next"]);

export default function Skills() {
  return (
    <section id="skills" className="section-padding px-4 relative overflow-hidden">
      {/* Section background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Top + bottom fade masks */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg-primary to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none z-10" />

      {/* Ghost text */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[160px] font-black text-white/[0.015] select-none pointer-events-none leading-none tracking-widest whitespace-nowrap">
        SKILLS
      </span>

      <div className="max-w-6xl mx-auto relative z-20">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-accent" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">What I Work With</span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-accent" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">Tech Stack</h2>
        </FadeIn>

        <div className="space-y-12">
          {skillCategories.map((cat, ci) => (
            <FadeIn key={cat.label} delay={ci * 0.1}>
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{
                    color: "#8B5CF6",
                    border: "1px solid rgba(139,92,246,0.25)",
                    background: "rgba(139,92,246,0.06)",
                  }}
                >
                  {cat.label}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-accent/20 to-transparent" />
              </div>

              {/* Skill cards grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: ci * 0.05 + si * 0.06, ease: "easeOut" }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group card-glow relative flex flex-col items-center gap-3 p-5 rounded-2xl border border-border bg-bg-surface hover:border-accent/40 transition-all duration-300 cursor-default overflow-hidden"
                  >
                    {/* Hover glow bg */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                      style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.1) 0%, transparent 70%)" }}
                    />

                    {/* Icon */}
                    <div className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-bg-elevated border border-border group-hover:border-accent/30 transition-colors duration-300">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={iconMap[skill.icon]}
                        alt={skill.name}
                        className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                        style={invertIcons.has(skill.icon) ? { filter: "invert(1)" } : {}}
                      />
                    </div>

                    {/* Name */}
                    <span className="text-xs font-semibold text-text-muted group-hover:text-text-primary transition-colors text-center leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
