import type { Metadata } from 'next';
import {
  CheckCircle2,
  CloudDownload,
  Play,
  RotateCcw,
  ShieldCheck,
  Smartphone,
  Tv,
} from 'lucide-react';
import { Reveal } from '@/components/site/reveal';
import { DownloadButton } from '@/components/site/download-button';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: '下载安卓版 - 免费高清影视 App',
  description:
    '下载番茄影视安卓版 APK：高清流畅、海量片库、清爽无广告，支持离线缓存与智能多线路播放，无需注册登录，下载即看。',
  alternates: { canonical: '/download' },
};

const facts = [
  { icon: Smartphone, label: '安卓版本', value: siteConfig.androidVersion },
  { icon: RotateCcw, label: '安装包大小', value: siteConfig.androidSize },
  { icon: ShieldCheck, label: '支持系统', value: siteConfig.androidApi },
  { icon: CheckCircle2, label: '安全无忧', value: '官方正版 · 无捆绑' },
];

export default function DownloadPage() {
  const appJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteConfig.name,
    operatingSystem: 'Android',
    applicationCategory: 'EntertainmentApplication',
    description: siteConfig.description,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
    fileSize: '42MB',
    softwareVersion: siteConfig.androidVersion,
    datePublished: '2021-01-01',
    publisher: { '@type': 'Organization', name: siteConfig.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="glow-ring absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-1/40 bg-brand-1/10 px-3.5 py-1 text-xs font-medium text-brand-1">
              <Smartphone className="h-3.5 w-3.5" />
              安卓官方下载
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              下载安卓版{' '}
              <span className="brand-text">番茄影视</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground/65">
              高清流畅、海量片库、清爽无广告。直接下载下方 APK
              安装包，无需注册登录，装完即可开始畅快观影。
            </p>

            <div className="mt-8">
              <DownloadButton size="lg" />
              <p className="mt-3 text-sm text-foreground/50">
                若手机提示"未知来源"，请到设置中允许安装本应用后再试。
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-xl border border-border bg-card p-4"
                >
                  <f.icon className="h-5 w-5 text-brand-1" />
                  <dt className="mt-2 text-xs text-foreground/45">{f.label}</dt>
                  <dd className="mt-0.5 text-sm font-semibold text-foreground">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="absolute left-1/2 top-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.25),transparent_70%)] blur-2xl" />
            <div className="rounded-3xl border border-border bg-card p-8">
              <img
                src="/logo.png"
                alt="番茄影视 App 图标"
                width={96}
                height={96}
                className="mx-auto h-24 w-24 rounded-2xl"
              />
              <h2 className="mt-5 text-center text-2xl font-extrabold text-foreground">
                番茄影视
              </h2>
              <p className="mt-1 text-center text-sm text-foreground/55">
                高清流畅 · 免费看片 · 清爽无广告
              </p>
              <div className="mt-6 space-y-3">
                {['海量电影 / 电视剧 / 综艺 / 动漫', '智能多线路极速播放', '支持离线缓存离线看'].map(
                  (t) => (
                    <p
                      key={t}
                      className="flex items-center gap-2 text-sm text-foreground/70"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-1" />
                      {t}
                    </p>
                  ),
                )}
              </div>
              <div className="mt-7">
                <DownloadButton label="立即下载 APK" size="lg" className="w-full" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 下载步骤 */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
            三步开始观影
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: CloudDownload,
              step: '第一步',
              title: '下载安装包',
              desc: '点击上方或页面任意下载按钮，下载安卓 APK 安装文件。',
            },
            {
              icon: Play,
              step: '第二步',
              title: '允许并安装',
              desc: '打开文件按提示安装，出现"未知来源"提示时选择允许即可。',
            },
            {
              icon: Tv,
              step: '第三步',
              title: '开启观影',
              desc: '安装后打开 App，搜索片名或浏览分类，即刻开始高清观影。',
            },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <article className="reveal-card h-full rounded-2xl border border-border bg-card p-7 text-center">
                <div className="brand-gradient mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-white">
                  <s.icon className="h-7 w-7" />
                </div>
                <p className="mt-5 text-xs font-semibold tracking-widest text-brand-1">
                  {s.step}
                </p>
                <h3 className="mt-1 text-lg font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  {s.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}