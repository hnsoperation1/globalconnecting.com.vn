'use client';
import { useEffect, useState } from 'react';

// Globe display constants
const GCX      = 1090;  // center x in viewBox
const GCY      = 450;   // center y in viewBox
const GR       = 320;   // radius
const INIT_LON = 122;   // initial center longitude (eastern Asia → Vietnam bottom-left)
const INIT_LAT = 30;    // tilt: viewer is above 30°N → Vietnam appears lower-left

type City = {
  name: string;
  lat: number;
  lon: number;
  primary?: boolean;  // Vietnamese cities
  lx?: number;        // label offset x
  ly?: number;        // label offset y
};

const CITIES: City[] = [
  // Việt Nam
  { name: 'Hà Nội',       lat:  21.0, lon: 105.8, primary: true, lx:  8, ly: -6 },
  { name: 'Đà Nẵng',     lat:  16.0, lon: 108.2, primary: true, lx:  8, ly:  4 },
  { name: 'TP.HCM',      lat:  10.8, lon: 106.7, primary: true, lx:  8, ly:  4 },
  // Đông Nam Á
  { name: 'Bangkok',     lat:  13.8, lon: 100.5,  lx:  7, ly: -5 },
  { name: 'Kuala Lumpur',lat:   3.1, lon: 101.7,  lx:  7, ly: -5 },
  { name: 'Singapore',   lat:   1.3, lon: 103.8,  lx:  7, ly:  4 },
  { name: 'Manila',      lat:  14.6, lon: 121.0,  lx:  7, ly: -5 },
  { name: 'Bali',        lat:  -8.7, lon: 115.2,  lx:  7, ly:  4 },
  // Đông Bắc Á
  { name: 'Hồng Kông',   lat:  22.3, lon: 114.2,  lx:  7, ly: -5 },
  { name: 'Đài Bắc',    lat:  25.0, lon: 121.5,  lx:  7, ly: -5 },
  { name: 'Thượng Hải',  lat:  31.2, lon: 121.5,  lx:  7, ly:  4 },
  { name: 'Bắc Kinh',   lat:  39.9, lon: 116.4,  lx:  7, ly: -5 },
  { name: 'Seoul',       lat:  37.6, lon: 127.0,  lx:  7, ly: -5 },
  { name: 'Osaka',       lat:  34.7, lon: 135.5,  lx:  7, ly:  4 },
  { name: 'Tokyo',       lat:  35.7, lon: 139.7,  lx:  7, ly: -5 },
  // Châu Đại Dương
  { name: 'Sydney',      lat: -33.9, lon: 151.2,  lx:  7, ly:  4 },
  // Trung Đông
  { name: 'Dubai',       lat:  25.2, lon:  55.3,  lx:  7, ly: -5 },
  { name: 'Doha',        lat:  25.3, lon:  51.5,  lx:  7, ly:  4 },
  // Nam Á
  { name: 'New Delhi',   lat:  28.6, lon:  77.2,  lx:  7, ly: -5 },
  // Châu Âu
  { name: 'Istanbul',    lat:  41.0, lon:  29.0,  lx:  7, ly: -5 },
  { name: 'Matxcơva',   lat:  55.8, lon:  37.6,  lx:  7, ly: -5 },
  { name: 'London',      lat:  51.5, lon:   0.1,  lx:  7, ly: -5 },
  { name: 'Paris',       lat:  48.9, lon:   2.3,  lx:  7, ly:  4 },
  // Châu Mỹ
  { name: 'New York',    lat:  40.7, lon: -74.0,  lx:  7, ly: -5 },
];

const CONNECTIONS: [string, string][] = [
  // Nội địa
  ['Hà Nội',  'Đà Nẵng'],
  ['Đà Nẵng', 'TP.HCM'],
  ['Hà Nội',  'TP.HCM'],
  // Hà Nội → quốc tế
  ['Hà Nội', 'Bangkok'],     ['Hà Nội', 'Kuala Lumpur'],
  ['Hà Nội', 'Singapore'],   ['Hà Nội', 'Manila'],
  ['Hà Nội', 'Hồng Kông'],  ['Hà Nội', 'Đài Bắc'],
  ['Hà Nội', 'Thượng Hải'], ['Hà Nội', 'Bắc Kinh'],
  ['Hà Nội', 'Seoul'],       ['Hà Nội', 'Osaka'],
  ['Hà Nội', 'Tokyo'],       ['Hà Nội', 'Sydney'],
  ['Hà Nội', 'Dubai'],       ['Hà Nội', 'Doha'],
  ['Hà Nội', 'New Delhi'],   ['Hà Nội', 'Istanbul'],
  ['Hà Nội', 'Matxcơva'],   ['Hà Nội', 'London'],
  ['Hà Nội', 'Paris'],       ['Hà Nội', 'New York'],
  // TP.HCM → quốc tế
  ['TP.HCM', 'Bangkok'],     ['TP.HCM', 'Kuala Lumpur'],
  ['TP.HCM', 'Singapore'],   ['TP.HCM', 'Bali'],
  ['TP.HCM', 'Manila'],      ['TP.HCM', 'Hồng Kông'],
  ['TP.HCM', 'Đài Bắc'],   ['TP.HCM', 'Thượng Hải'],
  ['TP.HCM', 'Seoul'],       ['TP.HCM', 'Osaka'],
  ['TP.HCM', 'Tokyo'],       ['TP.HCM', 'Sydney'],
  ['TP.HCM', 'Dubai'],       ['TP.HCM', 'Doha'],
  ['TP.HCM', 'New Delhi'],   ['TP.HCM', 'Paris'],
  // Đà Nẵng → quốc tế
  ['Đà Nẵng', 'Bangkok'],   ['Đà Nẵng', 'Singapore'],
  ['Đà Nẵng', 'Kuala Lumpur'], ['Đà Nẵng', 'Seoul'],
  ['Đà Nẵng', 'Tokyo'],     ['Đà Nẵng', 'Hồng Kông'],
];

