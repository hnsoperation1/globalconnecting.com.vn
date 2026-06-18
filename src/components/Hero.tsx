'use client';
import { useEffect, useState } from 'react';

const GCX = 1090;   // globe center x in viewBox
const GCY = 450;    // globe center y in viewBox
const GR  = 320;    // globe radius
const INIT_LON = 107; // initial center longitude (Vietnam center)

type City = {
  name: string;
  lat: number;
  lon: number;
  primary?: boolean;   // Vietnamese cities
  labelDx?: number;    // label offset x
  labelDy?: number;    // label offset y
};

const CITIES: City[] = [
  { name: 'Hà Nội',    lat: 21.0,  lon: 105.8, primary: true,  labelDx:  8, labelDy: -6 },
  { name: 'Đà Nẵng',  lat: 16.0,  lon: 108.2, primary: true,  labelDx:  8, labelDy:  4 },
  { name: 'TP.HCM',   lat: 10.8,  lon: 106.7, primary: true,  labelDx:  8, labelDy:  4 },
  { name: 'Bangkok',  lat: 13.8,  lon: 100.5, labelDx:  7, labelDy: -4 },
  { name: 'Singapore',lat:  1.3,  lon: 103.8, labelDx:  7, labelDy:  4 },
  { name: 'Tokyo',    lat: 35.7,  lon: 139.7, labelDx:  7, labelDy: -4 },
  { name: 'Seoul',    lat: 37.6,  lon: 127.0, labelDx:  7, labelDy: -4 },
  { name: 'Sydney',   lat:-33.9,  lon: 151.2, labelDx:  7, labelDy:  4 },
  { name: 'Dubai',    lat: 25.2,  lon:  55.3, labelDx:  7, labelDy: -4 },
  { name: 'London',   lat: 51.5,  lon:   0.1, labelDx:  7, labelDy: -4 },
  { name: 'New York', lat: 40.7,  lon: -74.0, labelDx:  7, labelDy: -4 },
];

// Pairs of city names to connect
const CONNECTIONS: [string, string][] = [
  ['Hà Nội', 'Đà Nẵng'],
  ['Đà Nẵng', 'TP.HCM'],
  ['Hà Nội', 'TP.HCM'],
  ['Hà Nội', 'Bangkok'],
  ['TP.HCM', 'Singapore'],
  ['Hà Nội', 'Tokyo'],
  ['Hà Nội', 'Seoul'],
  ['TP.HCM', 'Sydney'],
  ['Bangkok', 'Dubai'],
  ['Dubai', 'London'],
  ['London', 'New York'],
  ['New York', 'Tokyo'],
  ['Singapore', 'Sydney'],
  ['Tokyo', 'Seoul'],
];

type Projected = {
  x: number;
  y: number;
  visible: boolean;
  depth: number; // 0–1, 1 = closest to viewer
};

function project(lat: number, lon: number, centerLon: number): Projected {
  const φ   = (lat * Math.PI) / 180;
  const Δλ  = ((lon - centerLon) * Math.PI) / 180;
  const cosφ = Math.cos(φ);
  const sinφ = Math.sin(φ);
  const cosΔλ = Math.cos(Δλ);
  const sinΔλ = Math.sin(Δλ);

  return {
    x: GCX + GR * cosφ * sinΔλ,
    y: GCY - GR * sinφ,
    visible: cosΔλ > -0.1,   // small margin so nodes fade near limb
    depth: cosφ * cosΔλ,
  };
}

