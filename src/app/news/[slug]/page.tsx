import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';
import { posts } from '@/lib/news';
import { siteConfig } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: '文章未找到' };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: 'article' },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    publisher: { '@type': 'Organization', name: siteConfig.name },
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Link
        href="/news"
        className="inline-flex items-center gap-1.5 text-sm text-foreground/55 transition-colors hover:text-brand-1"
      >
        <ArrowLeft className="h-4 w-4" />
        返回资讯动态
      </Link>

      <header className="mt-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-brand-1/40 bg-brand-1/10 px-3 py-1 text-xs font-medium text-brand-1">
            {post.tag}
          </span>
          <time className="inline-flex items-center gap-1 text-sm text-foreground/45">
            <Clock className="h-4 w-4" />
            {post.date}
          </time>
        </div>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
          {post.title}
        </h1>
      </header>

      <div className="prose-brand mt-8 text-[15px]">
        {post.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <footer className="mt-12 rounded-2xl border border-brand-1/30 bg-brand-1/[0.06] p-6 text-center">
        <p className="font-semibold text-foreground">还没体验番茄影视？</p>
        <p className="mt-1 text-sm text-foreground/60">
          免费下载安卓版，高清流畅看片，一部手机装下整个片库。
        </p>
        <a
          href={siteConfig.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="brand-gradient mt-4 inline-flex rounded-xl px-5 py-2.5 text-sm font-semibold text-white"
        >
          立即下载
        </a>
      </footer>
    </article>
  );
}