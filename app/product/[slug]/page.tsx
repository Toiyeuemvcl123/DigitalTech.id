import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"

const products: Record<
  string,
  {
    id: string
    name: string
    price: number
    originalPrice?: number
    description: string
    features: string[]
    specs: { label: string; value: string }[]
    images: string[]
  }
> = {
  "mavic-3-pro": {
    id: "mavic-3-pro",
    name: "DJI Mavic 3 Pro",
    price: 52990000,
    originalPrice: 55990000,
    description:
      "DJI Mavic 3 Pro là drone flagship với hệ thống 3 camera Hasselblad, mang đến chất lượng hình ảnh chuyên nghiệp với khả năng quay video 5.1K và chụp ảnh 20MP.",
    features: [
      "Hệ thống 3 camera Hasselblad",
      "Cảm biến CMOS 4/3 inch",
      "Quay video 5.1K/50fps",
      "Thời gian bay lên đến 43 phút",
      "Phát hiện chướng ngại vật đa hướng",
      "Truyền hình O3+",
    ],
    specs: [
      { label: "Trọng lượng", value: "958g" },
      { label: "Tốc độ tối đa", value: "21 m/s" },
      { label: "Tầm bay tối đa", value: "15 km" },
      { label: "Độ phân giải video", value: "5.1K/50fps" },
      { label: "Độ phân giải ảnh", value: "20MP" },
      { label: "Thời gian bay", value: "43 phút" },
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  },
  "mini-4-pro": {
    id: "mini-4-pro",
    name: "DJI Mini 4 Pro",
    price: 23990000,
    description:
      "DJI Mini 4 Pro là drone nhỏ gọn dưới 249g với khả năng phát hiện chướng ngại vật đa hướng và quay video 4K/60fps HDR.",
    features: [
      "Trọng lượng dưới 249g",
      "Cảm biến CMOS 1/1.3 inch",
      "Quay video 4K/60fps HDR",
      "Thời gian bay lên đến 34 phút",
      "Phát hiện chướng ngại vật đa hướng",
      "Truyền hình O4",
    ],
    specs: [
      { label: "Trọng lượng", value: "249g" },
      { label: "Tốc độ tối đa", value: "16 m/s" },
      { label: "Tầm bay tối đa", value: "20 km" },
      { label: "Độ phân giải video", value: "4K/60fps" },
      { label: "Độ phân giải ảnh", value: "48MP" },
      { label: "Thời gian bay", value: "34 phút" },
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  },
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products[slug] || {
    id: slug,
    name: "Sản phẩm DJI",
    price: 19990000,
    description: "Sản phẩm chính hãng DJI với đầy đủ bảo hành.",
    features: ["Chính hãng DJI", "Bảo hành 12 tháng", "Hỗ trợ kỹ thuật 24/7"],
    specs: [
      { label: "Bảo hành", value: "12 tháng" },
      { label: "Xuất xứ", value: "Chính hãng" },
    ],
    images: [
      `/placeholder.svg?height=600&width=600&query=DJI ${slug} product photo`,
      `/placeholder.svg?height=600&width=600&query=DJI ${slug} detail view`,
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductDetail product={product} />
      </main>
      <Footer />
    </div>
  )
}
