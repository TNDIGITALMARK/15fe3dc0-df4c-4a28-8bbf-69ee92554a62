'use client';

import { CategoryFilter } from '@/components/CategoryFilter';
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { WonderCard } from '@/components/WonderCard';
import { useFavorites } from '@/hooks/useFavorites';
import { WonderCategory } from '@/lib/types';
import { wondersData } from '@/lib/wonderData';
import { Search } from 'lucide-react';
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
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        {/* Category Filter */}
        <div className="sticky top-[156px] z-20 bg-white/80 backdrop-blur-xl py-5 border-b border-border/40">
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
