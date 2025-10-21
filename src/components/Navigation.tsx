'use client';

import { Compass, Heart, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    {
      href: '/',
      label: 'Discover',
      icon: Home,
    },
    {
      href: '/explore',
      label: 'Explore',
      icon: Compass,
    },
    {
      href: '/collection',
      label: 'Collection',
      icon: Heart,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white shadow-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-around px-4 py-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center gap-1 rounded-lg px-6 py-2 transition-all',
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              )}
            >
              <Icon
                className={cn(
                  'h-6 w-6 transition-all',
                  isActive && 'scale-110'
                )}
              />
              <span className={cn(
                'text-xs font-medium',
                isActive && 'font-semibold'
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
