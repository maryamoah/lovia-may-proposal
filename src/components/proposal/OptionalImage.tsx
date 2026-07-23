'use client';

import Image from 'next/image';
import type { ReactNode } from 'react';
import { useState } from 'react';

type OptionalImageProps = {
  src?: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  fallback?: ReactNode;
  onAvailableChange?: (available: boolean) => void;
  objectPosition?: string;
  width?: number;
  height?: number;
};

export function OptionalImage({
  src,
  alt,
  className = '',
  imageClassName = 'object-cover',
  priority = false,
  sizes = '(min-width: 768px) 420px, 90vw',
  fallback = null,
  onAvailableChange,
  objectPosition,
  width,
  height,
}: OptionalImageProps) {
  const [failed, setFailed] = useState(!src);

  if (!src || failed) {
    return fallback;
  }

  const style = objectPosition ? { objectPosition } : undefined;
  const handleLoad = () => onAvailableChange?.(true);
  const handleError = () => {
    setFailed(true);
    onAvailableChange?.(false);
  };

  if (width && height) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={imageClassName}
          style={style}
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="relative h-full min-h-[inherit] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={imageClassName}
          style={style}
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
    </div>
  );
}
