# 02. Global Tech Laws

> **IMPORTANT**: Before making any architectural decisions, adding new dependencies, or creating new components, you MUST refer to this cheatsheet.

## 1. Core Architecture & Tech Stack (LOCKED)

Our golden rule of thumb for frameworks: 
**If the public needs to search for it on Google -> Next.js. If it requires a user to log in -> Plain React + Vite.**

### The Storefronts (Marketing & Public Pages)
- **Framework**: Next.js (App Router) strictly.
- **Role**: Primary customer-facing gateways (e.g., `event.maaster.online`). SEO optimized and server-side rendered.

### The Dashboards (Core SaaS Applications)
- **Framework**: Plain React + Vite strictly.
- **Role**: Highly interactive web apps for core business operations (`photo-maaster`, `hisab-maaster`).

### The Brain (Backend APIs)
- **Framework**: Cloudflare Workers using **Hono**.
- **Role**: High-performance, edge-deployed APIs with zero cold starts and ultra-low latency.

### The Memory (Database)
- **Database**: Neon Postgres (serverless SQL built for the edge).
- **ORM**: Drizzle ORM (lightweight, edge-compatible).

## 2. Design Principles

- **Apple-like Aesthetics**: Design must be clean, minimal, and premium. Avoid generic placeholder designs. Use tailored palettes, smooth gradients, and glassmorphism.
- **Micro-Animations**: Extensive use of subtle transitions (**Framer Motion**) is mandatory to make interactive elements feel responsive and premium.
- **Enterprise Grade**: Write code assuming it will be heavily scaled. Use proper TypeScript typing, environment validation (Zod), and modular design.

## 3. Unified Identity (Multi-Tenant SaaS)
- **Zero Silos:** Never build siloed authentication or database schemas.
- **Auth SDK:** Always run `npm install auth-sdk` (or use the local `Project Badshah/auth-sdk`) in your frontend apps. This SDK automatically handles JWT cryptography, SMS OTPs, and Email Verifications by securely connecting to the central `auth-maaster` API.
- **Global Tenant Rule:** Every single database table across the entire holding company must contain a non-nullable `organization_id` foreign key. We operate exclusively on a "Shared Database, Isolated Rows" architecture.
