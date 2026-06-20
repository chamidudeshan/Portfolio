"use client";

import { Mail, Link, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks } from "@/lib/data";

const navCol1 = navLinks.slice(0, Math.ceil(navLinks.length / 2));
const navCol2 = navLinks.slice(Math.ceil(navLinks.length / 2));

const connectLinks = [
  { href: "https://linkedin.com/in/chamidu-deshan",  Icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://github.com/chamidu-deshan",       Icon: FaGithub,   label: "GitHub"   },
  { href: "mailto:chamidudeshanmn@gmail.com",        Icon: Mail,        label: "Email"    },
  { href: "https://linktr.ee/chamidu-deshan",        Icon: Link,        label: "Linktree" },
];

const builtWith = ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"];

export default function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-border" style={{ background: "#0d0d0d" }}>
      {/* Accent top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #8B5CF666, #8B5CF6aa, #8B5CF666, transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-12 pb-10">

        {/* ══ MOBILE layout (< lg) ══ */}
        <div className="lg:hidden mb-10">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-baseline gap-0.5 mb-8"
          >
            <span className="text-2xl font-black" style={{ color: "#8B5CF6" }}>CD</span>
            <span className="text-3xl font-black text-white leading-none">.</span>
          </button>

          {/* Two columns side by side */}
          <div className="flex gap-6">
            {/* NAVIGATE */}
            <div className="flex-1">
              <p style={{ color: "#555", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "16px" }}>
                Navigate
              </p>
              <div className="flex flex-col gap-3.5">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-left text-sm font-medium transition-colors duration-200 hover:text-white"
                    style={{ color: "#6b6b6b" }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Vertical divider */}
            <div className="w-px self-stretch" style={{ background: "rgba(255,255,255,0.06)" }} />

            {/* CONNECT */}
            <div className="flex-1">
              <p style={{ color: "#555", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "16px" }}>
                Connect
              </p>
              <ul className="flex flex-col gap-3.5">
                {connectLinks.map(({ href, Icon, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-sm font-medium transition-colors duration-200 hover:text-white"
                      style={{ color: "#6b6b6b" }}
                    >
                      <Icon size={14} style={{ color: "inherit" }} />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ══ DESKTOP layout (≥ lg) ══ */}
        <div className="hidden lg:grid grid-cols-[2fr_1fr_1fr] gap-12 mb-14">
          {/* Brand */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-baseline gap-0.5 mb-4 w-fit hover:opacity-80 transition-opacity"
            >
              <span className="text-3xl font-black text-accent">CD</span>
              <span className="text-4xl font-black text-text-primary leading-none">.</span>
            </button>
            <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-xs">
              A passionate IT student & full‑stack developer building modern,
              performant web experiences with clean code and great UIs.
            </p>
            <a
              href="mailto:chamidudeshanmn@gmail.com"
              className="group inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors w-fit mb-8"
            >
              <Mail size={14} className="text-accent" />
              chamidudeshanmn@gmail.com
              <ArrowRight size={13} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </a>
            <div className="flex items-center gap-3">
              {connectLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-border bg-bg-surface flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-[10px] font-bold text-text-muted tracking-[0.2em] uppercase mb-6">
              Navigate
            </h4>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-text-secondary hover:text-accent transition-colors duration-200 hover:translate-x-1 inline-flex transition-transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[10px] font-bold text-text-muted tracking-[0.2em] uppercase mb-6">
              Connect
            </h4>
            <ul className="space-y-3.5">
              {connectLinks.map(({ href, Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors group"
                  >
                    <Icon size={14} className="text-text-muted group-hover:text-accent transition-colors" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border mb-7" />

        {/* Mobile social circles */}
        <div className="flex justify-center gap-3 mb-6 lg:hidden">
          {connectLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-border bg-bg-surface flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 transition-all duration-200"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        {/* Copyright & built-with — centered */}
        <div className="text-center space-y-1.5">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()}{" "}
            <span className="text-text-secondary font-medium">Chamidu Deshan</span>
            . All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Built with{" "}
            {builtWith.map((tech, i) => (
              <span key={tech}>
                <span className="text-text-secondary">{tech}</span>
                {i < builtWith.length - 1 && <span className="mx-1.5 opacity-40">•</span>}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
