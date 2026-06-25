# Project Badshah — Holding Company Hub

Welcome to the central brain of **Project Badshah**, the holding company and root ecosystem for our portfolio of applications. 

This directory is NOT a traditional monorepo build system. It is a **Polyrepo** organizational umbrella. Each application within this folder is its own independent startup/vehicle with its own Git repository.

## Curriculum & Architecture Rules
All developers and AI agents must read these documents before making architectural decisions:

- **[01 Vision & Strategy](./01-vision-and-strategy.md)**: The enterprise-grade aspirations and "House of Apps" philosophy.
- **[02 Global Tech Laws](./02-global-tech-laws.md)**: The locked tech stack (HONC, Next.js, Vite), UI aesthetics, and micro-animations rules.
- **[03 Polyrepo Architecture](./03-polyrepo-architecture.md)**: How we share code (like auth) without breaking our strict isolation.
- **[04 Global DNS Routing](./04-global-dns-routing.md)**: The Cloudflare reverse proxy strategy that masks database vendors and prevents ISP blocking.

## The Portfolio
The holding company currently manages the following autonomous applications:

- **[Maaster Landing](./apps/maaster-landing.md)**: The Next.js corporate holding company directory and public face (`maaster.online`).
- **[Event Maaster](./apps/event-maaster.md)**: Marketing and landing gateway.
- **[Hisab Maaster](./apps/hisab-maaster.md)**: Financial accounting & organization tracking.
- **[Photo Maaster](./apps/photo-maaster.md)**: Photography delivery & gallery management.
- **[Dukan Maaster](./apps/dukan-maaster.md)**: Headless HONC e-commerce engine.
- **[Auth Maaster](./apps/auth-maaster.md)**: The unified Single Sign-On (SSO) server and identity logic library.
- **[Invite Maaster](./apps/invite-maaster.md)**: Interactive web-based digital invitations.
- **[Lyrics Maaster](./apps/lyrics-maaster.md)**: India-first live captioning and music recognition engine (RiLycs).
