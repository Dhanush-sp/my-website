import React from 'react';
import { ShieldCheck, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import { HowItWorksSection } from '../types';

interface HowItWorksProps {
  howItWorks: HowItWorksSection;
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ howItWorks, onOpenBooking }) => {
  const icons = [ShieldCheck, Zap, TrendingUp];

  return (
    <section id="how-it-works" className="py-24 relative bg-[#0F0F0F] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] border border-[#222222] text-[#C5FF41] text-xs font-mono font-bold tracking-widest uppercase">
            <span>{howItWorks.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#F5F5F0] tracking-tighter uppercase">
            {howItWorks.title}
          </h2>
          <p className="text-base sm:text-lg text-[#AAA] font-sans font-normal">
            {howItWorks.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connecting Line on Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-[#222222] -translate-y-12 pointer-events-none" />

          {howItWorks.steps.map((step, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="relative bg-[#111111] border border-[#222222] p-8 shadow-xl hover:border-[#C5FF41] transition-all duration-300 flex flex-col justify-between group z-10"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-[#C5FF41] flex items-center justify-center text-black shadow-none group-hover:bg-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-4xl font-black text-[#222222] group-hover:text-[#C5FF41] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-black uppercase tracking-tight text-[#F5F5F0] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#AAA] text-sm sm:text-base leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#222222] flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5FF41]">
                  <span>Phase 0{idx + 1} Protocol</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action button */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#C5FF41] text-black font-mono font-extrabold uppercase text-sm tracking-widest hover:bg-white transition-all border border-[#C5FF41]"
          >
            <span>Start Your 90-Day Progression</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
