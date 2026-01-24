
## Update Skills Section with Custom Category Icons

### Overview
Replace the small dot indicators (`w-2 h-2 bg-primary rounded-full`) in the Skills section with the uploaded SVG icons, matching each icon to its respective skill category title. The SVG colors will be updated to use the project's primary color variable for consistency with the design palette.

### Changes Required

**File: `src/components/Skills.tsx`**

1. **Create icon components for each category** - Define 4 inline SVG components that match the uploaded icons:
   - `UXDesignIcon` - Lightbulb icon for UX Design
   - `UIDesignIcon` - Palette/color icon for UI Design  
   - `ToolsIcon` - Wrench/tool icon for Tools
   - `SoftSkillsIcon` - People/users icon for Soft Skills

2. **Update colors to match design palette** - Change the hardcoded `#35BDF8` color in SVGs to use `currentColor` so it inherits the primary color from Tailwind's `text-primary` class

3. **Add icon property to skillCategories** - Extend the `SkillCategory` interface to include an `icon` property that references the appropriate icon component

4. **Update the category header rendering** - Replace:
   ```tsx
   <span className="w-2 h-2 bg-primary rounded-full" />
   ```
   With the corresponding SVG icon component, sized appropriately (32x32 or 40x40)

### Icon Mapping

| Category Title | Icon File | Icon Description |
|----------------|-----------|------------------|
| UX Design | UX_Design.svg | Lightbulb (ideas/innovation) |
| UI Design | UI_Design.svg | Color palette |
| Tools | Tools.svg | Wrench tool |
| Soft Skills | Soft_Skills.svg | Group of people |

### Technical Details

- Icons will be defined as React functional components returning inline SVG
- Using `currentColor` allows the icons to inherit color from parent's `text-primary` class
- Icon size: 32x32px to maintain visual balance with category titles
- Background rectangle with 10% opacity primary color creates subtle container effect matching the uploaded designs
