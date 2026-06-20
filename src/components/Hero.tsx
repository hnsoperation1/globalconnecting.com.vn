"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const slides = [
  { src: "/herobanner/slide01.JPG", alt: "Global Connecting – Sự kiện 1" },
  { src: "/herobanner/slide02.JPG", alt: "Global Connecting – Sự kiện 2" },
  { src: "/herobanner/slide03.JPG", alt: "Global Connecting – Sự kiện 3" },
];

const INTERVAL = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((p) => (p + 1) % slides.length),
    [],
  );
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(next, INTERVAL);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── SLIDESHOW BACKGROUND ── */}
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          className={`object-cover object-center transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ── NỘI DUNG ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/20">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            Công ty TNHH Kết Nối Du Lịch Việt Nam Toàn Cầu
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Tổ Chức Sự Kiện
            <br />
            <span className="text-brand-orange">Chuyên Nghiệp</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
            Hội nghị, hội thảo, gala dinner, team building — chúng tôi lên kế
            hoạch và thực hiện trọn vẹn mọi quy mô sự kiện cho doanh nghiệp của
            bạn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Liên Hệ Ngay
            </a>
            <Link
              href="/chuong-trinh-da-lam"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              Xem sự kiện do chúng tôi thực hiện
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-orange">
                20+
              </div>
              <div className="text-white/60 text-sm mt-1">
                BQL với hơn 20 năm kinh nghiệm
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-orange">
                10
              </div>
              <div className="text-white/60 text-sm mt-1">Năm hoạt động</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-orange">
                500+
              </div>
              <div className="text-white/60 text-sm mt-1">
                Khách hàng tin tưởng
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-orange">
                500+
              </div>
              <div className="text-white/60 text-sm mt-1">
                Chương trình sự kiện & team building mỗi năm
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── ĐIỀU HƯỚNG ── */}
      {/* Nút trái */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
        aria-label="Slide trước"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      {/* Nút phải */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
        aria-label="Slide tiếp theo"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-brand-orange w-6" : "bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
