import React from 'react';
import { Sparkles, Star, Heart, Compass } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

export const Timeline: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Star className="w-4 h-4 text-amber-500 fill-amber-400" />;
      case 1:
        return <Compass className="w-4 h-4 text-rose-500" />;
      case 2:
        return <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />;
      case 3:
      default:
        return <Heart className="w-4 h-4 text-rose-500 fill-rose-400" />;
    }
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-lg mx-auto mb-14 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#a84462]">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>The Journey</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#451422]">
          Memory Timeline
        </h2>
        <p className="text-sm sm:text-base text-[#6d2539]">
          Four chapters of grace, joy, growth, and limitless potential.
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="relative border-l-2 border-rose-200/80 ml-4 md:ml-32 space-y-12">
        {birthdayData.timeline.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-10 group">
            {/* Timeline node */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-rose-300 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:border-[#b83358] transition-all">
              {getIcon(index)}
            </div>

            {/* Left Year Label for Desktop */}
            <div className="hidden md:block absolute -left-32 top-2 text-right w-24">
              <span className="font-serif font-bold text-lg text-[#5c192e]">
                {item.period}
              </span>
              <span className="block text-[10px] text-[#9c4760] uppercase tracking-wider font-semibold">
                {item.yearLabel}
              </span>
            </div>

            {/* Content card */}
            <div className="rounded-3xl glass-panel p-6 border border-white/90 shadow-md group-hover:shadow-xl transition-all duration-300">
              <div className="md:hidden flex items-center gap-2 mb-2">
                <span className="font-serif font-bold text-lg text-[#5c192e]">
                  {item.period}
                </span>
                <span className="text-xs text-[#9c4760] font-medium">
                  ({item.yearLabel})
                </span>
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-xl font-bold text-[#451422]">
                  {item.title}
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-50 text-[#8c2545] font-semibold border border-rose-200/60">
                  {item.badge}
                </span>
              </div>

              <p className="text-base text-[#6d2539] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
