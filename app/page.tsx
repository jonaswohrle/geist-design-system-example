import { IconArrowRight, IconCheck, IconCode, IconDesignSystem, IconAccessibility } from '@vercel/geistcn-assets/icons';
import { Badge } from '@vercel/geistcn/components/badge';
import { ButtonLink } from '@vercel/geistcn/components/button-link';
import { SiteHeader } from '@/components/site-header';
import { ComponentPlayground } from '@/components/component-playground';
import { ProjectGuide } from '@/components/project-guide';
import { SiteFooter } from '@/components/site-footer';

const features = [
  { icon: IconDesignSystem, title: 'The Real Design System', description: 'Geist components, colors, and typography. No imitations.' },
  { icon: IconCode, title: 'A Small, Readable Codebase', description: 'Next.js, React, and TypeScript. Ready for your own ideas.' },
  { icon: IconAccessibility, title: 'Thoughtful by Default', description: 'Responsive layouts, accessible controls, and both themes.' },
];

export default function Page() {
  return (
    <div className="min-h-svh bg-[var(--ds-background-100)] text-gray-1000">
      <SiteHeader />
      <main id="main-content">
        <section className="hero-grid border-b border-[var(--ds-gray-alpha-400)]" aria-labelledby="hero-heading">
          <div className="mx-auto max-w-6xl border-x border-[var(--ds-gray-alpha-400)] px-5 py-16 sm:px-8 sm:py-20">
            <div className="flex flex-col items-center gap-6">
              <Badge variant="gray" size="sm">THE FOUNDATION FOR YOUR NEXT IDEA</Badge>
              <h1 id="hero-heading" className="text-balance text-center text-heading-40 sm:text-heading-64">
                A clean start.<br /><span className="text-gray-900">A little Geist.</span>
              </h1>
              <p className="max-w-lg text-pretty text-center text-copy-16 text-gray-900">
                A carefully set-up starter, with the details already in place.<br className="hidden sm:block" /> Make something that feels like you.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <ButtonLink href="#project" size="large" suffix={<IconArrowRight aria-hidden="true" />}>Make It Yours</ButtonLink>
                <ButtonLink href="#components" size="large" variant="secondary">Explore Components</ButtonLink>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-label-12 text-gray-900">
                <span>Next.js 16</span><span aria-hidden="true">/</span><span>React 19</span><span aria-hidden="true">/</span><span>TypeScript</span><span aria-hidden="true">/</span><span>Tailwind 4</span>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="border-b border-[var(--ds-gray-alpha-400)] py-8">
            <div className="flex flex-col gap-6 md:flex-row md:gap-8">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex min-w-0 flex-1 items-start gap-3">
                  <Icon className="mt-0.5 size-4 shrink-0 text-gray-900" aria-hidden="true" />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-label-14">{title}</h2>
                    <p className="max-w-xs text-copy-13 text-gray-900">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section id="components" className="scroll-mt-24 py-14 sm:py-16" aria-labelledby="components-heading">
            <div className="pb-6">
              <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                <div className="flex flex-col gap-3">
                  <p className="font-mono text-label-12 text-gray-900">01 / THE BUILDING BLOCKS</p>
                  <h2 id="components-heading" className="text-heading-24">Less Setup. More Creating.</h2>
                  <p className="text-copy-14 text-gray-900">Real components. Live examples. A starting point you can change.</p>
                </div>
                <span className="flex shrink-0 items-center gap-2 text-label-12 text-gray-900"><IconCheck className="size-3.5" aria-hidden="true" /> Light &amp; dark included</span>
              </div>
            </div>
            <ComponentPlayground />
          </section>
          <ProjectGuide />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
