import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Clapperboard,
  CloudDownload,
  Film,
  MonitorPlay,
  PlayCircle,
  ShieldOff,
  Sparkles,
  Tv,
  WifiOff,
} from 'lucide-react';
import { DownloadButton } from '@/components/site/download-button';
import { Reveal } from '@/components/site/reveal';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: '番茄影视 - 高清流畅免费影视聚合，海量电影电视剧综艺动漫下载',
  description:
    '番茄影视是一款高清流畅的安卓免费影视聚合应用，覆盖电影、电视剧、综艺、动漫等海量片库，支持清晰度切换、在线缓存离线看片、智能历史记录。立即下载安卓版 App，免费畅享沉浸观影。',
  alternates: { canonical: '/' },
};

const stats = [
  { value: '100W+', label: '高清片源储备' },
  { value: '4K', label: '超清流畅播放' },
  { value: '0', label: '强制广告打扰' },
  { value: '7×24', label: '智能稳定加速' },
];

const features = [
  {
    icon: Clapperboard,
    title: '海量片库',
    desc: '电影、电视剧、综艺、动漫、纪录片五大板块聚合，热门院线、经典老片、全网热门影视一站找齐。',
  },
  {
    icon: MonitorPlay,
    title: '高清流畅',
    desc: '智能选源自动匹配最快线路，支持 4K/1080P/720P 多清晰度切换，缓冲快、不卡顿，观影如丝般顺滑。',
  },
  {
    icon: ShieldOff,
    title: '清爽无扰',
    desc: '贴心极简的播放体验，拒绝强制弹窗与无趣广告，把完整的屏幕留给剧情本身。',
  },
  {
    icon: WifiOff,
    title: '离线缓存',
    desc: '喜欢的好剧一键离线缓存，通勤路上、无网络环境也能安心追更，想怎么看就怎么看。',
  },
];

const steps = [
  {
    icon: CloudDownload,
    title: '下载 APK',
    desc: '点击页面"下载"按钮，下载安卓版番茄影视安装包（APK 文件）。',
  },
  {
    icon: PlayCircle,
    title: '允许安装',
    desc: '打开文件，若系统提示"未知来源"，在设置中允许安装即可，全程无需注册登录。',
  },
  {
    icon: Tv,
    title: '开始观影',
    desc: '安装完成后打开 App，搜索片名或按分类浏览，即刻开启高清沉浸观影。',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        <div className="glow-ring absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2 lg:pt-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-1/40 bg-brand-1/10 px-3.5 py-1 text-xs font-medium text-brand-1">
              <Sparkles className="h-3.5 w-3.5" />
              安卓免费影视 App · 全新升级
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              高清流畅
              <span className="brand-text">免费看片</span>
              <br />
              海量影视 一站畅享
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground/65 sm:text-lg">
              {siteConfig.name} 聚合电影、电视剧、综艺、动漫海量片库，
              智能多线路极速播放、多清晰度随心切换、支持离线缓存。
              无需注册登录，下载即看，把沉浸观影装进口袋。
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <DownloadButton size="lg" />
              <DownloadButton label="了解更多" variant="ghost" size="lg" />
            </div>

            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <dt className="text-foreground/45">最新版本</dt>
                <dd className="font-semibold text-foreground">
                  {siteConfig.androidVersion}
                </dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="text-foreground/45">安装包</dt>
                <dd className="font-semibold text-foreground">
                  {siteConfig.androidSize}
                </dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="text-foreground/45">系统</dt>
                <dd className="font-semibold text-foreground">
                  {siteConfig.androidApi}
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="absolute left-1/2 top-1/2 -z-10 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,95,99,0.28),transparent_70%)] blur-2xl" />
            <img
              src="/app-mockup.jpg"
              alt="番茄影视 App 高清观影界面展示"
              width={640}
              height={760}
              fetchPriority="high"
              className="mx-auto w-full max-w-md rounded-3xl border border-border/60 shadow-2xl shadow-black/60 lg:max-w-lg"
            />
          </Reveal>
        </div>
      </section>

      {/* ===== 数据带 ===== */}
      <section className="border-y border-border/50 bg-white/[0.015]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <p className="brand-text text-3xl font-extrabold tracking-tight sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1.5 text-sm text-foreground/55">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== 核心特色 ===== */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="brand-text text-sm font-semibold">CORE FEATURES</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            一部手机，装下整个片库
          </h2>
          <p className="mt-4 text-foreground/60">
            从功能到体验，番茄影视致力于让每个人都能轻松、流畅、免费地看到想看的影视内容。
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <article className="reveal-card h-full rounded-2xl border border-border bg-card p-6">
                <div className="brand-gradient inline-flex h-12 w-12 items-center justify-center rounded-xl text-white">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  {f.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-1 hover:underline"
          >
            查看全部特色功能
          </Link>
        </Reveal>
      </section>

      {/* ===== 片库横幅 ===== */}
      <section className="relative overflow-hidden border-y border-border/50">
        <img
          src="/cinema-banner.jpg"
          alt="番茄影视海量片库 影视聚合"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0a0e]/80" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
          <Reveal>
            <Film className="mx-auto h-10 w-10 text-brand-1" />
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              院线大片 · 口碑好剧 · 高分动漫
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-foreground/70">
              无论你想看最新院线、经典老片还是全网热播好剧，番茄影视都能快速找到。
              智能搜片 + 分类浏览，让选择不再困难。
            </p>
            <div className="mt-8 flex justify-center">
              <DownloadButton size="lg" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}