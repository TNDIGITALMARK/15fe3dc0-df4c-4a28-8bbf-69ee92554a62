'use client';

import { Navigation } from '@/components/Navigation';
import { WonderCard } from '@/components/WonderCard';
import { useFavorites } from '@/hooks/useFavorites';
import { WonderCategory } from '@/lib/types';
import { wondersData } from '@/lib/wonderData';
import { Compass, Shuffle } from 'lucide-react';
import { useState } from 'react';

export default function ExplorePage() {
  const { isFavorite, toggleFavorite, isLoaded } = useFavorites();
  const [selectedCategory, setSelectedCategory] = useState<WonderCategory | null>(
    null
  );

  const categories = Array.from(
    new Set(wondersData.map((w) => w.category))
  ) as WonderCategory[];

  const filteredWonders = selectedCategory
    ? wondersData.filter((w) => w.category === selectedCategory)
    : wondersData;

  const getRandomWonder = () => {
    const randomIndex = Math.floor(Math.random() * wondersData.length);
    const wonder = wondersData[randomIndex];
    window.location.href = `/wonder/${wonder.id}`;
  };

  return (
    <>
      <div className="min-h-screen bg-white pb-24">
        {/* Header */}
        <header className="border-b border-border bg-white">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold mb-1">Explore</h1>
                <p className="text-sm text-muted-foreground font-light">
                  Browse wonders by category
                </p>
              </div>
              <button
                onClick={getRandomWonder}
                className="flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-light transition-all hover:bg-muted"
              >
                <Shuffle className="h-4 w-4" />
                <span className="hidden sm:inline">Random</span>
              </button>
            </div>

            {/* Category Cards */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => {
                const categoryWonders = wondersData.filter(
                  (w) => w.category === category
                );
                const isSelected = selectedCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() =>
                      setSelectedCategory(isSelected ? null : category)
                    }
                    className={`group relative overflow-hidden rounded-lg border transition-all ${
                      isSelected
                        ? 'border-foreground shadow-md'
                        : 'border-border hover:border-foreground/30'
                    }`}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={categoryWonders[0].images[0]}
                        alt={category}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <h3 className="mb-1 text-base font-medium">{category}</h3>
                      <p className="text-xs font-light opacity-90">
                        {categoryWonders.length}{' '}
                        {categoryWonders.length === 1 ? 'wonder' : 'wonders'}
                      </p>
                    </div>
                    {isSelected && (
                      <div className="absolute right-3 top-3 rounded-full bg-white border border-border p-2">
                        <Compass className="h-4 w-4 text-foreground" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-6 py-10">
          {selectedCategory && (
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-lg font-medium">{selectedCategory}</h2>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-sm text-foreground hover:opacity-70 transition-opacity font-light"
              >
                View all categories
              </button>
            </div>
          )}

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
        </main>
      </div>

      <Navigation />
    </>
  );
}
