"use client"

import Link from "next/link"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
  { name: "Mavic 3 Pro", slug: "mavic-3-pro" },
  { name: "Mini 4 Pro", slug: "mini-4-pro" },
  { name: "Air 3", slug: "air-3" },
  { name: "Avata 2", slug: "avata-2" },
  { name: "Osmo Pocket 3", slug: "osmo-pocket-3" },
  { name: "RS 4 Pro", slug: "rs-4-pro" },
  { name: "Osmo Action 4", slug: "osmo-action-4" },
  { name: "DJI Mic 2", slug: "mic-2" },
]

export function FeaturedCategories() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="bg-muted py-3">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 rounded-full bg-card p-1 shadow-md hover:bg-muted lg:hidden"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-8 lg:px-0 lg:justify-center lg:flex-wrap"
          >
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/product/${category.slug}`}
                className="whitespace-nowrap text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 rounded-full bg-card p-1 shadow-md hover:bg-muted lg:hidden"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>
    </div>
  )
}
