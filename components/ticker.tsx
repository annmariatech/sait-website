import React from 'react';
import Link from 'next/link';

type TickerItem = {
  tag: string;
  text: string;
  href: string;
};

const items: TickerItem[] = [
  {
    tag: 'ANNOUNCEMENT',
    text: 'SAIT Website Redesign Challenge is now open for submissions',
    href: '/events#web-redesign',
  },
  {
    tag: 'EVENT',
    text: 'Code Night: APIs, Agents & Everything In Between — 27 Sep in IT Lab 3',
    href: '/events#code-night',
  },
  {
    tag: 'DEADLINE',
    text: 'Student mentor cohort applications close on September 10',
    href: '/notifications',
  },
  {
    tag: 'PLACEMENTS',
    text: '92% placement conversion rate recorded in latest department cycle',
    href: '/placements',
  },
  {
    tag: 'COMMUNITY',
    text: 'IT Fresher Department Welcome Meet — SOE Courtyard',
    href: '/events#freshers',
  },
];

export function Ticker() {
  const tickerItems = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-[#D4CEBF] bg-[#FAF8F3] py-2.5">
      <div className="animate-ticker flex items-center">
        {tickerItems.map((item, index) => (
          <Link
            key={`${item.tag}-${index}`}
            href={item.href}
            className="group flex items-center gap-3 px-8 border-r border-[#D4CEBF]/80 text-[#071A33] hover:text-[#315F9F] transition-colors whitespace-nowrap"
          >
            <span className="mono text-[9px] font-semibold tracking-[0.2em] px-2 py-0.5 bg-[#071A33] text-[#F5F2EA] group-hover:bg-[#315F9F] transition-colors">
              {item.tag}
            </span>
            <span className="text-xs sm:text-sm font-medium tracking-tight">
              {item.text}
            </span>
            <span
              aria-hidden="true"
              className="mono text-xs text-[#315F9F] transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}