"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type MediaItem = { src: string; alt: string; caption?: string };

export function GalleryLightbox({ images }: { images: MediaItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, prev, next]);

  return (
    <>
      {/* Grille de vignettes */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {images.map((img, idx) => (
          <button
            key={img.src}
            onClick={() => setOpenIndex(idx)}
            className="group relative aspect-square overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
            aria-label={`Agrandir : ${img.alt}`}
          >
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/30 transition" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-primary-950/95 backdrop-blur flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button onClick={close} aria-label="Fermer"
            className="absolute top-4 right-4 h-11 w-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition">
            <X className="h-6 w-6" />
          </button>

          <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Image précédente"
            className="absolute left-4 h-11 w-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition">
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-[70vh]">
              <Image src={images[openIndex].src} alt={images[openIndex].alt} fill sizes="90vw" className="object-contain" />
            </div>
            {images[openIndex].caption && (
              <p className="mt-4 text-center text-primary-100 text-sm">{images[openIndex].caption}</p>
            )}
            <p className="mt-2 text-center text-primary-300 text-xs">{openIndex + 1} / {images.length}</p>
          </div>

          <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Image suivante"
            className="absolute right-4 h-11 w-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
