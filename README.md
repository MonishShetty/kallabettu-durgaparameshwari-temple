# Sri Durgaparameshwari Temple Website

Next.js website for Sri Durgaparameshwari Temple, Kallubettu, Nainadu.

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Included

- Responsive home, history, sevas, gallery, and contact pages
- Google Maps embed using the temple coordinates
- E-hundi QR placeholder modal
- Fast image rendering through `next/image`
- Placeholder gallery images ready to replace with real temple photos
- Search-ready `sitemap.xml`, `robots.txt`, Open Graph metadata, and temple structured data

## Deploy on Netlify

Use these settings:

```text
Build command: npm run build
Publish directory: let Netlify auto-detect Next.js
```

Add these environment variables in Netlify:

```text
NEXT_PUBLIC_SITE_URL=https://your-real-netlify-or-domain-url
NETLIFY_NEXT_SKEW_PROTECTION=true
```

After deploying, open these URLs and confirm they work:

```text
https://your-real-netlify-or-domain-url/robots.txt
https://your-real-netlify-or-domain-url/sitemap.xml
```

## Google Search

1. Add the deployed site in Google Search Console.
2. Submit `https://your-real-netlify-or-domain-url/sitemap.xml`.
3. Use URL Inspection for the home page and request indexing.
4. Link the website from the temple Google Maps profile and any trusted social/community pages.
5. Check indexing with `site:your-real-netlify-or-domain-url`.

Google indexing is not instant. A free Netlify subdomain can appear in Google, but a custom domain and real external links usually make discovery and ranking easier.

## Asset Safety

Keep icons and important images inside the project when possible. This site uses bundled `lucide-react` icons and local images with `next/image`, so it does not depend on external icon CDNs loading correctly after deployment.
