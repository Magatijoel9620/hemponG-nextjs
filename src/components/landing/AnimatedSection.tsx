'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const controls = useAnimation();
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      className={cn(className)}
      variants={{
        hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: shouldReduceMotion ? 0 : 0.7,
            delay,
            ease: [0.6, 0.05, 0.01, 0.9],
          },
        },
      }}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.section>
  );
}
