"use client"

import Image from "next/image"
import Link from "next/link"
import { X, Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/format"

interface CartDropdownProps {
  onClose: () => void
}

export function CartDropdown({ onClose }: CartDropdownProps) {
  const { items, updateQuantity, removeItem, total } = useCart()

  return (
    <>
      <div className="fixed inset-0 bg-foreground/20 z-40" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card shadow-xl z-50 overflow-y-auto">
        <div className="flex items-center justify-between border-b border-border p-4">
          <h2 className="text-lg font-semibold text-card-foreground">Giỏ hàng</h2>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-full">
            <X className="h-5 w-5 text-card-foreground" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8">
            <p className="text-muted-foreground mb-4">Giỏ hàng trống</p>
            <Link
              href="/products"
              onClick={onClose}
              className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        ) : (
          <>
            <div className="p-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 rounded-lg border border-border p-3">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-card-foreground">{item.name}</h3>
                    <p className="text-sm text-primary font-semibold">{formatPrice(item.price)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="rounded-full border border-border p-1 hover:bg-muted"
                      >
                        <Minus className="h-3 w-3 text-card-foreground" />
                      </button>
                      <span className="w-8 text-center text-sm text-card-foreground">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="rounded-full border border-border p-1 hover:bg-muted"
                      >
                        <Plus className="h-3 w-3 text-card-foreground" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto p-1 text-destructive hover:bg-destructive/10 rounded-full"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium text-card-foreground">Tổng cộng:</span>
                <span className="text-xl font-bold text-primary">{formatPrice(total)}</span>
              </div>
              <Link
                href="/checkout"
                onClick={onClose}
                className="block w-full rounded-full bg-primary py-3 text-center font-medium text-primary-foreground hover:bg-primary/90"
              >
                Thanh toán
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  )
}
