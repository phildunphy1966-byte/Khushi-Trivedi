import React, { useState } from 'react';
import { ArrowLeftRight, Check, X } from 'lucide-react';
import { NATIONAL_TEXTILE_STATS } from '../data/nationalTextileData';

export const PrePostComparisonSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'pre' | 'post'>('both');

  return (
    <section id="comparison" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#D4D0C7]">
      {/* Section Eyebrow */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono-tag text-xs uppercase tracking-widest text-[#6F6C66]">
          Step 09 / Industrial Paradox
        </span>
        <span className="text-xs font-mono-tag text-[#191919] bg-[#FAF8F5] px-2 py-0.5 border border-[#D4D0C7] rounded">
          Pre- vs Post-Consumer Flow
        </span>
      </div>

      <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#191919] mb-3 leading-tight">
        Something changes after we buy it.
      </h2>
      <p className="text-lg sm:text-xl text-[#6F6C66] mb-10 max-w-2xl font-normal">
        Why does factory scrap get almost entirely recycled, while our personal clothes end up in smoking landfill mountains?
      </p>

      {/* Side-by-Side Comparative Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Pre-Consumer Side */}
        <div className="bg-[#FAF8F5] border border-[#65785F] rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono-tag text-xs uppercase px-2 py-0.5 rounded bg-[#65785F]/20 text-[#65785F] font-bold">
                Factory & Mill Scraps
              </span>
              <span className="font-serif-editorial text-3xl font-bold text-[#65785F]">
                ~2% Landfill
              </span>
            </div>

            <h3 className="font-serif-editorial text-3xl text-[#191919] mb-1">
              Pre-Consumer Waste
            </h3>
            <div className="font-mono-tag text-xs text-[#6F6C66] mb-6">
              Total Volume: 2.973 Million Tonnes (2,973 KTPA)
            </div>

            {/* Mapped Pathway Distribution Bar */}
            <div className="mb-6">
              <span className="text-[11px] font-mono-tag text-[#6F6C66] block mb-1.5">
                Outcome Distribution (Ministry of Textiles 2026):
              </span>
              <div className="w-full h-4 rounded-xs bg-[#EAE6DE] flex overflow-hidden">
                <div style={{ width: '58%' }} className="bg-[#65785F]" title="58% Upcycling" />
                <div style={{ width: '39%' }} className="bg-[#9A7A52]" title="39% Downcycling" />
                <div style={{ width: '1%' }} className="bg-[#637A83]" title="1% Reuse" />
                <div style={{ width: '2%' }} className="bg-[#A64B32]" title="2% Landfill" />
              </div>
              <div className="flex justify-between text-[10px] font-mono-tag text-[#6F6C66] mt-1">
                <span>58% Upcycling · 39% Downcycling</span>
                <span className="text-[#A64B32] font-bold">2% Waste</span>
              </div>
            </div>

            {/* Structural Advantages */}
            <div className="space-y-2.5 text-xs text-[#191919]">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#65785F] shrink-0 mt-0.5" />
                <span><strong>Single fibre purity:</strong> Cutting table scraps are 100% known yarn types without deceptive blends.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#65785F] shrink-0 mt-0.5" />
                <span><strong>Clean & unsoiled:</strong> Never worn against skin, no body perspiration, food stains, or mold.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#65785F] shrink-0 mt-0.5" />
                <span><strong>Pre-sorted at source:</strong> Bundled in uniform colors directly on garment manufacturing lines.</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-dashed border-[#D4D0C7] text-xs font-mono-tag text-[#65785F] font-semibold">
            Result: 98% Circular retention back into Indian production.
          </div>
        </div>

        {/* Post-Consumer Side */}
        <div className="bg-[#FAF8F5] border border-[#A64B32] rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono-tag text-xs uppercase px-2 py-0.5 rounded bg-[#A64B32]/20 text-[#A64B32] font-bold">
                Household Discards
              </span>
              <span className="font-serif-editorial text-3xl font-bold text-[#A64B32]">
                45% Landfill
              </span>
            </div>

            <h3 className="font-serif-editorial text-3xl text-[#191919] mb-1">
              Post-Consumer Waste
            </h3>
            <div className="font-mono-tag text-xs text-[#6F6C66] mb-6">
              Total Volume: 4.100 Million Tonnes (4,100 KTPA)
            </div>

            {/* Mapped Pathway Distribution Bar */}
            <div className="mb-6">
              <span className="text-[11px] font-mono-tag text-[#6F6C66] block mb-1.5">
                Outcome Distribution (Ministry of Textiles 2026):
              </span>
              <div className="w-full h-4 rounded-xs bg-[#EAE6DE] flex overflow-hidden">
                <div style={{ width: '55%' }} className="bg-[#65785F]" title="55% Recovery (Reuse/Recycle/Downcycle)" />
                <div style={{ width: '45%' }} className="bg-[#A64B32]" title="45% Incineration / Landfill" />
              </div>
              <div className="flex justify-between text-[10px] font-mono-tag text-[#6F6C66] mt-1">
                <span className="text-[#65785F]">55% Recovery</span>
                <span className="text-[#A64B32] font-bold">45% Incineration/Landfill</span>
              </div>
            </div>

            {/* Structural Bottlenecks */}
            <div className="space-y-2.5 text-xs text-[#191919]">
              <div className="flex items-start gap-2">
                <X className="w-4 h-4 text-[#A64B32] shrink-0 mt-0.5" />
                <span><strong>Complex fiber cocktails:</strong> Cotton blended with 5% elastane or polyester mesh cannot be recycled.</span>
              </div>
              <div className="flex items-start gap-2">
                <X className="w-4 h-4 text-[#A64B32] shrink-0 mt-0.5" />
                <span><strong>Hardware contamination:</strong> Metal zippers, acrylic buttons, and plastic sequins jam garnetting blades.</span>
              </div>
              <div className="flex items-start gap-2">
                <X className="w-4 h-4 text-[#A64B32] shrink-0 mt-0.5" />
                <span><strong>Soiled collection:</strong> 66% handled via municipal rubbish trucks, soaking in liquid food leachate.</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-dashed border-[#D4D0C7] text-xs font-mono-tag text-[#A64B32] font-semibold">
            Result: Nearly half (1.845M tonnes) lost to open dump burning.
          </div>
        </div>
      </div>
    </section>
  );
};
