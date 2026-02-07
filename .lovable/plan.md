

## AI Chatbot Implementation with Lovable Cloud

### Step 1: Enable Lovable Cloud
Enable Lovable Cloud backend to get access to edge functions and Lovable AI.

### Step 2: Create Edge Functions

**`supabase/functions/chat/index.ts`** - AI chat handler:
- Streaming SSE responses using Lovable AI (Gemini Flash)
- System prompt pre-loaded with Atul's full portfolio context (background, skills, case studies, contact info)
- Tool calling to detect when users share contact info or want to schedule meetings
- When a tool call is detected, forwards data to the save-to-sheet function
- Handles 429/402 rate limit errors gracefully

**`supabase/functions/save-to-sheet/index.ts`** - Google Sheets bridge:
- Accepts lead/meeting data as JSON
- Forwards to Google Apps Script web app URL (stored as `GOOGLE_SHEET_WEBHOOK_URL` secret)
- Validates input before forwarding

**`supabase/config.toml`** - Edge function config with `verify_jwt = false` for both functions.

### Step 3: Create Chatbot UI

**`src/components/Chatbot.tsx`** - Floating chat widget:
- Bottom-right floating button (56px) with chat icon and pulse animation
- Expandable panel (400px wide, 500px tall, full-width on mobile)
- SSE streaming with token-by-token rendering
- Markdown rendering for bot responses
- Quick action chips: "About Atul", "View Work", "Schedule a Call"
- Auto-scroll to latest message
- Dark/light theme aware
- z-index: 40 (below navbar)

### Step 4: Integrate into Index Page

**`src/pages/Index.tsx`** - Add the Chatbot component.

### Step 5: Google Apps Script Setup (Manual - User Action)

After implementation, you will need to:
1. Open your Google Sheet
2. Go to Extensions > Apps Script
3. Paste the provided script
4. Deploy as web app (Anyone can access)
5. Add the web app URL as the `GOOGLE_SHEET_WEBHOOK_URL` secret

The script will auto-structure your sheet with columns: Timestamp, Name, Email, Phone, Company, Type, Preferred Date, Preferred Time, Message Summary, Full Chat.

### Files Summary

| File | Action |
|------|--------|
| `supabase/functions/chat/index.ts` | Create |
| `supabase/functions/save-to-sheet/index.ts` | Create |
| `supabase/config.toml` | Create/Update |
| `src/components/Chatbot.tsx` | Create |
| `src/pages/Index.tsx` | Modify (add Chatbot) |

