import { LogoVercel } from '@vercel/geistcn-assets/logos';
import { IconArrowUpRight } from '@vercel/geistcn-assets/icons';
import { Link } from '@vercel/geistcn/components/link';
import { ButtonLink } from '@vercel/geistcn/components/button-link';

export function SiteHeader() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className="sticky top-0 z-20 border-b border-[var(--ds-gray-alpha-400)] bg-[var(--ds-background-100)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex h-18 items-center justify-between gap-6">
            <Link href="/" className="shrink-0 text-gray-1000" aria-label="Geist Starter home">
              <span className="flex items-center gap-3">
                <LogoVercel height={21} aria-hidden="true" />
                <span className="text-heading-16">Geist <span className="font-normal text-gray-900">Starter</span></span>
              </span>
            </Link>
            <nav className="hidden items-center gap-7 sm:flex" aria-label="Main navigation">
              <Link href="#components" className="text-label-13 text-gray-900">Components</Link>
              <Link href="#project" className="text-label-13 text-gray-900">Your Project</Link>
              <Link href="https://vercel.com/geist/introduction" target="_blank" rel="noopener noreferrer" className="text-label-13 text-gray-900">Documentation</Link>
            </nav>
            <ButtonLink href="#github" size="small" variant="secondary" suffix={<IconArrowUpRight aria-hidden="true" />}>Set Up GitHub</ButtonLink>
          </div>
        </div>
      </header>
    </>
  );
}
