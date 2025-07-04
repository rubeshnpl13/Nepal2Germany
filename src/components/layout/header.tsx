"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';
import { ThemeToggle } from '@/components/theme-toggle';
import { Logo } from '@/components/logo';

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-foreground/60'
              )}
            >
              {link.label}
            </Link>

          ))}
          <Link
            href="/blog"
            className={cn(
              'transition-colors hover:text-primary',
              pathname === '/blog' ? 'text-primary' : 'text-foreground/60'
            )}
          >
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-2">
           <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="flex flex-col p-6">
                <div className="mb-8 flex items-center justify-between">
                  <Link href="/" onClick={() => setIsSheetOpen(false)}>
                    <Logo />
                  </Link>
                   <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(false)}>
                     <X className="h-6 w-6" />
                   </Button>
                </div>
                <nav className="flex flex-col gap-y-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsSheetOpen(false)}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname === link.href ? 'text-primary' : 'text-foreground'
                      )}
                    >
 {link.label}
 </Link>
                  ))}
 <Link
 href="/blog"
                      onClick={() => setIsSheetOpen(false)}
 className={cn(
 'text-lg font-medium transition-colors hover:text-primary',
 pathname === '/blog' ? 'text-primary' : 'text-foreground'
 )}
                  >
 Blog
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
