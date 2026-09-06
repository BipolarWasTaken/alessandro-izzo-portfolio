"use client";

import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { IconClose } from "./icons";

export function Lightbox({
  src,
  alt,
  caption,
  onClose,
}: {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Chiudi"
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <IconClose className="h-5 w-5" />
      </button>

      <figure
        className="flex max-h-full max-w-full flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[85vh] max-w-[92vw] overflow-hidden rounded-lg shadow-2xl">
          <Image
            src={src}
            alt={alt}
            width={2200}
            height={1375}
            sizes="92vw"
            quality={92}
            className="max-h-[85vh] w-auto max-w-full object-contain"
          />
        </div>
        {caption && <figcaption className="mt-4 max-w-2xl text-center text-sm text-white/70">{caption}</figcaption>}
      </figure>
    </div>,
    document.body
  );
}
