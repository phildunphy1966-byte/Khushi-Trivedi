import React from 'react';
import { ArrowUp, Heart, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

interface EndingSectionProps {
  onRestart: () => void;
  onOpenSources: () => void;
}

export const EndingSection: React.FC<EndingSectionProps> = ({ onRestart, onOpenSources }) => {
  return (
    <section id="ending" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      {/* Editorial closing stanza */}
      <div className="max-w-3xl mx-auto mb-16">
        <span className="font-mono-tag text-xs uppercase tracking-widest text-[#6F6C66] block mb-4">
          Conclusion & Reflection
        </span>

        <h2 className="font-serif-editorial text-5xl sm:text-7xl lg:text-8xl text-[#191919] mb-4 leading-tight">
          You were done with it. <br />
          <span className="italic font-normal text-[#6F6C66]">But its story continued.</span>
        </h2>

        <p className="text-xl sm:text-2xl text-[#191919] font-normal max-w-xl mx-auto mb-10 leading-relaxed">
          Where will your next unwanted T-shirt go?
        </p>

        {/* Practical hierarchy of wardrobe stewardship */}
        <div className="text-left bg-[#FAF8F5] border border-[#191919] rounded-sm p-6 sm:p-8 mb-12 shadow-xs">
          <span className="font-mono-tag text-xs uppercase tracking-widest text-[#191919] font-bold block mb-4">
            The Circular Stewardship Hierarchy (Before You Discard)
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-white border border-[#D4D0C7] rounded-xs">
              <span className="font-mono-tag font-bold text-sm text-[#191919] block mb-1">
                1. Wear 9 Months Longer
              </span>
              <p className="text-[#6F6C66] leading-relaxed">
                Extending a garment’s active lifespan by just 9 months reduces its combined carbon, waste, and water footprint by ~20–30% (WRAP / UNEP).
              </p>
            </div>

            <div className="p-4 bg-white border border-[#D4D0C7] rounded-xs">
              <span className="font-mono-tag font-bold text-sm text-[#191919] block mb-1">
                2. Direct Peer-to-Peer
              </span>
              <p className="text-[#6F6C66] leading-relaxed">
                Giving directly to a friend, colleague, or local tailor bypasses the massive 66% municipal waste stream where clean textiles get contaminated.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#D4D0C7] rounded-xs">
              <span className="font-mono-tag font-bold text-sm text-[#191919] block mb-1">
                3. Buy Monomaterials
              </span>
              <p className="text-[#6F6C66] leading-relaxed">
                Seek 100% Cotton, 100% Wool, or 100% Linen. Avoiding 3%+ elastane or polyester blends ensures Panipat mills can mechanically shred fibers cleanly.
              </p>
            </div>
          </div>
        </div>

        {/* Primary actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onRestart}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#191919] text-[#F2EFE8] font-mono-tag text-xs uppercase tracking-wider rounded-none hover:bg-[#333333] transition-colors focus:ring-2 focus:ring-[#191919]"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Restart Journey from Wardrobe</span>
          </button>

          <button
            onClick={onOpenSources}
            className="inline-flex items-center gap-2 px-6 py-4 bg-[#FAF8F5] text-[#191919] border border-[#191919] font-mono-tag text-xs uppercase tracking-wider rounded-none hover:bg-[#EAE6DE] transition-colors"
          >
            <span>View All Data Sources & Methodology</span>
          </button>
        </div>
      </div>

      {/* Subtle Colophon Footer */}
      <footer className="pt-12 border-t border-dashed border-[#D4D0C7] text-xs font-mono-tag text-[#6F6C66] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>The Afterlife of Clothes · Research Data Story</span>
          <span className="mx-2">·</span>
          <span>Ministry of Textiles (Govt of India, 2026) Baseline</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#hero" className="hover:text-[#191919] inline-flex items-center gap-1">
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </footer>
    </section>
  );
};
