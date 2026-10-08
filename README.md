<div align="center">

# 🎂 Shruti Lanjewar — 21st Milestone Birthday Celebration ✨

### *A Bespoke, Luxury 3D Digital Celebration Web Experience*

[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL_3D-black?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-Backend_API-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-Fast_Bundler-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

<p align="center">
  <b>Designed & Engineered with ❤️ by</b><br>
  <a href="#-about-the-developer">
    <b>Bhupesh Indurkar — Professional Full Stack Developer</b>
  </a>
</p>

---

</div>

## 📖 Overview

This web application is a high-end, immersive digital tribute crafted to commemorate **Shruti Lanjewar's 21st Milestone Birthday** on **22 October 2026** (born 22 October 2005).

Combining modern aesthetic principles (fluid glassmorphism, warm pastel gradients, and champagne-gold accents) with state-of-the-art interactive 3D WebGL graphics and an intelligent AI celebration assistant, this project is built to deliver a deeply memorable, personal, and technologically sophisticated experience across all devices.

---

## 🌟 Key Features

### 1. 🎬 Cinematic Flash Screen (Splash Screen)
- **Royal Intro:** A luxury greeting modal featuring Shruti's portrait (`shruti-2.png`), golden-aura ring, and commemorative milestones.
- **Interactive Music Trigger:** Clicking **"Enter Celebration ✨"** triggers celebratory confetti bursts, dissolves the splash screen, and starts the background acoustic soundtrack seamlessly (respecting browser autoplay policies).
- **Developer Attribution:** Prominently spotlights **Bhupesh Indurkar (Full Stack Developer)** as the creator.

### 2. 🎂 Interactive 3D WebGL Celebration Cake
- **360° Drag & Rotate:** Fully interactive 3D procedural pastry model rendered with real-time lighting, shadows, rosettes, and pearl sprinkles.
- **3 Cake Flavor Themes:** Switch on the fly between *Princess Rosette*, *Champagne Gold*, and *Berry Blossom*.
- **Blow Out Candles:** Interactive button to extinguish the flickering 3D flames, trigger celebration confetti, and make a birthday wish.

### 3. 📸 21 Milestone Memories Gallery
- **21 Authentic Photos:** Curated collection of 21 authentic photos celebrating each year of Shruti's life.
- **Category Filter Tabs:**
  - *All 21 Photos*
  - *Portraits & Smiles ✨*
  - *Candid Moments 🌸*
  - *Celebration Spirit 🥂*
- **Responsive Lightbox:** Full-screen modal with photo counter (`PHOTO X OF 21`), keyboard navigation (Left/Right/Escape), and touch-friendly mobile navigation.

### 4. 🤖 Bilingual Intelligent Celebration Concierge (AI Chatbot)
- **Dual-Layer Intelligence:** Powered by Google Gemini AI with a rich client/server contextual reasoning engine (`intelligentChatEngine.ts`).
- **Multilingual Support:** Answers fluidly in **English, Hindi, and Hinglish**.
- **Specialized Topics:**
  - 🌹 *Hindi Shayaris & English Poetry* for Shruti.
  - 👨‍💻 *Developer Recognition:* Knows all about Bhupesh Indurkar's full-stack craftsmanship.
  - 👑 *Shruti's Milestones & Qualities:* Age, birth date, personality traits, and warm wishes.
  - ⚖️ *Libra Zodiac Astrology:* Governed by Venus (grace, balance, aesthetic eye, kindness).
  - 💡 *Interactive Website Guidance & Gift Ideas.*
- **Quick-Action Chips:** One-tap prompt pills for fast exploration.

### 5. 📜 Official Printable Keepsake PDF Card
- Built-in vector PDF generator ([jsPDF](https://github.com/parallax/jsPDF)) that produces an ultra-luxury A4 landscape commemorative certificate.
- Features multi-tiered gold and burgundy borders, filigree corner emblems, royal seals, and official developer signature credit.

### 6. 🎵 Acoustic Background Music Player
- Ambient piano & celesta celebration soundtrack.
- Volume slider (0% to 100%) and mute toggle.
- **Zero-Collision Responsive Layout:** Stacks neatly on mobile without obstructing navigation drawer.

### 7. ⏳ Milestone Age & Live Countdown
- Interactive 3D perspective tilting card with real-time glare reflection.
- Live countdown ticker tracking days, hours, minutes, and seconds to **22 October 2026**.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
|---|---|
| **Frontend Framework** | [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **3D Graphics & Animations** | [Three.js](https://threejs.org/) (WebGL 3D Cake & Pastel Dreamscape), Canvas Confetti, Lucide Icons |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/), Custom Glassmorphism, Responsive Grid / Flexbox |
| **AI & Conversational Logic** | [@google/genai](https://www.npmjs.com/package/@google/genai) + Custom Intelligent Celebration Engine |
| **PDF Generation** | [jsPDF](https://github.com/parallax/jsPDF) |
| **Backend & Tooling** | [Express](https://expressjs.com/), [Vite 8](https://vitejs.dev/), [TSX](https://github.com/privatenumber/tsx), [Node.js](https://nodejs.org/) |

---

## 📁 Project Directory Structure

```text
Birthday_shruti/
├── public/
│   └── assets/
│       ├── birthday-music.mp3      # Celebration acoustic soundtrack
│       ├── shruti-2.png            # Starting hero portrait
│       ├── shruti.jpg              # High-res fallback portrait
│       └── gallery/                # 21 authentic milestone photos (shruti-1 to shruti-21)
├── src/
│   ├── components/
│   │   ├── BirthdayCard.tsx        # 3D tilting milestone card & vertical journey
│   │   ├── BirthdayChatbot.tsx     # Intelligent celebration AI concierge
│   │   ├── BirthdayMessage.tsx     # Heartfelt celebratory prose
│   │   ├── Countdown.tsx           # Live real-time countdown ticker
│   │   ├── FinalCard.tsx           # Luxury closing greeting & PDF download
│   │   ├── FloatingHeartParticles.tsx # Floating background micro-particles
│   │   ├── Footer.tsx              # Prominent developer attribution & credits
│   │   ├── Hero.tsx                # Hero banner with shruti-2.png portrait
│   │   ├── Interactive3DCake.tsx   # Three.js 3D pastry viewer & candle blower
│   │   ├── MemoryGallery.tsx       # 21 photos masonry grid & lightbox
│   │   ├── MusicControl.tsx        # Responsive audio player
│   │   ├── Navbar.tsx              # Floating glass navigation pill & mobile drawer
│   │   ├── SplashScreen.tsx        # Cinematic luxury flash / intro screen
│   │   ├── SurpriseModal.tsx       # Confetti surprise dialog
│   │   ├── ThreeDreamscape.tsx     # Ethereal 3D WebGL background canvas
│   │   ├── Timeline.tsx            # 4-stage milestone memory timeline
│   │   └── Wishes.tsx              # 4 custom aesthetic wishes cards
│   ├── config/
│   │   └── birthdayData.ts         # Central celebration configuration & metadata
│   ├── utils/
│   │   ├── generatePdfCard.ts      # Vector PDF certificate generator
│   │   └── intelligentChatEngine.ts # Multilingual AI knowledge & reasoning engine
│   ├── App.tsx                     # Main application orchestrator
│   ├── index.css                   # Tailwind tokens, typography, and glass effects
│   └── main.tsx                    # React application entry point
├── server.ts                       # Express server + Gemini AI endpoint + Vite dev middleware
├── package.json                    # Project dependencies and npm scripts
├── tsconfig.json                   # TypeScript configuration
└── vite.config.ts                  # Vite build and plugin setup
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### Installation

1. **Clone or navigate to the repository:**
   ```bash
   cd Birthday_shruti
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **(Optional) Configure Gemini API Key:**
   Create a `.env` file in the project root if you wish to use live Google Gemini AI calls:
   ```env
   GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
   PORT=3000
   ```
   *(Note: The application includes an offline intelligent fallback engine that handles all queries even without an API key!)*

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Run TypeScript linting:**
   ```bash
   npm run lint
   ```

---

## 👨‍💻 About the Developer

<div align="center">

### **Bhupesh Indurkar**
**Professional Full Stack Developer & Creative Technologist**

*Concept, 3D Architecture, UI/UX Engineering, and Full Stack Implementation*

> *"Crafted with immense passion, technical artistry, and wholehearted love to celebrate Shruti Lanjewar on her 21st Milestone Birthday."*

</div>

---

## 💖 Dedication

This digital celebration is exclusively dedicated to **Shruti Lanjewar** on her **21st Birthday (22 October 2026)**.  
*May your days be filled with endless laughter, boundless light, and dreams turned into reality! ✨*

---

<div align="center">
  <sub>© 2026 • Handcrafted with love by <b>Bhupesh Indurkar</b> for <b>Shruti Lanjewar</b>. All rights reserved.</sub>
</div>
