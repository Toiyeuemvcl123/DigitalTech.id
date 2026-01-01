import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import React from 'react';
import { ChevronRight, Plus, ChevronDown } from 'lucide-react';

export default function ProductListPage() {
  const products = [
    { id: 20, name: "Bộ Bảo Vệ Màn Hình K&F Concept Cho DJI Pock...", price: "150.000₫", img: "/dji-rc-2-remote-controller.jpg" },
    { id: 21, name: "Chân Máy Caplock Mantispod Z", price: "990.000₫", img: "/dji-rc-2-remote-controller.jpg" },
    { id: 31, name: "DJI Air 3 Series Propeller Guard Cho Air3/Air3s...", price: "Liên hệ", img: "/dji-rc-2-remote-controller.jpg" },
    { id: 41, name: "DJI Air 3S Chính Hãng", price: "Liên hệ", img: "/dji-rc-2-remote-controller.jpg" },
    { id: 51, name: "DJI Air 3S Intelligent Flight Battery Chính...", price: "Liên hệ", img: "/dji-rc-2-remote-controller.jpg" },
    { id: 61, name: "DJI Air 3S Wide-Angle Lens Chính Hãng", price: "Liên hệ", img: "/dji-rc-2-remote-controller.jpg" },
    { id: 71, name: "DJI Flip", price: "Liên hệ", img: "/dji-rc-2-remote-controller.jpg" },
    { id: 81, name: "DJI Flip Intelligent Flight Battery", price: "Liên hệ", img: "/dji-rc-2-remote-controller.jpg" },
  ];

  return (

  <div className="min-h-screen bg-background">
  <Header /> 
    <div className="bg-white min-h-screen font-sans text-gray-900 px-25">
      {/* Top Bar - Sắp xếp */}
      <div className="max-w-[1400px] mx-auto px-4 py-4 flex justify-end">
        <div className="relative inline-block text-left">
          <button className="flex items-center justify-between w-48 px-4 py-2 text-sm bg-gray-800 text-white rounded-md">
            Sắp xếp mặc định
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row gap-8 pb-20">
        
        {/* SIDEBAR BỘ LỌC */}
        <aside className="w-full md:w-64 flex-shrink-0 space-y-8">
          
          {/* Lọc theo Giá */}
          <section>
            <div className="flex justify-between items-center bg-gray-100 p-2 rounded-t-md border-b">
              <span className="font-bold text-sm">Giá</span>
              <Plus size={14} className="text-blue-500" />
            </div>
            <div className="mt-3 space-y-2 px-1">
              {["0₫ - 10.000.000₫ (183)", "10.000.000₫ - 20.000.000₫ (11)", "20.000.000₫ - 30.000.000₫ (2)", "30.000.000₫ - 50.000.000₫ (3)", "50.000.000₫ - ∞ (3)"].map((label, idx) => (
                <label key={idx} className="flex items-center gap-2 text-sm cursor-pointer hover:text-blue-600">
                  <input type="radio" name="price" className="w-3 h-3" />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Danh mục sản phẩm */}
          <section>
            <div className="flex justify-between items-center bg-gray-100 p-2 rounded-t-md border-b">
              <span className="font-bold text-sm">Danh mục sản phẩm</span>
              <Plus size={14} className="text-blue-500" />
            </div>
            <div className="mt-3 space-y-2 px-1 text-sm">
              {["Trạm sạc di động (4)", "Action Camera (6)", "Microphone (5)", "FPV (4)", "Flycam (11)", "Gimbal (9)"].map((item) => (
                <label key={item} className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                  <input type="radio" name="category" className="w-3 h-3" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Product Series */}
          <section>
            <div className="flex justify-between items-center bg-gray-100 p-2 rounded-t-md border-b">
              <span className="font-bold text-sm">Product Series</span>
              <Plus size={14} className="text-blue-500" />
            </div>
            <div className="mt-3 space-y-2 px-1 text-sm text-gray-700">
              {["DJI Air (1)", "DJI Avata (2)", "DJI Inspire (1)", "DJI Mavic (2)", "DJI Mini (4)", "DJI Power (3)"].map((series) => (
                <label key={series} className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                  <input type="radio" name="series" className="w-3 h-3" />
                  <span>{series}</span>
                </label>
              ))}
            </div>
          </section>
        </aside>

        {/* DANH SÁCH SẢN PHẨM */}
        <main className="flex-1">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((p) => (
              <div key={p.id} className="group flex flex-col items-center p-4 border border-transparent hover:shadow-lg transition-all rounded-md">
                <div className="w-full aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                  <img 
                    src={p.img} 
                    alt={p.name} 
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform" 
                  />
                </div>
                <h3 className="text-sm font-bold text-center h-10 line-clamp-2 mb-2 px-2">
                  {p.name}
                </h3>
                <p className={`text-sm font-bold mt-auto ${p.price === 'Liên hệ' ? 'text-gray-900' : 'text-gray-900'}`}>
                  {p.price}
                </p>
              </div>
            ))}
          </div>

          {/* PHÂN TRANG (Hình 3) */}
          <div className="mt-12 flex justify-center items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-md font-bold">1</button>
            {[2, 3, 4, 5, 6].map(num => (
              <button key={num} className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 rounded-md hover:border-black transition-colors">
                {num}
              </button>
            ))}
            <button className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 rounded-md hover:border-black">
              <ChevronRight size={18} />
            </button>
          </div>
        </main>
      </div>
    </div>

     <Footer />
    </div>
  );
};
