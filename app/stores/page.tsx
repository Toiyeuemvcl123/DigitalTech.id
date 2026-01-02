import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Clock } from "lucide-react"

const stores = [
  {
    id: 1,
    name: "DGT Store TP. Hà Nội - Phường Hai Bà Trưng",
    address: "123 Tạ Quang Bửu, Phường Hai Bà Trưng, TP. Hà Nội",
    phone: "028 1234 5678",
    hours: "09:00 - 21:00",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function StoresPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Địa chỉ cửa hàng</h1>
          <p className="text-muted-foreground mb-8">Ghé thăm cửa hàng DGT chính hãng tại TP. Hà Nội</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stores.map((store) => (
              <div
                key={store.id}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[5/3] relative">
                  <img
                    src={store.image || "/placeholder.svg"}
                    alt={store.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-card-foreground mb-4">{store.name}</h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>{store.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="h-5 w-5 flex-shrink-0" />
                      <span>{store.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="h-5 w-5 flex-shrink-0" />
                      <span>{store.hours}</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full rounded-full border border-border py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
                    Xem bản đồ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
