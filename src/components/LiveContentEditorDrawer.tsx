import React, { useState, useEffect } from 'react';
import { X, RefreshCw, FileText, Check, Copy, Download, Zap, Eye } from 'lucide-react';

interface LiveContentEditorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  rawContent: string;
  onUpdateLocal: (newRaw: string) => void;
  onRefreshFromNetwork: () => Promise<void>;
  lastUpdatedTimestamp: number;
  syncStatus: string;
}

export const LiveContentEditorDrawer: React.FC<LiveContentEditorDrawerProps> = ({
  isOpen,
  onClose,
  rawContent,
  onUpdateLocal,
  onRefreshFromNetwork,
  lastUpdatedTimestamp,
  syncStatus,
}) => {
  const [text, setText] = useState(rawContent);
  const [copied, setCopied] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    setText(rawContent);
  }, [rawContent]);

  if (!isOpen) return null;

  const handleApplyLocal = () => {
    onUpdateLocal(text);
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await onRefreshFromNetwork();
    setIsRefreshing(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl bg-[#0F0F0F] border-l-2 border-[#222222] h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-[#222222] bg-[#111111] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C5FF41] flex items-center justify-center text-black font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-black text-lg uppercase text-[#F5F5F0] flex items-center gap-2">
                <span>Decoupled Runtime Engine</span>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-[#1A1A1A] border border-[#222222] text-[#C5FF41] uppercase tracking-widest">
                  Active
                </span>
              </h3>
              <p className="text-xs font-mono text-[#AAA]">
                Single Source of Truth: <code className="text-[#C5FF41]">public/content.txt</code>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-[#1A1A1A] border border-[#222222] text-[#AAA] hover:text-black hover:bg-[#C5FF41]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Engine Status Bar */}
        <div className="bg-[#0b0b0b] px-6 py-3 border-b border-[#222222] flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-[#AAA]">
              <span className={`w-2 h-2 ${syncStatus === 'synced' ? 'bg-[#C5FF41] animate-pulse' : 'bg-amber-400'}`} />
              <span>Status: <strong className="text-[#F5F5F0] uppercase">{syncStatus}</strong></span>
            </div>
            <div className="text-[#777] hidden sm:block">
              Last Check: {new Date(lastUpdatedTimestamp).toLocaleTimeString()}
            </div>
          </div>

          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="px-2.5 py-1 bg-[#111111] hover:bg-[#C5FF41] hover:text-black text-[#F5F5F0] flex items-center gap-1.5 border border-[#222222] transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-[#C5FF41]' : ''}`} />
            <span>Force Re-fetch (?t=now)</span>
          </button>
        </div>

        {/* Instructions banner */}
        <div className="p-4 bg-[#111111] border-b border-[#222222] px-6 text-xs text-[#AAA] font-mono leading-relaxed">
          <div className="flex items-start gap-2 font-bold uppercase text-[#C5FF41] mb-1">
            <Zap className="w-4 h-4 shrink-0 mt-0.5" />
            <span>Acceptance Test & Live Reactivity:</span>
          </div>
          Our runtime engine polls <code className="bg-black text-[#C5FF41] px-1.5 py-0.5">/content.txt</code> every 4.5 seconds and listens for tab focus changes. Edit the text below and click <strong className="text-[#F5F5F0]">"Test Live Preview"</strong> to watch the UI rebuild dynamically, or edit <code className="bg-black text-[#C5FF41] px-1.5 py-0.5">public/content.txt</code> directly in your editor!
        </div>

        {/* Textarea Editor */}
        <div className="flex-1 p-6 overflow-hidden flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#AAA] mb-1">
            <span>Raw Content File (<code className="text-[#F5F5F0]">content.txt</code>)</span>
            <span>{text.split('\n').length} lines</span>
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full flex-1 p-4 bg-[#111111] border border-[#222222] text-[#F5F5F0] font-mono text-xs focus:outline-none focus:border-[#C5FF41] resize-none leading-relaxed"
            spellCheck={false}
          />
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-[#222222] bg-[#111111] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3.5 py-2 bg-[#1A1A1A] hover:bg-[#C5FF41] hover:text-black text-[#F5F5F0] border border-[#222222] text-xs font-mono uppercase font-bold flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-[#C5FF41]" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Copy Raw Text'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3.5 py-2 bg-[#1A1A1A] hover:bg-[#C5FF41] hover:text-black text-[#F5F5F0] border border-[#222222] text-xs font-mono uppercase font-bold flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-4 h-4 text-[#C5FF41]" />
              <span>Download content.txt</span>
            </button>
          </div>

          <button
            onClick={handleApplyLocal}
            className="px-6 py-2.5 bg-[#C5FF41] hover:bg-white text-black font-mono uppercase tracking-widest font-extrabold text-xs flex items-center gap-2 border border-[#C5FF41]"
          >
            <Eye className="w-4 h-4" />
            <span>Test Live Preview Updates</span>
          </button>
        </div>
      </div>
    </div>
  );
};
