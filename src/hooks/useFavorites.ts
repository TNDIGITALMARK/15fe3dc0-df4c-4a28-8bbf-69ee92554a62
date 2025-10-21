'use client';

import { useEffect, useState } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load favorites from localStorage
    const stored = localStorage.getItem('wonderworld_favorites');
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (error) {
        console.error('Error loading favorites:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Save favorites to localStorage whenever they change
    if (isLoaded) {
      localStorage.setItem('wonderworld_favorites', JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);

  const toggleFavorite = (wonderId: string) => {
    setFavorites((prev) =>
      prev.includes(wonderId)
        ? prev.filter((id) => id !== wonderId)
        : [...prev, wonderId]
    );
  };

  const isFavorite = (wonderId: string) => favorites.includes(wonderId);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    isLoaded,
  };
}
