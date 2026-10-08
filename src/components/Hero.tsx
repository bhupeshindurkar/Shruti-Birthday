import React, { useState } from 'react';
import { Sparkles, ChevronDown, Heart } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

interface HeroProps {
  onBeginCelebration: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBeginCelebration }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-12 px-4 max-w-6xl mx-auto"
    >
      {/* Floating 3D/Glassmorphism Hero Card Container matching Dmitry Krasnov's luxury showcase */}
      <div className="relative w-full rounded-[2.5rem] glass-panel p-6 sm:p-10 md:p-14 transition-all duration-500">
        {/* Subtle decorative gold sparkle corner accents */}
        <div className="absolute top-6 left-6 text-amber-400/40 pointer-events-none">
          <Sparkles className="w-6 h-6 animate-pulse" />
        </div>
        <div className="absolute bottom-6 right-6 text-rose-400/40 pointer-events-none">
          <Sparkles className="w-5 h-5 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & Call-To-Action */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
            {/* Small elegant text */}
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#a84462]">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping inline-block" />
              <span>A Special Day • A Special Person</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#451422] tracking-tight leading-[1.08] text-balance">
              Happy Birthday,{' '}
              <span className="font-script font-bold text-[#b83358] block sm:inline">
                Shruti ❤️
              </span>
            </h1>

            {/* Subheading */}
            <div className="flex items-center gap-3">
              <span className="text-xl sm:text-2xl font-serif font-medium text-[#7d203c] italic">
                {birthdayData.celebrationDateLong}
              </span>
              <span className="text-rose-300">·</span>
              <span className="text-sm font-mono tracking-widest text-[#a84462] font-semibold">
                {birthdayData.celebrationDateFormatted}
              </span>
            </div>

            {/* Supporting text */}
            <p className="text-base sm:text-lg md:text-xl text-[#6d2539] max-w-xl font-normal leading-relaxed">
              Celebrating 21 beautiful years of you.
            </p>

            {/* CTA Button */}
            <div className="pt-3">
              <button
                onClick={onBeginCelebration}
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#b33355] to-[#8c2545] text-white font-semibold text-sm sm:text-base shadow-lg shadow-rose-900/15 hover:shadow-rose-900/25 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Begin the Celebration ↓</span>
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Portrait Frame (Organic rounded shape with champagne/gold border) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Soft decorative glow ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-200 to-amber-100 rounded-[2.5rem] blur-xl opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Portrait Frame Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 rounded-[2.2rem] p-2 bg-white/80 backdrop-blur-md shadow-2xl border border-amber-200/60 transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50 border border-rose-100 flex items-center justify-center">
                  {!imgError ? (
                    <img
                      src={birthdayData.heroPhoto}
                      alt="Shruti Lanjewar"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    /* Tasteful, elegant fallback placeholder as required by Section 4 & 25 */
                    <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#fff2f5] via-[#fde2e8] to-[#fceee6]">
                      <div className="w-20 h-20 rounded-full bg-white/90 border border-amber-300/80 shadow-md flex items-center justify-center mb-3">
                        <span className="font-serif text-3xl font-bold text-[#8c2545]">
                          SL
                        </span>
                      </div>
                      <span className="font-serif text-xl font-bold text-[#451422]">
                        Shruti Lanjewar
                      </span>
                      <span className="font-script text-lg text-[#b83358] mt-0.5">
                        21 Years of Elegance
                      </span>
                      <span className="text-[11px] font-mono tracking-wider text-[#9e465e] mt-2">
                        22 • 10 • 2026
                      </span>
                    </div>
                  )}

                  {/* Soft overlay gradient for cinematic feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Badge: "Birthday Girl ✨" */}
                <div className="absolute -bottom-3 inset-x-0 mx-auto w-max px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-amber-300/90 shadow-lg flex items-center gap-1.5 text-xs font-semibold text-[#7d1f39] z-20">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                  <span>Birthday Girl ✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
