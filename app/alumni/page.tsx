import React from 'react';
import { PageHero } from '@/components/page-hero';
import { alumni } from '@/data/site';
import { Building2, Briefcase, GraduationCap, MapPin } from 'lucide-react';

export default function Alumni() {
  return (
    <main>
      <PageHero
        kicker="Alumni / 05"
        badge="Graduate Network"
        title="The department keeps travelling."
        description="A growing network of graduates across product, engineering, research, startups and global technology teams."
      />

      <div className="container-grid py-12 md:py-16 pb-24">
        <div className="divide-y divide-[#D4CEBF] border-y border-[#D4CEBF]">
          {alumni.map((a, i) => (
            <article
              key={a[1]}
              className="py-8 sm:py-10 hover:bg-[#FAF8F3] transition-colors px-2 sm:px-6 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Year Badge */}
                <div className="md:col-span-2 flex items-center gap-2">
                  <span className="mono text-xs font-bold text-[#315F9F] bg-[#071A33]/5 px-2.5 py-1 border border-[#071A33]/15">
                    Batch {a[0]}
                  </span>
                </div>

                {/* Name & Title */}
                <div className="md:col-span-4">
                  <h3 className="display text-3xl font-medium tracking-tight text-[#071A33] group-hover:text-[#315F9F] transition-colors">
                    {a[1]}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 mono text-xs font-semibold uppercase text-[#071A33]/80">
                    <span>{a[2]}</span>
                    <span>·</span>
                    <span className="text-[#315F9F]">{a[3]}</span>
                  </div>
                </div>

                {/* Narrative */}
                <div className="md:col-span-5 text-sm sm:text-base text-[#071A33]/75 leading-relaxed">
                  {a[4]}
                </div>

                {/* Tag */}
                <div className="md:col-span-1 md:text-right mono text-[10px] uppercase text-[#071A33]/40">
                  Spotlight
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
