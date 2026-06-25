# 03. Domain-Driven Workspace Architecture

## The Holding Company Philosophy
Project Badshah is a holding company, **not a mega-monorepo build system**. 
We follow the **Domain-Driven Polyrepo** architecture. Each major business unit (e.g., `hisab-maaster`, `dukan-maaster`, `auth-maaster`) is a completely autonomous entity.
- They have their own Git repositories.
- They have their own CI/CD pipelines.
- They do not share root-level builds with other business units.

## The "Mini-Monorepo" Rule
While business units are isolated from one another, *within* a business unit, we use **pnpm workspaces** to create highly efficient "Mini-Monorepos".
For example, the `dukan-maaster` domain contains:
- `apps/dukan-frontend` (Next.js)
- `apps/dukan-api` (Hono backend)
- `packages/dukan-sdk` (NPM client SDK)

By linking these internally with `pnpm`, we gain massive disk space savings, shared internal dependencies, and atomic commits for a single business unit.

## Cross-Domain Communication
Because domains live in separate Git repositories, they cannot use `../` relative paths to reference each other. 
If `dukan-maaster` needs to use the Auth system, it must consume it via a published SDK:
`npm install @badshah-holdings/auth-sdk`

This ensures that while apps share business logic and network states, their codebases remain completely infrastructurally decoupled to prevent the "blast radius" of a mega-monorepo.
