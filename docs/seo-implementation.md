# Hempon Group corporate SEO implementation

## Scope
This patch adds technical and metadata SEO to the existing Next.js site. Existing page copy, visual layout, interactions, routes, pricing, contact flows, analytics events, and product links are intentionally preserved.

## Changes
- Expanded the shared Next.js metadata: title template, description, canonical URL, locale, social sharing metadata, icon variants, crawler directives, and relevant search topics.
- Corrected Open Graph image dimensions to match the actual `public/og-image.png` asset (1729 × 910).
- Expanded JSON-LD with Organization, WebSite, and homepage WebPage entities. Business location and contact details are limited to details already displayed by the website.
- Kept the sitemap limited to actual public routes: `/`, `/privacy-policy`, and `/terms`.
- Kept crawler access open through `robots.ts` and linked the sitemap.
- Added page-specific Open Graph and X/Twitter metadata for the privacy and terms pages.
- Corrected two existing hero image ALT labels that were assigned to the opposite product screenshots.

## Keyword focus
The metadata targets the services already represented in the website content:
- web design and website development in Kenya
- software development company in Kenya
- custom business software
- mobile application development
- e-commerce website development
- workflow and business process automation

Google does not use the `meta keywords` tag as a ranking signal. Search visibility depends on useful visible content, crawlability, page experience, and authoritative references. The keyword list is supplementary metadata, not a ranking shortcut.

## Before production deployment
1. Run `npm ci`.
2. Run `npm run build` and resolve any build errors.
3. Preview the deployment and inspect page source for title, description, canonical, Open Graph, Twitter, and JSON-LD output.
4. Check `/robots.txt` and `/sitemap.xml` on the preview and production domain.
5. Test the homepage and legal routes on mobile and desktop.
6. Verify `https://www.hempongroup.co.ke` as a Domain property in Google Search Console, then submit `https://www.hempongroup.co.ke/sitemap.xml`.
7. Configure GA4 only if a valid measurement ID is available; no analytics IDs or credentials were supplied in the source archive, so no new tracking integration was invented.

## Deliberate exclusions
- No new landing-page copy or keyword-stuffed text.
- No new URLs invented for projects that currently link to other domains.
- No local business street address or unsupported business claims added.
- No analytics credentials, secrets, or third-party IDs added.
