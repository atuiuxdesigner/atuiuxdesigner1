

## AI Chatbot with Google Sheets Integration

### Overview
Add a floating AI chatbot widget to the portfolio site that can:
- Answer visitor questions about Atul's experience, skills, case studies, and services
- Collect visitor information (name, email, phone, company)
- Schedule meetings/calls based on visitor requests
- Store all interactions and lead data in the provided Google Sheet

### Architecture

```text
+-------------------+       +--------------------+       +-------------------+
|  Floating Chat    | ----> | Edge Function:     | ----> | Lovable AI        |
|  Widget (React)   |       | /chat              |       | (Gemini Flash)    |
+-------------------+       +--------------------+       +-------------------+
                                    |
                                    | (when lead/meeting detected)
                                    v
                            +--------------------+       +-------------------+
                            | Edge Function:     | ----> | Google Apps Script |
                            | /save-to-sheet     |       | Web App (Sheet)   |
                            +--------------------+       +-------------------+
```

### Google Sheets Integration Strategy

Since Google Sheets API requires complex OAuth/service account setup, we'll use **Google Apps Script** deployed as a web app from your sheet. This is the simplest approach:

**You'll need to do one quick setup step:**
1. Open your Google Sheet
2. Go to Extensions > Apps Script
3. Paste a small script (we'll provide it)
4. Deploy as a web app (Anyone can access)
5. Copy the web app URL and add it as a secret

The script will accept POST requests with lead data and append rows to the sheet.

**Sheet Structure (auto-created by the script):**

| Column | Content |
|--------|---------|
| Timestamp | Date/time of interaction |
| Name | Visitor's name |
| Email | Visitor's email |
| Phone | Phone number (if provided) |
| Company | Company name (if provided) |
| Type | "inquiry" / "meeting_request" / "general" |
| Preferred Date | For meeting requests |
| Preferred Time | For meeting requests |
| Message Summary | AI-generated summary of conversation |
| Full Chat | Complete conversation log |

---

### Implementation Steps

#### Step 1: Enable Lovable Cloud
Required for edge functions and Lovable AI access.

#### Step 2: Create Edge Function - `/chat`
Handles AI conversations with a system prompt containing all portfolio information (About, Skills, Case Studies, Contact details). Uses Lovable AI (Gemini Flash) with streaming responses.

The system prompt will include:
- Atul's background and journey
- Skills and expertise
- Case study details (Youhonk Delivery, Customer, Vendor apps)
- Contact information
- Instructions to detect when users want to schedule meetings or share contact info

The AI will use **tool calling** to trigger lead capture and meeting scheduling when detected in conversation.

#### Step 3: Create Edge Function - `/save-to-sheet`
Accepts lead/meeting data and POSTs it to the Google Apps Script web app URL (stored as a secret).

#### Step 4: Create Chatbot UI Component
A floating chat bubble in the bottom-right corner with:
- Animated chat icon button
- Expandable chat panel (400px wide, 500px tall)
- Message bubbles with markdown rendering
- Auto-scroll to latest message
- Quick action chips ("About Atul", "View Work", "Schedule a Call")
- Input field with send button
- Minimized state showing unread count

#### Step 5: Add Chatbot to Index Page
Import and render the chatbot component on the main page.

---

### Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `supabase/functions/chat/index.ts` | Create | AI chat edge function with portfolio context |
| `supabase/functions/save-to-sheet/index.ts` | Create | Google Sheets data forwarding |
| `supabase/config.toml` | Create/Update | Edge function config with verify_jwt = false |
| `src/components/Chatbot.tsx` | Create | Floating chatbot UI component |
| `src/pages/Index.tsx` | Modify | Add Chatbot component |

---

### Chatbot UI Design

**Floating Button (collapsed):**
- Bottom-right corner, 56px circle
- Primary color with chat icon
- Subtle pulse animation to draw attention
- Respects dark/light theme

**Chat Panel (expanded):**
```text
+----------------------------------+
| [Bot Avatar]  Atul's Assistant  X |
|----------------------------------|
|                                  |
| [Bot] Hi! I'm Atul's AI         |
| assistant. Ask me about his      |
| work, skills, or schedule a      |
| meeting!                         |
|                                  |
| [Quick Chips]                    |
| [About Atul] [View Work]        |
| [Schedule Call]                  |
|                                  |
|         [User] Tell me about     |
|         your delivery app        |
|                                  |
| [Bot] The Youhonk Delivery App  |
| is a case study where...         |
|                                  |
|----------------------------------|
| [Type a message...]      [Send] |
+----------------------------------+
```

**Styling:**
- Matches portfolio theme (dark/light mode aware)
- Card-based with border and shadow
- Smooth open/close animation (scale + fade)
- Message bubbles: Bot messages left-aligned, user messages right-aligned with primary color
- Markdown rendering for bot responses

---

### AI System Prompt Context

The chatbot will be pre-loaded with Atul's portfolio information:

- **Background**: Computer Engineering graduate, discovered UX in 2023, working at Youhonk since 2024
- **Skills**: UX Design, UI Design, Figma, User Research, Prototyping, Usability Testing
- **Experience**: 1+ years, 50+ sprints, 1000+ users impacted
- **Case Studies**: Delivery App (pickup/drop partner experience), Customer App (vehicle repair booking), Vendor App (workshop management)
- **Contact**: Email: atuiuxdesigner@gmail.com, WhatsApp: +91 96238 80889, Location: Pune, India
- **Design Philosophy**: Focus on user-centered design, making things work beautifully

When the AI detects a user wants to:
1. **Share contact info** - AI confirms and saves to sheet
2. **Schedule a meeting** - AI asks for preferred date/time, then saves to sheet
3. **General inquiry** - AI answers from portfolio context

---

### Google Apps Script (for the user to deploy)

After implementation, we'll provide a simple script to paste into Google Apps Script:
```text
function doPost(e) {
  // Parse incoming data
  // Append row to sheet
  // Return success response
}
```

This will be the only manual step required.

---

### Technical Details

**Chat Edge Function:**
- Streaming SSE responses for real-time token display
- System prompt with full portfolio context
- Tool calling for `save_lead` and `schedule_meeting` functions
- Rate limit error handling (429/402)

**Save-to-Sheet Edge Function:**
- Accepts JSON with lead data
- Forwards to Google Apps Script web app URL
- URL stored as `GOOGLE_SHEET_WEBHOOK_URL` secret

**Chatbot Component:**
- Uses React state for messages, loading, open/closed
- SSE streaming parser for token-by-token rendering
- Auto-scroll via useRef
- Responsive: full-width on mobile (< 640px)
- z-index: 40 (below navbar at 50)

**Secret Required:**
- `GOOGLE_SHEET_WEBHOOK_URL` - The deployed Google Apps Script web app URL

