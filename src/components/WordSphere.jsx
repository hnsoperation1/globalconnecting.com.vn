"use client";

import { useEffect, useRef } from "react";

/**
 * WordSphere
 * Hiệu ứng quả cầu 3D gồm các dòng chữ xoay quanh, dùng thuần CSS 3D transform (không cần Three.js).
 *
 * Cách dùng:
 * <WordSphere
 *   rings={[
 *     { lat: 60, words: ["VIETINBANK", "SACOMBANK"] },
 *     { lat: 0,  words: ["GRAB", "SHOPEE", "TIKI"] },
 *     { lat: -60, words: ["EMIRATES", "PETROVIETNAM"] },
 *   ]}
 *   size={520}
 *   radius={220}
 *   bgColor="#2A75B2"
 *   textColor="#EF7E22"
 * />
 */
export default function WordSphere({
  rings = [],
  size = 520,
  radius = 220,
  bgColor = "#2A75B2",
  textColor = "#EF7E22",
  fontSize = 18,
  fontWeight = 900,
  fontFamily = "Arial, sans-serif",
  autoSpinSpeed = 0.15,
  letterGap = 2,
  className = "",
  style = {},
}) {
  const stageRef = useRef(null);
  const globeRef = useRef(null);

  useEffect(() => {
    const globe = globeRef.current;
    const stage = stageRef.current;
    if (!globe || !stage) return;

    globe.innerHTML = "";

    const R = radius;
    const degPerPx = 180 / (Math.PI * R);

    // Đo width thực tế từng ký tự bằng Canvas để tránh lỗi khoảng cách
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;

    rings.forEach((ring, ringIdx) => {
      const lat = ring.lat;
      const latCos = Math.max(Math.cos((lat * Math.PI) / 180), 0.08);

      const wordSep = "   ";

      // Tính tổng width toàn bộ đơn vị (tất cả từ + separator)
      const sepWidthPx = [...wordSep].reduce((a, ch) => a + ctx.measureText(ch).width + letterGap, 0);
      const wordWidths = ring.words.map((w) =>
        [...w].reduce((a, ch) => a + ctx.measureText(ch).width + letterGap, 0)
      );
      const unitWidthPx = wordWidths.reduce((a, b) => a + b, 0) + sepWidthPx * ring.words.length;

      const unitAngleDeg = (unitWidthPx * degPerPx) / latCos;
      const repeats = Math.max(1, Math.round(360 / unitAngleDeg));
      const actualUnitAngleDeg = 360 / repeats;
      const scale = actualUnitAngleDeg / unitWidthPx; // deg per px

      let cumAngle = ring.startAngle ?? 0;

      const placeChar = (ch, wordKey) => {
        const w = ctx.measureText(ch).width + letterGap;
        const span = document.createElement("span");
        span.textContent = ch;
        if (wordKey !== null) span.dataset.word = wordKey;
        Object.assign(span.style, {
          position: "absolute",
          left: "50%",
          top: "50%",
          fontWeight: String(fontWeight),
          fontFamily,
          fontSize: `${fontSize}px`,
          color: textColor,
          whiteSpace: "pre",
          transformOrigin: "0 0",
          transform: `rotateY(${cumAngle}deg) rotateX(${-lat}deg) translateZ(${R}px)`,
          backfaceVisibility: "hidden",
          cursor: wordKey !== null ? "pointer" : "default",
          transition: "color 0.2s, text-shadow 0.2s",
        });
        globe.appendChild(span);
        cumAngle += w * scale;
      };

      for (let r = 0; r < repeats; r++) {
        ring.words.forEach((word, wordIdx) => {
          const wordKey = `${ringIdx}-${wordIdx}`;
          [...word].forEach((ch) => placeChar(ch, wordKey));
          [...wordSep].forEach((ch) => placeChar(ch, null));
        });
      }
    });

    // ── Hover: highlight từ được trỏ tới ──
    let hoveredWord = null;

    function setHighlight(wordKey, on) {
      globe.querySelectorAll(`[data-word="${wordKey}"]`).forEach((el) => {
        el.style.color = on ? "#ffffff" : textColor;
        el.style.textShadow = on
          ? "0 0 8px rgba(255,255,255,0.95), 0 0 20px rgba(255,255,255,0.6)"
          : "";
      });
    }

    function onOver(e) {
      const key = e.target.dataset?.word;
      if (!key || key === hoveredWord) return;
      if (hoveredWord) setHighlight(hoveredWord, false);
      hoveredWord = key;
      setHighlight(key, true);
    }

    function onOut(e) {
      if (!hoveredWord) return;
      if (e.relatedTarget?.dataset?.word === hoveredWord) return;
      setHighlight(hoveredWord, false);
      hoveredWord = null;
    }

    globe.addEventListener("pointerover", onOver);
    globe.addEventListener("pointerout", onOut);

    const INIT_ROT_X = -8;
    let rotX = INIT_ROT_X;
    let rotY = 0;
    let dragging = false;
    let autoSpin = true;
    let lastX = 0;
    let lastY = 0;
    let lastInteraction = 0;
    let rafId;

    function render() {
      globe.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    }
    render();

    function onPointerDown(e) {
      dragging = true;
      autoSpin = false;
      lastInteraction = Date.now();
      lastX = e.clientX;
      lastY = e.clientY;
      stage.style.cursor = "grabbing";
    }
    function onPointerUp() {
      dragging = false;
      lastInteraction = Date.now();
      stage.style.cursor = "grab";
    }
    function onPointerMove(e) {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      rotY += dx * 0.4;
      rotX = Math.max(-90, Math.min(90, rotX - dy * 0.4));
      lastX = e.clientX;
      lastY = e.clientY;
      lastInteraction = Date.now();
      render();
    }
    function tick() {
      if (autoSpin) {
        // Khi đang tự quay: dần dần trả rotX về vị trí mặc định
        if (Math.abs(rotX - INIT_ROT_X) > 0.05) {
          rotX += (INIT_ROT_X - rotX) * 0.04;
        } else {
          rotX = INIT_ROT_X;
        }
        rotY += autoSpinSpeed;
        render();
      } else if (!dragging && Date.now() - lastInteraction > 3000) {
        // 3s không tương tác → tiếp tục xoay từ vị trí hiện tại
        autoSpin = true;
      }
      rafId = requestAnimationFrame(tick);
    }

    stage.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointermove", onPointerMove);
    tick();

    return () => {
      cancelAnimationFrame(rafId);
      stage.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointermove", onPointerMove);
      globe.removeEventListener("pointerover", onOver);
      globe.removeEventListener("pointerout", onOut);
    };
  }, [
    rings,
    radius,
    textColor,
    fontSize,
    fontWeight,
    fontFamily,
    autoSpinSpeed,
    letterGap,
  ]);

  return (
    <div
      className={className}
      style={{
        background: bgColor,
        borderRadius: 12,
        padding: "2rem 0",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        ...style,
      }}
    >
      <div
        ref={stageRef}
        style={{
          width: size,
          height: size,
          perspective: 700,
          cursor: "grab",
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      >
        <div
          ref={globeRef}
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
          }}
        />
      </div>
    </div>
  );
}