// ── Orthographic projection ─────────────────────────────────────────────────
// Projects (lat, lon) onto 2D screen given viewer center (cLat, cLon).
// ROLL_DEG: axial tilt — negative = CCW → North Pole leans west, South leans east.
const ROLL_DEG = -12;
const ROLL_RAD = (ROLL_DEG * Math.PI) / 180;
const cosRoll  = Math.cos(ROLL_RAD);
const sinRoll  = Math.sin(ROLL_RAD);

type P2D = { x: number; y: number; visible: boolean; depth: number };

function project(lat: number, lon: number, cLat: number, cLon: number): P2D {
  const phi   = (lat  * Math.PI) / 180;
  const phi0  = (cLat * Math.PI) / 180;
  const dLon  = ((lon - cLon) * Math.PI) / 180;
  const sinPhi  = Math.sin(phi),  cosPhi  = Math.cos(phi);
  const sinPhi0 = Math.sin(phi0), cosPhi0 = Math.cos(phi0);
  const sinDL   = Math.sin(dLon), cosDL   = Math.cos(dLon);
  const depth = sinPhi * sinPhi0 + cosPhi * cosPhi0 * cosDL;
  // Raw projected position
  const rx = GR * cosPhi * sinDL;
  const ry = -GR * (sinPhi * cosPhi0 - cosPhi * cosDL * sinPhi0);
  // Apply axial roll (2D rotation around globe centre)
  return {
    x: GCX + rx * cosRoll - ry * sinRoll,
    y: GCY + rx * sinRoll + ry * cosRoll,
    visible: depth > 0,
    depth: Math.max(0, depth),
  };
}

// Sample a latitude circle as an SVG path
function latPath(lat: number, cLat: number, cLon: number): string {
  const pts: string[] = [];
  for (let i = 0; i <= 180; i++) {
    const lon = cLon - 180 + (360 * i) / 180;
    const p = project(lat, lon, cLat, cLon);
    if (p.visible) pts.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
  }
  if (pts.length < 2) return '';
  return 'M ' + pts.join(' L ');
}

// Sample a longitude line as an SVG path
function lonPath(lon: number, cLat: number, cLon: number): string {
  const pts: string[] = [];
  for (let i = 0; i <= 90; i++) {
    const lat = -90 + (180 * i) / 90;
    const p = project(lat, lon, cLat, cLon);
    if (p.visible) pts.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
  }
  if (pts.length < 2) return '';
  return 'M ' + pts.join(' L ');
}

// Sample a great-circle arc between two geo-points as an SVG path
function arcPath(
  lat1: number, lon1: number,
  lat2: number, lon2: number,
  cLat: number, cLon: number,
): string {
  // SLERP in Cartesian then re-project
  const toXYZ = (la: number, lo: number): [number, number, number] => {
    const φ = (la * Math.PI) / 180, λ = (lo * Math.PI) / 180;
    return [Math.cos(φ) * Math.cos(λ), Math.cos(φ) * Math.sin(λ), Math.sin(φ)];
  };
  const [x1, y1, z1] = toXYZ(lat1, lon1);
  const [x2, y2, z2] = toXYZ(lat2, lon2);
  const dot   = Math.max(-1, Math.min(1, x1*x2 + y1*y2 + z1*z2));
  const omega = Math.acos(dot);
  const sinO  = Math.sin(omega);

  const N = 40;
  let path = '', inSeg = false;
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    let sx, sy, sz;
    if (sinO < 0.0001) { sx = x1; sy = y1; sz = z1; }
    else {
      const a = Math.sin((1 - t) * omega) / sinO;
      const b = Math.sin(t * omega) / sinO;
      sx = a*x1 + b*x2; sy = a*y1 + b*y2; sz = a*z1 + b*z2;
    }
    const sLat = (Math.asin(sz) * 180) / Math.PI;
    const sLon = (Math.atan2(sy, sx) * 180) / Math.PI;
    const p = project(sLat, sLon, cLat, cLon);
    if (p.visible) {
      path += inSeg ? ` L ${p.x.toFixed(1)},${p.y.toFixed(1)}` : `M ${p.x.toFixed(1)},${p.y.toFixed(1)}`;
      inSeg = true;
    } else {
      inSeg = false;
    }
  }
  return path;
}

