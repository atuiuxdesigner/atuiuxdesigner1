## Problem

The contact form on `www.atuiuxdesigner.com` fails with "Failed to send a request to the Edge Function." The `save-contact` edge function's CORS allowlist only includes the `.lovable.app`, preview, and `.lovableproject.com` origins. The custom domain is not allowed, so the browser blocks the request before it reaches the function. The `chat` (chatbot) function has the same allowlist and the same problem.

## Fix

Add the custom domain (both `www` and apex) to the `ALLOWED_ORIGINS` array in:

1. `supabase/functions/save-contact/index.ts`
2. `supabase/functions/chat/index.ts`
3. `supabase/functions/save-to-sheet/index.ts` (same allowlist pattern, keep consistent)

New entries:
- `https://www.atuiuxdesigner.com`
- `https://atuiuxdesigner.com`

No frontend changes needed. Functions auto-deploy.

## Verification

After deploy, submit the contact form from `www.atuiuxdesigner.com` and confirm a row appears in the Google Sheet, and that the chatbot streams responses from the custom domain.
