import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#070709]/80 border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          className="text-2xl font-black tracking-widest text-white uppercase font-display flex items-center gap-2 group"
        >
          <span className="text-white group-hover:tracking-wider transition-all duration-300">
            AIKYA
          </span>
          <span className="text-xs px-2 py-0.5 border border-white/20 text-neutral-400 font-normal tracking-wider rounded">
            2026
          </span>
        </a>

        {/* Primary Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="#audition-form"
            className="px-4.5 py-2 text-xs font-semibold text-black bg-white hover:bg-neutral-200 rounded-lg transition-all shadow-sm tracking-wide"
          >
            Audition Form
          </a>
        </div>
      </div>
    </header>
  );
};

