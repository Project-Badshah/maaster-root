# Dukan Maaster

## Overview
Dukan Maaster is the core e-commerce and storefront engine for the Project Badshah ecosystem.

## Architecture
It operates as a **Headless HONC Backend**:
- **Hono** for high-speed edge API routing.
- **Drizzle ORM** for type-safe database queries.
- **Neon** serverless PostgreSQL for scalable storage.
- **Cloudflare** for Workers (compute), KV (caching guest carts/sessions), and R2 (media storage).

## Integration
Being headless, Dukan Maaster exposes pure JSON APIs that can be attached to any Next.js frontend or mobile app.

*Detailed blueprints are available within its specific local `docs/` folder.*
