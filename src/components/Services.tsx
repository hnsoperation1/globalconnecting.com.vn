const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Tour Du Lịch',
    desc: 'Chương trình tour trong nước và quốc tế đa dạng, thiết kế linh hoạt theo nhu cầu — từ tiết kiệm đến cao cấp.',
    items: ['Tour trong nước', 'Tour quốc tế', 'Honeymoon & Family', 'Tour theo yêu cầu'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
    title: 'Vé Máy Bay',
    desc: 'Đặt vé máy bay nội địa và quốc tế với giá tốt nhất thị trường, hỗ trợ tư vấn 24/7.',
    items: ['Vé nội địa', 'Vé quốc tế', 'Vé hạng thương gia', 'Combo vé + khách sạn'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Tổ Chức Sự Kiện',
    desc: 'Lên kế hoạch và thực hiện sự kiện doanh nghiệp, hội nghị, tiệc và lễ kỷ niệm từ nhỏ đến lớn.',
    items: ['Hội nghị & Hội thảo', 'Tiệc doanh nghiệp', 'Team Building', 'Lễ ra mắt sản phẩm'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: 'MICE & Doanh Nghiệp',
    desc: 'Giải pháp MICE chuyên nghiệp (Meeting, Incentive, Conference, Exhibition) cho doanh nghiệp vừa và lớn.',
    items: ['Khảo sát địa điểm', 'Đặt phòng hội nghị', 'Du lịch khen thưởng', 'Triển lãm thương mại'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Dịch vụ của chúng tôi
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Giải Pháp Du Lịch Toàn Diện
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Từ tour du lịch đến tổ chức sự kiện, chúng tôi cung cấp mọi dịch vụ bạn cần
            cho một hành trình hoàn hảo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-orange/30 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-200">
                {service.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div
          className="mt-12 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: 'linear-gradient(135deg, #0B3185, #CC4400)' }}
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Cần tư vấn dịch vụ phù hợp?</h3>
            <p className="text-white/70 text-sm">Đội ngũ của chúng tôi sẵn sàng hỗ trợ bạn 24/7.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-white text-brand-blue font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Liên hệ ngay
          </a>
        </div>
      </div>
    </section>
  );
}
