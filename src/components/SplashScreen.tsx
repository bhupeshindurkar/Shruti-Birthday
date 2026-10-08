import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Music, ArrowRight, Star } from 'lucide-react';

interface SplashScreenProps {
  onEnter: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onEnter }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Smooth progress animation over ~2.4 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    setIsExiting(true);
    // Play celebratory music seamlessly upon user interaction
    window.dispatchEvent(new CustomEvent('play-birthday-music'));

    // Burst celebratory confetti
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#fbcfe8', '#f43f5e', '#d4af37', '#fed7aa', '#ffffff'],
      disableForReducedMotion: true,
    });

    setTimeout(() => {
      onEnter();
    }, 600);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-[#fff0f4] via-[#fce7ed] to-[#fae8e0] transition-all duration-700 ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      role="dialog"
      aria-modal="true"
    >
      {/* Soft ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-rose-200/40 blur-3xl pointer-events-none animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none animate-pulse"
        style={{ animationDelay: '1.5s' }}
      />

      {/* Main Flash Screen Card */}
      <div className="relative w-full max-w-lg rounded-[3rem] glass-panel p-8 sm:p-12 text-center border-2 border-white/95 shadow-2xl overflow-hidden bg-white/90 backdrop-blur-2xl">
        {/* Subtle ornate filigree corner accents */}
        <div className="absolute top-5 left-5 w-7 h-7 border-t-2 border-l-2 border-rose-300 rounded-tl-xl pointer-events-none" />
        <div className="absolute top-5 right-5 w-7 h-7 border-t-2 border-r-2 border-rose-300 rounded-tr-xl pointer-events-none" />
        <div className="absolute bottom-5 left-5 w-7 h-7 border-b-2 border-l-2 border-rose-300 rounded-bl-xl pointer-events-none" />
        <div className="absolute bottom-5 right-5 w-7 h-7 border-b-2 border-r-2 border-rose-300 rounded-br-xl pointer-events-none" />

        {/* Milestone Top Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-semibold uppercase tracking-[0.25em] text-[#8c2545] mb-5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
          <span>21st Milestone Celebration</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
        </div>

        {/* Center Portrait: shruti-2.png with gold aura ring */}
        <div className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44 mb-6">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-rose-300 via-amber-200 to-pink-300 blur-md opacity-80 animate-pulse" />
          <div className="relative w-full h-full rounded-full p-1.5 bg-white shadow-xl border-2 border-amber-300/80 overflow-hidden flex items-center justify-center">
            <img
              src="/assets/shruti-2.png"
              alt="Shruti Lanjewar"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                // fallback to shruti.jpg if needed
                (e.target as HTMLImageElement).src = '/assets/shruti.jpg';
              }}
            />
          </div>
          {/* Badge: 21 ✨ */}
          <div className="absolute -bottom-2 inset-x-0 mx-auto w-max px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-amber-300 shadow-md text-xs font-bold text-[#8c2545] flex items-center gap-1 font-serif">
            <span>21 Golden Years ✨</span>
          </div>
        </div>

        {/* Main Title: Shruti Lanjewar */}
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#451422] tracking-tight">
          Shruti Lanjewar
        </h1>
        <p className="font-script text-xl sm:text-2xl text-[#b83358] mt-1 mb-4">
          Celebrating 21 Years of Elegance &amp; Radiance
        </p>

        {/* PROMINENT DEVELOPER CREDIT AS REQUESTED */}
        <div className="mb-6 py-3 px-4 rounded-2xl bg-gradient-to-r from-rose-50/90 via-white to-rose-50/90 border border-rose-200/90 shadow-xs">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#a84462] block">
            Designed &amp; Developed By
          </span>
          <span className="font-serif text-base sm:text-lg font-bold text-[#451422] block mt-0.5">
            Bhupesh Indurkar
          </span>
          <span className="inline-block mt-0.5 px-2.5 py-0.5 rounded-full bg-[#8c2545] text-white text-[10px] font-semibold tracking-wider uppercase">
            Full Stack Developer
          </span>
        </div>

        {/* Enter Celebration Button with Music Auto-Trigger */}
        <div className="space-y-3">
          <button
            onClick={handleStart}
            className="group w-full relative flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#b33355] via-[#8c2545] to-[#701a34] text-white font-semibold text-sm sm:text-base shadow-xl shadow-rose-900/20 hover:shadow-rose-900/35 transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            <Music className="w-4 h-4 animate-bounce" />
            <span>Enter Celebration ✨</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Loading progress bar */}
          <div className="w-full bg-rose-100 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#b83358] to-[#f472b6] h-full transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#9c4760]">
            <span>22 October 2026</span>
            <span>Tap to begin audio &amp; 3D view</span>
          </div>
        </div>
      </div>
    </div>
  );
};
