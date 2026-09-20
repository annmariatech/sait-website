import React from 'react';

interface PageHeroProps {
  kicker: string;
  title: string;
  description?: string;
  badge?: string;
}

export function PageHero({ kicker, title, description, badge }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 sm:pt-16 md:pt-20 pb-12 md:pb-16 border-b border-[#D4CEBF]">
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 paper-pattern opacity-30 pointer-events-none" />

      <div className="container-grid relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Metadata Kicker */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <span className="mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#315F9F] bg-[#071A33]/5 px-2.5 py-1 border border-[#071A33]/15 w-max">
              {kicker}
            </span>
            {badge && (
              <span className="mono text-[9px] uppercase tracking-widest text-[#071A33]/50">
                {badge}
              </span>
            )}
          </div>

          {/* Title & Description */}
          <div className="md:col-span-10 max-w-4xl">
            <h1 className="display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[-0.045em] leading-[0.92] text-[#071A33]">
              {title}
            </h1>

            {description && (
              <div className="mt-6 sm:mt-8 pt-6 border-t border-[#D4CEBF]/80 max-w-2xl">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#071A33]/80 font-sans">
                  {description}
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
