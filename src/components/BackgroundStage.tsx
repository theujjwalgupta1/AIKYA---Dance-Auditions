import React, { useEffect, useRef } from 'react';
import { AUDITION_MEDIA, AuditionMedia } from '../assets/images';
import { Layers } from 'lucide-react';

interface BackgroundStageProps {
  activeMediaIndex: number;
  onSelectMedia: (index: number) => void;
  ambientParticles?: boolean;
}

export const BackgroundStage: React.FC<BackgroundStageProps> = ({
  activeMediaIndex,
  onSelectMedia,
  ambientParticles = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle ambient smoke/mist particle effect on canvas
  useEffect(() => {
    if (!ambientParticles) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    interface Particle {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speedX: number;
      speedY: number;
      fadeSpeed: number;
    }

    const particles: Particle[] = [];
    const maxParticles = 32;

    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 80 + 30,
        alpha: Math.random() * 0.08 + 0.02,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: -Math.random() * 0.3 - 0.1,
        fadeSpeed: Math.random() * 0.001 + 0.0005,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha += p.fadeSpeed;

        if (p.alpha > 0.09 || p.alpha < 0.02) {
          p.fadeSpeed = -p.fadeSpeed;
        }

        if (p.y + p.radius < 0) {
          p.y = height + p.radius;
          p.x = Math.random() * width;
        }
        if (p.x < -p.radius) p.x = width + p.radius;
        if (p.x > width + p.radius) p.x = -p.radius;

        const grad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius,
        );
        grad.addColorStop(0, `rgba(255, 255, 255, ${p.alpha})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [ambientParticles]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070709]">
      {/* Background Images with cross-fade */}
      {AUDITION_MEDIA.map((item: AuditionMedia, idx: number) => {
        const isActive = idx === activeMediaIndex;
        return (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-35' : 'opacity-0'
            }`}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90 scale-105 transform duration-10000"
              referrerPolicy="no-referrer"
            />
          </div>
        );
      })}

      {/* Atmospheric Vignette & Scrims */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#070709]/75 to-[#070709]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#070709]/90 via-[#070709]/50 to-[#070709]" />

      {/* Zen Ink Calligraphy Brush Stroke Texture (Enso Glow in center) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.03] blur-3xl animate-pulse-glow" />

      {/* Canvas for smoke drifting */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-70 pointer-events-none"
      />

      {/* Interactive Background Mood Selector (Pointer-events enabled on control) */}
      <div className="absolute bottom-6 right-6 z-20 pointer-events-auto hidden md:flex items-center gap-2 p-1.5 bg-neutral-950/80 backdrop-blur-md border border-white/10 rounded-xl shadow-xl">
        <div className="flex items-center gap-1.5 px-2 text-xs text-neutral-400 font-medium">
          <Layers className="w-3.5 h-3.5 text-neutral-300" />
          <span>Stage Mood:</span>
        </div>
        <div className="flex items-center gap-1">
          {AUDITION_MEDIA.map((media, idx) => (
            <button
              key={media.id}
              onClick={() => onSelectMedia(idx)}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
                activeMediaIndex === idx
                  ? 'bg-white text-neutral-950 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {media.title.replace('The ', '')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
