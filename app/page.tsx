import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"
import { FeaturedCategories } from "@/components/featured-categories"
import { ProductBanners } from "@/components/product-banners"
import { ProductSection } from "@/components/product-section"
import { NewsSection } from "@/components/news-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <FeaturedCategories />
        <HeroCarousel />
        <ProductBanners />
        <ProductSection
          title="HẢ THỨ 1"
          categorySlug="flycam"
          products={[
            {
              id: "1",
              name: "Đã thấy Mavic 3 Pro",
              price: 52990000,
              originalPrice: 55990000,
              image: "/dji-mavic-3-pro-drone-aerial-photography.jpg",
              badge: "Bestseller",
            },
            {
              id: "2",
              name: "DJI Mini 4 Pro",
              price: 23990000,
              image: "/dji-mini-4-pro-compact-drone.jpg",
              badge: "New",
            },
            {
              id: "3",
              name: "DJI Air 3",
              price: 32990000,
              image: "/dji-air-3-drone-dual-camera.jpg",
            },
            {
              id: "4",
              name: "Sản Phẩm Avata 2",
              price: 28990000,
              image: "/dji-avata-2-fpv-drone.jpg",
              badge: "Hot",
            },
            {
              id: "10",
              name: "Đã thấy Mavic 7 Pro",
              price: 52990000,
              originalPrice: 55990000,
              image: "/dji-mavic-3-pro-drone-aerial-photography.jpg",
              badge: "Bestseller",
            },
            {
              id: "9",
              name: "DJI Mini 6 Pro",
              price: 23990000,
              image: "/dji-mini-4-pro-compact-drone.jpg",
              badge: "New",
            },
          ]}
        />
        <ProductSection
          title="Flycam DJI"
          categorySlug="flycam"
          products={[
            {
              id: "1",
              name: "Đã thấy Mavic 3 Pro",
              price: 52990000,
              originalPrice: 55990000,
              image: "/dji-mavic-3-pro-drone-aerial-photography.jpg",
              badge: "Bestseller",
            },
            {
              id: "2",
              name: "DJI Mini 4 Pro",
              price: 23990000,
              image: "/dji-mini-4-pro-compact-drone.jpg",
              badge: "New",
            },
            {
              id: "3",
              name: "DJI Air 3",
              price: 32990000,
              image: "/dji-air-3-drone-dual-camera.jpg",
            },
            {
              id: "4",
              name: "Sản Phẩm Avata 2",
              price: 28990000,
              image: "/dji-avata-2-fpv-drone.jpg",
              badge: "Hot",
            },
          ]}
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
