import React from 'react';
import { AsSeenInSection } from '../types';

interface AsSeenInProps {
  asSeenIn: AsSeenInSection;
}

export const AsSeenIn: React.FC<AsSeenInProps> = ({ asSeenIn }) => {
  return (
    <section className="py-10 border-b border-[#222222] bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-mono uppercase tracking-[0.25em] text-[#AAA] mb-6">
          {asSeenIn.heading}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
          {asSeenIn.brands.map((brand, idx) => (
            <div
              key={idx}
              className="px-5 py-2.5 bg-[#111111] border border-[#222222] hover:border-[#C5FF41] transition-all font-display font-black text-sm sm:text-base uppercase text-[#F5F5F0] hover:text-[#C5FF41] tracking-wider"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
