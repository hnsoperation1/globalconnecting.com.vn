import Link from 'next/link';

const eventItems = [
  'Hội nghị & Hội thảo doanh nghiệp',
  'Gala Dinner & Tiệc kỷ niệm',
  'Team Building trong & ngoài nước',
  'Lễ ra mắt sản phẩm & Khai trương',
  'Du lịch khen thưởng (Incentive Trip)',
  'Triển lãm & Hội chợ thương mại',
  'Sự kiện văn hóa & Giải trí',
  'MICE trọn gói (Meeting · Incentive · Conference · Exhibition)',
];

const sideServices = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Tour Du Lịch',
    desc: 'Tour trong nước và quốc tế linh hoạt theo yêu cầu, phù hợp kết hợp sau sự kiện hoặc incentive trip.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    title: 'Vé Máy Bay',
    desc: 'Đặt vé nội địa và quốc tế giá tốt, hỗ trợ đặt vé số lượng lớn cho đoàn doanh nghiệp.',
  },
];

export default function Services() {
  return (
    <>
      {/* ── Section 1: 2 cột ── */}
      <section id="services" className="bg-gray-50 overflow-hidden">
        <div className="lg:grid lg:grid-cols-2 min-h-120">

          {/* Cột trái: background image + CTA giữa */}
          <div
            className="relative flex items-center justify-center min-h-80 lg:min-h-0"
            style={{
              backgroundImage: 'url(/dich-vu/event.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative z-10 text-center px-10">
              <div className="inline-block bg-black/60 rounded-lg px-5 py-3 mb-5">
                <p className="text-white font-semibold text-lg leading-snug">Bạn đang lên kế hoạch cho sự kiện?</p>
                <p className="text-white/80 text-sm mt-1">Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết.</p>
              </div>
              <br />
              <a
                href="#contact"
                className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-7 py-3 rounded-lg transition-colors"
              >
                Nhận báo giá ngay
              </a>
            </div>
          </div>

          {/* Cột phải: blue services card */}
          <div
            className="p-8 md:p-10 flex flex-col justify-center"
            style={{ background: 'linear-gradient(135deg, #1E5A8A 0%, #2A75B2 100%)' }}
          >
            <p className="text-brand-orange font-semibold text-xs uppercase tracking-widest mb-3">
              Dịch vụ của chúng tôi
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Tổ Chức Sự Kiện</h3>
            <p className="text-white/70 text-sm mb-2 leading-relaxed">
              Dịch vụ cốt lõi — chúng tôi đồng hành từ ý tưởng đến khi sự kiện kết thúc.
            </p>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Từ quy mô nhỏ đến hàng nghìn người — chúng tôi thiết kế, lên kế hoạch và vận hành sự kiện doanh nghiệp một cách chuyên nghiệp, sáng tạo và trọn vẹn.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {eventItems.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                  <span className="w-2 h-2 bg-brand-orange rounded-full shrink-0" />
                  <span className="text-white text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 2: Vé Máy Bay — blue card trái, ảnh phải ── */}
      <section className="bg-gray-50 overflow-hidden">
        <div className="lg:grid lg:grid-cols-2 min-h-120">

          {/* Cột trái: white card */}
          <div className="p-8 md:p-10 flex flex-col justify-center bg-white">
            <p className="text-brand-orange font-semibold text-xs uppercase tracking-widest mb-3">
              Dịch vụ của chúng tôi
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">Vé Máy Bay</h3>
            <p className="text-gray-500 text-sm mb-2 leading-relaxed">
              Đặt vé nội địa & quốc tế giá tốt cho đoàn doanh nghiệp.
            </p>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Global Connecting hỗ trợ đặt vé máy bay số lượng lớn cho đoàn — tối ưu lịch bay theo sự kiện, linh hoạt thay đổi và đồng hành xuyên suốt hành trình của doanh nghiệp bạn.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Vé nội địa & quốc tế tất cả các hãng',
                'Đặt vé số lượng lớn cho đoàn',
                'Hỗ trợ thay đổi, hoàn hủy linh hoạt',
                'Tư vấn lịch bay khớp lịch trình sự kiện',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                  <span className="w-2 h-2 bg-brand-orange rounded-full shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cột phải: background image + CTA */}
          <div
            className="relative flex items-center justify-center min-h-80 lg:min-h-0"
            style={{
              backgroundImage: 'url(/dich-vu/ve-may-bay.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative z-10 text-center px-10">
              <div className="bg-black/60 rounded-xl px-6 py-5 mb-5 max-w-xs mx-auto">
                <p className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-2">Nền tảng đặt vé</p>
                <p className="text-white font-bold text-lg leading-snug mb-2">ticket.globalconnecting.com.vn</p>
                <p className="text-white/75 text-sm leading-relaxed">Đặt vé máy bay nội địa & quốc tế nhanh chóng — giá tốt, thanh toán tiện lợi, hỗ trợ đặt đoàn số lượng lớn.</p>
              </div>
              <a
                href="https://ticket.globalconnecting.com.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-7 py-3 rounded-lg transition-colors"
              >
                Đặt vé ngay
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 3: Tour Du Lịch — ảnh trái, blue card phải ── */}
      <section className="bg-gray-50 overflow-hidden">
        <div className="lg:grid lg:grid-cols-2 min-h-120">

          {/* Cột trái: background image + CTA */}
          <div
            className="relative flex items-center justify-center min-h-80 lg:min-h-0"
            style={{
              backgroundImage: 'url(/dich-vu/tour.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative z-10 text-center px-10">
              <div className="inline-block bg-black/60 rounded-lg px-5 py-3 mb-5">
                <p className="text-white font-semibold text-lg leading-snug">Đang lên kế hoạch chuyến đi?</p>
                <p className="text-white/80 text-sm mt-1">Chúng tôi thiết kế tour riêng theo yêu cầu của đoàn.</p>
              </div>
              <br />
              <Link
                href="/lien-he"
                className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-7 py-3 rounded-lg transition-colors"
              >
                Tư vấn tour ngay
              </Link>
            </div>
          </div>

          {/* Cột phải: blue card */}
          <div
            className="p-8 md:p-10 flex flex-col justify-center"
            style={{ background: 'linear-gradient(135deg, #1E5A8A 0%, #2A75B2 100%)' }}
          >
            <p className="text-brand-orange font-semibold text-xs uppercase tracking-widest mb-3">
              Dịch vụ của chúng tôi
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Tour Du Lịch</h3>
            <p className="text-white/70 text-sm mb-2 leading-relaxed">
              Tour trong nước & quốc tế thiết kế riêng theo yêu cầu.
            </p>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Từ chuyến nghỉ dưỡng sau hội nghị, team building kết hợp du lịch đến incentive trip đẳng cấp — chúng tôi lên lịch trình riêng, không theo tour mẫu có sẵn.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Tour trong nước & quốc tế theo yêu cầu',
                'Incentive trip trọn gói doanh nghiệp',
                'Kết hợp linh hoạt với chương trình sự kiện',
                'Lịch trình riêng, không tour có sẵn',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                  <span className="w-2 h-2 bg-brand-orange rounded-full shrink-0" />
                  <span className="text-white text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
