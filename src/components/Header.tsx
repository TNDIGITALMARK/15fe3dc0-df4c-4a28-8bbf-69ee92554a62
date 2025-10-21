'use client';

import { Search, Sparkles } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border/30 bg-white/95 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Brand Section */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 p-3 shadow-lg ring-1 ring-foreground/10">
              <Sparkles className="h-6 w-6 text-white" strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-1 leading-none">
                WonderWorld
              </h1>
              <p className="text-sm text-muted-foreground font-normal tracking-wide">
                Discover the world's most amazing places
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground/70 transition-colors group-focus-within:text-foreground" strokeWidth={2} />
          <input
            type="text"
            placeholder="Search wonders, locations, experiences..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-xl border border-border/50 bg-white/60 py-4 pl-12 pr-4 text-sm font-normal placeholder:text-muted-foreground/60 shadow-sm hover:border-border hover:bg-white focus:border-foreground/40 focus:bg-white focus:outline-none focus:ring-4 focus:ring-foreground/5 transition-all duration-200"
          />
        </div>
      </div>
    </header>
  );
}
