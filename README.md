# MAASTER

**Modern Automated Architecture — Scalable Technology, Engineered Right.**

MAASTER is a tech solutions holding company operating a portfolio of independent, edge-native SaaS products.

---

## The Portfolio

| Product | Domain | Description |
| :--- | :--- | :--- |
| [Dukan Maaster](https://github.com/vladimirpuneet/dukan-maaster) | [dukan.maaster.online](https://dukan.maaster.online) | Headless D2C commerce engine for the Indian market |
| [Auth Maaster](https://github.com/vladimirpuneet/auth-maaster) | api.maaster.online | Unified SSO identity provider (JWT + WhatsApp OTP) |
| [Event Maaster](https://github.com/vladimirpuneet/event-maaster) | [event.maaster.online](https://event.maaster.online) | Marketing gateway & event management platform |
| [Hisab Maaster](https://github.com/vladimirpuneet/hisab-maaster) | [hisab.maaster.online](https://hisab.maaster.online) | Financial accounting & expense tracking |
| [Photo Maaster](https://github.com/vladimirpuneet/photo-maaster) | [photo.maaster.online](https://photo.maaster.online) | Photography delivery & gallery management |
| [Invite Maaster](https://github.com/vladimirpuneet/invite-maaster) | [invite.maaster.online](https://invite.maaster.online) | Interactive digital event invitations |
| [Lyrics Maaster](https://github.com/vladimirpuneet/lyrics-maaster) | [lyrics.maaster.online](https://lyrics.maaster.online) | India-first live captioning & music recognition (RiLycs) |

---

## Architecture Principles

- **Polyrepo**: Each product is an independent Git repository with its own `docs/`, dependencies, and deployment pipeline.
- **HONC Stack**: Hono + Drizzle ORM + Neon Postgres + Cloudflare Workers.
- **Edge-Native**: All APIs run on Cloudflare V8 Isolates. Zero idle cost.
- **Shared Identity**: All products authenticate via Auth Maaster's centralized JWT infrastructure.
- **Documentation Ownership**: Each repo owns its own docs. This repo is only an index.
