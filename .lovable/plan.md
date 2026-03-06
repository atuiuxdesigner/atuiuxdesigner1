

## Apply Margin Formula & Parallax Scrolling Effects

### Margin Formula Context

The formula **(Screen size - Container size) ÷ 2 = Margin** ensures content is perfectly centered with equal margins. Currently, all sections use Tailwind's `container mx-auto px-6` which auto-centers with `2rem` padding and a max-width of `1400px` at 2xl. The `mx-auto` already implements this formula natively (auto margins = equal split of remaining space).

However, the parallax elements (background orbs, decorative dots) sit **outside** the container with absolute positioning and use arbitrary values like `right-1/4`, `left-1/4`. These need to respect the margin formula so parallax elements align with the content grid rather than the viewport edges.

### What Will Be Built

**1. `src/hooks/use-parallax.ts`** — Custom hook returning scroll-based Y-offset values
- Uses `requestAnimationFrame` for 60fps
- Returns `scrollY` and a helper `getOffset(speed)` function
- Disabled on mobile via `useIsMobile`

**2. Hero Section (`src/components/Hero.tsx`)** updates:
- Background orbs: Apply parallax at different speeds (0.05, 0.1) and position them relative to the container margin formula — e.g., `calc((100vw - min(100vw - 3rem, 1400px)) / 2 + offset)` so they align with content edges
- Profile image: Subtle upward float (`speed: -0.08`)
- Text block: Slightly different rate (`speed: -0.03`)
- Decorative dots: Varied speeds per dot
- "Scroll Down" indicator: Fades out based on scroll progress

**3. Case Studies (`src/components/CaseStudies.tsx`)** updates:
- Staggered card entry: Each card gets a vertical offset based on its index and scroll position
- Odd/even columns move at slightly different rates (0.03 vs 0.05)
- Section background gradient shifts subtly on scroll

**4. Margin-aware positioning** for all absolute/decorative elements:
- Replace hardcoded `left-1/4`, `right-1/4` with CSS calc using the formula
- Use CSS custom property `--content-margin: calc((100vw - min(100% - 3rem, 1400px)) / 2)` in `src/index.css` for reuse

### Technical Details

- All transforms use `translateY()` only (GPU-accelerated, no layout thrashing)
- Small multipliers (0.03–0.15) keep effects subtle
- `will-change: transform` on parallax elements
- Mobile: parallax disabled, elements use static positioning
- No new dependencies

### Files Changed

| File | Change |
|------|--------|
| `src/hooks/use-parallax.ts` | New — scroll tracking hook |
| `src/index.css` | Add `--content-margin` CSS variable using the formula |
| `src/components/Hero.tsx` | Add parallax to orbs, profile, text; margin-aware positioning |
| `src/components/CaseStudies.tsx` | Add staggered parallax to cards |

