import Image from "next/image"
import Link from "next/link"

const banners = [
  {
    title: "DJI Air 3",
    subtitle: "Dual Primary Cameras",
    image: "/placeholder.svg?height=400&width=600",
    link: "/product/air-3",
  },
  {
    title: "DJI Avata 2",
    subtitle: "Immersive Flight Experience",
    image: "/placeholder.svg?height=400&width=600",
    link: "/product/avata-2",
  },
  {
    title: "DJI RS 4 Pro",
    subtitle: "Professional Gimbal Stabilizer",
    image: "/placeholder.svg?height=400&width=600",
    link: "/product/rs-4-pro",
  },
]

export function ProductBanners() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {banners.map((banner) => (
            <Link
              key={banner.title}
              href={banner.link}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[3/2] relative">
                <Image
                  src={banner.image || "/placeholder.svg"}
                  alt={banner.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                  <p className="text-xs opacity-80">{banner.subtitle}</p>
                  <h3 className="text-lg font-bold">{banner.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
