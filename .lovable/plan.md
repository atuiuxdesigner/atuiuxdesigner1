

## Interactive & Responsive Custom Cursor

A custom cursor system that replaces the default browser cursor with creative, profession-themed cursors that respond to context and interactions.

### Design Concept

- **Default state**: A small design-themed cursor (crosshair/circle with dot) replacing the standard arrow
- **Hover on interactive elements** (links, buttons, cards): Cursor expands into a larger circle with a "magnetic" pull effect and text like "Click" or "View"
- **Hover on text**: Cursor changes to a vertical text-selection bar with a subtle glow
- **Trailing effect**: A smooth trailing dot/ring that follows the main cursor with slight delay, creating a fluid motion feel
- **Color**: Uses the existing primary purple/accent color with glow effects

### What Will Be Built

1. **`src/components/CustomCursor.tsx`** — A new component that:
   - Tracks mouse position via `mousemove` event
   - Renders two elements: an inner dot and an outer ring (both absolutely positioned)
   - Detects hoverable elements (`a`, `button`, `.card-hover`, etc.) to trigger expand animation
   - Shows contextual labels ("View", "Click", "Drag") on specific elements using `data-cursor` attributes
   - Hides on mobile (touch devices) using the existing `useIsMobile` hook
   - Uses CSS transforms for smooth 60fps performance

2. **`src/index.css`** updates:
   - Add `cursor: none` on `body` and interactive elements in non-touch contexts
   - Cursor animation keyframes and transition styles

3. **`src/pages/Index.tsx`** — Add `<CustomCursor />` to the page

4. **Optional `data-cursor="text"` attributes** on key sections like case study cards for contextual cursor labels

### Technical Approach

- Pure React + CSS (no extra dependencies)
- `requestAnimationFrame` for the trailing ring to ensure smooth performance
- `pointer-events: none` on cursor elements so they don't interfere with clicks
- Media query `@media (hover: hover)` to only show on devices with a mouse
- The outer ring uses `lerp` (linear interpolation) for the smooth trailing delay effect

