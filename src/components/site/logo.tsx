'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/site';

/** 顶部品牌 Logo */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5"
      aria-label={`${siteConfig.name} 首页`}
    >
      <img
        src="/logo.png"
        alt={`${siteConfig.name} 官方 Logo`}
        width={36}
        height={36}
        className="h-9 w-9 rounded-lg object-contain"
      />
      <span
        className={`font-sans text-lg font-bold tracking-tight ${
          light ? 'text-white' : ''
        }`}
      >
        番茄<b className="brand-text">影视</b>
      </span>
    </Link>
  );
}