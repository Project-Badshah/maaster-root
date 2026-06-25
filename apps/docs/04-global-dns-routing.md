# 04. Global DNS Routing Strategy

> **IMPORTANT**: This document outlines the absolute source of truth for how network traffic and DNS records are routed across the Project Badshah ecosystem. All new apps and APIs MUST adhere to this structure.

## The Strategy: The Cloudflare Reverse Proxy
ISPs and regional government firewalls frequently block domains like `supabase.co` or standard database ports. To guarantee 100% uptime and immunity from third-party blocking, **we route EVERYTHING through our own domains using Cloudflare.**

The underlying vendor (Vercel, Supabase, Neon) must remain entirely invisible to the end user and the ISPs.

---

## The Routing Map (`maaster.online`)

### 1. The Root: `maaster.online`
- **Target**: `maaster-landing` (Next.js Application).
- **Purpose**: The public-facing corporate website and portfolio directory.
- **Provider**: Deployed on Vercel or Cloudflare Pages, CNAME routed through Cloudflare.

### 2. The Core Apps: `{app}.maaster.online`
- **Target**: Individual React/Vite frontends or Next.js apps.
- **Examples**:
  - `hisab.maaster.online`
  - `photo.maaster.online`
  - `event.maaster.online`
  - `dukan.maaster.online`
- **Purpose**: Dedicated subdomains for every individual product in the ecosystem.

### 3. The API Gateway: `api.maaster.online`
- **Target**: Cloudflare Workers (Hono backend).
- **Purpose**: The central nervous system. All frontend network requests MUST go to `api.maaster.online/{service}`.
- **Why**: This reverse proxy intercepts the request and securely forwards it to Neon Postgres, Supabase Auth, or the specific edge worker. This prevents any frontend app from communicating directly with a third-party domain that might be blocked.

### 4. The Media CDN: `cdn.maaster.online`
- **Target**: Cloudflare R2 Bucket Proxy.
- **Purpose**: Serves all images, videos, and static media files.
- **Why**: By routing all R2 access through a `cdn` subdomain proxy, we can enforce caching rules, prevent hotlinking, and hide the direct R2 bucket URL.

---

## Implementation Rules
1. **Never hardcode external API domains** in the frontend. All `fetch` requests must point to `https://api.maaster.online/...`
2. **Strict Cloudflare Proxy**: Ensure the orange cloud ☁️ (Proxy status) is enabled for all DNS records in the Cloudflare Dashboard to enable the Web Application Firewall (WAF) and hide the origin IPs.
