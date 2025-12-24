import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    name: "Flycam",
    slug: "flycam",
    products: [
      { name: "DJI Mavic 3 Pro", slug: "mavic-3-pro", badge: "Bestseller" },
      { name: "DJI Mini 4 Pro", slug: "mini-4-pro", badge: "New" },
      { name: "DJI Air 3", slug: "air-3" },
      { name: "DJI Avata 2", slug: "avata-2" },
    ],
  },
  {
    name: "Gimbal & Camera",
    slug: "gimbal",
    products: [
      { name: "DJI Osmo Pocket 3", slug: "osmo-pocket-3" },
      { name: "DJI RS 4 Pro", slug: "rs-4-pro" },
      { name: "DJI Osmo Action 4", slug: "osmo-action-4" },
    ],
  },
  {
    name: "Phụ kiện",
    slug: "accessories",
    products: [
      { name: "DJI RC 2", slug: "rc-2" },
      { name: "DJI Goggles 3", slug: "goggles-3" },
      { name: "DJI Mic 2", slug: "mic-2" },
    ],
  },
]

export function ProductsDropdown() {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] rounded-lg border border-border bg-card p-6 shadow-xl">
      <div className="grid grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.slug}>
            <Link
              href={`/products/${category.slug}`}
              className="text-sm font-semibold text-foreground hover:text-muted-foreground"
            >
              {category.name}
            </Link>
            <ul className="mt-3 space-y-2">
              {category.products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/product/${product.slug}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {product.name}
                    {product.badge && (
                      <span className="rounded bg-primary px-1.5 py-0.5 text-[10px] text-primary-foreground">
                        {product.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-4 border-t border-border pt-6">
        <Image
          src="/dji-mavic-3-pro-drone-bestseller.jpg"
          alt="Featured Product"
          width={120}
          height={80}
          className="rounded-lg object-cover"
        />
        <div>
          <p className="text-xs text-muted-foreground">Sản phẩm bán chạy</p>
          <p className="font-semibold text-foreground">DJI Mavic 3 Pro</p>
          <p className="text-sm text-primary">52.990.000₫</p>
        </div>
      </div>
    </div>
  )
}
