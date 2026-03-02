

## Replace Logo Across the Site

The new SVG logo needs to be copied into the project and replace the current `logo.jfif` in all 5 files that reference it.

### Steps

1. **Copy the uploaded SVG** to `src/assets/logo.svg`
2. **Update imports** in all 5 files — change `import logo from "@/assets/logo.jfif"` to `import logo from "@/assets/logo.svg"`:
   - `src/components/Navbar.tsx`
   - `src/components/Footer.tsx`
   - `src/pages/CaseStudyCustomer.tsx`
   - `src/pages/CaseStudyVendor.tsx`
   - `src/pages/CaseStudyDelivery.tsx`

Since the variable name (`logo`) and usage (`src={logo}`) remain the same, only the import path changes. No other code modifications needed.

