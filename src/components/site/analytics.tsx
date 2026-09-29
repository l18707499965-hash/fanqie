'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/lib/site';

/**
 * 百度统计（Baidu Tongji）埋点。
 * 通过 siteConfig.statId 注入官方统计脚本，非阻塞加载，不影响 LCP。
 */
export function BaiduAnalytics() {
  useEffect(() => {
    const hm = document.createElement('script');
    hm.async = true;
    hm.src = `https://hm.baidu.com/hm.js?${siteConfig.statId}`;
    const s = document.getElementsByTagName('script')[0];
    s?.parentNode?.insertBefore(hm, s);
  }, []);
  return null;
}