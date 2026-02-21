# Canonical & primary domain verification

Primary domain: **https://dior.host** only. Secondary domains (diorhost.com, diorhost.net, www.*) 301 to primary.

## Grep-based checks (run from repo root)

After any change, ensure no secondary domains or `.html` routes leak into output or config:

```bash
# Must return no matches in source (mailto and docs/comments are OK):
rg -n "diorhost\.com|diorhost\.net" frontend --glob '!*.md' --glob '!*.mdx' --glob '!*.bat' --glob '!*.txt' --glob '!*.yml'

# No .html in canonical/OG/sitemap/route output (legit .html verification files in public/ are OK):
rg -n "\.html" frontend/app frontend/lib --glob '!*verification*' --glob '!*route*'
```

- **diorhost.com / diorhost.net**: Only acceptable in middleware (redirect logic) or comments; no links or metadata.
- **.html**: Do not use in canonical, `openGraph.url`, sitemap entries, or internal links; verification files (e.g. `google*.html`) in `public/` are fine.

## Manual verification checklist

1. **View-source (any page)**
   - `<link rel="canonical" href="https://dior.host/...">` — path is real (no `.html`).
   - `<meta property="og:url" content="https://dior.host/...">` — same URL.

2. **Secondary domain redirect**
   - Open `https://diorhost.com/` or `https://diorhost.net/bulletproof-vds` → 301 to `https://dior.host/` or `https://dior.host/bulletproof-vds`.
   - Query string preserved: `https://diorhost.com/ru?foo=bar` → `https://dior.host/ru?foo=bar`.

3. **Sitemap**
   - Open `https://dior.host/sitemap.xml` — all `<loc>` are `https://dior.host/...`, no `.com`/`.net`, no `.html`.

4. **robots.txt**
   - `Sitemap: https://dior.host/sitemap.xml` — no other domain.

5. **Build**
   - `npm run build` (or `pnpm build`) — no references to diorhost.com/diorhost.net in build output; no `.html` in generated metadata/sitemap.

## Helpers

- **`PRIMARY_ORIGIN`** — `"https://dior.host"` (use for all canonical, OG, JSON-LD, sitemap).
- **`toPrimaryUrl(pathname, search?)`** — absolute primary URL; never appends `.html`.
- **`getHreflangAlternates(pathname)`** — `{ "x-default", "en", "ru" }` → primary URLs for metadata `alternates.languages`.
