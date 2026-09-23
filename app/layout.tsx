import './globals.css';
import type { JSX, ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { GeistProvider, geistFontClasses } from '@vercel/geistcn/core';

export const metadata: Metadata = {
  title: 'Geist Starter — Make It Yours',
  description: 'An editable Next.js starter with the Geist design system, interactive component examples, and light and dark themes.',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <html className={geistFontClasses} lang="en" suppressHydrationWarning>
      <body>
        <GeistProvider>{children}</GeistProvider>
      </body>
    </html>
  );
}
