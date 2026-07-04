import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqSection } from '../types';

interface FaqProps {
  faq: FaqSection;
}

export const Faq: React.FC<FaqProps> = ({ faq }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#0F0F0F] border-b border-[#222222]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] border border-[#222222] text-[#C5FF41] text-xs font-mono font-bold tracking-widest uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5FF41]" />
            <span>{faq.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-[#F5F5F0] tracking-tighter">
            {faq.title}
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faq.faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#111111] border-[#C5FF41]'
                    : 'bg-[#111111] border-[#222222] hover:border-[#AAA]'
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-display font-black uppercase text-base sm:text-lg text-[#F5F5F0] tracking-tight"
                >
                  <span>{item.q}</span>
                  <div
                    className={`w-8 h-8 bg-[#1A1A1A] border border-[#222222] flex items-center justify-center text-[#AAA] shrink-0 transition-all duration-300 ${
                      isOpen ? 'rotate-180 bg-[#C5FF41] text-black border-[#C5FF41]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-3 text-[#AAA] text-sm sm:text-base leading-relaxed font-sans border-t border-[#222222]">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
