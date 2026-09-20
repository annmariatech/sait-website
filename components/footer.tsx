'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, ArrowUpRight, MapPin, Globe, Compass, ExternalLink } from 'lucide-react';
import { nav } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t-2 border-[#071A33] bg-[#FAF8F3] mt-24 text-[#071A33]">
      <div className="container-grid py-16 sm:py-20">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Colophon & Identity */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#071A33] p-1.5 flex items-center justify-center">
                <Image
                  src="/assets/sait-logo-crest.svg"
                  alt="SAIT Crest"
                  width={28}
                  height={28}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="display text-3xl font-bold tracking-tight text-[#071A33]">
                SAIT<span className="text-[#315F9F]">.</span>
              </span>
            </div>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#071A33]/80 max-w-md">
              Students’ Association of Information Technology, School of Engineering, Cochin University of Science and Technology. An independent student publication and department platform.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 mono text-[10px] uppercase text-[#071A33]/60">
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-[#315F9F]" /> Kochi · Kerala · India
              </span>
              <span>Est. 2014</span>
              <span>Issue #12</span>
            </div>
          </div>

          {/* Directory Navigation */}
          <div className="md:col-span-2">
            <p className="eyebrow mb-4">Directory</p>
            <ul className="space-y-2.5">
              {nav.slice(0, 6).map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs uppercase mono tracking-wider text-[#071A33]/80 hover:text-[#315F9F] transition-colors link-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/notifications"
                  className="text-xs uppercase mono tracking-wider text-[#315F9F] font-semibold hover:text-[#071A33] transition-colors link-underline"
                >
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Institutional Channels */}
          <div className="md:col-span-2">
            <p className="eyebrow mb-4">Connect</p>
            <div className="space-y-3 text-xs mono">
              <a
                href="mailto:sait@soe.cusat.ac.in"
                className="flex items-center gap-2 text-[#071A33]/80 hover:text-[#315F9F] transition-colors group"
              >
                <Mail size={13} className="text-[#315F9F]" />
                <span>Email Desk</span>
                <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://cusat.ac.in"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#071A33]/80 hover:text-[#315F9F] transition-colors group"
              >
                <Globe size={13} className="text-[#315F9F]" />
                <span>CUSAT Portal</span>
                <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://soe.cusat.ac.in"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#071A33]/80 hover:text-[#315F9F] transition-colors group"
              >
                <Compass size={13} className="text-[#315F9F]" />
                <span>SOE Portal</span>
                <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

        </div>

        {/* Address and Map Embed */}
        <div className="mt-14 pt-8 border-t border-[#D4CEBF] grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <p className="eyebrow">Department Address</p>
            <p className="mt-2 text-sm leading-relaxed text-[#071A33]/80">
              Department of Information Technology<br />
              School of Engineering, CUSAT<br />
              University Road, South Kalamassery<br />
              Kochi, Kerala 682022, India
            </p>
          </div>

          <div className="md:col-span-7">
            <p className="eyebrow mb-2">Campus Location · OpenStreetMap</p>
            <div className="h-32 border border-[#D4CEBF] overflow-hidden bg-[#EDE9DF]">
              <iframe
                title="School of Engineering CUSAT Map"
                className="w-full h-full grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all"
                src="https://www.openstreetmap.org/export/embed.html?bbox=76.324%2C10.043%2C76.332%2C10.049&amp;layer=mapnik"
              />
            </div>
          </div>
        </div>

        {/* Colophon Sub-footer */}
        <div className="mt-12 pt-6 border-t border-[#D4CEBF] flex flex-wrap items-center justify-between gap-4 mono text-[10px] uppercase text-[#071A33]/50">
          <span>© 2026 SAIT · Students’ Association of IT · School of Engineering, CUSAT</span>
          <span>Designed as an independent department journal</span>
        </div>

      </div>
    </footer>
  );
}
