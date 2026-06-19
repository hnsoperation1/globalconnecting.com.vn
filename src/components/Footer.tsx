const services = [
  'Tổ Chức Hội Nghị & Hội Thảo',
  'Gala Dinner & Tiệc Doanh Nghiệp',
  'Team Building',
  'MICE & Incentive Trip',
  'Tour Du Lịch & Vé Máy Bay',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-3">
              <span className="text-2xl font-bold text-brand-orange">Global</span>
              <span className="text-xl font-semibold">Connecting</span>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-4">
              Công ty TNHH Kết Nối Du Lịch Việt Nam Toàn Cầu — chuyên tổ chức sự kiện doanh nghiệp,
              hội nghị, team building và MICE chuyên nghiệp.
            </p>
            <div className="text-xs text-white/40 space-y-1">
              <div>MST: 0108301813</div>
              <div>Thành lập: 31/05/2018</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white/90">Dịch vụ</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-white/60 hover:text-brand-orange transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white/90">Liên hệ</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="leading-relaxed">
                Số 1 Thái Hà, Phường Đống Đa, TP Hà Nội
              </li>
              <li>
                <a href="tel:0968477866" className="hover:text-brand-orange transition-colors">
                  0968 477 866
                </a>
              </li>
              <li>
                <a href="mailto:info@globalconnecting.com.vn" className="hover:text-brand-orange transition-colors">
                  info@globalconnecting.com.vn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© {year} VG TRAVEL – Công ty TNHH Kết Nối Du Lịch Việt Nam Toàn Cầu. All rights reserved.</p>
          <p>globalconnecting.com.vn</p>
        </div>
      </div>
    </footer>
  );
}
