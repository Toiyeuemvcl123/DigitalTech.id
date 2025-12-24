import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

const newsItems = [
  {
    id: "1",
    title: "DJI ra mắt Mavic 3 Pro - Drone 3 camera đầu tiên trên thế giới",
    excerpt:
      "DJI vừa chính thức ra mắt Mavic 3 Pro với hệ thống 3 camera Hasselblad, mang đến trải nghiệm quay phim chuyên nghiệp chưa từng có.",
    image: "/placeholder.svg?height=250&width=400",
    date: "2024-01-15",
    slug: "dji-mavic-3-pro-launch",
  },
  {
    id: "2",
    title: "Hướng dẫn bay Drone an toàn tại Việt Nam năm 2024",
    excerpt: "Tổng hợp các quy định và hướng dẫn bay drone an toàn, đúng luật tại Việt Nam dành cho người mới bắt đầu.",
    image: "/placeholder.svg?height=250&width=400",
    date: "2024-01-10",
    slug: "huong-dan-bay-drone-an-toan",
  },
  {
    id: "3",
    title: "So sánh DJI Mini 4 Pro và Mini 3 Pro - Nên chọn loại nào?",
    excerpt:
      "Phân tích chi tiết sự khác biệt giữa DJI Mini 4 Pro và Mini 3 Pro để giúp bạn đưa ra quyết định phù hợp nhất.",
    image: "/placeholder.svg?height=250&width=400",
    date: "2024-01-05",
    slug: "so-sanh-mini-4-pro-mini-3-pro",
  },
  {
    id: "4",
    title: "Top 10 địa điểm quay phim bằng Drone đẹp nhất Việt Nam",
    excerpt:
      "Khám phá những địa điểm tuyệt vời nhất để quay phim flycam tại Việt Nam, từ vịnh Hạ Long đến ruộng bậc thang Sapa.",
    image: "/placeholder.svg?height=250&width=400",
    date: "2024-01-01",
    slug: "top-dia-diem-quay-phim-drone",
  },
]

export function NewsSection() {
  return (
    <section className="py-8 md:py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Tin tức & Blog</h2>
          <Link
            href="/news"
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Xem tất cả
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </section>
  )
}
