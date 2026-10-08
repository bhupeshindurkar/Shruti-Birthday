import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Sparkles, Heart } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isTodayOrPast: boolean;
}

export const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    // Target: 22 October 2026 00:00:00
    const targetDate = new Date('2026-10-22T00:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isTodayOrPast: true,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isTodayOrPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {timeLeft.isTodayOrPast ? (
        /* Celebration State When 22 October 2026 is Reached */
        <div className="rounded-3xl glass-panel p-6 sm:p-8 text-center border border-rose-300 shadow-xl bg-gradient-to-r from-rose-50/90 via-white/95 to-amber-50/90">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#a84462] mb-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Today is Shruti&apos;s Day ❤️</span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#451422] mb-3">
            Happy 21st Birthday, Shruti!
          </h3>
          <p className="text-base text-[#6d2539] max-w-md mx-auto">
            Today we celebrate 21 remarkable years of your kindness, grace, and radiant spirit.
          </p>
        </div>
      ) : (
        /* Intelligent Countdown Prior to 22 October 2026 */
        <div className="rounded-3xl glass-panel p-6 sm:p-8 text-center border border-white/80 shadow-xl">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-[#9c3653] mb-4">
            <Clock className="w-4 h-4 text-[#8c2545]" />
            <span>The Celebration Begins In</span>
          </div>

          {/* Countdown Numbers Grid */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto">
            {/* Days */}
            <div className="rounded-2xl bg-white/80 border border-rose-100/80 p-3 sm:p-4 shadow-sm flex flex-col items-center">
              <span className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#451422] tabular-nums">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-[#9c4760] mt-1">
                Days
              </span>
            </div>

            {/* Hours */}
            <div className="rounded-2xl bg-white/80 border border-rose-100/80 p-3 sm:p-4 shadow-sm flex flex-col items-center">
              <span className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#451422] tabular-nums">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-[#9c4760] mt-1">
                Hours
              </span>
            </div>

            {/* Minutes */}
            <div className="rounded-2xl bg-white/80 border border-rose-100/80 p-3 sm:p-4 shadow-sm flex flex-col items-center">
              <span className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#451422] tabular-nums">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-[#9c4760] mt-1">
                Minutes
              </span>
            </div>

            {/* Seconds */}
            <div className="rounded-2xl bg-white/80 border border-rose-100/80 p-3 sm:p-4 shadow-sm flex flex-col items-center">
              <span className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#a82e50] tabular-nums">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-[#9c4760] mt-1">
                Seconds
              </span>
            </div>
          </div>

          <div className="mt-4 text-xs text-[#8c3a53]/80 font-medium">
            Counting down to 22 October 2026 • 21st Milestone
          </div>
        </div>
      )}
    </div>
  );
};