const cityMap = Object.fromEntries(CITIES.map(c => [c.name, c]));

// Latitude grid lines
const LAT_GRID = [-60, -30, 0, 30, 60];
// Fixed world meridians every 30° — they rotate as cLon changes
const LON_GRID = [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150, 180];

export default function Hero() {
  const [cLon, setCLon] = useState(INIT_LON);
  const cLat = INIT_LAT; // latitude tilt stays fixed

  useEffect(() => {
    const onScroll = () => setCLon(INIT_LON - window.scrollY * 0.12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const proj = Object.fromEntries(CITIES.map(c => [c.name, project(c.lat, c.lon, cLat, cLon)]));

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
          <clipPath id="gc">
            <circle cx={GCX} cy={GCY} r={GR} />
          </clipPath>
        </defs>

        {/* Outer ring (fixed) */}
        <circle cx={GCX} cy={GCY} r={GR} fill="none" stroke="white" strokeOpacity="0.15" strokeWidth="1.5" />

        {/* ── GRID LINES (clipped) ── */}
        <g clipPath="url(#gc)">
          {LAT_GRID.map(lat => {
            const d = latPath(lat, cLat, cLon);
            if (!d) return null;
            return (
              <path key={`lat${lat}`} d={d} fill="none"
                stroke="white" strokeOpacity={lat === 0 ? 0.22 : 0.09} strokeWidth={lat === 0 ? 1 : 0.7} />
            );
          })}
          {LON_GRID.map(lon => {
            const d = lonPath(lon, cLat, cLon);
            if (!d) return null;
            return (
              <path key={`lon${lon}`} d={d} fill="none"
                stroke="white" strokeOpacity="0.09" strokeWidth="0.7" />
            );
          })}
        </g>

        {/* ── CONNECTION ARCS ── */}
        {CONNECTIONS.map(([a, b]) => {
          const pa = proj[a], pb = proj[b];
          if (!pa?.visible && !pb?.visible) return null;
          const ca = cityMap[a], cb = cityMap[b];
          const avgDepth = ((pa?.depth ?? 0) + (pb?.depth ?? 0)) / 2;
          const isDomestic = ca.primary && cb.primary;
          const isVN       = ca.primary || cb.primary;
          const op = isDomestic ? 0.75 : isVN ? avgDepth * 0.55 : avgDepth * 0.18;
          if (op < 0.04) return null;
          const d = arcPath(ca.lat, ca.lon, cb.lat, cb.lon, cLat, cLon);
          if (!d) return null;
          return (
            <path key={`${a}-${b}`} d={d} fill="none"
              stroke={isVN ? '#CC4400' : 'white'}
              strokeOpacity={op}
              strokeWidth={isDomestic ? 2 : isVN ? 1.4 : 1}
              clipPath="url(#gc)"
            />
          );
        })}

        {/* ── CITY NODES ── */}
        {CITIES.map(city => {
          const p = proj[city.name];
          if (!p?.visible) return null;
          const r   = city.primary ? 5.5 : 3.5;
          const fOp = city.primary ? 0.95 : 0.45 + p.depth * 0.45;
          const tOp = city.primary ? 0.95 : 0.35 + p.depth * 0.5;
          return (
            <g key={city.name} clipPath="url(#gc)">
              {city.primary && (
                <circle cx={p.x} cy={p.y} r={r} fill="none" stroke="#CC4400" strokeWidth="1.2">
                  <animate attributeName="r"
                    values={`${r};${r + 14};${r}`}
                    dur={city.name === 'Hà Nội' ? '2.4s' : '3.1s'}
                    repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity"
                    values="0.8;0;0.8"
                    dur={city.name === 'Hà Nội' ? '2.4s' : '3.1s'}
                    repeatCount="indefinite" />
                </circle>
              )}
              <circle cx={p.x} cy={p.y} r={r}
                fill={city.primary ? '#CC4400' : 'white'} opacity={fOp} />
              <text
                x={p.x + (city.lx ?? 7)} y={p.y + (city.ly ?? -4)}
                fill="white"
                fontSize={city.primary ? 11 : 9.5}
                fontFamily="Arial, sans-serif"
                fontWeight={city.primary ? '700' : '400'}
                opacity={tOp}
              >
                {city.name}
              </text>
            </g>
          );
        })}

        {/* ── SCATTER DOTS (background depth) ── */}
        {([
          [175,115,0.11],[305,75,0.09],[115,245,0.11],[75,395,0.10],
          [195,505,0.09],[345,655,0.10],[475,785,0.09],[600,685,0.08],
          [645,145,0.09],[550,420,0.07],[445,555,0.08],[275,345,0.09],
          [380,310,0.07],[560,220,0.08],[230,170,0.08],[490,640,0.07],
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
          <a href="/dich-vu"
            className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-900/30">
            Khám Phá Dịch Vụ
          </a>
          <a href="/lien-he"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5">
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
