# Portfolio Website — Build Plan
**Owner:** Chamidu Deshan

## Overview
Modern professional portfolio for an IT student.
- **Theme:** Dark / black background with cyan accent
- **Frontend:** Next.js 14 (App Router) + Tailwind CSS + Framer Motion
- **Backend:** Node.js + Express (handles contact form / email)
- **Language:** TypeScript throughout

---

## Sections

| # | Section | Purpose |
|---|---------|---------|
| 1 | Hero | Name, title, animated tagline, CTA buttons |
| 2 | About | Short bio, photo, key facts |
| 3 | Skills | Tech stack icon grid |
| 4 | Projects | Card grid — title, desc, tech tags, GitHub/live links |
| 5 | Education | Vertical timeline |
| 6 | Contact | Form (calls backend API) + social links |
| 7 | Footer | Copyright, back-to-top |

---

## Design Tokens (Tailwind config)

```
Background:     #0a0a0a  (bg-primary)
Surface:        #111111  (cards, nav)
Elevated:       #1a1a1a  (hover)
Accent:         #00d4ff  (cyan)
Accent glow:    rgba(0,212,255,0.15)
Text primary:   #ffffff
Text secondary: #a0a0a0
Border:         rgba(255,255,255,0.08)
Font:           Inter
```

---

## Project Structure

```
portfolio/
├── frontend/                  ← Next.js 14 app
│   ├── app/
│   │   ├── layout.tsx         ← root layout, fonts, metadata
│   │   ├── page.tsx           ← home page (all sections)
│   │   └── globals.css        ← Tailwind base + custom CSS vars
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   └── data.ts            ← all content data (projects, skills, etc.)
│   ├── tailwind.config.ts
│   ├── next.config.ts
│   └── package.json
│
├── backend/                   ← Express API
│   ├── src/
│   │   ├── index.ts           ← server entry
│   │   └── routes/
│   │       └── contact.ts     ← POST /api/contact → sends email
│   ├── tsconfig.json
│   └── package.json
│
└── PLAN.md
```

---

## Build Steps

- [ ] **Step 1 — Project scaffolding** (init Next.js + Express, install deps, Tailwind config)
- [ ] **Step 2 — Layout & Navbar** (root layout, sticky nav, mobile menu)
- [ ] **Step 3 — Hero section** (animated name, tagline, CTA buttons, background glow)
- [ ] **Step 4 — About section** (bio, photo placeholder, key facts)
- [ ] **Step 5 — Skills section** (icon grid with hover glow)
- [ ] **Step 6 — Projects section** (cards with tech tags, links)
- [ ] **Step 7 — Education section** (vertical timeline)
- [ ] **Step 8 — Contact section + backend** (form → Express API → email)
- [ ] **Step 9 — Footer**
- [ ] **Step 10 — Animations** (Framer Motion scroll reveals, page transitions)
- [ ] **Step 11 — Responsive / mobile polish**

---

## Notes
- Name: **Chamidu Deshan**
- Accent color: **#00d4ff** (cyan) — change in `tailwind.config.ts` to swap globally
- Backend runs on **port 5000**, frontend on **port 3000**
- Contact form sends email via Nodemailer (SMTP config in `.env`)
