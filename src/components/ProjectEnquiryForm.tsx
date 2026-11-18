"use client";

import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import posthog from "posthog-js";

const serviceOptions = ["Websites", "Business Systems", "Mobile Apps", "Automation", "AI Experiences", "Digital Products", "Not sure yet"];
const budgetOptions = ["Not sure yet", "Under KSh 25,000", "KSh 25,000–50,000", "KSh 50,000–100,000", "KSh 100,000–250,000", "KSh 250,000+"];
const timelineOptions = ["Flexible", "As soon as practical", "Within 1 month", "1–3 months", "3+ months"];
const servicePrompts: Record<string, string> = {
  Websites: "What kind of website do you have in mind? (e.g. business website, online store, portfolio)",
  "Business Systems": "Which business process or operation should the system help manage?",
  "Mobile Apps": "Who will use the app, and what should they be able to do?",
  Automation: "Which repetitive task, handover or tools would you like to connect?",
  "AI Experiences": "What should the AI experience help customers or your team do?",
  "Digital Products": "What problem will the product solve, and who is it for?",
  "Not sure yet": "What are you hoping to improve or make easier?",
};

type EnquiryState = {
  name: string; email: string; phone: string; business: string; service: string;
  specificNeed: string; description: string; budget: string; timeline: string;
};
const initialState: EnquiryState = {
  name: "", email: "", phone: "", business: "", service: "Not sure yet",
  specificNeed: "", description: "", budget: "", timeline: "",
};

const fieldClass = "mt-2 w-full rounded-xl border border-white/[.12] bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/15";
const labelClass = "block text-xs font-medium text-white/65";

