import { galleryImages } from "@/data/content";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length,
    );
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-24 bg-muted/30" data-ocid="gallery">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <p className="text-xs tracking-[0.3em] uppercase font-body text-primary">
            Moments
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Gallery
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto text-base">
            Glimpses of the practice — stillness, movement, and breath captured
            in light.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.caption}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`relative overflow-hidden rounded-2xl shadow-calm group cursor-pointer text-left ${
                i === 0
                  ? "md:col-span-2 md:row-span-1 aspect-[16/9]"
                  : "aspect-square"
              }`}
              onClick={() => openLightbox(i)}
              aria-label={`View ${img.caption}`}
              data-ocid={`gallery-item-${i}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-gentle"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-gentle" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-gentle">
                <p className="font-body text-xs tracking-widest uppercase text-primary-foreground">
                  {img.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm"
            onClick={closeLightbox}
            data-ocid="gallery-lightbox"
            aria-label={galleryImages[lightboxIndex].caption}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-background/20 border border-border/40 flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-gentle"
              aria-label="Close lightbox"
              data-ocid="gallery-lightbox-close"
            >
              <X size={18} />
            </button>

            {/* Prev button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 w-10 h-10 rounded-full bg-background/20 border border-border/40 flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-gentle"
              aria-label="Previous image"
              data-ocid="gallery-lightbox-prev"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-[90vw] max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="rounded-2xl max-h-[78vh] w-full object-contain shadow-calm"
              />
              <p className="mt-3 font-body text-xs tracking-[0.25em] uppercase text-primary-foreground/80">
                {galleryImages[lightboxIndex].caption}
              </p>
              <p className="mt-1 font-body text-xs text-primary-foreground/50">
                {lightboxIndex + 1} / {galleryImages.length}
              </p>
            </motion.div>

            {/* Next button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 w-10 h-10 rounded-full bg-background/20 border border-border/40 flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-gentle"
              aria-label="Next image"
              data-ocid="gallery-lightbox-next"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
