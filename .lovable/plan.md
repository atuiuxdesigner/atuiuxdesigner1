

## Profile Image & Case Study Header Improvements

### Overview
This plan addresses three improvements:
1. Add a subtle border and shadow effect to the profile image in the Hero section
2. Reduce the profile image size from large (w-72 h-72) to medium (w-56 h-56)
3. Update case study page headers to match the main navbar style with Theme Toggle + Back button

---

### Changes

#### 1. Profile Image Styling (Hero.tsx)

**Current State:**
- Profile container: `w-72 h-72` (288px × 288px) - quite large
- Has a glow ring effect and primary border
- Decorative floating dots around it

**Proposed Changes:**
- Reduce size from `w-72 h-72` to `w-56 h-56` (224px × 224px) - a 22% reduction
- Add a more refined shadow effect using `shadow-2xl`
- Keep the existing border-2 but enhance with a subtle inner shadow
- Proportionally reduce decorative elements

| Element | Current | New |
|---------|---------|-----|
| Container size | w-72 h-72 | w-56 h-56 |
| Border | border-2 border-primary/50 | border-2 border-primary/50 (keep) |
| Shadow | glow-cyan (custom) | shadow-2xl + refined glow |
| Decorative dots | Large (w-8, w-6, w-4) | Smaller (w-6, w-4, w-3) |
| Glow ring | scale-110 | scale-105 (subtler) |

#### 2. Case Study Headers (3 pages)

**Current State:**
All case study pages have a header with:
- Logo on left
- Single "Back" button on right (ghost variant)
- Missing: Theme toggle

**Proposed Changes:**
Add ThemeToggle component alongside the Back button, matching the main navbar pattern:

```
+------------------------------------------+
|  [Logo]                [ThemeToggle] [Back] |
+------------------------------------------+
```

**Files to Update:**
- `src/pages/CaseStudyDelivery.tsx`
- `src/pages/CaseStudyCustomer.tsx`
- `src/pages/CaseStudyVendor.tsx`

**Header Changes:**
- Import ThemeToggle component
- Add ThemeToggle next to the Back button
- Wrap both in a flex container with `gap-4` spacing
- Keep existing styling for the Back button

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/components/Hero.tsx` | Reduce profile size, enhance shadow/border styling |
| `src/pages/CaseStudyDelivery.tsx` | Add ThemeToggle to header |
| `src/pages/CaseStudyCustomer.tsx` | Add ThemeToggle to header |
| `src/pages/CaseStudyVendor.tsx` | Add ThemeToggle to header |

---

### Technical Implementation

**Hero.tsx Profile Changes:**
```typescript
// Glow Ring - subtler scale
<div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary animate-glow-pulse blur-xl scale-105" />

// Profile Container - smaller with enhanced shadow
<div className="relative w-56 h-56 rounded-full border-2 border-primary/50 overflow-hidden shadow-2xl glow-cyan">
  <div className="absolute inset-2 rounded-full overflow-hidden shadow-inner">
    <img ... />
  </div>
</div>

// Decorative Elements - proportionally smaller
<div className="absolute -top-3 -right-3 w-6 h-6 ..." />
<div className="absolute -bottom-1 -left-1 w-4 h-4 ..." />
<div className="absolute top-1/2 -right-6 w-3 h-3 ..." />
```

**Case Study Header Pattern:**
```typescript
import ThemeToggle from "@/components/ThemeToggle";

// In header JSX:
<div className="flex items-center gap-4">
  <ThemeToggle />
  <Link to="/#work">
    <Button variant="ghost" size="sm" className="gap-2">
      <ArrowLeft className="w-4 h-4" />
      Back
    </Button>
  </Link>
</div>
```

---

### Visual Summary

**Profile Image (Before → After):**
- Size: 288px → 224px (medium, more balanced)
- Shadow: Glow only → Glow + shadow-2xl (more depth)
- Overall feel: More refined and professional

**Case Study Headers (Before → After):**
- Before: Logo | [Back]
- After: Logo | [☀️] [Back] (matching main navbar)

