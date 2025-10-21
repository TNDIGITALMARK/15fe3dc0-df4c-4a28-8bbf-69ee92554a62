'use client';

import { CategoryFilter } from '@/components/CategoryFilter';
import { Navigation } from '@/components/Navigation';
import { WonderCard } from '@/components/WonderCard';
import { useFavorites } from '@/hooks/useFavorites';
import { WonderCategory } from '@/lib/types';
import { wondersData } from '@/lib/wonderData';
import { Search, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function DiscoverPage() {
  const [selectedCategory, setSelectedCategory] = useState<WonderCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { favorites, toggleFavorite, isFavorite, isLoaded } = useFavorites();

  // Get unique categories
  const categories = Array.from(new Set(wondersData.map((w) => w.category))) as WonderCategory[];

  // Filter wonders
  const filteredWonders = wondersData.filter((wonder) => {
    const matchesCategory = selectedCategory === 'All' || wonder.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      wonder.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wonder.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wonder.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="min-h-screen bg-background pb-24">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-border bg-white/95 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 py-6">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-accent" />
              <div>
                <h1 className="text-3xl font-bold text-foreground">WonderWorld</h1>
                <p className="text-sm text-muted-foreground">
                  Discover the world's most amazing places
                </p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search wonders, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-input bg-background py-2.5 pl-10 pr-4 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </header>

        {/* Category Filter */}
        <div className="sticky top-[140px] z-20 bg-background/95 backdrop-blur-sm py-4 border-b border-border">
          <div className="mx-auto max-w-7xl px-4">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </div>

        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-4 py-8">
          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {filteredWonders.length} {filteredWonders.length === 1 ? 'wonder' : 'wonders'} found
            </p>
            {selectedCategory !== 'All' && (
              <button
                onClick={() => setSelectedCategory('All')}
                className="text-sm text-primary hover:underline"
              >
                Clear filter
              </button>
            )}
          </div>

          {/* Wonders Grid */}
          {filteredWonders.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredWonders.map((wonder) => (
                <WonderCard
                  key={wonder.id}
                  wonder={wonder}
                  isFavorite={isLoaded && isFavorite(wonder.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 rounded-full bg-muted p-6">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">No wonders found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </main>
      </div>

      <Navigation />
    </>
  );
}
