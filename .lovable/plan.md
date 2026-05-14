## Goal
Rewrite the visible copy across the portfolio so it reads shorter, warmer, and more SEO‑friendly — keeping the same layout, components, and functionality. Sentences become snappier, sprinkled with light, friendly emotion (no heavy emoji spam), and tuned around target keywords: "UX designer", "product designer", "mobile app design", "logistics & mobility design", "Pune".

## Tone rules
- Short sentences, active voice, ~12–18 words max.
- Friendly, human — first person, occasional warmth ("happy to chat", "loved building this").
- One emoji max per section, only where it fits naturally.
- Keep proper nouns (Youhonk, Figma) intact.

## Scope of edits

### 1. `index.html` — sitewide head
- `<title>`: "Atul Thorat — UX Designer in Pune | Mobile & SaaS Portfolio"
- `<meta description>`: warm 150‑char pitch with keywords.
- Update `og:title`, `og:description`, `twitter:title`, `twitter:description` to match.

### 2. `src/components/Hero.tsx`
- Eyebrow: keep "Atul Thorat — Product Designer".
- H1: shorter, e.g. "Designing **logistics & mobility** apps people actually enjoy using."
- Sub: 1–2 friendly sentences, ~25 words, mention Youhonk + mobile/SaaS.

### 3. `src/components/CaseStudies.tsx`
- Section subhead: shorter, friendlier ("A few projects close to my heart.").
- Each project description: trim to 2 short sentences, add a light human note.

### 4. `src/components/Skills.tsx`
- Section subhead: one warm line ("The toolkit I reach for every day.").
- Tighten each `evidence` string to ≤6 words.

### 5. `src/components/About.tsx`
- Section subhead: one short, warm line.
- Each `journeySteps[].description`: trim to 1–2 sentences, keep emotional arc.
- Quote block: keep as is (already concise).

### 6. `src/components/Contact.tsx`
- Section subhead: friendlier ("Got an idea? I'd love to hear it.").

### 7. `src/pages/Index.tsx` Helmet
- Tighten `<title>` and description to match new sitewide tone.
- Keep canonical, og:url, JSON‑LD untouched.

### 8. Case study pages (`CaseStudyDelivery.tsx`, `CaseStudyCustomer.tsx`, `CaseStudyVendor.tsx`)
- Update `<title>` to "{App Name} UX Case Study — Atul Thorat".
- Rewrite meta description (≤155 chars) with warm, keyword‑rich copy.
- Update `og:` and `twitter:` title/description to mirror.
- For Customer/Vendor "coming soon" body copy: shorter, friendlier 2‑sentence version.

### 9. `public/llms.txt`
- Tighten descriptions per route to one warm sentence each.

## Out of scope
- No layout, component, animation, routing, or backend changes.
- No new images, no design tokens touched.
- Sitemap and robots.txt remain as is.

## Verification
- Read each edited file back to confirm copy length and tone.
- No SEO finding regressions — titles stay <60 chars, descriptions <160 chars, single H1 per page preserved.
