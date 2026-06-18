export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #072260 0%, #0B3185 45%, #CC4400 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-24 right-12 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 left-12 w-80 h-80 rounded-full bg-brand-orange/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue-light/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/20">
          <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
          Công ty TNHH Kết Nối Du Lịch Việt Nam Toàn Cầu
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Kết Nối Bạn Với
          <br />
          <span className="text-brand-orange">Thế Giới</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
          Dịch vụ du lịch trọn gói, vé máy bay giá tốt và tổ chức sự kiện chuyên nghiệp —
          đưa bạn đến mọi điểm đến trên toàn cầu.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-900/30"
          >
            Khám Phá Dịch Vụ
          </a>
          <a
            href="#contact"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            Liên Hệ Ngay
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-white/15">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-brand-orange">6+</div>
            <div className="text-white/60 text-sm mt-1">Năm kinh nghiệm</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-brand-orange">500+</div>
            <div className="text-white/60 text-sm mt-1">Khách hàng tin tưởng</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-brand-orange">50+</div>
            <div className="text-white/60 text-sm mt-1">Điểm đến toàn cầu</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
