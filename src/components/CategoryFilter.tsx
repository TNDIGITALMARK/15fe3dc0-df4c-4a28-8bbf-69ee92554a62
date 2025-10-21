'use client';

import { WonderCategory } from '@/lib/types';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: WonderCategory[];
  selectedCategory: WonderCategory | 'All';
  onSelectCategory: (category: WonderCategory | 'All') => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  const allCategories: (WonderCategory | 'All')[] = ['All', ...categories];

  return (
    <div className="overflow-x-auto pb-2 -mx-4 px-4">
      <div className="flex gap-2 min-w-max">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={cn(
              'whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all',
              selectedCategory === category
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
