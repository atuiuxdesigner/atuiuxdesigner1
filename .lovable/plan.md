

## Replace Website with Telegram Bot in Contact Section

### Overview
Update the Contact section to replace the "Website" contact method with a Telegram bot link, keeping the same visual style and functionality.

### Changes Required

**File: `src/components/Contact.tsx`**

1. **Add a custom Telegram icon** - Create a custom SVG icon matching the Lucide icon style (similar to the existing WhatsApp icon)

2. **Update the contactMethods array** - Replace the Website entry:
   
   **Current:**
   ```typescript
   { 
     icon: Globe, 
     label: "Website", 
     value: "atulthorat.com",
     href: "https://atulthorat.com",
     external: true
   }
   ```
   
   **New:**
   ```typescript
   { 
     icon: TelegramIcon, 
     label: "Telegram", 
     value: "@Atul_Thorat_Bot",
     href: "https://t.me/Atul_Thorat_20260124_bot",
     external: true
   }
   ```

3. **Remove unused Globe import** - Clean up the import statement since Globe icon will no longer be needed

### Technical Details

- The Telegram icon will be a custom SVG component styled to match the existing Lucide icons (stroke-based, 24x24 viewBox)
- The link will open in a new tab (using existing `external: true` behavior)
- Display value will be shortened to "@Atul_Thorat_Bot" for cleaner appearance

