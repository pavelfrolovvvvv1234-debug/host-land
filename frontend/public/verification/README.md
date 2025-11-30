# Verification Files Directory

Place your verification files here for Google, Yandex, and Bing.

## File Placement

### Google Search Console
Place the HTML verification file here (e.g., `google1234567890abcdef.html`)

Then access it via: `https://dior.host/api/verification/google1234567890abcdef.html`

Or place it directly in `/public/` for: `https://dior.host/google1234567890abcdef.html`

### Yandex Webmaster
Place the verification file here (e.g., `yandex_1234567890.html`)

Access via: `https://dior.host/api/verification/yandex_1234567890.html`

### Bing Webmaster Tools
Place the XML file here (e.g., `BingSiteAuth.xml`)

Access via: `https://dior.host/api/verification/BingSiteAuth.xml`

## Recommended Approach

For most services, it's easier to place files directly in `/public/` root:
- `public/google1234567890abcdef.html`
- `public/yandex_1234567890.html`
- `public/BingSiteAuth.xml`

Then access via:
- `https://dior.host/google1234567890abcdef.html`
- `https://dior.host/yandex_1234567890.html`
- `https://dior.host/BingSiteAuth.xml`


