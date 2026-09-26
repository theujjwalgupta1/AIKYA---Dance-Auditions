import React from 'react';
import { ChevronDown, Video, Users, Trophy } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <section className="relative z-10 pt-16 pb-14 md:pt-24 md:pb-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
      {/* Kanji / Calligraphy Symbol Badge from Poster */}
      <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
        <span className="font-cinzel text-lg tracking-widest text-neutral-300">
          合一
        </span>
        <span className="text-neutral-500">·</span>
        <span className="text-xs uppercase tracking-widest text-neutral-300 font-medium">
          Move as One
        </span>
      </div>

      {/* Main Punchy Typography */}
      <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white uppercase font-display leading-[0.9] text-balance max-w-5xl">
        AIKYA
      </h1>

      <div className="mt-3 flex items-center justify-center gap-3 text-sm sm:text-lg md:text-xl font-medium tracking-[0.25em] text-neutral-300 uppercase">
        <span>Dance Auditions</span>
        <span className="text-neutral-500">—</span>
        <span className="text-white font-bold">2026</span>
      </div>

      <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300/90 max-w-2xl text-balance font-light leading-relaxed">
        Different stories. Same stage. Step into the cypher and become part of
        our college dance band.
      </p>

      {/* Primary CTA */}
      <div className="mt-8 flex justify-center w-full">
        <button
          onClick={onRegisterClick}
          className="w-full sm:w-auto px-8 py-4 text-sm font-bold tracking-wider uppercase text-black bg-white hover:bg-neutral-200 rounded-xl transition-all shadow-lg hover:shadow-white/10 flex items-center justify-center gap-2"
        >
          <span>Fill Audition Form Below</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>

      {/* Key Proof / Audition Metrics Ribbon */}
      <div className="mt-12 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
        <div className="p-5 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
              Eligibility
            </div>
            <div className="text-sm font-semibold text-white mt-0.5">
              All Branches & Years
            </div>
            <div className="text-xs text-neutral-400 mt-1">
              Freshers & seniors welcome
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white shrink-0">
            <Video className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
              Submission
            </div>
            <div className="text-sm font-semibold text-white mt-0.5">
              60s Dance Video Link
            </div>
            <div className="text-xs text-neutral-400 mt-1">
              Drive or WhatsApp upload
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white shrink-0">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
              On-Campus Round
            </div>
            <div className="text-sm font-semibold text-white mt-0.5">
              Offline Cypher & Choreo
            </div>
            <div className="text-xs text-neutral-400 mt-1">
              Auditorium / Dance Arena
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

