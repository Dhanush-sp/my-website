import React from 'react';
import { Award, CheckCircle, Flame, ArrowRight } from 'lucide-react';
import { AboutCoachSection } from '../types';

interface AboutCoachProps {
  aboutCoach: AboutCoachSection;
  onOpenBooking: () => void;
}

export const AboutCoach: React.FC<AboutCoachProps> = ({ aboutCoach, onOpenBooking }) => {
  return (
    <section id="about" className="py-24 bg-[#0F0F0F] border-b border-[#222222] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden border-2 border-[#222222] bg-[#111111] shadow-2xl aspect-[3/4] group">
                <img
                  src={aboutCoach.coachImageUrl}
                  alt={aboutCoach.coachImageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:grayscale-0 hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-[#222222] text-[#C5FF41] text-xs font-mono uppercase tracking-widest mb-2">
                    <Award className="w-3.5 h-3.5" />
                    <span>Head Academy Mentor</span>
                  </div>
                  <h3 className="font-display font-black text-2xl uppercase tracking-tighter text-[#F5F5F0]">
                    Alex Vance
                  </h3>
                  <p className="text-xs text-[#AAA] font-mono mt-0.5 uppercase tracking-widest">
                    15+ Years Bodyweight Mastery
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] border border-[#222222] text-[#C5FF41] text-xs font-mono font-bold tracking-widest uppercase">
              <span>{aboutCoach.badge}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#F5F5F0] tracking-tighter leading-tight">
              {aboutCoach.title}
            </h2>

            <p className="text-[#AAA] text-base sm:text-lg leading-relaxed font-sans font-normal">
              {aboutCoach.bioText}
            </p>

            {/* Credentials List */}
            <div className="space-y-3 pt-4">
              {aboutCoach.credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-[#111111] border border-[#222222] hover:border-[#C5FF41] transition-colors"
                >
                  <div className="w-8 h-8 bg-[#1A1A1A] border border-[#222222] flex items-center justify-center text-[#C5FF41] shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-[#F5F5F0]">
                    {cred}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#C5FF41] text-black font-mono font-extrabold uppercase text-sm tracking-widest hover:bg-white transition-all border border-[#C5FF41]"
              >
                <span>Book 15-Min Diagnostic Call With Alex</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
