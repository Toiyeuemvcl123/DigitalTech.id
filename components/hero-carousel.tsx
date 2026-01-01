"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "DJI Mavic hehe Pro",
    subtitle: "Flagship Triple-Camera Drone",
    description: "Hasselblad Camera System with 4/3 CMOS Sensor",
    image: "/dji-mavic-3-pro-drone-flying-in-scenic-mountain-la.jpg",
    link: "/product/mavic-3-pro",
  },
  {
    id: 2,
    title: "DJI Mini 4 Pro",
    subtitle: "Mini Drone, Mighty Possibilities",
    description: "Under 249g with Obstacle Sensing in All Directions",
    image: "/dji-mini-4-pro-compact-drone-hovering-over-forest.jpg",
    link: "/product/mini-4-pro",
  },
  {
    id: 3,
    title: "DJI Osmo Pocket 3",
    subtitle: "Pocket-Sized Creator Cam",
    description: "1-inch CMOS Sensor with Rotating Screen",
    image: "/placeholder.svg?height=600&width=1200",
    link: "/product/osmo-pocket-3",
  },
  {
    id: 4,
    title: "DJI HOHO 3",
    subtitle: "Pocket-Sized Creator Cam",
    description: "1-inch CMOS Sensor with Rotating Screen",
    image: "/placeholder.svg?height=600&width=1200",
    link: "/product/osmo-pocket-3",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div className="relative overflow-hidden bg-muted">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <Link href={slide.link} className="block relative">
              <div className="aspect-[21/9] md:aspect-[21/7] relative">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-lg text-primary-foreground">
                      <p className="text-sm md:text-base font-medium mb-2 opacity-90">{slide.subtitle}</p>
                      <h2 className="text-3xl md:text-5xl font-bold mb-3">{slide.title}</h2>
                      <p className="text-sm md:text-lg opacity-90">{slide.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-2 shadow-lg hover:bg-card transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-card-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-2 shadow-lg hover:bg-card transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-card-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-primary-foreground" : "w-2 bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
