import React, { useState } from 'react';
import { CheckCircle2, HelpCircle, RefreshCw, XCircle } from 'lucide-react';
import { SORTING_GARMENTS } from '../data/nationalTextileData';
import { SortingCategory } from '../types';

export const SortingGameSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userDecisions, setUserDecisions] = useState<Record<string, SortingCategory>>({});
  const [showExplanation, setShowExplanation] = useState(false);

  const garment = SORTING_GARMENTS[currentIdx];
  const userChoice = userDecisions[garment.id];

  const handleChoose = (category: SortingCategory) => {
    setUserDecisions((prev) => ({ ...prev, [garment.id]: category }));
    setShowExplanation(true);
  };

  const nextGarment = () => {
    setShowExplanation(false);
    setCurrentIdx((prev) => (prev + 1) % SORTING_GARMENTS.length);
  };

  const categoryLabels: Record<SortingCategory, { label: string; color: string; desc: string }> = {
    reuse: { label: 'Reuse', color: '#65785F', desc: 'Secondhand wear' },
    recycle: { label: 'Recycle', color: '#637A83', desc: 'Fibre recovery' },
    downcycle: { label: 'Downcycle', color: '#9A7A52', desc: 'Wiping rags/insulation' },
    discard: { label: 'Discard', color: '#A64B32', desc: 'Landfill/incineration' },
  };

  return (
    <section id="sorting" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#D4D0C7]">
      {/* Section Eyebrow */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono-tag text-xs uppercase tracking-widest text-[#6F6C66]">
          Step 05 / Manual Sorting Yard
        </span>
        <span className="font-mono-tag text-xs text-[#191919] bg-[#FAF8F5] px-2 py-0.5 border border-[#D4D0C7] rounded">
          Garment {currentIdx + 1} of {SORTING_GARMENTS.length}
        </span>
      </div>

      <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#191919] mb-3 leading-tight">
        Clothes don’t sort themselves.
      </h2>
      <p className="text-lg sm:text-xl text-[#191919] mb-4 max-w-3xl font-normal">
        Condition · Material · Colour · Quality · Resale potential · Recycling potential.
      </p>
      <p className="text-sm font-mono-tag text-[#6F6C66] mb-8 max-w-2xl">
        Every single day, manual sorters make rapid split-second decisions on millions of mixed garments. Test your own intuition on the item below:
      </p>

      {/* Garment Identification Dossier Card */}
      <div className="bg-[#FAF8F5] border border-[#191919] rounded-sm p-6 sm:p-8 mb-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-dashed border-[#D4D0C7] gap-2">
          <div>
            <span className="text-[10px] font-mono-tag uppercase tracking-wider text-[#6F6C66] block">
              Item Tag #{garment.id.toUpperCase()} · Inbound Parcel
            </span>
            <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#191919]">
              {garment.name}
            </h3>
          </div>
          <span className="self-start sm:self-auto px-2.5 py-1 rounded bg-[#EAE6DE] font-mono-tag text-xs font-semibold text-[#191919]">
            Color: {garment.color}
          </span>
        </div>

        {/* Technical Attributes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs font-mono-tag">
          <div className="p-3 bg-white border border-[#D4D0C7] rounded-xs">
            <span className="text-[#6F6C66] block uppercase mb-1 text-[10px]">Composition:</span>
            <strong className="text-[#191919] text-xs">{garment.composition}</strong>
          </div>
          <div className="p-3 bg-white border border-[#D4D0C7] rounded-xs">
            <span className="text-[#6F6C66] block uppercase mb-1 text-[10px]">Condition Assessment:</span>
            <strong className="text-[#191919] text-xs">{garment.condition}</strong>
          </div>
        </div>

        <p className="text-sm text-[#191919] mb-6 leading-relaxed">
          {garment.description}
        </p>

        {/* Action Prompt */}
        <div className="mb-4">
          <span className="font-mono-tag text-xs uppercase tracking-wider text-[#191919] font-bold block mb-3">
            Where would you send this garment?
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {(['reuse', 'recycle', 'downcycle', 'discard'] as SortingCategory[]).map((cat) => {
              const info = categoryLabels[cat];
              const isSelected = userChoice === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleChoose(cat)}
                  className={`p-3 rounded-sm border text-center transition-all flex flex-col items-center justify-center font-mono-tag text-xs ${
                    isSelected
                      ? 'bg-[#191919] text-[#F2EFE8] border-[#191919] ring-2 ring-[#191919]'
                      : 'bg-white hover:bg-[#EAE6DE] text-[#191919] border-[#D4D0C7]'
                  }`}
                >
                  <span className="font-bold text-sm mb-0.5">{info.label}</span>
                  <span className="text-[10px] opacity-75">{info.desc}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback / Educational Reveal */}
        {showExplanation && (
          <div className="mt-6 pt-5 border-t border-dashed border-[#D4D0C7] animate-in fade-in">
            <div className="p-4 rounded-sm bg-[#EAE6DE]/70 border border-[#D4D0C7]">
              <div className="flex items-center gap-2 mb-2">
                {userChoice === garment.recommendedCategory ? (
                  <CheckCircle2 className="w-5 h-5 text-[#65785F]" />
                ) : (
                  <HelpCircle className="w-5 h-5 text-[#9A7A52]" />
                )}
                <span className="font-serif-editorial text-xl font-bold text-[#191919]">
                  Industry Pathway:{' '}
                  <span className="capitalize" style={{ color: categoryLabels[garment.recommendedCategory].color }}>
                    {categoryLabels[garment.recommendedCategory].label}
                  </span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#191919] leading-relaxed mb-3">
                {garment.explanation}
              </p>

              <div className="text-xs font-mono-tag text-[#6F6C66] bg-white p-2.5 rounded border border-[#D4D0C7]">
                <strong className="text-[#191919]">Sorting Bottleneck:</strong> {garment.challenge}
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={nextGarment}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#191919] text-[#F2EFE8] text-xs font-mono-tag uppercase tracking-wider rounded-none hover:bg-[#333333] transition-colors"
                >
                  <span>Examine Next Garment</span>
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Real world note */}
      <div className="p-4 bg-[#FAF8F5] border border-[#D4D0C7] rounded-sm text-xs font-mono-tag text-[#6F6C66]">
        <strong className="text-[#191919]">Systemic Insight:</strong> In modern textile mills, over 95% of garments lack digital composition passports. Because care tags get cut off by users or fade after washing, Indian sorters rely on sensory touch, fabric weight, and burning test scraps to identify blends.
      </div>
    </section>
  );
};
