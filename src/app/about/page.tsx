import type { Metadata } from 'next';
import { Award, Gem, HeartHandshake, Rocket } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { Reveal } from '@/components/site/reveal';
import { DownloadButton } from '@/components/site/download-button';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: '关于我们',
  description:
    '了解番茄影视：我们致力于打造高清流畅、免费好用的安卓影视聚合应用，用心打磨播放体验，让每个人都能轻松畅享海量影视内容。',
  alternates: { canonical: '/about' },
};

const values = [
  {
    icon: Gem,
    title: '专注体验',
    desc: '从极速缓冲到智能选路，把播放流畅度放在首位，为沉浸观影打磨每一个细节。',
  },
  {
    icon: HeartHandshake,
    title: '免费普惠',
    desc: '坚持免登录、免费看片，让更多人可以没有门槛地享受优质影视内容。',
  },
  {
    icon: Award,
    title: '内容聚合',
    desc: '持续扩充片库，覆盖电影、电视剧、综艺、动漫、纪录片，满足多样化需求。',
  },
  {
    icon: Rocket,
    title: '持续进化',
    desc: '保持高频迭代，及时引入新功能与新优化，让产品紧跟用户期待。',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`关于${siteConfig.name}`}
        subtitle="一部手机，装下整个片库。我们相信优质的影视内容应该触手可得、流畅可看。"
        crumbLabel="关于我们"
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="prose-brand text-[15px]">
            <p>
              {siteConfig.name} 是一款面向安卓用户的免费影视聚合应用，自{' '}
              {siteConfig.since} 年上线以来，一直致力于解决"找片难、播放卡、广告烦、要注册"
              等常见观影痛点。
            </p>
            <p>
              我们聚合电影、电视剧、综艺、动漫、纪录片五大板块的海量内容，通过智能多线路
              与极速缓冲技术，让用户不必纠结于画质与流畅度；通过离线缓存与观看历史，让追更
              不再受网络与时间限制。
            </p>
            <p>
              未来，我们将持续打磨播放引擎、扩充内容覆盖，并不断优化使用体验，努力成为大家
              手机里最顺手、最流畅的那款观影应用。感谢每一位用户的选择与陪伴。
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="reveal-card rounded-2xl border border-border bg-card p-6"
              >
                <div className="brand-gradient flex h-11 w-11 items-center justify-center rounded-xl text-white">
                  <v.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 font-bold text-foreground">{v.title}</h2>
                <p className="mt-1.5 text-sm text-foreground/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-14 flex flex-col items-center gap-3 rounded-2xl border border-brand-1/30 bg-brand-1/[0.06] px-6 py-10 text-center">
          <h2 className="text-2xl font-extrabold text-foreground">
            加入我们一起观影
          </h2>
          <p className="max-w-md text-foreground/60">
            现在下载番茄影视，免费、高清、无广告，立即开启沉浸观影。
          </p>
          <DownloadButton size="lg" className="mt-2" />
        </Reveal>
      </section>
    </>
  );
}