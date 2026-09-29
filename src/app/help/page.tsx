import type { Metadata } from 'next';
import {
  HelpCircle,
  LifeBuoy,
  Mail,
  MessageCircleQuestion,
  RefreshCcw,
  Settings,
} from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { Reveal } from '@/components/site/reveal';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: '帮助中心',
  description:
    '番茄影视帮助中心：下载安装指南、播放优化技巧、离线缓存与历史记录使用说明，以及联系方式，帮助你顺畅使用安卓影视 App。',
  alternates: { canonical: '/help' },
};

const helps: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string }[] = [
  {
    icon: MessageCircleQuestion,
    title: '下载与安装',
    desc: '点击官网下载按钮获取 APK 安装包；若提示"未知来源"，在手机设置中允许安装即可，全程免注册。',
  },
  {
    icon: Settings,
    title: '播放设置',
    desc: '按需调整清晰度、切换播放线路、开启记忆续播与倍速播放，让画面与网络更匹配。',
  },
  {
    icon: RefreshCcw,
    title: '缓存与更新',
    desc: '支持整集离线缓存、后台续传；关注官网资讯动态，及时升级最新版本获得更优体验。',
  },
  {
    icon: HelpCircle,
    title: '报错排查',
    desc: '遇到无法播放、网络异常时，优先切换线路或网络环境；仍无法解决请联系官方支持团队。',
  },
];

export default function HelpPage() {
  return (
    <>
      <PageHero
        title="帮助中心"
        subtitle="从下载安装到任意功能，帮助你快速上手番茄影视。若下方没有涵盖你的问题，欢迎通过邮件联系我们。"
        crumbLabel="帮助中心"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2">
          {helps.map((h, i) => (
            <Reveal key={h.title} delay={i * 80}>
              <article className="reveal-card h-full rounded-2xl border border-border bg-card p-7">
                <div className="brand-gradient flex h-12 w-12 items-center justify-center rounded-xl text-white">
                  <h.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-bold text-foreground">
                  {h.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  {h.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-border bg-card px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-4">
            <div className="brand-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white">
              <LifeBuoy className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">联系官方支持</h2>
              <p className="text-sm text-foreground/60">
                有关下载、安装或使用中的任何问题，欢迎来信，我们将尽快回复。
              </p>
            </div>
          </div>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-xl border border-brand-1/50 bg-brand-1/10 px-5 py-3 text-sm font-semibold text-brand-1 transition-colors hover:bg-brand-1/20"
          >
            <Mail className="h-4 w-4" />
            {siteConfig.email}
          </a>
        </Reveal>
      </section>
    </>
  );
}