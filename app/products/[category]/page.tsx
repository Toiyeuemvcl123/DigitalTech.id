import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { formatPrice } from "@/lib/format"

const categoryData: Record<
  string,
  {
    name: string
    description: string
    products: {
      id: string
      name: string
      price: number
      originalPrice?: number
      image: string
      badge?: string
    }[]
  }
> = {
  flycam: {
    name: "Flycam DJI",
    description: "Khám phá bộ sưu tập drone DJI với công nghệ hàng đầu thế giới",
    products: [
      {
        id: "mavic-3-pro",
        name: "DJI Mavic 3 Pro",
        price: 52990000,
        originalPrice: 55990000,
        image: "/placeholder.svg?height=400&width=400",
        badge: "Bestseller",
      },
      {
        id: "mini-4-pro",
        name: "DJI Mini 4 Pro",
        price: 23990000,
        image: "/dji-mini-4-pro-compact-drone.jpg",
        badge: "New",
      },
      {
        id: "air-3",
        name: "DJI Air 3",
        price: 32990000,
        image: "/placeholder.svg?height=400&width=400",
      },
      {
        id: "avata-2",
        name: "DJI Avata 2",
        price: 28990000,
        image: "/dji-avata-2-fpv-drone.jpg",
        badge: "Hot",
      },
      {
        id: "inspire-3",
        name: "DJI Inspire 3",
        price: 189990000,
        image: "/placeholder.svg?height=400&width=400",
        badge: "Pro",
      },
      {
        id: "mavic-3-classic",
        name: "DJI Mavic 3 Classic",
        price: 38990000,
        image: "/placeholder.svg?height=400&width=400",
      },
    ],
  },
  gimbal: {
    name: "Gimbal & Camera",
    description: "Thiết bị chống rung và camera chuyên nghiệp từ DJI",
    products: [
      {
        id: "osmo-pocket-3",
        name: "DJI Osmo Pocket 3",
        price: 15990000,
        image: "/dji-osmo-pocket-3-handheld-camera.jpg",
        badge: "New",
      },
      {
        id: "rs-4-pro",
        name: "DJI RS 4 Pro",
        price: 21990000,
        image: "/dji-rs-4-pro-gimbal-stabilizer.jpg",
      },
      {
        id: "osmo-action-4",
        name: "DJI Osmo Action 4",
        price: 9990000,
        image: "/placeholder.svg?height=400&width=400",
      },
      {
        id: "ronin-4d",
        name: "DJI Ronin 4D",
        price: 189990000,
        image: "/placeholder.svg?height=400&width=400",
        badge: "Pro",
      },
    ],
  },
  accessories: {
    name: "Phụ kiện",
    description: "Phụ kiện chính hãng DJI - Nâng cao trải nghiệm sử dụng",
    products: [
      {
        id: "rc-2",
        name: "DJI RC 2",
        price: 8990000,
        image: "/placeholder.svg?height=400&width=400",
      },
      {
        id: "goggles-3",
        name: "DJI Goggles 3",
        price: 15990000,
        image: "/dji-goggles-3-fpv-headset.jpg",
        badge: "New",
      },
      {
        id: "mic-2",
        name: "DJI Mic 2",
        price: 8490000,
        image: "/placeholder.svg?height=400&width=400",
      },
      {
        id: "power-1000",
        name: "DJI Power 1000",
        price: 32990000,
        image: "/dji-power-1000-portable-power-station.jpg",
      },
    ],
  },
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const data = categoryData[category] || {
    name: "Sản phẩm",
    description: "Khám phá các sản phẩm DJI chính hãng",
    products: [],
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{data.name}</h1>
            <p className="text-muted-foreground">{data.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {data.products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="group">
                <div className="relative overflow-hidden rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                  {product.badge && (
                    <span className="absolute top-2 left-2 z-10 rounded bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                      {product.badge}
                    </span>
                  )}
                  <div className="aspect-square relative bg-muted">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-card-foreground mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
