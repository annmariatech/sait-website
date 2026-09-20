import React from 'react';
import { PageHero } from '@/components/page-hero';
import { announcements } from '@/data/site';
import { Pin, Calendar, Bell, ArrowUpRight } from 'lucide-react';

export default function Notifications() {
  const feed = [
    ...announcements,
    { date: '29 AUG 2026', tag: 'EVENT', title: 'Alumni Connect registrations are open' },
    { date: '20 AUG 2026', tag: 'GENERAL', title: 'SAIT office hours move to Wednesday afternoons' },
    { date: '11 AUG 2026', tag: 'DEADLINE', title: 'Submit project abstracts for the student showcase' },
  ];

  return (
    <main>
      <PageHero
        kicker="Updates / 07"
        badge="Official Bulletin"
        title="The department bulletin."
        description="One chronological feed for events, deadlines, competition calls, and the essential pieces of information that keep student life moving."
      />

      <div className="container-grid py-12 md:py-16 pb-24">
        <div className="bg-[#FAF8F3] border border-[#D4CEBF]">
          <div className="p-6 border-b border-[#D4CEBF] flex items-center justify-between mono text-[10px] uppercase text-[#071A33]/60">
            <span>Official Dispatches</span>
            <span>Sorted Chronologically</span>
          </div>

          <div className="divide-y divide-[#D4CEBF]">
            {feed.map((a, i) => {
              const isPinned = i === 0;

              return (
                <article
                  key={i}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-4 p-6 sm:p-8 transition-colors items-center group ${
                    isPinned ? 'bg-[#EDE9DF]/70 border-l-4 border-l-[#315F9F]' : 'hover:bg-[#EDE9DF]/40'
                  }`}
                >
                  {/* Date */}
                  <div className="md:col-span-3 flex items-center gap-2 mono text-xs text-[#071A33]/70">
                    <Calendar size={13} className="text-[#315F9F]" />
                    <span>{a.date}</span>
                  </div>

                  {/* Tag */}
                  <div className="md:col-span-2">
                    <span
                      className={`inline-flex items-center gap-1 mono text-[9px] font-semibold uppercase px-2.5 py-0.5 border ${
                        isPinned
                          ? 'border-[#071A33] bg-[#071A33] text-[#F5F2EA]'
                          : 'border-[#D4CEBF] bg-[#FAF8F3] text-[#315F9F]'
                      }`}
                    >
                      {isPinned && <Pin size={10} />}
                      {isPinned ? 'PINNED · ' : ''}
                      {a.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-7 flex items-center justify-between">
                    <h2 className="display text-xl sm:text-2xl font-medium tracking-tight text-[#071A33] group-hover:text-[#315F9F] transition-colors leading-snug">
                      {a.title}
                    </h2>
                    <ArrowUpRight
                      size={16}
                      className="text-[#315F9F] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline-block ml-4"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
