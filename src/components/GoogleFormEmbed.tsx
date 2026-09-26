import React, { useState } from 'react';
import {
  RotateCw,
  Maximize2,
  Minimize2,
  CheckCircle2,
  FileText,
  ShieldCheck,
} from 'lucide-react';

interface GoogleFormEmbedProps {
  embedUrl: string;
}

export const GoogleFormEmbed: React.FC<GoogleFormEmbedProps> = ({
  embedUrl,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  const handleRefresh = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <section id="audition-form" className="relative z-10 py-8 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 font-medium mb-3">
            <FileText className="w-3.5 h-3.5 text-neutral-300" />
            <span>Official Application</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            Audition Registration
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Please fill out all sections directly in the form below. Once submitted, your registration is locked for the 2026 band auditions.
          </p>
        </div>

        {/* Form Container Card */}
        <div
          className={`transition-all duration-300 ${
            isFullscreen
              ? 'fixed inset-0 z-50 bg-[#070709] p-4 sm:p-8 overflow-y-auto'
              : 'relative rounded-3xl bg-neutral-950/85 backdrop-blur-2xl border border-white/15 p-3 sm:p-6 shadow-2xl shadow-black/80'
          }`}
        >
          {/* Form Toolbar */}
          <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10 px-2 sm:px-0">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  AIKYA 2026 Dance Audition Form
                </h3>
                <p className="text-xs text-neutral-400">
                  Fill out and submit directly on this page
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleRefresh}
                title="Reload form"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                aria-label="Reload Form"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Refresh</span>
              </button>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                title={isFullscreen ? 'Exit full screen' : 'Expand full screen'}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                aria-label="Toggle Fullscreen"
              >
                {isFullscreen ? (
                  <>
                    <Minimize2 className="w-3.5 h-3.5" />
                    <span>Exit Fullscreen</span>
                  </>
                ) : (
                  <>
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Full Screen</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Form note */}
          <div className="mb-4 p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2 text-xs text-neutral-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Secure embedded submission. Scroll through the questions, enter your details, and hit <strong className="text-white">Submit</strong> at the bottom.
            </span>
          </div>

          {/* Google Form Iframe */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-[#121214] border border-white/10 shadow-inner">
            <iframe
              key={iframeKey}
              src={embedUrl}
              title="AIKYA Dance Auditions Google Form"
              className={`w-full border-0 transition-all ${
                isFullscreen ? 'h-[85vh]' : 'h-[850px] sm:h-[950px]'
              }`}
              loading="lazy"
            >
              Loading AIKYA Dance Auditions Google Form…
            </iframe>
          </div>

          {/* Form Field Reference Guide */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-4">
              Fields required in this form:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs">
              {[
                { title: 'Full Name', note: 'As on college ID' },
                { title: 'USN / Roll No.', note: 'University Seat Number' },
                { title: 'College Branch', note: 'e.g. CSE, ISE, ECE, ME' },
                { title: 'Contact / WhatsApp', note: 'For callback updates' },
                { title: 'Dance Style', note: 'Breaking, Popping, Choreo, etc.' },
                { title: 'Past Competitions', note: 'College fests / solos' },
                { title: 'Experience (Years)', note: 'Beginner to advanced' },
                { title: 'Audition Video Link', note: 'Drive or WhatsApp clip' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5"
                >
                  <div className="flex items-center gap-1.5 text-neutral-200 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{item.title}</span>
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-1 pl-5">
                    {item.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
