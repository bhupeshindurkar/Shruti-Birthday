import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music, Sliders, ChevronDown } from 'lucide-react';

interface MusicControlProps {
  audioSrc?: string;
}

export const MusicControl: React.FC<MusicControlProps> = ({
  audioSrc = '/assets/birthday-music.mp3',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.75);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const handleAutoPlay = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch((err) => console.warn(err));
      }
    };
    window.addEventListener('play-birthday-music', handleAutoPlay);
    return () => window.removeEventListener('play-birthday-music', handleAutoPlay);
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn('Playback error', err);
      }
    }
  };

  return (
    <div className="fixed bottom-20 right-4 sm:top-4 sm:bottom-auto sm:right-4 z-40 flex flex-col items-end gap-2">
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="metadata"
      />

      {/* Main Music Pill Button */}
      <div className="flex items-center gap-1">
        <button
          onClick={toggleMusic}
          className={`group relative flex items-center gap-2.5 px-3.5 py-2 rounded-full glass-pill border transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 ${
            isPlaying
              ? 'border-rose-300/90 bg-white/95 text-[#8c2545]'
              : 'border-white/80 bg-white/85 text-[#712739] hover:bg-white'
          }`}
          aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
          title={isPlaying ? 'Music On — Click to Pause' : 'Music Off — Click to Play'}
        >
          {/* Musical Symbol ♪ required by prompt */}
          <span className="text-base font-serif font-bold select-none leading-none flex items-center justify-center w-5 h-5 rounded-full bg-rose-100/80 text-[#8c2545]">
            ♪
          </span>

          {/* Status text required by prompt */}
          <span className="text-xs font-semibold tracking-wide">
            {isPlaying ? 'Music On' : 'Music Off'}
          </span>

          {/* Animated Equalizer Wave Bars when playing */}
          {isPlaying ? (
            <div className="flex items-end gap-0.5 h-3.5 px-0.5" aria-hidden="true">
              <span className="w-0.5 bg-[#8c2545] rounded-full animate-pulse" style={{ height: '70%', animationDuration: '0.6s' }} />
              <span className="w-0.5 bg-[#b83358] rounded-full animate-pulse" style={{ height: '100%', animationDuration: '0.4s' }} />
              <span className="w-0.5 bg-[#8c2545] rounded-full animate-pulse" style={{ height: '55%', animationDuration: '0.7s' }} />
              <span className="w-0.5 bg-[#b83358] rounded-full animate-pulse" style={{ height: '85%', animationDuration: '0.5s' }} />
            </div>
          ) : (
            <VolumeX className="w-4 h-4 text-[#8c3a53]/70" />
          )}

          {/* Glowing dot indicator */}
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
            </span>
          )}
        </button>

        {/* Small Slider Dropdown Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-full glass-pill bg-white/80 text-[#8c3a53] hover:bg-white border border-white/80 shadow-xs transition-colors"
          title="Adjust Volume"
          aria-label="Toggle volume slider"
        >
          <Sliders className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Expanded Mini Audio Panel */}
      {isExpanded && (
        <div className="p-3.5 rounded-2xl glass-panel bg-white/95 border border-rose-200/80 shadow-xl w-60 space-y-2.5 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-[#8c2545] uppercase tracking-wider">
              Acoustic Serenade
            </span>
            <span className="text-[10px] text-[#9c4760] font-mono">
              {Math.round(volume * 100)}%
            </span>
          </div>

          <p className="text-xs font-serif font-medium text-[#451422] truncate">
            Shruti&apos;s 21st Piano &amp; Celesta
          </p>

          {/* Volume Slider */}
          <div className="flex items-center gap-2">
            <VolumeX className="w-3.5 h-3.5 text-[#9c4760]" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-full accent-[#8c2545] h-1.5 bg-rose-100 rounded-lg cursor-pointer"
              aria-label="Volume slider"
            />
            <Volume2 className="w-3.5 h-3.5 text-[#8c2545]" />
          </div>
        </div>
      )}
    </div>
  );
};
