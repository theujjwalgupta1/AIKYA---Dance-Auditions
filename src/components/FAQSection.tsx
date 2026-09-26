import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: 'Can 1st year freshers with no crew experience audition?',
    a: 'Absolutely yes! AIKYA values hunger, rhythm, and coachability just as much as past stage credits. Many of our core battlers started dancing in their 1st semester.',
  },
  {
    q: 'What if I do not have a dance video ready right now?',
    a: 'Submit your Google Form right away with your USN and contact info. You will have a 48-hour grace window to WhatsApp your 45-90s dance clip to the student coordinator number listed on the confirmation.',
  },
  {
    q: 'Can I audition in multiple styles (e.g., Hip Hop choreo + Breaking)?',
    a: 'Yes. In the "Dance Style" question of the Google Form, list your primary style first and secondary styles next. In your video or cypher, feel free to showcase both.',
  },
  {
    q: 'How does the dance band balance rehearsals with college exams and labs?',
    a: 'Rehearsals are scheduled during post-college evening slots and weekend jams. During internals and final semester examinations, team rehearsals are adjusted so academics remain a top priority.',
  },
  {
    q: 'What will happen during the on-campus offline round?',
    a: 'Shortlisted dancers attend a live workshop cypher where the choreographers teach an 8-count routine to evaluate pickup speed, followed by an open cypher round for freestyle expression.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative z-10 py-16 md:py-24 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 font-medium mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Audition FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            Common Questions
          </h2>
          <p className="mt-3 text-neutral-400 text-sm">
            Everything you need to know about joining AIKYA Dance Band 2026.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-neutral-950/70 border border-white/10 overflow-hidden backdrop-blur-md transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300/90 leading-relaxed border-t border-white/5">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Coordinator Help Card */}
        <div className="mt-10 p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Have questions or need audition help?
              </div>
              <div className="text-xs text-neutral-400">
                You can write your query in the comments or contact questions inside the audition form above.
              </div>
            </div>
          </div>

          <a
            href="#audition-form"
            className="px-4 py-2 text-xs font-semibold text-black bg-white hover:bg-neutral-200 rounded-lg whitespace-nowrap transition-colors"
          >
            Go to Form
          </a>
        </div>
      </div>
    </section>
  );
};
