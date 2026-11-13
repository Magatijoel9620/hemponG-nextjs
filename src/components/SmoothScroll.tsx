"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) return;

    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.085,
      anchors: {
        offset: -104,
      },
    });

    let animationFrame = 0;
    let isVisible = !document.hidden;

    const raf = (time: number) => {
      if (!isVisible) return;
      lenis.raf(time);
      animationFrame = window.requestAnimationFrame(raf);
    };

    const start = () => {
      if (animationFrame || !isVisible) return;
      animationFrame = window.requestAnimationFrame(raf);
    };

    const stop = () => {
      if (!animationFrame) return;
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    };

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) start();
      else stop();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    start();

    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      lenis.destroy();
    };
  }, []);

  return null;
}
