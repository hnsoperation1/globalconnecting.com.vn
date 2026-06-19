import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── BACKGROUND BANNER ── */}
      <Image
        src="/home-banner.png"
        alt="Global Connecting Banner"
        fill
        className="object-cover object-center"
        priority
      />

      {/* overlay mờ để chữ dễ đọc */}
      <div className="absolute inset-0 bg-black/70" />

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
            Hội nghị, hội thảo, gala dinner, team building — chúng tôi lên kế hoạch
            và thực hiện trọn vẹn mọi quy mô sự kiện cho doanh nghiệp của bạn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/dich-vu"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Xem Dịch Vụ
            </a>
            <a
              href="/lien-he"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              Liên Hệ Ngay
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-orange">20+</div>
              <div className="text-white/60 text-sm mt-1">BQL với hơn 20 năm kinh nghiệm</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-orange">10</div>
              <div className="text-white/60 text-sm mt-1">Năm hoạt động</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-orange">500+</div>
              <div className="text-white/60 text-sm mt-1">Khách hàng tin tưởng</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-orange">500+</div>
              <div className="text-white/60 text-sm mt-1">Chương trình sự kiện & team building mỗi năm</div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
