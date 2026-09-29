'use client';

import { Download } from 'lucide-react';
import { siteConfig } from '@/lib/site';

/**
 * 统一安卓下载按钮（渐变底，全站复用）。
 * variant: 'primary'（大号）| 'ghost'（描边）
 */
export function DownloadButton({
  label = '安卓 APK 下载',
  variant = 'primary',
  size = 'md',
  className = '',
}: {
  label?: string;
  variant?: 'primary' | 'ghost';
  size?: 'md' | 'lg';
  className?: string;
}) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold';
  const sizes = {
    md: 'rounded-xl px-5 py-3 text-sm',
    lg: 'rounded-2xl px-7 py-4 text-base sm:px-8',
  };
  const variants = {
    primary: 'brand-gradient brand-glow text-white',
    ghost:
      'border border-border bg-white/5 text-foreground backdrop-blur hover:border-brand-1/50 hover:bg-white/10',
  };
  return (
    <a
      href={siteConfig.downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} transition-all hover:-translate-y-0.5 ${className}`}
    >
      <Download className={size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'} />
      {label}
    </a>
  );
}