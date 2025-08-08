'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export const Logo = ({ className }: { className?: string }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  // On the server or before the client has mounted, we can render a placeholder
  // to avoid hydration mismatch, or just the light version of the logo.
  // The dark version will swap in on the client-side once the theme is resolved.
  if (!mounted) {
    return (
      <Image
        src="/assets/logo/logo.svg"
        alt="HEMPON GROUP Logo"
        width={150}
        height={40}
        className={`h-auto ${className}`}
        priority
      />
    );
  }
  
  // Use the same logo for both themes for now, can be adjusted later.
  const logoSrc = resolvedTheme === 'dark' 
    ? "/assets/logo/logo.svg" // Replace with a dark mode logo if you have one
    : "/assets/logo/logo.svg";

  return (
    <Image
      src={logoSrc}
      alt="HEMPON GROUP Logo"
      width={150}
      height={40}
      className={`h-auto ${className}`}
      priority
    />
  );
};
