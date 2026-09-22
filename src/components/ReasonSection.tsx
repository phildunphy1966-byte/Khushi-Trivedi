import React from 'react';
import { Check, HelpCircle } from 'lucide-react';
import { REASON_OPTIONS } from '../data/nationalTextileData';
import { ReasonId } from '../types';

interface ReasonSectionProps {
  selectedReason: ReasonId | null;
  onSelectReason: (reason: ReasonId) => void;
  onOpenSources: () => void;
}

export const ReasonSection: React.FC<ReasonSectionProps> = ({
  selectedReason,
  onSelectReason,
  onOpenSources,
}) => {
  return (
    <section id="reason" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#D4D0C7]">
      {/* Section Eyebrow */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono-tag text-xs uppercase tracking-widest text-[#6F6C66]">
          Step 01 / Wardrobe Exit
        </span>
        <button 
          onClick={onOpenSources}
          className="text-xs font-mono-tag text-[#6F6C66] hover:text-[#191919] underline decoration-dotted flex items-center gap-1"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Research Context</span>
        </button>
      </div>

      {/* Headings */}
      <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#191919] mb-3 leading-tight">
        You don’t want this T-shirt anymore.
      </h2>
      <p className="text-lg sm:text-xl text-[#6F6C66] mb-10 max-w-2xl font-normal">
        Why did you stop wearing it? Every wardrobe retirement begins with a small personal justification.
      </p>

      {/* Reason Selection Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
        {REASON_OPTIONS.map((item) => {
          const isSelected = selectedReason === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectReason(item.id)}
              className={`text-left p-6 sm:p-7 rounded-sm border transition-all duration-200 relative group flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#FAF8F5] border-[#191919] shadow-md ring-2 ring-[#191919]'
                  : 'bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] border-[#D4D0C7] hover:border-[#6F6C66]'
              }`}
              aria-pressed={isSelected}
            >
              {/* Top tag & check indicator */}
              <div className="flex items-center justify-between mb-4 w-full">
                <span className="text-[10px] font-mono-tag uppercase tracking-wider px-2 py-0.5 rounded bg-[#EAE6DE] text-[#191919]">
                  {item.tag}
                </span>
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                  isSelected ? 'border-[#191919] bg-[#191919] text-[#F2EFE8]' : 'border-[#D4D0C7]'
                }`}>
                  {isSelected && <Check className="w-3.5 h-3.5" />}
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-serif-editorial text-2xl text-[#191919] mb-1 group-hover:text-black">
                  {item.label}
                </h3>
                <p className="text-xs font-mono-tag text-[#6F6C66] leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              {/* Care label dashed divider */}
              <div className="border-t border-dashed border-[#D4D0C7] my-4 pt-3">
                <p className="text-xs text-[#191919] font-normal leading-normal">
                  {item.insight}
                </p>
              </div>

              <div className="text-[11px] font-mono-tag text-[#6F6C66] flex justify-between items-center mt-2">
                <span>Status:</span>
                <span className={isSelected ? 'text-[#191919] font-bold' : 'text-[#6F6C66]'}>
                  {isSelected ? '✓ Selected as Origin' : 'Tap to Select'}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Confirmation feedback */}
      {selectedReason && (
        <div className="p-4 bg-[#FAF8F5] border border-dashed border-[#191919] rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono-tag">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#65785F]" />
            <span className="text-[#191919]">
              Journey variable recorded: <strong className="capitalize">{selectedReason}</strong>.
            </span>
          </div>
          <a 
            href="#scale" 
            className="text-[#191919] underline font-bold hover:text-[#6F6C66] inline-flex items-center gap-1 self-end sm:self-auto"
          >
            <span>Proceed to National Scale</span> →
          </a>
        </div>
      )}
    </section>
  );
};
