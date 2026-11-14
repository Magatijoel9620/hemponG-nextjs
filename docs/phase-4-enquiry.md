# Phase 4 — Prospect journey and enquiry system

## Delivered

- Added a three-step project enquiry form: contact details, service direction, and project context.
- Added service-specific follow-up prompts for Websites, Business Systems, Mobile Apps, Automation, AI Experiences and Digital Products.
- Carried the selected service from the Phase 3 service explorer/finder into the enquiry form without a page reload or browser-storage dependency.
- Kept budget and timeline optional. The form does not quote a price or promise a delivery date.
- Added a native Next.js `POST /api/enquiries` Route Handler. It validates and bounds submitted fields, rejects oversized bodies, checks same-origin requests when an Origin header is present, escapes email HTML, uses a honeypot and minimum completion time, and applies a per-process IP request window.
- Added Resend delivery for the internal enquiry notification and a best-effort acknowledgement email to the prospect.
- Added loading, validation, success and failure states; retained direct email and WhatsApp alternatives.
- Added an ESLint 9 flat configuration using the installed `eslint-config-next` presets.
- Corrected the hero heading width issue introduced by the Phase 2 split-text treatment. The original and Phase 2 heading both used `clamp(3.9rem, 10vw, 9.7rem)`. Phase 2 also wrapped the animated words in overflow-clipped containers. The updated heading uses a wider first grid column, a lower responsive size cap and a content-width second line with extra right-side breathing room. The Three.js hero artwork is untouched.

## Environment configuration

Copy `.env.example` to `.env.local` and set:

```dotenv
RESEND_API_KEY=re_...
ENQUIRY_TO_EMAIL=hempongroup@gmail.com
RESEND_FROM_EMAIL="Hempon Group <noreply@hempongroup.co.ke>"
```

The sender must be verified in the Resend account. Keep `RESEND_API_KEY` server-only; do not prefix it with `NEXT_PUBLIC_`, commit it, or expose it in client code. If the key is absent, the endpoint returns a controlled unavailable response and the direct contact options remain visible.

## Security and operational notes

- The current rate limiter is an in-memory, per-process guard (5 requests per 10 minutes per detected client IP). It is useful as a first layer but is not globally consistent across serverless instances or restarts. Before high-volume production traffic, replace it with a shared rate-limit store or enforce an equivalent edge/WAF limit. No new database or external dependency was added in this phase.
- The Origin check is an additional same-site safeguard, not authentication. The form is intentionally public.
- Email acknowledgement is best-effort after the internal notification succeeds. An acknowledgement failure is logged without causing the prospect to resubmit an enquiry that Hempon has already received.
- The route does not store enquiry records. Resend delivery is the initial handoff; a CRM/database can be considered separately if operational needs justify it.
- Do not put passwords, OTPs, payment credentials or other secrets into the enquiry form.

## Verification checklist

- [ ] Configure Resend environment variables locally and confirm the sender is verified.
- [ ] Complete all three steps with valid data; verify the internal email and prospect acknowledgement.
- [ ] Test each service-specific prompt and verify selections from both the Phase 3 service explorer and finder prefill the form.
- [ ] Test required-field validation, invalid email, short project description, optional budget/timeline, back navigation and repeat submissions.
- [ ] Confirm the honeypot is not visible/focusable and filled honeypot submissions do not send email.
- [ ] Confirm oversized, cross-origin, malformed and rate-limited requests are rejected.
- [ ] Simulate missing/invalid Resend credentials and provider failures; verify helpful form feedback and that direct email/WhatsApp remain available.
- [ ] Check the hero at 1024px, 1280px, 1440px and ultrawide desktop widths; confirm `MATTERS.` is fully visible and does not collide with the Three.js artwork.
- [ ] Re-run `npm ci`, `npx tsc --noEmit`, `npm run lint` and `npm run build`.
- [ ] Re-test desktop/tablet/mobile, keyboard navigation, reduced motion, privacy/legal links and the protected Three.js hero.

## Carried-forward security review

The user's Phase 2 install reported 11 npm audit findings (8 moderate, 1 high, 2 critical). This patch does not change dependencies or the lockfile. Review `npm audit` and plan targeted upgrades separately; do not apply `npm audit fix --force` blindly.
