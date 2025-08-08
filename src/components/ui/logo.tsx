import React from 'react';
import Image from 'next/image';

export const Logo = ({ className }: { className?: string }) => (
  <Image
    src="/assets/logo/logo.svg"
    alt="HEMPON GROUP Logo"
    width={150}
    height={40}
    className={`h-auto ${className}`}
    priority
  />
);
