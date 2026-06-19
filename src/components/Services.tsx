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
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Dịch vụ của chúng tôi
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Chuyên Gia Tổ Chức Sự Kiện
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Từ quy mô nhỏ đến hàng nghìn người — chúng tôi thiết kế, lên kế hoạch
            và vận hành sự kiện doanh nghiệp một cách chuyên nghiệp, sáng tạo và trọn vẹn.
          </p>
        </div>

        {/* ── Sự kiện: card nổi bật ── */}
        <div
          className="rounded-2xl p-8 md:p-10 mb-8"
          style={{ background: 'linear-gradient(135deg, #1E5A8A 0%, #2A75B2 100%)' }}
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Icon + title */}
            <div className="shrink-0">
              <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center text-white mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Tổ Chức Sự Kiện</h3>
              <p className="text-white/70 text-sm max-w-xs leading-relaxed">
                Dịch vụ cốt lõi — chúng tôi đồng hành từ ý tưởng đến khi sự kiện kết thúc.
              </p>
            </div>
            {/* Items grid */}
            <div className="grid sm:grid-cols-2 gap-3 flex-1">
              {eventItems.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                  <span className="w-2 h-2 bg-brand-orange rounded-full shrink-0" />
                  <span className="text-white text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Dịch vụ bổ sung ── */}
        <div className="mb-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Dịch vụ bổ sung
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {sideServices.map((s) => (
              <div key={s.title}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-brand-blue/30 hover:shadow-md transition-all duration-200 flex gap-4 items-start"
              >
                <div className="w-11 h-11 bg-brand-blue/8 text-brand-blue rounded-lg flex items-center justify-center shrink-0">
                  {s.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">{s.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: 'linear-gradient(135deg, #2A75B2, #EF7E22)' }}
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Bạn đang lên kế hoạch cho sự kiện?</h3>
            <p className="text-white/75 text-sm">Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-white text-brand-blue font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Nhận báo giá
          </a>
        </div>

      </div>
    </section>
  );
}
