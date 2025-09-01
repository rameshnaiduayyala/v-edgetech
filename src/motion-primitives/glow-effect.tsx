'use client';
import React from 'react';
import { cn } from '@/lib/utils';

export type GlowEffectProps = {
  className?: string;
  style?: React.CSSProperties;
  colors?: string[];
  blur?: 'softest' | 'soft' | 'medium' | 'strong' | 'stronger' | 'strongest' | 'none';
  scale?: number;
};

export function GlowEffect({
  className,
  style,
  colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F'],
  blur = 'medium',
  scale = 1.2,
}: GlowEffectProps) {
  const gradient = `conic-gradient(from 0deg at 50% 50%, ${colors.join(', ')})`;

  const getBlurClass = (blur: GlowEffectProps['blur']) => {
    const map = {
      softest: 'blur-[2px]',
      soft: 'blur-sm',
      medium: 'blur-md',
      strong: 'blur-lg',
      stronger: 'blur-xl',
      strongest: 'blur-2xl',
      none: 'blur-none',
    };
    return map[blur ?? 'medium'];
  };

  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none animate-spin-slow rounded-full',
        getBlurClass(blur),
        className
      )}
      style={{
        ...style,
        background: gradient,
        transform: `scale(${scale})`,
        opacity: 0.8,
        willChange: 'transform',
      }}
    />
  );
}
