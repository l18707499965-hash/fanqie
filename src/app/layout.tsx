import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site/header';
import { SiteFooter } from '@/components/site/footer';
import { BaiduAnalytics } from '@/components/site/analytics';
import { siteConfig } from '@/lib/site';

const base = siteConfig.baseUrl;

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: {
    default: siteConfig.title,
    // 品牌词置顶，强化关键词相关性
    template: `${siteConfig.name} - %s`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  applicationName: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: '/',
    siteName: siteConfig.name,
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // 站点验证（按部署后实际分配到控制台的值替换）
    google: 'PLACEHOLDER_GOOGLE_SITE_VERIFICATION',
    other: {
      'baidu-site-verification': 'PLACEHOLDER_BAIDU_SITE_VERIFICATION',
      'msvalidate.01': 'PLACEHOLDER_BING_SITE_VERIFICATION',
    },
  },
  category: 'entertainment',
  creator: siteConfig.name,
  publisher: siteConfig.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    alternateName: '番茄影视app 官网',
    url: base,
    description: siteConfig.description,
    inLanguage: 'zh-CN',
  };
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: base,
    logo: `${base}/logo.png`,
    brand: siteConfig.name,
  };

  return (
    <html lang="zh-CN" className="dark">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <div className="glow-ring pointer-events-none fixed inset-x-0 top-0 -z-10 h-[520px]" />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <BaiduAnalytics />
      </body>
    </html>
  );
}