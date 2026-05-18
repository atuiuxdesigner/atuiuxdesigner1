# Minimize & Sharpen Copy Across Site

The current site reads like a long-form bio. Top portfolios (Rauno, Olu, Brittany Chiang, Paco Coursey, Frank Chimero) lead with **one strong line**, then let work speak. Goal: cut ~50% of words, keep voice warm but confident.

## Principles
- One line per idea. No filler ("A short story about…", "The toolkit I reach for every day…").
- Headlines: max 8 words. Subheads: max 14.
- Card descriptions: 1 sentence, ≤18 words.
- Drop redundant section intros where the heading already says it.

---

## 1. Hero (`src/components/Hero.tsx`)

**Before** — eyebrow + 2-line H1 + 3-line paragraph.

**After:**
- Eyebrow: `Product Designer — Pune`
- H1: `Designing mobility apps people actually enjoy.`
- Sub (1 line): `Currently shaping Youhonk's three-app vehicle service platform.`
- CTAs unchanged.

## 2. About (`src/components/About.tsx`)

- H2: `How I got here`
- Sub: *(remove — heading is enough)*
- Each timeline `description`: trim to ≤15 words. Examples:
  - 2015: `Started Computer Engineering with no plan. Kept showing up anyway.`
  - 2021: `Failed, dropped a year, finished my degree mid-COVID.`
  - 2022: `Hiring froze. Took a non-IT job. Kept sketching on the side.`
  - 2023: `Found UX. Felt like home.`
  - 2024: `Joined Youhonk. Still loving every sprint.`
- Quote block: keep quote, drop "Design Philosophy" tag line.

## 3. Skills (`src/components/Skills.tsx`)

- H2: `What I do`
- Sub: *(remove)*
- Remove `evidence` line under every skill (cuts ~16 lines of text). Keep name + level badge only.
- Stats labels shortened: `Years`, `Sprints`, `Satisfaction`, `Users reached`.

## 4. Case Studies (`src/components/CaseStudies.tsx`)

- H2: `Selected work`
- Sub: *(remove)*
- Card descriptions → one line each:
  - Delivery: `Real-time pickup & drop-off for workshop staff.`
  - Customer: `Book a vehicle repair in a few taps.`
  - Vendor: `Workshop ops without the spreadsheet chaos.`
- Drop "See all case studies" button (there are only 3 — redundant).

## 5. Contact (`src/components/Contact.tsx`)

- H2: `Let's talk`
- Sub: `Got an idea? Send it over.`
- Form labels unchanged. Subject placeholder → `What's on your mind?`

## 6. Case Study Pages (Delivery / Customer / Vendor)

Pass through each `pages/CaseStudy*.tsx`:
- Tighten hero subheads to one sentence.
- Replace paragraph-style "Challenge / Outcome" blocks with 2-sentence max.
- Keep metric cards & screen showcases — those are visual, not text-heavy.

*(Detailed line edits done during implementation since pages are long.)*

## 7. Meta / SEO

- `index.html` `<meta description>`: tighten to ≤120 chars, one clear sentence.
- `public/llms.txt`: condense to bullet summary.

---

## Out of scope
- No layout, color, animation, or component structure changes.
- No new sections or removed sections (besides the redundant "See all case studies" button).
- No image/asset changes.

## Files touched
`Hero.tsx`, `About.tsx`, `Skills.tsx`, `CaseStudies.tsx`, `Contact.tsx`, `CaseStudyDelivery.tsx`, `CaseStudyCustomer.tsx`, `CaseStudyVendor.tsx`, `index.html`, `public/llms.txt`.
