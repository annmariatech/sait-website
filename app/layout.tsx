import type {Metadata} from 'next';
import {Inter, Space_Grotesk, IBM_Plex_Mono, Newsreader} from 'next/font/google';
import './globals.css';
import {SiteHeader} from '@/components/site-header';
import {Footer} from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const editorial = Newsreader({
  subsets: ['latin'],
  variable: '--font-editorial',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SAIT — Students’ Association of Information Technology | SOE, CUSAT',
  description: 'The official platform for the Information Technology community at the School of Engineering, Cochin University of Science and Technology.',
  icons: {
    icon: '/assets/sait-logo-crest.svg',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.toggle('dark', localStorage.getItem('sait-theme') === 'dark')`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${space.variable} ${mono.variable} ${editorial.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <SiteHeader />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
