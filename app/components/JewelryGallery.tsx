"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

const images = [
  { src: "/images/Mania_1.avif", alt: "Studio Zamani jewelry" },
  { src: "/images/Mania_2.avif", alt: "Studio Zamani jewelry" },
  { src: "/images/Mania_3.avif", alt: "Studio Zamani jewelry" },
  { src: "/images/Mania_4.avif", alt: "Studio Zamani jewelry" },
  { src: "/images/Mania_5.avif", alt: "Studio Zamani jewelry" },
  { src: "/images/Mania_8.avif", alt: "Studio Zamani jewelry" },
  { src: "/images/Mania_9.avif", alt: "Studio Zamani jewelry" },
  { src: "/images/Mania_12.avif", alt: "Studio Zamani jewelry" },
  { src: "/images/Mania_14.avif", alt: "Studio Zamani jewelry" },
];

const OFFSETS = [0, 145, 30];
const GAP = 24;
const SIDEBAR = 166;

export function JewelryGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showCursorArrow, setShowCursorArrow] = useState(false);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [cursorDirection, setCursorDirection] = useState<"left" | "right">("right");
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const colWidth = isMobile
    ? `calc(100vw - 40px)`
    : `calc(100vw / 3 - ${GAP}px)`;

  // ── Drag-to-scroll ────────────────────────────────────────────────────────
  const dragging = useRef(false);
  const didDrag = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!scrollRef.current) return;
    dragging.current = true;
    didDrag.current = false;
    startX.current = e.clientX;
    scrollStart.current = scrollRef.current.scrollLeft;
    scrollRef.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || !scrollRef.current) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 4) didDrag.current = true;
    scrollRef.current.scrollLeft = scrollStart.current - dx;
  };

  const onPointerUp = () => { dragging.current = false; };

  // ── Arrow navigation ──────────────────────────────────────────────────────
  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const step = isMobile ? window.innerWidth - 40 : window.innerWidth / 3;
    scrollRef.current.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  // ── Lightbox keyboard ─────────────────────────────────────────────────────
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i)), []);
  const nextImage = useCallback(() => setLightboxIndex((i) => (i !== null && i < images.length - 1 ? i + 1 : i)), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

  if (isMobile) {
    return (
      <>
        {/* ── Mobile single-column grid ────────────────────────────────── */}
        <div className="px-4 pt-2 pb-20">
          <div className="flex flex-col gap-3">
            {images.map((img, i) => (
              <div key={i} className="select-none" onClick={() => setLightboxIndex(i)}>
                <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" draggable={false} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Lightbox ─────────────────────────────────────────────────── */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0d0d]/95" onClick={closeLightbox}>
            <button onClick={closeLightbox} aria-label="Close" className="absolute top-7 right-6 text-white/50 hover:text-white text-2xl leading-none transition-colors">×</button>
            <div className="max-h-[88vh] max-w-[90vw] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <Image src={images[lightboxIndex].src} alt={images[lightboxIndex].alt} width={1200} height={1600} className="max-h-[88vh] w-auto object-contain" priority />
            </div>
            {lightboxIndex > 0 && <button onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Previous image" className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-2xl transition-colors px-2 py-4">←</button>}
            {lightboxIndex < images.length - 1 && <button onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Next image" className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-2xl transition-colors px-2 py-4">→</button>}
            <p className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/40 text-[10px] tracking-[0.2em] uppercase">{String(lightboxIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</p>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {/* ── Desktop Carousel ──────────────────────────────────────────────── */}
      <div
        ref={containerRef}
        className="relative h-full overflow-hidden"
        style={{ marginLeft: -SIDEBAR, width: "100vw" }}
        onMouseEnter={() => setShowCursorArrow(true)}
        onMouseLeave={() => setShowCursorArrow(false)}
        onMouseMove={(e) => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          setCursorX(x);
          setCursorY(y);
          setCursorDirection(x < rect.width / 2 ? "left" : "right");
        }}
        onWheel={(e) => {
          e.preventDefault();
          if (!scrollRef.current) return;
          const primaryDelta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
          scrollRef.current.scrollBy({
            left: primaryDelta,
            behavior: "smooth",
          });
        }}
      >
        <div
          ref={scrollRef}
          className="flex h-full overflow-x-auto scrollbar-hide touch-pan-x"
          style={{
            scrollbarWidth: "none",
            gap: GAP,
            cursor: "grab",
            paddingLeft: SIDEBAR,
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 select-none"
              style={{ width: colWidth, marginTop: OFFSETS[i % 3] }}
              onClick={() => { if (!didDrag.current) setLightboxIndex(i); }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover pointer-events-none lg:max-h-[calc(100vh-260px)]"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {showCursorArrow && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              scroll(cursorDirection);
            }}
            aria-label={cursorDirection === "left" ? "Previous" : "Next"}
            className="absolute z-30 flex h-20 w-20 items-center justify-center text-white mix-blend-difference pointer-events-auto"
            style={{
              left: cursorX,
              top: cursorY,
              transform: "translate(-50%, -50%)",
            }}
          >
            {cursorDirection === "left" ? (
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        )}
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0d0d]/95"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-7 right-6 text-white/50 hover:text-white text-2xl leading-none transition-colors"
          >
            ×
          </button>

          <div
            className="max-h-[88vh] max-w-[90vw] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              width={1200}
              height={1600}
              className="max-h-[88vh] w-auto object-contain"
              priority
            />
          </div>

          {lightboxIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-2xl transition-colors px-2 py-4"
            >
              ←
            </button>
          )}
          {lightboxIndex < images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-2xl transition-colors px-2 py-4"
            >
              →
            </button>
          )}

          <p className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/40 text-[10px] tracking-[0.2em] uppercase">
            {String(lightboxIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </p>
        </div>
      )}
    </>
  );
}
