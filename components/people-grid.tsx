'use client';

import React, { useState } from 'react';
import { people } from '@/data/site';

export function PeopleGrid() {
  const [team, setTeam] = useState('All');
  const teams = ['All', 'Executive', 'Tech', 'Media', 'Events', 'PR', 'Content'];
  const list = team === 'All' ? people : people.filter((p) => p.team === team);

  return (
    <div>
      {/* Editorial Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#D4CEBF]">
        <span className="mono text-[10px] uppercase tracking-widest text-[#071A33]/50 mr-2">
          Filter Team:
        </span>
        {teams.map((t) => {
          const isActive = team === t;
          return (
            <button
              key={t}
              onClick={() => setTeam(t)}
              className={`mono text-[10px] uppercase tracking-wider px-3.5 py-1.5 border transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'border-[#071A33] bg-[#071A33] text-[#F5F2EA] shadow-sm'
                  : 'border-[#D4CEBF] bg-[#FAF8F3] text-[#071A33] hover:border-[#071A33]'
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>

      {/* Editorial Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {list.map((p) => {
          const initials = p.name
            .split(' ')
            .map((x) => x[0])
            .join('');

          return (
            <article
              key={p.name}
              className="bg-[#FAF8F3] border border-[#D4CEBF] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-editorial group flex flex-col justify-between"
            >
              <div>
                {/* Monogram Portrait Frame */}
                <div className="aspect-[4/3] bg-[#EDE9DF] border border-[#D4CEBF] flex items-end justify-between p-4 relative overflow-hidden group-hover:border-[#071A33]/40 transition-colors">
                  <div className="absolute inset-0 paper-pattern opacity-30 pointer-events-none" />
                  <span className="display text-5xl font-light text-[#071A33]/30 select-none group-hover:text-[#315F9F]/60 transition-colors">
                    {initials}
                  </span>
                  <span className="mono text-[10px] font-semibold uppercase bg-[#071A33] text-[#F5F2EA] px-2 py-0.5 relative z-10">
                    {p.year}
                  </span>
                </div>

                {/* Team & Role */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="mono text-[10px] font-semibold uppercase text-[#315F9F] tracking-wider">
                    {p.team}
                  </span>
                  <span className="mono text-[9px] uppercase text-[#071A33]/50">
                    SOE · IT
                  </span>
                </div>

                <h3 className="display text-2xl font-medium tracking-tight text-[#071A33] mt-1.5 group-hover:text-[#315F9F] transition-colors">
                  {p.name}
                </h3>

                <p className="mono text-[11px] font-medium text-[#071A33]/80 mt-0.5">
                  {p.role}
                </p>

                <p className="text-xs text-[#071A33]/70 leading-relaxed mt-3 pt-3 border-t border-[#D4CEBF]/60">
                  {p.bio}
                </p>
              </div>

              {/* Bottom Card Annotation */}
              <div className="mt-4 pt-3 border-t border-[#D4CEBF]/40 flex justify-between items-center mono text-[9px] text-[#071A33]/40">
                <span>SAIT Committee</span>
                <span>2026</span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
