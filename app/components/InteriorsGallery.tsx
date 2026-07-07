"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

const TOTAL = 40;
const images = Array.from({ length: TOTAL }, (_, i) => {
  const n = String(i + 1).padStart(3, "0");
  return { src: `/images/interior/${n}ManiaLondon.avif`, alt: "Studio Zamani interiors" };
});

const GAP = 4;
const SIDEBAR = 166;
const PEEK = 72;
const MIN_SLOT_WIDTH = `calc(100vw - ${SIDEBAR}px - ${PEEK}px)`;

const AUTOPLAY_MS = 5000;

export function InteriorsGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hovering = useRef(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Each slide is sized to its own image's natural aspect ratio, so paging
  // targets are computed from measured DOM offsets rather than a fixed step —
  // this keeps every settled slide's left edge flush against the sidebar,
  // whatever its width. The scroller itself is confined to the area right of
  // the sidebar (no bleed-under trick), so nothing ever renders behind it,
  // even mid-scroll.
  const getSlideEls = () => (scrollRef.current ? (Array.from(scrollRef.current.children) as HTMLDivElement[]) : []);

  const goTo = useCallback((idx: number) => {
    const slides = getSlideEls();
    if (!scrollRef.current || slides.length === 0) return;
    const clamped = Math.min(slides.length - 1, Math.max(0, idx));
    const target = slides[clamped].offsetLeft;
    scrollRef.current.scrollTo({ left: target, behavior: "smooth" });
    setCurrent(clamped);
  }, []);

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

  // ── Settle to nearest slide (after drag or trackpad scroll) ────────────────
  const settle = useCallback(() => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const slides = getSlideEls();
    let nearest = 0;
    let nearestDist = Infinity;
    slides.forEach((el, i) => {
      const dist = Math.abs(el.offsetLeft - scrollLeft);
      if (dist < nearestDist) { nearestDist = dist; nearest = i; }
    });
    goTo(nearest);
  }, [goTo]);

  const onPointerUp = () => {
    dragging.current = false;
    settle();
  };

  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onScroll = () => {
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      if (!dragging.current) settle();
    }, 150);
  };

  // ── Arrow navigation ──────────────────────────────────────────────────────
  const scroll = (dir: "left" | "right") => goTo(current + (dir === "left" ? -1 : 1));

  // ── Autoplay ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (isMobile || lightboxIndex !== null) return;
    const id = setInterval(() => {
      if (dragging.current || hovering.current) return;
      goTo((current + 1) % images.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [isMobile, lightboxIndex, current, goTo]);

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
              <Image src={images[lightboxIndex].src} alt={images[lightboxIndex].alt} width={1600} height={1600} className="max-h-[88vh] w-auto object-contain" priority />
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
      {/* ── Desktop: full-height, right-running horizontal carousel ─────────── */}
      <div
        className="relative h-screen overflow-hidden"
        onMouseEnter={() => { hovering.current = true; }}
        onMouseLeave={() => { hovering.current = false; }}
      >
        <div
          ref={scrollRef}
          className="flex h-full overflow-x-auto scrollbar-hide touch-pan-x"
          style={{
            scrollbarWidth: "none",
            gap: GAP,
            cursor: "grab",
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onScroll={onScroll}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 h-full select-none flex justify-end"
              style={{ minWidth: MIN_SLOT_WIDTH }}
              onClick={() => { if (!didDrag.current) setLightboxIndex(i); }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} className="h-full w-auto object-cover pointer-events-none" draggable={false} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("left")}
          aria-label="Previous"
          className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full text-white select-none transition-colors"
          style={{ left: 16, background: "rgba(13,13,13,0.35)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(13,13,13,0.6)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(13,13,13,0.35)"; }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Next"
          className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full text-white select-none transition-colors"
          style={{ background: "rgba(13,13,13,0.35)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(13,13,13,0.6)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(13,13,13,0.35)"; }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
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
              width={1600}
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
