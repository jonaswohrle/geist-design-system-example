'use client';

import { useState } from 'react';
import { Badge } from '@vercel/geistcn/components/badge';
import { Button } from '@vercel/geistcn/components/button';
import { Input } from '@vercel/geistcn/components/input';
import { Tabs } from '@vercel/geistcn/components/tabs';
import { IconCheck, IconCopy, IconCode } from '@vercel/geistcn-assets/icons';
import { Card } from '@/components/ui/card';

type Example = 'buttons' | 'inputs' | 'badges' | 'typography' | 'colors';

const examples: Record<Example, { title: string; description: string; code: string }> = {
  buttons: {
    title: 'The little things, done right.',
    description: 'Clear actions. Considered states. Just add your logic.',
    code: `import { Button } from\n  '@vercel/geistcn/components/button';\n\nexport function Actions() {\n  return (\n    <div className="flex flex-wrap gap-3">\n      <Button typeName="button">\n        Primary\n      </Button>\n      <Button variant="secondary">\n        Secondary\n      </Button>\n      <Button variant="tertiary">\n        Tertiary\n      </Button>\n    </div>\n  );\n}`,
  },
  inputs: {
    title: 'Every detail has a place.',
    description: 'Accessible labels and clear focus states, out of the box.',
    code: `'use client';\n\nimport { useState } from 'react';\nimport { Input } from\n  '@vercel/geistcn/components/input';\n\nexport function ProjectName() {\n  const [name, setName] = useState('');\n\n  return (\n    <Input\n      id="project-name"\n      label="Project Name"\n      placeholder="my-next-idea"\n      value={name}\n      onChange={(e) => setName(e.target.value)}\n    />\n  );\n}`,
  },
  badges: {
    title: 'A little context goes a long way.',
    description: 'Compact labels for the state of things.',
    code: `import { Badge } from\n  '@vercel/geistcn/components/badge';\n\nexport function Statuses() {\n  return (\n    <div className="flex flex-wrap gap-3">\n      <Badge variant="gray">Draft</Badge>\n      <Badge variant="blue">Building</Badge>\n      <Badge variant="green">Ready</Badge>\n      <Badge variant="amber">Queued</Badge>\n      <Badge variant="red">Error</Badge>\n      <Badge variant="purple">Preview</Badge>\n    </div>\n  );\n}`,
  },
  typography: {
    title: 'Let your words do the work.',
    description: 'Geist Sans for clarity. Geist Mono for the details.',
    code: `export function Typography() {\n  return (\n    <div className="flex flex-col gap-4">\n      <h2 className="text-heading-32">\n        A clear point of view.\n      </h2>\n      <p className="text-copy-14 text-gray-900">\n        Designed to be read.\n      </p>\n      <code className="font-mono text-label-12">\n        Make it yours.\n      </code>\n    </div>\n  );\n}`,
  },
  colors: {
    title: 'One palette. Both sides.',
    description: 'Semantic color tokens adapt to light and dark themes.',
    code: `export function Colors() {\n  return (\n    <div className="flex flex-col gap-4">\n      <p className="text-gray-1000">\n        Primary text\n      </p>\n      <p className="text-gray-900">\n        Secondary text\n      </p>\n      <p className="text-blue-900">\n        Accent text\n      </p>\n    </div>\n  );\n}`,
  },
};

const tabs = (Object.keys(examples) as Example[]).map((value) => ({ value, title: value[0].toUpperCase() + value.slice(1) }));
const swatches = [
  { name: 'Gray', className: 'bg-gray-700' },
  { name: 'Blue', className: 'bg-blue-700' },
  { name: 'Purple', className: 'bg-purple-700' },
  { name: 'Green', className: 'bg-green-700' },
  { name: 'Amber', className: 'bg-amber-700' },
  { name: 'Red', className: 'bg-red-700' },
];

