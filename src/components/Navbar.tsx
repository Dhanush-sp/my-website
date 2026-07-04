import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X, ArrowRight, Flame, ShieldCheck } from 'lucide-react';
import { MetaSettings } from '../types';

interface NavbarProps {
  meta: MetaSettings;
  onOpenBooking: () => void;
  onOpenEditor: () => void;
  syncStatus: string;
}

export const Navbar: React.FC<NavbarProps> = ({ meta, onOpenBooking, onOpenEditor, syncStatus }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Top Announcement Banner */}
      {meta.announcementBanner && (
        <div className="bg-[#111111] border-b border-[#222222] px-4 py-2 text-center text-xs sm:text-sm font-mono uppercase tracking-widest text-[#F5F5F0] flex items-center justify-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#C5FF41] animate-pulse shrink-0" />
          <span>{meta.announcementBanner}</span>
        </div>
      )}

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#0F0F0F]/95 backdrop-blur-xl border-b border-[#222222] py-3.5 shadow-2xl'
            : 'bg-[#0F0F0F] border-b border-[#222222]/60 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#C5FF41] flex items-center justify-center group-hover:bg-white transition-colors">
              <Dumbbell className="w-5 h-5 text-black transform -rotate-45" />
            </div>
            <div>
              <span className="font-display font-black text-lg sm:text-xl tracking-tighter uppercase text-[#F5F5F0] block leading-none">
                {meta.siteName.split(' ')[0] || 'VANCE'}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#C5FF41] font-mono font-bold block mt-0.5">
                {meta.siteName.split(' ').slice(1).join(' ') || 'ACADEMY'}
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-[#AAA]">
            <a href="#how-it-works" className="hover:text-[#C5FF41] transition-colors">The Protocol</a>
            <a href="#about" className="hover:text-[#C5FF41] transition-colors">Coach Bio</a>
            <a href="#results" className="hover:text-[#C5FF41] transition-colors">Results</a>
            <a href="#pricing" className="hover:text-[#C5FF41] transition-colors">Programs</a>
            <a href="#faq" className="hover:text-[#C5FF41] transition-colors">FAQ</a>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEditor}
              title="View live content engine status or edit content.txt"
              className="px-3 py-1.5 bg-[#111111] hover:bg-[#1A1A1A] text-xs font-mono text-[#AAA] hover:text-[#F5F5F0] border border-[#222222] flex items-center gap-2 uppercase tracking-wider transition-colors"
            >
              <span className={`w-2 h-2 rounded-full ${syncStatus === 'synced' ? 'bg-green-500' : 'bg-[#C5FF41]'}`} />
              <span>Engine: Live</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C5FF41] text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-none border border-[#C5FF41]"
            >
              <span>Apply For Coaching</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 bg-[#C5FF41] text-black font-mono font-bold uppercase text-xs"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-[#111111] border border-[#222222] text-[#AAA] hover:text-[#F5F5F0]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F0F0F] border-b border-[#222222] px-6 py-6 mt-3 space-y-4">
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono uppercase tracking-widest text-[#AAA] hover:text-[#C5FF41]"
            >
              The Protocol
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono uppercase tracking-widest text-[#AAA] hover:text-[#C5FF41]"
            >
              Coach Bio
            </a>
            <a
              href="#results"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono uppercase tracking-widest text-[#AAA] hover:text-[#C5FF41]"
            >
              Results
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono uppercase tracking-widest text-[#AAA] hover:text-[#C5FF41]"
            >
              Programs
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono uppercase tracking-widest text-[#AAA] hover:text-[#C5FF41]"
            >
              FAQ
            </a>
            <div className="pt-4 border-t border-[#222222] flex flex-col gap-3">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                className="w-full py-3 bg-[#C5FF41] text-black font-mono font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2"
              >
                <span>Apply For 1-on-1 Coaching</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenEditor(); }}
                className="w-full py-2.5 bg-[#111111] border border-[#222222] text-[#AAA] font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>⚡ Inspect Live content.txt</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
