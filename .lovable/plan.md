

## Add Internal Links for Customer App and Vendor App Case Study Pages

### Overview
Create new case study detail pages for the Youhonk Customer App and Vendor App, following the same pattern as the existing Delivery App case study. The pages will have placeholder content that can be updated later with Gamma embeds or custom content.

### Changes Required

**Step 1: Create New Page Files**

| File | Purpose |
|------|---------|
| `src/pages/CaseStudyCustomer.tsx` | Customer App case study page |
| `src/pages/CaseStudyVendor.tsx` | Vendor App case study page |

Both pages will follow the same structure as `CaseStudyDelivery.tsx`:
- Fixed header with logo, centered title, and "Back to Portfolio" button
- Main content area with placeholder text (ready for future Gamma embed or custom content)

**Step 2: Register Routes in `src/App.tsx`**

Add two new route definitions:
- `/case-study/customer` pointing to `CaseStudyCustomer`
- `/case-study/vendor` pointing to `CaseStudyVendor`

**Step 3: Update `src/components/CaseStudies.tsx`**

Add `internalLink` properties to the projects array:
- Youhonk Customer App: `internalLink: "/case-study/customer"`
- Youhonk Vendor App: `internalLink: "/case-study/vendor"`

### Technical Details

**New Page Structure (CaseStudyCustomer.tsx & CaseStudyVendor.tsx)**

Each page includes:
- SEO metadata via `react-helmet-async`
- Fixed header with:
  - Logo (links to home)
  - Centered page title
  - "Back to Portfolio" button (links to `/#work`)
- Placeholder content section explaining case study is coming soon
- Styled consistently with the Delivery App case study page

**Route Configuration**

```text
/case-study/delivery  --> CaseStudyDelivery (existing)
/case-study/customer  --> CaseStudyCustomer (new)
/case-study/vendor    --> CaseStudyVendor (new)
```

**Projects Array Updates**

```typescript
// Youhonk Customer App
{
  title: "Youhonk Customer App",
  // ... existing properties
  internalLink: "/case-study/customer",  // NEW
}

// Youhonk Vendor App  
{
  title: "Youhonk Vendor App",
  // ... existing properties
  internalLink: "/case-study/vendor",    // NEW
}
```

### Files to Create/Modify

| File | Action |
|------|--------|
| `src/pages/CaseStudyCustomer.tsx` | Create |
| `src/pages/CaseStudyVendor.tsx` | Create |
| `src/App.tsx` | Modify (add imports + routes) |
| `src/components/CaseStudies.tsx` | Modify (add internalLink properties) |

