# Add PSG Tax & Accounting as a Featured Accounting Partner

**Date:** 2026-07-27
**Status:** Approved (structure)

## Goal

Add **PSG Tax & Accounting** (Danbury, CT — psgtaxaccounting.com) to the
Strategic Partners page as a real, named *featured* accounting partner, using the
same detailed treatment already given to the insurance partner (Grober Imbey
Insurance Agency) and the financial-advisor partner.

## Context

- Partners page: `client/src/views/AboutPartners.tsx`.
- It already has an **Accounting Partners** section with three *generic
  placeholder* cards ("CPA Firms", "Bookkeeping Services", "Tax Specialists").
- It has two detailed **Featured Partner** blocks (GIA insurance, CFP®/CFA®
  advisor) that establish the pattern for a real named partner.
- The firm's website was unreachable at design time and web search returned
  several unrelated "PSG" firms, so no specific credentials, founding year, or
  owner name are asserted. Copy is limited to standard tax/accounting services
  and the confirmed location (Danbury, CT).

## Design

Insert a new `section` into `AboutPartners.tsx` immediately **after** the
existing "Accounting Partners" generic-card section and **before** the "Legal
Partners" section. It mirrors the GIA featured block's structure but uses the
**green / emerald** accounting color scheme (matching the `FaCalculator` + green
gradient already used by the Accounting section) so it reads as accounting.

### Section structure

1. **Heading** — centered, green-gradient calculator icon, `<h2>` "Accounting
   Partner" with `gradient-text` on the last word, one-line subheading.
2. **Card header** — `bg-gradient-to-r from-green-500 to-emerald-600`, white
   text: firm name "PSG Tax & Accounting", tagline, and "Danbury, CT".
3. **Who They Are** — 1–2 short paragraphs (generic, professional).
4. **Areas of Expertise** — 2-column grid of service cards (title + short
   description): Tax Preparation, Bookkeeping & Accounting, Payroll Services,
   Business & Individual Tax Planning.
5. **How the Partnership Works** — "MRECAI handles… / PSG handles tax &
   accounting…", paralleling the GIA block, plus a short "together we deliver"
   list.
6. **Visit website** button — outbound link to `https://psgtaxaccounting.com`
   (`target="_blank"`, `rel="noopener noreferrer"`).

### Not changing

- The "6+ Strategic Partners" stat (still accurate).
- The three generic accounting cards (kept as category context above the
  featured firm).
- All SEO/metadata and the `SEO` component usage.

## Testing / verification

- `npx eslint client/src/views/AboutPartners.tsx` on the touched file is clean.
- `npm run build` (from `client/`) type-checks and static-exports without error.
- Manual visual check that the new section matches the green accounting theme and
  renders between Accounting Partners and Legal Partners.

## Follow-up

- Owner to supply real specifics (tagline, exact service list, credentials,
  founding year, owner name) to replace the conservative generic copy.
