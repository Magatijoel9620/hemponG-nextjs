# Phase 1 — Experience Foundation

## Scope completed

- Standardized the existing Lenis lifecycle with reduced-motion handling, anchor offsets, visibility-aware animation-frame scheduling, and deterministic cleanup.
- Added a reusable `Reveal` primitive with optional delay, distance, repeat behaviour, and class name. Existing defaults are unchanged.
- Added a compact, dismissible first-visit welcome message. It appears once per browser profile and stores its seen state locally.
- Applied Motion's user reduced-motion preference at the application root.
- Added consistent keyboard focus-visible styling and anchor scroll offsets.
- Kept the current application stack and dependencies unchanged.

## Protected hero contract

The following files are protected from Phase 1 and later uplift changes unless a separately approved hero-specific task is opened:

- `src/components/InteractiveHero.tsx`
- `src/components/ThreeScene.tsx`

The current hero scene, React Three Fiber canvas, geometry, materials, lighting, camera, pointer-driven rotation, float animation, composition, and rendering lifecycle must be preserved. New motion work may be layered around the hero, but must not replace or modify its scene.

## Explicitly unchanged

- `src/app/page.tsx` — existing page composition and content.
- `src/components/InteractiveHero.tsx` — hero integration and scroll-linked text wrapper.
- `src/components/ThreeScene.tsx` — Three.js scene implementation.
- `package.json` and lockfile — no dependency additions or upgrades.
- Existing SEO metadata, structured data, legal pages, analytics, contact links, and assets.

## Verification checklist

- [ ] Install from the committed lockfile and run lint.
- [ ] Run TypeScript validation.
- [ ] Run a production build.
- [ ] Confirm welcome message appears only on first visit and dismisses correctly.
- [ ] Confirm reduced-motion preference disables smooth scrolling and Motion transform choreography.
- [ ] Confirm keyboard focus indicators are visible.
- [ ] Regress desktop and mobile hero rendering and pointer interaction.
