# Hempon Group — UI refinement patch

This archive is the complete source snapshot with the requested minor UI refinements applied.

## Changes
- Capabilities cards now place the `Explore` / `Selected` state above the description in normal document flow, with the accent colour and stronger contrast to prevent overlap at responsive breakpoints.
- Added subtle pointer-based magnetic response and hover polish to capability, work, process, support, testimonial, pricing and contact cards.
- Rounded links and buttons receive a subtle magnetic response and hover treatment.
- Reused the existing box-grid visual language across the main content sections.
- Refined the footer while preserving the dark UI: stronger headings and link contrast, a closing project CTA, staggered reveal timing, a subtle right-side lime glow, and a restrained grid background.
- Social links are icon-only, ordered Facebook and TikTok first, followed by Instagram, LinkedIn and X.
- Added a dedicated GitHub profile link beneath the email address.
- Renamed the footer portfolio link to Hempon Portfolio.

## Preserved
- Three.js / React Three Fiber hero files were not edited.
- Existing enquiry flow, Resend API, PostHog integration, contact details, product links, legal links and SEO files were carried forward.
- No package dependencies or lockfiles were changed.

## Validation
- ZIP integrity checked after packaging.
- `npm ci` was attempted in the build environment but timed out, so lint, TypeScript and production build could not be executed here. Please run the project's normal checks after applying this source snapshot.
