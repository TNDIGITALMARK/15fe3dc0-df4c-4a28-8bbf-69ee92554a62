'use client';

import { Search, Sparkles } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border/40 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-6">
        {/* Brand Section */}
        <div className="mb-6 flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-gradient-to-br from-foreground to-foreground/80 p-2.5 shadow-md">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-foreground mb-0.5">
                WonderWorld
              </h1>
              <p className="text-sm text-muted-foreground font-light">
                Discover the world's most amazing places
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-foreground" />
          <input
            type="text"
            placeholder="Search wonders, locations, experiences..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-xl border border-border/60 bg-white py-3.5 pl-11 pr-4 text-sm font-light shadow-sm focus:border-foreground/60 focus:outline-none focus:ring-4 focus:ring-foreground/5 transition-all"
          />
        </div>
      </div>
    </header>
  );
}
