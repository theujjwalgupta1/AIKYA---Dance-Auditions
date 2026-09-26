import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#070709] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <span className="text-xl font-black tracking-widest text-white uppercase font-display">
              AIKYA
            </span>
            <span className="text-xs text-neutral-400">·</span>
            <span className="text-xs text-neutral-400 font-cinzel">合一</span>
            <span className="text-xs text-neutral-400">·</span>
            <span className="text-xs text-neutral-400">College Dance Band Auditions 2026</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-neutral-400">
            <a href="#audition-form" className="hover:text-white transition-colors">
              Audition Form
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              Audition FAQ
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5">
            <span>Built for the dancers of AIKYA</span>
            <Heart className="w-3.5 h-3.5 text-neutral-400 fill-neutral-400" />
            <span>Move in Silence. Move as One.</span>
          </div>
          <div>
            &copy; 2026 AIKYA Dance Band. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

