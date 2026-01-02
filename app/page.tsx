import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"
import { FeaturedCategories } from "@/components/featured-categories"
import { ProductBanners } from "@/components/product-banners"
import { ProductSection } from "@/components/product-section"
import { NewsSection } from "@/components/news-section"
import { supabase } from '@/lib/supabase'

export default async function HomePage() {
  const { data: products, error } = await supabase
    .from('products')
    .select('id, name, price, original_price, img_url, badge')
  if (error) return <div>Đã xảy ra lỗi: {error.message}</div> 
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <FeaturedCategories />
        <HeroCarousel />
        <ProductBanners />
        <ProductSection
          title="Flycam DJI"
          categorySlug="flycam"
          products={products?.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            originalPrice: item.original_price,
            image: item.img_url || "/placeholder.jpg",
            badge: item.badge,
          }))}
        />    
        <ProductSection
          title="Flycam DJI"
          categorySlug="flycam"
          products={products?.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            originalPrice: item.original_price,
            image: item.img_url || "/placeholder.jpg",
            badge: item.badge,
          }))}
        />    
        <ProductSection
          title="Gimbal & Camera"
          categorySlug="gimbal"
          products={[
            {
              id: "5",
              name: "Phát bòi Pocket 3",
              price: 15990000,
              image: "/dji-osmo-pocket-3-handheld-camera.jpg",
              badge: "New",
            },
            {
              id: "6",
              name: "DJI RS 4 Pro",
              price: 21990000,
              image: "/dji-rs-4-pro-gimbal-stabilizer.jpg",
            },
            {
              id: "7",
              name: "Ngonn Action 4",
              price: 9990000,
              image: "/dji-osmo-action-4-camera.jpg",
            },
            {
              id: "8",
              name: "DJI Ronin 4D",
              price: 189990000,
              image: "/dji-ronin-4d-cinema-camera.jpg",
              badge: "Pro",
            },
          ]}
        />
        <ProductSection
          title="Accessories"
          categorySlug="accessories"
          products={[
            {
              id: "9",
              name: "DJI RC 2",
              price: 8990000,
              image: "/dji-rc-2-remote-controller.jpg",
            },
            {
              id: "10",
              name: "DJI Goggles 3",
              price: 15990000,
              image: "/dji-goggles-3-fpv-headset.jpg",
              badge: "New",
            },
            {
              id: "11",
              name: "DJI Mic 2",
              price: 8490000,
              image: "/dji-mic-2-wireless-microphone.jpg",
            },
            {
              id: "12",
              name: "DJI Power 1000",
              price: 32990000,
              image: "/dji-power-1000-portable-power-station.jpg",
            },
          ]}
        />
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}
