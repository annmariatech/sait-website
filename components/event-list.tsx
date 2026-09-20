import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';
import { events } from '@/data/site';

interface EventListProps {
  limit?: number;
}

export function EventList({ limit }: EventListProps) {
  const displayEvents = limit ? events.slice(0, limit) : events;

  return (
    <div className="divide-y divide-[#D4CEBF] border-y border-[#D4CEBF]">
      {displayEvents.map((e, i) => (
        <article
          key={e.id}
          id={e.id}
          className="group py-6 sm:py-8 transition-all duration-300 hover:bg-[#FAF8F3] px-2 sm:px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
            
            {/* Number & Date */}
            <div className="md:col-span-3 flex flex-row md:flex-col justify-between md:justify-start gap-2">
              <div className="flex items-center gap-3">
                <span className="mono text-xs font-bold text-[#071A33]/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mono text-[11px] font-semibold text-[#315F9F] flex items-center gap-1.5">
                  <Calendar size={13} />
                  {e.date}
                </span>
              </div>
              <div className="mono text-[10px] text-[#071A33]/60 flex items-center gap-1.5 md:mt-1">
                <MapPin size={12} />
                <span>{e.time} · {e.venue}</span>
              </div>
            </div>

            {/* Title & Description */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="mono text-[9px] font-semibold uppercase px-2 py-0.5 border border-[#D4CEBF] bg-[#EDE9DF]/60 text-[#071A33]">
                  {e.type}
                </span>
                {e.flagship && (
                  <span className="mono text-[9px] font-semibold uppercase px-2 py-0.5 bg-[#071A33] text-[#F5F2EA]">
                    Flagship
                  </span>
                )}
              </div>
              <h3 className="display text-2xl sm:text-3xl font-medium tracking-tight text-[#071A33] group-hover:text-[#315F9F] transition-colors">
                {e.title}
              </h3>
              <p className="mt-2 text-sm text-[#071A33]/70 leading-relaxed max-w-2xl">
                {e.description}
              </p>
            </div>

            {/* Action */}
            <div className="md:col-span-2 flex justify-start md:justify-end items-center pt-2 md:pt-0">
              <Link
                href={`/events#${e.id}`}
                aria-label={`Open ${e.title}`}
                className="btn btn-outline text-[10px] py-2 px-4 group-hover:bg-[#071A33] group-hover:text-[#F5F2EA] transition-all flex items-center gap-1.5"
              >
                <span>Details</span>
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

          </div>
        </article>
      ))}
    </div>
  );
}
