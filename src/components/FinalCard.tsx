import React, { useState } from 'react';
import { Heart, Sparkles, Gift, Download, FileText, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { birthdayData } from '../config/birthdayData';
import { generateShrutiBirthdayPdf } from '../utils/generatePdfCard';

interface FinalCardProps {
  onOpenSurprise: () => void;
}

export const FinalCard: React.FC<FinalCardProps> = ({ onOpenSurprise }) => {
  const [downloadingPdf, setDownloadingPdf] = useState(false);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);

  const handleDownloadPdf = () => {
    setDownloadingPdf(true);
    try {
      generateShrutiBirthdayPdf();
      setPdfDownloaded(true);
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#fbcfe8', '#f59e0b', '#ffffff', '#fb7185'],
        disableForReducedMotion: true,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setDownloadingPdf(false);
    }
  };

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      {/* Luxury Greeting Card Style Container with Ornate Border */}
      <div className="relative rounded-[3rem] p-3 sm:p-5 bg-gradient-to-tr from-[#fbcfe8] via-[#fed7aa]/50 to-[#fde2e8] shadow-2xl">
        {/* Inner Card Frame with Double Hairline Border */}
        <div className="relative rounded-[2.4rem] bg-white/90 backdrop-blur-xl p-6 sm:p-12 md:p-16 border-2 border-[#e6b8c5]/70 text-center space-y-6 overflow-hidden">
          {/* Ornate corner filigree accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#b83358]/60 rounded-tl-xl pointer-events-none" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#b83358]/60 rounded-tr-xl pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#b83358]/60 rounded-bl-xl pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#b83358]/60 rounded-br-xl pointer-events-none" />

          {/* Top Heart Badge */}
          <div className="mx-auto w-14 h-14 rounded-full bg-rose-50 border border-rose-200/80 flex items-center justify-center text-[#8c2545] shadow-sm">
            <Heart className="w-7 h-7 fill-[#b83358] text-[#b83358]" />
          </div>

          {/* Heading: "For Shruti ❤️" */}
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-[#8c2545] font-bold">
            For Shruti ❤️
          </h2>

          {/* Text: "Happy 21st Birthday" */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#451422] tracking-tight">
            Happy 21st Birthday
          </h3>

          {/* Date: "22 October 2026" */}
          <div className="inline-block px-6 py-1.5 rounded-full bg-rose-50/90 border border-rose-200 text-sm sm:text-base font-semibold text-[#8c2545] font-mono tracking-widest">
            {birthdayData.celebrationDateLong}
          </div>

          {/* Message: exact text from prompt */}
          <p className="text-base sm:text-xl text-[#5c1a2d] max-w-xl mx-auto font-normal leading-relaxed pt-2">
            May this year be kinder, brighter, happier and filled with moments worth remembering.
          </p>

          {/* End: "With lots of love & warm wishes ✨" */}
          <p className="font-script text-2xl sm:text-3xl text-[#b83358] font-medium pt-3">
            With lots of love &amp; warm wishes ✨
          </p>

          {/* Interactive Buttons */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenSurprise}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#b33355] to-[#8c2545] text-white text-sm sm:text-base font-semibold shadow-lg shadow-rose-900/15 hover:shadow-rose-900/25 transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <Gift className="w-4 h-4" />
              <span>Open Your Surprise 🎁</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              disabled={downloadingPdf}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#701a34] text-sm sm:text-base font-semibold border border-rose-300/80 shadow-md hover:bg-rose-50 transition-all duration-300 active:scale-95"
            >
              {pdfDownloaded ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">PDF Card Saved! 🎉</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-[#8c2545]" />
                  <span>Download Keepsake PDF Card 📜</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
