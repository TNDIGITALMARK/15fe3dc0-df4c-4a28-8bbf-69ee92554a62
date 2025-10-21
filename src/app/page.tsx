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
      <div className="min-h-screen bg-white pb-24">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-border bg-white">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-foreground mb-1">WonderWorld</h1>
              <p className="text-sm text-muted-foreground font-light">
                Discover the world's most amazing places
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search wonders, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-input bg-white py-3 pl-11 pr-4 text-sm font-light focus:border-foreground focus:outline-none transition-colors"
              />
            </div>
          </div>
        </header>

        {/* Category Filter */}
        <div className="sticky top-[164px] z-20 bg-white py-5 border-b border-border">
          <div className="mx-auto max-w-7xl px-6">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </div>

        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-6 py-10">
          {/* Results Count */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-muted-foreground font-light">
              {filteredWonders.length} {filteredWonders.length === 1 ? 'wonder' : 'wonders'}
            </p>
            {selectedCategory !== 'All' && (
              <button
                onClick={() => setSelectedCategory('All')}
                className="text-sm text-foreground hover:opacity-70 transition-opacity font-light"
              >
                Clear filter
              </button>
            )}
          </div>

          {/* Wonders Grid */}
          {filteredWonders.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="mb-6 rounded-full bg-muted p-8">
                <Search className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-medium">No wonders found</h3>
              <p className="text-sm text-muted-foreground font-light">
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
