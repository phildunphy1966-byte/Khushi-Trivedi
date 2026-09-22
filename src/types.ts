export type ReasonId = 'fit' | 'damaged' | 'bored' | 'style';
export type DisposalChoiceId = 'donate' | 'give_sell' | 'repurpose' | 'discard';
export type SortingCategory = 'reuse' | 'recycle' | 'downcycle' | 'discard';

export interface JourneyState {
  reason: ReasonId | null;
  disposalChoice: DisposalChoiceId | null;
}

export interface MetricItem {
  id: string;
  stage: string;
  category: string;
  quantityKtpa: number;
  percentage?: number;
  geography: string;
  year: number;
  sourceId: string;
  notes?: string;
}

export interface GarmentCard {
  id: string;
  name: string;
  description: string;
  composition: string;
  condition: string;
  color: string;
  recommendedCategory: SortingCategory;
  explanation: string;
  challenge: string;
}

export interface QuoteItem {
  id: string;
  quote: string;
  author: string;
  age: number;
  city: string;
  theme: 'donation' | 'uncertainty' | 'attachment' | 'convenience';
}

export interface SourceReference {
  id: string;
  title: string;
  organization: string;
  year: string;
  url?: string;
  role: string;
  limitations: string;
}
