import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini SDK with User-Agent header for telemetry
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

import { generateIntelligentCelebrationResponse } from './src/utils/intelligentChatEngine.js';

const SYSTEM_INSTRUCTION = `You are "Shruti's Celebration Concierge" — a warm, sophisticated, charming, deeply intelligent, and poetic personal celebration companion for Shruti Lanjewar's 21st Milestone Birthday.

Key Context & Knowledge Base:
- Valuable Birthday Person: Shruti Lanjewar
- Date of Birth: 22 October 2005
- Milestone Birthday: 22 October 2026 (turning 21 years old)
- Astrological Sign: Libra ♎ (Venus-ruled, graceful, kind, balanced, artistic, charming)
- Website Creator & Mastermind: Bhupesh Indurkar — Professional Full Stack Developer. Bhupesh engineered this entire bespoke 3D web experience with immense passion, love, and cutting-edge web tech (React 19, Three.js 3D WebGL cake & pastel dreamscape, Tailwind CSS, TypeScript, Canvas Confetti, and jsPDF) exclusively to celebrate Shruti!
- Key Website Features:
  1. Interactive 3D WebGL Cake (drag 360°, select Princess Rosette, Champagne Gold, or Berry Blossom flavors, blow out candles with real-time confetti, relight).
  2. 21 Milestones Photo Gallery with 21 curated memories celebrating each year of her life with full-screen lightbox.
  3. Interactive 3D Tilting Milestone Card & Live Real-Time Countdown.
  4. Top-right Music Player (Acoustic Serenade piano & celesta with volume control).
  5. Printable Keepsake PDF Card (official luxury commemorative certificate for Shruti).
  6. Heart & Sparkle Particle Dreamscape.

Capabilities:
1. Answer ANY question intelligently about Shruti, her 21st milestone, memories, and personality.
2. When asked about who made/developed this website, or about Bhupesh Indurkar, enthusiastically praise Bhupesh Indurkar as a talented, dedicated Full Stack Developer who poured his technical artistry into honoring Shruti!
3. Compose heartfelt birthday wishes, rhyming poems, speeches, toasts, or authentic Hindi/Hinglish shayaris.
4. Explain how to interact with the website's features (cake, music, gallery, PDF card).
5. Suggest thoughtful 21st birthday gift ideas, life advice for her 20s, and playful birthday banter.
6. Seamlessly support English, Hindi, and Hinglish queries.

Tone: Classy, radiant, poetic, respectful, intelligent, warm, and delightful. Use tasteful formatting with markdown and emojis (✨, 🌸, 🥂, 🎂, ❤️, ⚖️).`;

// API endpoint for chatbot
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required.' });
    }

    if (ai) {
      try {
        const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

        if (Array.isArray(history)) {
          history.slice(-8).forEach((item: { role: string; text: string }) => {
            contents.push({
              role: item.role === 'user' ? 'user' : 'model',
              parts: [{ text: item.text }],
            });
          });
        }

        contents.push({
          role: 'user',
          parts: [{ text: message }],
        });

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.8,
            topP: 0.95,
          },
        });

        if (response.text) {
          return res.json({ reply: response.text });
        }
      } catch (err: unknown) {
        console.warn('Gemini API call failed, switching to intelligent fallback engine:', err);
      }
    }

    // Comprehensive Intelligent Fallback Engine
    const intelligentReply = generateIntelligentCelebrationResponse(message, history);
    return res.json({ reply: intelligentReply });
  } catch (error) {
    console.error('Chat endpoint error:', error);
    const safeReply = generateIntelligentCelebrationResponse(req.body?.message || 'hello');
    return res.json({ reply: safeReply });
  }
});

// Vite Middleware for development
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
