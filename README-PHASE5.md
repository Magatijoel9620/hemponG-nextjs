# Hempon Group — Phase 5 update

This archive builds on the Phase 4 enquiry-system source and adds the Phase 5 content, trust and conversion refinement.

## What's included

- Clearer About / business-first positioning and a link to the separate Magati.dev portfolio.
- Basic, Standard and Premium maintenance/support tiers, plus a custom support path.
- Interactive FAQ section based on the supplied Hempon customer FAQ knowledge base.
- Clearer starting-price context and enquiry pathways.
- Support and FAQ navigation/footer links.
- PostHog events for FAQ opens and support-tier enquiry starts.

## Setup

```bash
npm ci
# Keep your existing .env.local from Phase 4, including the working Resend and PostHog values.
npx tsc --noEmit
npm run lint
npm run build
npm run dev
```

Do not replace working environment values with placeholders. The Phase 4 Resend variables and PostHog browser configuration are carried forward unchanged.

See `docs/phase-5-content-trust-conversion.md` for scope, guardrails and the QA checklist. The full browser QA/release-readiness pass is Phase 6.
