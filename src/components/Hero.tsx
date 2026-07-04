import React from 'react';
import { ArrowRight, Play, CheckCircle2, Star, Zap, Activity } from 'lucide-react';
import { HeroSection } from '../types';

interface HeroProps {
  hero: HeroSection;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ hero, onOpenBooking }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0F0F0F] border-b border-[#222222]">
      {/* Editorial Grid Background Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f15_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#111111] border border-[#222222] text-[#C5FF41] text-xs font-mono tracking-widest uppercase">
              <Zap className="w-3.5 h-3.5 text-[#C5FF41] shrink-0" />
              <span>{hero.badge}</span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase text-[#F5F5F0] leading-[0.96]">
              {hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#AAA] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-normal">
              {hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 bg-[#C5FF41] text-black font-mono font-extrabold uppercase text-sm tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3 group border border-[#C5FF41]"
              >
                <span>{hero.primaryCta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-7 py-4 bg-[#111111] hover:bg-[#181818] border border-[#222222] text-[#F5F5F0] font-mono font-bold uppercase text-sm tracking-wider transition-all flex items-center justify-center gap-3"
              >
                <div className="w-6 h-6 bg-[#C5FF41] flex items-center justify-center text-black">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>{hero.secondaryCta}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-[#222222] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-mono uppercase tracking-wider text-[#AAA]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5FF41]" />
                <span>Zero Gym Membership Needed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5FF41]" />
                <span>Daily WhatsApp Protocol Reviews</span>
              </div>
            </div>

            {/* Stats Cards Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 max-w-lg mx-auto lg:mx-0">
              {hero.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#111111] border border-[#222222] p-4 text-center hover:border-[#C5FF41] transition-colors"
                >
                  <div className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#C5FF41] tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#AAA] font-mono font-bold mt-1 uppercase tracking-widest leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image Card - Editorial Sharp & High Contrast */}
              <div className="relative overflow-hidden border-2 border-[#222222] bg-[#111111] shadow-2xl aspect-[4/5] sm:aspect-[3/4] group">
                <img
                  src={hero.heroImageUrl}
                  alt={hero.heroImageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-90" />

                {/* Floating Overlay Badge 1 */}
                <div className="absolute top-4 right-4 bg-[#111111] border border-[#222222] p-3 flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#C5FF41] flex items-center justify-center text-black">
                    <Activity className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold uppercase text-[#F5F5F0]">Full Lever & Ring Lock</div>
                    <div className="text-[10px] text-[#C5FF41] font-mono uppercase tracking-widest">Form Verified ✓</div>
                  </div>
                </div>

                {/* Floating Overlay Badge 2 */}
                <div className="absolute bottom-5 left-5 right-5 bg-[#111111] border border-[#222222] p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-[#C5FF41]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#AAA]">Verified Athlete</span>
                  </div>
                  <p className="text-xs text-[#F5F5F0] font-sans italic font-normal leading-relaxed">
                    "Gained 8lbs of functional muscle while eliminating my chronic shoulder pain."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
