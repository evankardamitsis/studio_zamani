"use client";

import { FadeGallery } from "./FadeGallery";

const TOTAL = 14;
const INTERIOR_DIR = "/images/zamani final imgs interior";
const images = Array.from({ length: TOTAL }, (_, i) => {
  const n = i + 1;
  return { src: encodeURI(`${INTERIOR_DIR}/${n}.avif`), alt: "Studio Zamani interiors" };
});

export function InteriorsGallery() {
  return <FadeGallery images={images} />;
}