export default function ProjectEnquiryForm({ defaultService }: { defaultService?: string }) {
  const [form, setForm] = useState<EnquiryState>(() => ({ ...initialState, service: defaultService && serviceOptions.includes(defaultService) ? defaultService : initialState.service }));
  const [step, setStep] = useState(1);
  const [startedAt] = useState(() => Date.now());
  const [website, setWebsite] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const handleServiceSelection = (event: Event) => {
      const selected = (event as CustomEvent<string>).detail;
      if (typeof selected === "string" && serviceOptions.includes(selected)) {
        setForm((current) => ({ ...current, service: selected }));
      }
    };
    window.addEventListener("hempon:select-enquiry-service", handleServiceSelection);
    return () => window.removeEventListener("hempon:select-enquiry-service", handleServiceSelection);
  }, []);

  const progress = useMemo(() => `${Math.round((step / 3) * 100)}%`, [step]);
  const update = (key: keyof EnquiryState, value: string) => setForm((current) => ({ ...current, [key]: value }));

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    if (step < 3) {
      setStep((current) => current + 1);
      return;
    }
    if (form.description.trim().length < 20) {
      setError("Please add a little more detail (at least 20 characters) so we understand what you need.");
      return;
    }
    setSending(true);
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website, startedAt }),
      });
      const result = await response.json() as { ok?: boolean; message?: string; error?: string };
      if (!response.ok || !result.ok) throw new Error(result.error || "We couldn't send your enquiry. Please try again.");
      setSuccess(result.message || "Your enquiry has been sent. Hempon Group will be in touch.");
      if (posthog.__loaded) posthog.capture("project_enquiry_submitted", { service: form.service, budget_provided: Boolean(form.budget), timeline_provided: Boolean(form.timeline) });
      setForm({ ...initialState, service: defaultService && serviceOptions.includes(defaultService) ? defaultService : initialState.service });
      setStep(1);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="rounded-[24px] border border-white/10 bg-[#080c12] p-5 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="mono text-[9px] uppercase tracking-[.22em] text-[var(--accent)]">Project enquiry</div>
          <h3 className="display mt-2 text-2xl sm:text-3xl">Tell us what you have in mind.</h3>
        </div>
        <span className="mono shrink-0 text-[10px] text-white/35">0{step} / 03</span>
      </div>
      <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10" aria-label={`Step ${step} of 3`}>
        <div className="h-full rounded-full bg-[var(--accent)] transition-all duration-300" style={{ width: progress }} />
      </div>

      {success ? (
        <div className="mt-7 rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent)]/[.07] p-5" role="status" aria-live="polite">
          <div className="text-sm font-semibold text-white">Enquiry received</div>
          <p className="mt-2 text-sm leading-6 text-white/65">{success}</p>
          <button type="button" onClick={() => setSuccess("")} className="mt-5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/75 hover:border-white/35">Send another enquiry</button>
        </div>
      ) : (
        <form className="mt-6" onSubmit={submit}>
          {step === 1 && (
            <div className="grid gap-4 sm:grid-cols-2">
              <label className={labelClass}>Your name *<input className={fieldClass} autoComplete="name" required minLength={2} maxLength={100} value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Name" /></label>
              <label className={labelClass}>Email address *<input className={fieldClass} type="email" autoComplete="email" required maxLength={254} value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="you@company.com" /></label>
              <label className={labelClass}>Phone / WhatsApp<input className={fieldClass} type="tel" autoComplete="tel" maxLength={40} value={form.phone} onChange={(event) => update("phone", event.target.value)} placeholder="+254..." /></label>
              <label className={labelClass}>Business / organisation<input className={fieldClass} autoComplete="organization" maxLength={120} value={form.business} onChange={(event) => update("business", event.target.value)} placeholder="Optional" /></label>
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-4">
              <label className={labelClass}>What kind of help are you looking for? *
                <select className={fieldClass} required value={form.service} onChange={(event) => { update("service", event.target.value); update("specificNeed", ""); }}>
                  {serviceOptions.map((service) => <option key={service} value={service} className="bg-[#0b1017]">{service}</option>)}
                </select>
              </label>
              <label className={labelClass}>{servicePrompts[form.service]}
                <textarea className={`${fieldClass} min-h-24 resize-y`} rows={3} maxLength={1000} value={form.specificNeed} onChange={(event) => update("specificNeed", event.target.value)} placeholder="A few details will help us understand the direction..." />
              </label>
              <p className="text-xs leading-5 text-white/35">Not certain which service fits? Choose “Not sure yet”. We can work that out together.</p>
            </div>
          )}

          {step === 3 && (
            <div className="grid gap-4">
              <label className={labelClass}>Tell us a little about the project *
                <textarea className={`${fieldClass} min-h-36 resize-y`} rows={5} required minLength={20} maxLength={5000} value={form.description} onChange={(event) => update("description", event.target.value)} placeholder="What are you trying to achieve? What is difficult today? What would a good outcome look like?" />
                <span className="mt-1 block text-right text-[10px] text-white/30">{form.description.length}/5000</span>
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className={labelClass}>Indicative budget <span className="text-white/30">(optional)</span>
                  <select className={fieldClass} value={form.budget} onChange={(event) => update("budget", event.target.value)}><option value="" className="bg-[#0b1017]">Prefer not to say</option>{budgetOptions.map((option) => <option key={option} value={option} className="bg-[#0b1017]">{option}</option>)}</select>
                </label>
                <label className={labelClass}>When would you like to begin? <span className="text-white/30">(optional)</span>
                  <select className={fieldClass} value={form.timeline} onChange={(event) => update("timeline", event.target.value)}><option value="" className="bg-[#0b1017]">Not decided</option>{timelineOptions.map((option) => <option key={option} value={option} className="bg-[#0b1017]">{option}</option>)}</select>
                </label>
              </div>
              <label className="pointer-events-none absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">Leave this field empty<input tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} /></label>
              <p className="text-xs leading-5 text-white/35">Your details are used only to respond to this enquiry. Please do not include passwords, payment details or other sensitive credentials.</p>
            </div>
          )}

          {error && <p className="mt-4 rounded-xl border border-red-400/20 bg-red-400/[.06] px-4 py-3 text-sm text-red-200" role="alert">{error}</p>}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/[.08] pt-5">
            {step > 1 ? <button type="button" onClick={() => { setError(""); setStep((current) => current - 1); }} className="rounded-full border border-white/15 px-5 py-3 text-xs font-semibold text-white/65 transition hover:border-white/30 hover:text-white">← Back</button> : <span className="text-[10px] text-white/30">* Required fields</span>}
            <button type="submit" disabled={sending} className="rounded-full bg-[var(--accent)] px-6 py-3 text-xs font-bold text-[#10140d] transition hover:brightness-110 disabled:cursor-wait disabled:opacity-60">{sending ? "Sending enquiry…" : step === 3 ? "Send project enquiry ↗" : "Continue →"}</button>
          </div>
        </form>
      )}
    </div>
  );
}
