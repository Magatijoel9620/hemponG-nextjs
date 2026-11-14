# Phase 2 — Visual & Motion Uplift

## Delivered

- Added a Hempon-branded first-visit welcome dialog with three prospect pathways: capabilities, selected work/products, and project enquiry.
- Welcome dialog supports Escape, backdrop dismissal, focus trapping/restoration, body-scroll locking, local/session dismissal persistence, and a compact mobile layout.
- Added a short hero text entrance sequence while retaining the existing scroll-linked hero movement and visual composition.
- Added staggered in-view reveals to capability cards and retained the existing project, process, testimonial and section reveal patterns.
- Added a subtle page reading-progress line.
- Added active-section states to desktop and mobile navigation using IntersectionObserver.
- Standardized selected-work numbering to show the actual seven displayed projects (`01 / 07` through `07 / 07`).
- Added restrained hover, focus and welcome-dialog entrance polish.

## Protected / unchanged

- `src/components/InteractiveHero.tsx` and `src/components/ThreeScene.tsx` remain byte-identical to the supplied source archive.
- No dependency or lockfile changes.
- No changes to contact destinations, product links, pricing, analytics events, SEO metadata, structured data, legal pages, or existing content claims.
- No service finder, enquiry form, API route, email workflow, database or backend work was introduced; those belong to later phases.

## Verification status

- `git diff --check`: passed.
- Dependency installation could not complete in the build environment because npm registry requests failed with `EAI_AGAIN` (DNS/network resolution). Therefore ESLint, TypeScript and production build have **not** been run here.
- Run locally before merge:

```bash
npm ci
npx tsc --noEmit
npm run lint
npm run build
```

## Manual QA

- First visit: welcome dialog appears once; all three pathways navigate to the intended sections.
- Return visit: dialog remains dismissed after reload and browser restart.
- Keyboard: initial focus is on Close; Tab/Shift+Tab remain within the dialog; Escape closes it; focus returns to the previously focused element.
- Mobile: dialog fits within the viewport and its content scrolls independently.
- Navigation: active section indicator follows the visible section on desktop and mobile.
- Motion: hero entrance, capability reveals, progress line and existing section effects work with reduced-motion enabled.
- Hero visual regression: compare the existing hero artwork and any Three.js/R3F components against the original; protected files were not modified.
