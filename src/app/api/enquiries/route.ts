import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";

const allowedServices = new Set([
  "Websites",
  "Business Systems",
  "Mobile Apps",
  "Automation",
  "AI Experiences",
  "Digital Products",
  "Not sure yet",
]);
const allowedBudgets = new Set([
  "Under KSh 25,000",
  "KSh 25,000–50,000",
  "KSh 50,000–100,000",
  "KSh 100,000–250,000",
  "KSh 250,000+",
  "Not sure yet",
]);
const allowedTimelines = new Set([
  "As soon as practical",
  "Within 1 month",
  "1–3 months",
  "3+ months",
  "Flexible",
]);

// Best-effort per-instance limiter. For multi-instance deployments, use a shared
// rate-limit store (for example Redis/KV) before increasing public traffic.
const requests = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character] ?? character);
}

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (requests.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    requests.set(key, recent);
    return true;
  }
  recent.push(now);
  requests.set(key, recent);
  if (requests.size > 5_000) {
    for (const [entryKey, timestamps] of requests) {
      if (timestamps.every((time) => now - time >= WINDOW_MS)) requests.delete(entryKey);
    }
  }
  return false;
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 12_000) {
    return NextResponse.json({ error: "Your enquiry is too large. Please shorten it and try again." }, { status: 413 });
  }

  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return NextResponse.json({ error: "Request could not be verified." }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: "Request could not be verified." }, { status: 403 });
    }
  }

  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const clientKey = request.headers.get("x-real-ip") || forwardedFor || "unknown-client";
  if (rateLimited(clientKey)) {
    return NextResponse.json({ error: "Too many enquiries from this connection. Please try again in a few minutes." }, { status: 429 });
  }

  let payload: Record<string, unknown>;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > 12_000) {
      return NextResponse.json({ error: "Your enquiry is too large. Please shorten it and try again." }, { status: 413 });
    }
    payload = JSON.parse(rawBody) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Please check your enquiry and try again." }, { status: 400 });
  }

  // Quiet honeypot: bots that fill this field receive a success-shaped response.
  if (clean(payload.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name, 100);
  const email = clean(payload.email, 254).toLowerCase();
  const phone = clean(payload.phone, 40);
  const service = clean(payload.service, 60);
  const business = clean(payload.business, 120);
  const description = clean(payload.description, 5000);
  const specificNeed = clean(payload.specificNeed, 1000);
  const budget = clean(payload.budget, 40);
  const timeline = clean(payload.timeline, 40);
  const startedAt = Number(payload.startedAt);

  if (Date.now() - startedAt < 2500) {
    return NextResponse.json({ error: "Please take a moment to review your enquiry before sending." }, { status: 400 });
  }
  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !allowedServices.has(service) || description.length < 20) {
    return NextResponse.json({ error: "Please provide your name, a valid email, a service direction and a little more detail (at least 20 characters)." }, { status: 400 });
  }
  if (budget && !allowedBudgets.has(budget)) {
    return NextResponse.json({ error: "Please choose a valid budget range." }, { status: 400 });
  }
  if (timeline && !allowedTimelines.has(timeline)) {
    return NextResponse.json({ error: "Please choose a valid timeline." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.ENQUIRY_TO_EMAIL || "hempongroup@gmail.com";
  const sender = process.env.RESEND_FROM_EMAIL || "Hempon Group <noreply@hempongroup.co.ke>";
  if (!apiKey) {
    console.error("Project enquiry email is not configured: RESEND_API_KEY is missing.");
    return NextResponse.json({ error: "Our enquiry form is temporarily unavailable. Please contact us by email or WhatsApp instead." }, { status: 503 });
  }

  const rows = [
    ["Name", name], ["Email", email], ["Phone / WhatsApp", phone || "Not provided"],
    ["Business", business || "Not provided"], ["Service", service],
    ["Specific requirement", specificNeed || "Not provided"], ["Budget", budget || "Not specified"],
    ["Timeline", timeline || "Not specified"], ["Project details", description],
  ];
  const html = `<h2>New project enquiry</h2><table cellpadding="8" cellspacing="0" border="0">${rows.map(([label, value]) => `<tr><th align="left" valign="top">${escapeHtml(label)}</th><td>${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`).join("")}</table>`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `Website enquiry: ${service} — ${name}`,
        html,
      }),
      signal: AbortSignal.timeout(12_000),
    });
    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend rejected project enquiry:", response.status, detail.slice(0, 500));
      return NextResponse.json({ error: "We couldn't send your enquiry just now. Please try again or contact us directly." }, { status: 502 });
    }

    try {
      const acknowledgement = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: sender,
          to: [email],
          reply_to: recipient,
          subject: "We received your enquiry — Hempon Group",
          html: `<p>Hello ${escapeHtml(name)},</p><p>Thank you for reaching out to Hempon Group. We have received your enquiry about <strong>${escapeHtml(service)}</strong> and will review the details before getting back to you.</p><p>If you need to add context in the meantime, reply to this email.</p><p>Regards,<br>Hempon Group</p>`,
        }),
        signal: AbortSignal.timeout(12_000),
      });
      if (!acknowledgement.ok) {
        const detail = await acknowledgement.text();
        console.error("Resend could not deliver project enquiry acknowledgement:", acknowledgement.status, detail.slice(0, 500));
      }
    } catch (acknowledgementError) {
      console.error("Project enquiry was delivered, but acknowledgement email failed:", acknowledgementError);
    }
  } catch (error) {
    console.error("Project enquiry delivery failed:", error);
    return NextResponse.json({ error: "We couldn't send your enquiry just now. Please try again or contact us directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, message: "Your enquiry has been sent. Hempon Group will be in touch." });
}
