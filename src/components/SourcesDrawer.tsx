import React, { useEffect } from 'react';
import { BookOpen, ExternalLink, ShieldCheck, X } from 'lucide-react';
import { SOURCES_LIST } from '../data/nationalTextileData';

interface SourcesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SourcesDrawer: React.FC<SourcesDrawerProps> = ({ isOpen, onClose }) => {
  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="w-full max-w-2xl bg-[#F2EFE8] h-full overflow-y-auto border-l border-[#191919] p-6 sm:p-8 flex flex-col justify-between shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D4D0C7]">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#191919]" />
              <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#191919] font-bold">
                Sources & Methodology
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#EAE6DE] text-[#191919] transition-colors focus:ring-2 focus:ring-[#191919]"
              aria-label="Close sources drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Dataset Governance Principle */}
          <div className="p-4 bg-[#FAF8F5] border border-[#191919] rounded-sm mb-8 text-xs font-mono-tag">
            <div className="flex items-center gap-2 text-[#65785F] font-bold uppercase mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Research Integrity Protocol</span>
            </div>
            <p className="text-[#191919] leading-relaxed">
              Every statistic displayed on this website is derived directly from empirical studies. Where field surveys are ongoing, numbers are strictly marked <strong>TBD</strong>. We never merge commercial e-commerce review sets with national municipal waste audits.
            </p>
          </div>

          {/* Citations List */}
          <div className="space-y-6 mb-8">
            {SOURCES_LIST.map((src) => (
              <div key={src.id} className="p-5 bg-white border border-[#D4D0C7] rounded-sm text-xs">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif-editorial text-xl font-bold text-[#191919] leading-snug">
                    {src.title}
                  </h3>
                  {src.url && (
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6F6C66] hover:text-[#191919] shrink-0 p-1"
                      title="Open source reference"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div className="font-mono-tag text-[11px] text-[#6F6C66] mb-3">
                  {src.organization} · {src.year}
                </div>

                <div className="space-y-2 font-mono-tag text-[11px]">
                  <div>
                    <strong className="text-[#191919]">Role in Project: </strong>
                    <span className="text-[#6F6C66]">{src.role}</span>
                  </div>
                  <div>
                    <strong className="text-[#A64B32]">Boundary / Limitation: </strong>
                    <span className="text-[#6F6C66]">{src.limitations}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Kaggle Datasets Role Specification */}
          <div className="p-4 bg-[#FAF8F5] border border-dashed border-[#6F6C66] rounded-sm text-xs font-mono-tag space-y-2 mb-8">
            <span className="font-bold text-[#191919] uppercase block">
              Kaggle Dataset Treatment:
            </span>
            <p className="text-[#6F6C66]">
              • <strong>Women's E-Commerce Reviews:</strong> 23,486 commercial customer reviews utilized solely for qualitative sentiment around clothing comfort and fit dissatisfaction.
            </p>
            <p className="text-[#6F6C66]">
              • <strong>Clothing Fit Data:</strong> ModCloth & RentTheRunway transactions referenced only for dimensional variance insights, never extrapolated to Indian disposal rates.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#D4D0C7] flex justify-between items-center text-xs font-mono-tag text-[#6F6C66]">
          <span>AI Studio Build Pack v2</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#191919] text-[#F2EFE8] uppercase rounded-xs hover:bg-[#333333]"
          >
            Close Drawer
          </button>
        </div>
      </div>
    </div>
  );
};
