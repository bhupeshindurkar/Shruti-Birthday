import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, ArrowDown, Heart, Calendar } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';
import { Countdown } from './Countdown';

export const BirthdayCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Smooth 3D tilt calculation
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle max tilt: +/- 5.5 degrees
    const rotX = ((y - centerY) / centerY) * -5.5;
    const rotY = ((x - centerX) / centerX) * 5.5;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.35,
    });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <section id="about" className="py-12 px-4 max-w-5xl mx-auto space-y-10">
      {/* 3D Perspective Container */}
      <div className="[perspective:1200px] w-full">
        {/* Main 3D Tilting Card */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
              isHovered ? 'scale3d(1.015, 1.015, 1.015)' : 'scale3d(1, 1, 1)'
            }`,
            transition: isHovered
              ? 'transform 0.12s ease-out, box-shadow 0.3s ease-out'
              : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease',
            transformStyle: 'preserve-3d',
          }}
          className="relative rounded-[2.5rem] glass-panel p-6 sm:p-10 md:p-12 text-center border border-white/90 shadow-2xl overflow-hidden cursor-default will-change-transform"
        >
          {/* Dynamic 3D Glare Light Reflection */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-[2.5rem]"
            style={{
              opacity: glarePos.opacity,
              background: `radial-gradient(circle 380px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.7), transparent 75%)`,
            }}
          />

          {/* Soft background radial shine */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

          {/* Layered Content with 3D Depth (translateZ) */}
          <div
            className="relative z-10 max-w-2xl mx-auto space-y-4"
            style={{ transform: 'translateZ(30px)' }}
          >
            {/* Top Milestone Badge */}
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#a84462]"
              style={{ transform: 'translateZ(15px)' }}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Golden Milestone</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            </div>

            {/* Huge Display '21' with enhanced 3D pop */}
            <div
              className="relative inline-block my-2"
              style={{ transform: 'translateZ(45px)' }}
            >
              <span className="text-7xl sm:text-8xl md:text-9xl font-serif font-bold text-[#451422] tracking-tight drop-shadow-md select-none block">
                {birthdayData.age}
              </span>
              <span className="font-script text-3xl sm:text-4xl text-[#b83358] absolute -top-1 -right-6 sm:-right-8">
                th
              </span>
            </div>

            {/* "Years of Beautiful Memories" */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#54172a] text-balance"
              style={{ transform: 'translateZ(25px)' }}
            >
              Years of Beautiful Memories
            </h2>

            {/* "22 • 10 • 2005 → 22 • 10 • 2026" */}
            <div className="pt-2 pb-4" style={{ transform: 'translateZ(20px)' }}>
              <span className="inline-block px-5 py-2 rounded-full bg-rose-50/90 text-[#8c2545] border border-rose-200/70 font-mono text-sm sm:text-base font-semibold tracking-widest shadow-sm">
                22 • 10 • 2005 → 22 • 10 • 2026
              </span>
            </div>

            {/* Elegant Vertical Journey Flow */}
            <div
              className="mt-8 pt-6 border-t border-rose-100/80 max-w-md mx-auto"
              style={{ transform: 'translateZ(20px)' }}
            >
              <div className="flex flex-col items-center space-y-4 text-center">
                {/* Step 1: Born */}
                <div className="p-4 rounded-2xl bg-white/85 border border-rose-100 w-full shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                  <span className="text-xs uppercase tracking-widest text-[#a84462] font-bold">
                    Born
                  </span>
                  <p className="text-base font-serif font-semibold text-[#451422] mt-0.5">
                    22 October 2005
                  </p>
                </div>

                <ArrowDown className="w-4 h-4 text-rose-300 animate-bounce" />

                {/* Step 2: Growing */}
                <div className="p-4 rounded-2xl bg-white/85 border border-rose-100 w-full shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                  <span className="text-xs uppercase tracking-widest text-[#a84462] font-bold">
                    Growing
                  </span>
                  <p className="text-sm font-medium text-[#6d2539] mt-0.5">
                    Beautiful memories, experiences & dreams
                  </p>
                </div>

                <ArrowDown className="w-4 h-4 text-rose-300 animate-bounce" />

                {/* Step 3: Today */}
                <div className="p-4 rounded-2xl bg-white/85 border border-rose-100 w-full shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                  <span className="text-xs uppercase tracking-widest text-[#a84462] font-bold">
                    Today
                  </span>
                  <p className="text-base font-serif font-semibold text-[#451422] mt-0.5">
                    22 October 2026
                  </p>
                </div>

                <ArrowDown className="w-4 h-4 text-rose-300 animate-bounce" />

                {/* Step 4: 21 */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-100/90 to-amber-100/80 border border-amber-300/70 w-full shadow-md transition-transform duration-300 hover:scale-[1.02]">
                  <span className="text-xs uppercase tracking-widest text-[#7a1936] font-bold">
                    21
                  </span>
                  <p className="text-base font-serif font-bold text-[#5c1328] mt-0.5 flex items-center justify-center gap-1.5">
                    <span>A new chapter begins</span>
                    <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Intelligent Countdown Component */}
      <Countdown />
    </section>
  );
};
