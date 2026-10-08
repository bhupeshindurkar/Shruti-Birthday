import React, { useState, useEffect } from 'react';
import { Gift, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenSurprise: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSurprise }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 inset-x-0 z-40 px-4 max-w-4xl mx-auto transition-all duration-300">
      <div
        className={`w-full rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between ${
          scrolled ? 'glass-pill shadow-lg border border-white/90 bg-white/90' : 'glass-pill bg-white/75'
        }`}
      >
        {/* Zone 1: Single Brand text wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('home');
          }}
          className="text-base sm:text-lg font-serif font-bold text-[#5c192e] hover:text-[#8c2545] transition-colors flex items-center gap-1.5"
        >
          <span>Shruti</span>
          <span className="font-script text-xl text-[#b83358] font-normal">21</span>
        </a>

        {/* Zone 2: Clean nav items */}
        <nav className="hidden md:flex items-center gap-5 text-xs sm:text-sm font-medium text-[#712739]">
          <button
            onClick={() => scrollTo('home')}
            className="hover:text-[#451422] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8c2545] hover:after:w-full after:transition-all"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('cake3d')}
            className="hover:text-[#451422] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8c2545] hover:after:w-full after:transition-all"
          >
            3D Cake
          </button>
          <button
            onClick={() => scrollTo('memories')}
            className="hover:text-[#451422] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8c2545] hover:after:w-full after:transition-all"
          >
            21 Memories
          </button>
          <button
            onClick={() => scrollTo('wishes')}
            className="hover:text-[#451422] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8c2545] hover:after:w-full after:transition-all"
          >
            Wishes
          </button>
          <a
            href="#developer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }}
            className="text-[11px] px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-[#8c2545] font-semibold hover:bg-rose-100/70 transition-colors"
          >
            Dev by Bhupesh
          </a>
        </nav>

        {/* Zone 3: Primary action button + Mobile menu toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSurprise}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#b33355] to-[#8c2545] text-white text-xs font-semibold shadow-sm hover:shadow transition-all active:scale-95 hover:opacity-95"
          >
            <Gift className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Surprise 🎁</span>
            <span className="sm:hidden">🎁</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-[#712739] hover:bg-rose-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-3xl glass-panel shadow-2xl border border-white/95 animate-in fade-in slide-in-from-top-2 duration-200 bg-white/95">
          <div className="flex flex-col gap-2.5 text-sm font-medium text-[#712739]">
            <button
              onClick={() => scrollTo('home')}
              className="text-left py-2 px-3 rounded-xl hover:bg-rose-50/80 transition-colors flex items-center justify-between"
            >
              <span>Home</span>
              <span className="text-xs text-[#a84462]">Welcome ✨</span>
            </button>
            <button
              onClick={() => scrollTo('cake3d')}
              className="text-left py-2 px-3 rounded-xl hover:bg-rose-50/80 transition-colors flex items-center justify-between"
            >
              <span>Interactive 3D Cake</span>
              <span className="text-xs text-[#a84462]">Blow Candles 🎂</span>
            </button>
            <button
              onClick={() => scrollTo('memories')}
              className="text-left py-2 px-3 rounded-xl hover:bg-rose-50/80 transition-colors flex items-center justify-between"
            >
              <span>21 Memories Gallery</span>
              <span className="text-xs text-[#a84462]">21 Photos 📸</span>
            </button>
            <button
              onClick={() => scrollTo('wishes')}
              className="text-left py-2 px-3 rounded-xl hover:bg-rose-50/80 transition-colors flex items-center justify-between"
            >
              <span>Wishes &amp; Blessings</span>
              <span className="text-xs text-[#a84462]">Love &amp; Cheers ❤️</span>
            </button>

            {/* Developer Mobile Badge */}
            <div className="mt-2 pt-3 border-t border-rose-100 flex items-center justify-between px-2 text-xs text-[#8c2545]">
              <span className="text-[11px] text-[#9c4760]">Developer:</span>
              <span className="font-bold text-[#5c192e]">Bhupesh Indurkar (Full Stack)</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
