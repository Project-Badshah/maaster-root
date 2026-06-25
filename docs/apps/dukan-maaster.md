# Dukan Maaster

## Overview
Dukan Maaster is the core B2B e-commerce and storefront engine for the Project Badshah ecosystem.

## Architecture
It operates as a **Domain-Driven Mini-Monorepo** (pnpm workspace) containing:
1. **`apps/dukan-api`**: A Headless HONC Backend built on Hono, Drizzle ORM, and Neon serverless PostgreSQL, deployed to Cloudflare Workers.
2. **`apps/dukan-frontend`**: A beautiful, highly-optimized Next.js frontend that consumes the API to render the storefront.
3. **`packages/dukan-sdk`**: A shared NPM client SDK ensuring strict end-to-end type safety between the frontend and the backend.

## Integration
Being headless, the API exposes pure JSON endpoints that can be attached to any number of Next.js frontends or mobile apps. The `dukan-sdk` ensures that any future storefronts built for clients can seamlessly interact with the core engine.

*Detailed blueprints are available within its specific local repository.*
