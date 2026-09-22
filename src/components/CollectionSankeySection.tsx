import React, { useState } from 'react';
import { GitCommit, Info, Truck } from 'lucide-react';
import { NATIONAL_TEXTILE_STATS } from '../data/nationalTextileData';

interface CollectionSankeySectionProps {
  onOpenSources: () => void;
}

export const CollectionSankeySection: React.FC<CollectionSankeySectionProps> = ({ onOpenSources }) => {
  const [selectedNode, setSelectedNode] = useState<'ulb' | 'ngo' | 'sorting' | 'home'>('ulb');

  const nodes = {
    home: {
      title: 'Indian Households & Wardrobes',
      volume: '4,100 KTPA (100% of Post-Consumer)',
      actors: 'Individual citizens, families, urban residential colonies',
      desc: 'Clothes exit homes through seasonal cleaning (Diwali, monsoon changes), rapid child outgrowths, or impulse fast-fashion disuse.',
      reality: 'Less than 15% of Indian homes segregate textiles at source into separate clean dry bins; most clothes get bundled with general dry or mixed waste.'
    },
    ulb: {
      title: 'Urban Local Bodies (ULBs)',
      volume: '2,725 KTPA (66% of Post-Consumer Collection)',
      actors: 'Municipal sanitation workers, tipper trucks, secondary transfer stations',
      desc: 'The official municipal collection system. Discarded textiles enter general household municipal solid waste bins.',
      reality: 'High contamination risk! Mixed with food waste, moisture, and road dust in compactors, textiles absorb odors and mold, severely disqualifying them from fiber recycling or secondhand wear.'
    },
    ngo: {
      title: 'NGOs & Informal Collectors',
      volume: '1,375 KTPA (34% of Post-Consumer Collection)',
      actors: 'Kabadiwalas, itinerant waste buyers (chindiwallas), NGO drop-boxes, scrap dealers',
      desc: 'Informal door-to-door barterers (e.g. exchanging old clothes for stainless steel utensils or plasticware) and organized charity drop networks.',
      reality: 'Crucial for recovery: because clothes are gathered dry and intact, this pathway yields high rates of wearable secondhand re-circulation and clean sorting.'
    },
    sorting: {
      title: 'Regional Sorting Facilities & Yards',
      volume: 'Converged Post-Consumer Streams',
      actors: 'Manual sorters, dhabba grading yards, wholesale cloth aggregators',
      desc: 'Centralized yards where clothes are separated by condition, fabric blend, and color shade before downstream dispatch.',
      reality: 'Bottleneck: Sorting is almost entirely manual. A skilled sorter grades an item in 3 to 5 seconds by hand-feel, but volumes vastly outpace skilled labor availability.'
    }
  };

  const active = nodes[selectedNode];

  return (
    <section id="collection" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#D4D0C7]">
      {/* Section Eyebrow */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono-tag text-xs uppercase tracking-widest text-[#6F6C66]">
          Step 04 / Logistical Arteries
        </span>
        <span className="text-xs font-mono-tag text-[#191919] bg-[#FAF8F5] px-2 py-0.5 border border-[#D4D0C7] rounded">
          Source: MoT 2026
        </span>
      </div>

      <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#191919] mb-3 leading-tight">
        Your T-shirt leaves home.
      </h2>
      <p className="text-lg sm:text-xl text-[#191919] mb-4 max-w-3xl font-normal">
        Once outside your doorstep, clothing flows through two starkly different channels in India:
      </p>

      {/* Primary 66% vs 34% Callout Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <button
          onClick={() => setSelectedNode('ulb')}
          className={`p-6 rounded-sm border text-left transition-all ${
            selectedNode === 'ulb'
              ? 'bg-[#FAF8F5] border-[#191919] ring-2 ring-[#191919]'
              : 'bg-[#FAF8F5]/60 border-[#D4D0C7] hover:border-[#6F6C66]'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono-tag text-[10px] uppercase tracking-wider text-[#A64B32] font-bold">
              Municipal Waste Stream
            </span>
            <span className="font-serif-editorial text-3xl font-bold text-[#191919]">
              66%
            </span>
          </div>
          <h3 className="font-serif-editorial text-2xl text-[#191919] mb-1">
            Urban Local Bodies (ULBs)
          </h3>
          <div className="font-mono-tag text-xs text-[#6F6C66] mb-3">
            2,725 KTPA (2.725 Million Tonnes)
          </div>
          <p className="text-xs text-[#191919] leading-relaxed">
            Mixed into municipal municipal solid waste. High contamination rate leads overwhelmingly to open dumps and incineration.
          </p>
        </button>

        <button
          onClick={() => setSelectedNode('ngo')}
          className={`p-6 rounded-sm border text-left transition-all ${
            selectedNode === 'ngo'
              ? 'bg-[#FAF8F5] border-[#191919] ring-2 ring-[#191919]'
              : 'bg-[#FAF8F5]/60 border-[#D4D0C7] hover:border-[#6F6C66]'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono-tag text-[10px] uppercase tracking-wider text-[#65785F] font-bold">
              Informal / Charitable Stream
            </span>
            <span className="font-serif-editorial text-3xl font-bold text-[#191919]">
              34%
            </span>
          </div>
          <h3 className="font-serif-editorial text-2xl text-[#191919] mb-1">
            NGOs & Informal Collectors
          </h3>
          <div className="font-mono-tag text-xs text-[#6F6C66] mb-3">
            1,375 KTPA (1.375 Million Tonnes)
          </div>
          <p className="text-xs text-[#191919] leading-relaxed">
            Door-to-door kabadiwalas, utensil barterers, and charity boxes. Keeps textiles dry, enabling high-value sorting and reuse.
          </p>
        </button>
      </div>

      {/* Interactive Flow / Sankey Representation */}
      <div className="p-6 sm:p-8 bg-[#FAF8F5] border border-[#191919] rounded-sm mb-6">
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono-tag text-xs uppercase tracking-widest text-[#191919] font-bold flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5" />
            Collection Pathway Map (Home → Channels → Sorting)
          </span>
          <span className="text-[11px] font-mono-tag text-[#6F6C66]">
            Select any node to view actors & mechanics
          </span>
        </div>

        {/* Visual Flow diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-center">
          {/* Node 1: Origin */}
          <button
            onClick={() => setSelectedNode('home')}
            className={`p-4 rounded-sm border text-left transition-all ${
              selectedNode === 'home'
                ? 'bg-[#191919] text-[#F2EFE8] border-[#191919]'
                : 'bg-[#FAF8F5] text-[#191919] border-[#D4D0C7] hover:border-[#191919]'
            }`}
          >
            <span className="font-mono-tag text-[10px] uppercase block mb-1 opacity-70">
              Origin (100%)
            </span>
            <h4 className="font-serif-editorial text-xl font-bold mb-1">Wardrobes & Homes</h4>
            <span className="font-mono-tag text-xs opacity-90 block">4,100 KTPA</span>
          </button>

          {/* Connectors & Split */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setSelectedNode('ulb')}
              className={`p-3 rounded-sm border text-left transition-all text-xs font-mono-tag ${
                selectedNode === 'ulb'
                  ? 'bg-[#A64B32] text-[#F2EFE8] border-[#A64B32]'
                  : 'bg-[#FAF8F5] text-[#191919] border-[#D4D0C7] hover:border-[#A64B32]'
              }`}
            >
              <div className="flex justify-between items-center mb-0.5">
                <span className="font-bold">ULB Municipal (66%)</span>
                <span>2,725 KTPA</span>
              </div>
              <span className="text-[10px] opacity-80">Mixed Waste → Dumps</span>
            </button>

            <button
              onClick={() => setSelectedNode('ngo')}
              className={`p-3 rounded-sm border text-left transition-all text-xs font-mono-tag ${
                selectedNode === 'ngo'
                  ? 'bg-[#65785F] text-[#F2EFE8] border-[#65785F]'
                  : 'bg-[#FAF8F5] text-[#191919] border-[#D4D0C7] hover:border-[#65785F]'
              }`}
            >
              <div className="flex justify-between items-center mb-0.5">
                <span className="font-bold">NGO & Informal (34%)</span>
                <span>1,375 KTPA</span>
              </div>
              <span className="text-[10px] opacity-80">Kabadiwalas & Barter</span>
            </button>
          </div>

          {/* Node 3: Sorting */}
          <button
            onClick={() => setSelectedNode('sorting')}
            className={`p-4 rounded-sm border text-left transition-all ${
              selectedNode === 'sorting'
                ? 'bg-[#191919] text-[#F2EFE8] border-[#191919]'
                : 'bg-[#FAF8F5] text-[#191919] border-[#D4D0C7] hover:border-[#191919]'
            }`}
          >
            <span className="font-mono-tag text-[10px] uppercase block mb-1 opacity-70">
              Convergence Hub
            </span>
            <h4 className="font-serif-editorial text-xl font-bold mb-1">Sorting Yards</h4>
            <span className="font-mono-tag text-xs opacity-90 block">Manual Grading</span>
          </button>
        </div>

        {/* Selected Node Inspector Pane */}
        <div className="mt-6 pt-5 border-t border-dashed border-[#D4D0C7]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
            <h4 className="font-serif-editorial text-2xl text-[#191919]">
              {active.title}
            </h4>
            <span className="font-mono-tag text-xs text-[#6F6C66]">
              Volume: <strong className="text-[#191919]">{active.volume}</strong>
            </span>
          </div>

          <p className="text-sm text-[#191919] mb-3 leading-relaxed">
            {active.desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-tag">
            <div className="p-3 bg-[#EAE6DE]/60 rounded-xs">
              <strong className="block text-[#191919] mb-1">Key Ground Actors:</strong>
              <span className="text-[#6F6C66]">{active.actors}</span>
            </div>
            <div className="p-3 bg-[#EAE6DE]/60 rounded-xs">
              <strong className="block text-[#191919] mb-1">Operational Reality:</strong>
              <span className="text-[#6F6C66]">{active.reality}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
