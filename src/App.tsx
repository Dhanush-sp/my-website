import React, { useState } from 'react';
import { useDecoupledContent } from './hooks/useDecoupledContent';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AsSeenIn } from './components/AsSeenIn';
import { PainPoints } from './components/PainPoints';
import { HowItWorks } from './components/HowItWorks';
import { AboutCoach } from './components/AboutCoach';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LiveContentEditorDrawer } from './components/LiveContentEditorDrawer';
import { Dumbbell } from 'lucide-react';

export default function App() {
  const {
    data,
    rawContent,
    isLoading,
    lastFetchedAt,
    lastUpdatedTimestamp,
    syncStatus,
    refreshNow,
    updateLocalPreviewContent,
  } = useDecoupledContent();

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  if (isLoading && !data) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] flex flex-col items-center justify-center text-[#F5F5F0] p-4 font-sans">
        <div className="w-16 h-16 bg-[#C5FF41] rounded-sm flex items-center justify-center shadow-lg animate-pulse mb-6">
          <Dumbbell className="w-8 h-8 text-black transform -rotate-45" />
        </div>
        <div className="font-display font-black text-2xl tracking-tight text-[#F5F5F0] uppercase">
          Loading Vance Academy Engine...
        </div>
        <div className="text-xs font-mono text-[#C5FF41] mt-2 tracking-widest uppercase">
          Fetching runtime /content.txt
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F5F5F0] selection:bg-[#C5FF41] selection:text-black font-sans relative">
      {/* Navbar */}
      <Navbar
        meta={data.meta}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenEditor={() => setIsEditorOpen(true)}
        syncStatus={syncStatus}
      />

      {/* Hero Section */}
      <main>
        <Hero
          hero={data.hero}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* As Seen In */}
        <AsSeenIn asSeenIn={data.asSeenIn} />

        {/* Problem / Pain Points */}
        <PainPoints painPoints={data.painPoints} />

        {/* How It Works (3-Step Protocol) */}
        <HowItWorks
          howItWorks={data.howItWorks}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* About Coach */}
        <AboutCoach
          aboutCoach={data.aboutCoach}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Testimonials */}
        <Testimonials testimonials={data.testimonials} />

        {/* Pricing & Programs */}
        <Pricing
          pricing={data.pricing}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* FAQ Section */}
        <Faq faq={data.faq} />

        {/* Final CTA */}
        <FinalCta
          finalCta={data.finalCta}
          onOpenBooking={() => setIsBookingOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        footer={data.footer}
        siteName={data.meta.siteName}
      />

      {/* Booking Application Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        coachName={data.meta.coachName}
      />

      {/* Live Content Editor Drawer */}
      <LiveContentEditorDrawer
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        rawContent={rawContent}
        onUpdateLocal={updateLocalPreviewContent}
        onRefreshFromNetwork={refreshNow}
        lastUpdatedTimestamp={lastUpdatedTimestamp}
        syncStatus={syncStatus}
      />
    </div>
  );
}
