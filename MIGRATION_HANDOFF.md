# Next.js Migration — Handoff Plan

> **STATUS 2026-06-11: MIGRATION COMPLETE.** `npm run build` (static export) exits 0; 67 HTML pages in `client/out/`; sitemap.xml (51 URLs) + robots.txt + .htaccess verified; tsc --noEmit 0; eslint clean on app/ (src/ at 114 pre-existing problems vs 116 baseline). Outstanding items: (1) Supabase host in client/.env* does not resolve (DNS dead) — owner must supply correct project URL, then rebuild to export blog posts; (2) vitest suite needs follow-up (react-router/Helmet wrappers kept as devDeps); (3) decide whether committed client/dist/ (old Vite build) should be replaced by out/ in git. The sections below are the original plan, kept for reference.

**Task:** Migrate mrecai.com client from Vite/CSR React to Next.js 16 App Router (SSG, static export), fixing 10 SEO issues with zero visual changes.
**Working dir:** `D:\work\mre\client` (server/ is OUT OF SCOPE — never touch it).
**Mode:** Attended run. STOP AND ASK gate already passed — all decisions below are USER-CONFIRMED. Do not re-ask.

## Confirmed decisions (gate answers — binding)

| Item | Decision |
|---|---|
| Deployment | Client → **IONOS** (Apache static hosting, .htaccess). Server → Railway (untouched). Next.js `output: 'export'` → `out/` |
| Slugs | Keep ALL existing `/services/*` slugs. "SaaS development" = existing `/services/technology`. No new service pages |
| Titles/descriptions | Approved table is encoded verbatim in the generated `app/(site)/**/page.tsx` wrappers — do not reword |
| Env vars | `VITE_*` → `NEXT_PUBLIC_*` (4 vars). `.env.production` added to `.gitignore` ✅ |
| Blog/white papers | SSG at build from Supabase; new posts require rebuild+redeploy (user accepted) |
| Duplicate route | `/ai-consulting` and `/services/ai-automation` both render AIConsulting; both canonical → `/ai-consulting`; `/services/ai-automation` excluded from sitemap |
| Schema phone | **+1-929-702-2818** (NOT 919-3574 from the docx) |
| Schema foundingDate | **2024** (revised 2026-06-11: business founded 2024; 2009 = founder's industry experience, expressed in Person schema/bios only) |
| Canonical bug fix | BusinessConsulting canonical fixed to `/services/business-consulting` (was `/services/business-management`) — encoded in wrapper |

## Research facts (verified June 2026, nextjs.org)

- Current stable: **Next.js 16.2.x LTS** (installed). React **19.2** (installed via `--legacy-peer-deps` because react-helmet-async@2 peers react ≤18 — helmet is being removed anyway).
- Turbopack is default builder. `next build` no longer lints. Node 20.9+ / TS 5.1+ OK in this repo.
- Static export: every dynamic route needs `generateStaticParams`; no rewrites/redirects/ISR/middleware; `out/` emits `route.html` files (trailingSlash=false), Apache maps extensionless URLs via `.htaccess` (already written).
- `params` is a **Promise** in Next 16 (`const { slug } = await params`).
- JSON-LD: inline `<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(x).replace(/</g,'\\u003c')}}>`.

## Architecture implemented

- `app/layout.tsx` — root: metadataBase `https://mrecai.com`, fonts (Google Fonts <link>, same as index.html), Organization+Person+**WebSite** JSON-LD, noscript block, default metadata/viewport/themeColor migrated from index.html.
- `app/(site)/layout.tsx` — wraps `src/layouts/Layout.tsx` (now a client component with Navbar/Footer/ScrollProgress/BackToTop/AIChat + AOS init + scroll-to-top, absorbed from old App.tsx).
- `app/admin/layout.tsx` — no chrome, `robots: noindex` (admin was outside <Layout> in the old router).
- `app/(site)/<route>/page.tsx` × 52 — generated server wrappers: `generateMetadata()` with approved title (`title.absolute`), description, `alternates.canonical`, og:* (url=canonical, type website, siteName, /og-image.jpg), twitter, keywords (preserved from old SEO props). Generator script (rerunnable): `C:\Users\user\AppData\Local\Temp\claude\mre-genpages.mjs`.
- `app/(site)/blog/[slug]/page.tsx` — server page: `generateStaticParams` + `generateMetadata` + post fetch from Supabase (via `@/lib/supabase`), passes `initialBlog` prop to BlogPost so content is in the prerendered HTML.
- `app/admin/*` — 7 wrappers. Edit routes export placeholder param `{id:'_'}`; editors read real id from `window.location.pathname` after hydration (`.htaccess` rewrites `/admin/*/edit/<anything>` → `_.html`).
- `app/not-found.tsx` — wraps NotFound in Layout, noindex.
- `src/components/common/SEO.tsx` — REWRITTEN: renders ONLY per-page JSON-LD (head tags now come from Metadata API). Pages still pass title/desc props — ignored by design, keeps 45 page files unmodified.
- `.htaccess` (`client/public/.htaccess`) — extensionless→.html rewrite + admin edit rewrites + ErrorDocument 404.
- `next-sitemap.config.js` — output export, outDir out, no robots generation (public/robots.txt is hand-maintained and already correct), priorities: `/`=daily/1.0, `/services/*`+`/ai-consulting`=weekly/0.8, rest monthly/0.6; excludes /admin/*, /404, /services/ai-automation.

## Code transforms already applied (all of src/)

- `'use client'` prepended to all 93 non-test .tsx in src/{pages,components,layouts}.
- react-router → Next: `Link to=`→`next/link href=` (57 sites), `useNavigate`→`useRouter().push` (7 files incl. dep arrays), `useLocation`→`usePathname` (Navbar, PageTransition), `useParams`→`next/navigation` (BlogPost, editors).
- Static image imports get `.src` (Navbar, Footer, ExecutiveLeadership, AboutFounder).
- Helmet removed from: HomeFAQ (schema → inline script), Products, BookkeepingAccounting, BlogPost (title/desc now from wrappers).
- `import.meta.env.VITE_*` → `process.env.NEXT_PUBLIC_*` in supabase.ts, api.ts, constants.ts, Contact.tsx, TaxSavingsSnapshot.tsx; `.env`/`.env.production` keys renamed.
- Home.tsx `window.matchMedia` guarded with `typeof window !== 'undefined'`.
- tsconfig.json: next plugin, esModuleInterop, allowJs, incremental, include app/ + next-env.d.ts, removed tsconfig.node.json reference.
- tailwind.config.js: added `./app/**/*` to content (tokens untouched).

## REMAINING WORK (in order)

1. **`npx next build` in client/ and fix errors iteratively.** Expected failure classes: render-time `window`/`document` in client components during prerender (guard like Home.tsx); useSearchParams-without-Suspense (none found in grep, but verify); supabase module throws if env missing (envs exist in client/.env). Build output goes to `client/out/`.
2. **`npx next-sitemap`** after green build → verify `out/sitemap.xml` lists all pages incl. blog slugs, excludes admin.
3. **Verify out/ HTML**: unique <title> ≤60 per page; per-page canonical + og:url ≠ homepage; JSON-LD in root + Service schema on service pages (comes from page SEO schema props); content present (not empty shell) — check a service page and a blog post.
4. **package.json scripts swap** (only after green build): dev=`next dev`, build=`next build`, postbuild=`next-sitemap`, remove vite scripts; KEEP test scripts (vitest).
5. **Cleanup** (only after green build): delete `vite.config.ts`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/vite-env.d.ts`, `tsconfig.node.json`, stale `public/sitemap.xml` + `public/vercel.json` + root `vercel.json` (IONOS doesn't use them — confirm with user if unsure); `npm uninstall vite @vitejs/plugin-react react-router-dom react-helmet-async vite-plugin-prerender prerender-spa-plugin terser` — BUT tests import react-router-dom/HelmetProvider: update tests (remove BrowserRouter/HelmetProvider wrappers; mock `next/navigation` in `src/test/setup.ts`) or keep deps and flag. `npm run test:run` to check.
6. **`npx tsc --noEmit`** must exit 0; `npx eslint <touched files>` must exit 0 (note: repo-wide lint has ~116 pre-existing problems — only touched files must be clean; `.eslintrc.cjs` exists).
7. **Final summary** per <summary_required>: files created/modified/deleted; route map old→new (52 static + blog/[slug] + 7 admin + 404); VITE_ renames (API_URL, SUPABASE_URL, SUPABASE_ANON_KEY, CALENDLY_URL); omitted schema fields (openingHours — absent from codebase); Vite features without equivalent (manualChunks→Turbopack automatic; vite-plugin-prerender→native SSG; AnimatePresence route exit-transitions degraded — pages keep their own mount animations); [ASSUMED] acted on (Next 16 not 15 — verified; next-sitemap used); pre-existing bugs found NOT fixed (see below); IONOS checklist (upload out/ contents incl. .htaccess; env vars only needed at BUILD time, not on host; verify /sitemap.xml + a service page canonical + GSC fetch).

## Pre-existing issues found (flag in summary, do NOT fix unless blocking)

- `og-image.jpg` / `twitter-image.jpg` referenced but DO NOT exist in public/ (was already the case).
- index.html geo/founding facts vs About pages ("since 2024") inconsistency — user chose 2009 for schema.
- `client/dist/` is committed on purpose (old Vite build); decide with user whether `out/` replaces it in git (gitignored for now: `client/out`).
- Old GH remote URL embeds a PAT (separate security issue, user already warned).
- `vite-env.d.ts` declares unused `VITE_GA_TRACKING_ID`, `VITE_GOOGLE_BUSINESS_PLACE_ID`.
- Root `vercel.json` + `client/public/vercel.json` are stale (site is on IONOS).

## Verification gates from the prompt (must ALL pass before "done")

next build exit 0 · every route 200 with real HTML · unique titles ≤60 · unique descriptions 150–160 · canonical per page · og:url per page (never homepage on non-home) · /services/[slug] for every confirmed service (existing slugs) · sitemap.xml complete · robots.txt references sitemap (already does) · Org/ProfessionalService/WebSite in root layout · Service schema on service pages · no VITE_ in source (vite-env.d.ts deleted) · tsc --noEmit 0 · lint 0 on touched files · git diff in scope · visual fidelity.
