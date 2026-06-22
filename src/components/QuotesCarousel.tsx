'use client';
import { useState, useEffect, useRef } from 'react';

type Quote = { text: string; author: string; role: string };

export default function QuotesCarousel({ quotes }: { quotes: Quote[] }) {
  const [start, setStart] = useState(0);
  const [fading, setFading] = useState(false);
  const n = quotes.length;
  const startRef = useRef(start);
  startRef.current = start;
  const pendingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (next: number) => {
    if (pendingRef.current) clearTimeout(pendingRef.current);
    setFading(true);
    pendingRef.current = setTimeout(() => {
      setStart(next);
      setFading(false);
    }, 500);
  };

  useEffect(() => {
    const id = setInterval(() => {
      goTo((startRef.current + 1) % n);
    }, 8000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  return (
    <div>
      <div
        className="grid md:grid-cols-3 gap-6"
        style={{
          opacity: fading ? 0 : 1,
          transition: 'opacity 0.5s ease',
        }}
      >
        {[0, 1, 2].map(offset => {
          const q = quotes[(start + offset) % n];
          return (
            <div
              key={offset}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col"
            >
              <svg className="w-8 h-8 text-brand-orange/30 mb-3 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">&ldquo;{q.text}&rdquo;</p>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-gray-900 text-sm">{q.author}</div>
                <div className="text-brand-blue text-xs mt-0.5">{q.role}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-3 mt-8">
        <button
          onClick={() => goTo((start - 1 + n) % n)}
          className="w-8 h-8 rounded-full border border-gray-200 hover:border-brand-blue flex items-center justify-center text-gray-400 hover:text-brand-blue transition-colors"
          aria-label="Trước"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Chia sẻ ${i + 1}`}
            className={`rounded-full transition-all duration-500 ${
              i === start ? 'w-4 h-2 bg-brand-orange' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}

        <button
          onClick={() => goTo((start + 1) % n)}
          className="w-8 h-8 rounded-full border border-gray-200 hover:border-brand-blue flex items-center justify-center text-gray-400 hover:text-brand-blue transition-colors"
          aria-label="Tiếp"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
