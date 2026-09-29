import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Newspaper } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { Reveal } from '@/components/site/reveal';
import { posts } from '@/lib/news';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: '资讯动态与版本更新',
  description:
    '番茄影视官方资讯动态：版本更新公告、使用指南、观影技巧与影视资讯，第一时间了解 App 新功能与优化。',
  alternates: { canonical: '/news' },
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="资讯动态"
        subtitle="版本更新、使用指南与影视资讯，第一时间了解番茄影视的一切。"
        crumbLabel="资讯动态"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <article className="reveal-card flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <div className="flex items-center gap-3 text-sm">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                      p.tag === '版本更新'
                        ? 'border border-brand-1/40 bg-brand-1/10 text-brand-1'
                        : 'border border-border bg-white/5 text-foreground/60'
                    }`}
                  >
                    <Newspaper className="h-3 w-3" />
                    {p.tag}
                  </span>
                  <time className="text-foreground/45">{p.date}</time>
                </div>
                <h2 className="mt-4 text-xl font-bold leading-snug text-foreground">
                  <Link
                    href={`/news/${p.slug}`}
                    className="transition-colors hover:text-brand-1"
                  >
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/60">
                  {p.excerpt}
                </p>
                <Link
                  href={`/news/${p.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-1 hover:gap-2.5 transition-all"
                >
                  阅读全文 <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center text-sm text-foreground/50">
          · 更多更新与资讯将陆续发布，欢迎关注 {siteConfig.name} 官方网站 ·
        </Reveal>
      </section>
    </>
  );
}