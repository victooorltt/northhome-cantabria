'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Camera,
  Maximize2,
  X,
} from 'lucide-react';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const prevImage = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const nextImage = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevImage, nextImage, isLightboxOpen]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full">
      {/* 1. MAIN SHOWCASE IMAGE */}
      <div className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-sm select-none group aspect-[4/3] sm:aspect-[16/10] max-h-[580px] w-full flex items-center justify-center">
        <img
          src={images[activeIdx]}
          alt={`${title} - Foto ${activeIdx + 1} de ${images.length}`}
          className="w-full h-full object-cover transition-opacity duration-300 cursor-pointer"
          onClick={() => setIsLightboxOpen(true)}
        />

        {/* Top-Right Badge: Counter */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-xs text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full shadow-sm">
            <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>
              {activeIdx + 1} / {images.length}
            </span>
          </span>

          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            aria-label="Ver a pantalla completa"
            className="hidden sm:inline-flex items-center gap-1.5 bg-black/60 hover:bg-black/80 backdrop-blur-xs text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full shadow-sm transition-colors cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Ampliar</span>
          </button>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              aria-label="Foto anterior"
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-zinc-900 shadow-lg flex items-center justify-center transition-all opacity-85 hover:opacity-100 hover:scale-105 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={nextImage}
              aria-label="Foto siguiente"
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-zinc-900 shadow-lg flex items-center justify-center transition-all opacity-85 hover:opacity-100 hover:scale-105 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* 2. THUMBNAIL STRIP */}
      {images.length > 1 && (
        <div className="mt-3 sm:mt-4 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-7 gap-2 sm:gap-3">
          {images.map((imgSrc, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIdx(idx)}
              aria-label={`Ver foto ${idx + 1}`}
              className={`relative aspect-[4/3] rounded-xl overflow-hidden transition-all cursor-pointer ${
                activeIdx === idx
                  ? 'ring-2 ring-accent ring-offset-2 ring-offset-[#FAFAFA] opacity-100'
                  : 'opacity-65 hover:opacity-100 border border-zinc-200'
              }`}
            >
              <img
                src={imgSrc}
                alt={`${title} miniatura ${idx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {/* 3. LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6 backdrop-blur-sm"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Lightbox Header */}
          <div
            className="flex items-center justify-between text-white z-10 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-sm sm:text-base font-medium">
                {title}
              </span>
              <span className="text-xs sm:text-sm text-zinc-400">
                ({activeIdx + 1} de {images.length})
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Cerrar visor"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Center Image */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 select-none overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[activeIdx]}
              alt={`${title} - Foto ${activeIdx + 1}`}
              className="max-h-[82vh] max-w-[95vw] object-contain rounded-lg"
            />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevImage}
                  aria-label="Foto anterior"
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Foto siguiente"
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </>
            )}
          </div>

          {/* Lightbox Thumbnails Bottom */}
          <div
            className="flex items-center justify-center gap-2 overflow-x-auto py-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((imgSrc, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`relative w-14 h-10 sm:w-16 sm:h-12 rounded-md overflow-hidden shrink-0 transition-all cursor-pointer ${
                  activeIdx === idx
                    ? 'ring-2 ring-white opacity-100'
                    : 'opacity-40 hover:opacity-80'
                }`}
              >
                <img
                  src={imgSrc}
                  alt={`Miniatura ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
