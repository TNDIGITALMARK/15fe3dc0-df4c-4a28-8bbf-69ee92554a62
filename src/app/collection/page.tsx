'use client';

import { Navigation } from '@/components/Navigation';
import { WonderCard } from '@/components/WonderCard';
import { useFavorites } from '@/hooks/useFavorites';
import { wondersData } from '@/lib/wonderData';
import { Heart, Sparkles } from 'lucide-react';

export default function CollectionPage() {
  const { favorites, toggleFavorite, isFavorite, isLoaded } = useFavorites();

  const favoriteWonders = wondersData.filter((wonder) =>
    favorites.includes(wonder.id)
  );

  const categoryStats = favoriteWonders.reduce((acc, wonder) => {
    acc[wonder.category] = (acc[wonder.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <>
      <div className="min-h-screen bg-white pb-24">
        {/* Header */}
        <header className="border-b border-border bg-white">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold mb-1">My Collection</h1>
              <p className="text-sm text-muted-foreground font-light">
                Your favorite wonders from around the world
              </p>
            </div>

            {/* Stats */}
            {favoriteWonders.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg border border-border p-5 bg-white">
                  <div className="text-2xl font-medium mb-1">{favoriteWonders.length}</div>
                  <div className="text-xs text-muted-foreground font-light">
                    Total Wonder{favoriteWonders.length !== 1 ? 's' : ''}
                  </div>
                </div>
                <div className="rounded-lg border border-border p-5 bg-white">
                  <div className="text-2xl font-medium mb-1">
                    {Object.keys(categoryStats).length}
                  </div>
                  <div className="text-xs text-muted-foreground font-light">
                    Categor{Object.keys(categoryStats).length !== 1 ? 'ies' : 'y'}
                  </div>
                </div>
                <div className="rounded-lg border border-border p-5 bg-white">
                  <div className="text-2xl font-medium mb-1">
                    {new Set(favoriteWonders.map((w) => w.country)).size}
                  </div>
                  <div className="text-xs text-muted-foreground font-light">
                    Countr{new Set(favoriteWonders.map((w) => w.country)).size !== 1 ? 'ies' : 'y'}
                  </div>
                </div>
                <div className="rounded-lg border border-border p-5 bg-white">
                  <div className="text-2xl font-medium mb-1">
                    {favoriteWonders.reduce(
                      (acc, w) => acc + w.images.length,
                      0
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground font-light">Photos</div>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-6 py-10">
          {favoriteWonders.length > 0 ? (
            <>
              {/* Category Breakdown */}
              {Object.keys(categoryStats).length > 0 && (
                <section className="mb-10">
                  <h2 className="mb-5 text-lg font-medium">By Category</h2>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(categoryStats)
                      .sort(([, a], [, b]) => b - a)
                      .map(([category, count]) => (
                        <div
                          key={category}
                          className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2"
                        >
                          <span className="text-sm font-light">{category}</span>
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-xs font-normal text-white">
                            {count}
                          </span>
                        </div>
                      ))}
                  </div>
                </section>
              )}

              {/* Wonders Grid */}
              <section>
                <h2 className="mb-6 text-lg font-medium">All Favorites</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {favoriteWonders.map((wonder) => (
                    <WonderCard
                      key={wonder.id}
                      wonder={wonder}
                      isFavorite={isLoaded && isFavorite(wonder.id)}
                      onToggleFavorite={toggleFavorite}
                    />
                  ))}
                </div>
              </section>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="mb-8 rounded-full bg-muted p-10">
                <Heart className="h-12 w-12 text-muted-foreground" />
              </div>
              <h2 className="mb-3 text-xl font-medium">No Favorites Yet</h2>
              <p className="mb-8 max-w-md text-sm text-muted-foreground font-light">
                Start exploring and tap the heart icon on wonders that inspire you.
                Build your personal collection of amazing places!
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-normal text-white transition-opacity hover:opacity-80"
              >
                <Sparkles className="h-4 w-4" />
                Discover Wonders
              </a>
            </div>
          )}
        </main>
      </div>

      <Navigation />
    </>
  );
}
