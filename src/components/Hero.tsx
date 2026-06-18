export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #072260 0%, #0B3185 45%, #CC4400 100%)' }}
    >
      {/* Global network SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="globe-clip">
            <circle cx="1090" cy="450" r="410" />
          </clipPath>
        </defs>

        {/* Globe outer ring */}
        <circle cx="1090" cy="450" r="410" fill="none" stroke="white" strokeOpacity="0.12" strokeWidth="1.5" />

        {/* Globe grid lines */}
        <g clipPath="url(#globe-clip)">
          {/* Latitude lines */}
          <line x1="680" y1="450" x2="1500" y2="450" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
          <ellipse cx="1090" cy="450" rx="410" ry="205" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="0.8" />
          <ellipse cx="1090" cy="450" rx="410" ry="340" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="0.8" />
          <ellipse cx="1090" cy="220" rx="320" ry="85" fill="none" stroke="white" strokeOpacity="0.09" strokeWidth="0.8" />
          <ellipse cx="1090" cy="680" rx="320" ry="85" fill="none" stroke="white" strokeOpacity="0.09" strokeWidth="0.8" />
          <ellipse cx="1090" cy="120" rx="160" ry="42" fill="none" stroke="white" strokeOpacity="0.07" strokeWidth="0.8" />
          <ellipse cx="1090" cy="780" rx="160" ry="42" fill="none" stroke="white" strokeOpacity="0.07" strokeWidth="0.8" />
          {/* Longitude lines */}
          <ellipse cx="1090" cy="450" rx="55" ry="410" fill="none" stroke="white" strokeOpacity="0.09" strokeWidth="0.8" />
          <ellipse cx="1090" cy="450" rx="55" ry="410" fill="none" stroke="white" strokeOpacity="0.09" strokeWidth="0.8" transform="rotate(30 1090 450)" />
          <ellipse cx="1090" cy="450" rx="55" ry="410" fill="none" stroke="white" strokeOpacity="0.09" strokeWidth="0.8" transform="rotate(60 1090 450)" />
          <ellipse cx="1090" cy="450" rx="55" ry="410" fill="none" stroke="white" strokeOpacity="0.09" strokeWidth="0.8" transform="rotate(90 1090 450)" />
          <ellipse cx="1090" cy="450" rx="55" ry="410" fill="none" stroke="white" strokeOpacity="0.09" strokeWidth="0.8" transform="rotate(120 1090 450)" />
          <ellipse cx="1090" cy="450" rx="55" ry="410" fill="none" stroke="white" strokeOpacity="0.09" strokeWidth="0.8" transform="rotate(150 1090 450)" />
        </g>

        {/* === CONNECTION ARCS === */}
        {/* Hà Nội → Tokyo */}
        <path d="M 1025 365 Q 1110 280 1255 255" fill="none" stroke="#CC4400" strokeOpacity="0.55" strokeWidth="1.5" />
        {/* Hà Nội → Singapore */}
        <path d="M 1025 365 Q 1075 465 1105 535" fill="none" stroke="#CC4400" strokeOpacity="0.45" strokeWidth="1.5" />
        {/* Hà Nội → Bangkok */}
        <path d="M 1025 365 Q 965 408 925 448" fill="none" stroke="white" strokeOpacity="0.25" strokeWidth="1" />
        {/* Hà Nội → Seoul */}
        <path d="M 1025 365 Q 1130 315 1215 315" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
        {/* Hà Nội → Sydney (long) */}
        <path d="M 1025 365 Q 1185 495 1265 625" fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="1" />
        {/* Hà Nội → Dubai (dashed) */}
        <path d="M 1025 365 Q 875 342 785 378" fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="6 4" />
        {/* Dubai → London (dashed) */}
        <path d="M 785 378 Q 762 308 745 238" fill="none" stroke="white" strokeOpacity="0.14" strokeWidth="1" strokeDasharray="6 4" />
        {/* London → New York (dashed) */}
        <path d="M 745 238 Q 618 215 500 275" fill="none" stroke="white" strokeOpacity="0.14" strokeWidth="1" strokeDasharray="6 4" />
        {/* New York → Hà Nội (long dashed arc) */}
        <path d="M 500 275 Q 760 170 1025 365" fill="none" stroke="#CC4400" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="8 5" />
        {/* Singapore → Sydney */}
        <path d="M 1105 535 Q 1185 580 1265 625" fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="1" />
        {/* Tokyo → Seoul */}
        <path d="M 1255 255 Q 1235 285 1215 315" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="1" />

        {/* === CITY NODES === */}
        {/* Hà Nội – main node, pulsing */}
        <circle cx="1025" cy="365" r="6" fill="#CC4400" />
        <circle cx="1025" cy="365" r="6" fill="none" stroke="#CC4400" strokeWidth="1.5">
          <animate attributeName="r" values="6;22;6" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <text x="1036" y="358" fill="white" fontSize="11" fontFamily="Arial, sans-serif" fontWeight="600" opacity="0.95">Hà Nội</text>

        {/* Tokyo */}
        <circle cx="1255" cy="255" r="4.5" fill="#CC4400" opacity="0.9" />
        <circle cx="1255" cy="255" r="4.5" fill="none" stroke="#CC4400" strokeWidth="1">
          <animate attributeName="r" values="4;16;4" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.6;0;0.6" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <text x="1265" y="250" fill="white" fontSize="10" fontFamily="Arial, sans-serif" opacity="0.75">Tokyo</text>

        {/* Singapore */}
        <circle cx="1105" cy="535" r="4" fill="white" opacity="0.85" />
        <circle cx="1105" cy="535" r="4" fill="none" stroke="white" strokeWidth="1">
          <animate attributeName="r" values="4;13;4" dur="3.8s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.5;0;0.5" dur="3.8s" repeatCount="indefinite" />
        </circle>
        <text x="1115" y="530" fill="white" fontSize="10" fontFamily="Arial, sans-serif" opacity="0.65">Singapore</text>

        {/* Seoul */}
        <circle cx="1215" cy="315" r="3.5" fill="white" opacity="0.75" />
        <text x="1223" y="311" fill="white" fontSize="10" fontFamily="Arial, sans-serif" opacity="0.6">Seoul</text>

        {/* Bangkok */}
        <circle cx="925" cy="448" r="3.5" fill="white" opacity="0.7" />
        <text x="933" y="444" fill="white" fontSize="10" fontFamily="Arial, sans-serif" opacity="0.55">Bangkok</text>

        {/* Sydney */}
        <circle cx="1265" cy="625" r="3.5" fill="white" opacity="0.6" />
        <text x="1273" y="620" fill="white" fontSize="10" fontFamily="Arial, sans-serif" opacity="0.5">Sydney</text>

        {/* Dubai */}
        <circle cx="785" cy="378" r="3.5" fill="white" opacity="0.55" />
        <text x="793" y="374" fill="white" fontSize="10" fontFamily="Arial, sans-serif" opacity="0.45">Dubai</text>

        {/* London */}
        <circle cx="745" cy="238" r="3.5" fill="white" opacity="0.5" />
        <text x="753" y="234" fill="white" fontSize="10" fontFamily="Arial, sans-serif" opacity="0.4">London</text>

        {/* New York */}
        <circle cx="500" cy="275" r="3.5" fill="white" opacity="0.45" />
        <text x="508" y="271" fill="white" fontSize="10" fontFamily="Arial, sans-serif" opacity="0.38">New York</text>

        {/* === BACKGROUND SCATTER DOTS === */}
        {([
          [175, 115, 0.12], [305, 75, 0.1], [115, 245, 0.13], [425, 175, 0.1],
          [75, 395, 0.12], [195, 505, 0.1], [345, 655, 0.12], [115, 725, 0.1],
          [475, 785, 0.11], [605, 685, 0.1], [645, 145, 0.1], [745, 555, 0.08],
          [545, 425, 0.08], [445, 555, 0.08], [275, 345, 0.1], [380, 310, 0.08],
          [640, 480, 0.07], [560, 220, 0.09], [230, 170, 0.08], [490, 640, 0.07],
        ] as [number, number, number][]).map(([x, y, op], i) => (
          <circle key={i} cx={x} cy={y} r="1.5" fill="white" opacity={op} />
        ))}

        {/* Thin lines between scatter dots */}
        <line x1="175" y1="115" x2="305" y2="75" stroke="white" strokeOpacity="0.05" strokeWidth="0.7" />
        <line x1="115" y1="245" x2="175" y2="115" stroke="white" strokeOpacity="0.05" strokeWidth="0.7" />
        <line x1="425" y1="175" x2="305" y2="75" stroke="white" strokeOpacity="0.05" strokeWidth="0.7" />
        <line x1="75" y1="395" x2="115" y2="245" stroke="white" strokeOpacity="0.05" strokeWidth="0.7" />
        <line x1="195" y1="505" x2="75" y2="395" stroke="white" strokeOpacity="0.05" strokeWidth="0.7" />
        <line x1="345" y1="655" x2="195" y2="505" stroke="white" strokeOpacity="0.05" strokeWidth="0.7" />
        <line x1="275" y1="345" x2="115" y2="245" stroke="white" strokeOpacity="0.05" strokeWidth="0.7" />
        <line x1="380" y1="310" x2="425" y2="175" stroke="white" strokeOpacity="0.05" strokeWidth="0.7" />
        <line x1="560" y1="220" x2="380" y2="310" stroke="white" strokeOpacity="0.05" strokeWidth="0.7" />
        <line x1="645" y1="145" x2="560" y2="220" stroke="white" strokeOpacity="0.05" strokeWidth="0.7" />
        <line x1="500" y1="275" x2="645" y2="145" stroke="white" strokeOpacity="0.04" strokeWidth="0.7" />
        <line x1="640" y1="480" x2="545" y2="425" stroke="white" strokeOpacity="0.04" strokeWidth="0.7" />
        <line x1="745" y1="555" x2="640" y2="480" stroke="white" strokeOpacity="0.04" strokeWidth="0.7" />
      </svg>

      {/* Content */}
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
            href="/dich-vu"
            className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-900/30"
          >
            Khám Phá Dịch Vụ
          </a>
          <a
            href="/lien-he"
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
