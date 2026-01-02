import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4">DigitalTech Vietnam</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Công ty TNHH thiết bị công nghệ Việt Nam. Cam kết sản phẩm chính hãng, bảo hành đầy đủ.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary-foreground/80">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary-foreground/80">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary-foreground/80">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/introduction" className="hover:text-primary-foreground">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-foreground">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/shopping-guide" className="hover:text-primary-foreground">
                  Hướng dẫn mua hàng
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-foreground">
                  Dịch vụ bảo hành
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-primary-foreground">
                  Tin tức
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Dịch vụ</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/services/warranty" className="hover:text-primary-foreground">
                  Chính sách bảo hành
                </Link>
              </li>
              <li>
                <Link href="/services/repair" className="hover:text-primary-foreground">
                  Sửa chữa
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="hover:text-primary-foreground">
                  Đào tạo bay
                </Link>
              </li>
              <li>
                <Link href="/services/rental" className="hover:text-primary-foreground">
                  Cho thuê thiết bị
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Tạ Quang Bửu, Phường Hai Bà Trưng, TP. Hà Nội</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>0329 *** ***</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>mcon*****@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold mb-1">Đăng ký nhận tin</h4>
              <p className="text-sm text-primary-foreground/80">Nhận thông tin sản phẩm mới và khuyến mãi</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 md:w-64 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <button className="rounded-full bg-primary-foreground px-6 py-2 text-sm font-medium text-foreground hover:bg-primary-foreground/90">
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© 2025 DGT Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
