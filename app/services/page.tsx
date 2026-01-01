import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function HowToBuyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <article className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
          
          {/* Tiêu đề chính viết hoa */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8 text-center tracking-tight">
            HƯỚNG DẪN MUA HÀNG
          </h1>

          {/* Dòng chữ bài viết */}
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
            Bài viết
          </p>

          {/* Tiêu đề nhỏ (Không đánh số) */}
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-8 text-center">
            Quy trình đặt hàng trực tuyến tại DigitalTech
          </h2>

          {/* Ảnh nằm chính giữa theo tỉ lệ 43% viewport height */}
          <div className="relative mx-auto rounded-xl overflow-hidden mb-10 shadow-lg aspect-video" style={{ width: '43vw' }}>
            <Image  src="/placeholder.svg" alt="Hướng dẫn mua hàng" fill className="object-cover" priority/>
          </div>

          {/* Nội dung bài viết */}
          <div className="prose prose-lg max-w-4xl w-full">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Chào mừng bạn đến với hệ thống mua sắm trực tuyến của chúng tôi. Để sở hữu các sản phẩm công nghệ mới nhất, bạn vui lòng thực hiện theo các bước đơn giản dưới đây.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground">Bước 1: Chọn sản phẩm</h3>
                <p className="text-muted-foreground">Tìm kiếm và chọn sản phẩm ưng ý từ danh mục của chúng tôi.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Bước 2: Thêm vào giỏ hàng</h3>
                <p className="text-muted-foreground">Kiểm tra thông số kỹ thuật và nhấn nút Thêm vào giỏ hàng.</p>
              </div>
                <div className="relative mx-auto rounded-xl overflow-hidden mb-10 shadow-lg aspect-video" style={{ width: '43vw' }}>
                <Image  src="/placeholder.svg" alt="Hướng dẫn mua hàng" fill className="object-cover" priority/>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Bước 3: Thanh toán</h3>
                <p className="text-muted-foreground">Điền thông tin giao hàng và chọn phương thức thanh toán phù hợp.</p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}