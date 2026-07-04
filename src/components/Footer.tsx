import React from 'react';
import { Instagram, Youtube, Video, Dumbbell } from 'lucide-react';
import { FooterSection } from '../types';

interface FooterProps {
  footer: FooterSection;
  siteName: string;
}

export const Footer: React.FC<FooterProps> = ({ footer, siteName }) => {
  return (
    <footer className="bg-[#0F0F0F] border-t border-[#222222] py-16 text-[#AAA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-[#222222]">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#C5FF41] flex items-center justify-center text-black">
                <Dumbbell className="w-4 h-4 transform -rotate-45" />
              </div>
              <span className="font-display font-black text-lg uppercase tracking-tight text-[#F5F5F0]">
                {siteName || 'VANCE ACADEMY'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#AAA] max-w-sm leading-relaxed font-sans font-normal">
              Decoupled social-media conversion landing page built with live runtime content parsing. Transform your body mastery anywhere on earth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F5F5F0]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider">
              <li><a href="#how-it-works" className="hover:text-[#C5FF41] transition-colors">The Protocol</a></li>
              <li><a href="#about" className="hover:text-[#C5FF41] transition-colors">Coach Bio</a></li>
              <li><a href="#results" className="hover:text-[#C5FF41] transition-colors">Success Stories</a></li>
              <li><a href="#pricing" className="hover:text-[#C5FF41] transition-colors">VIP Mentorship</a></li>
              <li><a href="#faq" className="hover:text-[#C5FF41] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F5F5F0]">
              Connect Online
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={footer.socialInstagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-[#111111] border border-[#222222] flex items-center justify-center text-[#AAA] hover:text-black hover:bg-[#C5FF41] hover:border-[#C5FF41] transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={footer.socialYoutube}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-[#111111] border border-[#222222] flex items-center justify-center text-[#AAA] hover:text-black hover:bg-[#C5FF41] hover:border-[#C5FF41] transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={footer.socialTiktok}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-[#111111] border border-[#222222] flex items-center justify-center text-[#AAA] hover:text-black hover:bg-[#C5FF41] hover:border-[#C5FF41] transition-all"
              >
                <Video className="w-5 h-5" />
              </a>
            </div>
            <p className="text-[11px] text-[#777] font-mono uppercase pt-2">
              Daily street workout technique breakdown on Instagram Stories.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider text-[#777]">
          <div>{footer.copyright}</div>
          <div className="text-center sm:text-right max-w-xl text-[11px] text-[#666]">
            {footer.disclaimer}
          </div>
        </div>
      </div>
    </footer>
  );
};
