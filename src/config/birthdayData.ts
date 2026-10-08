export interface BirthdayConfig {
  name: string;
  birthDate: string; // "2005-10-22"
  birthdayDate: string; // "2026-10-22"
  age: number; // 21
  celebrationDateFormatted: string; // "22/10/2026"
  celebrationDateLong: string; // "22 October 2026"
  birthDateLong: string; // "22 October 2005"
  heroPhoto: string;
  heroFallback: string;
  audioTrack: string;
  developer: {
    name: string;
    role: string;
    tagline: string;
  };
  galleryImages: {
    src: string;
    fallback: string;
    title: string;
    caption: string;
    category?: string;
    aspect?: string;
  }[];
  wishes: {
    title: string;
    subtitle: string;
    quote: string;
    tag: string;
  }[];
  timeline: {
    period: string;
    yearLabel: string;
    title: string;
    description: string;
    badge: string;
  }[];
}

export const birthdayData: BirthdayConfig = {
  name: "Shruti Lanjewar",
  birthDate: "2005-10-22",
  birthdayDate: "2026-10-22",
  age: 21,
  celebrationDateFormatted: "22/10/2026",
  celebrationDateLong: "22 October 2026",
  birthDateLong: "22 October 2005",
  heroPhoto: "/assets/shruti-2.png",
  heroFallback: "/assets/shruti.jpg",
  audioTrack: "/assets/birthday-music.mp3",
  developer: {
    name: "Bhupesh Indurkar",
    role: "Full Stack Developer",
    tagline: "Crafted with passion, cutting-edge 3D technology & love for Shruti's 21st Milestone Birthday.",
  },
  galleryImages: [
    {
      src: "/assets/gallery/shruti-1.jpg",
      fallback: "/assets/gallery/photo-1.svg",
      title: "Radiant Smile",
      caption: "A smile that instantly lights up the whole room with pure warmth.",
      category: "portraits",
      aspect: "aspect-[4/5]",
    },
    {
      src: "/assets/gallery/shruti-2.jpg",
      fallback: "/assets/gallery/photo-2.svg",
      title: "Grace & Elegance",
      caption: "Carrying poise and effortless charm wherever she goes.",
      category: "portraits",
      aspect: "aspect-square",
    },
    {
      src: "/assets/gallery/shruti-3.jpg",
      fallback: "/assets/gallery/photo-3.svg",
      title: "Golden Hour Glow",
      caption: "Basking in the golden sunlight, capturing moments of peace.",
      category: "candid",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/assets/gallery/shruti-4.jpg",
      fallback: "/assets/gallery/photo-4.svg",
      title: "Gentle Heart",
      caption: "A soul full of kindness, empathy, and genuine love.",
      category: "candid",
      aspect: "aspect-square",
    },
    {
      src: "/assets/gallery/shruti-5.jpg",
      fallback: "/assets/gallery/photo-5.svg",
      title: "Cherished Moments",
      caption: "Every candid frame holds a story of happiness and laughter.",
      category: "candid",
      aspect: "aspect-[4/5]",
    },
    {
      src: "/assets/gallery/shruti-6.jpg",
      fallback: "/assets/gallery/photo-6.svg",
      title: "Sparkling Eyes",
      caption: "Eyes reflecting big dreams, boundless hope, and pure spirit.",
      category: "portraits",
      aspect: "aspect-square",
    },
    {
      src: "/assets/gallery/shruti-7.jpg",
      fallback: "/assets/gallery/photo-1.svg",
      title: "Celebration Spirit",
      caption: "Making every ordinary day feel like a magical festive occasion.",
      category: "celebration",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/assets/gallery/shruti-8.jpg",
      fallback: "/assets/gallery/photo-2.svg",
      title: "Timeless Beauty",
      caption: "Looking effortlessly stunning, radiant in every single way.",
      category: "portraits",
      aspect: "aspect-[4/5]",
    },
    {
      src: "/assets/gallery/shruti-9.jpg",
      fallback: "/assets/gallery/photo-3.svg",
      title: "Laughter in the Air",
      caption: "The sound of her laugh is the sweetest melody you can hear.",
      category: "candid",
      aspect: "aspect-square",
    },
    {
      src: "/assets/gallery/shruti-10.jpg",
      fallback: "/assets/gallery/photo-4.svg",
      title: "Sweet Simplicity",
      caption: "Finding wonder and joy in life's smallest, most tender moments.",
      category: "candid",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/assets/gallery/shruti-11.jpg",
      fallback: "/assets/gallery/photo-5.svg",
      title: "Unstoppable Ambition",
      caption: "Stepping bravely toward a future filled with infinite possibilities.",
      category: "portraits",
      aspect: "aspect-[4/5]",
    },
    {
      src: "/assets/gallery/shruti-12.jpg",
      fallback: "/assets/gallery/photo-6.svg",
      title: "Festive Splendor",
      caption: "Wrapped in colors, heritage, and timeless grace.",
      category: "celebration",
      aspect: "aspect-square",
    },
    {
      src: "/assets/gallery/shruti-13.jpg",
      fallback: "/assets/gallery/photo-1.svg",
      title: "Sun-Kissed Joy",
      caption: "Warm sunshine and an even warmer presence.",
      category: "candid",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/assets/gallery/shruti-14.jpg",
      fallback: "/assets/gallery/photo-2.svg",
      title: "Confidence & Poise",
      caption: "Holding her head high with quiet strength and dignity.",
      category: "portraits",
      aspect: "aspect-[4/5]",
    },
    {
      src: "/assets/gallery/shruti-15.jpg",
      fallback: "/assets/gallery/photo-3.svg",
      title: "Pure Delight",
      caption: "A genuine heart that brings out the best in everyone around her.",
      category: "candid",
      aspect: "aspect-square",
    },
    {
      src: "/assets/gallery/shruti-16.jpg",
      fallback: "/assets/gallery/photo-4.svg",
      title: "Dreamer's Gaze",
      caption: "Looking forward into her golden 21st chapter of life.",
      category: "portraits",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/assets/gallery/shruti-17.jpg",
      fallback: "/assets/gallery/photo-5.svg",
      title: "Heart of Gold",
      caption: "Compassionate, caring, and deeply appreciated by everyone.",
      category: "celebration",
      aspect: "aspect-square",
    },
    {
      src: "/assets/gallery/shruti-18.jpg",
      fallback: "/assets/gallery/photo-6.svg",
      title: "Vibrant Energy",
      caption: "Spreading contagious joy, vibrancy, and cheer everywhere.",
      category: "celebration",
      aspect: "aspect-[4/5]",
    },
    {
      src: "/assets/gallery/shruti-19.jpg",
      fallback: "/assets/gallery/photo-1.svg",
      title: "Star of the Day",
      caption: "The queen of this milestone celebration, shining bright.",
      category: "celebration",
      aspect: "aspect-square",
    },
    {
      src: "/assets/gallery/shruti-20.jpg",
      fallback: "/assets/gallery/photo-2.svg",
      title: "Serene & Beautiful",
      caption: "A tranquil, lovely glimpse into her enchanting personality.",
      category: "portraits",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/assets/gallery/shruti-21.jpg",
      fallback: "/assets/gallery/photo-3.svg",
      title: "21 Years of Magic",
      caption: "21 years of growing into the wonderful, inspiring woman she is today.",
      category: "celebration",
      aspect: "aspect-[4/5]",
    },
  ],
  wishes: [
    {
      title: "Happiness",
      subtitle: "Joy In Every Step",
      quote: "May your days always have a reason to smile.",
      tag: "Pure Joy",
    },
    {
      title: "Dreams",
      subtitle: "Boundless Ambition",
      quote: "May every dream you carry find its way to reality.",
      tag: "Infinite Potential",
    },
    {
      title: "Memories",
      subtitle: "Treasured Moments",
      quote: "May you collect countless beautiful moments.",
      tag: "Cherished Times",
    },
    {
      title: "Future",
      subtitle: "The Unwritten Story",
      quote: "May the best chapters of your story still be ahead.",
      tag: "Chapter 21",
    },
  ],
  timeline: [
    {
      period: "2005",
      yearLabel: "22 October 2005",
      title: "The Beginning",
      description: "The beginning of a beautiful journey.",
      badge: "Born",
    },
    {
      period: "Growing Years",
      yearLabel: "2006 — 2025",
      title: "Discovering Wonders",
      description: "New dreams, new experiences, new memories.",
      badge: "Growing",
    },
    {
      period: "2026",
      yearLabel: "22 October 2026",
      title: "Celebrating 21 Years",
      description: "21 years of becoming the person you are today.",
      badge: "Today",
    },
    {
      period: "Next Chapter",
      yearLabel: "2026 & Beyond",
      title: "The Golden Horizon",
      description: "More dreams. More adventures. More beautiful moments.",
      badge: "21 ✨",
    },
  ],
};
