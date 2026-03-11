

## Cinematic Intro Animation

A full-screen splash overlay that morphs through 6 logo variants, then shrinks the final logo to the navbar position while sliding website content up from below.

### Architecture

**New files:**
- `src/components/IntroAnimation.tsx` — full-screen overlay component
- Copy all 6 uploaded SVGs to `src/assets/logo-variants/` (01.svg through 06.svg)

**Modified files:**
- `src/pages/Index.tsx` — wrap content with intro state; hide main content until animation completes
- `src/components/Navbar.tsx` — accept prop to control logo visibility (hidden during animation, shown after logo "lands")

### Animation Sequence (total ~4.5s)

1. **Phase 1 — Logo Morph (0–3s):** Full-screen `#5b4bff` background. First logo variant centered at ~200px height. Cross-fade/morph through all 6 variants (~500ms each) using opacity transitions. Each variant fades in while the previous fades out.

2. **Phase 2 — Shrink & Travel (3–4s):** Final logo variant scales down and translates from center to the navbar logo position (top-left, ~56px height). Uses CSS `transform: scale() translate()` with cubic-bezier easing for cinematic feel.

3. **Phase 3 — Content Reveal (4–4.5s):** The `#5b4bff` background fades out. Website content slides up from bottom (`translateY(100vh) → translateY(0)`). Navbar becomes visible with the logo already in position. Intro overlay unmounts.

### Technical Details

- All animations use CSS transitions/keyframes — no extra dependencies
- `useState` tracks animation phase: `morphing → shrinking → revealing → done`
- `useEffect` with `setTimeout` chains drive the sequence
- Navbar logo hidden via prop during animation to avoid duplicate
- `sessionStorage` flag skips intro on same-session navigations (only plays once per session)
- The 6 SVGs are imported as image sources and layered with absolute positioning, toggling opacity
- GPU-accelerated: only `transform` and `opacity` animated
- Background uses exact `#5b4bff` (matches the primary brand purple)

### Files

| File | Change |
|------|--------|
| `src/assets/logo-variants/01–06.svg` | Copy 6 uploaded logo variants |
| `src/components/IntroAnimation.tsx` | New — splash overlay with morph + shrink + reveal |
| `src/pages/Index.tsx` | Add IntroAnimation, manage `introDone` state |
| `src/components/Navbar.tsx` | Add `hidelogo` prop to hide logo during animation |

