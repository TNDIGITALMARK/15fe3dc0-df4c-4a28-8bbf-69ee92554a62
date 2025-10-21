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
      <div className="group relative overflow-hidden rounded-lg bg-white border border-border shadow-hover transition-all">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={imageError ? '/placeholder-wonder.jpg' : wonder.images[0]}
            alt={wonder.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />

          {/* Category Badge */}
          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-white border border-border px-3 py-1.5 text-xs font-medium text-foreground">
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
            className="absolute right-4 top-4 rounded-full bg-white border border-border p-2 transition-all hover:bg-muted"
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart
              className={`h-4 w-4 transition-colors ${
                isFavorite ? 'fill-foreground text-foreground' : 'text-muted-foreground'
              }`}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="mb-2 text-base font-medium text-foreground line-clamp-1">
            {wonder.name}
          </h3>
          <p className="mb-3 text-xs text-muted-foreground font-light">
            {wonder.location}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground font-light line-clamp-2">
            {wonder.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
