## Goal
Replace the two "Coming Soon" placeholders (`/case-study/customer`, `/case-study/vendor`) with full Behance-style case study pages that mirror `CaseStudyDelivery.tsx`, sourced from the Figma files via the Lovable Desktop Figma MCP.

## Prerequisites (one-time, before step 1)
- Lovable Desktop app installed and running.
- Figma Desktop in **Dev Mode** with **"Enable desktop MCP server"** turned on.
- Local MCP server connected in Lovable → Settings → Connectors → Local MCP servers.
- For each step, you select the relevant frame in Figma so the MCP returns that node's metadata, tokens, and exports.

## Reusable building blocks (already in repo)
- `src/components/case-study/SectionHeader.tsx`
- `src/components/case-study/PhoneMockup.tsx`
- `src/components/case-study/ScreenShowcase.tsx`
- `src/components/case-study/MetricCard.tsx`
- Page skeleton, header, Helmet/JSON-LD pattern: copy from `src/pages/CaseStudyDelivery.tsx`.

No new shared components are planned; we reuse the Delivery template verbatim and only swap content + screen arrays.

## Step-by-step plan (5 credits, 1 message each)

### Step 1 — Pull Figma assets for Customer app
- In Figma Desktop, select the Customer case study cover frame and each Lo-Fi / Hi-Fi screen frame.
- Use the Figma MCP to fetch frame metadata (titles, captions, ordering) and export each screen as JPG @1x and @2x.
- Save exports to `public/case-study/customer/lofi/NN-name.jpg` and `public/case-study/customer/hifi/NN-name.jpg` using the same numbering convention as Delivery.
- Capture content blocks from Figma (Project Snapshot, Challenge, Problem Discovery cards, Objectives, Process, Metrics, Outcome quote) into a short content JSON saved at `.lovable/case-study-customer.content.json` for step 2.

### Step 2 — Build Customer case study page
- Replace `src/pages/CaseStudyCustomer.tsx` with a clone of `CaseStudyDelivery.tsx`:
  - Update `Helmet` (title, description, og/twitter, JSON-LD `Article` headline + url).
  - Swap `lofiScreens` / `hifiScreens` arrays to point at `/case-study/customer/...` paths from step 1.
  - Replace hero copy, Project Snapshot, Challenge, Existing Ecosystem, Problem Discovery, Strategic Insight, Objectives, Process, Metrics, Outcome sections with the content JSON from step 1.
  - Keep the existing fixed header, ThemeToggle, back link, and Behance link pattern.
- Verify by visiting `/case-study/customer` in preview, scrolling through, checking responsive behavior at the current 1067px viewport and at mobile width.

### Step 3 — Pull Figma assets for Vendor app
- Same flow as step 1, but for the Vendor file.
- Export to `public/case-study/vendor/lofi/...` and `public/case-study/vendor/hifi/...`.
- Save content snapshot to `.lovable/case-study-vendor.content.json`.
- Note vendor-specific sections that differ (e.g. dashboard analytics, multi-role flows) so step 4 can include them.

### Step 4 — Build Vendor case study page
- Replace `src/pages/CaseStudyVendor.tsx` with the same template as Customer.
  - Update Helmet + JSON-LD for vendor URL.
  - Swap screen arrays to `/case-study/vendor/...`.
  - Fill all sections from the vendor content JSON.
  - If vendor needs an extra section not present in Delivery (e.g. "Dashboard Analytics"), add it inline using existing primitives (`Card`, `SectionHeader`, `MetricCard`) — no new shared components.
- Verify in preview at `/case-study/vendor`.

### Step 5 — Polish, link-up, SEO, QA
- `src/components/CaseStudies.tsx`: confirm both cards now route to live pages; remove any "Coming Soon" affordance (e.g. `data-cursor="Coming Soon"` if still present, swap to `"Explore"`).
- `public/sitemap.xml`: bump `lastmod` for the two case study URLs.
- `public/llms.txt`: rewrite the Customer + Vendor lines from "coming soon" to one-sentence live summaries.
- Update `mem://features/case-study-pages-structure` memory note if the vendor page introduces a new section pattern.
- Final QA pass: run preview, scroll both pages, check `<title>` length <60 chars, meta description <160 chars, single H1 per page, all images load, no console errors.

## Out of scope
- No new design tokens, no Tailwind config changes, no animation library swaps.
- No copy changes to Hero, About, Skills, Contact (already handled in last loop).
- No backend, auth, or Cloud changes.

## Verification per step
- After each build step (2 and 4), read the page back in preview, watch console logs, and spot-check 3 image paths exist under `public/`.
- After step 5, re-check the SEO findings list — no regressions on titles, descriptions, sitemap, structured data.
