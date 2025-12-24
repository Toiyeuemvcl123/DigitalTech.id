"use client"

import { useState } from "react"
import Link from "next/link"
import { X, ChevronRight, Search } from "lucide-react"

interface MobileMenuProps {
  onClose: () => void
}

const menuItems = [
  { name: "Giới thiệu", href: "/introduction" },
  {
    name: "Sản phẩm",
    href: "/products",
    submenu: [
      { name: "Flycam", href: "/products/flycam" },
      { name: "Gimbal & Camera", href: "/products/gimbal" },
      { name: "Phụ kiện", href: "/products/accessories" },
    ],
  },
  { name: "Hướng dẫn mua hàng", href: "/shopping-guide" },
  { name: "Dịch vụ", href: "/services" },
  { name: "Tin tức", href: "/news" },
  { name: "Liên hệ", href: "/contact" },
  { name: "Hệ thống cửa hàng", href: "/stores" },
]

export function MobileMenu({ onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  return (
    <div className="fixed inset-0 z-50 bg-background">
      <div className="flex h-14 items-center justify-between border-b border-border px-4">
        <span className="text-lg font-semibold text-foreground">Menu</span>
        <button onClick={onClose} className="p-2">
          <X className="h-6 w-6 text-foreground" />
        </button>
      </div>

      <div className="p-4">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            className="w-full rounded-full border border-border bg-muted py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <div key={item.name}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => setExpandedItem(expandedItem === item.name ? null : item.name)}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-foreground hover:bg-muted"
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronRight
                      className={`h-5 w-5 transition-transform ${expandedItem === item.name ? "rotate-90" : ""}`}
                    />
                  </button>
                  {expandedItem === item.name && (
                    <div className="ml-4 space-y-1 border-l border-border pl-4">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          onClick={onClose}
                          className="block rounded-lg px-4 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-foreground hover:bg-muted"
                >
                  <span className="font-medium">{item.name}</span>
                  <ChevronRight className="h-5 w-5" />
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
