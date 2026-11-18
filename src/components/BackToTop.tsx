"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > Math.max(560, window.innerHeight * 0.7));
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <motion.a
      href="#top"
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12, scale: visible ? 1 : 0.96 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="back-top fixed bottom-5 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-white/[.12] bg-[#0a0e14]/90 px-3.5 py-2.5 text-[10px] font-bold uppercase tracking-[.16em] text-white/75 shadow-2xl backdrop-blur-xl transition hover:border-[var(--accent)]/50 hover:text-[var(--accent)] sm:bottom-7 sm:right-7"
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <span>Top</span><span aria-hidden="true">↑</span>
    </motion.a>
  );
}
