'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Users, Bell, Briefcase } from 'lucide-react';

interface QuickLinkItem {
  id: string;
  label: string;
  href: string;
  count: string;
  preview: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const quickLinks: QuickLinkItem[] = [
  {
    id: 'events',
    label: 'EVENTS',
    href: '/events',
    count: '04 upcoming',
    preview: 'Redesign Challenge, Code Night & Resume Clinic',
    icon: Calendar,
  },
  {
    id: 'student-life',
    label: 'STUDENT LIFE',
    href: '/people',
    count: '12 leads',
    preview: 'Executive, tech, media and editorial teams',
    icon: Users,
  },
  {
    id: 'announcements',
    label: 'ANNOUNCEMENTS',
    href: '/notifications',
    count: '03 new',
    preview: 'Latest official notices, mentor cohorts & deadlines',
    icon: Bell,
  },
  {
    id: 'placements',
    label: 'PLACEMENTS',
    href: '/placements',
    count: '92% rate',
    preview: 'Recruiter index, CTC reports and interview desk',
    icon: Briefcase,
  },
];

export function QuickLinksBar() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="border-b border-[#D4CEBF] bg-[#FAF8F3]/90 backdrop-blur-md sticky top-16 z-30 transition-all">
      <div className="container-grid">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#D4CEBF] border-x border-[#D4CEBF]">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            const isHovered = hoveredId === item.id;

            return (
              <Link
                key={item.id}
                href={item.href}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative px-4 py-3.5 transition-all duration-300 group flex flex-col justify-between overflow-hidden ${
                  isHovered ? 'bg-[#071A33] text-[#F5F2EA]' : 'bg-transparent text-[#071A33] hover:bg-[#FAF8F3]'
                }`}
              >
                {/* Header: Label + Arrow */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon size={14} className={isHovered ? 'text-[#F5F2EA]' : 'text-[#315F9F]'} />
                    <span className="mono text-[11px] font-semibold tracking-[0.16em] uppercase">
                      {item.label}
                    </span>
                  </div>
                  <span
                    className={`mono text-xs transition-transform duration-300 ${
                      isHovered ? 'translate-x-1 text-[#F5F2EA]' : 'text-[#315F9F]'
                    }`}
                  >
                    →
                  </span>
                </div>

                {/* Subtitle / Counter / Preview */}
                <div className="mt-1.5 flex items-center justify-between text-[10px] mono">
                  <span className={isHovered ? 'text-[#F5F2EA]/75' : 'text-[#071A33]/55'}>
                    {item.count}
                  </span>
                  <span
                    className={`hidden sm:inline-block truncate max-w-[150px] transition-opacity duration-300 ${
                      isHovered ? 'text-[#F5F2EA]/90' : 'text-[#071A33]/40'
                    }`}
                  >
                    {item.preview}
                  </span>
                </div>

                {/* Bottom subtle accent line on hover */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#315F9F] transition-all duration-300 ${
                    isHovered ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
