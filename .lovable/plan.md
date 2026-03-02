

## Update Style Guide & Color Palette

Based on the uploaded brand guidelines, here are the changes needed:

### Color Changes

**New brand colors:**
- Primary Blue: `#5b4bff` (replaces cyan in light mode and golden yellow in dark mode)
- Deep Black: `#0b0b0f` (dark background)
- Soft White: `#f5f6fa` (light background)
- Neutral Gray: `#8A8A96` (muted text)

Both light and dark modes will use `#5b4bff` as the primary/accent color instead of the current split (cyan for light, golden yellow for dark).

### Font Changes

- Add **Sora** as the heading font (geometric, modern)
- Keep **Inter** for body text
- Update Google Fonts import and Tailwind config

### Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Update all CSS variables for both `:root` and `.dark`, update font import, replace `--cyan` references with new primary, update glow utilities to use primary blue |
| `tailwind.config.ts` | Add `Sora` to font family config, update cyan color references |
| `src/components/About.tsx` | Update hardcoded SVG fill colors (`#0F1729` -> new dark) |

### Key Details

- All glow effects (`glow-cyan`, `glow-text`, `pulse-glow`, etc.) will shift from cyan/yellow to the new `#5b4bff` purple-blue
- The `--cyan` custom property will be replaced with the primary color throughout
- Dark mode background shifts from navy (`220 50% 5%`) to deep black (`#0b0b0f`)
- Light mode background shifts to soft white (`#f5f6fa`)
- Primary color becomes consistent across both themes: `#5b4bff`

