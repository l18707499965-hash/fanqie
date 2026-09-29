import type { Metadata } from 'next';
import { PageHero } from '@/components/site/page-hero';
import { Reveal } from '@/components/site/reveal';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: '用户协议',
  description:
    '番茄影视用户协议：使用本应用前请阅读并同意相关条款，了解你的权利与义务。',
  alternates: { canonical: '/terms' },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="用户协议" subtitle="使用番茄影视前，请仔细阅读以下条款。" crumbLabel="用户协议" />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Reveal>
          <div className="prose-brand text-[15px]">
            <p>最近更新日期：2026 年 1 月 1 日</p>
            <p>
              欢迎使用 {siteConfig.name}（以下简称"本应用"）。本协议在你与本应用之间就使用
              服务相关事宜的权利义务关系进行约定。下载、安装或使用本应用，即视为你已阅读并同意本协议全部条款。
            </p>
            <h2>一、服务说明</h2>
            <p>
              本应用为用户提供影视内容聚合、在线播放、离线缓存等信息服务。我们致力于持续提升
              内容丰富度与播放体验，但不对特定内容的可用性、稳定性作出绝对承诺。
            </p>
            <h2>二、使用规范</h2>
            <p>
              你应遵守法律法规与公序良俗，不得利用本应用从事任何违法、违规或侵犯他人合法权益的行为；
              不得对本应用进行逆向工程、破解、再分发或用于商业牟利。
            </p>
            <h2>三、内容与版权</h2>
            <p>
              本应用所展示的影视内容来源于合法授权渠道或公开网络，其著作权归相关权利人所有。
              请用户尊重知识产权，仅将本应用用于个人合法观看用途。如内容涉及侵权，请与我们联系处理。
            </p>
            <h2>四、免责声明</h2>
            <p>
              本应用按"现状"提供服务。在法律允许的最大范围内，我们不对因网络、设备、第三方服务
              等不可控因素导致的播放异常或服务中断承担责任。下载安装前请确保安装包来源为本官方渠道。
            </p>
            <h2>五、协议变更与终止</h2>
            <p>
              我们有权适时修订本协议，修订后条款将在本页面公布，继续使用本应用即视为接受修订后的协议。
              你也可随时停止使用并卸载本应用。
            </p>
            <h2>六、法律适用与争议解决</h2>
            <p>
              本协议的订立、执行与解释均适用中华人民共和国法律。因本协议引起的争议，双方应友好协商解决；
              协商不成的，可提交有管辖权的人民法院解决。
            </p>
            <h2>七、联系我们</h2>
            <p>
              如对本协议有任何疑问，欢迎通过 {siteConfig.email} 与我们联系。
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}