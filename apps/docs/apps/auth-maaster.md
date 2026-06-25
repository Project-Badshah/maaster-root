# Auth Maaster

## Overview
Auth Maaster is the supreme Single Sign-On (SSO) identity provider for the entire Project Badshah "House of Apps".

## Architecture
It operates as a **Unified Hybrid Package**:
1. **The Server**: It is a deployable Cloudflare Worker that serves live HTTP endpoints (e.g., OTP sending, JWT verification) backed by a central Neon PostgreSQL database.
2. **The Library**: It is also an NPM package that can be installed by the other isolated Polyrepo apps (like Hisab Maaster or Dukan Maaster) to securely import its TypeScript types, database schemas, and cryptographic validation functions.

## Centralized Identity Strategy (The "Google-Like" Approach)
Rather than each app maintaining its own disjointed list of users:
- `auth-maaster` contains the sole master `users` and `refreshTokens` tables in its Neon database.
- Other applications in the ecosystem simply store a `user_id` and rely on the cryptographically signed JWT issued by `auth-maaster` to prove identity.
- This creates a seamless, sticky ecosystem. A user registers once, and can instantly access any app in the portfolio.
