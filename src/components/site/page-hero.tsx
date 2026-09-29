import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Reveal } from './reveal';

/** 内页统一头部：面包屑 + 大标题 + 简介 */
export function PageHero({
  title,
  subtitle,
  crumbLabel,
}: {
  title: string;
  subtitle?: string;
  crumbLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div className="glow-ring absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 sm:pt-14">
        <Reveal>
          <nav
            aria-label="面包屑"
            className="mb-5 flex items-center gap-1.5 text-sm text-foreground/50"
          >
            <Link href="/" className="transition-colors hover:text-foreground">
              首页
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-foreground/85">
              {crumbLabel ?? title}
            </span>
          </nav>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/60">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}