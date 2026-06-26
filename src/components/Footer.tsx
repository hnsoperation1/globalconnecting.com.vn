import Image from 'next/image';
import Link from 'next/link';

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
    <footer className="bg-[#071428] text-white" style={{ backgroundImage: 'url(/bg-footer.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            {/* Logo chuẩn: icon + chữ bên dưới */}
            <Link href="/" className="inline-flex flex-col items-center gap-1 mb-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/logo.png"
                  alt="Global Connecting logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center">
                <div className="flex gap-1">
                  <span className="text-xl font-extrabold text-white leading-none">GLOBAL</span>
                  <span className="text-xl font-extrabold text-brand-orange leading-none">CONNECTING</span>
                </div>
                <span className="text-[7px] font-semibold tracking-widest text-white/70 uppercase mt-0.5 whitespace-nowrap">
                  BRING THE WORLD CLOSER TO YOU
                </span>
              </div>
            </Link>
            <div className="mt-3 space-y-2">
              <p className="text-sm font-medium text-white/80">Công ty TNHH Kết Nối Du Lịch Việt Nam Toàn Cầu</p>
              <p className="text-xs text-white/55 leading-relaxed">Chuyên tổ chức sự kiện doanh nghiệp, hội nghị, team building và MICE chuyên nghiệp.</p>
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
                <span className="font-medium text-white/75">Hà Nội:</span> Số 1 Thái Hà, Phường Đống Đa
              </li>
              <li className="leading-relaxed">
                <span className="font-medium text-white/75">TP HCM:</span> Số 7-9 Nguyễn Bỉnh Khiêm, Phường Sài Gòn
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
              <li>
                <a href="https://globalconnecting.com.vn" className="hover:text-brand-orange transition-colors">
                  globalconnecting.com.vn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© {year} VG TRAVEL – Công ty TNHH Kết Nối Du Lịch Việt Nam Toàn Cầu. All rights reserved.</p>
        </div>
      </div>
    </footer>

  );
}