function Code({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto font-mono text-copy-13 leading-6" tabIndex={0} aria-label="Example source code">
      <code>
        {code.split('\n').map((line, index) => (
          <span key={index} className="flex min-h-6">
            <span className="w-8 shrink-0 select-none text-right text-gray-700" aria-hidden="true">{index + 1}</span>
            <span className="pl-5">{line.split(/('[^']*'|"[^"]*"|\b(?:import|from|export|function|return|const)\b)/g).map((token, tokenIndex) => (
              <span key={tokenIndex} className={/^["']/.test(token) ? 'text-green-900' : /^(import|from|export|function|return|const)$/.test(token) ? 'text-purple-900' : 'text-gray-1000'}>{token}</span>
            ))}</span>
          </span>
        ))}
      </code>
    </pre>
  );
}

export function ComponentPlayground() {
  const [selected, setSelected] = useState<Example>('buttons');
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');
  const example = examples[selected];

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(example.code);
      setCopyState('copied');
    } catch {
      setCopyState('error');
    }
  }

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-[var(--ds-gray-alpha-400)] px-5 pt-2 sm:px-6">
        <Tabs<Example> aria-label="Component examples" tabs={tabs} selected={selected} setSelected={(value) => { setSelected(value); setCopyState('idle'); setFeedback(''); }} border={false} className="!mb-0" />
      </div>
      <div className="grid min-w-0 grid-cols-1 lg:grid-cols-2">
        <div className="flex min-w-0 flex-col" role="region" aria-label={`${selected} preview`}>
          <div className="px-6 pt-6"><span className="font-mono text-label-12 text-gray-900">LIVE PREVIEW</span></div>
          <div className="preview-grid flex min-h-72 flex-1 items-center justify-center px-6 py-8 sm:min-h-80">
            <div className="w-full max-w-sm">
              {selected === 'buttons' && (
                <div className="flex flex-col items-center gap-5">
                  <div className="flex flex-wrap justify-center gap-3">
                    <Button typeName="button" onClick={() => setFeedback('Primary button clicked')}>Primary</Button>
                    <Button typeName="button" variant="secondary" onClick={() => setFeedback('Secondary button clicked')}>Secondary</Button>
                    <Button typeName="button" variant="tertiary" onClick={() => setFeedback('Tertiary button clicked')}>Tertiary</Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button typeName="button" size="small" disabled>Disabled</Button>
                    <Button typeName="button" size="small" loading>Loading</Button>
                  </div>
                  <p className="min-h-5 text-copy-13 text-gray-900" role="status">{feedback || 'Give them a click. They’re the real thing.'}</p>
                </div>
              )}
              {selected === 'inputs' && (
                <div className="flex flex-col gap-4">
                  <Input id="project-name" label="Project Name" placeholder="my-next-idea" value={name} maxLength={64} onChange={(event) => setName(event.target.value)} />
                  <p className="text-copy-13 text-gray-900" role="status">{name ? `Your next idea: ${name}` : 'Type a name to try this controlled input.'}</p>
                </div>
              )}
              {selected === 'badges' && (
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge variant="gray">Draft</Badge><Badge variant="blue">Building</Badge><Badge variant="green">Ready</Badge><Badge variant="amber">Queued</Badge><Badge variant="red">Error</Badge><Badge variant="purple">Preview</Badge>
                </div>
              )}
              {selected === 'typography' && (
                <div className="flex flex-col gap-4">
                  <span className="text-heading-64 tracking-tight">Aa<span className="font-mono text-gray-700">Bb</span></span>
                  <h3 className="text-heading-24">A clear point of view.</h3>
                  <p className="text-copy-14 text-gray-900">Designed to be read.</p>
                  <code className="font-mono text-label-12 text-gray-900">Make it yours.</code>
                </div>
              )}
              {selected === 'colors' && (
                <div className="grid grid-cols-3 gap-4">
                  {swatches.map((swatch) => <div key={swatch.name} className="flex flex-col items-center gap-3"><div className={`h-12 w-full rounded-md ${swatch.className}`} /><span className="font-mono text-label-12 text-gray-900">{swatch.name}</span></div>)}
                </div>
              )}
            </div>
          </div>
          <div className="border-t border-[var(--ds-gray-alpha-400)] px-6 py-5">
            <div className="flex flex-col gap-2"><h3 className="text-label-14">{example.title}</h3><p className="text-copy-13 text-gray-900">{example.description}</p></div>
          </div>
        </div>
        <div className="min-w-0 border-t border-[var(--ds-gray-alpha-400)] bg-[var(--ds-background-200)] lg:border-t-0 lg:border-l">
          <div className="px-5 py-4">
            <div className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2 font-mono text-label-12 text-gray-900"><IconCode className="size-3.5" aria-hidden="true" /> example.tsx</span>
              <Button typeName="button" size="small" variant="tertiary" prefix={copyState === 'copied' ? <IconCheck aria-hidden="true" /> : <IconCopy aria-hidden="true" />} onClick={copyCode}>{copyState === 'copied' ? 'Copied' : 'Copy Code'}</Button>
            </div>
            {copyState === 'error' && <p className="pt-3 text-copy-13 text-red-900" role="alert">Clipboard unavailable. Select and copy the code below.</p>}
            <span className="sr-only" role="status">{copyState === 'copied' ? 'Code copied to clipboard' : ''}</span>
          </div>
          <div className="pr-6 pb-6"><Code code={example.code} /></div>
        </div>
      </div>
    </Card>
  );
}
