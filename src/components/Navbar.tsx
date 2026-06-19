'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Trang chủ' },
  { href: '/gioi-thieu', label: 'Giới thiệu' },
  { href: '/chuong-trinh-da-lam', label: 'Chương trình đã làm' },
  { href: '/dich-vu', label: 'Dịch vụ' },
  { href: '/khach-hang', label: 'Khách hàng' },
  { href: '/lien-he', label: 'Liên hệ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => {
        if (!prev && y > 80) return true;
        if (prev && y < 30) return false;
        return prev;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-white shadow-md transition-all duration-500 ${scrolled ? 'pb-0' : 'pb-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'h-15' : 'h-30'
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`flex transition-all duration-500 ${
              scrolled ? 'flex-row items-center gap-3' : 'flex-col items-center gap-0'
            }`}
          >
            {/* Icon hình cầu */}
            <div
              className={`relative shrink-0 transition-all duration-500 ${
                scrolled ? 'w-10 h-10' : 'w-14 h-14'
              }`}
            >
              <Image
                src="/logo.png"
                alt="Global Connecting logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Chữ: ban đầu bên dưới icon (stacked), sau scroll sang bên phải */}
            <div className="flex flex-col items-center">
              <div className="flex gap-1">
                <span
                  className={`font-extrabold leading-none transition-all duration-500 ${
                    scrolled ? 'text-xl' : 'text-2xl'
                  } text-[#1a3a5c]`}
                >
                  GLOBAL
                </span>
                <span
                  className={`font-extrabold leading-none transition-all duration-500 ${
                    scrolled ? 'text-xl' : 'text-2xl'
                  } text-brand-orange`}
                >
                  CONNECTING
                </span>
              </div>

              {/* Tagline ẩn sau khi scroll */}
              <span
                style={{
                  fontSize: scrolled ? '0px' : '7px',
                  maxHeight: scrolled ? '0' : '20px',
                  opacity: scrolled ? 0 : 1,
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  letterSpacing: '0.12em',
                  color: '#1a3a5c',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}
              >
                BRING THE WORLD CLOSER TO YOU
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-brand-orange"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Mở menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2.5 text-gray-700 hover:text-brand-orange hover:bg-gray-50 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
