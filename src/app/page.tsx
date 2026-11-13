"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import posthog from "posthog-js";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import ProjectEnquiryForm from "@/components/ProjectEnquiryForm";

const services = [
  [
    "01",
    "Websites",
    "High-performance websites that make complex businesses feel simple.",
    "Next.js / React",
  ],
  [
    "02",
    "Business Systems",
    "Dashboards, portals and internal tools built around the way your team actually works.",
    "Flutter / Supabase",
  ],
  [
    "03",
    "Mobile Apps",
    "Focused mobile experiences for customers, teams and field operations.",
    "Flutter / API",
  ],
  [
    "04",
    "Automation",
    "Remove repetitive work with connected workflows, reporting and intelligent processes.",
    "Automation / AI",
  ],
  [
    "05",
    "AI Experiences",
    "Useful AI integrated where it creates leverage — not added just for the headline.",
    "AI / Data",
  ],
  [
    "06",
    "Digital Products",
    "From first interaction to production system, we turn ideas into usable products.",
    "Design / Engineering",
  ],
];

const projects = [
  {
    name: "Farmora",
    type: "Operations platform",
    image: "/assets/famora_landscape.jpg",
    href: "https://downloads.hempongroup.co.ke/farmora/",
    number: "01",
  },
  {
    name: "InvoiceEasy",
    type: "Business software",
    image: "/assets/ie_landscape.jpg",
    href: "https://downloads.hempongroup.co.ke/invoice-easy/",
    number: "02",
  },
  {
    name: "Landlord Ledger",
    type: "Property platform",
    image: "/assets/LL_landscape.jpg",
    href: "https://downloads.hempongroup.co.ke/landlord-ledger/",
    number: "03",
  },
  {
    name: "DevPilot",
    type: "AI-powered development assistant",
    image: "/assets/devpilot_landscape.png",
    href: "https://downloads.hempongroup.co.ke/devpilot/",
    number: "04",
  },
  {
    name: "FinAI",
    type: "Financial intelligence platform",
    image: "/assets/finai_landscape.png",
    href: "https://downloads.hempongroup.co.ke/finai/",
    number: "05",
  },
  {
    name: "Website Creation",
    type: "Business websites & digital presence",
    image: "/assets/digital_exp.png",
    href: "https://downloads.hempongroup.co.ke/website-creation/",
    number: "06",
  },
  {
    name: "Digital Experiences",
    type: "Web & product design",
    image: "/assets/digital_exp.png",
    href: "https://portfolio.hempongroup.co.ke/projects",
    number: "07",
  },
];
const process = [
  ["01", "Discover", "Understand the business, users and the real problem."],
  ["02", "Shape", "Turn the problem into a focused product direction."],
  ["03", "Build", "Design, engineer and test the experience together."],
  ["04", "Launch", "Ship cleanly, measure what matters and hand over clearly."],
  [
    "05",
    "Evolve",
    "Keep improving as the business, users and opportunities change.",
  ],
];

const plans = [
  {
    name: "Starter Website",
    price: "From KSh 15,000",
    desc: "A sharp, credible online presence for a small business or professional.",
    tags: ["1–5 pages", "Responsive", "Contact setup"],
    whatsappMessage:
      "Hi Hempon Group! I'm interested in the Starter Website plan, starting from KSh 15,000. I'd like to discuss what I need for my business.",
  },
  {
    name: "Business Website",
    price: "From KSh 30,000",
    desc: "A conversion-focused website with stronger structure, content and integrations.",
    tags: ["Multi-page", "SEO foundation", "Integrations"],
    whatsappMessage:
      "Hi Hempon Group! I'm interested in the Business Website plan, starting from KSh 30,000. I'd like to talk about a conversion-focused website for my business.",
  },
  {
    name: "Online Store",
    price: "From KSh 45,000",
    desc: "A practical e-commerce experience built around your catalogue and customers.",
    tags: ["Products", "Checkout", "Orders"],
    whatsappMessage:
      "Hi Hempon Group! I'm interested in the Online Store plan, starting from KSh 45,000. I'd like to discuss setting up an online store for my products.",
  },
  {
    name: "Custom Solution",
    price: "Let's scope it",
    desc: "Business software, mobile apps and systems where the product needs to be engineered around you.",
    tags: ["Custom UX", "Database", "Automation"],
    whatsappMessage:
      "Hi Hempon Group! I'm interested in the Custom Solution plan. I have a project in mind and would like to discuss the requirements and scope.",
  },
];


const socials = [
  ["Instagram", "https://www.instagram.com/hempongroup/"],
  ["LinkedIn", "https://www.linkedin.com/in/joel-magati"],
  ["X", "https://x.com/hempon_group"],
  ["TikTok", "https://www.tiktok.com/@hempon.digital.so"],
  ["Facebook", "https://www.facebook.com/share/1CYpdPrizj/"],
];


function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mono flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.28em] text-white/40">
      <span className="h-px w-8 bg-[var(--accent)]" />
      {children}
    </div>
  );
}

