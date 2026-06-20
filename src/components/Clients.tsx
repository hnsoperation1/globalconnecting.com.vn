import Image from 'next/image';

const clients = [
  { name: 'Honda',    src: '/client/honda.png'   },
  { name: 'Canon',    src: '/client/canon.png'   },
  { name: 'Daikin',   src: '/client/daikin.png'  },
  { name: 'CMC',      src: '/client/cmc.png'     },
  { name: 'Hòa Phát', src: '/client/hoaphat.png' },
  { name: 'Nitori',   src: '/client/nitori.png'  },
  { name: 'VJCC',     src: '/client/vjcc.png'    },
  { name: 'TLIP',     src: '/client/tlip.png'    },
];

const testimonials = [
  {
    name: 'Nguyễn Văn An',
    role: 'Giám đốc, Công ty XYZ',
    text: 'VG TRAVEL đã tổ chức chuyến team building tuyệt vời cho 200 nhân viên của chúng tôi. Chuyên nghiệp, chu đáo từng chi tiết, đúng ngân sách.',
  },
  {
    name: 'Trần Thị Bích',
    role: 'Trưởng phòng HR, Tập đoàn ABC',
    text: 'Dịch vụ đặt vé máy bay nhanh chóng, giá tốt. Đội ngũ hỗ trợ nhiệt tình 24/7. Chúng tôi đã hợp tác 3 năm và rất hài lòng.',
  },
  {
    name: 'Lê Văn Cường',
    role: 'CEO, Startup DEF',
    text: 'Hội nghị thường niên của chúng tôi được VG TRAVEL tổ chức rất thành công. Từ địa điểm đến catering đều hoàn hảo. Sẽ tiếp tục hợp tác lâu dài.',
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Khách hàng & Đối tác
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Được Tin Tưởng Bởi Hàng Trăm Khách Hàng
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Chúng tôi tự hào đồng hành cùng các doanh nghiệp, tổ chức và cá nhân trên khắp Việt Nam.
          </p>
        </div>

        {/* Client logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20 items-center">
          {clients.map((client) => (
            <Image
              key={client.name}
              src={client.src}
              alt={client.name}
              width={300}
              height={120}
              className="w-full h-24 object-contain"
            />
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-brand-blue/20 hover:shadow-md transition-all duration-200"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-brand-orange"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
