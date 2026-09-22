import React, { useEffect, useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { ReasonSection } from './components/ReasonSection';
import { ScaleSection } from './components/ScaleSection';
import { DisposalSection } from './components/DisposalSection';
import { CollectionSankeySection } from './components/CollectionSankeySection';
import { SortingGameSection } from './components/SortingGameSection';
import { PanipatMapSection } from './components/PanipatMapSection';
import { OutcomeDefinitionsSection } from './components/OutcomeDefinitionsSection';
import { NationalOutcomeSection } from './components/NationalOutcomeSection';
import { PrePostComparisonSection } from './components/PrePostComparisonSection';
import { SurveySection } from './components/SurveySection';
import { VoicesSection } from './components/VoicesSection';
import { RecapSection } from './components/RecapSection';
import { EndingSection } from './components/EndingSection';
import { SourcesDrawer } from './components/SourcesDrawer';
import { DisposalChoiceId, JourneyState, ReasonId } from './types';

export const App: React.FC = () => {
  const [journeyState, setJourneyState] = useState<JourneyState>({
    reason: null,
    disposalChoice: null,
  });

  const [isSourcesOpen, setIsSourcesOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  // Track overall scroll progress for thread line
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectReason = (reason: ReasonId) => {
    setJourneyState((prev) => ({ ...prev, reason }));
  };

  const handleSelectDisposal = (choice: DisposalChoiceId) => {
    setJourneyState((prev) => ({ ...prev, disposalChoice: choice }));
  };

  const handleRestart = () => {
    setJourneyState({
      reason: null,
      disposalChoice: null,
    });
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartJourney = () => {
    const reasonEl = document.getElementById('reason');
    if (reasonEl) {
      reasonEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F2EFE8] text-[#191919] selection:bg-[#D4D0C7] selection:text-[#191919] flex flex-col font-sans">
      {/* Sticky Header with Thread Progress Indicator */}
      <HeaderNav
        journeyState={journeyState}
        onOpenSources={() => setIsSourcesOpen(true)}
        onRestart={handleRestart}
        activeSection={activeSection}
        scrollProgress={scrollProgress}
      />

      {/* Main Story Flow */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onStartJourney={handleStartJourney} />

        {/* 2. Reason Selector */}
        <ReasonSection
          selectedReason={journeyState.reason}
          onSelectReason={handleSelectReason}
          onOpenSources={() => setIsSourcesOpen(true)}
        />

        {/* 3. India Scale Reveal */}
        <ScaleSection onOpenSources={() => setIsSourcesOpen(true)} />

        {/* 4. Disposal Gateway Choice */}
        <DisposalSection
          selectedDisposal={journeyState.disposalChoice}
          onSelectDisposal={handleSelectDisposal}
        />

        {/* 5. Collection Flow & Sankey */}
        <CollectionSankeySection onOpenSources={() => setIsSourcesOpen(true)} />

        {/* 6. Sorting Activity */}
        <SortingGameSection />

        {/* 7. Panipat Case Study Map */}
        <PanipatMapSection />

        {/* 8. Outcome Definitions */}
        <OutcomeDefinitionsSection />

        {/* 9. National Outcome Pictogram (55% vs 45%) */}
        <NationalOutcomeSection onOpenSources={() => setIsSourcesOpen(true)} />

        {/* 10. Pre- vs Post-Consumer Comparison */}
        <PrePostComparisonSection />

        {/* 11. Primary Survey (TBD State) */}
        <SurveySection />

        {/* 12. Qualitative Quote Wall */}
        <VoicesSection />

        {/* 13. Personal Journey Recap */}
        <RecapSection journeyState={journeyState} onRestart={handleRestart} />

        {/* 14. Reflective Ending */}
        <EndingSection onRestart={handleRestart} onOpenSources={() => setIsSourcesOpen(true)} />
      </main>

      {/* Sources & Methodology Slide-over Drawer */}
      <SourcesDrawer
        isOpen={isSourcesOpen}
        onClose={() => setIsSourcesOpen(false)}
      />
    </div>
  );
};

export default App;
