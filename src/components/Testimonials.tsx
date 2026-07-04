import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TestimonialsSection } from '../types';

interface TestimonialsProps {
  testimonials: TestimonialsSection;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section id="results" className="py-24 bg-[#0F0F0F] border-b border-[#222222] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] border border-[#222222] text-[#C5FF41] text-xs font-mono font-bold tracking-widest uppercase">
            <span>{testimonials.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#F5F5F0] tracking-tighter uppercase">
            {testimonials.title}
          </h2>
          <p className="text-base sm:text-lg text-[#AAA] font-sans font-normal">
            {testimonials.subtitle}
          </p>
        </div>

        {/* Hero Testimonial Image Banner */}
        {testimonials.testimonialImageUrl && (
          <div className="mb-16 relative overflow-hidden border-2 border-[#222222] bg-[#111111] max-w-4xl mx-auto shadow-2xl h-64 sm:h-80 group">
            <img
              src={testimonials.testimonialImageUrl}
              alt="Client transformations"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent flex items-end p-6 sm:p-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-[#222222] text-[#C5FF41] text-xs font-mono uppercase tracking-widest mb-2">
                  <span>100% Remote Training Protocol</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-[#F5F5F0]">
                  Real Athletes. Zero Excuses. Superior Body Leverage.
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#111111] border border-[#222222] p-8 shadow-xl hover:border-[#C5FF41] flex flex-col justify-between relative transition-all group"
            >
              <Quote className="w-10 h-10 text-[#222222] group-hover:text-[#C5FF41]/20 absolute top-6 right-6 transition-colors" />

              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#C5FF41]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <div className="inline-block px-3 py-1.5 bg-[#1A1A1A] border border-[#222222] text-[#C5FF41] text-xs font-mono font-bold uppercase tracking-wider">
                  ⚡ {rev.result}
                </div>

                <p className="text-[#AAA] text-sm sm:text-base leading-relaxed font-sans italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#222222] flex items-center justify-between">
                <div>
                  <div className="font-display font-black uppercase text-[#F5F5F0] text-base tracking-tight">
                    {rev.name}
                  </div>
                  <div className="text-xs text-[#AAA] font-mono uppercase tracking-widest flex items-center gap-1.5 mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5FF41]" />
                    <span>Verified Student</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
