import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface SectionTitleProps {
  index: string;
  title: string;
  subtitle?: string;
  link?: string;
  linkText?: string;
}

export function SectionTitle({
  index,
  title,
  subtitle,
  link,
  linkText = 'View all',
}: SectionTitleProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end mb-10 pb-4 border-b border-[#D4CEBF]">
      <div className="md:col-span-2 flex items-center gap-2">
        <span className="mono text-[10px] font-bold tracking-[0.2em] text-[#315F9F] bg-[#071A33]/5 px-2 py-0.5 border border-[#071A33]/15">
          {index}
        </span>
        {subtitle && (
          <span className="mono text-[10px] uppercase text-[#071A33]/50 hidden sm:inline">
            {subtitle}
          </span>
        )}
      </div>

      <div className="md:col-span-10 flex flex-wrap items-end justify-between gap-4">
        <h2 className="display text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.03em] text-[#071A33]">
          {title}
        </h2>

        {link && (
          <Link
            href={link}
            className="group inline-flex items-center gap-1.5 mono text-[11px] font-semibold uppercase tracking-wider text-[#315F9F] hover:text-[#071A33] transition-colors link-underline"
          >
            <span>{linkText}</span>
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
