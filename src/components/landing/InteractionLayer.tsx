'use client';

import { useEffect } from 'react';

/**
 * A lightweight interaction layer shared by the landing page.
 * No animated cursor object is rendered: the pointer only creates a very
 * subtle reflective light field and gentle magnetic response on CTAs.
 */
export function InteractionLayer() {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reducedMotion.matches) return;

    const root = document.documentElement;
    let frame = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let active = false;
    let scrollFrame = 0;

    const render = () => {
      frame = 0;
      root.style.setProperty('--pointer-x', `${x}px`);
      root.style.setProperty('--pointer-y', `${y}px`);

      root.style.setProperty('--page-scroll', `${window.scrollY}px`);

      const target = document.elementFromPoint(x, y)?.closest<HTMLElement>('[data-magnetic]');
      const surface = document.elementFromPoint(x, y)?.closest<HTMLElement>('[data-reflect]');
      document.querySelectorAll<HTMLElement>('[data-reflect]').forEach((el) => el.removeAttribute('data-reflect-active'));
      if (surface) {
        const rect = surface.getBoundingClientRect();
        surface.style.setProperty('--spot-x', `${x - rect.left}px`);
        surface.style.setProperty('--spot-y', `${y - rect.top}px`);
        surface.setAttribute('data-reflect-active', '');
      }
      document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
        if (el === target) {
          const rect = el.getBoundingClientRect();
          const dx = (x - (rect.left + rect.width / 2)) / Math.max(rect.width, 1);
          const dy = (y - (rect.top + rect.height / 2)) / Math.max(rect.height, 1);
          el.style.setProperty('--mag-x', `${dx * 7}px`);
          el.style.setProperty('--mag-y', `${dy * 7}px`);
          el.style.setProperty('--mag-scale', '1.015');
        } else {
          el.style.setProperty('--mag-x', '0px');
          el.style.setProperty('--mag-y', '0px');
          el.style.setProperty('--mag-scale', '1');
        }
      });
    };

    const scroll = () => {
      if (!scrollFrame) {
        scrollFrame = requestAnimationFrame(() => {
          scrollFrame = 0;
          root.style.setProperty('--page-scroll', `${window.scrollY}px`);
        });
      }
    };

    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      active = true;
      root.classList.add('pointer-reflection-active');
      if (!frame) frame = requestAnimationFrame(render);
    };

    const leave = () => {
      active = false;
      root.classList.remove('pointer-reflection-active');
      document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
        el.style.setProperty('--mag-x', '0px');
        el.style.setProperty('--mag-y', '0px');
        el.style.setProperty('--mag-scale', '1');
      });
    };

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('blur', leave);
    document.documentElement.addEventListener('mouseleave', leave);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('scroll', scroll);
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
      window.removeEventListener('blur', leave);
      document.documentElement.removeEventListener('mouseleave', leave);
      if (active) root.classList.remove('pointer-reflection-active');
    };
  }, []);

  return <div aria-hidden="true" className="pointer-reflection" />;
}
