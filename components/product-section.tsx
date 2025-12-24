"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { formatPrice } from "@/lib/format"
import { useCart } from "@/hooks/use-cart"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  badge?: string
}

interface ProductSectionProps {
  title: string
  categorySlug: string
  products: Product[]
}

export function ProductSection({ title, categorySlug, products }: ProductSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { addItem } = useCart()

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
          <Link
            href={`/products/${categorySlug}`}
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Xem tất cả
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Banner image */}
        <div className="mb-6 overflow-hidden rounded-lg">
          <Image
            src={`/placeholder.svg?height=300&width=1200&query=${title} DJI product collection banner showcase`}
            alt={title}
            width={1200}
            height={300}
            className="w-full object-cover"
          />
        </div>

        {/* Products carousel */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card p-2 shadow-lg hover:bg-muted transition-colors hidden md:block"
          >
            <ChevronLeft className="h-5 w-5 text-card-foreground" />
          </button>

          <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-[260px] group">
                <Link href={`/product/${product.id}`}>
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
                <button
                  onClick={() =>
                    addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    })
                  }
                  className="mt-2 w-full rounded-full border border-border py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card p-2 shadow-lg hover:bg-muted transition-colors hidden md:block"
          >
            <ChevronRight className="h-5 w-5 text-card-foreground" />
          </button>
        </div>
      </div>
    </section>
  )
}
