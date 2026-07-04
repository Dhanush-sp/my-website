import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  coachName: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, coachName }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [name, setName] = useState('');
  const [handle, setHandle] = useState('');
  const [goal, setGoal] = useState('first_muscle_up');
  const [experience, setExperience] = useState('some_gym');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('success');
    }, 900);
  };

  const resetAndClose = () => {
    setStep('form');
    setName('');
    setHandle('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#0F0F0F] border-2 border-[#C5FF41] p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 bg-[#111111] border border-[#222222] text-[#AAA] hover:text-black hover:bg-[#C5FF41] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#111111] border border-[#222222] text-[#C5FF41] text-xs font-mono font-bold uppercase tracking-widest">
                <Zap className="w-3.5 h-3.5" />
                <span>ONLY 4 SPOTS LEFT THIS MONTH</span>
              </div>
              <h3 className="font-display font-black uppercase text-2xl text-[#F5F5F0] tracking-tight">
                Apply For 1-on-1 Coaching With {coachName}
              </h3>
              <p className="text-xs sm:text-sm text-[#AAA] font-sans">
                Fill out this 60-second diagnostic application so we can review your biomechanics profile before our call.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#F5F5F0] uppercase tracking-wider mb-1.5 font-bold">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Mercer"
                  className="w-full px-4 py-3 bg-[#111111] border border-[#222222] text-[#F5F5F0] placeholder-[#666] focus:outline-none focus:border-[#C5FF41] text-sm font-mono transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#F5F5F0] uppercase tracking-wider mb-1.5 font-bold">
                  Instagram Handle or WhatsApp Phone *
                </label>
                <input
                  type="text"
                  required
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  placeholder="e.g. @alex_mercer or +1 (555) 019-2831"
                  className="w-full px-4 py-3 bg-[#111111] border border-[#222222] text-[#F5F5F0] placeholder-[#666] focus:outline-none focus:border-[#C5FF41] text-sm font-mono transition-colors"
                />
                <span className="text-[11px] font-mono text-[#777] block mt-1 uppercase">
                  We use this strictly to send your custom form audit link.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#F5F5F0] uppercase tracking-wider mb-1.5 font-bold">
                    Current Experience Level
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full px-4 py-3 bg-[#111111] border border-[#222222] text-[#F5F5F0] focus:outline-none focus:border-[#C5FF41] text-sm font-mono transition-colors"
                  >
                    <option value="beginner">Beginner (0-5 pullups)</option>
                    <option value="some_gym">Standard Gym Lifter</option>
                    <option value="intermediate">Intermediate Calisthenics</option>
                    <option value="advanced">Advanced (seeking levers)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#F5F5F0] uppercase tracking-wider mb-1.5 font-bold">
                    Primary 90-Day Goal
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-4 py-3 bg-[#111111] border border-[#222222] text-[#F5F5F0] focus:outline-none focus:border-[#C5FF41] text-sm font-mono transition-colors"
                  >
                    <option value="first_muscle_up">First Strict Muscle-Up</option>
                    <option value="handstand_mastery">Freestanding Handstand</option>
                    <option value="joint_recovery">Pain-Free Joint Mobility</option>
                    <option value="shred_fat">Shred Fat & Build Rings Muscle</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#C5FF41] text-black font-mono font-extrabold uppercase text-sm tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 border border-[#C5FF41]"
            >
              {loading ? (
                <span>Securing Your Diagnostic Slot...</span>
              ) : (
                <>
                  <span>Submit Diagnostic Application</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#AAA]">
              <ShieldCheck className="w-4 h-4 text-[#C5FF41]" />
              <span>100% Confidential. Direct review by Coach {coachName}.</span>
            </div>
          </form>
        ) : (
          <div className="py-8 text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 bg-[#111111] border border-[#C5FF41] flex items-center justify-center text-[#C5FF41] mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-black uppercase text-2xl text-[#F5F5F0]">
                Application Received, {name}!
              </h3>
              <p className="text-sm text-[#AAA] max-w-sm mx-auto font-sans">
                We have recorded your handle (<span className="text-[#C5FF41] font-mono">{handle}</span>). Coach {coachName} will personally message you within 12 hours.
              </p>
            </div>

            <div className="p-4 bg-[#111111] border border-[#222222] text-xs text-[#AAA] space-y-1 text-left font-mono">
              <div className="text-[#F5F5F0] font-bold uppercase">Next Step While You Wait:</div>
              <div>Prepare any recent videos of your pull-up or push-up form if available!</div>
            </div>

            <button
              onClick={resetAndClose}
              className="w-full py-3.5 bg-[#111111] border border-[#222222] hover:bg-[#C5FF41] hover:text-black text-[#F5F5F0] font-mono font-bold uppercase text-xs tracking-widest transition-all"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
