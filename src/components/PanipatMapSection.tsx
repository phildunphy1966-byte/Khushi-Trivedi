import React, { useState } from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { PANIPAT_STEPS } from '../data/nationalTextileData';

export const PanipatMapSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const step = PANIPAT_STEPS[activeStep];

  return (
    <section id="panipat" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#D4D0C7]">
      {/* Section Eyebrow */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono-tag text-xs uppercase tracking-widest text-[#6F6C66]">
          Step 06 / Industrial Transformation
        </span>
        <span className="font-mono-tag text-xs text-[#191919] bg-[#FAF8F5] px-2 py-0.5 border border-[#D4D0C7] rounded">
          Foundation for MSME Clusters · 2026
        </span>
      </div>

      <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#191919] mb-3 leading-tight">
        From old textile to new material.
      </h2>
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-[#A64B32]" />
        <span className="font-serif-editorial text-2xl sm:text-3xl text-[#191919] font-bold">
          Panipat, Haryana
        </span>
        <span className="font-mono-tag text-xs text-[#6F6C66] px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#D4D0C7]">
          "The Cast-Off Capital of the World"
        </span>
      </div>

      <p className="text-lg sm:text-xl text-[#6F6C66] mb-10 max-w-3xl font-normal">
        A significant portion of India’s post-consumer and imported wearable discards converge upon Panipat, where centuries-old mechanical ingenuity turns worn fibers into relief blankets.
      </p>

      {/* Interactive Regional Cluster Map & Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-stretch">
        {/* Stylized India & Panipat SVG Map */}
        <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#191919] rounded-sm p-6 flex flex-col justify-between relative overflow-hidden shadow-xs">
          <div className="flex items-center justify-between mb-3 text-xs font-mono-tag">
            <span className="font-bold text-[#191919]">Haryana State Cluster</span>
            <span className="text-[#6F6C66]">Lat 29.39° N, 76.96° E</span>
          </div>

          <div className="relative w-full h-64 sm:h-72 my-2 flex items-center justify-center">
            {/* Minimal Vector Outline of Northern India / Haryana */}
            <svg 
              viewBox="0 0 300 300" 
              className="w-full h-full"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Generalized India subcontinent contour */}
              <path
                d="M 120 40 L 170 45 L 200 80 L 220 120 L 240 140 L 220 170 L 190 200 L 160 260 L 140 280 L 120 250 L 90 200 L 80 160 L 60 130 L 70 90 L 100 60 Z"
                fill="#EAE6DE"
                stroke="#D4D0C7"
                strokeWidth="1.5"
              />
              {/* Haryana Region Highlight */}
              <path
                d="M 115 85 L 140 85 L 145 110 L 125 115 L 110 100 Z"
                fill="#FAF8F5"
                stroke="#191919"
                strokeWidth="2"
              />
              {/* Panipat Marker with Pulsing Beacon */}
              <circle cx="128" cy="96" r="14" fill="#A64B32" fillOpacity="0.2" className="animate-ping" />
              <circle cx="128" cy="96" r="6" fill="#A64B32" stroke="#FAF8F5" strokeWidth="2" />
              
              {/* Connecting dashed route line from Southern/Western textile centers to Panipat */}
              <path
                d="M 100 210 Q 90 140 126 98"
                stroke="#6F6C66"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                fill="none"
              />
              <path
                d="M 180 180 Q 150 130 130 98"
                stroke="#6F6C66"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                fill="none"
              />

              <text x="138" y="99" fill="#191919" fontSize="11" fontFamily="'JetBrains Mono', monospace" fontWeight="bold">
                Panipat
              </text>
              <text x="100" y="225" fill="#6F6C66" fontSize="9" fontFamily="'JetBrains Mono', monospace">
                Western Hubs
              </text>
              <text x="175" y="195" fill="#6F6C66" fontSize="9" fontFamily="'JetBrains Mono', monospace">
                Southern Mills
              </text>
            </svg>
          </div>

          <div className="pt-3 border-t border-dashed border-[#D4D0C7] text-xs font-mono-tag text-[#6F6C66]">
            100+ MSME recycling clusters operate in Panipat, turning post-consumer garments into over 100,000 relief blankets every single day.
          </div>
        </div>

        {/* 5-Step Mechanical Process Flow */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          {/* Step Selector Tabs */}
          <div className="flex border-b border-[#191919] mb-6 overflow-x-auto">
            {PANIPAT_STEPS.map((s, idx) => (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`flex-1 py-3 px-2 text-center font-mono-tag text-xs font-bold transition-colors border-b-2 whitespace-nowrap ${
                  activeStep === idx
                    ? 'border-[#191919] text-[#191919] bg-[#FAF8F5]'
                    : 'border-transparent text-[#6F6C66] hover:text-[#191919]'
                }`}
              >
                <span className="text-[10px] block opacity-60">Step {s.step}</span>
                <span>{s.title}</span>
              </button>
            ))}
          </div>

          {/* Active Step Detailed Card */}
          <div className="bg-[#FAF8F5] border border-[#191919] rounded-sm p-6 sm:p-8 flex-1 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-tag text-xs uppercase px-2 py-0.5 bg-[#EAE6DE] rounded text-[#191919] font-bold">
                  Phase {step.step} of 05 · {step.title}
                </span>
                <span className="font-serif-editorial text-2xl font-bold text-[#A64B32]">
                  {step.title}
                </span>
              </div>

              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#191919] mb-3">
                {step.name}
              </h3>

              <p className="text-sm sm:text-base text-[#191919] leading-relaxed mb-4">
                {step.desc}
              </p>

              <div className="p-3 bg-[#EAE6DE]/70 rounded-xs border-l-2 border-[#191919] text-xs font-mono-tag text-[#191919]">
                <strong className="block mb-1">Industrial Nuance:</strong>
                {step.detail}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-dashed border-[#D4D0C7]">
              <button
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className="px-3 py-1.5 text-xs font-mono-tag border border-[#D4D0C7] rounded bg-white disabled:opacity-30 text-[#191919]"
              >
                ← Previous Step
              </button>

              <span className="text-xs font-mono-tag text-[#6F6C66]">
                {activeStep + 1} / {PANIPAT_STEPS.length}
              </span>

              <button
                onClick={() => setActiveStep((prev) => Math.min(PANIPAT_STEPS.length - 1, prev + 1))}
                disabled={activeStep === PANIPAT_STEPS.length - 1}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-mono-tag bg-[#191919] text-[#F2EFE8] rounded disabled:opacity-30"
              >
                <span>Next Step</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scope Disclaimer */}
      <div className="p-3 bg-[#FAF8F5] border border-dashed border-[#D4D0C7] rounded-sm text-xs font-mono-tag text-[#6F6C66]">
        <strong className="text-[#191919]">Methodological Note:</strong> Panipat is a specific regional cluster documented by the Foundation for MSME Clusters (2026). It must not be treated as a universal representation for all of India. Many Indian towns lack mechanical garnetting infrastructure entirely.
      </div>
    </section>
  );
};
