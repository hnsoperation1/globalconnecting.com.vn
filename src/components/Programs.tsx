const programs = [
  {
    category: 'Hội nghị & Hội thảo',
    client: 'Honda Việt Nam',
    title: 'Hội Nghị Thường Niên 2024',
    date: 'Tháng 3, 2024',
    location: 'Hà Nội',
    guests: '300 đại biểu',
    desc: 'Tổ chức hội nghị thường niên toàn quốc với sự tham gia của ban lãnh đạo và đại lý trên cả nước.',
  },
  {
    category: 'Team Building',
    client: 'LX Pantos',
    title: 'Team Building Hè 2024',
    date: 'Tháng 7, 2024',
    location: 'Đà Nẵng',
    guests: '150 nhân viên',
    desc: 'Chương trình team building 2 ngày 1 đêm kết hợp du lịch biển và các hoạt động gắn kết đội nhóm.',
  },
  {
    category: 'Gala Dinner',
    client: 'BIDV',
    title: 'Tiệc Kỷ Niệm 30 Năm Thành Lập',
    date: 'Tháng 11, 2023',
    location: 'Hà Nội',
    guests: '500 khách mời',
    desc: 'Gala dinner hoành tráng kỷ niệm 30 năm thành lập với chương trình nghệ thuật đặc sắc.',
  },
  {
    category: 'Lễ Ra Mắt',
    client: 'Panasonic Việt Nam',
    title: 'Lễ Ra Mắt Sản Phẩm 2023',
    date: 'Tháng 9, 2023',
    location: 'TP. Hồ Chí Minh',
    guests: '200 khách mời',
    desc: 'Sự kiện ra mắt dòng sản phẩm mới với trải nghiệm thực tế và khu vực trưng bày sản phẩm.',
  },
  {
    category: 'Hội nghị & Hội thảo',
    client: 'Agribank',
    title: 'Hội Thảo Phát Triển Bền Vững',
    date: 'Tháng 5, 2023',
    location: 'Hà Nội',
    guests: '400 đại biểu',
    desc: 'Hội thảo quy mô lớn với sự tham dự của các chuyên gia kinh tế và đại diện chi nhánh toàn quốc.',
  },
  {
    category: 'Incentive Trip',
    client: 'Daikin Việt Nam',
    title: 'Du Lịch Khen Thưởng 2023',
    date: 'Tháng 6, 2023',
    location: 'Phú Quốc',
    guests: '80 nhân viên',
    desc: 'Chuyến du lịch nghỉ dưỡng 3 ngày 2 đêm tại Phú Quốc cho đội ngũ kinh doanh xuất sắc.',
  },
];

const categoryColors: Record<string, string> = {
  'Hội nghị & Hội thảo': 'bg-brand-blue/10 text-brand-blue',
  'Team Building':        'bg-green-100 text-green-700',
  'Gala Dinner':          'bg-purple-100 text-purple-700',
  'Lễ Ra Mắt':            'bg-brand-orange/10 text-brand-orange',
  'Incentive Trip':       'bg-cyan-100 text-cyan-700',
};

export default function Programs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Thực tế đã làm
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Các Chương Trình Tiêu Biểu
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Một số sự kiện và chương trình chúng tôi đã tổ chức thành công cho các doanh nghiệp,
            tập đoàn trong và ngoài nước.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-brand-orange/30 hover:shadow-lg transition-all duration-200 flex flex-col"
            >
              {/* Top color bar */}
              <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #2A75B2, #EF7E22)' }} />

              <div className="p-6 flex flex-col flex-1">
                {/* Category + date */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[p.category] ?? 'bg-gray-100 text-gray-600'}`}>
                    {p.category}
                  </span>
                  <span className="text-xs text-gray-400">{p.date}</span>
                </div>

                {/* Client */}
                <p className="text-xs font-semibold text-brand-orange uppercase tracking-wide mb-1">
                  {p.client}
                </p>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                  {p.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {p.desc}
                </p>

                {/* Meta */}
                <div className="flex gap-4 text-xs text-gray-400 border-t border-gray-50 pt-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {p.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {p.guests}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-500 mb-4">Bạn muốn tổ chức sự kiện tương tự?</p>
          <a
            href="/lien-he"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
          >
            Liên hệ tư vấn ngay
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
