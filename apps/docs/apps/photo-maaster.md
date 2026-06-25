# Photo Maaster

## Overview
Photo Maaster is a robust, scalable portal for managing event photography deliverables, client galleries, and asset distribution.

## Architecture
Currently structured to utilize the **HONC Stack**:
- Hono API endpoints deployed via Cloudflare Workers.
- Drizzle ORM integrated with a serverless PostgreSQL database (Neon).
- Handles heavy asset payloads efficiently at the edge.
