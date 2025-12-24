import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"

const newsItems = [
  {
    id: "1",
    title: "DJI ra mắt Mavic 3 Pro - Drone 3 camera đầu tiên trên thế giới",
    excerpt:
      "DJI vừa chính thức ra mắt Mavic 3 Pro với hệ thống 3 camera Hasselblad, mang đến trải nghiệm quay phim chuyên nghiệp chưa từng có.",
    image: "/placeholder.svg?height=400&width=600",
    date: "2024-01-15",
    slug: "dji-mavic-3-pro-launch",
    category: "Sản phẩm mới",
  },
  {
    id: "2",
    title: "Hướng dẫn bay Drone an toàn tại Việt Nam năm 2024",
    excerpt: "Tổng hợp các quy định và hướng dẫn bay drone an toàn, đúng luật tại Việt Nam dành cho người mới bắt đầu.",
    image: "/placeholder.svg?height=400&width=600",
    date: "2024-01-10",
    slug: "huong-dan-bay-drone-an-toan",
    category: "Hướng dẫn",
  },
  {
    id: "3",
    title: "So sánh DJI Mini 4 Pro và Mini 3 Pro - Nên chọn loại nào?",
    excerpt:
      "Phân tích chi tiết sự khác biệt giữa DJI Mini 4 Pro và Mini 3 Pro để giúp bạn đưa ra quyết định phù hợp nhất.",
    image: "/placeholder.svg?height=400&width=600",
    date: "2024-01-05",
    slug: "so-sanh-mini-4-pro-mini-3-pro",
    category: "So sánh",
  },
  {
    id: "4",
    title: "Top 10 địa điểm quay phim bằng Drone đẹp nhất Việt Nam",
    excerpt:
      "Khám phá những địa điểm tuyệt vời nhất để quay phim flycam tại Việt Nam, từ vịnh Hạ Long đến ruộng bậc thang Sapa.",
    image: "/placeholder.svg?height=400&width=600",
    date: "2024-01-01",
    slug: "top-dia-diem-quay-phim-drone",
    category: "Mẹo hay",
  },
  {
    id: "5",
    title: "DJI Osmo Pocket 3 - Camera bỏ túi hoàn hảo cho vlogger",
    excerpt:
      "Đánh giá chi tiết DJI Osmo Pocket 3 với cảm biến 1 inch và màn hình xoay, lý tưởng cho việc quay vlog hàng ngày.",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-12-28",
    slug: "dji-osmo-pocket-3-review",
    category: "Đánh giá",
  },
  {
    id: "6",
    title: "Cách chỉnh màu video drone chuyên nghiệp với DaVinci Resolve",
    excerpt: "Hướng dẫn từng bước cách color grading video drone để có được màu sắc điện ảnh chuyên nghiệp.",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-12-20",
    slug: "color-grading-video-drone",
    category: "Hướng dẫn",
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Tin tức & Blog</h1>
            <p className="text-muted-foreground">Cập nhật những thông tin mới nhất về sản phẩm và công nghệ DJI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.slug}`}
                className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                    {item.category}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <Calendar className="h-3 w-3" />
                    {new Date(item.date).toLocaleDateString("vi-VN")}
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
