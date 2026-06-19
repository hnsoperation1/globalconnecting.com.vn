import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import events, { getEventBySlug } from '@/data/events';

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return {
    title: `${event.title} – ${event.client} | Global Connecting`,
    description: event.intro.slice(0, 160),
  };
}

export default async function EventDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <main>
      {/* ── HERO ── */}
      <section
        className="relative pt-32 pb-0 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1E5A8A 0%, #2A75B2 60%, #1E5A8A 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 text-center">
          <Link
            href="/chuong-trinh-da-lam"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Chương trình đã làm
          </Link>
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            {event.client} · {event.category}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">{event.title}</h1>
          <p className="text-white/75 text-lg mb-6">{event.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {event.date}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {event.location}
            </span>
          </div>
        </div>

        {/* Cover image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-72 md:h-[480px] rounded-t-2xl overflow-hidden shadow-2xl">
            <Image
              src={event.coverImage}
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-brand-blue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {event.stats.map((s, i) => (
              <div
                key={i}
                className="py-7 px-4 text-center border-r border-white/10 last:border-r-0"
              >
                <div className="text-3xl font-bold text-brand-orange mb-1">{s.number}</div>
                <div className="text-white/65 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NỘI DUNG ── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-lg leading-relaxed">{event.intro}</p>
        </div>
      </section>

      {/* ── CÁC HOẠT ĐỘNG ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-blue mb-8">Các hoạt động trong chương trình</h2>
          <div className="space-y-4">
            {event.activities.map((a, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <span className="text-2xl shrink-0 mt-0.5">{a.icon}</span>
                <p className="text-gray-700 leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-blue mb-8">Hình ảnh chương trình</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {event.images.map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-xl ${i === 0 ? 'col-span-2 h-72' : 'h-52'}`}>
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-xs leading-snug">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTES ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-blue mb-8">Chia sẻ từ các bên</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {event.quotes.map((q, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
                <svg className="w-8 h-8 text-brand-orange/30 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">"{q.text}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900 text-sm">{q.author}</div>
                  <div className="text-brand-blue text-xs mt-0.5">{q.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section
        className="py-14"
        style={{ background: 'linear-gradient(135deg, #2A75B2, #EF7E22)' }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Bạn muốn tổ chức chương trình tương tự?</h3>
          <p className="text-white/75 mb-7">
            Chúng tôi tư vấn và thực hiện trọn vẹn — từ ý tưởng đến khi chương trình kết thúc.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/lien-he"
              className="bg-white text-brand-blue font-semibold px-7 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Liên hệ ngay
            </Link>
            <Link
              href="/chuong-trinh-da-lam"
              className="bg-white/15 text-white border border-white/30 font-semibold px-7 py-3 rounded-lg hover:bg-white/25 transition-colors"
            >
              Xem chương trình khác
            </Link>
          </div>
          {event.newsLink && (
            <a
              href={event.newsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mt-6 transition-colors"
            >
              Đọc bài báo gốc
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
