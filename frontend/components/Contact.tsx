"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialLinks } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

const iconComponents = { github: FaGithub, linkedin: FaLinkedin, mail: Mail };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-bg-elevated border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/60 focus:bg-accent/5 transition-all duration-200 text-sm";

  return (
    <section id="contact" className="section-padding px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Let&apos;s Work Together
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">Get In Touch</h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Have an opportunity, project, or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Let&apos;s connect</h3>
              <p className="text-text-secondary leading-relaxed">
                I&apos;m currently available for internships and entry-level positions.
                Whether you have a question or just want to chat — feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link) => {
                const Icon = iconComponents[link.icon as keyof typeof iconComponents] ?? Mail;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-bg-surface hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-bg-elevated border border-border flex items-center justify-center group-hover:border-accent/40 group-hover:text-accent transition-all">
                      <Icon size={18} className="text-text-secondary group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">{link.label}</p>
                      <p className="text-xs text-text-muted">{link.href.replace("mailto:", "")}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-text-secondary mb-1.5">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm text-text-secondary mb-1.5">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-text-secondary mb-1.5">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Status feedback */}
            {status === "success" && (
              <div className="flex items-center gap-2 text-green-400 text-sm bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3">
                <CheckCircle size={16} /> Message sent! I&apos;ll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                <AlertCircle size={16} /> Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-bg-primary font-semibold hover:bg-accent-dim disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-accent/25"
            >
              {status === "loading" ? (
                <span className="w-4 h-4 border-2 border-bg-primary/30 border-t-bg-primary rounded-full animate-spin" />
              ) : (
                <Send size={16} />
              )}
              {status === "loading" ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
