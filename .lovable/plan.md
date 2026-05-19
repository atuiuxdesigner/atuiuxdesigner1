# Portfolio Redesign Plan

A confident, recruiter-first redesign blending **Aditi's** oversized editorial typography with **Anix's** clean narrative-plus-visual hero. High-contrast Brutalist Pop palette makes work pop and signals craft from the first scroll.

## Locked direction

- **Palette**: White `#ffffff`, Ink `#0a0a0a`, Orange accent `#ff5722`, Yellow highlight `#ffeb3b`
- **Typography**: Instrument Serif (headings, oversized) + Work Sans (body, UI)
- **Layout**: Aditi-style bold typographic hero → immediately into Anix-style case study grid
- **Mood**: Editorial, opinionated, recruiter-scannable, anti-corporate

## What changes

### 1. Design tokens (`src/index.css`, `tailwind.config.ts`)
- Replace primary `#5b4bff` → orange `#ff5722` (HSL: `14 100% 57%`)
- Add `--highlight` yellow `#ffeb3b` for marker/underline accents
- Light mode becomes default (paper white); dark = pure ink black
- Remove cyan glows; replace with hard offset shadows (brutalist `4px 4px 0 var(--ink)`)
- Border radius: drop to `0.25rem` (less rounded, more architectural)
- Add Instrument Serif + Work Sans from Google Fonts; retire Sora/Inter imports

### 2. Hero (`src/components/Hero.tsx`)
- **Aditi-style oversized headline**: "Designing mobility apps people actually use" in Instrument Serif, ~10rem desktop, tight leading, italic emphasis on "actually"
- Remove profile image from hero (move to About) — let type carry it
- Small eyebrow: "Product Designer · Pune · Available for work" with green dot
- Two CTAs: filled black "See Case Studies", outline "Resume ↓"
- Yellow marker-highlight behind one word for brutalist pop
- Remove orbs/glows/parallax decorations

### 3. Reorder homepage (`src/pages/Index.tsx`)
New order: **Hero → Case Studies → About → Skills → Contact**
(Case studies move directly under hero — recruiter sees work first)

### 4. Case Studies (`src/components/CaseStudies.tsx`)
- Anix-style large cards: full-width image-led tiles, alternating left/right
- Tag chips (B2B, Mobile, SaaS) in orange outline
- One-line problem statement + "View case study →" link with hard arrow
- Hover: card translates `-4px -4px` with offset black shadow

### 5. About (`src/components/About.tsx`)
- Two-column: profile photo (square, no glow) + short bio with serif pull-quote
- Replace timeline cards with clean horizontal rule-separated entries (year · company · role)

### 6. Skills (`src/components/Skills.tsx`)
- Flat grid of skill chips with orange borders — no badges, no maturity meters
- Group: Design · Research · Tools

### 7. Contact (`src/components/Contact.tsx`)
- Aditi-style giant headline: "Let's make something." 
- Email as oversized clickable text + social row

### 8. Navbar (`src/components/Navbar.tsx`)
- Sticky, bordered-bottom, no blur
- Update logo treatment for light theme
- "Let's Talk" CTA → solid black button with yellow hover state

### 9. Footer (`src/components/Footer.tsx`)
- Minimal: name · year · socials in single row
- Black background section with orange links

### 10. Theme & misc
- Light theme as default; dark mode kept but recolored (ink bg, paper text, orange/yellow same)
- Remove `glow-cyan` utilities; add `shadow-brutal` utility
- Keep: custom cursor, intro animation (recolor to orange), chatbot (restyle bubble)

## Out of scope (not changing)
- Case study detail pages (`CaseStudyDelivery/Customer/Vendor.tsx`) — only restyle headers to match new tokens, keep content/structure
- Supabase edge functions, chatbot logic, SEO meta, routing

## Files to edit
```
src/index.css                          (tokens, fonts, utilities)
tailwind.config.ts                     (color mapping)
src/components/Hero.tsx                (full rewrite)
src/components/Navbar.tsx              (restyle)
src/components/CaseStudies.tsx         (layout overhaul)
src/components/About.tsx               (simplify)
src/components/Skills.tsx              (flatten)
src/components/Contact.tsx             (oversize)
src/components/Footer.tsx              (minimal)
src/components/IntroAnimation.tsx      (recolor)
src/components/Chatbot.tsx             (restyle bubble)
src/pages/Index.tsx                    (section reorder)
src/pages/CaseStudyDelivery.tsx        (header restyle only)
src/pages/CaseStudyCustomer.tsx        (header restyle only)
src/pages/CaseStudyVendor.tsx          (header restyle only)
```

## Implementation order
1. Tokens + fonts (foundation)
2. Hero + Navbar (above-the-fold impact)
3. Case Studies reorder + redesign
4. About / Skills / Contact / Footer
5. Intro animation + chatbot recolor
6. Visual QA across breakpoints (1067px viewport + mobile)

Approve and I'll build it section by section.