function SocialIcon({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[17px] w-[17px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (label === "LinkedIn") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[17px] w-[17px]"
        fill="currentColor"
      >
        <path d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9.4h3.8v11.3H3.3zM9.4 9.4H13v1.5h.1a4 4 0 0 1 3.6-1.9c3.8 0 4.5 2.5 4.5 5.7v6h-3.8v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.4H9.4z" />
      </svg>
    );
  }
  if (label === "X") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[16px] w-[16px]"
        fill="currentColor"
      >
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.8 22H2.7l7.3-8.4L2.2 2h6.5l4.4 6.9L18.9 2Zm-1.1 17.8h1.7L7.7 4.1H5.9l11.9 15.7Z" />
      </svg>
    );
  }
  if (label === "Facebook") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[17px] w-[17px]"
        fill="currentColor"
      >
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.6 1.6-1.6h1.7V3.6c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v1.9H7v3.1h2.8v8h3.7Z" />
      </svg>
    );
  }
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[17px] w-[17px]"
      fill="currentColor"
    >
      <path d="M19.6 8.1a6.1 6.1 0 0 1-4.2-2V15a5.2 5.2 0 1 1-5.2-5.2c.4 0 .8 0 1.1.1v3a2.3 2.3 0 1 0 1.1 2V2h3.1a5.1 5.1 0 0 0 4.1 4.9v1.2Z" />
    </svg>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["work", "capabilities", "process", "about", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-24% 0px -58% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const links = [
    ["Work", "#work"],
    ["Capabilities", "#capabilities"],
    ["Process", "#process"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
      <div className="nav-shell mx-auto max-w-[1440px] rounded-[24px] border border-white/[.1] bg-[#080b10]/82 px-3 py-2 shadow-2xl shadow-black/25 backdrop-blur-2xl sm:rounded-full sm:px-4">
        <div className="flex items-center justify-between gap-3">
          <a
            href="#top"
            className="group flex min-w-0 items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full border border-white/[.12] bg-white/[.035] p-0 transition duration-500 group-hover:rotate-6 group-hover:border-white/30">
              <Image
                src="/assets/logo/logo_round.png"
                alt="HempOn Group logo"
                width={36}
                height={36}
                className="h-full w-full object-cover"
              />
            </span>
            <span className="hidden truncate text-xs font-bold tracking-[.18em] sm:inline">
              HEMPON GROUP
            </span>
          </a>
          <nav className="hidden items-center gap-0.5 lg:flex">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                aria-current={activeSection === href.slice(1) ? "location" : undefined}
                className={`nav-link rounded-full px-3.5 py-2 text-[11px] font-medium transition hover:bg-white/[.055] hover:text-white ${activeSection === href.slice(1) ? "bg-white/[.07] text-[var(--accent)]" : "text-white/52"}`}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div
              className="hidden items-center gap-1 sm:flex"
              role="group"
              aria-label="Social media"
            >
              {socials.map(([label, url]) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid h-9 w-9 place-items-center rounded-full text-white/55 transition hover:bg-white/[.07] hover:text-[var(--accent)]"
                >
                  <SocialIcon label={label} />
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="quiet-cta hidden rounded-full border border-white/[.14] bg-white/[.92] px-4 py-2.5 text-[11px] font-bold text-[#000000] transition hover:bg-white sm:inline-flex"
            >
              Start a project <span className="ml-1.5">↗</span>
            </a>
            <button
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/[.1] bg-white/[.035] lg:hidden"
            >
              <span className="relative h-3.5 w-4">
                <span
                  className={`absolute left-0 top-0 h-px w-full bg-white transition ${open ? "translate-y-[6px] rotate-45" : ""}`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-px w-full bg-white transition ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`absolute left-0 top-3 h-px w-full bg-white transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          className="overflow-hidden lg:hidden"
        >
          <nav className="grid gap-1 border-t border-white/[.08] pt-3 mt-3 pb-1">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={activeSection === href.slice(1) ? "location" : undefined}
                className={`rounded-2xl px-4 py-3 text-sm transition hover:bg-white/[.05] hover:text-white ${activeSection === href.slice(1) ? "bg-white/[.06] text-[var(--accent)]" : "text-white/65"}`}
              >
                {label}
                <span className="float-right text-white/25">↗</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-2xl bg-[var(--accent)] px-4 py-3 text-sm font-bold text-[#080b10]"
            >
              Start a project <span className="float-right">↗</span>
            </a>
          </nav>
        </motion.div>
      </div>
    </header>
  );
}

function HeroBrand() {
  return (
    <div className="hero-brand relative mx-auto h-[430px] w-full max-w-[600px] sm:h-[500px] lg:h-[620px]">
      <div className="hero-ring hero-ring-a" />
      <div className="hero-ring hero-ring-b" />
      <div className="hero-card hero-card-a">
        <Image
          src="/assets/famora_landscape.jpg"
          alt="Farmora product interface"
          fill
          sizes="220px"
          loading="eager"
          className="object-cover"
        />
      </div>
      <div className="hero-card hero-card-b">
        <Image
          src="/assets/LL_landscape.jpg"
          alt="Landlord Ledger property management product interface"
          fill
          sizes="180px"
          loading="eager"
          className="object-cover"
        />
      </div>
      <div className="hero-card hero-card-c">
        <Image
          src="/assets/digital_exp.png"
          alt="Digital experiences project"
          fill
          sizes="190px"
          className="object-cover"
        />
      </div>
      <div className="hero-card hero-card-d">
        <Image
          src="/assets/ie_landscape.jpg"
          alt="InvoiceEasy invoicing product interface"
          fill
          sizes="150px"
          className="object-cover"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="hero-monogram hero-monogram--invoice absolute right-[13%] top-[16%] z-10"
      >
        <div className="hero-monogram-inner">
          <span>HG</span>
          <small>
            HEMPON
            <br />
            GROUP
          </small>
        </div>
      </motion.div>
      <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/[.1] bg-[#090d13]/80 px-4 py-2 backdrop-blur-xl">
        <span className="mono text-[9px] uppercase tracking-[.24em] text-white/45">
          Innovation • Technology • Growth
        </span>
      </div>
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.9, 0]);
  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden border-b border-white/[.07] pt-28 sm:pt-32 lg:pt-36"
      id="home"
    >
      <div className="absolute inset-0 grid-bg" />
      <div className="hero-light hero-light-a" />
      <div className="hero-light hero-light-b" />
      <div className="section-shell relative flex min-h-[calc(100svh-7rem)] items-center pb-10 lg:pb-14">
        <div className="grid w-full items-center gap-4 lg:grid-cols-[1.3fr_.7fr]">
          <motion.div
            style={{ y, opacity }}
            className="relative z-10 min-w-0 max-w-none pt-6 lg:pt-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="mono flex items-center gap-3 text-[9px] uppercase tracking-[.28em] text-white/38 sm:text-[10px]"
            >
              <span
                aria-hidden="true"
                className="status-ripple h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
              />{" "}
              DIGITAL PRODUCTS • SYSTEMS • AUTOMATION
            </motion.div>
            <h1 className="display mt-6 w-max max-w-none pr-[.16em] text-[clamp(3.4rem,7vw,6.5rem)] leading-[.82] xl:text-[clamp(4.2rem,7.3vw,7.2rem)]">
              <span className="block overflow-hidden pb-[.08em]">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  WE BUILD
                </motion.span>
              </span>
              <span className="flex w-max max-w-none whitespace-nowrap overflow-hidden pb-[.08em] pr-[.16em]">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.85, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-white/25"
                >
                  WHAT
                </motion.span>
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.85, delay: 0.43, ease: [0.22, 1, 0.36, 1] }}
                  className="ml-[.18em] block text-gradient"
                >
                  MATTERS.
                </motion.span>
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="mt-8 max-w-xl text-[15px] leading-7 text-white/46 sm:text-base md:text-lg"
            >
              Websites, mobile applications, business software and automation —
              engineered around the way your business actually works.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.56 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <MagneticButton href="#work">Explore the work</MagneticButton>
              <a
                href="#contact"
                className="quiet-outline rounded-full border border-white/[.13] px-5 py-3 text-sm font-medium text-white/62 transition hover:border-white/30 hover:bg-white/[.035] hover:text-white"
              >
                Tell us the problem ↗
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            style={{ opacity }}
            className="relative order-last -mt-4 lg:order-last lg:mt-0"
          >
            <HeroBrand />
          </motion.div>
        </div>
      </div>
      <div className="section-shell relative flex items-center justify-between border-t border-white/[.07] py-4">
        <span className="mono text-[9px] uppercase tracking-[.25em] text-white/25">
          Journey Along...
        </span>
        {/* <span className="mono text-[9px] uppercase tracking-[.25em] text-white/25">
          01 — 07
        </span> */}
      </div>
    </section>
  );
}

function Services() {
  const [activeService, setActiveService] = useState("Websites");
  const [businessNeed, setBusinessNeed] = useState("presence");

  const serviceDetails: Record<string, { fit: string; outcomes: string[]; deliverables: string[] }> = {
    Websites: {
      fit: "Your business needs a clearer, more credible online presence or a better way for customers to discover and contact you.",
      outcomes: ["Explain your offer clearly", "Build trust before the first conversation", "Turn visits into enquiries or orders"],
      deliverables: ["Business and corporate websites", "E-commerce and catalogue experiences", "Portfolio and campaign websites", "Responsive layouts, contact paths and SEO foundations"],
    },
    "Business Systems": {
      fit: "Your team is coordinating work across spreadsheets, messages or disconnected tools and needs one practical place to manage operations.",
      outcomes: ["Make day-to-day work easier to track", "Give teams a clearer operational view", "Reduce manual coordination and duplicate entry"],
      deliverables: ["Dashboards and admin portals", "Workflow-specific business applications", "Data management and reporting interfaces", "Role-aware operational workflows where required"],
    },
    "Mobile Apps": {
      fit: "Customers or field teams need a focused mobile experience, including workflows that may need to work reliably on the move.",
      outcomes: ["Put key workflows in users’ hands", "Support field and customer interactions", "Connect mobile experiences to business data"],
      deliverables: ["Android and iOS applications", "Customer and staff-facing experiences", "API and backend integrations", "Offline-aware workflows where the use case requires them"],
    },
    Automation: {
      fit: "Repeated admin, handovers, notifications or reporting are taking time that could be spent running the business.",
      outcomes: ["Reduce repetitive manual steps", "Connect existing tools and processes", "Make routine information easier to act on"],
      deliverables: ["Workflow automation", "System integrations and notifications", "Reporting and data handovers", "Process review and implementation"],
    },
    "AI Experiences": {
      fit: "There is a specific customer or team task where AI could make information easier to find, understand or act on.",
      outcomes: ["Help users navigate information", "Support faster first-line responses", "Add useful intelligence to an existing workflow"],
      deliverables: ["Website assistant experiences", "Knowledge-guided question and answer flows", "AI features connected to relevant business context", "Human handoff paths for requests needing support"],
    },
    "Digital Products": {
      fit: "You have a product idea or an existing digital service that needs to be shaped, built or improved as a complete experience.",
      outcomes: ["Turn an idea into a usable product", "Bring customer and operational journeys together", "Create a foundation that can evolve"],
      deliverables: ["Product discovery and experience design", "Web and mobile product development", "Application architecture and integrations", "Iteration, refinement and ongoing improvements"],
    },
  };

  const needRecommendations: Record<string, string> = {
    presence: "Websites",
    operations: "Business Systems",
    mobile: "Mobile Apps",
    repetitive: "Automation",
    answers: "AI Experiences",
    idea: "Digital Products",
  };
  const needOptions = [
    ["presence", "I need customers to find and understand my business"],
    ["operations", "I want to organise how my business or team works"],
    ["mobile", "I need a mobile experience for customers or staff"],
    ["repetitive", "I want to reduce repetitive manual work"],
    ["answers", "I want to make information or support easier to access"],
    ["idea", "I have a digital product idea to develop"],
  ];
  const recommendedService = needRecommendations[businessNeed];
  const selectedDetails = serviceDetails[activeService];

  const trackService = (title: string, interaction: string) => {
    if (!posthog.__loaded) return;
    posthog.capture("service_inquiry_started", { service: title, interaction });
    posthog.logger.info("service inquiry started", { interaction, service: title });
  };

  return (
    <section
      id="capabilities"
      className="relative border-y border-white/[.07] py-24 sm:py-28 md:py-36"
    >
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="display mt-6 max-w-lg text-5xl leading-[.94] sm:text-6xl md:text-7xl">
              Build the <span className="text-white/25">thing</span> your
              business is missing.
            </h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/48 md:text-base">
              Websites are only one layer. We build the digital systems around
              the business too — from customer-facing experiences to the tools
              that make the operation run.
            </p>
            <div className="mt-10 mono text-[10px] uppercase tracking-[.24em] text-white/25">
              Design × Engineering × Operations
            </div>
          </div>
          <div>
            <div className="grid gap-px overflow-hidden rounded-[28px] border border-white/[.08] bg-white/[.08] sm:grid-cols-2">
              {services.map(([num, title, desc, tech], i) => {
                const isActive = activeService === title;
                return (
                  <motion.button
                    type="button"
                    key={num}
                    aria-pressed={isActive}
                    onClick={() => {
                      setActiveService(title);
                      trackService(title, "service_explorer");
                    }}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.6, delay: i * 0.07 }}
                    whileHover={{ y: -3 }}
                    className={`group relative min-h-[210px] text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[var(--accent)] ${isActive ? "bg-[#131b23]" : "bg-[#0b0f15] hover:bg-[#10161e]"} p-6 sm:p-8`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="mono text-[10px] text-white/22">{num}</span>
                      <span className="mono text-[9px] uppercase tracking-[.18em] text-[var(--accent)] opacity-75">
                        {tech}
                      </span>
                    </div>
                    <div className="mt-12">
                      <h3 className="display text-2xl tracking-[-.045em]">{title}</h3>
                      <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">{desc}</p>
                    </div>
                    <span className="absolute bottom-7 right-7 text-white/35 transition-all group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                      {isActive ? "Selected ✓" : "Explore ↗"}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 rounded-[28px] border border-[var(--accent)]/20 bg-[#0c1218] p-6 sm:p-8"
              aria-live="polite"
            >
              <div className="mono text-[9px] uppercase tracking-[.22em] text-[var(--accent)]">Explore the service</div>
              <div className="mt-3 grid gap-7 lg:grid-cols-[.9fr_1.1fr]">
                <div>
                  <h3 className="display text-3xl tracking-[-.04em]">{activeService}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/52">{selectedDetails.fit}</p>
                  <a
                    href="#contact"
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent("hempon:select-enquiry-service", { detail: activeService }));
                      trackService(activeService, "service_detail_cta");
                    }}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-xs font-bold text-[#10140d] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  >
                    Discuss this direction <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="mono text-[9px] uppercase tracking-[.18em] text-white/35">What it helps with</h4>
                    <ul className="mt-3 space-y-2">
                      {selectedDetails.outcomes.map((item) => <li key={item} className="flex gap-2 text-sm leading-6 text-white/65"><span className="text-[var(--accent)]">—</span>{item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mono text-[9px] uppercase tracking-[.18em] text-white/35">Possible deliverables</h4>
                    <ul className="mt-3 space-y-2">
                      {selectedDetails.deliverables.map((item) => <li key={item} className="flex gap-2 text-sm leading-6 text-white/65"><span className="text-[var(--accent)]">—</span>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-12 rounded-[28px] border border-white/[.09] bg-white/[.025] p-6 sm:p-8">
              <SectionLabel>Find a starting point</SectionLabel>
              <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_.8fr]">
                <div>
                  <h3 className="display max-w-xl text-3xl leading-tight sm:text-4xl">What are you trying to improve?</h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/42">Choose the closest match. We’ll suggest a useful place to start — the right solution can be refined together.</p>
                  <div className="mt-6 grid gap-2">
                    {needOptions.map(([value, label]) => (
                      <button
                        type="button"
                        key={value}
                        aria-pressed={businessNeed === value}
                        onClick={() => setBusinessNeed(value)}
                        className={`flex items-center justify-between gap-4 rounded-2xl border px-4 py-3 text-left text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${businessNeed === value ? "border-[var(--accent)]/55 bg-[var(--accent)]/[.08] text-white" : "border-white/[.08] bg-black/10 text-white/55 hover:border-white/20 hover:text-white/85"}`}
                      >
                        <span>{label}</span><span className={businessNeed === value ? "text-[var(--accent)]" : "text-white/25"}>{businessNeed === value ? "●" : "○"}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-between rounded-[22px] border border-white/[.08] bg-[#090d12] p-5 sm:p-6">
                  <div>
                    <div className="mono text-[9px] uppercase tracking-[.2em] text-[var(--accent)]">A place to begin</div>
                    <h4 className="display mt-4 text-3xl">{recommendedService}</h4>
                    <p className="mt-3 text-sm leading-6 text-white/45">{serviceDetails[recommendedService].fit}</p>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveService(recommendedService);
                        trackService(recommendedService, "service_finder_recommendation");
                        document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="rounded-full border border-white/15 px-4 py-2.5 text-xs font-semibold text-white/75 transition hover:border-white/35 hover:text-white"
                    >
                      Explore recommendation
                    </button>
                    <a
                      href="#contact"
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent("hempon:select-enquiry-service", { detail: recommendedService }));
                        trackService(recommendedService, "service_finder_contact");
                      }}
                      className="rounded-full bg-[var(--accent)] px-4 py-2.5 text-xs font-bold text-[#10140d] transition hover:brightness-110"
                    >
                      Talk to Hempon ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-28 md:py-40">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="display mt-6 max-w-4xl text-5xl leading-[.92] sm:text-6xl md:text-8xl">
              Real products.
              <br />
              <span className="text-white/25">Real problems.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-white/42">
            A selection of platforms and experiences engineered for real
            operational use.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              href={p.href}
              key={p.name}
              onClick={() => {
                if (!posthog.__loaded) return;

                posthog.capture("portfolio_viewed", {
                  project: p.name,
                  destination: p.href,
                });

                posthog.logger.info("portfolio case study opened", {
                  interaction: "portfolio_card",
                  project: p.name,
                  destination: p.href,
                });
              }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-[28px] border border-white/[.08] bg-[#0b0f15]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading={p.image === "/assets/LL_landscape.jpg" ? "eager" : "lazy"}
                  className="object-cover transition duration-1000 group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090d] via-transparent to-black/5" />
                <div className="absolute left-5 top-5 mono text-[10px] text-white/55">
                  {p.number} / {String(projects.length).padStart(2, "0")}
                </div>
                <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[10px] text-white/60 backdrop-blur">
                  View case ↗
                </div>
              </div>
              <div className="flex items-end justify-between gap-6 p-6 sm:p-7">
                <div>
                  <p className="mono text-[9px] uppercase tracking-[.22em] text-[var(--accent)]">
                    {p.type}
                  </p>
                  <h3 className="display mt-2 text-3xl sm:text-4xl">
                    {p.name}
                  </h3>
                </div>
                <span className="hidden text-sm text-white/25 md:block">
                  Digital product
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section
      id="process"
      className="overflow-hidden border-y border-white/[.07] py-20 sm:py-28 md:py-36"
    >
      <div className="section-shell">
        <div className="max-w-3xl">
          <SectionLabel>Process</SectionLabel>
          <h2 className="display mt-6 text-[clamp(2.25rem,11vw,3rem)] leading-[.94] sm:text-6xl md:text-7xl">
            Less ceremony.
            <br />
            <span className="text-gradient">More momentum.</span>
          </h2>
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/42 md:text-base">
            A lean process that keeps decisions close to the actual problem and
            the finished product close to the people using it.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 2xl:mt-16 2xl:grid-cols-5">
          {process.map(([n, t, d], i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08 }}
              className="flex h-full flex-col rounded-[26px] border border-white/[.08] bg-white/[.025] p-5 sm:p-7"
            >
              <span className="mono text-[10px] text-[var(--accent)]">{n}</span>
              <h3 className="display mt-8 text-2xl sm:mt-10 2xl:mt-14">{t}</h3>
              <p className="mt-3 text-sm leading-6 text-white/40">{d}</p>
              <div className="mt-8 h-px w-full bg-white/[.08]">
                <div className="pulse-line h-px w-1/2 origin-left bg-[var(--accent)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28 md:py-40">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <SectionLabel>About Hempon</SectionLabel>
            <h2 className="display mt-6 text-5xl leading-[.92] sm:text-6xl md:text-7xl">
              Technology should{" "}
              <span className="text-white/25">fit the business.</span>
            </h2>
          </div>
          <div>
            <p className="max-w-3xl text-xl leading-[1.35] text-white/72 sm:text-2xl md:text-3xl">
              We help businesses and organizations turn ideas into modern
              websites, applications automation tools, and digital systems that
              solve real operational problems.
            </p>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/40 md:text-base">
              We combine thoughtful design, reliable technology, and practical
              business understanding to create solutions that are not only
              visually impressive, but useful, manageable, and ready to grow
              with you.
            </p>
            <div className="mt-9 flex flex-wrap gap-2">
              {[
                "Business first",
                "Built to evolve",
                "Clear communication",
                "Modern technology",
              ].map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-white/[.09] px-3.5 py-2 text-[11px] text-white/48"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Hempon Group took our website from an idea to something that finally feels professional, clear and true to who we are. They listened to what we needed and turned it into a site our clients can actually use.",
    name: "Eva",
    organization: "Kanyi J. & Company Advocates",
    website: "https://kanyij-advocates.co.ke/",
    project: "Website design & development",
  },
  {
    quote:
      "What stood out was how practical the whole solution was. The spreadsheet, scripts and Google Forms work together in a way that makes our day-to-day work much easier. It feels built for the way we actually operate.",
    name: "Michael",
    organization: "CRSML",
    project: "App script, spreadsheet & Google Forms",
  },
  {
    quote:
      "Hempon Group understood the direction we wanted and translated the case study into a clean, convincing design. The mockup made the idea much easier to present and communicate.",
    name: "Rajesh",
    organization: "Clarity Solution",
    project: "Case study design mockup",
  },
  {
    quote:
      "The card design came out polished and professional, while still feeling like our own brand. The process was straightforward and the result was exactly the kind of finish we were looking for.",
    name: "Margaret",
    organization: "Everhealthy Multidynamic Int'l Ltd",
    project: "Card design",
  },
  {
    quote:
      "We wanted an RSVP card that felt warm, clear and appropriate for our Mothers Union event. Hempon Group gave us a design that was easy to share and looked genuinely well put together.",
    name: "Dorothy",
    organization: "ACK St Philip Likoni Mothers Union",
    project: "RSVP card design",
  },
  {
    quote:
      "From the logo and letterhead to setting up the office tools, Hempon Group helped us get the pieces working together. It was a practical service that made our day-to-day presentation much more professional.",
    name: "Jully",
    organization: "Adoyo J. & Co. Advocates",
    project: "Logo, letterhead & office tools setup",
  },
  {
    quote:
      "The company profile gave us a much better way to present what Eco Fume does. The design was clear, professional and made the information easier for people to understand at a glance.",
    name: "Eco_Fumes_Ke",
    organization: "Eco Fume",
    project: "Company profile design",
  },
  {
    quote:
      "We needed a simple identity that our youth group could confidently use across our documents. Hempon Group gave us a logo and letterhead that made everything feel more organised and official.",
    name: "SYG",
    organization: "Shakers Youth Group",
    project: "Logo & letterhead design",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-y border-white/[.07] py-24 sm:py-28 md:py-36"
    >
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionLabel>Client words</SectionLabel>
            <h2 className="display mt-6 text-5xl leading-[.94] sm:text-6xl md:text-7xl">
              Built with people.
              <br />
              <span className="text-white/25">Not just for them.</span>
            </h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/42 md:text-base">
              A few words from people and organisations we have had the chance
              to build with — across websites, design and practical digital
              systems.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {testimonials.map((testimonial, i) => (
              <motion.article
                key={`${testimonial.organization}-${testimonial.name}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.65, delay: i * 0.045 }}
                whileHover={{ y: -3 }}
                className="group flex min-h-[300px] flex-col rounded-[26px] border border-white/[.08] bg-white/[.025] p-6 transition-colors hover:border-white/[.16] hover:bg-white/[.04] sm:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="mono text-[10px] text-[var(--accent)]">
                    0{i + 1}
                  </span>
                  <span className="text-2xl leading-none text-white/15 transition group-hover:text-white/25">
                    “
                  </span>
                </div>
                <blockquote className="mt-7 text-[15px] leading-7 text-white/62">
                  “{testimonial.quote}”
                </blockquote>
                <div className="mt-auto pt-8">
                  <div className="h-px w-full bg-white/[.08]" />
                  <div className="mt-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-white/78">
                        {testimonial.name}
                      </p>
                      {testimonial.website ? (
                        <a
                          href={testimonial.website}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-1 inline-block text-xs leading-5 text-white/38 transition hover:text-white/75"
                        >
                          {testimonial.organization} ↗
                        </a>
                      ) : (
                        <p className="mt-1 text-xs leading-5 text-white/38">
                          {testimonial.organization}
                        </p>
                      )}
                    </div>
                    <span className="max-w-[130px] text-right text-[9px] uppercase leading-4 tracking-[.16em] text-white/25">
                      {testimonial.project}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section
      id="pricing"
      className="border-y border-white/[.07] bg-[#090c11] py-24 sm:py-28 md:py-36"
    >
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionLabel>Starting points</SectionLabel>
            <h2 className="display mt-6 text-5xl leading-[.94] sm:text-6xl md:text-7xl">
              Choose a <span className="text-white/25">direction.</span>
            </h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/42 md:text-base">
              Clear starting points for common projects. Custom software and
              larger systems are scoped around the actual problem.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex text-sm font-semibold text-white/72 underline decoration-white/20 underline-offset-8 transition hover:text-white"
            >
              Let's scope something different ↗
            </a>
          </div>
          <div className="grid gap-3">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                whileHover={{ x: 5 }}
                className="group grid gap-6 rounded-[26px] border border-white/[.08] bg-white/[.025] p-6 transition hover:border-white/20 sm:grid-cols-[1fr_auto] sm:items-center sm:p-7"
              >
                <div>
                  <div className="mono text-[9px] uppercase tracking-[.2em] text-[var(--accent)]">
                    0{i + 1}
                  </div>
                  <h3 className="display mt-3 text-2xl sm:text-3xl">
                    {p.name}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-white/40">
                    {p.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[.08] px-2.5 py-1 text-[9px] text-white/35"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 sm:min-w-44 sm:flex-col sm:items-end sm:text-right">
                  <div className="text-sm font-semibold text-white/72">
                    {p.price}
                  </div>
                  <a
                    href={`https://wa.me/254738219953?text=${encodeURIComponent(p.whatsappMessage)}`}
                    onClick={() => {
                      if (!posthog.__loaded) return;

                      posthog.capture("pricing_plan_inquiry_started", {
                        plan: p.name,
                      });
                      posthog.logger.info("pricing plan inquiry started", {
                        interaction: "pricing_whatsapp_cta",
                        plan: p.name,
                      });
                    }}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#20bd5a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-4"
                    >
                      <path
                        d="M20 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-4.4A8.4 8.4 0 1 1 20 11.5Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                      <path
                        d="M8.5 8.5c.2-.4.4-.4.7-.4h.4c.2 0 .3.1.4.4l.6 1.4c.1.2 0 .4-.1.6l-.5.6c-.1.1-.2.3 0 .5.5.8 1.1 1.4 2 1.8.2.1.4.1.5-.1l.6-.7c.2-.2.4-.2.6-.1l1.3.6c.2.1.3.2.3.4 0 .3-.2 1-.7 1.3-.5.4-1 .5-1.6.3-.6-.2-1.4-.5-2.4-1.4-1.2-1-2-2.2-2.2-2.8-.3-.7-.1-1.5.1-1.9Z"
                        fill="currentColor"
                      />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28 md:py-40">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="section-shell relative">
        <div className="rounded-[32px] border border-white/[.09] bg-[#0a0e14]/82 p-5 sm:p-8 md:p-12 lg:p-14">
          <div className="max-w-4xl">
            <SectionLabel>Start a conversation</SectionLabel>
            <h2 className="display mt-6 max-w-4xl text-5xl leading-[.9] sm:text-6xl md:text-8xl">
              Have a problem<br /><span className="text-gradient">worth building?</span>
            </h2>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/42 md:text-base">
              Share what you are trying to improve. A few details will help us understand the challenge and prepare for a useful first conversation. Final scope, pricing and timelines are agreed after discovery.
            </p>
          </div>
          <div className="mt-10 grid gap-5 xl:grid-cols-[1.35fr_.65fr] xl:items-start">
            <ProjectEnquiryForm />
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              <a href="mailto:hempongroup@gmail.com?subject=Project%20enquiry"
                onClick={() => { if (posthog.__loaded) posthog.capture("contact_email_opened", { location: "contact_section" }); }}
                className="contact-link group block rounded-[22px] border border-white/10 bg-white/[.035] p-5 transition hover:border-white/25 hover:bg-white/[.055]">
                <div className="mono text-[10px] uppercase tracking-[.2em] text-white/32">Prefer email?</div>
                <div className="mt-3 break-all text-base font-semibold sm:text-lg">hempongroup@gmail.com</div>
                <div className="mt-5 flex items-center justify-between text-sm text-white/35"><span>Open email draft</span><span className="text-xl transition group-hover:translate-x-1 group-hover:text-white">↗</span></div>
              </a>
              <a href="https://wa.me/254738219953?text=Hello%20Hempon%20Group%2C%20I%27d%20like%20to%20discuss%20a%20project."
                onClick={() => { if (posthog.__loaded) posthog.capture("contact_whatsapp_opened", { location: "contact_section" }); }}
                target="_blank" rel="noreferrer"
                className="contact-link group block rounded-[22px] border border-[#25D366] bg-[#25D366] p-5 font-bold text-black transition hover:border-[#20bd5a] hover:bg-[#20bd5a]">
                <div className="mono text-[10px] uppercase tracking-[.2em] text-black">WhatsApp</div>
                <div className="mt-3 text-base font-bold sm:text-lg">+254 738 219 953</div>
                <div className="mt-5 flex items-center justify-between text-sm text-black"><span>Message Hempon Group</span><span className="text-xl transition group-hover:translate-x-1">↗</span></div>
              </a>
              <p className="px-1 text-xs leading-5 text-white/30 sm:col-span-2 xl:col-span-1">No commitment at this stage. We will review your enquiry and follow up using the contact details you provide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[.08] pt-16 sm:pt-20">
      <div className="section-shell">
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.2fr_.65fr_.65fr_.75fr_.75fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-3">
              <Image
                src="/assets/logo.svg"
                alt="Hempon Group"
                width={170}
                height={56}
                className="h-auto w-[145px] invert sm:w-[170px]"
              />
            </a>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/38">
              Digital engineering for businesses that want their technology to
              do more.
            </p>
            <a
              href="mailto:hempongroup@gmail.com"
              className="mt-5 inline-block text-sm font-semibold text-white/65 transition hover:text-white"
            >
              hempongroup@gmail.com
            </a>
          </div>
          <div>
            <div className="mono text-[9px] uppercase tracking-[.24em] text-white/25">
              Explore
            </div>
            <div className="mt-5 grid gap-3 text-sm text-white/45">
              <a href="#work" className="hover:text-white">
                Work
              </a>
              <a href="#capabilities" className="hover:text-white">
                Capabilities
              </a>
              <a href="#process" className="hover:text-white">
                Process
              </a>
              <a href="#about" className="hover:text-white">
                About
              </a>
              <a href="#pricing" className="hover:text-white">
                Pricing
              </a>
            </div>
          </div>
          <div>
            <div className="mono text-[9px] uppercase tracking-[.24em] text-white/25">
              Connect
            </div>
            <div className="mt-5 grid gap-3 text-sm text-white/45">
              {socials.map(([label, url]) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  {label} ↗
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="mono text-[9px] uppercase tracking-[.24em] text-white/25">
              Quick links
            </div>
           
<div className="mt-5 grid gap-3 text-sm text-white/45">
  <a
    href="https://portfolio.hempongroup.co.ke/"
    target="_blank"
    rel="noreferrer"
    className="hover:text-white"
  >
    Portfolio ↗
  </a>

  <a
    href="https://ledger.hempongroup.co.ke/"
    target="_blank"
    rel="noreferrer"
    className="hover:text-white"
  >
    Landlord Ledger ↗
  </a>

  <a
    href="https://farmora.hempongroup.co.ke/"
    target="_blank"
    rel="noreferrer"
    className="hover:text-white"
  >
    Farmora ↗
  </a>

  <a
    href="https://downloads.hempongroup.co.ke/invoice-easy/"
    target="_blank"
    rel="noreferrer"
    className="hover:text-white"
  >
    InvoiceEasy ↗
  </a>

  <a
    href="https://downloads.hempongroup.co.ke/devpilot/"
    target="_blank"
    rel="noreferrer"
    className="hover:text-white"
  >
    DevPilot ↗
  </a>

  <a
    href="https://downloads.hempongroup.co.ke/finai/"
    target="_blank"
    rel="noreferrer"
    className="hover:text-white"
  >
    FinAI ↗
  </a>

  <a
    href="https://downloads.hempongroup.co.ke/website-creation/"
    target="_blank"
    rel="noreferrer"
    className="hover:text-white"
  >
    Website Creation ↗
  </a>

  <a
    href="https://downloads.hempongroup.co.ke/"
    target="_blank"
    rel="noreferrer"
    className="hover:text-white"
  >
    Downloads ↗
  </a>

</div>

          </div>
          <div>
            <div className="mono text-[9px] uppercase tracking-[.24em] text-white/25">
              Based in
            </div>
            <p className="mt-5 text-sm leading-6 text-white/45">
              Mombasa, Kenya
              <br />
              Working beyond borders.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex rounded-full border border-white/[.12] px-4 py-2 text-xs font-semibold text-white/70 transition hover:border-white/25 hover:text-white"
            >
              Start a project ↗
            </a>
          </div>
        </div>
        <div className="border-t border-white/[.08] py-5">
          <div className="flex flex-col justify-between gap-3 text-[9px] uppercase tracking-[.18em] text-white/25 sm:flex-row">
            <span>
              © {new Date().getFullYear()} Hempon Group. All rights reserved.
            </span>
            <div className="flex gap-5">
              <a href="/privacy-policy" className="hover:text-white/60">
                Privacy
              </a>
              <a href="/terms" className="hover:text-white/60">
                Terms
              </a>
              <span>Digital Engineering · Kenya</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  return (
    <motion.a
      href="#top"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="back-top fixed bottom-5 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-white/[.12] bg-[#0a0e14]/85 px-3.5 py-2.5 text-[10px] font-bold uppercase tracking-[.16em] text-white/55 shadow-2xl backdrop-blur-xl transition hover:border-white/25 hover:text-white sm:bottom-7 sm:right-7"
    >
      <span>Top</span>
      <span>↑</span>
    </motion.a>
  );
}

function MobileWhatsAppButton() {
  return (
    <a
      href="https://wa.me/254738219953?text=Hello%20Hempon%20Group%2C%20I%27d%20like%20to%20discuss%20a%20project."
      onClick={() => {
        if (!posthog.__loaded) return;

        posthog.capture("contact_whatsapp_opened", {
          location: "mobile_cta",
        });
      }}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Hempon Group on WhatsApp"
      className="fixed bottom-4 left-3.5 z-40 inline-flex max-w-[calc(100vw-110px)] items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-[#20bd5a] sm:hidden"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="size-5 shrink-0"
      >
        <path
          d="M20 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-4.4A8.4 8.4 0 1 1 20 11.5Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="M8.5 8.5c.2-.4.4-.4.7-.4h.4c.2 0 .3.1.4.4l.6 1.4c.1.2 0 .4-.1.6l-.5.6c-.1.1-.2.3 0 .5.5.8 1.1 1.4 2 1.8.2.1.4.1.5-.1l.6-.7c.2-.2.4-.2.6-.1l1.3.6c.2.1.3.2.3.4 0 .3-.2 1-.7 1.3-.5.4-1 .5-1.6.3-.6-.2-1.4-.5-2.4-1.4-1.2-1-2-2.2-2.2-2.8-.3-.7-.1-1.5.1-1.9Z"
          fill="currentColor"
        />
      </svg>
      <span className="truncate">Chat on WhatsApp</span>
    </a>
  );
}

export default function Home() {
  const workRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: workRef,
    offset: ["start end", "end start"],
  });
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]),
    { stiffness: 80, damping: 20 },
  );
  const { scrollYProgress: pageProgress } = useScroll();
  return (
    <div id="top" className="noise relative min-h-screen bg-[var(--bg)]">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-[var(--accent)]"
        style={{ scaleX: pageProgress }}
      />
      <Nav />
      <Hero />
      <Reveal>
        <Services />
      </Reveal>
      <div ref={workRef} style={{ transform: "translateZ(0)" }}>
        <motion.div style={{ scale }}>
          <Work />
        </motion.div>
      </div>
      <Reveal>
        <Process />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Pricing />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
      <MobileWhatsAppButton />
      <BackToTop />
    </div>
  );
}
