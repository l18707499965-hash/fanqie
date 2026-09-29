/**
 * 番茄影视官网统一站点配置
 * 所有可变的站点级信息集中在此，便于维护与 SEO 一致性。
 */

export const siteConfig = {
  name: '番茄影视',
  shortName: '番茄影视',
  title: '番茄影视 - 高清流畅免费看片，海量影视资源聚合',
  description:
    '番茄影视是一款高清流畅的安卓免费影视聚合应用，海量电影、电视剧、综艺、动漫资源一站畅享，极速加载、无广告打扰、支持清晰度切换与离线缓存。立即下载安卓版番茄影视 App，开启沉浸观影之旅。',
  keywords: [
    '番茄影视',
    '番茄影视app',
    '番茄影视安卓版',
    '番茄影视下载',
    '免费影视app',
    '高清影视',
    '免费看电影',
    '看剧神器',
    '影视聚合',
    '在线看电影',
    '番茄影视官网',
    '安卓影视app',
  ],
  baseUrl: process.env.COZE_PROJECT_DOMAIN_DEFAULT || 'https://example.com',
  // 仅提供安卓端下载
  downloadUrl:
    'https://bos.liao-hai.chat/yxq/%e7%95%aa%e8%8c%84%e5%bd%b1%e8%a7%86.apk',
  downloadLabel: '安卓 APK 下载',
  androidVersion: 'V2.8.6',
  androidSize: '约 42MB',
  androidApi: 'Android 6.0 及以上',
  statId: '08c958a70e8386615995375b0aca7c44',
  email: 'support@fanqie-tv.com',
  since: '2021',
} as const;

/** 导航 */
export const navItems: { href: string; label: string }[] = [
  { href: '/', label: '首页' },
  { href: '/features', label: '特色功能' },
  { href: '/news', label: '资讯动态' },
  { href: '/faq', label: '常见问题' },
  { href: '/help', label: '帮助中心' },
  { href: '/about', label: '关于我们' },
];

/** 页脚链接分组 */
export const footerGroups: {
  title: string;
  links: { href: string; label: string }[];
}[] = [
  {
    title: '产品',
    links: [
      { href: '/features', label: '特色功能' },
      { href: '/download', label: '下载安卓版' },
      { href: '/news', label: '版本更新' },
      { href: '/faq', label: '常见问题' },
    ],
  },
  {
    title: '支持',
    links: [
      { href: '/help', label: '帮助中心' },
      { href: '/faq', label: '使用指南' },
      { href: '/about', label: '关于我们' },
      { href: '/news', label: '资讯动态' },
    ],
  },
  {
    title: '更多',
    links: [
      { href: '/privacy', label: '隐私政策' },
      { href: '/terms', label: '用户协议' },
      { href: '/help', label: '联系我们' },
      { href: '/download', label: '安卓 APK 下载' },
    ],
  },
];