"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
}

export function PlaceholderImage({ src, alt, fill, className, sizes }: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`w-full h-full bg-[#d2d2d0] ${className ?? ""}`}
        aria-label={alt}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      onError={() => setError(true)}
    />
  );
}
