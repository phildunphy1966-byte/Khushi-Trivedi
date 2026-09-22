import React from 'react';
import { ArrowRight, HelpCircle, RotateCcw } from 'lucide-react';
import { JourneyState } from '../types';

interface RecapSectionProps {
  journeyState: JourneyState;
  onRestart: () => void;
}

export const RecapSection: React.FC<RecapSectionProps> = ({ journeyState, onRestart }) => {
  const reasonTextMap = {
    fit: "It didn't fit anymore (Body / dimensional shift)",
    damaged: "It was physically worn or stained (Fibre damage)",
    bored: "You grew tired of wearing it (Wardrobe fatigue)",
    style: "It was no longer your aesthetic (Style mismatch)",
  };

  const disposalTextMap = {
    donate: "Handed over for donation or domestic gift",
    give_sell: "Sold, swapped, or passed to peers",
    repurpose: "Repurposed into a household cleaning rag (pocha)",
    discard: "Thrown into the municipal waste bin",
  };

  const reason = journeyState.reason;
  const disposal = journeyState.disposalChoice;

  return (
    <section id="recap" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#D4D0C7]">
      {/* Section Eyebrow */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono-tag text-xs uppercase tracking-widest text-[#6F6C66]">
          Step 12 / Synthesis & Journey Trace
        </span>
        <span className="font-mono-tag text-xs text-[#191919] bg-[#FAF8F5] px-2 py-0.5 border border-[#D4D0C7] rounded">
          Personal Loop Closes
        </span>
      </div>

      <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#191919] mb-3 leading-tight">
        Remember your T-shirt?
      </h2>
      <p className="text-lg sm:text-xl text-[#191919] mb-8 max-w-2xl font-normal">
        One small decision enters a very large system. Here is the trajectory your choices set in motion:
      </p>

      {/* Interactive Pathway Board */}
      <div className="bg-[#FAF8F5] border border-[#191919] rounded-sm p-6 sm:p-10 mb-8 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Stage 1: Reason */}
          <div className="p-4 bg-white border border-[#D4D0C7] rounded-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono-tag uppercase text-[#6F6C66] block mb-1">
                Stage 01 · Origin
              </span>
              <h4 className="font-serif-editorial text-xl text-[#191919] font-bold mb-2">
                Why You Stopped
              </h4>
              <p className="text-xs text-[#191919] font-medium leading-snug">
                {reason ? reasonTextMap[reason] : 'Not specified yet (Select in Step 01)'}
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-dashed border-[#D4D0C7] text-[10px] font-mono-tag text-[#6F6C66]">
              Determined fabric viability
            </div>
          </div>

          {/* Stage 2: Disposal Choice */}
          <div className="p-4 bg-white border border-[#D4D0C7] rounded-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono-tag uppercase text-[#6F6C66] block mb-1">
                Stage 02 · Gateway
              </span>
              <h4 className="font-serif-editorial text-xl text-[#191919] font-bold mb-2">
                Your Action
              </h4>
              <p className="text-xs text-[#191919] font-medium leading-snug">
                {disposal ? disposalTextMap[disposal] : 'Not specified yet (Select in Step 03)'}
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-dashed border-[#D4D0C7] text-[10px] font-mono-tag text-[#6F6C66]">
              Channeled into collection
            </div>
          </div>

          {/* Stage 3: Collection Logistics */}
          <div className="p-4 bg-white border border-[#D4D0C7] rounded-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono-tag uppercase text-[#6F6C66] block mb-1">
                Stage 03 · Artery
              </span>
              <h4 className="font-serif-editorial text-xl text-[#191919] font-bold mb-2">
                Transit Conduit
              </h4>
              <p className="text-xs text-[#191919] leading-snug">
                {disposal === 'discard'
                  ? 'Urban Local Body (66% of collection). High soilage, low sorting odds.'
                  : disposal === 'repurpose'
                  ? 'Kept inside your domestic sphere. Postpones municipal entry by months.'
                  : 'NGO or Informal Waste Stream (34%). Dry collection preserves value.'}
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-dashed border-[#D4D0C7] text-[10px] font-mono-tag text-[#6F6C66]">
              Condition determines route
            </div>
          </div>

          {/* Stage 4: Probable Outcome */}
          <div className="p-4 bg-white border border-[#D4D0C7] rounded-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono-tag uppercase text-[#6F6C66] block mb-1">
                Stage 04 · Probability
              </span>
              <h4 className="font-serif-editorial text-xl text-[#191919] font-bold mb-2">
                Likely Afterlife
              </h4>
              <p className="text-xs text-[#191919] leading-snug">
                {disposal === 'discard'
                  ? 'Dumpsite / Open incineration (45% national probability).'
                  : disposal === 'repurpose'
                  ? 'Gradual fibre breakdown into floor wipe, then municipal bin.'
                  : reason === 'damaged'
                  ? 'Garnetted in Panipat into relief blanket yarn (Downcycling).'
                  : 'Secondary market re-wear in suburban / rural clusters (Reuse).'}
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-dashed border-[#D4D0C7] text-[10px] font-mono-tag text-[#6F6C66]">
              Subject to regional mills
            </div>
          </div>
        </div>

        {/* Ethical Systemic Disclosure */}
        <div className="mt-8 pt-6 border-t border-dashed border-[#D4D0C7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-2.5 max-w-xl text-xs text-[#191919] font-normal leading-relaxed">
            <HelpCircle className="w-4 h-4 text-[#6F6C66] shrink-0 mt-0.5" />
            <span>
              <strong>Crucial truth:</strong> We cannot claim an exact physical GPS coordinate for your T-shirt. In India’s post-consumer textile web, good intentions at the donation box can still end in landfills if the garment’s fiber blend makes recycling uneconomic.
            </span>
          </div>

          <button
            onClick={onRestart}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono-tag rounded border border-[#191919] bg-white hover:bg-[#EAE6DE] text-[#191919] shrink-0 transition-colors self-start sm:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Explore Different Choices</span>
          </button>
        </div>
      </div>
    </section>
  );
};
