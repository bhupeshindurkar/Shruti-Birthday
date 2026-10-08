import React from 'react';
import { Heart, Sparkles, Quote } from 'lucide-react';

export const BirthdayMessage: React.FC = () => {
  return (
    <section className="py-14 px-4 max-w-4xl mx-auto">
      <div className="relative rounded-[2.5rem] glass-panel p-8 sm:p-12 md:p-16 border border-white/90 shadow-2xl overflow-hidden text-center">
        {/* Soft decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-200/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

        {/* Decorative Quote Mark */}
        <div className="mx-auto w-12 h-12 rounded-full bg-rose-100/80 border border-rose-200/60 flex items-center justify-center text-[#8c2545] mb-5 shadow-sm">
          <Quote className="w-5 h-5 rotate-180" />
        </div>

        {/* Handwritten-style combined with serif font as required */}
        <div className="space-y-1 mb-8">
          <span className="font-script text-3xl sm:text-4xl text-[#b83358] block">
            For Shruti
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#451422] tracking-tight">
            A Little Something For You
          </h2>
        </div>

        {/* Emotional and elegant text body matching exact prompt requirements */}
        <div className="space-y-6 max-w-2xl mx-auto text-[#5e1f32]">
          <p className="text-lg sm:text-xl font-serif leading-relaxed text-[#451422]">
            Some people make ordinary moments feel special.{' '}
            <span className="font-medium text-[#8c2545]">
              Today is about celebrating one of those special people — Shruti.
            </span>
          </p>

          <p className="text-base sm:text-lg leading-relaxed font-normal text-[#6b253b]">
            May this new chapter bring you happiness, beautiful memories, meaningful moments, endless smiles and everything your heart wishes for.
          </p>

          <div className="pt-4 pb-2">
            <span className="h-px w-20 bg-rose-200 inline-block mx-auto" />
          </div>

          <p className="font-script text-2xl sm:text-3xl font-semibold text-[#8c2545]">
            Keep smiling. Keep shining. Keep being you. ❤️
          </p>
        </div>
      </div>
    </section>
  );
};
