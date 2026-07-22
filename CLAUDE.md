# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Structure

Two independent npm packages — there is no root package.json, so run all npm commands from inside `client/` or `server/`:

- `client/` — **Next.js 16 App Router (static export)** + React 19 + TypeScript + Tailwind. Migrated from Vite/react-router in June 2026. Deployed to IONOS (Apache static hosting): upload the contents of `client/out/` including `.htaccess`.
- `server/` — Express + TypeScript API (CommonJS build). Deployed to Railway (nixpacks, watches `server/**`); a Dockerfile also exists.

The server does NOT serve the client. The client talks to the API via `NEXT_PUBLIC_API_URL` (defaults to `http://localhost:5000/api`).

## Client architecture (post-migration)

- Page **components** live in `src/views/` (renamed from `src/pages/` — Next reserves `pages`). They are client components.
- Routes live in `app/(site)/<path>/page.tsx` — thin server wrappers that hold each page's `generateMetadata` (gate-approved titles ≤60 chars, descriptions 150–160 chars, canonical, og:*). Don't change those strings casually; they were owner-approved.
- `app/admin/` routes are noindexed and have no site chrome. Admin edit URLs (`/admin/*/edit/<id>`) are served via an exported `_` placeholder + `.htaccess` rewrite; the editor reads the id from the URL after hydration.
- `src/components/common/SEO.tsx` renders ONLY per-page JSON-LD now; title/description props it receives are intentionally ignored (head tags come from the Metadata API).
- Blog (`/blog/[slug]`) and the sitemap are built from Supabase at **build time** — publishing a post requires a rebuild + redeploy.

## Commands

Client (from `client/`):
- `npm run dev` — Next dev server (port 3000)
- `npm run build` — static export to `client/out/` (includes type check + sitemap.xml)
- `npm test` / `npm run test:run` — Vitest; ⚠️ suite needs a post-migration pass (tests still wrap components in react-router `BrowserRouter`, kept as devDependency for them)
- `npm run lint` — runs with `--max-warnings 0`; `app/` is clean, `src/` has ~114 pre-existing problems (cleanup deferred by owner). Lint only files you touched: `npx eslint <files>`

Server (from `server/`):
- `npm run dev` — nodemon + ts-node
- `npm run build` then `npm start`
- Jest is declared but there are no server tests

## Environment

- Server requires `SUPABASE_URL` + `SUPABASE_SERVICE_KEY` (service role key only — not the anon key), and SMTP2GO credentials for email. `OPENAI_API_KEY` is optional; AI chat is disabled without it. `CLIENT_URL` is a comma-separated CORS allowlist.
- Client uses `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_CALENDLY_URL` — needed at **build time** (they're inlined), not on the IONOS host.
- ⚠️ As of 2026-06-11 the Supabase host in `client/.env*` (`bneabkaypiypceokadba.supabase.co`) does **not resolve** — blog/white-paper data is unreachable until the owner provides the correct project URL.

## Workflow

- Work directly on `master` unless told otherwise. Commit locally, but do not push — the user pushes themselves.

## Gotchas

- `client/dist/` (old Vite build) is still committed; `client/out/` (Next export) is gitignored. Ask the owner before changing which build output is tracked.
- Client path aliases (`@/components/*`, `@/pages/*` → `src/views/*`, etc.) are defined in `tsconfig.json` — note `@/pages/*` intentionally maps to `src/views/*`.
- Feature specs live in `.kiro/specs/` (requirements/design/tasks per feature) — check there before implementing a planned feature.
- `MIGRATION_HANDOFF.md` at the repo root documents the full Vite→Next migration state and the owner-approved SEO decisions.
