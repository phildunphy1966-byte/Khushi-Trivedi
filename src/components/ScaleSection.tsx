import React, { useState } from 'react';
import { ExternalLink, Layers, PieChart } from 'lucide-react';
import { NATIONAL_TEXTILE_STATS } from '../data/nationalTextileData';

interface ScaleSectionProps {
  onOpenSources: () => void;
}

export const ScaleSection: React.FC<ScaleSectionProps> = ({ onOpenSources }) => {
  const [activeSegment, setActiveSegment] = useState<'post' | 'pre'>('post');

  return (
    <section id="scale" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#D4D0C7]">
      {/* Section Eyebrow */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono-tag text-xs uppercase tracking-widest text-[#6F6C66]">
          Step 02 / National Dimension
        </span>
        <button
          onClick={onOpenSources}
          className="text-xs font-mono-tag text-[#191919] hover:underline flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#D4D0C7]"
        >
          <span>MoT 2026 Report</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>

      <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#191919] mb-4 leading-tight">
        Your T-shirt is one of millions.
      </h2>
      <p className="text-lg sm:text-xl text-[#6F6C66] mb-12 max-w-2xl font-normal">
        From a single wardrobe drawer in your bedroom, the canvas widens into India’s vast industrial textile ecosystem.
      </p>

      {/* Massive Key Metric Display */}
      <div className="p-8 sm:p-12 bg-[#FAF8F5] border border-[#191919] rounded-sm mb-10 shadow-xs relative overflow-hidden">
        {/* Subtle background stamp */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-10 pointer-events-none font-serif-editorial text-7xl sm:text-9xl font-bold select-none text-[#191919]">
          7.073M
        </div>

        <div className="relative z-10">
          <span className="font-mono-tag text-xs uppercase tracking-widest text-[#6F6C66] block mb-2">
            Annual National Baseline · Ministry of Textiles, 2026
          </span>
          
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-4">
            <span className="font-serif-editorial text-6xl sm:text-8xl lg:text-9xl text-[#191919] font-normal tracking-tight">
              7.073
            </span>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif-editorial text-[#191919] font-bold">
                Million Tonnes
              </span>
              <span className="font-mono-tag text-xs text-[#6F6C66]">
                = 7,073 KTPA (Kilotonnes Per Annum)
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#191919] max-w-xl font-normal leading-relaxed">
            Estimated annual textile waste generated across India. Every single piece of clothing discarded by households joins this national aggregate.
          </p>
        </div>
      </div>

      {/* 58% vs 42% Interactive Segment Breakdown */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3 text-xs font-mono-tag text-[#191919]">
          <span className="font-bold flex items-center gap-1.5">
            <PieChart className="w-3.5 h-3.5" />
            National Source Split (Total: 7,073 KTPA)
          </span>
          <span className="text-[#6F6C66]">Click segments to inspect characteristics</span>
        </div>

        {/* Visual Stacked Bar Indicator */}
        <div className="w-full h-12 rounded-sm border border-[#191919] p-1 bg-[#FAF8F5] flex gap-1 mb-4">
          <button
            onClick={() => setActiveSegment('post')}
            style={{ width: `${NATIONAL_TEXTILE_STATS.postConsumerPct}%` }}
            className={`h-full rounded-xs transition-all flex items-center justify-between px-3 text-xs font-mono-tag font-bold focus:outline-none focus:ring-2 focus:ring-[#191919] ${
              activeSegment === 'post'
                ? 'bg-[#191919] text-[#F2EFE8] shadow-inner'
                : 'bg-[#6F6C66] text-[#F2EFE8] hover:opacity-90'
            }`}
            aria-label="View Post-Consumer Details"
          >
            <span>58% Post-Consumer</span>
            <span className="hidden sm:inline text-[11px] opacity-80">4,100 KTPA</span>
          </button>

          <button
            onClick={() => setActiveSegment('pre')}
            style={{ width: `${NATIONAL_TEXTILE_STATS.preConsumerPct}%` }}
            className={`h-full rounded-xs transition-all flex items-center justify-between px-3 text-xs font-mono-tag font-bold focus:outline-none focus:ring-2 focus:ring-[#191919] ${
              activeSegment === 'pre'
                ? 'bg-[#191919] text-[#F2EFE8] shadow-inner'
                : 'bg-[#D4D0C7] text-[#191919] hover:opacity-90'
            }`}
            aria-label="View Pre-Consumer Details"
          >
            <span>42% Pre-Consumer</span>
            <span className="hidden sm:inline text-[11px] opacity-80">2,973 KTPA</span>
          </button>
        </div>

        {/* Detailed Interactive Comparison Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            onClick={() => setActiveSegment('post')}
            className={`p-6 rounded-sm border cursor-pointer transition-all duration-200 ${
              activeSegment === 'post'
                ? 'bg-[#FAF8F5] border-[#191919] ring-2 ring-[#191919]'
                : 'bg-[#FAF8F5]/50 border-[#D4D0C7] hover:border-[#6F6C66]'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-0.5 text-[10px] font-mono-tag uppercase bg-[#191919] text-[#F2EFE8] rounded-xs font-bold">
                Focus of this Journey
              </span>
              <span className="text-xl font-serif-editorial text-[#191919] font-bold">
                58%
              </span>
            </div>
            <h3 className="font-serif-editorial text-2xl text-[#191919] mb-1">
              Post-Consumer Textile Waste
            </h3>
            <div className="font-mono-tag text-xs text-[#6F6C66] mb-3">
              4,100 KTPA (4.10 Million Tonnes)
            </div>
            <p className="text-xs sm:text-sm text-[#191919] leading-relaxed mb-3">
              Textiles discarded after human wear or household use. Characterized by complex synthetic blends, missing tags, body grease, tears, and multi-color mixtures.
            </p>
            <div className="text-[11px] font-mono-tag text-[#A64B32] font-semibold bg-[#A64B32]/10 p-2 rounded-xs">
              ⚠️ Critical challenge: 45% ends up in open dumps or incineration because sorting mixed household garments is labor-intensive and logistically fragmented.
            </div>
          </div>

          <div
            onClick={() => setActiveSegment('pre')}
            className={`p-6 rounded-sm border cursor-pointer transition-all duration-200 ${
              activeSegment === 'pre'
                ? 'bg-[#FAF8F5] border-[#191919] ring-2 ring-[#191919]'
                : 'bg-[#FAF8F5]/50 border-[#D4D0C7] hover:border-[#6F6C66]'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-0.5 text-[10px] font-mono-tag uppercase bg-[#EAE6DE] text-[#6F6C66] rounded-xs font-bold">
                Manufacturing Off-cuts
              </span>
              <span className="text-xl font-serif-editorial text-[#191919] font-bold">
                42%
              </span>
            </div>
            <h3 className="font-serif-editorial text-2xl text-[#191919] mb-1">
              Pre-Consumer Textile Waste
            </h3>
            <div className="font-mono-tag text-xs text-[#6F6C66] mb-3">
              2,973 KTPA (2.97 Million Tonnes)
            </div>
            <p className="text-xs sm:text-sm text-[#191919] leading-relaxed mb-3">
              Waste created prior to consumer purchase: spinning lint, yarn off-cuts, selvage trimmings, pattern cutting table scraps, and rejected fabric rolls in mills.
            </p>
            <div className="text-[11px] font-mono-tag text-[#65785F] font-semibold bg-[#65785F]/10 p-2 rounded-xs">
              ✓ Advantage: Clean, uniform, known fibre compositions. Over 98% is successfully upcycled or downcycled, with only ~2% discarded.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
