# Phase 3 — Service discovery and expansion

## Delivered

- Reworked the six capability cards into an interactive service explorer.
- Added contextual service-fit descriptions, expected outcomes and example deliverables for Websites, Business Systems, Mobile Apps, Automation, AI Experiences and Digital Products.
- Added a guided, deterministic service finder that maps six prospect needs to a relevant starting service.
- Added contextual enquiry links and PostHog events for service-card selection, service-detail CTAs and finder interactions.
- Kept the experience frontend-only. The finder does not call an AI model, send data to a server or claim to produce a final technical scope.

## Guardrails

- Recommendations are starting points, not definitive technical assessments.
- Final scope, implementation approach, cost and timeline remain subject to a conversation and project discovery.
- No new dependencies, database, API routes or external services were added.
- Existing pricing, contact destinations, navigation, analytics integration and project content were not intentionally changed.
- The Three.js / React Three Fiber hero components remain untouched.

## Manual verification

- [ ] Select each of the six services and confirm its detail panel updates.
- [ ] Confirm keyboard users can reach and activate each service card and finder option.
- [ ] Test all six finder options and confirm each recommendation is relevant.
- [ ] Follow both contextual enquiry links and confirm they reach the existing contact section.
- [ ] Check mobile layouts at narrow widths and tablet/desktop layouts.
- [ ] Confirm service analytics events appear in PostHog when analytics is loaded.
- [ ] Re-run `npx tsc --noEmit`, `npm run lint` and `npm run build`.

## Existing verification items carried forward from Phase 2

- The production build and Next.js TypeScript build checks passed in the user's local run.
- `npm run lint` is currently blocked because ESLint 9 is installed but the repository has no `eslint.config.js` flat configuration. Resolve this separately without suppressing lint errors.
- `npm ci` reported 11 dependency vulnerabilities (8 moderate, 1 high, 2 critical). Inspect `npm audit` output and address deliberately; do not use `npm audit fix --force` without reviewing breaking changes.
