import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, X, Heart, Gift, Download, FileText, Check } from 'lucide-react';
import { generateShrutiBirthdayPdf } from '../utils/generatePdfCard';

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SurpriseModal: React.FC<SurpriseModalProps> = ({ isOpen, onClose }) => {
  const [downloadingPdf, setDownloadingPdf] = useState(false);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setPdfDownloaded(false);
      // Elegant restrained confetti burst
      const count = 40;
      confetti({
        particleCount: count,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#fbcfe8', '#f43f5e', '#d4af37', '#fed7aa', '#ffffff'],
        disableForReducedMotion: true,
      });

      // Handle Escape key to close modal
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  const handleDownloadPdf = () => {
    setDownloadingPdf(true);
    try {
      generateShrutiBirthdayPdf();
      setPdfDownloaded(true);

      // Celebration confetti for PDF creation
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#fbcfe8', '#f59e0b', '#ffffff', '#fb7185'],
        disableForReducedMotion: true,
      });
    } catch (err) {
      console.error('PDF generation error', err);
    } finally {
      setDownloadingPdf(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="surprise-title"
    >
      {/* Background click to dismiss */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg rounded-3xl glass-panel p-6 sm:p-8 md:p-10 text-center shadow-2xl border border-white/90 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Icon in corner */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#8c3a53] hover:text-[#521325] hover:bg-rose-100/60 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Decorative Gift / Heart Icon Badge */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#ffe4ec] to-[#fff1f2] border border-rose-200/80 flex items-center justify-center shadow-md mb-5">
          <Gift className="w-8 h-8 text-[#b83358]" />
        </div>

        {/* Subtle decorative subtitle */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#a84462] mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>A Special Wish From The Heart</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
        </div>

        {/* Headline exact text from prompt */}
        <h2
          id="surprise-title"
          className="text-2xl sm:text-3xl font-serif font-bold text-[#451422] mb-4 text-balance"
        >
          Happy 21st Birthday, Shruti! ❤️
        </h2>

        {/* Message body exact text from prompt */}
        <p className="text-[#6d2539] text-base sm:text-lg leading-relaxed mb-5 font-normal">
          Here&apos;s to another year of beautiful beginnings, unforgettable memories and dreams coming true.
        </p>

        {/* Decorative divider with hearts */}
        <div className="flex items-center justify-center gap-3 text-rose-300 my-3">
          <span className="h-px w-12 bg-rose-200" />
          <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
          <span className="h-px w-12 bg-rose-200" />
        </div>

        <p className="font-script text-2xl sm:text-3xl text-[#942748] mb-6">
          Celebrating 21 Years of Grace &amp; Light ✨
        </p>

        {/* Professional Printable PDF Birthday Card Action */}
        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-rose-50/90 to-amber-50/90 border border-rose-200/80 shadow-sm text-left">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-white border border-rose-200 shadow-xs text-[#b83358]">
              <FileText className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-serif font-bold text-[#451422]">
                Official Keepsake PDF Birthday Card
              </h4>
              <p className="text-xs text-[#6d2539] mt-0.5">
                Download a high-resolution, printable luxury card in Shruti&apos;s name.
              </p>
            </div>
          </div>

          <button
            onClick={handleDownloadPdf}
            disabled={downloadingPdf}
            className="mt-3.5 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#701a34] font-semibold text-xs md:text-sm border border-rose-300/80 shadow-sm hover:bg-rose-50/60 transition-all active:scale-95"
          >
            {pdfDownloaded ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">PDF Card Downloaded! 🎉</span>
              </>
            ) : downloadingPdf ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin text-[#8c2545]" />
                <span>Generating Luxury PDF Card...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-[#8c2545]" />
                <span>Download Shruti&apos;s Birthday PDF Card</span>
              </>
            )}
          </button>
        </div>

        {/* Action Button: "Close Surprise" as required */}
        <button
          onClick={onClose}
          className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-[#b33355] to-[#8c2545] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all active:scale-95 hover:opacity-95"
        >
          Close Surprise
        </button>
      </div>
    </div>
  );
};
