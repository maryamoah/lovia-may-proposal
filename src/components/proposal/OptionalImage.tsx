"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";

type OptionalImageProps = {
  src?: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  fallback?: ReactNode;
  onAvailableChange?: (available: boolean) => void;
};

export function OptionalImage({
  src,
  alt,
  className = "",
  imageClassName = "object-cover",
  priority = false,
  sizes = "(min-width: 768px) 420px, 90vw",
  fallback = null,
  onAvailableChange,
}: OptionalImageProps) {
  const [failed, setFailed] = useState(!src);

  if (!src || failed) {
    return fallback;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={imageClassName}
        onLoad={() => onAvailableChange?.(true)}
        onError={() => {
          setFailed(true);
          onAvailableChange?.(false);
        }}
      />
    </div>
  );
}
