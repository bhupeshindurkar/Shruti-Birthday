import React from 'react';
import { Smile, Sparkles, Camera, Compass, Heart } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

export const Wishes: React.FC = () => {
  const getCardIcon = (title: string) => {
    switch (title) {
      case 'Happiness':
        return <Smile className="w-6 h-6 text-[#b83358]" />;
      case 'Dreams':
        return <Sparkles className="w-6 h-6 text-amber-500 fill-amber-400" />;
      case 'Memories':
        return <Camera className="w-6 h-6 text-[#a83254]" />;
      case 'Future':
      default:
        return <Compass className="w-6 h-6 text-[#b83358]" />;
    }
  };

  return (
    <section id="wishes" className="py-16 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#a84462]">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-400" />
          <span>Wishes & Blessings</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-400" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#451422]">
          Birthday Wishes
        </h2>
        <p className="text-sm sm:text-base text-[#6d2539]">
          Sincere wishes crafted especially for Shruti on her 21st birthday.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {birthdayData.wishes.map((wish, index) => (
          <div
            key={index}
            className="group relative rounded-3xl glass-panel p-6 sm:p-7 border border-white/90 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            {/* Soft decorative glow on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-100/30 to-amber-100/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/90 border border-rose-200/80 shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {getCardIcon(wish.title)}
              </div>

              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#a84462] block mb-1">
                {wish.subtitle}
              </span>

              <h3 className="font-serif text-2xl font-bold text-[#451422] mb-3">
                {wish.title}
              </h3>

              <p className="text-sm sm:text-base text-[#6d2539] leading-relaxed">
                &ldquo;{wish.quote}&rdquo;
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-rose-100/70 flex items-center justify-between">
              <span className="text-xs font-script text-xl text-[#b83358]">
                For Shruti
              </span>
              <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full bg-rose-50 text-[#8c2545] font-semibold border border-rose-200/60">
                {wish.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
