import Link from 'next/link';
import { Mail } from 'lucide-react';
import { Logo } from './logo';
import { footerGroups, siteConfig } from '@/lib/site';

/** 全站页脚 */
export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-[#08080c]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/55">
              {siteConfig.name} —— 高清流畅、免费看片的安卓影视聚合应用。
              海量电影、电视剧、综艺、动漫，一站畅享沉浸观影。
            </p>
            <a
              href={siteConfig.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-gradient mt-5 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white"
            >
              立即下载安卓版
            </a>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-foreground/55 transition-colors hover:text-brand-1"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/50 pt-6 text-sm text-foreground/45 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} 官方网站 · 保留所有权利
          </p>
          <p className="inline-flex items-center gap-1.5">
            <Mail className="h-4 w-4" />
            {siteConfig.email}
          </p>
        </div>
      </div>
    </footer>
  );
}