'use client';
import WordSphere from './WordSphere';

const RINGS = [
  { lat:  78, startAngle:   0, words: ['HONDA', 'KYOEI', 'PWC'] },
  { lat:  58, startAngle:  45, words: ['PANASONIC', 'DAIKIN', 'CANON', 'CMC'] },
  { lat:  38, startAngle:   0, words: ['AGRIBANK', 'BIDV', 'HOA PHAT', 'RICHY', 'DASAN'] },
  { lat:  20, startAngle:  45, words: ['AMACCAO', 'MAPLETREE', 'LANGUAGE LINK', 'DIAMOND FOOD'] },
  { lat:   0, startAngle:   0, words: ['LX PANTOS', 'INOX HOANG VU', 'PVI INSURANCE', 'HTMP', 'ATI'] },
  { lat: -20, startAngle:  45, words: ['TRUNG KIEN', 'IDV', 'VINAGO', 'IKKA', 'VITAFINA'] },
  { lat: -42, startAngle:   0, words: ['VJCC', 'ARISTA', 'TUAN MINH FEED', 'HERON LAKE', 'LANCHI'] },
  { lat: -68, startAngle:  45, words: ['NITORI', 'VAP', 'DK PHARMA', 'KATOOLEC', 'HALCYON'] },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1E5A8A 0%, #2A75B2 55%, #1E5A8A 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-8 py-24">

        {/* ── LEFT: nội dung ── */}
        <div className="flex-1 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/20">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            Công ty TNHH Kết Nối Du Lịch Việt Nam Toàn Cầu
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Tổ Chức Sự Kiện
            <br />
            <span className="text-brand-orange">Chuyên Nghiệp</span>
          </h1>

          <p className="text-lg md:text-xl text-white/75 mb-10 max-w-xl leading-relaxed">
            Hội nghị, hội thảo, gala dinner, team building — chúng tôi lên kế hoạch
            và thực hiện trọn vẹn mọi quy mô sự kiện cho doanh nghiệp của bạn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/dich-vu"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-900/30"
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

          <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/15">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-orange">6+</div>
              <div className="text-white/60 text-sm mt-1">Năm kinh nghiệm</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-orange">200+</div>
              <div className="text-white/60 text-sm mt-1">Sự kiện đã thực hiện</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-orange">500+</div>
              <div className="text-white/60 text-sm mt-1">Khách hàng tin tưởng</div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: WordSphere ── */}
        <div className="flex-1 flex justify-center items-center">
          <WordSphere
            rings={RINGS}
            size={520}
            radius={215}
            bgColor="transparent"
            textColor="#EF7E22"
            fontSize={18}
            fontWeight={900}
            autoSpinSpeed={0.09}
            letterGap={3}
            style={{ padding: 0, borderRadius: 0, overflow: 'visible' }}
          />
        </div>

      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
