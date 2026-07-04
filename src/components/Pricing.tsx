import React from 'react';
import { Check, Flame, ArrowRight, Shield } from 'lucide-react';
import { PricingSection } from '../types';

interface PricingProps {
  pricing: PricingSection;
  onOpenBooking: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ pricing, onOpenBooking }) => {
  return (
    <section id="pricing" className="py-24 bg-[#0F0F0F] border-b border-[#222222] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] border border-[#222222] text-[#C5FF41] text-xs font-mono font-bold tracking-widest uppercase">
            <span>{pricing.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#F5F5F0] tracking-tighter uppercase">
            {pricing.title}
          </h2>
          <p className="text-base sm:text-lg text-[#AAA] font-sans font-normal">
            {pricing.subtitle}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricing.tiers.map((tier, idx) => {
            const isPopular = idx === 1 || tier.name.toLowerCase().includes('vip') || tier.name.toLowerCase().includes('popular');

            return (
              <div
                key={idx}
                className={`relative p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#111111] border-2 border-[#C5FF41] shadow-2xl scale-[1.02]'
                    : 'bg-[#111111] border border-[#222222] hover:border-[#C5FF41]'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-8 bg-[#C5FF41] text-black text-[11px] font-extrabold font-mono uppercase tracking-widest px-3 py-1 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 fill-current" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  <h3 className="font-display text-2xl font-black uppercase text-[#F5F5F0] tracking-tight mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-[#AAA] mb-6 min-h-[40px] font-sans">
                    {tier.desc}
                  </p>

                  <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-[#222222]">
                    <span className="font-display text-4xl sm:text-5xl font-black text-[#F5F5F0] tracking-tighter">
                      {tier.price.split('/')[0]}
                    </span>
                    {tier.price.includes('/') && (
                      <span className="text-[#AAA] font-mono text-sm uppercase">
                        /{tier.price.split('/')[1]}
                      </span>
                    )}
                  </div>

                  {/* Feature list */}
                  <div className="space-y-4 mb-8">
                    <div className="text-xs font-mono uppercase text-[#AAA] tracking-widest font-bold">
                      Included in this tier:
                    </div>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-[#1A1A1A] border border-[#222222] flex items-center justify-center text-[#C5FF41] shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-sm text-[#F5F5F0] leading-snug font-sans">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={onOpenBooking}
                    className={`w-full py-4 font-mono font-extrabold uppercase tracking-widest text-sm transition-all shadow-none flex items-center justify-center gap-2 border ${
                      isPopular
                        ? 'bg-[#C5FF41] hover:bg-white text-black border-[#C5FF41]'
                        : 'bg-[#1A1A1A] hover:bg-[#C5FF41] hover:text-black text-[#F5F5F0] border-[#222222]'
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-xs text-[#AAA] font-mono uppercase tracking-wider">
                    <Shield className="w-3.5 h-3.5 text-[#C5FF41]" />
                    <span>30-Day Money-Back Transformation Guarantee</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
