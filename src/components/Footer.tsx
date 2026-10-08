import React from 'react';
import { Heart, Sparkles, Code, Terminal, Layers, Star } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

export const Footer: React.FC = () => {
  return (
    <footer id="developer" className="relative py-16 px-4 border-t border-rose-200/60 overflow-hidden">
      {/* Decorative ambient background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-rose-200/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-8 text-center">
        {/* Prominent Developer Header Section */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-rose-200 shadow-sm text-xs font-bold uppercase tracking-[0.2em] text-[#8c2545]">
            <Code className="w-3.5 h-3.5 text-[#b83358]" />
            <span>Official Developer Credit</span>
            <Code className="w-3.5 h-3.5 text-[#b83358]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#451422] tracking-tight">
            Developed by Bhupesh Indurkar
          </h2>

          <div className="flex items-center justify-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-[#8c2545] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
              Full Stack Developer
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#6d2539] max-w-lg mx-auto">
            Engineered with modern 3D WebGL, interactive AI concierge, and responsive craftsmanship exclusively for Shruti Lanjewar&apos;s 21st Milestone Birthday.
          </p>
        </div>

        {/* Detailed Developer Showcase Card */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/95 shadow-xl bg-white/90 text-center space-y-5 max-w-xl mx-auto transition-transform hover:scale-[1.01] duration-300">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Developer Avatar Badge */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#8c2545] via-[#b83358] to-[#f472b6] flex items-center justify-center text-white shadow-lg font-serif font-bold text-xl">
              BI
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#451422]">
                Bhupesh Indurkar
              </h3>
              <p className="text-xs text-[#b83358] font-bold tracking-wide uppercase">
                Full Stack Developer &amp; 3D Creative Engineer
              </p>
              <p className="text-xs text-[#712739] mt-0.5 font-medium">
                Concept, UI/UX Architecture &amp; Full Stack Implementation
              </p>
            </div>
          </div>

          {/* Special Dedication Box for Shruti */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-50/90 via-pink-50/80 to-amber-50/80 border border-rose-200/80 text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8c2545] mb-1">
              <Heart className="w-3.5 h-3.5 fill-[#b83358] text-[#b83358]" />
              <span>Birthday Dedication:</span>
            </div>
            <p className="text-xs sm:text-sm text-[#5c1a2d] leading-relaxed italic">
              &ldquo;Specially created with heartfelt dedication for <strong className="font-bold text-[#7d1936]">Shruti Lanjewar</strong> — a truly valuable, cherished soul celebrating 21 wonderful years!&rdquo;
            </p>
          </div>

          {/* Tech stack pill badges */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-1.5 text-[11px] font-medium text-[#7a2039]">
            <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-200 shadow-xs">
              React 19
            </span>
            <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-200 shadow-xs">
              Three.js 3D WebGL
            </span>
            <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-200 shadow-xs">
              TypeScript
            </span>
            <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-200 shadow-xs">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-200 shadow-xs">
              AI Concierge
            </span>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-[#8c354e] font-mono">
          <span>22 • 10 • 2026</span>
          <span className="hidden sm:inline">·</span>
          <span>DEVELOPED BY BHUPESH INDURKAR (FULL STACK DEVELOPER)</span>
          <span className="hidden sm:inline">·</span>
          <span>FOR SHRUTI LANJEWAR ❤️</span>
        </div>
      </div>
    </footer>
  );
};
