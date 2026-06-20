"use client";

import { useEffect, useState } from "react";
import { Mail, ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const roles = ["Full Stack Developer", "UI/UX Enthusiast", "IT Student", "Problem Solver"];

const orbs = [
  { w: 500, h: 500, left: "-8%",  top: "5%",   color: "rgba(139,92,246,0.09)", anim: "floatA 10s ease-in-out infinite" },
  { w: 350, h: 350, left: "60%",  top: "55%",  color: "rgba(139,92,246,0.06)", anim: "floatB 13s ease-in-out 2s infinite" },
  { w: 220, h: 220, left: "40%",  top: "-5%",  color: "rgba(0,255,135,0.04)",  anim: "floatC 8s ease-in-out 1s infinite" },
  { w: 160, h: 160, left: "80%",  top: "10%",  color: "rgba(139,92,246,0.05)", anim: "floatA 9s ease-in-out 3s infinite" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === current.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIndex]);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Animated floating orbs */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: orb.w,
            height: orb.h,
            left: orb.left,
            top: orb.top,
            background: orb.color,
            animation: orb.anim,
          }}
        />
      ))}

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #8B5CF6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Diagonal accent line — decorative */}
      <div
        className="absolute top-0 right-0 w-px h-full opacity-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #8B5CF6, transparent)" }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT ── */}
          <div>
            {/* Mobile-only photo — hidden on lg+ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex lg:hidden justify-center mb-10"
            >
              <div className="relative w-52 h-52">
                {/* Outer glow halo */}
                <div
                  className="absolute -inset-6 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 65%)" }}
                />
                {/* Rotating dashed ring */}
                <div
                  className="absolute -inset-4 rounded-full border border-dashed border-accent/25 pointer-events-none"
                  style={{ animation: "spin 18s linear infinite" }}
                />
                {/* Static ring */}
                <div className="absolute -inset-1 rounded-full border border-accent/10 pointer-events-none" />

                {/* Photo */}
                <div
                  className="relative w-52 h-52 rounded-full overflow-hidden border-2 border-accent/50"
                  style={{ boxShadow: "0 0 0 6px rgba(139,92,246,0.07), 0 0 60px rgba(139,92,246,0.25)" }}
                >
                  <Image src="/profile.jpg" alt="Chamidu Deshan" fill className="object-cover object-top" priority />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg-surface gap-2">
                    <span
                      className="text-4xl font-extrabold text-accent"
                      style={{ textShadow: "0 0 30px rgba(139,92,246,0.5)" }}
                    >
                      CD
                    </span>
                    <p className="text-[10px] text-text-muted px-4 text-center">
                      Add <span className="text-accent font-mono">profile.jpg</span> to <span className="font-mono">public/</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex justify-center lg:justify-start"
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide mb-8"
                style={{
                  border: "1px solid rgba(0,255,135,0.3)",
                  background: "rgba(0,255,135,0.06)",
                  color: "#00FF87",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00FF87" }} />
                Open to opportunities
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-secondary text-base font-light mb-2 tracking-wide text-center lg:text-left"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-4 text-center lg:text-left"
            >
              Chamidu
              <br />
              <span className="shimmer-text">Deshan</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6 h-7"
            >
              <span className="w-5 h-px bg-accent flex-shrink-0" />
              <span className="text-text-secondary text-sm font-medium tracking-wider uppercase">
                {displayed}
                <span className="inline-block w-0.5 h-3.5 bg-accent ml-0.5 animate-pulse align-middle" />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-text-secondary leading-relaxed max-w-lg mb-10 text-sm text-center lg:text-left"
            >
              Passionate about crafting modern, performant web experiences. I build
              full‑stack applications with clean architecture and pixel‑perfect UIs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <button
                onClick={() => scrollTo("#projects")}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-bg-primary font-semibold text-sm hover:bg-accent-dim transition-all duration-200 shadow-lg hover:shadow-[0_8px_30px_rgba(139,92,246,0.35)] hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-text-primary font-semibold text-sm hover:border-accent/50 hover:text-accent hover:bg-accent/5 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download size={15} />
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              {[
                { href: "https://github.com/chamidu-deshan", Icon: FaGithub, label: "GitHub" },
                { href: "https://linkedin.com/in/chamidu-deshan", Icon: FaLinkedin, label: "LinkedIn" },
                { href: "mailto:chamidu@example.com", Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-text-muted hover:text-accent transition-colors duration-200 hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
              <span className="w-px h-5 bg-border" />
              <button
                onClick={() => scrollTo("#contact")}
                className="text-sm text-text-muted hover:text-accent transition-colors"
              >
                Let&apos;s talk →
              </button>
            </motion.div>
          </div>

          {/* ── RIGHT — photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow halo */}
              <div
                className="absolute -inset-8 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 68%)",
                }}
              />
              {/* Rotating ring */}
              <div
                className="absolute -inset-6 rounded-full border border-dashed border-accent/20 pointer-events-none"
                style={{ animation: "spin 18s linear infinite" }}
              />
              {/* Static outer ring */}
              <div className="absolute -inset-3 rounded-full border border-accent/10 pointer-events-none" />

              {/* Photo */}
              <div
                className="relative w-72 h-72 rounded-full overflow-hidden border-2 border-accent/40"
                style={{ boxShadow: "0 0 0 6px rgba(139,92,246,0.08), 0 0 70px rgba(139,92,246,0.22)" }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Chamidu Deshan"
                  fill
                  className="object-cover object-top"
                  priority
                  onError={() => {}}
                />
                {/* Fallback */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg-surface">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-extrabold text-accent border border-accent/30 mb-3"
                    style={{ background: "rgba(139,92,246,0.08)" }}
                  >
                    CD
                  </div>
                  <p className="text-xs text-text-muted text-center px-6">
                    Add <span className="text-accent font-mono">profile.jpg</span> to{" "}
                    <span className="font-mono">public/</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