function arcPath(p1: Projected, p2: Projected, midLat: number, midLon: number, centerLon: number): string {
  const pm = project(midLat, midLon, centerLon);
  // Pull control point slightly toward viewer (outward from globe center)
  const dx = pm.x - GCX;
  const dy = pm.y - GCY;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const cpx = pm.x + (dx / len) * 12;
  const cpy = pm.y + (dy / len) * 12;
  return `M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} Q ${cpx.toFixed(1)} ${cpy.toFixed(1)} ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
}

// Pre-build city lookup for connections
const cityMap = Object.fromEntries(CITIES.map(c => [c.name, c]));

// Latitude lines: parametric y and shrunk rx
const LAT_LINES = [-60, -30, 0, 30, 60];
// Longitude grid: draw as parametric curves at these Δλ offsets from center
const LON_OFFSETS = [-90, -60, -30, 0, 30, 60, 90];

export default function Hero() {
  const [centerLon, setCenterLon] = useState(INIT_LON);

  useEffect(() => {
    const onScroll = () => {
      // 10px scroll = 1° longitude rotation
      setCenterLon(INIT_LON - window.scrollY * 0.1);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const projected = Object.fromEntries(
    CITIES.map(c => [c.name, project(c.lat, c.lon, centerLon)])
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #072260 0%, #0B3185 45%, #CC4400 100%)' }}
    >
      {/* ── GLOBE SVG ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="globe-clip">
            <circle cx={GCX} cy={GCY} r={GR} />
          </clipPath>
        </defs>

        {/* Globe outer ring */}
        <circle cx={GCX} cy={GCY} r={GR} fill="none" stroke="white" strokeOpacity="0.15" strokeWidth="1.5" />

        {/* ── LATITUDE LINES (fixed) ── */}
        <g clipPath="url(#globe-clip)">
          {LAT_LINES.map(lat => {
            const φ = (lat * Math.PI) / 180;
            const ry = GR * Math.cos(φ);     // projected horizontal radius
            const cy2 = GCY - GR * Math.sin(φ);
            const op = lat === 0 ? 0.22 : 0.1;
            return (
              <ellipse
                key={lat}
                cx={GCX} cy={cy2}
                rx={GR} ry={ry * 0.18}       // flatten to look like lat line
                fill="none" stroke="white" strokeOpacity={op} strokeWidth={lat === 0 ? 1 : 0.7}
              />
            );
          })}

          {/* ── LONGITUDE LINES (dynamic — shifts with centerLon) ── */}
          {LON_OFFSETS.map(dLon => {
            const Δλ = (dLon * Math.PI) / 180;
            const cosΔλ = Math.cos(Δλ);
            if (cosΔλ < 0) return null; // behind globe
            const rx = GR * Math.abs(Math.sin(Δλ));
            const op = Math.abs(dLon) === 0 ? 0.2 : 0.09;
            // x-center shifts based on how far from center longitude
            const cx2 = GCX + GR * cosΔλ * Math.sin(Δλ);
            return (
              <ellipse
                key={dLon}
                cx={GCX} cy={GCY}
                rx={rx} ry={GR}
                fill="none" stroke="white" strokeOpacity={op} strokeWidth={0.8}
              />
            );
          })}
        </g>

        {/* ── CONNECTION ARCS ── */}
        {CONNECTIONS.map(([a, b]) => {
          const p1 = projected[a];
          const p2 = projected[b];
          if (!p1 || !p2) return null;
          if (!p1.visible && !p2.visible) return null;
          const c1 = cityMap[a];
          const c2 = cityMap[b];
          const midLat = (c1.lat + c2.lat) / 2;
          const midLon = (c1.lon + c2.lon) / 2;
          const isPrimary = c1.primary && c2.primary;
          const isViVietnam = c1.primary || c2.primary;
          const avgDepth = (p1.depth + p2.depth) / 2;
          const op = Math.max(0, Math.min(1, avgDepth)) * (isPrimary ? 0.7 : isViVietnam ? 0.5 : 0.2);
          if (op < 0.03) return null;
          const d = arcPath(p1, p2, midLat, midLon, centerLon);
          const isLong = Math.abs(c1.lon - c2.lon) > 60;
          return (
            <path
              key={`${a}-${b}`}
              d={d}
              fill="none"
              stroke={isViVietnam ? '#CC4400' : 'white'}
              strokeOpacity={op}
              strokeWidth={isPrimary ? 1.8 : isViVietnam ? 1.4 : 1}
              strokeDasharray={isLong ? '7 4' : undefined}
              clipPath="url(#globe-clip)"
            />
          );
        })}

        {/* ── CITY NODES ── */}
        {CITIES.map(city => {
          const p = projected[city.name];
          if (!p || !p.visible) return null;
          const depth = Math.max(0, p.depth);
          const r = city.primary ? 5.5 : 3.5;
          const fillOp = city.primary ? 0.95 : 0.55 + depth * 0.3;
          const textOp = city.primary ? 0.95 : 0.45 + depth * 0.3;
          return (
            <g key={city.name} clipPath="url(#globe-clip)">
              {/* Pulse ring for Vietnamese cities */}
              {city.primary && (
                <circle cx={p.x} cy={p.y} r={r} fill="none" stroke="#CC4400" strokeWidth="1.2">
                  <animate attributeName="r" values={`${r};${r + 14};${r}`} dur={city.name === 'Hà Nội' ? '2.4s' : '3s'} repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.8;0;0.8" dur={city.name === 'Hà Nội' ? '2.4s' : '3s'} repeatCount="indefinite" />
                </circle>
              )}
              <circle cx={p.x} cy={p.y} r={r} fill={city.primary ? '#CC4400' : 'white'} opacity={fillOp} />
              <text
                x={p.x + (city.labelDx ?? 7)}
                y={p.y + (city.labelDy ?? -4)}
                fill="white"
                fontSize={city.primary ? 11 : 9.5}
                fontFamily="Arial, sans-serif"
                fontWeight={city.primary ? '700' : '400'}
                opacity={textOp}
              >
                {city.name}
              </text>
            </g>
          );
        })}

        {/* ── BACKGROUND SCATTER DOTS ── */}
        {([
          [175,115,0.12],[305,75,0.09],[115,245,0.12],[425,175,0.09],
          [75,395,0.11],[195,505,0.09],[345,655,0.11],[115,725,0.09],
          [475,785,0.10],[600,685,0.09],[645,145,0.09],[550,420,0.08],
          [445,555,0.08],[275,345,0.09],[380,310,0.08],[560,220,0.08],
        ] as [number,number,number][]).map(([x,y,op],i) => (
          <circle key={i} cx={x} cy={y} r="1.5" fill="white" opacity={op} />
        ))}
        <line x1="175" y1="115" x2="305" y2="75"  stroke="white" strokeOpacity="0.05" strokeWidth="0.7"/>
        <line x1="115" y1="245" x2="175" y2="115" stroke="white" strokeOpacity="0.05" strokeWidth="0.7"/>
        <line x1="425" y1="175" x2="305" y2="75"  stroke="white" strokeOpacity="0.05" strokeWidth="0.7"/>
        <line x1="75"  y1="395" x2="115" y2="245" stroke="white" strokeOpacity="0.05" strokeWidth="0.7"/>
        <line x1="560" y1="220" x2="380" y2="310" stroke="white" strokeOpacity="0.05" strokeWidth="0.7"/>
        <line x1="645" y1="145" x2="560" y2="220" stroke="white" strokeOpacity="0.05" strokeWidth="0.7"/>
      </svg>

      {/* ── HERO CONTENT ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/20">
          <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
          Công ty TNHH Kết Nối Du Lịch Việt Nam Toàn Cầu
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Kết Nối Bạn Với
          <br />
          <span className="text-brand-orange">Thế Giới</span>
        </h1>

        <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
          Dịch vụ du lịch trọn gói, vé máy bay giá tốt và tổ chức sự kiện chuyên nghiệp —
          đưa bạn đến mọi điểm đến trên toàn cầu.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/dich-vu"
            className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-900/30"
          >
            Khám Phá Dịch Vụ
          </a>
          <a
            href="/lien-he"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            Liên Hệ Ngay
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-white/15">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-brand-orange">6+</div>
            <div className="text-white/60 text-sm mt-1">Năm kinh nghiệm</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-brand-orange">500+</div>
            <div className="text-white/60 text-sm mt-1">Khách hàng tin tưởng</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-brand-orange">50+</div>
            <div className="text-white/60 text-sm mt-1">Điểm đến toàn cầu</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
