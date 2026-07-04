import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { FinalCtaSection } from '../types';

interface FinalCtaProps {
  finalCta: FinalCtaSection;
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ finalCta, onOpenBooking }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-[#0F0F0F] border-b border-[#222222]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#C5FF41] border-2 border-[#222222] p-8 sm:p-14 md:p-16 text-center relative overflow-hidden shadow-2xl text-black">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-[#C5FF41] text-xs sm:text-sm font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-[#C5FF41]" />
              <span>{finalCta.badge}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase text-black tracking-tighter leading-[0.96]">
              {finalCta.title}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#222222] max-w-2xl mx-auto font-sans font-medium">
              {finalCta.subtitle}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 bg-black hover:bg-[#111111] text-[#F5F5F0] font-mono font-extrabold uppercase text-sm tracking-widest transition-all flex items-center justify-center gap-3 border border-black"
              >
                <span>{finalCta.primaryCtaLabel}</span>
                <ArrowRight className="w-5 h-5 text-[#C5FF41]" />
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-black/10 border-2 border-black text-black font-mono font-bold uppercase text-sm tracking-wider transition-all"
              >
                <span>{finalCta.secondaryCtaLabel}</span>
              </button>
            </div>

            <div className="pt-6 flex items-center justify-center gap-6 text-xs font-mono font-bold uppercase tracking-widest text-[#222222]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> No Contracts
              </span>
              <span>•</span>
              <span>100% Customized Protocol</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
