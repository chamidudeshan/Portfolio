"use client";

import { useState, useEffect } from "react";
import { X, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const update = () => {
      const scrollY = window.scrollY + 120;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActiveSection(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const go = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={
          scrolled
            ? {
                background: "rgba(10,10,10,0.92)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 1px 40px rgba(0,0,0,0.4)",
              }
            : { background: "transparent" }
        }
      >
        {/* Purple glow line at bottom when scrolled */}
        {scrolled && (
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent)",
            }}
          />
        )}

        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-baseline gap-0.5 group"
            >
              <span className="text-xl font-black text-accent tracking-tight group-hover:opacity-80 transition-opacity">
                CD
              </span>
              <span className="text-2xl font-black text-text-primary leading-none group-hover:opacity-80 transition-opacity">
                .
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = activeSection === link.href.slice(1);
                return (
                  <button
                    key={link.href}
                    onClick={() => go(link.href)}
                    className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                    style={{ color: active ? "#8B5CF6" : "#a0a0a0" }}
                    onMouseEnter={(e) => {
                      if (!active) (e.currentTarget as HTMLElement).style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      if (!active) (e.currentTarget as HTMLElement).style.color = "#a0a0a0";
                    }}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background: "rgba(139,92,246,0.1)",
                          border: "1px solid rgba(139,92,246,0.2)",
                        }}
                        transition={{ type: "spring", bounce: 0.18, duration: 0.45 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right: CTA + hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => go("#contact")}
                className="hidden md:inline-flex items-center gap-2 text-sm font-bold px-5 py-2 rounded-lg bg-accent text-bg-primary hover:bg-accent-dim transition-all duration-200 hover:shadow-[0_4px_20px_rgba(139,92,246,0.4)] hover:-translate-y-0.5"
              >
                Hire Me
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-border bg-bg-surface/80 text-text-secondary hover:text-accent hover:border-accent/40 transition-all duration-200"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isOpen ? "x" : "menu"}
                    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                  >
                    {isOpen ? <X size={16} /> : <SlidersHorizontal size={16} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40"
            style={{
              background: "rgba(10,10,10,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            }}
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const active = activeSection === link.href.slice(1);
                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => go(link.href)}
                    className="text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{
                      color: active ? "#8B5CF6" : "#a0a0a0",
                      background: active ? "rgba(139,92,246,0.08)" : "transparent",
                      border: active ? "1px solid rgba(139,92,246,0.2)" : "1px solid transparent",
                    }}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
              <div className="pt-3 mt-1 border-t border-border">
                <button
                  onClick={() => go("#contact")}
                  className="w-full text-sm font-bold px-4 py-3 rounded-xl bg-accent text-bg-primary hover:bg-accent-dim transition-all duration-200"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
