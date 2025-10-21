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
    <div className="overflow-x-auto pb-2 -mx-6 px-6">
      <div className="flex gap-3 min-w-max">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={cn(
              'whitespace-nowrap rounded-full px-5 py-2 text-sm font-light transition-all border',
              selectedCategory === category
                ? 'bg-foreground text-white border-foreground'
                : 'bg-white text-foreground border-border hover:bg-muted'
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
