# Hempon Group — Phase 4 update

This source includes the Phase 1–3 uplift plus the Phase 4 enquiry experience and the carried-over ESLint/hero corrections.

## Setup

```bash
npm ci
cp .env.example .env.local
# Add the Resend values documented in docs/phase-4-enquiry.md
npx tsc --noEmit
npm run lint
npm run build
npm run dev
```

The public enquiry form sends through the native Next.js route at `/api/enquiries`. Configure the Resend key and verified sender before testing actual delivery. No credentials are included in this archive.

See `docs/phase-4-enquiry.md` for the full implementation notes, operational limits and QA checklist.
