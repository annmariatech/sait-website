'use client';

import React, { useState } from 'react';
import { PageHero } from '@/components/page-hero';
import { EventList } from '@/components/event-list';
import { SectionTitle } from '@/components/section-title';
import { events, pastEvents } from '@/data/site';
import { Calendar, MapPin, ArrowUpRight, Users, CheckCircle } from 'lucide-react';

export default function Events() {
  const [year, setYear] = useState('All');
  const [cat, setCat] = useState('All');
  const [registeredId, setRegisteredId] = useState<string | null>(null);

  const years = ['All', '2026', '2025', '2024'];
  const cats = ['All', 'Tech', 'Career', 'Community', 'Events'];

  const past = pastEvents.filter(
    (x) => (year === 'All' || x[0] === year) && (cat === 'All' || x[1] === cat)
  );

  const handleRegister = (id: string, title: string) => {
    setRegisteredId(id);
    alert(`Registration confirmed for "${title}". Details will be communicated via student email.`);
  };

  return (
    <main>
      <PageHero
        kicker="Events / 03"
        badge="Activity Calendar"
        title="A calendar that actually moves."
        description="Technical sessions, competitions, career prep, community gatherings and the occasional very late night in a lab."
      />

      <div className="container-grid">
        {/* Section 01: Flagship Programmes */}
        <section className="rule-section">
          <SectionTitle
            index="01"
            subtitle="Major Highlights"
            title="Flagship Programmes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events
              .filter((e) => e.flagship)
              .map((e) => (
                <article
                  key={e.id}
                  id={e.id}
                  className="bg-[#FAF8F3] border border-[#D4CEBF] p-8 sm:p-10 flex flex-col justify-between shadow-editorial relative overflow-hidden group"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#D4CEBF]">
                      <span className="mono text-[10px] uppercase font-bold text-[#315F9F]">
                        {e.type} · FLAGSHIP
                      </span>
                      <span className="mono text-[11px] text-[#071A33]/70 flex items-center gap-1.5 font-medium">
                        <Calendar size={13} className="text-[#315F9F]" />
                        {e.date} · {e.time}
                      </span>
                    </div>

                    <div className="mono text-[10px] text-[#071A33]/60 flex items-center gap-1.5 mt-4">
                      <MapPin size={12} className="text-[#315F9F]" />
                      <span>{e.venue}</span>
                    </div>

                    <h2 className="display text-3xl sm:text-4xl font-medium tracking-tight text-[#071A33] mt-3 group-hover:text-[#315F9F] transition-colors">
                      {e.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#071A33]/75 leading-relaxed mt-4">
                      {e.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#D4CEBF] flex items-center justify-between">
                    <span className="mono text-[10px] text-[#071A33]/60">
                      Open to SOE IT Students
                    </span>
                    <button
                      onClick={() => handleRegister(e.id, e.title)}
                      className={`btn text-xs py-2.5 px-5 flex items-center gap-2 ${
                        registeredId === e.id ? 'btn-outline bg-[#EDE9DF]' : 'btn-navy'
                      }`}
                    >
                      {registeredId === e.id ? (
                        <>
                          <CheckCircle size={14} className="text-[#315F9F]" />
                          <span>Registered</span>
                        </>
                      ) : (
                        <>
                          <span>Register</span>
                          <ArrowUpRight size={14} />
                        </>
                      )}
                    </button>
                  </div>
                </article>
              ))}
          </div>
        </section>

        {/* Section 02: All Upcoming Events */}
        <section className="rule-section">
          <SectionTitle
            index="02"
            subtitle="Full Schedule"
            title="All Upcoming Sessions."
          />
          <EventList />
        </section>

        {/* Section 03: Past Events Archive */}
        <section className="rule-section pb-24">
          <SectionTitle
            index="03"
            subtitle="Archive"
            title="Past Department Events."
          />

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#D4CEBF]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mono text-[10px] uppercase text-[#071A33]/50 mr-2">Year:</span>
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => setYear(y)}
                  className={`mono text-[10px] uppercase px-3 py-1.5 border transition-all cursor-pointer ${
                    year === y
                      ? 'border-[#071A33] bg-[#071A33] text-[#F5F2EA]'
                      : 'border-[#D4CEBF] bg-[#FAF8F3] text-[#071A33] hover:border-[#071A33]'
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="mono text-[10px] uppercase text-[#071A33]/50 mr-2">Category:</span>
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`mono text-[10px] uppercase px-3 py-1.5 border transition-all cursor-pointer ${
                    cat === c
                      ? 'border-[#315F9F] bg-[#315F9F] text-white'
                      : 'border-[#D4CEBF] bg-[#FAF8F3] text-[#071A33] hover:border-[#071A33]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Past Events Archive Table */}
          <div className="bg-[#FAF8F3] border border-[#D4CEBF]">
            <div className="divide-y divide-[#D4CEBF]">
              {past.map((p, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-12 gap-3 p-5 text-sm hover:bg-[#EDE9DF]/50 transition-colors items-center"
                >
                  <div className="md:col-span-2 mono text-xs font-semibold text-[#071A33]/60">
                    {p[0]}
                  </div>
                  <div className="md:col-span-2">
                    <span className="mono text-[9px] font-semibold uppercase px-2 py-0.5 bg-[#071A33]/5 border border-[#071A33]/15 text-[#315F9F]">
                      {p[1]}
                    </span>
                  </div>
                  <div className="md:col-span-5 font-medium text-base text-[#071A33]">
                    {p[2]}
                  </div>
                  <div className="md:col-span-3 md:text-right mono text-xs text-[#071A33]/60 flex items-center md:justify-end gap-1.5">
                    <Users size={12} className="text-[#315F9F]" />
                    <span>{p[3]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
