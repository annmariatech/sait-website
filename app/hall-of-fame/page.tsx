import React from 'react';
import { PageHero } from '@/components/page-hero';
import { achievements } from '@/data/site';
import { Trophy, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hall() {
  return (
    <main>
      <PageHero
        kicker="Hall of Fame / 06"
        badge="Community Proof"
        title="Proof of work."
        description="Selected achievements from the student community — hackathon wins, published research, national competitions and academic milestones."
      />

      <div className="container-grid py-12 md:py-16 pb-24">
        <div className="bg-[#FAF8F3] border border-[#D4CEBF]">
          <div className="p-6 border-b border-[#D4CEBF] flex items-center justify-between mono text-[10px] uppercase text-[#071A33]/60">
            <span>Official Record of Recognition</span>
            <span>Department of IT · CUSAT</span>
          </div>

          <div className="divide-y divide-[#D4CEBF]">
            {achievements.map((a, i) => (
              <article
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 sm:p-8 hover:bg-[#EDE9DF]/50 transition-colors items-center group"
              >
                {/* Year & Category */}
                <div className="md:col-span-3 flex items-center gap-3">
                  <span className="mono text-xs font-bold text-[#071A33]/50">
                    {a[0]}
                  </span>
                  <span className="mono text-[10px] font-semibold uppercase px-2.5 py-0.5 bg-[#071A33]/5 border border-[#071A33]/15 text-[#315F9F]">
                    {a[1]}
                  </span>
                </div>

                {/* Project / Award Title */}
                <div className="md:col-span-5">
                  <h2 className="display text-2xl sm:text-3xl font-medium tracking-tight text-[#071A33] group-hover:text-[#315F9F] transition-colors">
                    {a[2]}
                  </h2>
                </div>

                {/* Narrative / Context */}
                <div className="md:col-span-4 text-xs sm:text-sm text-[#071A33]/70 md:text-right mono">
                  {a[3]}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
