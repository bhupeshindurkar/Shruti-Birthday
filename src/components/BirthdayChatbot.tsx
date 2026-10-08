import React, { useState, useRef, useEffect } from 'react';
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Bot,
  Heart,
  ChevronDown,
  RefreshCw,
  User,
  Code,
  Gift,
} from 'lucide-react';
import { birthdayData } from '../config/birthdayData';
import { generateIntelligentCelebrationResponse } from '../utils/intelligentChatEngine';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

export const BirthdayChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `Hello! 🌸✨ I am **Shruti's Celebration Concierge**, crafted by Full Stack Developer **Bhupesh Indurkar** to celebrate Shruti Lanjewar's 21st birthday!\n\nI can write custom poems, Hindi shayaris, toasts, explain her Libra astrology, share details about developer Bhupesh, or guide you through the 3D Cake & Keepsake PDF Card! How can I make her day extra memorable? 💖🥂`,
      timestamp: 'Just now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input.trim();
    if (!textToSend || loading) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      role: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!messageText) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: messages.map((m) => ({ role: m.role, text: m.text })),
        }),
      });

      const data = await response.json();
      const replyContent = data.reply || generateIntelligentCelebrationResponse(textToSend, messages);
      const botMsg: ChatMessage = {
        id: String(Date.now() + 1),
        role: 'model',
        text: replyContent,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      // Immediate intelligent offline brain fallback
      const smartFallback = generateIntelligentCelebrationResponse(textToSend, messages);
      const fallbackMsg: ChatMessage = {
        id: String(Date.now() + 1),
        role: 'model',
        text: smartFallback,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  const quickPrompts = [
    '👨‍💻 Developer Bhupesh Indurkar',
    '👑 Tell me about Shruti',
    '🌹 Hindi Shayari for Shruti',
    '🎂 How to cut 3D Cake',
    '📜 Download PDF Keepsake',
    '✍️ Write a birthday poem',
    '⚖️ Shruti\'s Libra traits',
    '🥂 21st Birthday Toast',
  ];

  const formatMessageText = (text: string) => {
    return text.split('\n').map((line, lineIndex) => {
      // Parse markdown bold and italic
      const parts = line.split(/(\*\*.*?\*\*|\*.*?\*)/g);
      return (
        <span key={lineIndex} className="block min-h-[1.15em]">
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={pIdx} className="font-bold text-inherit">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            if (part.startsWith('*') && part.endsWith('*')) {
              return (
                <em key={pIdx} className="italic opacity-95">
                  {part.slice(1, -1)}
                </em>
              );
            }
            return part;
          })}
        </span>
      );
    });
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full glass-pill border border-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-95 bg-white/95 text-[#701a34]"
            aria-label="Open Birthday AI Concierge"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#b33355] to-[#f472b6] flex items-center justify-center text-white shadow-sm">
              <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
            </div>

            <div className="text-left hidden sm:block">
              <span className="block text-xs font-bold leading-tight text-[#451422]">
                Celebration AI
              </span>
              <span className="block text-[10px] text-[#9c4760] font-medium leading-none">
                Wishes &amp; Poetry Concierge
              </span>
            </div>

            {/* Pulsing indicator */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
          </button>
        )}
      </div>

      {/* Concierge Window Dialog */}
      {isOpen && (
        <div
          className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-24px)] max-w-[420px] h-[580px] max-h-[85vh] rounded-[2rem] glass-panel shadow-2xl border border-white/95 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300"
          role="dialog"
          aria-labelledby="chatbot-heading"
        >
          {/* Header Bar */}
          <div className="px-4 sm:px-5 py-3.5 bg-gradient-to-r from-white/95 via-rose-50/90 to-white/95 border-b border-rose-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#b33355] to-[#f472b6] flex items-center justify-center text-white shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3
                  id="chatbot-heading"
                  className="font-serif text-sm sm:text-base font-bold text-[#451422] leading-tight"
                >
                  Shruti&apos;s Concierge
                </h3>
                <span className="text-[10px] sm:text-[11px] text-[#8c2545] font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                  <span>Dev by Bhupesh Indurkar</span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full bg-rose-50 hover:bg-rose-100 border border-rose-200/70 text-[#8c3a53] hover:text-[#451422] transition-all active:scale-95 cursor-pointer shadow-sm"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Prompts Bar */}
          <div className="px-3 py-2 bg-rose-50/50 border-b border-rose-100/60 flex gap-1.5 overflow-x-auto scrollbar-none">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                disabled={loading}
                className="whitespace-nowrap px-2.5 py-1 text-[11px] font-medium rounded-full bg-white/90 text-[#701a34] border border-rose-200/80 hover:bg-rose-100/70 transition-colors shadow-xs active:scale-95"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3.5 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.role === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[88%] sm:max-w-[85%] rounded-2xl px-4 py-2.5 shadow-xs whitespace-pre-wrap leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-[#b33355] to-[#8c2545] text-white rounded-br-xs'
                      : 'bg-white/95 border border-rose-100/90 text-[#451422] rounded-bl-xs'
                  }`}
                >
                  {formatMessageText(msg.text)}
                </div>
                <span className="text-[10px] text-[#9c4760]/70 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-xs text-[#8c2545] font-medium bg-white/80 border border-rose-100 rounded-2xl px-3.5 py-2.5 w-max">
                <Sparkles className="w-4 h-4 animate-spin text-[#b33355]" />
                <span>Crafting celebration response...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white/95 border-t border-rose-100">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask poem, toast, wish, or about Bhupesh..."
                className="flex-1 px-4 py-2.5 rounded-full bg-rose-50/70 border border-rose-200 text-xs sm:text-sm text-[#451422] placeholder:text-[#a84462]/60 focus:outline-none focus:ring-2 focus:ring-[#b83358]/30 focus:border-[#b83358]"
              />

              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || loading}
                className="p-2.5 rounded-full bg-gradient-to-r from-[#b33355] to-[#8c2545] text-white shadow-sm disabled:opacity-40 hover:opacity-95 transition-all active:scale-95"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-1.5 flex items-center justify-between px-1 text-[10px] text-[#9c4760]/80">
              <span>Shruti Lanjewar • 22 Oct 2026</span>
              <span className="font-medium text-[#7d1936]">Full Stack: Bhupesh Indurkar</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
