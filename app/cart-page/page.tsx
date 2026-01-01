import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import React from 'react';

export default function CheckoutPage() {
  return (

  <div className="min-h-screen bg-background">
    <Header />  
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        
        {/* PHẦN 1: GIỎ HÀNG (Hình 3) */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <div className="grid grid-cols-12 gap-4 border-b pb-4 mb-4 font-bold text-sm uppercase">
            <div className="col-span-6">Sản phẩm</div>
            <div className="col-span-2 text-center">Giá</div>
            <div className="col-span-2 text-center">Số lượng</div>
            <div className="col-span-2 text-right">Tạm tính</div>
          </div>

          {/* Sản phẩm 1 */}
          <div className="grid grid-cols-12 gap-4 items-center border-b py-4">
            <div className="col-span-6 flex items-center gap-4">
              <button className="text-gray-400 border rounded-full w-6 h-6 flex items-center justify-center text-xs">×</button>
              <div className="w-22 h-22 flex items-center justify-center p-2">
                <img src="/dji-rc-2-remote-controller.jpg" alt="DJI RS4 Pro" className="object-contain" />
              </div>
              <span className="font-medium text-blue-600">DJI RS4 Pro - Basic</span>
            </div>
            <div className="col-span-2 text-center font-bold">20.190.000₫</div>
            <div className="col-span-2 text-center">
              <div className="inline-flex border rounded">
                <button className="px-2 py-1 bg-gray-50 border-r">-</button>
                <input type="text" value="2" className="w-8 text-center bg-transparent outline-none" readOnly />
                <button className="px-2 py-1 bg-gray-50 border-l">+</button>
              </div>
            </div>
            <div className="col-span-2 text-right font-bold">40.380.000₫</div>
          </div>

          {/* Sản phẩm 2 */}
          <div className="grid grid-cols-12 gap-4 items-center border-b py-4">
            <div className="col-span-6 flex items-center gap-4">
              <button className="text-gray-400 border rounded-full w-6 h-6 flex items-center justify-center text-xs">×</button>
              <div className="w-22 h-22 flex items-center justify-center p-2">
                <img src="/dji-rc-2-remote-controller.jpg" alt="DJI Osmo" className="object-contain" />
              </div>
              <span className="font-medium text-blue-600">DJI Osmo Action 5 Pro - Standard Combo</span>
            </div>
            <div className="col-span-2 text-center font-bold">9.190.000₫</div>
            <div className="col-span-2 text-center">
              <div className="inline-flex border rounded">
                <button className="px-2 py-1 bg-gray-50 border-r">-</button>
                <input type="text" value="1" className="w-8 text-center bg-transparent outline-none" readOnly />
                <button className="px-2 py-1 bg-gray-50 border-l">+</button>
              </div>
            </div>
            <div className="col-span-2 text-right font-bold">9.190.000₫</div>
          </div>

          <div className="flex justify-between mt-6">
            <button className="px-4 py-2 border rounded font-bold uppercase text-sm hover:bg-gray-50"> <a href="/all-product"> ← Tiếp tục xem sản phẩm </a> </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded font-bold uppercase text-sm opacity-50 cursor-not-allowed">Cập nhật giỏ hàng</button>
          </div>
        </div>

        {/* PHẦN 2: THANH TOÁN (Hình 1 & 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Thông tin thanh toán */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold uppercase border-b-2 border-gray-200 pb-2">Thông tin thanh toán</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-1">Tên *</label>
                <input type="text" className="w-full p-2 border rounded outline-none focus:ring-1 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Quốc gia/Khu vực *</label>
                <select className="w-full p-2 border rounded bg-white">
                  <option>Việt Nam</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Địa chỉ *</label>
                <input type="text" placeholder="Địa chỉ" className="w-full p-2 border rounded outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Thị trấn / Thành phố *</label>
                <input type="text" className="w-full p-2 border rounded outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Số điện thoại *</label>
                <input type="text" className="w-full p-2 border rounded outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Địa chỉ email *</label>
                <input type="email" className="w-full p-2 border rounded outline-none" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="diff-addr" />
                <label htmlFor="diff-addr" className="text-sm">Giao hàng đến một địa chỉ khác?</label>
              </div>
            </div>
          </div>

          {/* Đơn hàng của bạn */}
          <div className="border-2 border-gray-200 p-6 rounded-sm">
            <div className="flex items-center justify-between border-b pb-4 mb-4 text-black-600 font-medium cursor-pointer">
              <div className="flex items-center gap-2">
                <span>🎟️</span> Chọn hoặc nhập mã giảm giá
              </div>
              <span>&gt;</span>
            </div>

            <h2 className="text-lg font-bold uppercase mb-4">Đơn hàng của bạn</h2>
            
            <table className="w-full text-sm mb-4">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 uppercase">Sản phẩm</th>
                  <th className="text-right py-2 uppercase">Tạm tính</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 text-gray-600">DJI RS4 Pro - Basic <span className="font-bold">× 2</span></td>
                  <td className="text-right font-bold">40.380.000₫</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 text-gray-600">DJI Osmo Action 5 Pro - Standard Combo <span className="font-bold">× 1</span></td>
                  <td className="text-right font-bold">9.190.000₫</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 font-bold uppercase">Tạm tính</td>
                  <td className="text-right font-bold">49.570.000₫</td>
                </tr>
                <tr>
                  <td className="py-3 align-top font-bold uppercase">Vận chuyển</td>
                  <td className="py-3">
                    <div className="space-y-3">
                      <label className="flex gap-2 items-start cursor-pointer border p-3 rounded bg-gray-50">
                        <input type="radio" name="shipping" defaultChecked className="mt-1" />
                        <span className="text-xs leading-tight text-gray-700">
                          Ship COD (thanh toán khi nhận hàng, đơn hàng trên 5 triệu đồng cần cọc trước)
                        </span>
                      </label>
                      <label className="flex gap-2 items-center cursor-pointer border p-3 rounded">
                        <input type="radio" name="shipping" className="mt-0" />
                        <span className="text-xs text-gray-700">Khách đến nhận tại cửa hàng</span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-200">
                  <td className="py-4 font-bold uppercase">Tổng</td>
                  <td className="text-right font-bold text-lg">49.570.000₫</td>
                </tr>
              </tbody>
            </table>

            <div className="bg-gray-50 p-4 mb-4">
              <p className="font-bold text-sm mb-2">Trả tiền mặt khi nhận hàng</p>
              <p className="text-xs text-gray-500">Trả tiền mặt khi giao hàng</p>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded uppercase text-lg transition-colors">
              Đặt hàng
            </button>
          </div>

        </div>
      </div>
    </div>
  <Footer />
  </div>  

  );
};