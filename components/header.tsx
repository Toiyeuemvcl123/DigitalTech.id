"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { CartDropdown } from "./cart-dropdown"
import { MobileMenu } from "./mobile-menu"
import { ProductsDropdown } from "./products-dropdown"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [showOfficial, setShowOfficial] = useState(true)
  const { items } = useCart()

  useEffect(() => {
    const interval = setInterval(() => {
      setShowOfficial((prev) => !prev)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Top bar */}
      <div className="border-b border-border bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex h-9 items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <Link href="/stores" className="text-muted-foreground hover:text-foreground transition-colors">
                Hệ thống cửa hàng
              </Link>
              <button
                // onMouseEnter={() => setIsCartOpen(true)}
                // onMouseLeave={() => setIsCartOpen(true)}   
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ShoppingCart className="h-4 w-4" />
                <a href="/cart-page"> <span>Giỏ hàng ({cartItemsCount})</span> </a>
              </button>

            </div>
            <span className="text-muted-foreground font-medium">DigitalTech Store</span>
          </div>
        </div>
      </div>

      {/* Main header - Desktop */}
      <div className="hidden lg:block border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo with blinking text */}
            <Link href="/" className="flex items-center gap-2">
              <div className="relative">
                <span className="text-2xl font-bold text-foreground">DGT</span>
                <div className="absolute -top-1 -right-14 flex flex-col text-[10px] font-semibold">
                  <span
                    className={`text-primary transition-opacity duration-500 ${showOfficial ? "opacity-100" : "opacity-0"}`}
                  >
                    Official
                  </span>
                  <span
                    className={`text-primary transition-opacity duration-500 ${!showOfficial ? "opacity-100" : "opacity-0"}`}
                  >
                    Vietnam
                  </span>
                </div>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-8">
              <Link
                href="/introduction"
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                Giới thiệu
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                  <a href="all-product">
                  Sản phẩm </a>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isProductsOpen && <ProductsDropdown />}
              </div>
              <Link
                href="/shopping-guide"
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                Hướng dẫn mua hàng
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                Dịch vụ
              </Link>
              <Link
                href="/news"
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                Tin tức
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                Liên hệ
              </Link>
            </nav>

            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    className="w-64 rounded-full border border-border bg-muted px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
                >
                  <Search className="h-4 w-4" />
                  <span>Tìm kiếm</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className="lg:hidden border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            <button onClick={() => setIsCartOpen(!isCartOpen)} className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-foreground" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  {cartItemsCount}
                </span>
              )}
            </button>

            <Link href="/" className="flex items-center">
              <div className="relative">
                <span className="text-xl font-bold text-foreground">DGT</span>
                <div className="absolute -top-1 -right-12 flex flex-col text-[8px] font-semibold">
                  <span
                    className={`text-primary transition-opacity duration-500 ${showOfficial ? "opacity-100" : "opacity-0"}`}
                  >
                    Official
                  </span>
                  <span
                    className={`text-primary transition-opacity duration-500 ${!showOfficial ? "opacity-100" : "opacity-0"}`}
                  >
                    Vietnam
                  </span>
                </div>
              </div>
            </Link>

            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2">
              <Menu className="h-6 w-6 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Cart dropdown */}
      {isCartOpen && <CartDropdown onClose={() => setIsCartOpen(false)} />}

      {/* Mobile menu */}
      {isMobileMenuOpen && <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />}
    </header>
  )
}
