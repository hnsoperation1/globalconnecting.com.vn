'use client';
import { useState } from 'react';

const contactInfo = [
  {
    label: 'Địa chỉ',
    value: 'Hà Nội: Số 1 Thái Hà, Phường Đống Đa\nTP HCM: Số 7-9 Nguyễn Bỉnh Khiêm, Phường Sài Gòn',
    href: undefined,
    iconPath:
      'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    label: 'Điện thoại',
    value: 'Mrs Phương (Giám Đốc) – 0968 477 866',
    href: 'tel:0968477866',
    iconPath:
      'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  },
  {
    label: 'Email',
    value: 'info@globalconnecting.com.vn',
    href: 'mailto:info@globalconnecting.com.vn',
    iconPath:
      'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Liên hệ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Sẵn Sàng Hỗ Trợ Bạn
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết cho
            dịch vụ phù hợp nhất với nhu cầu của bạn.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info column */}
          <div className="space-y-5">
            {/* Contact details */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-brand-blue text-lg mb-5">Thông tin liên hệ</h3>
              <div className="space-y-5">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-orange/10 text-brand-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={info.iconPath} />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} className="text-gray-700 text-sm hover:text-brand-orange transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-gray-700 text-sm whitespace-pre-line">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Working hours */}
            <div className="bg-brand-blue rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">Giờ làm việc</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/70">Thứ Hai – Thứ Sáu</span>
                  <span className="text-brand-orange font-semibold">8:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Thứ Bảy</span>
                  <span className="text-brand-orange font-semibold">8:00 – 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Chủ Nhật</span>
                  <span className="text-white/40">Nghỉ</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-white/50">
                Hỗ trợ khẩn cấp: 24/7 qua Zalo/điện thoại
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
          >
            <h3 className="font-bold text-brand-blue text-lg mb-6">Gửi yêu cầu tư vấn</h3>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Họ và tên <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Số điện thoại <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="0900 000 000"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="email@example.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Nội dung yêu cầu <span className="text-brand-orange">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tôi muốn hỏi về tour du lịch Nhật Bản cho gia đình 4 người..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white py-3 rounded-lg font-semibold transition-colors"
              >
                {submitted ? '✓ Đã gửi thành công!' : 'Gửi yêu cầu tư vấn'}
              </button>

              {submitted && (
                <p className="text-green-600 text-sm text-center">
                  Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ!
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
