# Sapphari — The Creative Platform

![Next.js](https://img.shields.io/badge/Next.js-15-000000) ![React](https://img.shields.io/badge/React-19-61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-38BDF8) ![Three.js](https://img.shields.io/badge/Three.js-3D_globe-000000) ![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF) ![status](https://img.shields.io/badge/status-prototype-orange)

> Sapphari is a "Creative Platform" built on one motto — **Design anything. Design everything.** It pairs a world-class catalog of apps and tech stacks with an AI advisor and a project workspace, so creators, developers, designers, and R&D teams can discover the right tools, assemble a stack, and build.

<p align="center"><img src="screenshots/01.png" width="820"/></p>
<p align="center">
  <img src="screenshots/02.png" width="405"/>
  <img src="screenshots/03.png" width="405"/>
</p>
<p align="center"><img src="screenshots/04.png" width="820"/></p>

## The Vision

A single dashboard to create, edit, improve, design, augment, and learn anything. At its heart is a continuously expanding glossary of the tools and platforms of modern software — databases, AI/LLM tooling, design, marketing, automation, CRMs, CMSs — paired with an AI agent that recommends the right combination for whatever you are building.

## Two Experiences

### Marketing site (logged-out)
A deliberately non-generic landing experience: an interactive 3D globe hero, light/dark theming, multi-language support (EN/ES/FR/DE/PT/JA/ZH), and the full professional surface — features, pricing, resources, community, docs, blog, careers, changelog, roadmap, glossary, tutorials, plus legal pages (privacy, security, GDPR, terms).

### Dashboard (logged-in)
A workspace organized around a left-nav of **Home, Apps, Files, Projects, Learn, Community, Resources, Settings**. The home screen surfaces recent apps and files, active projects, community highlights, and quick actions (new project, install integrations, take a tour, explore plans).

## Core Features

- **AI Stack Assistant** — a conversational recommendation engine: describe what you are building and it proposes a fitting stack.
- **Apps Catalog** — a large, searchable, categorized database of tools and platforms, each with developer, description, category, rating, review count, pricing model, deployment type, learning curve, tags, and website.
- **Tech-Stack Builder** — assemble and customize a stack for a specific project.
- **Projects & Files** — organize work, files, and active builds.
- **Learn & Community** — tutorials, resources, and a community layer for creators and teams.

## Design

Built to avoid generic AI aesthetics — drawing on Stripe, Linear, Vercel, Raycast, and Arc: an interactive Three.js globe, Framer Motion micro-interactions, glass-morphism surfaces, a considered light/dark system, and contemporary typography (Geist).

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript · React 19 |
| Styling | Tailwind CSS v4 · shadcn/ui · Radix |
| 3D / motion | Three.js · Framer Motion |
| Data viz | Recharts |
| Forms | react-hook-form · Zod |
| Theming | next-themes · Geist |

## Routes
/                    landing (3D globe hero)
/dashboard           workspace home
/dashboard/apps      AI stack advisor + apps catalog
/dashboard/projects  projects
docs · integrations · resources · glossary · tutorials · community · blog · careers · changelog · roadmap
login · signup · forgot-password
about · contact · help · privacy · security · gdpr · terms

## Run It

```bash
pnpm install
pnpm dev
```

## Status

Prototype. Front-end is functional on a built-in catalog dataset, with the non-generic design system in place. Not connected to a live backend; not audited.

## Disclaimer

Prototype / portfolio artifact. App and platform names in the catalog are referenced descriptively.
