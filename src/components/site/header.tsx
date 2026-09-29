'use client';

import Link from 'next/link';
import { memo, useEffect, useRef, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { Logo } from './logo';
import { navItems, siteConfig } from '@/lib/site';

/** 吸顶导航栏 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled || open
          ? 'border-border/70 bg-[#0a0a0e]/90 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        {/* 桌面导航 */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="主导航">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <HeaderDownloadCta />
        </div>

        {/* 移动端开关 */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-white/5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? '关闭菜单' : '打开菜单'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* 移动端菜单 */}
      {open && (
        <nav
          className="border-t border-border/60 bg-[#0a0a0e]/95 px-4 pb-5 pt-3 backdrop-blur-xl lg:hidden"
          aria-label="移动导航"
        >
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-white/5 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a
            href={siteConfig.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-gradient mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white"
          >
            <Download className="h-4 w-4" />
            下载安卓版 App
          </a>
        </nav>
      )}
    </header>
  );
}

const HeaderDownloadCta = memo(function HeaderDownloadCta() {
  return (
    <a
      href={siteConfig.downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="brand-gradient inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:translate-y-[-1px]"
    >
      <Download className="h-4 w-4" />
      立即下载
    </a>
  );
});