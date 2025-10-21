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
      <div className="min-h-screen bg-background pb-24">
        {/* Header */}
        <header className="border-b border-border bg-white">
          <div className="mx-auto max-w-7xl px-4 py-8">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Compass className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-3xl font-bold">Explore</h1>
                  <p className="text-sm text-muted-foreground">
                    Browse wonders by category
                  </p>
                </div>
              </div>
              <button
                onClick={getRandomWonder}
                className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 font-medium text-accent-foreground shadow-md transition-all hover:scale-105"
              >
                <Shuffle className="h-5 w-5" />
                <span className="hidden sm:inline">Random</span>
              </button>
            </div>

            {/* Category Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                    className={`group relative overflow-hidden rounded-xl border-2 transition-all ${
                      isSelected
                        ? 'border-primary shadow-lg scale-105'
                        : 'border-transparent hover:border-primary/50 hover:shadow-md'
                    }`}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={categoryWonders[0].images[0]}
                        alt={category}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="mb-1 text-lg font-bold">{category}</h3>
                      <p className="text-sm opacity-90">
                        {categoryWonders.length}{' '}
                        {categoryWonders.length === 1 ? 'wonder' : 'wonders'}
                      </p>
                    </div>
                    {isSelected && (
                      <div className="absolute right-3 top-3 rounded-full bg-primary p-2">
                        <Compass className="h-5 w-5 text-primary-foreground" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-4 py-8">
          {selectedCategory && (
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">{selectedCategory}</h2>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-sm text-primary hover:underline"
              >
                View all categories
              </button>
            </div>
          )}

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
        </main>
      </div>

      <Navigation />
    </>
  );
}
