import React from 'react';
import { AlertTriangle, Clock, Frown, Flame } from 'lucide-react';
import { PainPointsSection } from '../types';

interface PainPointsProps {
  painPoints: PainPointsSection;
}

export const PainPoints: React.FC<PainPointsProps> = ({ painPoints }) => {
  const icons = [AlertTriangle, Clock, Frown, Flame];

  return (
    <section className="py-24 relative overflow-hidden bg-[#0F0F0F] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] border border-[#222222] text-[#C5FF41] text-xs font-mono font-bold tracking-widest uppercase">
            <span>{painPoints.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#F5F5F0] tracking-tighter uppercase">
            {painPoints.title}
          </h2>
          <p className="text-base sm:text-lg text-[#AAA] font-sans font-normal">
            {painPoints.subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.pains.map((pain, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-[#111111] border border-[#222222] p-8 hover:border-[#C5FF41] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 bg-[#1A1A1A] border border-[#222222] flex items-center justify-center text-[#C5FF41] mb-6 group-hover:bg-[#C5FF41] group-hover:text-black transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-black uppercase tracking-tight text-[#F5F5F0] mb-3">
                    {pain.title}
                  </h3>
                  <p className="text-[#AAA] text-sm sm:text-base leading-relaxed font-sans">
                    {pain.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#222222] flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#AAA]">
                  <span>Bottleneck 0{idx + 1}</span>
                  <span className="text-[#C5FF41] font-bold">Protocol Fix ✓</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
