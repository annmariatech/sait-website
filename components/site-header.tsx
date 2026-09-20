'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Moon, Sun } from 'lucide-react';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const nextMode = !darkMode;
    document.documentElement.classList.toggle('dark', nextMode);
    localStorage.setItem('sait-theme', nextMode ? 'dark' : 'light');
    setDarkMode(nextMode);
  };

  // Primary navigation links as requested
  const mainNav = [
    { label: 'ABOUT', href: '/about' },
    { label: 'PEOPLE', href: '/people' },
    { label: 'EVENTS', href: '/events' },
    { label: 'PLACEMENTS', href: '/placements' },
    { label: 'ALUMNI', href: '/alumni' },
    { label: 'HALL OF FAME', href: '/hall-of-fame' },
    { label: 'UPDATES', href: '/notifications' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#D4CEBF] bg-[#F5F2EA]/95 backdrop-blur-md transition-colors">
      <div className="container-grid">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo Brand with Real SAIT Crest + Editorial Wordmark */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="site-logo-disc w-8 h-8 rounded-full bg-[#071A33] p-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/sait-logo-inner.svg"
                alt="SAIT logo mark"
                width={26}
                height={26}
                className="w-5 h-5 object-contain"
                priority
              />
            </div>
            <span className="display text-2xl font-bold tracking-tight text-[#071A33] transition-colors group-hover:text-[#315F9F]">
              SAIT<span className="text-[#315F9F]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Links with Animated Underlines & Active Indicator */}
          <nav className="hidden xl:flex items-center gap-7">
            {mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mono text-[11px] uppercase tracking-[0.14em] font-medium transition-all duration-200 link-underline ${
                    isActive ? 'text-[#315F9F] font-semibold active' : 'text-[#071A33] hover:text-[#315F9F]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={toggleTheme}
              className="p-2 text-[#071A33] hover:text-[#315F9F] transition-colors"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="xl:hidden p-2 text-[#071A33] hover:text-[#315F9F] transition-colors"
            >
              <Menu size={22} />
            </button>
          </div>

        </div>
      </div>

      {/* Editorial Mobile Menu Drawer */}
      {open && (
        <div className="fixed inset-0 bg-[#F5F2EA] z-[60] xl:hidden flex flex-col justify-between overflow-y-auto">
          <div className="container-grid py-4">
            <div className="flex h-16 items-center justify-between border-b border-[#D4CEBF]">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
                <div className="site-logo-disc w-8 h-8 rounded-full bg-[#071A33] p-1 flex items-center justify-center">
                  <Image
                    src="/assets/sait-logo-inner.svg"
                    alt="SAIT logo mark"
                    width={26}
                    height={26}
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <span className="display text-2xl font-bold text-[#071A33]">
                  SAIT<span className="text-[#315F9F]">.</span>
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 text-[#071A33] hover:text-[#315F9F]"
              >
                <X size={26} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="py-8 divide-y divide-[#D4CEBF]">
              {mainNav.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-5 group ${
                      isActive ? 'text-[#315F9F]' : 'text-[#071A33]'
                    }`}
                  >
                    <span className="mono text-xs text-[#071A33]/40">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="display text-3xl sm:text-4xl font-medium tracking-tight group-hover:translate-x-1 transition-transform">
                      {item.label}
                    </span>
                    <ArrowUpRight size={24} className="text-[#315F9F] opacity-70 group-hover:opacity-100" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="container-grid py-6 border-t border-[#D4CEBF] mono text-[10px] uppercase text-[#071A33]/60 flex justify-between">
            <span>SOE · CUSAT · 2026</span>
            <span>Students’ Association of IT</span>
          </div>
        </div>
      )}
    </header>
  );
}
