import Image from 'next/image';
import Link from 'next/link';

const programs = Array.from({ length: 10 }, (_, i) => ({
  slug: 'light-up-the-future',
  category: 'CSR & Sự kiện cộng đồng',
  client: 'Panasonic Việt Nam',
  title: 'Light Up The Future',
  date: '11–12/03/2026',
  location: 'Quảng Trị',
  guests: '510 hộ gia đình',
  desc: 'Trao tặng 510 đèn năng lượng mặt trời cho hai xã biên giới Tà Rụt và Hướng Lập, kết hợp lớp học STEM và các hoạt động cộng đồng ý nghĩa.',
  image: '/events/light-up-the-future/1.jpg',
}));

export default function Programs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

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

        {/* Alternating list */}
        <div className="space-y-8">
          {programs.map((p, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row"
              >
                {/* Image */}
                <div className={`relative w-full md:w-2/5 shrink-0 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="h-56 md:h-full min-h-55 relative">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 ${
                      isEven
                        ? 'bg-linear-to-r from-transparent to-white/20'
                        : 'bg-linear-to-l from-transparent to-white/20'
                    }`} />
                  </div>
                </div>

                {/* Info */}
                <div className={`flex flex-col justify-center p-8 flex-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  {/* Top bar */}
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="text-xs font-semibold bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full">
                      {p.category}
                    </span>
                    <span className="text-xs text-gray-400">{p.date}</span>
                  </div>

                  <p className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">
                    {p.client}
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-5 text-sm text-gray-400 mb-6">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {p.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {p.guests}
                    </span>
                  </div>

                  <div>
                    <Link
                      href={`/chuong-trinh-da-lam/${p.slug}`}
                      className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                      Xem chi tiết
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">Bạn muốn tổ chức chương trình tương tự?</p>
          <Link
            href="/lien-he"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
          >
            Liên hệ tư vấn ngay
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
