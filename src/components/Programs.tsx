import Image from 'next/image';
import Link from 'next/link';
import events from '@/data/events';
import { venues } from '@/data/venues';

type Card = {
  slug: string;
  category: string;
  label: string;
  title: string;
  date: string;
  meta: { icon: 'location' | 'people'; text: string }[];
  desc: string;
  image: string;
  isVenue: boolean;
};

const eventPrograms: Card[] = events.map((e) => ({
  slug: e.slug,
  category: e.category,
  label: e.client,
  title: e.title,
  date: e.date,
  meta: [
    { icon: 'location' as const, text: e.location },
    ...(e.stats[1] ? [{ icon: 'people' as const, text: `${e.stats[1].number} ${e.stats[1].label}` }] : []),
  ],
  desc: e.intro.slice(0, 120) + '…',
  image: e.coverImage,
  isVenue: false,
}));

const venueCards: Card[] = venues.map((v) => ({
  slug: v.slug,
  category: v.category,
  label: v.capacity,
  title: v.name,
  date: '',
  meta: [{ icon: 'location', text: v.address }],
  desc: v.intro,
  image: v.coverImage,
  isVenue: true,
}));

const getEventOrder = (img: string) => {
  const m = img.match(/\/events\/(\d+)-/);
  if (!m) return 999;
  const n = parseInt(m[1]);
  return n === 0 ? 999 : n;
};

const MAX = 50;
const displayEvents = [...eventPrograms]
  .sort((a, b) => getEventOrder(a.image) - getEventOrder(b.image))
  .slice(0, MAX);
const displayVenues = venueCards.slice(0, MAX);
const groupCount = Math.max(Math.ceil(displayEvents.length / 2), Math.ceil(displayVenues.length / 2));

const LocationIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const PeopleIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const OrganizerBadge = () => (
  <span className="inline-flex items-center gap-1 bg-white border border-gray-200 px-2.5 py-1.5 rounded-full whitespace-nowrap shadow-sm">
    <Image src="/logo.png" alt="" width={14} height={14} className="object-contain shrink-0" />
    <span className="text-[10px] font-extrabold leading-none text-[#1a3a5c]">GLOBAL</span>
    <span className="text-[10px] font-extrabold leading-none text-brand-orange">CONNECTING</span>
    <span className="text-[10px] font-medium leading-none text-gray-400">tổ chức</span>
  </span>
);

const ArticleBadge = () => (
  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-gray-200 text-gray-600 px-2.5 py-0.5 rounded-full">
    Bài viết
  </span>
);

function TallCard({ p, isEven, isDark }: { p: Card; isEven: boolean; isDark: boolean }) {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row relative ${isDark ? 'bg-[#0a1f3d]' : 'bg-white'}`}>
      <div className={`absolute bottom-0 left-0 right-0 h-1 z-10 ${isDark ? 'bg-brand-orange' : 'bg-brand-blue'}`} />
      {/* Image */}
      <div className={`relative w-full md:w-2/5 shrink-0 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <div className="h-56 md:h-full min-h-55 relative">
          <Image src={p.image} alt={p.title} fill className="object-cover" />
          {isDark && (
            <div className={`absolute inset-0 ${isEven ? 'bg-linear-to-r' : 'bg-linear-to-l'} from-transparent to-brand-blue/30`} />
          )}
        </div>
      </div>
      {/* Content */}
      <div className={`flex flex-col justify-center p-8 flex-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {p.isVenue ? <ArticleBadge /> : <OrganizerBadge />}
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${isDark ? 'bg-white/15 text-white' : 'bg-brand-blue/10 text-brand-blue'}`}>{p.category}</span>
          {!p.isVenue && <span className={`text-xs ${isDark ? 'text-white/70' : 'text-gray-400'}`}>{p.date}</span>}
        </div>
        <p className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">{p.label}</p>
        <h3 className={`text-xl md:text-2xl font-bold mb-3 leading-snug ${isDark ? 'text-white' : 'text-gray-900'}`}>{p.title}</h3>
        <p className={`text-sm leading-relaxed mb-6 line-clamp-3 ${isDark ? 'text-white/90' : 'text-gray-600'}`}>
          <span className="font-bold" style={{ color: isDark ? '#93c5fd' : '#1E5A8A' }}>Global</span>{' '}
          <span className="font-bold text-brand-orange">Connecting</span>{' '}
          vinh dự được <span className="font-semibold">{p.label}</span> tin tưởng giao phó tổ chức — {p.desc}
        </p>
        <div className={`flex flex-wrap gap-5 text-sm mb-6 ${isDark ? 'text-white/70' : 'text-gray-400'}`}>
          {p.meta.map((m, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {m.icon === 'location' ? <LocationIcon /> : <PeopleIcon />}
              {m.text}
            </span>
          ))}
        </div>
        <div>
          <Link href={`/chuong-trinh-da-lam/${p.slug}`} className={`inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-lg transition-colors ${isDark ? 'bg-brand-orange hover:bg-brand-orange-dark text-white' : 'bg-brand-blue hover:bg-brand-blue-dark text-white'}`}>
            {p.isVenue ? 'Đọc bài viết' : 'Xem chi tiết'}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ShortCard({ p }: { p: Card }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col relative">
      <div className="relative h-44 shrink-0">
        <Image src={p.image} alt={p.title} fill className="object-cover" />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          {p.isVenue ? <ArticleBadge /> : <OrganizerBadge />}
          <span className="text-xs font-semibold bg-brand-blue/10 text-brand-blue px-2.5 py-0.5 rounded-full">{p.category}</span>
          {!p.isVenue && <span className="text-xs text-gray-400">{p.date}</span>}
        </div>
        <p className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-1">{p.label}</p>
        <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{p.title}</h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">{p.desc}</p>
        <div className="mt-auto">
          <Link href={`/chuong-trinh-da-lam/${p.slug}`} className="inline-flex items-center gap-1.5 text-brand-blue hover:text-brand-blue-dark text-sm font-semibold transition-colors">
            {p.isVenue ? 'Đọc bài viết' : 'Xem chi tiết'}
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex h-1">
        <div className="flex-1 bg-brand-orange" />
        <div className="flex-1 bg-brand-blue" />
      </div>
    </div>
  );
}

export default function Programs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Dấu ấn của chúng tôi
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Các Chương Trình Tiêu Biểu
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Một số sự kiện và chương trình chúng tôi đã tổ chức thành công cho các doanh nghiệp,
            tập đoàn trong và ngoài nước.
          </p>
        </div>

        {/* Card list: cứ 2 tall (sự kiện cty) + 2 short (bài viết) */}
        <div className="space-y-8">
          {Array.from({ length: groupCount }).map((_, gi) => {
            const tall = displayEvents.slice(gi * 2, gi * 2 + 2);
            const short = displayVenues.slice(gi * 2, gi * 2 + 2);
            return (
              <div key={gi} className="space-y-8">
                {tall.map((p, ti) => {
                  const idx = gi * 2 + ti;
                  return <TallCard key={ti} p={p} isEven={idx % 2 === 0} isDark={idx % 2 === 1} />;
                })}
                {short.length > 0 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {short.map((p, si) => <ShortCard key={si} p={p} />)}
                  </div>
                )}
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
