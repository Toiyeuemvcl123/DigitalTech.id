import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"

const articles: Record<
  string,
  {
    title: string
    date: string
    image: string
    content: string[]
  }
> = {
  "dji-mavic-3-pro-launch": {
    title: "DJI ra mắt Mavic 3 Pro - Drone 3 camera đầu tiên trên thế giới",
    date: "2024-01-15",
    image: "/placeholder.svg?height=500&width=1000",
    content: [
      "DJI vừa chính thức ra mắt Mavic 3 Pro, drone tiêu dùng đầu tiên trên thế giới được trang bị hệ thống 3 camera, đánh dấu một bước tiến lớn trong công nghệ drone.",
      "Mavic 3 Pro được trang bị camera chính Hasselblad với cảm biến CMOS 4/3 inch, kết hợp với camera tele medium 70mm và camera tele 166mm, mang đến khả năng zoom quang học linh hoạt từ 24mm đến 166mm.",
      "Với thời gian bay lên đến 43 phút và khả năng truyền hình O3+ ổn định ở khoảng cách lên đến 15km, Mavic 3 Pro hứa hẹn sẽ là công cụ lý tưởng cho các nhà quay phim chuyên nghiệp và những người đam mê nhiếp ảnh trên không.",
      "Sản phẩm hiện đã có mặt tại tất cả các cửa hàng DJI Vietnam trên toàn quốc với mức giá khởi điểm từ 52.990.000đ.",
    ],
  },
  "huong-dan-bay-drone-an-toan": {
    title: "Hướng dẫn bay Drone an toàn tại Việt Nam năm 2024",
    date: "2024-01-10",
    image: "/placeholder.svg?height=500&width=1000",
    content: [
      "Việc sử dụng drone ngày càng phổ biến tại Việt Nam, tuy nhiên nhiều người dùng vẫn chưa nắm rõ các quy định và cách bay an toàn. Bài viết này sẽ tổng hợp những thông tin quan trọng nhất.",
      "Theo quy định hiện hành, việc bay drone cần tuân thủ nghiêm ngặt các khu vực cấm bay như sân bay, khu vực quân sự, các công trình quan trọng của quốc gia. Người dùng cần kiểm tra bản đồ vùng cấm bay trước mỗi chuyến bay.",
      "Một số lưu ý quan trọng: Luôn giữ drone trong tầm nhìn, không bay trên đám đông, kiểm tra thời tiết trước khi bay, và đảm bảo pin đầy đủ. Đặc biệt, cần xin phép cơ quan chức năng khi bay ở các khu vực nhạy cảm.",
      "DJI Vietnam luôn sẵn sàng hỗ trợ khách hàng về các thông tin liên quan đến quy định bay drone. Hãy liên hệ hotline 1900 1234 để được tư vấn chi tiết.",
    ],
  },
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = articles[slug] || {
    title: "Bài viết",
    date: "2024-01-01",
    image: `/placeholder.svg?height=500&width=1000&query=DJI news article ${slug}`,
    content: ["Nội dung bài viết đang được cập nhật..."],
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <article className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Quay lại tin tức
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{article.title}</h1>

          <div className="flex items-center gap-2 text-muted-foreground mb-6">
            <Calendar className="h-4 w-4" />
            {new Date(article.date).toLocaleDateString("vi-VN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

          <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
            <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
