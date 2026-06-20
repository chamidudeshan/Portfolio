"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Code2, Coffee, Lightbulb, Rocket } from "lucide-react";
import FadeIn from "./FadeIn";

const stats = [
  { icon: Code2,     label: "Projects Built",   value: 10,  suffix: "+" },
  { icon: Coffee,    label: "Cups of Coffee",   value: 999, suffix: "+" },
  { icon: Lightbulb, label: "Problems Solved",  value: 100, suffix: "+" },
  { icon: Rocket,    label: "Years Learning",   value: 3,   suffix: "+" },
];

const tags = ["Open to Work", "Quick Learner", "Team Player", "Problem Solver"];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const startTime = performance.now();
    const animate = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.floor(eased * target));
      if (t < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target]);

  const display = target === 999 ? "∞" : `${count}${suffix}`;
  return <span ref={ref}>{display}</span>;
}

export default function About() {
  return (
    <section id="about" className="section-padding px-4 relative overflow-hidden">
      {/* Decorative large ghost text */}
      <span
        className="absolute -top-4 left-1/2 -translate-x-1/2 text-[120px] font-black text-white/[0.02] select-none pointer-events-none leading-none tracking-widest"
      >
        ABOUT
      </span>

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-accent" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">Who I Am</span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-accent" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">About Me</h2>
        </FadeIn>

        {/* Two-column: bio left, stats right */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-0">
          <FadeIn direction="left">
            <div className="space-y-4 text-text-secondary leading-relaxed mb-8">
              <p>
                I&apos;m a passionate IT student with a strong foundation in full-stack web
                development. I love turning ideas into reality through clean, efficient code
                and intuitive user experiences.
              </p>
              <p>
                My journey in tech started with a curiosity about how things work on the web.
                Since then I&apos;ve been building projects, learning new technologies, and
                continuously improving my skills in both frontend and backend development.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                contributing to open‑source, or designing better UI solutions.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{
                    border: "1px solid rgba(0,255,135,0.3)",
                    background: "rgba(0,255,135,0.06)",
                    color: "#00FF87",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, label, value, suffix }, i) => (
              <FadeIn key={label} delay={i * 0.1} direction="right">
                <div className="card-glow bg-bg-surface border border-border rounded-2xl p-6 text-center transition-all duration-300 group hover:border-accent/30 relative overflow-hidden">
                  {/* Subtle gradient corner */}
                  <div
                    className="absolute top-0 right-0 w-16 h-16 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "rgba(139,92,246,0.15)", transform: "translate(30%,-30%)" }}
                  />
                  <Icon size={22} className="mx-auto mb-3 text-text-muted group-hover:text-accent transition-colors" />
                  <div className="text-3xl font-black text-accent mb-1">
                    <Counter target={value} suffix={suffix} />
                  </div>
                  <div className="text-xs text-text-muted">{label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
