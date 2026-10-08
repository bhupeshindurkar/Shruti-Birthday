import React, { useMemo } from 'react';

/**
 * FloatingHeartParticles Component
 * Subtly floats small pastel hearts, sparkles, and soft champagne circles.
 * Non-intrusive, pointer-events-none, respects prefers-reduced-motion.
 */
export const FloatingHeartParticles: React.FC = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${(i * 5.5 + Math.random() * 4) % 100}%`,
      delay: `${(i * 1.8) % 14}s`,
      duration: `${14 + (i % 7) * 3}s`,
      size: 10 + (i % 4) * 5,
      type: i % 3 === 0 ? 'heart' : i % 3 === 1 ? 'sparkle' : 'circle',
      opacity: 0.15 + (i % 3) * 0.1,
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-10"
      aria-hidden="true"
    >
      <style>{`
        @keyframes floatUpward {
          0% {
            transform: translateY(105vh) scale(0.8) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: var(--target-opacity);
          }
          85% {
            opacity: var(--target-opacity);
          }
          100% {
            transform: translateY(-10vh) scale(1.1) rotate(25deg);
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .floating-particle-item {
            display: none !important;
          }
        }
      `}</style>

      {particles.map((p) => (
        <div
          key={p.id}
          className="floating-particle-item absolute"
          style={
            {
              left: p.left,
              bottom: 0,
              animation: `floatUpward ${p.duration} linear infinite`,
              animationDelay: p.delay,
              '--target-opacity': p.opacity,
            } as React.CSSProperties
          }
        >
          {p.type === 'heart' && (
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              fill="#e87998"
              className="text-rose-400"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}

          {p.type === 'sparkle' && (
            <svg
              width={p.size * 0.9}
              height={p.size * 0.9}
              viewBox="0 0 24 24"
              fill="#eab308"
              className="text-amber-400"
            >
              <polygon points="12,2 14.5,9.5 22,12 14.5,14.5 12,22 9.5,14.5 2,12 9.5,9.5" />
            </svg>
          )}

          {p.type === 'circle' && (
            <div
              style={{
                width: `${p.size * 0.6}px`,
                height: `${p.size * 0.6}px`,
                backgroundColor: '#fed7aa',
              }}
              className="rounded-full blur-[0.5px]"
            />
          )}
        </div>
      ))}
    </div>
  );
};
