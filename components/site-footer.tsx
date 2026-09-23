'use client';

import { ThemeSwitcher } from '@vercel/geistcn/components/theme-switcher';
import { LogoVercel } from '@vercel/geistcn-assets/logos';
import { Link } from '@vercel/geistcn/components/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--ds-gray-alpha-400)]">
      <div className="mx-auto max-w-6xl px-5 py-7 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 text-gray-900"><LogoVercel height={16} aria-hidden="true" /><p className="text-copy-13">Built with Geist. Made to be yours.</p></div>
          <div className="flex items-center gap-6"><Link href="https://vercel.com/geist/introduction" target="_blank" rel="noopener noreferrer" className="text-label-12 text-gray-900">Geist Documentation</Link><ThemeSwitcher /></div>
        </div>
      </div>
    </footer>
  );
}
