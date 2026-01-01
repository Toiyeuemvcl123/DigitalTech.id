import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'; // Thay bằng domain thực tế như 'https://digitaltech.id.vn'

  return {
    rules: [
      {
        userAgent: '*', // Áp dụng cho tất cả bots (Google, Bing, v.v.)
        allow: ['/', '/products', '/product', '/news'], // Cho phép crawl trang chính, sản phẩm, tin tức
        disallow: ['/admin', '/api', '/auth', '/profile', '/checkout'], // Chặn trang admin, API, auth để tránh lộ dữ liệu
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`, // Link đến sitemap
    host: baseUrl,
  };
}