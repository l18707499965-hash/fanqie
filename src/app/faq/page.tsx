import type { Metadata } from 'next';
import { PageHero } from '@/components/site/page-hero';
import { Reveal } from '@/components/site/reveal';
import { DownloadButton } from '@/components/site/download-button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: '常见问题 FAQ',
  description:
    '番茄影视常见问题解答：如何下载安卓版、如何安装 APK、无法播放怎么办、缓存与历史怎么用等，一站式解答，帮助你顺畅观影。',
  alternates: { canonical: '/faq' },
};

const faqs: { q: string; a: string }[] = [
  {
    q: '番茄影视如何下载？',
    a: `点击官网任意"立即下载"或"安卓 APK 下载"按钮，即可下载安卓安装包。下载完成后打开文件按提示安装即可，无需注册登录。下载地址：${siteConfig.downloadUrl}`,
  },
  {
    q: '安装时提示"未知来源"无法安装怎么办？',
    a: '这是安卓系统的安全提示。请在弹出提示时选择"允许本次安装"，或前往"设置 → 安全/隐私 → 允许安装未知来源应用"，为当前应用开启允许后重新安装即可。我们郑重承诺安装包为官方正版、无任何捆绑。',
  },
  {
    q: '看电影卡顿或加载缓慢如何处理？',
    a: '建议先检查网络环境，切换到更稳定的 Wi-Fi 或网络；番茄影视会自动匹配最快线路，你也可以在播放页手动切换播放线路或降低清晰度（如从 1080P 切到 720P）以提升流畅度。',
  },
  {
    q: '支持哪些清晰度？',
    a: '支持 4K、1080P、720P、超清、标清等多种清晰度，根据片源与网络情况可自由切换，观影过程中也能随时调整。',
  },
  {
    q: '可以离线缓存看吗？',
    a: '可以。在影片播放页或详情页点击"下载/缓存"，选择清晰度与集数即可缓存，支持边下边看与后台续传，通勤无网也能顺利追更。',
  },
  {
    q: '需要注册或登录吗？',
    a: '不需要。番茄影视下载即用，观看记录与收藏默认保存在本地，完全无需注册登录，保护隐私又省心。',
  },
  {
    q: '观看记录和历史怎么管理？',
    a: '历史记录会自动保存你最近的观看进度，并支持续播。你可以在"我的/历史"中查看与清除记录，也可以对收藏的片源设置追剧提醒。',
  },
  {
    q: 'App 后续更新如何获取？',
    a: '请持续关注番茄影视官方网站"资讯动态"栏目，我们会第一时间发布版本更新说明。建议始终通过官方网站下载最新版，以保证最佳体验与安全性。',
  },
];

export default function FaqPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        title="常见问题"
        subtitle="关于下载、安装、播放与使用，这里整理了大家最关心的问题。没找到答案？也可以到帮助中心反馈。"
        crumbLabel="常见问题"
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-card px-5"
              >
                <AccordionTrigger className="py-4 text-left font-semibold text-foreground">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-foreground/65">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-brand-1/30 bg-brand-1/[0.06] px-6 py-8 text-center">
          <p className="font-semibold text-foreground">还有疑问？先下载体验</p>
          <p className="max-w-sm text-sm text-foreground/60">
            免费下载安卓版，亲自感受高清流畅的观影体验，多数问题在实践中都能迎刃而解。
          </p>
          <DownloadButton className="mt-1" />
        </Reveal>
      </section>
    </>
  );
}