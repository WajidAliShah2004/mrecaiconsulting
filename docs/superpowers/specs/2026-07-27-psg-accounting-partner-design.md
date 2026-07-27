# Add PSG Global Tax & Accounting as a Featured Accounting Partner

**Date:** 2026-07-27
**Status:** Implemented (content verified from owner-supplied site copy)

## Goal

Add **PSG Global Tax & Accounting Services LLC** (New York, US — psgtaxaccounting.com)
to the Strategic Partners page as a real, named *featured* accounting partner, using
the same detailed treatment already given to the insurance partner (Grober Imbey
Insurance Agency) and the financial-advisor partner.

## Context

- Partners page: `client/src/views/AboutPartners.tsx`; also a partner card + a
  timeline mention on `client/src/views/About.tsx`.
- The Partners page already has an **Accounting Partners** section with three
  generic placeholder cards, and two detailed **Featured Partner** blocks (GIA
  insurance, advisor) that establish the pattern for a real named partner.
- The firm's website is **unreachable from the build environment** (DNS resolves
  to `148.135.141.219` but the host refuses/times out on 443 over every path:
  direct fetch, headless browser, `curl`, and no proxy credentials are configured).
  Content below was therefore supplied by the owner as a paste of the site's
  About Us page and is treated as authoritative.

### Verified facts (from owner-supplied site copy)

- **Legal name:** PSG Global Tax & Accounting Services LLC (brand "PSG Global").
- **Location:** New York, United States. *(An earlier draft used "Danbury, CT" —
  that was a different, unrelated firm and has been corrected.)*
- **Tagline:** "Your trusted partner for US tax, accounting, and business advisory
  services."
- **Focus:** businesses, entrepreneurs, and international founders; US accounting,
  taxation, and compliance. Founder-focused / startups.
- **Founder:** Parineet Sehgal — US CPA (Washington State), Chartered Accountant
  (India), Dip-IFRS (ACCA–UK), QuickBooks ProAdvisor; 10+ yrs across KPMG, EY
  Global, McKinsey International.
- **Proof points:** 1,000+ returns filed · 150+ clients served · 6+ countries · 10+ years.
- **Contact:** parineet@psgtaxaccounting.com · (+91) 971-725-8029.

## Design

A new `section` in `AboutPartners.tsx` sits immediately **after** the existing
"Accounting Partners" generic-card section and **before** the "Legal Partners"
section. It mirrors the GIA featured block's structure but uses the **green /
emerald** accounting color scheme (matching the `FaCalculator` + green gradient
already used by the Accounting section).

### Section structure

1. **Heading** — centered green-gradient calculator icon, `<h2>` "Accounting
   Partner" with `gradient-text` on the last word, one-line subheading.
2. **Card header** — green→emerald gradient, white text: "PSG Global Tax &
   Accounting Services LLC", the tagline, and "New York, United States".
3. **Who PSG Global Is** — two short paragraphs drawn from the About copy
   (client focus + KPMG/EY/McKinsey background, founder-focused approach).
4. **Areas of Expertise** — 2-column grid: US Tax Filing & Compliance,
   Accounting & Bookkeeping, Business Formation & Setup, Business Advisory.
   *(No "Payroll" — not stated on the site.)*
5. **Meet the Founder** — Parineet Sehgal, credential line, short bio, and a
   4-up stat row (returns / clients / countries / years).
6. **How the Partnership Works** — MRECAI strategy / PSG Global US tax &
   accounting execution, plus a short "together we deliver" list.
7. **Visit website** button — outbound link to `https://psgtaxaccounting.com`
   (`target="_blank"`, `rel="noopener noreferrer"`).

### About.tsx changes

- Partner card renamed to "PSG Global Tax & Accounting" with an accurate
  description (US CPA–led tax/accounting/advisory for founders & businesses).
- Q2 2024 "Rapid Growth" timeline entry names PSG Global alongside GIA.

### Not changing

- The "6+ Strategic Partners" stat.
- The three generic accounting category cards (kept as context above the
  featured firm).
- All SEO/metadata and the `SEO` component usage.

## Testing / verification

- `npx eslint` on the two touched files is clean.
- `npm run build` (from `client/`) type-checks and static-exports without error.
- Manual visual check that the new section matches the green accounting theme and
  renders between Accounting Partners and Legal Partners.

## Follow-up

- Optional: add the founder's photo to the "Meet the Founder" block once the
  owner provides the image file.
- Optional: expand the service list if the site's Services dropdown items are
  confirmed (they were not captured in the About-page paste).
