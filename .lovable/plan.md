

## Subtle Parallax Scrolling Effects

Add scroll-driven parallax effects to the Hero section and Case Study cards using a lightweight custom hook — no extra dependencies.

### What Will Be Built

1. **`src/hooks/use-parallax.ts`** — A custom hook that tracks scroll position and returns a Y-offset value using `requestAnimationFrame` for smooth 60fps performance.

2. **Hero Section (`src/components/Hero.tsx`)** updates:
   - Background blur orbs move at different speeds (slower than scroll) creating depth layers
   - Profile image floats slightly upward as you scroll down
   - Text content shifts at a subtly different rate than the image
   - Decorative dots around the profile move at varied speeds
   - "Scroll Down" indicator fades out as user scrolls

3. **Case Studies (`src/components/CaseStudies.tsx`)** updates:
   - Each card enters with a staggered vertical offset based on scroll position
   - Background gradient shifts subtly on scroll
   - Cards have a slight differential parallax (odd vs even columns move at different rates)

### Technical Approach

- Pure React with `useEffect` + `useRef` for scroll tracking
- `transform: translateY()` via inline styles (GPU-accelerated, no layout thrashing)
- Small multipliers (0.05–0.15) for subtlety — parallax should enhance, not distract
- `will-change: transform` on parallax elements
- No effect on mobile (disable below `lg` breakpoint) to preserve performance

