import React from 'react';
import { BookOpen, RotateCcw, Scissors } from 'lucide-react';
import { JourneyState } from '../types';

interface HeaderNavProps {
  journeyState: JourneyState;
  onOpenSources: () => void;
  onRestart: () => void;
  activeSection: string;
  scrollProgress: number;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  journeyState,
  onOpenSources,
  onRestart,
  activeSection,
  scrollProgress,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F2EFE8]/95 backdrop-blur-md border-b border-[#D4D0C7] transition-all duration-300">
      {/* Thread Progress Line */}
      <div className="w-full bg-[#E4E0D7] h-1 overflow-hidden">
        <div 
          className="h-full bg-[#191919] thread-progress transition-all duration-150"
          style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        {/* Logo / Title */}
        <a 
          href="#hero" 
          className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#191919] rounded p-1"
          aria-label="The Afterlife of Clothes, return to top"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded border border-[#191919] flex items-center justify-center bg-[#FAF8F5] text-[#191919] font-mono text-xs font-bold tracking-tighter group-hover:bg-[#191919] group-hover:text-[#F2EFE8] transition-colors">
            <Scissors className="w-4 h-4" />
          </div>
          <div>
            <span className="font-serif-editorial text-lg sm:text-xl font-bold tracking-tight text-[#191919] block leading-none">
              The Afterlife of Clothes
            </span>
            <span className="font-mono-tag text-[10px] text-[#6F6C66] tracking-wider uppercase block mt-0.5">
              India Textile Flow · 2026
            </span>
          </div>
        </a>

        {/* Current status & Journey badge if selected */}
        <div className="hidden md:flex items-center gap-3 text-xs font-mono-tag text-[#6F6C66]">
          {journeyState.reason && (
            <span className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#D4D0C7] text-[#191919]">
              Reason: <span className="font-semibold capitalize">{journeyState.reason}</span>
            </span>
          )}
          {journeyState.disposalChoice && (
            <span className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#D4D0C7] text-[#191919]">
              Action: <span className="font-semibold capitalize">{journeyState.disposalChoice.replace('_', ' ')}</span>
            </span>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {(journeyState.reason || journeyState.disposalChoice) && (
            <button
              onClick={onRestart}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-mono-tag rounded border border-[#D4D0C7] bg-[#FAF8F5] hover:bg-[#EAE6DE] text-[#191919] transition-colors focus:ring-2 focus:ring-[#191919]"
              title="Restart your garment journey"
              aria-label="Restart journey"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Restart</span>
            </button>
          )}

          <button
            onClick={onOpenSources}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-tag rounded bg-[#191919] hover:bg-[#333333] text-[#F2EFE8] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#191919] shadow-sm"
            aria-label="Open Sources & Methodology Drawer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Sources & Method</span>
          </button>
        </div>
      </div>
    </header>
  );
};
