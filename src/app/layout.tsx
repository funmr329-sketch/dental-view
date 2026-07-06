import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';
import { ScrollProgress } from '@/components/animations/ScrollProgress';

export const metadata: Metadata = {
  title: 'DentalCare | Modern Dentistry with a Gentle Touch',
  description: 'Experience modern dentistry in a calm, comfortable environment. Advanced technology meets compassionate care for your entire family.',
  keywords: ['dentist', 'dental clinic', 'cosmetic dentistry', 'orthodontics', 'dental implants', 'teeth whitening'],
  authors: [{ name: 'DentalCare' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'DentalCare | Modern Dentistry with a Gentle Touch',
    description: 'Advanced technology meets compassionate care for your entire family.',
    siteName: 'DentalCare',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0f0a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[rgb(var(--background))] text-[rgb(var(--foreground))] antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}