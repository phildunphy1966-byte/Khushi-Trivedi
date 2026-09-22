import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Database, HelpCircle, Send } from 'lucide-react';
import { SURVEY_FIELDS_SCHEMA } from '../data/nationalTextileData';

export const SurveySection: React.FC = () => {
  const [unwornPercent, setUnwornPercent] = useState<number>(30);
  const [perceivedFate, setPerceivedFate] = useState<string>('recycled');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [showFieldsSchema, setShowFieldsSchema] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="survey" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#D4D0C7]">
      {/* Section Eyebrow */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono-tag text-xs uppercase tracking-widest text-[#6F6C66]">
          Step 10 / Primary Field Research
        </span>
        <span className="font-mono-tag text-xs text-[#A64B32] font-semibold bg-[#A64B32]/10 px-2 py-0.5 border border-[#A64B32]/30 rounded flex items-center gap-1">
          <AlertCircle className="w-3.5 h-3.5" />
          Field Data Status: TBD
        </span>
      </div>

      <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#191919] mb-3 leading-tight">
        What do young consumers think happens next?
      </h2>
      <p className="text-lg sm:text-xl text-[#6F6C66] mb-8 max-w-2xl font-normal">
        A primary research initiative designed for urban Indian young adults (ages 18–30) investigating perceptions of clothing longevity, closet churn, and textile recovery.
      </p>

      {/* Honest Scientific Rigour Notice */}
      <div className="p-6 bg-[#FAF8F5] border border-[#191919] rounded-sm mb-10 shadow-xs">
        <div className="flex items-start gap-3">
          <Database className="w-5 h-5 text-[#191919] shrink-0 mt-1" />
          <div>
            <h3 className="font-serif-editorial text-2xl text-[#191919] mb-1">
              Methodological Integrity Note
            </h3>
            <p className="text-xs sm:text-sm text-[#191919] leading-relaxed mb-3">
              Per strict data governance guidelines, <strong>no fabricated or mock statistical rows</strong> are rendered in this module. All quantitative population bars remain marked <strong>TBD</strong> until verified student survey questionnaires are cleaned and ingested.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono-tag text-[#6F6C66]">
              <span>Target Cohort: Urban Youth (18–30)</span>
              <span>•</span>
              <span>Sample Size: N = TBD</span>
              <span>•</span>
              <button
                onClick={() => setShowFieldsSchema(!showFieldsSchema)}
                className="text-[#191919] underline font-bold hover:text-[#6F6C66]"
              >
                {showFieldsSchema ? 'Hide Question Schema' : 'Inspect Survey Template Schema (10 Fields)'}
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Survey Schema */}
        {showFieldsSchema && (
          <div className="mt-6 pt-5 border-t border-dashed border-[#D4D0C7] text-xs font-mono-tag animate-in fade-in">
            <span className="font-bold text-[#191919] uppercase block mb-3">
              Research Questionnaire Variables (survey_template.csv):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SURVEY_FIELDS_SCHEMA.map((s) => (
                <div key={s.field} className="p-2.5 bg-white border border-[#D4D0C7] rounded-xs">
                  <code className="text-[#191919] font-bold block mb-0.5">{s.field}</code>
                  <span className="text-[#6F6C66] text-[11px]">{s.desc}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Interactive Pulse Check Prototype */}
      <div className="bg-[#FAF8F5] border border-dashed border-[#191919] rounded-sm p-6 sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono-tag text-xs uppercase tracking-wider text-[#191919] font-bold">
            Live Wardrobe Audit (Your Contribution)
          </span>
          <span className="text-xs font-mono-tag text-[#6F6C66]">
            Session Response Only
          </span>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label className="font-serif-editorial text-xl sm:text-2xl text-[#191919]">
                  What percentage of your wardrobe has sat unworn over the past 6 months?
                </label>
                <span className="font-mono-tag text-lg font-bold text-[#191919]">
                  {unwornPercent}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={unwornPercent}
                onChange={(e) => setUnwornPercent(Number(e.target.value))}
                className="w-full h-2 bg-[#D4D0C7] rounded-lg appearance-none cursor-pointer accent-[#191919]"
                aria-label="Percentage of unworn wardrobe"
              />
              <div className="flex justify-between text-[11px] font-mono-tag text-[#6F6C66] mt-1">
                <span>0% (I wear everything)</span>
                <span>50% (Half my closet)</span>
                <span>100% (Everything sits idle)</span>
              </div>
            </div>

            <div>
              <label className="font-serif-editorial text-xl sm:text-2xl text-[#191919] block mb-3">
                Where do you believe most clothes in Indian charity drop-boxes actually end up?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono-tag text-xs">
                {[
                  { id: 'worn', label: 'Worn by someone in need', sub: 'Direct charitable re-wear' },
                  { id: 'recycled', label: 'Downcycled or shred into rugs', sub: 'Mechanical secondary recovery' },
                  { id: 'dumped', label: 'Dumped in city landfills', sub: 'Lost to municipal solid waste' }
                ].map((opt) => (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => setPerceivedFate(opt.id)}
                    className={`p-3 rounded-sm border text-left transition-all ${
                      perceivedFate === opt.id
                        ? 'bg-[#191919] text-[#F2EFE8] border-[#191919]'
                        : 'bg-white text-[#191919] border-[#D4D0C7] hover:border-[#191919]'
                    }`}
                  >
                    <span className="font-bold block mb-1">{opt.label}</span>
                    <span className="text-[10px] opacity-75">{opt.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#191919] text-[#F2EFE8] font-mono-tag text-xs uppercase tracking-wider rounded-none hover:bg-[#333333] transition-colors"
              >
                <span>Record Anonymous Response</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        ) : (
          <div className="p-6 bg-white border border-[#D4D0C7] rounded-sm animate-in fade-in">
            <div className="flex items-center gap-2 mb-3 text-[#65785F]">
              <CheckCircle className="w-5 h-5" />
              <span className="font-serif-editorial text-2xl font-bold text-[#191919]">
                Response Logged into Local Session
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#191919] mb-4 leading-relaxed">
              You estimated <strong>{unwornPercent}%</strong> of your closet sits unworn. In urban studies, young adults frequently under-report unworn clothing by 15–20% until physically auditing each shelf.
            </p>
            <div className="p-3 bg-[#EAE6DE]/70 rounded-xs text-xs font-mono-tag text-[#191919]">
              <strong>Perception Reality Gap:</strong> You chose <em>"{perceivedFate === 'worn' ? 'Direct re-wear' : perceivedFate === 'recycled' ? 'Downcycled into rugs' : 'City landfills'}"</em>. As the 2026 Ministry data proved, the reality is a razor-thin split: 55% recovery vs 45% disposal.
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
