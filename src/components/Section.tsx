import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <div className={`section mx-auto mt-10 xl:px-60 ${className}`}>
      {children}
    </div>
  );
}
