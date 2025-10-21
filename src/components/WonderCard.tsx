'use client';

import { Wonder } from '@/lib/types';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface WonderCardProps {
  wonder: Wonder;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function WonderCard({ wonder, isFavorite, onToggleFavorite }: WonderCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={`/wonder/${wonder.id}`} className="block">
      <div className="group relative overflow-hidden rounded-xl bg-white shadow-card shadow-hover">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={imageError ? '/placeholder-wonder.jpg' : wonder.images[0]}
            alt={wonder.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            onError={() => setImageError(true)}
          />

          {/* Category Badge */}
          <div className="absolute left-3 top-3">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow-md">
              {wonder.category}
            </span>
          </div>

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleFavorite(wonder.id);
            }}
            className="absolute right-3 top-3 rounded-full bg-white p-2 shadow-md transition-all hover:scale-110 hover:bg-accent"
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart
              className={`h-5 w-5 transition-colors ${
                isFavorite ? 'fill-accent text-accent' : 'text-muted-foreground'
              }`}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="mb-1 text-xl font-bold text-foreground line-clamp-1">
            {wonder.name}
          </h3>
          <p className="mb-2 text-sm text-muted-foreground">
            📍 {wonder.location}
          </p>
          <p className="text-sm leading-relaxed text-foreground line-clamp-2">
            {wonder.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
