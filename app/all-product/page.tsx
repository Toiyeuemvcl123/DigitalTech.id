"use client"; // Cần thiết để sử dụng useState

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import React, { useState } from 'react';
import { ChevronRight, Plus, ChevronDown, SlidersHorizontal } from 'lucide-react';

export default function ProductListPage() {
  // State để đóng mở menu lọc trên Mobile
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Sắp xếp mặc định");
  const [isSortOpen, setIsSortOpen] = useState(false);

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

  const sortOptions = [
    "Sắp xếp mặc định",
    "Mức độ phổ biến",
    "Điểm đánh giá",
    "Mới nhất",
    "Giá: Thấp đến Cao",
    "Giá: Cao đến Thấp"
  ];

  return (
    // THÊM: overflow-x-hidden để triệt tiêu cột trắng bên phải
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* SECTION ĐEN (Giống ảnh mẫu) */}
      <div className="bg-black text-white py-10 px-4 text-center">
        <nav className="text-sm uppercase tracking-widest mb-4">
          <a href="/" className="opacity-70">Trang chủ</a>
          <span className="mx-2">/</span>
          <span className="font-bold">Sản phẩm</span>
        </nav>

        {/* THÊM: Nút Lọc Mobile để giống ảnh yêu cầu trước đó */}
        <button 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex md:hidden items-center justify-center gap-2 mx-auto mb-6 hover:text-blue-400 transition-colors"
        >
          <SlidersHorizontal size={20} />
          <span className="text-xl font-bold uppercase tracking-tighter">Lọc</span>
        </button>

        {/* Dropdown Sắp xếp */}
        <div className="relative max-w-[300px] mx-auto">
          <button 
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center justify-between w-full px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded text-sm"
          >
            {sortBy}
            <ChevronDown size={16} className={`transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isSortOpen && (
            <ul className="absolute z-50 w-full mt-1 bg-[#2a2a2a] border border-gray-700 rounded shadow-xl overflow-hidden">
              {sortOptions.map((opt) => (
                <li 
                  key={opt}
                  onClick={() => { setSortBy(opt); setIsSortOpen(false); }}
                  className="px-4 py-2 text-left hover:bg-blue-600 cursor-pointer text-sm border-b border-gray-800 last:border-0"
                >
                  {opt}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* TỐI ƯU: Sử dụng w-full để không bị tràn trên mobile */}
      <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row gap-8 py-10">
        
        {/* SIDEBAR BỘ LỌC */}
        <aside className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0 space-y-8 animate-in fade-in slide-in-from-top-4 duration-300`}>
          
          {/* Lọc theo Giá */}
          <section>
            <div className="flex justify-between items-center bg-gray-100 p-3 rounded-t-md border-b">
              <span className="font-bold text-sm uppercase">Giá</span>
              <Plus size={14} />
            </div>
            <div className="mt-3 space-y-3 px-1">
              {["0₫ - 10.000.000₫", "10.000.000₫ - 20.000.000₫", "20.000.000₫ - 50.000.000₫", "Trên 50.000.000₫"].map((label, idx) => (
                <label key={idx} className="flex items-center gap-3 text-sm cursor-pointer group">
                  <input type="radio" name="price" className="w-4 h-4 accent-black" />
                  <span className="group-hover:text-blue-600 transition-colors">{label}</span>
                </label>
              ))}
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center bg-gray-100 p-3 rounded-t-md border-b">
              <span className="font-bold text-sm uppercase">Danh mục</span>
              <Plus size={14} />
            </div>
            <div className="mt-3 space-y-3 px-1">
              {["Action Camera", "Flycam", "Gimbal", "Microphone"].map((item) => (
                <label key={item} className="flex items-center gap-3 text-sm cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 accent-black" />
                  <span className="group-hover:text-blue-600 transition-colors">{item}</span>
                </label>
              ))}
            </div>
          </section>
        </aside>

        {/* DANH SÁCH SẢN PHẨM */}
        <main className="flex-1 min-w-0"> {/* Thêm min-w-0 để tránh flexbox tràn */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
            {products.map((p) => (
              <div key={p.id} className="group cursor-pointer w-full">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-[#f9f9f9]">
                  <img 
                    src={p.img} 
                    alt={p.name} 
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <h3 className="text-[13px] font-medium text-center line-clamp-2 mb-2 px-2 h-10 group-hover:text-blue-600 transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm font-bold text-center">
                  {p.price}
                </p>
              </div>
            ))}
          </div>

          {/* PHÂN TRANG - Tối ưu cho mobile: Ẩn bớt số trang nếu quá dài */}
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

      <Footer />
    </div>
  );
}