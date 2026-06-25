# 03. Polyrepo Architecture

## Isolation Principle
Project Badshah is a holding company folder, **not a monorepo build system**. 
Every application (e.g., `hisab-maaster`, `photo-maaster`) is a completely autonomous entity.
- They have their own Git repositories.
- They have their own CI/CD pipelines.
- They do not rely on root-level tools to build or deploy.

## The Shared Auth Challenge
We enforce a unified identity layer across the ecosystem using the `maaster-auth` library.

### Current State (Local Development)
For rapid local development, apps may reference the auth package via relative file paths:
`"maaster-auth": "file:../maaster-auth"`

### Future State (Production Isolation)
Because these apps live in separate Git repositories, the `../` relative path will fail in remote CI/CD pipelines (Vercel, Cloudflare). 
To solve this, shared packages like `maaster-auth` or any future `maaster-ui` components must be **published to a private NPM registry** (such as GitHub Packages or npmjs).

Independent apps will eventually consume the logic strictly via:
`npm install @badshah-holdings/maaster-auth`

This ensures that while apps share business logic, they remain completely infrastructurally decoupled.
