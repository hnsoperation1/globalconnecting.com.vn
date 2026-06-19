const stats = [
  { number: '2018', label: 'Năm thành lập' },
  { number: '1.5 tỷ', label: 'Vốn điều lệ (VNĐ)' },
  { number: '500+', label: 'Khách hàng phục vụ' },
  { number: '50+', label: 'Điểm đến toàn cầu' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Về chúng tôi
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue leading-tight mb-6">
              Đơn Vị Tổ Chức Sự Kiện<br />Uy Tín Tại Hà Nội
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Thành lập từ năm <strong>2018</strong>,{' '}
              <strong>Công ty TNHH Kết Nối Du Lịch Việt Nam Toàn Cầu</strong> (VG TRAVEL) chuyên
              tổ chức sự kiện doanh nghiệp — hội nghị, hội thảo, gala dinner, team building,
              lễ ra mắt sản phẩm và các chương trình MICE cho doanh nghiệp vừa và lớn.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Ngoài ra, chúng tôi cũng cung cấp dịch vụ tour du lịch và vé máy bay nhằm đáp ứng
              nhu cầu di chuyển và incentive trip cho khách hàng doanh nghiệp.
            </p>

            {/* Values */}
            <div className="space-y-3 mb-8">
              {[
                'Lên kế hoạch chi tiết, sáng tạo theo yêu cầu từng doanh nghiệp',
                'Mạng lưới địa điểm và nhà cung cấp sự kiện toàn quốc',
                'Đội ngũ vận hành chuyên nghiệp, hỗ trợ từ A đến Z',
              ].map((value) => (
                <div key={value} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-600 text-sm">{value}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors"
            >
              Liên hệ tư vấn ngay
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:border-brand-orange/40 hover:shadow-md transition-all duration-200"
              >
                <div className="text-4xl font-bold text-brand-orange mb-2">{stat.number}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
