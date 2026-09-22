import React, { useState } from 'react';
import { Filter, MessageSquare, Quote } from 'lucide-react';
import { QUALITATIVE_QUOTES } from '../data/nationalTextileData';

export const VoicesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const themes = [
    { id: 'all', label: 'All Responses' },
    { id: 'donation', label: 'Donation Realities' },
    { id: 'uncertainty', label: 'System Uncertainty' },
    { id: 'attachment', label: 'Emotional Attachment' },
    { id: 'convenience', label: 'Convenience & Pocha' }
  ];

  const filteredQuotes = activeFilter === 'all'
    ? QUALITATIVE_QUOTES
    : QUALITATIVE_QUOTES.filter((q) => q.theme === activeFilter);

  return (
    <section id="voices" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#D4D0C7]">
      {/* Section Eyebrow */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono-tag text-xs uppercase tracking-widest text-[#6F6C66]">
          Step 11 / Qualitative Dispatches
        </span>
        <span className="text-xs font-mono-tag text-[#191919] bg-[#FAF8F5] px-2 py-0.5 border border-[#D4D0C7] rounded">
          Anonymised Field Voices
        </span>
      </div>

      <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#191919] mb-3 leading-tight">
        What people told us.
      </h2>
      <p className="text-lg sm:text-xl text-[#6F6C66] mb-8 max-w-2xl font-normal">
        Real voices from urban Indian households reflecting on closet guilt, donation dilemmas, emotional relics, and the ubiquity of the household cleaning rag.
      </p>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs font-mono-tag text-[#6F6C66] mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" />
          Theme:
        </span>
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveFilter(t.id)}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono-tag transition-colors border ${
              activeFilter === t.id
                ? 'bg-[#191919] text-[#F2EFE8] border-[#191919] font-bold'
                : 'bg-[#FAF8F5] text-[#191919] border-[#D4D0C7] hover:border-[#191919]'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Masonry / Grid of Quotes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredQuotes.map((item) => (
          <div
            key={item.id}
            className="p-6 sm:p-7 bg-[#FAF8F5] border border-[#D4D0C7] rounded-sm flex flex-col justify-between hover:border-[#191919] transition-colors relative shadow-2xs"
          >
            <div className="mb-4">
              <Quote className="w-6 h-6 text-[#D4D0C7] mb-3" />
              <p className="font-serif-editorial text-xl sm:text-2xl text-[#191919] leading-snug italic">
                "{item.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-dashed border-[#D4D0C7] flex items-center justify-between text-xs font-mono-tag">
              <div>
                <strong className="text-[#191919] block">{item.author}</strong>
                <span className="text-[#6F6C66]">{item.city} · Age {item.age}</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#EAE6DE] text-[#6F6C66] uppercase text-[10px] tracking-wider font-semibold">
                {item.theme}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
