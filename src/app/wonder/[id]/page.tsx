'use client';

import { Navigation } from '@/components/Navigation';
import { PhotoGallery } from '@/components/PhotoGallery';
import { useFavorites } from '@/hooks/useFavorites';
import { wondersData } from '@/lib/wonderData';
import {
  ArrowLeft,
  Calendar,
  Heart,
  MapPin,
  Share2,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function WonderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const wonderId = params.id as string;
  const wonder = wondersData.find((w) => w.id === wonderId);
  const { isFavorite, toggleFavorite, isLoaded } = useFavorites();
  const [showShareToast, setShowShareToast] = useState(false);

  useEffect(() => {
    if (!wonder) {
      router.push('/');
    }
  }, [wonder, router]);

  if (!wonder) {
    return null;
  }

  const relatedWonders = wondersData.filter((w) =>
    wonder.relatedWonders.includes(w.id)
  );

  const handleShare = async () => {
    const url = window.location.href;
    const text = `Check out ${wonder.name} on WonderWorld!`;

    if (navigator.share) {
      try {
        await navigator.share({ title: wonder.name, text, url });
      } catch (error) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(url);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 3000);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-background pb-24">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-border bg-white/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back</span>
            </button>
            <div className="flex gap-2">
              <button
                onClick={handleShare}
                className="rounded-full bg-secondary p-2.5 transition-all hover:bg-accent hover:scale-110"
                aria-label="Share"
              >
                <Share2 className="h-5 w-5 text-secondary-foreground" />
              </button>
              <button
                onClick={() => toggleFavorite(wonder.id)}
                className="rounded-full bg-secondary p-2.5 transition-all hover:bg-accent hover:scale-110"
                aria-label={
                  isLoaded && isFavorite(wonder.id)
                    ? 'Remove from favorites'
                    : 'Add to favorites'
                }
              >
                <Heart
                  className={`h-5 w-5 transition-colors ${
                    isLoaded && isFavorite(wonder.id)
                      ? 'fill-accent text-accent'
                      : 'text-secondary-foreground'
                  }`}
                />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-4 py-8">
          {/* Photo Gallery */}
          <div className="mb-8">
            <PhotoGallery
              images={wonder.images}
              alt={wonder.name}
              photographerCredits={wonder.photographerCredits}
            />
          </div>

          {/* Title and Location */}
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                {wonder.category}
              </span>
            </div>
            <h1 className="mb-3 text-4xl font-bold">{wonder.name}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">
                {wonder.location}, {wonder.country}
              </span>
            </div>
          </div>

          {/* Description */}
          <section className="mb-8">
            <p className="text-lg leading-relaxed">{wonder.longDescription}</p>
          </section>

          {/* Best Visiting Months */}
          <section className="mb-8 rounded-xl bg-secondary p-6">
            <div className="mb-3 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Best Time to Visit</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {wonder.bestVisitingMonths.map((month) => (
                <span
                  key={month}
                  className="rounded-lg bg-white px-4 py-2 text-sm font-medium shadow-sm"
                >
                  {month}
                </span>
              ))}
            </div>
          </section>

          {/* Interesting Facts */}
          <section className="mb-8">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-semibold">Fascinating Facts</h2>
            </div>
            <div className="space-y-3">
              {wonder.interestingFacts.map((fact, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-lg bg-secondary p-4"
                >
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {index + 1}
                  </span>
                  <p className="text-base leading-relaxed">{fact}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Historical Timeline */}
          {wonder.historicalTimeline && wonder.historicalTimeline.length > 0 && (
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Historical Timeline</h2>
              <div className="space-y-4">
                {wonder.historicalTimeline.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      {index < wonder.historicalTimeline!.length - 1 && (
                        <div className="h-full w-0.5 bg-border" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="mb-1 inline-block rounded bg-accent/20 px-3 py-1 text-sm font-bold text-accent-foreground">
                        {event.year}
                      </div>
                      <p className="text-base leading-relaxed">{event.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related Wonders */}
          {relatedWonders.length > 0 && (
            <section>
              <h2 className="mb-4 text-2xl font-semibold">You Might Also Like</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedWonders.map((related) => (
                  <Link
                    key={related.id}
                    href={`/wonder/${related.id}`}
                    className="group overflow-hidden rounded-lg border border-border bg-white shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={related.images[0]}
                        alt={related.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="mb-1 font-semibold line-clamp-1">
                        {related.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {related.location}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>

      <Navigation />

      {/* Share Toast */}
      {showShareToast && (
        <div className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 animate-in fade-in slide-in-from-bottom-4">
          <div className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg">
            Link copied to clipboard!
          </div>
        </div>
      )}
    </>
  );
}
