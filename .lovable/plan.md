

## Update About Section Timeline with Custom Journey Icons

### Overview
Replace the timeline dot indicators (`w-4 h-4 bg-primary rounded-full`) in the About section with custom SVG icons matching each journey milestone. The icons will be styled using `currentColor` to inherit the project's primary color for design consistency.

### Changes Required

**File: `src/components/About.tsx`**

1. **Create 5 SVG icon components** - Define inline React components for each journey step:
   - `TheUnexpectedPathIcon` - Graduation cap icon (2015)
   - `TheStruggleIcon` - Chain/link icon representing persistence (2021)
   - `TheDarkPeriodIcon` - Cloud with rain icon (2022)
   - `TheAwakeningIcon` - Sparkle/star icon (2023)
   - `TheDreamRealizedIcon` - Rocket launch icon (2024)

2. **Create icon mapping object** - Map each journey title to its corresponding icon component:
   ```typescript
   const journeyIcons: Record<string, React.FC> = {
     "The Unexpected Path": TheUnexpectedPathIcon,
     "The Struggle": TheStruggleIcon,
     "The Dark Period": TheDarkPeriodIcon,
     "The Awakening": TheAwakeningIcon,
     "The Dream Realized": TheDreamRealizedIcon,
   };
   ```

3. **Update timeline rendering** - Replace the current dot element:
   
   **Current:**
   ```tsx
   <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background glow-cyan-sm z-10" />
   ```
   
   **New:**
   ```tsx
   <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 text-primary">
     {IconComponent && <IconComponent />}
   </div>
   ```

4. **Adjust card positioning** - Update `pl-12` to `pl-10` to accommodate 32x32 icons

### Icon Mapping

| Journey Title | Icon File | Icon Description |
|---------------|-----------|------------------|
| The Unexpected Path | The_Unexpected_Path.svg | Graduation cap (education/new beginnings) |
| The Struggle | The_Struggle.svg | Chain links (persistence/connection) |
| The Dark Period | The_Dark_Period.svg | Cloud with rain (difficult times) |
| The Awakening | The_Awakening.svg | Sparkle star (inspiration/discovery) |
| The Dream Realized | The_Dream_Realized.svg | Rocket launch (achievement/growth) |

### Technical Details

- Icons are 32x32px SVG components with circular background
- Using `currentColor` for strokes allows icons to inherit `text-primary` color
- Background fill uses dark theme color (#0F1729) matching the design
- Border ring uses primary color (#35BDF8) converted to use CSS variable
- Icons will be defined as React functional components at the top of the file
- Mobile layout: icons positioned at left edge (left-0)
- Desktop layout: icons centered on timeline (left-1/2 with -translate-x-1/2)

