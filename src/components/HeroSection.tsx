import React, { useState } from 'react';
import { ArrowDown, Info, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onStartJourney: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartJourney }) => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const hotspots = [
    {
      id: 'tag',
      label: 'Care Tag',
      coord: { x: '50%', y: '16%' },
      info: '100% Cotton. Made in Tirupur. Machine wash cold. Discard instructions: none provided.'
    },
    {
      id: 'collar',
      label: 'Ribbed Neckline',
      coord: { x: '50%', y: '26%' },
      info: 'Contains a tiny percentage of elastane for stretch. This small blend complicates fibre recycling.'
    },
    {
      id: 'sleeve',
      label: 'Side Seam',
      coord: { x: '24%', y: '40%' },
      info: 'Sewn with synthetic polyester thread—stronger than the cotton body, requiring manual de-threading or chemical separation.'
    },
    {
      id: 'hem',
      label: 'Double-Needle Hem',
      coord: { x: '50%', y: '78%' },
      info: 'Still fully intact. 80% of garments discarded by urban youth are physically functional.'
    }
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#D4D0C7] overflow-hidden">
      {/* Background Subtle Textile Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#191919 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        {/* Garment Identification Care Label Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-dashed border-[#6F6C66] bg-[#FAF8F5] text-xs font-mono-tag text-[#191919] uppercase tracking-widest shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#A64B32] animate-pulse" />
          <span>Case Study Object · No. 048209 · 100% Single Jersey</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-[#191919] uppercase leading-[0.9] mb-6">
          The Afterlife <br className="hidden sm:inline" />
          <span className="italic lowercase font-normal">of</span> Clothes
        </h1>

        {/* Lead Narrative Sentence */}
        <p className="max-w-2xl text-xl sm:text-2xl text-[#191919] font-normal leading-relaxed mb-10 tracking-tight">
          You are done with this T-shirt. <br />
          <span className="text-[#6F6C66] italic">But is the T-shirt done?</span>
        </p>

        {/* Interactive T-Shirt Illustration with Anatomy Hotspots */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 my-4 flex items-center justify-center">
          {/* Stylized Minimal Vector T-Shirt */}
          <div className="w-full h-full relative animate-float-gentle">
            <svg 
              viewBox="0 0 200 200" 
              className="w-full h-full drop-shadow-md select-none transition-transform duration-500 hover:scale-[1.02]"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* T-Shirt Silhouette */}
              <path 
                d="M60 28 L85 45 C95 48 105 48 115 45 L140 28 L175 58 L152 84 L142 75 L142 165 C142 168 140 170 137 170 L63 170 C60 170 58 168 58 165 L58 75 L48 84 L25 58 Z" 
                fill="#FAF8F5" 
                stroke="#191919" 
                strokeWidth="2.5" 
                strokeLinejoin="round" 
              />
              {/* Collar curve */}
              <path 
                d="M85 45 C95 56 105 56 115 45" 
                stroke="#191919" 
                strokeWidth="2" 
                fill="none" 
              />
              {/* Care Label Tag peeking */}
              <rect 
                x="94" 
                y="34" 
                width="12" 
                height="12" 
                fill="#F2EFE8" 
                stroke="#6F6C66" 
                strokeWidth="1" 
                strokeDasharray="2 1"
              />
              {/* Subtle fabric fold contours */}
              <path 
                d="M90 75 Q100 85 110 75" 
                stroke="#D4D0C7" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
              />
              <path 
                d="M75 115 Q90 125 105 118 Q120 110 130 120" 
                stroke="#D4D0C7" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
              />
              {/* Bottom hem dashed stitch line */}
              <line 
                x1="62" 
                y1="164" 
                x2="138" 
                y2="164" 
                stroke="#6F6C66" 
                strokeWidth="1" 
                strokeDasharray="3 2" 
              />
            </svg>

            {/* Interactive Hotspot Buttons */}
            {hotspots.map((hs) => (
              <button
                key={hs.id}
                onClick={() => setActiveHotspot(activeHotspot === hs.id ? null : hs.id)}
                className={`absolute w-6 h-6 -ml-3 -mt-3 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeHotspot === hs.id 
                    ? 'bg-[#191919] text-[#F2EFE8] scale-125 ring-4 ring-[#191919]/20' 
                    : 'bg-[#FAF8F5] border border-[#191919] text-[#191919] hover:bg-[#191919] hover:text-[#F2EFE8]'
                }`}
                style={{ left: hs.coord.x, top: hs.coord.y }}
                aria-label={`Inspect ${hs.label}`}
                title={`Inspect ${hs.label}`}
              >
                <span className="font-mono text-[10px] font-bold">+</span>
              </button>
            ))}
          </div>
        </div>

        {/* Hotspot details card */}
        <div className="h-16 w-full max-w-md flex items-center justify-center mb-6">
          {activeHotspot ? (
            <div className="p-3 bg-[#FAF8F5] border border-[#191919] rounded-sm text-xs font-mono-tag text-left transition-opacity animate-in fade-in">
              <span className="font-bold text-[#191919] uppercase block mb-0.5">
                {hotspots.find(h => h.id === activeHotspot)?.label}
              </span>
              <p className="text-[#6F6C66] text-xs">
                {hotspots.find(h => h.id === activeHotspot)?.info}
              </p>
            </div>
          ) : (
            <span className="text-xs font-mono-tag text-[#6F6C66] flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              Tap the (+) points on the T-shirt to examine its composition
            </span>
          )}
        </div>

        {/* Primary Call to Action */}
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={onStartJourney}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#191919] text-[#F2EFE8] rounded-none border border-[#191919] font-mono-tag text-sm tracking-wider uppercase hover:bg-[#333333] transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-[#191919]"
          >
            <span>Follow Its Journey</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
          
          <span className="text-[11px] font-mono-tag text-[#6F6C66] tracking-wide">
            Scroll down or use the button to begin
          </span>
        </div>
      </div>
    </section>
  );
};
