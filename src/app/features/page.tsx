import type { Metadata } from 'next';
import {
  Clapperboard,
  Gauge,
  Globe2,
  History,
  MonitorPlay,
  ShieldOff,
  Subtitles,
  Zap,
} from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { DownloadButton } from '@/components/site/download-button';
import { Reveal } from '@/components/site/reveal';

export const metadata: Metadata = {
  title: '特色功能 - 高清流畅免费看片',
  description:
    '番茄影视特色功能一览：海量片库、高清流畅多线路播放、智能搜片、离线缓存、历史记录、字幕切换、清爽无广告。来发现这款安卓免费影视 App 的完整能力。',
  alternates: { canonical: '/features' },
};

const groups: {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  items: { title: string; desc: string }[];
}[] = [
  {
    title: '播放体验',
    desc: '从清晰度到流畅度，为观影体验打磨每一个细节。',
    icon: MonitorPlay,
    items: [
      {
        title: '智能多线路',
        desc: '同一影片自动匹配最快线路，卡顿自动切换，播放不中断，体验更顺滑。',
      },
      {
        title: '多清晰度切换',
        desc: '支持 4K、1080P、720P、超清、标清等清晰度自由切换，根据网络实时调整。',
      },
      {
        title: '极速缓冲',
        desc: '本地 + 云端双加速策略，首屏秒开，拖动进度条即刻续播。',
      },
      {
        title: '倍速与播放控制',
        desc: '提供 0.5x–2.0x 倍速播放、定时关闭、记忆续播等贴心控制。',
      },
    ],
  },
  {
    title: '片库与搜索',
    desc: '海量内容，找片从不费劲。',
    icon: Clapperboard,
    items: [
      {
        title: '五大板块聚合',
        desc: '电影、电视剧、综艺、动漫、纪录片五大板块，分类清晰、更新及时。',
      },
      {
        title: '智能搜片',
        desc: '支持片名、演员、拼音、关键词多维度搜索，输入即搜，结果精准。',
      },
      {
        title: '热门榜单',
        desc: '实时热门、口碑推荐、飙升榜等多种榜单，帮你快速发现好片。',
      },
      {
        title: '收藏与追剧',
        desc: '一键收藏喜欢的内容，追剧列表自动提醒更新，刷剧不遗漏。',
      },
    ],
  },
  {
    title: '个性化与便捷',
    desc: '让 App 更懂你，让追更更简单。',
    icon: Zap,
    items: [
      {
        title: '观看历史',
        desc: '跨设备同步观看记录，回到上次播放位置，无缝续看。',
      },
      {
        title: '离线缓存',
        desc: '支持边下边看、整集缓存，通勤无网也能畅快追更。',
      },
      {
        title: '字幕与语言',
        desc: '原生字幕与弹幕设置，多语言音轨随心选择。',
      },
      {
        title: '清爽无广告',
        desc: '拒绝强制弹窗与无效广告，把完整画面留给剧情。',
      },
    ],
  },
];

const highlights = [
  { icon: Gauge, title: '极速加载', desc: '秒开首屏，播放不卡顿' },
  { icon: ShieldOff, title: '清爽无扰', desc: '无强制广告弹窗' },
  { icon: Globe2, title: '全网聚合', desc: '一站汇聚海量片源' },
  { icon: History, title: '历史同步', desc: '记录进度，无缝续播' },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        title="特色功能"
        subtitle="从极速播放到智能搜片，番茄影视围绕「看得流畅、找得方便、追得省心」逐一打磨，让免费观影也能拥有旗舰级体验。"
        crumbLabel="特色功能"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="reveal-card flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
            >
              <div className="brand-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white">
                <h.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-foreground">{h.title}</p>
                <p className="text-sm text-foreground/55">{h.desc}</p>
              </div>
            </div>
          ))}
        </Reveal>

        {groups.map((group, gi) => (
          <section key={group.title} className="mt-20">
            <Reveal>
              <div className="flex items-center gap-3">
                <div className="brand-gradient flex h-11 w-11 items-center justify-center rounded-xl text-white">
                  <group.icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
                    {group.title}
                  </h2>
                  <p className="mt-0.5 text-sm text-foreground/55">{group.desc}</p>
                </div>
              </div>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {group.items.map((it, i) => (
                <Reveal key={it.title} delay={i * 70}>
                  <article className="reveal-card h-full rounded-2xl border border-border bg-card p-6">
                    <h3 className="flex items-center gap-2 font-bold text-foreground">
                      <span className="brand-text">◆</span>
                      {it.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                      {it.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        ))}

        <Reveal className="mt-20 flex flex-col items-center gap-3 rounded-2xl border border-brand-1/30 bg-brand-1/[0.06] px-6 py-10 text-center">
          <Subtitles className="h-9 w-9 text-brand-1" />
          <h2 className="text-2xl font-extrabold text-foreground">
            现在就体验完整的番茄影视
          </h2>
          <p className="max-w-md text-foreground/60">
            免费下载安卓版，海量片库、高清流畅、清爽无广告，一部手机装下整个片库。
          </p>
          <div className="mt-3">
            <DownloadButton size="lg" />
          </div>
        </Reveal>
      </section>
    </>
  );
}