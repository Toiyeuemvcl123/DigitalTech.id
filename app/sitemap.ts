import { createClient } from '@supabase/supabase-js';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  // Nếu chưa có Supabase, dùng data tĩnh (comment out phần dưới)
  // return [
  //   { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
  //   { url: `${baseUrl}/products/drones`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  //   // Thêm URL tĩnh khác...
  // ];

  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase env vars missing');
    return []; // Trả empty nếu thiếu env
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  // Fetch products slugs từ table 'products' (giả sử có column 'slug', 'updated_at')
  const { data: products } = await supabase
    .from('products')
    .select('slug, updated_at')
    .order('updated_at', { ascending: false });

  // Fetch news slugs từ table 'news' (giả sử có column 'slug', 'published_at')
  const { data: news } = await supabase
    .from('news')
    .select('slug, published_at')
    .order('published_at', { ascending: false });

  // URL tĩnh cơ bản
  const staticUrls = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/news`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/stores`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    // Thêm categories tĩnh nếu có, ví dụ: /products/drones, /products/cameras (dựa trên featured-categories.tsx)
  ];

  // URL động cho products
  const productUrls = products?.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: product.updated_at ? new Date(product.updated_at) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.9, // Ưu tiên cao cho sản phẩm
  })) || [];

  // URL động cho news
  const newsUrls = news?.map((item) => ({
    url: `${baseUrl}/news/${item.slug}`,
    lastModified: item.published_at ? new Date(item.published_at) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  })) || [];

  // Kết hợp tất cả
  return [...staticUrls, ...productUrls, ...newsUrls];
}