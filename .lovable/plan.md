

## Cinematic Intro Animation (Updated)

### What Will Be Built

A full-screen splash overlay that morphs through 6 logo variants on `#5b4bff`, then shrinks to match the navbar logo exactly, and reveals the website with a fade/scale effect (not slide-up).

### Animation Sequence (~4.5s)

**Phase 1 — Logo Morph (0–3s):**
Full-screen `#5b4bff` background. First logo variant centered at ~200px. Cross-fade through all 6 SVGs (~500ms each).

**Phase 2 — Shrink & Travel (3–4s):**
Final logo scales down to exactly `h-14` (56px — matching the navbar logo class) and translates from center to the navbar logo position (top-left). Uses CSS transform with cubic-bezier easing.

**Phase 3 — Content Reveal (4–4.5s):**
Instead of sliding up, the `#5b4bff` overlay fades out while the website content fades in with a subtle scale effect (`scale(0.98) → scale(1)` + `opacity 0→1`). Content starts visible from the Home/Hero section — no artificial scroll offset. The navbar appears simultaneously.

### Key Differences from Previous Plan
1. Phase 2 scales logo to exactly `h-14` (56px height) to match `Navbar.tsx` line 55
2. Phase 3 uses fade + scale reveal instead of slide-up — content visible starting from Hero/About naturally
3. `sessionStorage` skip on repeat visits within same session

### Files

| File | Change |
|------|--------|
| `src/assets/logo-variants/01–06.svg` | 6 uploaded logo SVGs |
| `src/components/IntroAnimation.tsx` | New — splash overlay with morph → shrink → fade reveal |
| `src/pages/Index.tsx` | Add IntroAnimation, manage `introDone` state |
| `src/components/Navbar.tsx` | Add `hideLogo` prop to hide logo during intro |

