import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Layers } from 'lucide-react';
import { OUTCOME_DEFINITIONS } from '../data/nationalTextileData';

export const OutcomeDefinitionsSection: React.FC = () => {
  const [expandedCat, setExpandedCat] = useState<string | null>('reuse');

  return (
    <section id="definitions" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#D4D0C7]">
      {/* Section Eyebrow */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono-tag text-xs uppercase tracking-widest text-[#6F6C66]">
          Step 07 / Conceptual Taxonomy
        </span>
        <span className="text-xs font-mono-tag text-[#191919] bg-[#FAF8F5] px-2 py-0.5 border border-[#D4D0C7] rounded">
          Clarifying The 4 Pathways
        </span>
      </div>

      <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#191919] mb-3 leading-tight">
        The Four Fates
      </h2>
      <p className="text-lg sm:text-xl text-[#6F6C66] mb-10 max-w-2xl font-normal">
        People often use "recycling" and "reusing" interchangeably. In textile systems, they describe fundamentally different material trajectories:
      </p>

      {/* 4 Outcome Definition Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
        {OUTCOME_DEFINITIONS.map((def) => {
          const isExpanded = expandedCat === def.category;
          return (
            <div
              key={def.category}
              className={`p-6 sm:p-7 rounded-sm border transition-all text-left flex flex-col justify-between ${
                isExpanded
                  ? 'bg-[#FAF8F5] border-[#191919] shadow-sm ring-1 ring-[#191919]'
                  : 'bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] border-[#D4D0C7]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-3.5 h-3.5 rounded-full" 
                      style={{ backgroundColor: def.colorHex }}
                      aria-hidden="true"
                    />
                    <span className="font-mono-tag text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#EAE6DE] text-[#191919] font-bold">
                      {def.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setExpandedCat(isExpanded ? null : def.category)}
                    className="text-xs font-mono-tag text-[#6F6C66] hover:text-[#191919] flex items-center gap-1"
                    aria-label={`Toggle details for ${def.title}`}
                  >
                    <span>{isExpanded ? 'Less' : 'Details'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#191919] mb-2 font-normal">
                  {def.title}
                </h3>

                <p className="font-medium text-sm text-[#191919] mb-3 leading-snug">
                  {def.oneLiner}
                </p>
              </div>

              {/* Expandable Deep Dive */}
              {isExpanded && (
                <div className="pt-4 mt-2 border-t border-dashed border-[#D4D0C7] text-xs font-mono-tag space-y-3 animate-in fade-in">
                  <p className="text-[#191919] leading-relaxed font-sans font-normal">
                    {def.detail}
                  </p>

                  <div className="p-3 bg-[#EAE6DE]/70 rounded-xs">
                    <strong className="text-[#191919] block mb-0.5">Ecological Footprint:</strong>
                    <span className="text-[#6F6C66]">{def.environmentalImpact}</span>
                  </div>

                  <div className="p-3 bg-[#EAE6DE]/70 rounded-xs">
                    <strong className="text-[#191919] block mb-0.5">Indian System Status:</strong>
                    <span className="text-[#6F6C66]">{def.nationalScale}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
