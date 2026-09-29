import type { Metadata } from 'next';
import { PageHero } from '@/components/site/page-hero';
import { Reveal } from '@/components/site/reveal';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: '隐私政策',
  description:
    '番茄影视隐私政策：我们如何收集、使用与保护你的个人信息，以及你在隐私方面享有的权利。',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="隐私政策" subtitle="我们重视并保护每一位用户的隐私与数据安全。" crumbLabel="隐私政策" />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Reveal>
          <div className="prose-brand text-[15px]">
            <p>最近更新日期：2026 年 1 月 1 日</p>
            <p>
              欢迎使用 {siteConfig.name}（以下简称"本应用"）。我们深知个人信息对你的重要性，
              并承诺在提供便捷观影服务的同时，最大限度保护你的隐私。
            </p>
            <h2>一、我们收集的信息</h2>
            <p>
              本应用基本无需注册登录即可使用，我们原则上不强制收集你的身份信息。为改善播放
              体验，我们可能会在获得你同意的情况下，收集设备型号、系统版本、网络类型、崩溃
              日志等基础的匿名技术信息，用于排查问题与功能优化。
            </p>
            <h2>二、信息的使用</h2>
            <p>
              我们仅将上述信息用于：提供与优化播放服务、识别与修复功能故障、提升产品体验。
              我们不会将你的个人信息用于与提供服务无关的目的，也不会出售、出租或共享给无关第三方。
            </p>
            <h2>三、信息的存储与安全</h2>
            <p>
              我们采取合理的技术与管理措施保护你的信息安全，防止信息被未经授权访问、使用或泄露。
              观看记录、收藏与缓存等数据默认保存在你的设备本地，你可以随时自行清理或删除。
            </p>
            <h2>四、第三方服务</h2>
            <p>
              为统计访问与优化服务，本网站可能接入第三方统计与分析服务，其收集与使用行为受相应
              第三方隐私政策约束。我们只接入经审核、值得信赖的服务方。
            </p>
            <h2>五、未成年人保护</h2>
            <p>
              我们建议未成年人应在监护人指导下使用本应用，并由监护人协助管理相关使用行为。
            </p>
            <h2>六、政策变更</h2>
            <p>
              我们可能会适时更新本隐私政策，相关政策条款将以显著方式在本页面公布。继续使用本应用
              即视为你已阅读并同意更新后的政策。
            </p>
            <h2>七、联系我们</h2>
            <p>
              如对本政策有任何疑问，欢迎通过 {siteConfig.email} 与我们联系，我们将尽快为你解答。
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}