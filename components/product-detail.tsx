"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Check, ShoppingCart } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/format"

interface ProductDetailProps {
  product: {
    id: string
    name: string
    price: number
    originalPrice?: number
    description: string
    features: string[]
    specs: { label: string; value: string }[]
    images: string[]
  }
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const { addItem } = useCart()

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image gallery */}
        <div>
          <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
            <Image
              src={product.images[currentImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain p-8"
            />
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-2 shadow-lg hover:bg-card"
                >
                  <ChevronLeft className="h-5 w-5 text-card-foreground" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-2 shadow-lg hover:bg-card"
                >
                  <ChevronRight className="h-5 w-5 text-card-foreground" />
                </button>
              </>
            )}
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  index === currentImage ? "border-primary" : "border-border"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{product.name}</h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl font-bold text-primary">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <p className="text-muted-foreground mb-6">{product.description}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3">Tính năng nổi bật</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mb-8">
            <button
              onClick={() =>
                addItem({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.images[0],
                })
              }
              className="flex-1 flex items-center justify-center gap-2 rounded-full bg-primary py-3 font-medium text-primary-foreground hover:bg-primary/90"
            >
              <ShoppingCart className="h-5 w-5" />
              Thêm vào giỏ hàng
            </button>
            <button className="flex-1 rounded-full border border-border py-3 font-medium text-foreground hover:bg-muted">
              Mua ngay
            </button>
          </div>

          {/* Specs */}
          <div className="border-t border-border pt-6">
            <h3 className="font-semibold text-foreground mb-4">Thông số kỹ thuật</h3>
            <div className="grid grid-cols-2 gap-4">
              {product.specs.map((spec, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-sm text-muted-foreground">{spec.label}</span>
                  <span className="font-medium text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
