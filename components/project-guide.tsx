import { IconAcronymTs, IconCode, IconArrowUpRight, IconBookOpen, IconChevronRight } from '@vercel/geistcn-assets/icons';
import { Link } from '@vercel/geistcn/components/link';
import { Note, NoteContent } from '@vercel/geistcn/components/note';
import { Card } from '@/components/ui/card';

const files = [
  { path: 'app/page.tsx', description: 'Your homepage. Start here.', primary: true },
  { path: 'app/layout.tsx', description: 'The provider, fonts, and page metadata.' },
  { path: 'app/globals.css', description: 'Global styles and design tokens.' },
  { path: 'components/', description: 'Small, editable page components.' },
  { path: 'package.json', description: 'Dependencies and project commands.' },
];

export function ProjectGuide() {
  return (
    <section id="project" className="scroll-mt-24 border-t border-[var(--ds-gray-alpha-400)] py-14 sm:py-16" aria-labelledby="project-heading">
      <div className="pb-7">
        <div className="flex flex-col gap-3">
          <p className="font-mono text-label-12 text-gray-900">02 / YOUR STARTING POINT</p>
          <h2 id="project-heading" className="text-heading-24">Not a Black Box. Your Code.</h2>
          <p className="text-copy-14 text-gray-900">A familiar structure. No extra layers between you and your next change.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Card className="overflow-hidden">
          <div className="border-b border-[var(--ds-gray-alpha-400)] bg-[var(--ds-background-200)] px-5 py-4">
            <div className="flex items-center gap-2 font-mono text-label-12 text-gray-900"><IconCode className="size-4" aria-hidden="true" /> geist-starter /</div>
          </div>
          <ul className="divide-y divide-[var(--ds-gray-alpha-400)]">
            {files.map((file) => (
              <li key={file.path} className={file.primary ? 'bg-blue-100 px-5 py-4' : 'px-5 py-4'}>
                <div className="flex items-center gap-3">
                  <IconAcronymTs className={`size-4 shrink-0 ${file.primary ? 'text-blue-900' : 'text-gray-900'}`} aria-hidden="true" />
                  <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                    <code className={`font-mono text-label-13 ${file.primary ? 'text-blue-900' : ''}`}>{file.path}</code>
                    <span className="text-copy-13 text-gray-900">{file.description}</span>
                  </div>
                  {file.primary && <span className="text-label-12 text-blue-900">Start here</span>}
                </div>
              </li>
            ))}
          </ul>
        </Card>
        <div className="flex flex-col justify-between gap-8">
          <div id="github" className="scroll-mt-24">
            <div className="flex flex-col gap-5">
              <h3 className="text-heading-16">From Starter to Your Repository</h3>
              <ol className="flex flex-col gap-6">
                {[
                  ['Connect GitHub', 'In v0, open project Settings → Git to connect or create your repository. Reauthorize GitHub if prompted.'],
                  ['Make Your First Edit', 'Open app/page.tsx in GitHub or your editor and change the heading. Keep what you need; remove the rest.'],
                  ['Build from There', 'Compose components, add routes, and make it your own. Your design system is already wired up.'],
                ].map(([title, description], index) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-[var(--ds-gray-alpha-400)] font-mono text-label-12 text-gray-900">{index + 1}</span>
                    <div className="flex flex-col gap-2"><h4 className="text-label-14">{title}</h4><p className="text-copy-13 text-gray-900">{description}</p></div>
                  </li>
                ))}
              </ol>
              <Note variant="secondary" size="small"><NoteContent>The Geist packages are private. Local installs and external builds require npm access to <code className="font-mono">@vercel/geistcn</code> and its private dependencies. Never commit an npm token.</NoteContent></Note>
            </div>
          </div>
          <Link href="https://nextjs.org/docs/app" target="_blank" rel="noopener noreferrer" className="text-gray-1000">
            <span className="flex items-center justify-between gap-4"><span className="flex items-center gap-3 text-label-13"><IconBookOpen aria-hidden="true" /> New to the App Router?</span><IconArrowUpRight aria-hidden="true" /></span>
          </Link>
        </div>
      </div>
      <div className="pt-10">
        <Link href="https://vercel.com/geist/introduction" target="_blank" rel="noopener noreferrer" className="text-gray-900"><span className="flex items-center justify-center gap-2 text-copy-13">There’s more to explore in the Geist documentation <IconChevronRight className="size-3" aria-hidden="true" /></span></Link>
      </div>
    </section>
  );
}
