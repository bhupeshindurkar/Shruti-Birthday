import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Heart, Maximize2, Camera, Layers } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

export const MemoryGallery: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  const filteredPhotos = birthdayData.galleryImages
    .map((photo, originalIndex) => ({ ...photo, originalIndex }))
    .filter((photo) => {
      if (selectedCategory === 'all') return true;
      return photo.category === selectedCategory;
    });

  const openLightbox = (originalIndex: number) => {
    setActivePhotoIndex(originalIndex);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const showNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % birthdayData.galleryImages.length);
    }
  };

  const showPrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(
        (activePhotoIndex - 1 + birthdayData.galleryImages.length) %
          birthdayData.galleryImages.length
      );
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activePhotoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex]);

  return (
    <section id="memories" className="py-16 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-xs font-semibold uppercase tracking-[0.2em] text-[#a84462]">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
          <span>21 Precious Memories for 21 Golden Years</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#451422] tracking-tight">
          Shruti&apos;s Beautiful Moments
        </h2>

        <p className="text-sm sm:text-base text-[#6d2539] leading-relaxed max-w-lg mx-auto">
          Every photo is a timeless reflection of grace, radiant laughter, and unforgettable chapters of her life.
        </p>

        {/* Category Filters */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all shadow-xs ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-[#b33355] to-[#8c2545] text-white shadow-md'
                : 'bg-white/80 text-[#712739] hover:bg-white border border-rose-200/70'
            }`}
          >
            All 21 Photos ({birthdayData.galleryImages.length})
          </button>
          <button
            onClick={() => setSelectedCategory('portraits')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all shadow-xs ${
              selectedCategory === 'portraits'
                ? 'bg-gradient-to-r from-[#b33355] to-[#8c2545] text-white shadow-md'
                : 'bg-white/80 text-[#712739] hover:bg-white border border-rose-200/70'
            }`}
          >
            Portraits &amp; Smiles ✨
          </button>
          <button
            onClick={() => setSelectedCategory('candid')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all shadow-xs ${
              selectedCategory === 'candid'
                ? 'bg-gradient-to-r from-[#b33355] to-[#8c2545] text-white shadow-md'
                : 'bg-white/80 text-[#712739] hover:bg-white border border-rose-200/70'
            }`}
          >
            Candid Moments 🌸
          </button>
          <button
            onClick={() => setSelectedCategory('celebration')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all shadow-xs ${
              selectedCategory === 'celebration'
                ? 'bg-gradient-to-r from-[#b33355] to-[#8c2545] text-white shadow-md'
                : 'bg-white/80 text-[#712739] hover:bg-white border border-rose-200/70'
            }`}
          >
            Celebration Spirit 🥂
          </button>
        </div>
      </div>

      {/* Modern Responsive Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredPhotos.map((photo) => {
          const isFailed = failedImages[photo.originalIndex];

          return (
            <div
              key={photo.originalIndex}
              onClick={() => openLightbox(photo.originalIndex)}
              className="group relative rounded-3xl overflow-hidden glass-panel p-2.5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
            >
              <div
                className={`relative w-full ${
                  photo.aspect || 'aspect-[4/5]'
                } rounded-2xl overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50 border border-rose-100 flex items-center justify-center`}
              >
                {!isFailed ? (
                  <img
                    src={photo.src}
                    alt={`Shruti Lanjewar - ${photo.title}`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(photo.originalIndex)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#fff2f5] to-[#fde3eb] text-[#8c2545]">
                    <div className="w-14 h-14 rounded-full bg-white/80 border border-rose-200 shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Heart className="w-6 h-6 text-[#b83358] fill-[#b83358]" />
                    </div>
                    <span className="font-serif text-lg font-bold text-[#451422]">
                      Shruti&apos;s Memory ✨
                    </span>
                    <span className="font-script text-base text-[#9e465e] mt-1">
                      {photo.title}
                    </span>
                    <span className="text-[11px] font-mono tracking-wider text-[#b05f77] mt-2">
                      PHOTO {photo.originalIndex + 1} OF 21
                    </span>
                  </div>
                )}

                {/* Badge on corner */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-mono font-semibold">
                  #{photo.originalIndex + 1}
                </div>

                {/* Hover overlay with title & icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-rose-200 font-medium">
                        Memory {photo.originalIndex + 1} of 21
                      </span>
                      <h4 className="font-serif text-base font-semibold text-white">
                        {photo.title}
                      </h4>
                      <p className="text-xs text-rose-100/90 line-clamp-1 mt-0.5">
                        {photo.caption}
                      </p>
                    </div>
                    <div className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors z-50 active:scale-95"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={showPrev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors z-50 active:scale-95"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={showNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors z-50 active:scale-95"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content container */}
          <div
            className="relative max-w-3xl max-h-[90vh] rounded-3xl overflow-hidden glass-panel p-2.5 sm:p-3 border border-white/40 shadow-2xl bg-white/95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black/10">
              {!failedImages[activePhotoIndex] ? (
                <img
                  src={birthdayData.galleryImages[activePhotoIndex].src}
                  alt={`Shruti's Memory ${activePhotoIndex + 1}`}
                  referrerPolicy="no-referrer"
                  onError={() => handleImageError(activePhotoIndex)}
                  className="max-w-full max-h-[70vh] object-contain rounded-2xl"
                />
              ) : (
                <div className="w-80 h-96 sm:w-96 p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#fff2f5] to-[#fde3eb] text-[#8c2545] rounded-2xl">
                  <div className="w-16 h-16 rounded-full bg-white/80 border border-rose-200 flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-[#b83358] fill-[#b83358]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#451422]">
                    Shruti&apos;s Memory ✨
                  </h3>
                  <p className="font-script text-xl text-[#9e465e] mt-1">
                    {birthdayData.galleryImages[activePhotoIndex].title}
                  </p>
                </div>
              )}
            </div>

            {/* Lightbox Caption */}
            <div className="p-3 sm:p-4 text-center">
              <div className="inline-block px-3 py-0.5 rounded-full bg-rose-100 text-[#8c2545] text-[10px] font-mono font-bold mb-1">
                PHOTO {activePhotoIndex + 1} OF {birthdayData.galleryImages.length}
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#451422]">
                {birthdayData.galleryImages[activePhotoIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#73273d] mt-1 max-w-md mx-auto">
                {birthdayData.galleryImages[activePhotoIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
