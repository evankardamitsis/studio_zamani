"use client";

import { FadeGallery } from "./FadeGallery";

// Ordered by filename from /images/jewelry_pics
const JEWELRY_FILES = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const images = JEWELRY_FILES.map((n) => ({
  src: `/images/jewelry_pics/${n}.avif`,
  alt: "Studio Zamani jewelry",
}));

export function JewelryGallery() {
  return <FadeGallery images={images} />;
}
