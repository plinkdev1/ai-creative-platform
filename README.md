# Sapphari — AI Tech-Stack Discovery Platform

![Next.js](https://img.shields.io/badge/Next.js-15-000000) ![React](https://img.shields.io/badge/React-19-61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-38BDF8) ![Three.js](https://img.shields.io/badge/Three.js-globe-000000) ![status](https://img.shields.io/badge/status-prototype-orange)

> A "Wikipedia of apps and tech stacks" paired with an AI agent that helps you discover, evaluate, and assemble the right tools for any project — cutting through tool overload and decision fatigue.

<p align="center"><img src="screenshots/01.png" width="820"/></p>
<p align="center">
  <img src="screenshots/02.png" width="405"/>
  <img src="screenshots/03.png" width="405"/>
</p>
<p align="center"><img src="screenshots/04.png" width="820"/></p>

## The Problem

The pace of new tools and frameworks is overwhelming — even experienced developers hit decision fatigue choosing among endless options and figuring out which combinations actually fit a given project.

## The Solution

Sapphari combines three pieces:

- **AI Stack Assistant** — a conversational recommendation engine. Describe what you are building and it suggests a fitting stack.
- **Apps Catalog** — a large, searchable database of tools and platforms across categories (developer tooling, AI, healthcare tech, and more), with ratings, pricing model, deployment type, and learning curve.
- **Tech-Stack Builder** — a personalized, customizable stack composer.

## Platform

Beyond the core discovery experience, the build includes a full product surface: dashboard and projects, docs, integrations, community, blog, resources, glossary, roadmap, changelog, plus auth (login/signup) and compliance pages (privacy, security, GDPR, terms).

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript · React 19 |
| Styling | Tailwind CSS v4 · shadcn/ui · Radix |
| 3D / motion | Three.js (globe) · Framer Motion |
| Data viz | Recharts |
| Forms | react-hook-form · Zod |

## Run It

```bash
pnpm install
pnpm dev
```

## Status

Prototype. Front-end is functional on a built-in catalog dataset. Not connected to a live backend; not audited.

## Disclaimer

Prototype / portfolio artifact. Tool and brand names in the catalog are referenced descriptively.
