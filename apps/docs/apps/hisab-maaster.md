# Hisab Maaster

## Overview
Hisab Maaster is a highly secure financial accounting and tracking software built for tracking organizational and employee expenses within the events industry.

## Architecture
It operates as a **Plain React + Vite** dashboard frontend communicating with a **HONC Stack** (Hono, Neon, Drizzle, Cloudflare) backend via Hono RPC.

## Key Features
- **Strict Log-Only Architecture**: Mathematical constraints and DB triggers block users from altering amounts or descriptions after submission.
- **Anti-Cascade Policy**: RESTRICT rules prevent silent data loss upon entity deletion.
- **Role-Based Access Control**: Strict separation between Employee submissions and Admin comprehensive visibility.
