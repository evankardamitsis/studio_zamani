"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

type GalleryImage = { src: string; alt: string };

export function FadeGallery({ images }: { images: GalleryImage[] }) {
  const AUTOPLAY_MS = 5000;
  const FADE_MS = 700;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [layer0Index, setLayer0Index] = useState(0);
  const [layer1Index, setLayer1Index] = useState(0);
  const [layer0Opacity, setLayer0Opacity] = useState(1);
  const [layer1Opacity, setLayer1Opacity] = useState(0);
  const [activeLayer, setActiveLayer] = useState<0 | 1>(0);
  const [isHovering, setIsHovering] = useState(false);
  const [showCursorArrow, setShowCursorArrow] = useState(false);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [cursorDirection, setCursorDirection] = useState<"left" | "right">("right");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeStartFrameRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelCooldownRef = useRef(false);
  const loadedImagesRef = useRef<Set<number>>(new Set([0]));
  const pendingTargetRef = useRef<number | null>(null);
  const visibleIndex = activeLayer === 0 ? layer0Index : layer1Index;

  // ── Lightbox keyboard ─────────────────────────────────────────────────────
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i)), []);
  const nextImage = useCallback(() => setLightboxIndex((i) => (i !== null && i < images.length - 1 ? i + 1 : i)), [images.length]);

  const startTransition = useCallback(
    (next: number) => {
      const targetLayer = activeLayer === 0 ? 1 : 0;
      if (targetLayer === 0) {
        setLayer0Index(next);
        setLayer0Opacity(0);
      } else {
        setLayer1Index(next);
        setLayer1Opacity(0);
      }
      setIsTransitioning(true);

      if (fadeStartFrameRef.current) cancelAnimationFrame(fadeStartFrameRef.current);
      fadeStartFrameRef.current = requestAnimationFrame(() => {
        if (targetLayer === 0) {
          setLayer0Opacity(1);
          setLayer1Opacity(0);
        } else {
          setLayer1Opacity(1);
          setLayer0Opacity(0);
        }
      });

      if (transitionTimer.current) clearTimeout(transitionTimer.current);
      transitionTimer.current = setTimeout(() => {
        setActiveLayer(targetLayer);
        setIsTransitioning(false);
      }, FADE_MS);
    },
    [FADE_MS, activeLayer]
  );

  const goToImage = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      const next = (index + images.length) % images.length;
      if (next === visibleIndex) return;

      if (loadedImagesRef.current.has(next)) {
        startTransition(next);
        return;
      }

      pendingTargetRef.current = next;
      const preload = new window.Image();
      preload.src = images[next].src;
      preload.onload = () => {
        loadedImagesRef.current.add(next);
        if (pendingTargetRef.current === next) {
          startTransition(next);
        }
      };
      preload.onerror = () => {
        if (pendingTargetRef.current === next) {
          startTransition(next);
        }
      };
    },
    [images, visibleIndex, isTransitioning, startTransition]
  );

  const navigateDesktop = useCallback(
    (dir: "left" | "right") => {
      goToImage(visibleIndex + (dir === "left" ? -1 : 1));
    },
    [visibleIndex, goToImage]
  );

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

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1280);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile || lightboxIndex !== null || isHovering) return;

    const intervalId = setInterval(() => {
      goToImage(visibleIndex + 1);
    }, AUTOPLAY_MS);

    return () => clearInterval(intervalId);
  }, [visibleIndex, goToImage, isHovering, isMobile, lightboxIndex]);

  useEffect(() => {
    return () => {
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
      if (fadeStartFrameRef.current) cancelAnimationFrame(fadeStartFrameRef.current);
      pendingTargetRef.current = null;
    };
  }, []);

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
      {/* ── Desktop: fade carousel ───────────────────────────────────────────── */}
      <div
        ref={containerRef}
        className="group relative h-full overflow-hidden bg-[#f8f8f2] cursor-none"
        onMouseEnter={() => {
          setIsHovering(true);
          setShowCursorArrow(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          setShowCursorArrow(false);
        }}
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
          if (wheelCooldownRef.current || isTransitioning) return;
          const primaryDelta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
          if (Math.abs(primaryDelta) < 4) return;
          navigateDesktop(primaryDelta < 0 ? "left" : "right");
          wheelCooldownRef.current = true;
          window.setTimeout(() => {
            wheelCooldownRef.current = false;
          }, 220);
        }}
      >
        <div
          className="absolute inset-0 z-0 flex items-center justify-end transition-opacity ease-in-out will-change-opacity"
          style={{ opacity: layer0Opacity, transitionDuration: `${FADE_MS}ms` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[layer0Index].src}
            alt={images[layer0Index].alt}
            className="max-h-full max-w-full h-auto w-auto object-contain"
            draggable={false}
          />
        </div>

        <button
          type="button"
          className="absolute inset-0 z-20 cursor-none"
          aria-label="Open image"
          onClick={() => setLightboxIndex(visibleIndex)}
        />

        <div
          className="absolute inset-0 z-10 flex items-center justify-end transition-opacity ease-in-out will-change-opacity"
          style={{ opacity: layer1Opacity, transitionDuration: `${FADE_MS}ms` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[layer1Index].src}
            alt={images[layer1Index].alt}
            className="max-h-full max-w-full h-auto w-auto object-contain"
            draggable={false}
          />
        </div>

        {showCursorArrow && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              navigateDesktop(cursorDirection);
            }}
            aria-label={cursorDirection === "left" ? "Previous" : "Next"}
            className="absolute z-30 flex items-center justify-center text-white mix-blend-difference pointer-events-auto cursor-none transition-opacity duration-300"
            style={{
              left: cursorX,
              top: cursorY,
              transform: "translate(-50%, -50%)",
              opacity: isTransitioning ? 0.35 : 1,
            }}
            disabled={isTransitioning}
          >
            {cursorDirection === "left" ? (
              <svg width="52" height="18" viewBox="0 0 52 18" fill="none">
                <path d="M50 9H3M3 9L12 2.5M3 9L12 15.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="52" height="18" viewBox="0 0 52 18" fill="none">
                <path d="M2 9H49M49 9L40 2.5M49 9L40 15.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
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
