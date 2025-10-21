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
      <div className="min-h-screen bg-background pb-24">
        {/* Header */}
        <header className="border-b border-border bg-white">
          <div className="mx-auto max-w-7xl px-4 py-8">
            <div className="mb-6 flex items-center gap-3">
              <Heart className="h-8 w-8 text-accent fill-accent" />
              <div>
                <h1 className="text-3xl font-bold">My Collection</h1>
                <p className="text-sm text-muted-foreground">
                  Your favorite wonders from around the world
                </p>
              </div>
            </div>

            {/* Stats */}
            {favoriteWonders.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg bg-gradient-to-br from-primary to-primary/80 p-4 text-white">
                  <div className="text-3xl font-bold">{favoriteWonders.length}</div>
                  <div className="text-sm opacity-90">
                    Total Wonder{favoriteWonders.length !== 1 ? 's' : ''}
                  </div>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-accent to-accent/80 p-4 text-white">
                  <div className="text-3xl font-bold">
                    {Object.keys(categoryStats).length}
                  </div>
                  <div className="text-sm opacity-90">
                    Categor{Object.keys(categoryStats).length !== 1 ? 'ies' : 'y'}
                  </div>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-green-500 to-green-600 p-4 text-white">
                  <div className="text-3xl font-bold">
                    {new Set(favoriteWonders.map((w) => w.country)).size}
                  </div>
                  <div className="text-sm opacity-90">
                    Countr{new Set(favoriteWonders.map((w) => w.country)).size !== 1 ? 'ies' : 'y'}
                  </div>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 p-4 text-white">
                  <div className="text-3xl font-bold">
                    {favoriteWonders.reduce(
                      (acc, w) => acc + w.images.length,
                      0
                    )}
                  </div>
                  <div className="text-sm opacity-90">Photos</div>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-4 py-8">
          {favoriteWonders.length > 0 ? (
            <>
              {/* Category Breakdown */}
              {Object.keys(categoryStats).length > 0 && (
                <section className="mb-8">
                  <h2 className="mb-4 text-xl font-semibold">By Category</h2>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(categoryStats)
                      .sort(([, a], [, b]) => b - a)
                      .map(([category, count]) => (
                        <div
                          key={category}
                          className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2"
                        >
                          <span className="text-sm font-medium">{category}</span>
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                            {count}
                          </span>
                        </div>
                      ))}
                  </div>
                </section>
              )}

              {/* Wonders Grid */}
              <section>
                <h2 className="mb-4 text-xl font-semibold">All Favorites</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-6 rounded-full bg-muted p-8">
                <Heart className="h-16 w-16 text-muted-foreground" />
              </div>
              <h2 className="mb-3 text-2xl font-bold">No Favorites Yet</h2>
              <p className="mb-6 max-w-md text-muted-foreground">
                Start exploring and tap the heart icon on wonders that inspire you.
                Build your personal collection of amazing places!
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground shadow-md transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground"
              >
                <Sparkles className="h-5 w-5" />
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
