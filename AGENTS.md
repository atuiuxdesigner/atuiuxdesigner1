# Project decisions

- Store downloadable binary media as Lovable Assets pointers and reference their URLs, keeping binary files out of the repository.- Resume PDF is served from `public/` (static path), not a Lovable Asset, because the custom domain is hosted on Netlify where `/__l5e/` asset URLs 404.
