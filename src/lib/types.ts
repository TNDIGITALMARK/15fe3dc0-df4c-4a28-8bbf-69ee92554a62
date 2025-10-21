export type WonderCategory =
  | 'Natural Wonders'
  | 'Ancient Structures'
  | 'Modern Marvels'
  | 'Hidden Gems'
  | 'Cultural Sites'
  | 'Geological Formations';

export interface Wonder {
  id: string;
  name: string;
  location: string;
  country: string;
  category: WonderCategory;
  description: string;
  longDescription: string;
  images: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  bestVisitingMonths: string[];
  interestingFacts: string[];
  historicalTimeline?: {
    year: string;
    event: string;
  }[];
  photographerCredits: string[];
  relatedWonders: string[];
}

export interface UserCollection {
  favorites: string[];
  visited: string[];
  notes: Record<string, string>;
}
