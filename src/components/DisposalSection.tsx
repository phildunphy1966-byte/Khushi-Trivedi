import React from 'react';
import { AlertCircle, Check } from 'lucide-react';
import { DISPOSAL_OPTIONS } from '../data/nationalTextileData';
import { DisposalChoiceId } from '../types';

interface DisposalSectionProps {
  selectedDisposal: DisposalChoiceId | null;
  onSelectDisposal: (choice: DisposalChoiceId) => void;
}

export const DisposalSection: React.FC<DisposalSectionProps> = ({
  selectedDisposal,
  onSelectDisposal,
}) => {
  return (
    <section id="decision" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#D4D0C7]">
      {/* Section Eyebrow */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono-tag text-xs uppercase tracking-widest text-[#6F6C66]">
          Step 03 / Gateway Choice
        </span>
        <span className="text-xs font-mono-tag text-[#A64B32] font-semibold flex items-center gap-1">
          <AlertCircle className="w-3.5 h-3.5" />
          No Guaranteed Endpoints
        </span>
      </div>

      <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#191919] mb-3 leading-tight">
        What would you do with it?
      </h2>
      <p className="text-lg sm:text-xl text-[#191919] mb-4 max-w-3xl font-normal">
        Your decision determines where the garment enters the next system —{' '}
        <span className="text-[#6F6C66] italic">but not necessarily where it finally ends.</span>
      </p>
      <p className="text-sm font-mono-tag text-[#6F6C66] mb-10 max-w-2xl">
        Select the action you would realistically take with this unwanted T-shirt today:
      </p>

      {/* 4 Clickable Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
        {DISPOSAL_OPTIONS.map((item) => {
          const isSelected = selectedDisposal === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectDisposal(item.id)}
              className={`text-left p-6 sm:p-7 rounded-sm border transition-all duration-200 relative group flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#FAF8F5] border-[#191919] shadow-md ring-2 ring-[#191919]'
                  : 'bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] border-[#D4D0C7] hover:border-[#6F6C66]'
              }`}
              aria-pressed={isSelected}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.symbol}</span>
                    <span className="text-[10px] font-mono-tag uppercase tracking-wider px-2 py-0.5 rounded bg-[#EAE6DE] text-[#191919]">
                      Channel: {item.channel}
                    </span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                    isSelected ? 'border-[#191919] bg-[#191919] text-[#F2EFE8]' : 'border-[#D4D0C7]'
                  }`}>
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>

                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#191919] mb-1 group-hover:text-black">
                  {item.label}
                </h3>
                <p className="text-xs font-mono-tag text-[#6F6C66] mb-4">
                  {item.subtext}
                </p>
              </div>

              {/* Real World Reality Box */}
              <div className="border-t border-dashed border-[#D4D0C7] pt-4 mt-2">
                <span className="text-[10px] font-mono-tag uppercase tracking-wider text-[#6F6C66] block mb-1">
                  Systemic Reality:
                </span>
                <p className="text-xs text-[#191919] leading-relaxed">
                  {item.realWorldReality}
                </p>
              </div>

              <div className="text-[11px] font-mono-tag text-[#6F6C66] flex justify-between items-center mt-4">
                <span>Pathway:</span>
                <span className={isSelected ? 'text-[#191919] font-bold' : 'text-[#6F6C66]'}>
                  {isSelected ? '✓ Selected Gateway' : 'Tap to Select'}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {selectedDisposal && (
        <div className="p-4 bg-[#FAF8F5] border border-dashed border-[#191919] rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono-tag">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#637A83]" />
            <span className="text-[#191919]">
              Gateway registered: <strong className="capitalize">{selectedDisposal.replace('_', ' ')}</strong>.
            </span>
          </div>
          <a 
            href="#collection" 
            className="text-[#191919] underline font-bold hover:text-[#6F6C66] inline-flex items-center gap-1 self-end sm:self-auto"
          >
            <span>See Collection Flow (Sankey)</span> →
          </a>
        </div>
      )}
    </section>
  );
};
