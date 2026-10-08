import React, { useState } from 'react';
import { ThreeDreamscape } from './components/ThreeDreamscape';
import { FloatingHeartParticles } from './components/FloatingHeartParticles';
import { MusicControl } from './components/MusicControl';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Interactive3DCake } from './components/Interactive3DCake';
import { BirthdayCard } from './components/BirthdayCard';
import { BirthdayMessage } from './components/BirthdayMessage';
import { MemoryGallery } from './components/MemoryGallery';
import { Timeline } from './components/Timeline';
import { Wishes } from './components/Wishes';
import { FinalCard } from './components/FinalCard';
import { Footer } from './components/Footer';
import { SurpriseModal } from './components/SurpriseModal';
import { BirthdayChatbot } from './components/BirthdayChatbot';
import { SplashScreen } from './components/SplashScreen';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [surpriseOpen, setSurpriseOpen] = useState(false);

  const handleBeginCelebration = () => {
    const cakeElem = document.getElementById('cake3d');
    if (cakeElem) {
      cakeElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-[#3d1822] selection:bg-[#f3b5c4] selection:text-[#3d1822] overflow-x-hidden">
      {/* 0. Professional Luxury Celebration Flash Screen */}
      {showSplash && (
        <SplashScreen onEnter={() => setShowSplash(false)} />
      )}

      {/* 1. 3D WebGL Pastel Dreamscape Background Canvas (matching the video) */}
      <ThreeDreamscape />

      {/* 2. Floating Heart & Sparkle Particles */}
      <FloatingHeartParticles />

      {/* 3. Top-Right Music Controller */}
      <MusicControl audioSrc="/assets/birthday-music.mp3" />

      {/* 4. Floating Header Navigation */}
      <Navbar onOpenSurprise={() => setSurpriseOpen(true)} />

      {/* 5. Main Celebration Sections */}
      <main className="relative z-20 space-y-16 md:space-y-24">
        {/* Hero Section */}
        <Hero onBeginCelebration={handleBeginCelebration} />

        {/* 3D Cake Centerpiece Showcase (matching video's interactive 3D pastry viewer) */}
        <section id="cake3d" className="px-4 max-w-5xl mx-auto">
          <Interactive3DCake onWishMade={() => setSurpriseOpen(true)} />
        </section>

        {/* Milestone Age & Intelligent Countdown Card */}
        <BirthdayCard />

        {/* Personal Birthday Message */}
        <BirthdayMessage />

        {/* Photo Memory Gallery with Lightbox */}
        <MemoryGallery />

        {/* Memory Timeline */}
        <Timeline />

        {/* Birthday Wishes Cards */}
        <Wishes />

        {/* Luxury Final Birthday Card */}
        <FinalCard onOpenSurprise={() => setSurpriseOpen(true)} />
      </main>

      {/* 6. Minimal Footer */}
      <Footer />

      {/* 7. Interactive Surprise Modal */}
      <SurpriseModal
        isOpen={surpriseOpen}
        onClose={() => setSurpriseOpen(false)}
      />

      {/* 8. Professional Celebration AI Chatbot Concierge */}
      <BirthdayChatbot />
    </div>
  );
}
