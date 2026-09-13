import type {Metadata} from 'next';
import {Inter, Space_Grotesk, IBM_Plex_Mono} from 'next/font/google';
import './globals.css';
import {SiteHeader} from '@/components/site-header';
import {Footer} from '@/components/footer';
const inter=Inter({subsets:['latin'],variable:'--font-inter'}); const space=Space_Grotesk({subsets:['latin'],variable:'--font-space'}); const mono=IBM_Plex_Mono({subsets:['latin'],variable:'--font-mono',weight:['400','500']});
export const metadata:Metadata={title:'SAIT — Students’ Association of Information Technology | SOE, CUSAT',description:'The Students’ Association of Information Technology, School of Engineering, CUSAT.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${inter.variable} ${space.variable} ${mono.variable}`}><SiteHeader/>{children}<Footer/></body></html>}
