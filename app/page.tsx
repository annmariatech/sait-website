import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Sparkles, Trophy, Users, Briefcase, BookOpen } from 'lucide-react';
import { stats, announcements, events, people, alumni, achievements, recruiters } from '@/data/site';
import { HeroEditorial } from '@/components/hero-editorial';
import { QuickLinksBar } from '@/components/quick-links-bar';
import { Ticker } from '@/components/ticker';
import { SectionTitle } from '@/components/section-title';
import { EventList } from '@/components/event-list';
import { ScrollReveal } from '@/components/interactive/scroll-reveal';
import { AnimatedCounter } from '@/components/interactive/animated-counter';
import { MagneticButton } from '@/components/interactive/magnetic-button';

export default function Home() {
  // Flagship event + secondary upcoming events
  const flagshipEvent = events.find((e) => e.flagship) || events[0];
  const secondaryEvents = events.filter((e) => e.id !== flagshipEvent.id).slice(0, 3);
  const featuredLeads = people.slice(0, 4);
  const featuredAlumni = alumni.slice(0, 3);
  const featuredAchievements = achievements.slice(0, 4);

  return (
    <main className="overflow-hidden">
      {/* 1. Asymmetric Editorial Hero */}
      <HeroEditorial />

      {/* 2. Sticky Quick Links Bar */}
      <QuickLinksBar />

      {/* 3. Department Marquee Ticker */}
      <Ticker />

      {/* 4. Section 01: Core Department Statistics (Animated Counters) */}
      <section className="border-b border-[#D4CEBF] bg-[#FAF8F3]/60 py-10 sm:py-14">
        <div className="container-grid">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D4CEBF] border border-[#D4CEBF] bg-[#FAF8F3]">
            {stats.map(([num, label], index) => (
              <ScrollReveal
                key={label}
                delayMs={index * 100}
                className="p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#EDE9DF]/40 transition-colors"
              >
                <div className="flex items-center justify-between mono text-[9px] uppercase text-[#315F9F] mb-6">
                  <span>Metric // 0{index + 1}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </div>
                <div>
                  <div className="display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#071A33]">
                    <AnimatedCounter value={num} />
                  </div>
                  <p className="mono text-[10px] uppercase tracking-wider text-[#071A33]/70 mt-3 pt-3 border-t border-[#D4CEBF]/60">
                    {label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Section 02: Narrative - Who We Are & Mission */}
      <section className="container-grid rule-section">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="mono text-[10px] font-bold tracking-[0.2em] uppercase text-[#315F9F] bg-[#071A33]/5 px-2.5 py-1 border border-[#071A33]/15">
                01 · THE MANIFESTO
              </span>
              <h2 className="display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#071A33] mt-4">
                Curiosity with a shipping habit.
              </h2>
            </div>
            
            <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-[#071A33]/85 leading-relaxed">
              <p className="text-xl sm:text-2xl font-editorial italic text-[#071A33] leading-snug">
                “SAIT operates as the student layer around the School of Engineering’s academic ecosystem: connecting technical curiosity with public shipping, peer collaboration, and industrial relevance.”
              </p>
              <p>
                Founded in 2014, our association organizes hands-on programming nights, competitive hackathons, resume and portfolio clinics, research project showcases, and student publications. We believe the most formative learning happens in the creative overlap between university lectures and late-night lab builds.
              </p>
              
              <div className="pt-6 border-t border-[#D4CEBF] flex flex-wrap items-center gap-6 mono text-xs uppercase">
                <Link href="/about" className="btn btn-outline py-2.5 px-5 flex items-center gap-2">
                  <span>Read Full About</span>
                  <ArrowUpRight size={13} className="text-[#315F9F]" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 6. Section 03: Events - Asymmetric Editorial Layout */}
      <section className="container-grid rule-section" id="events-section">
        <ScrollReveal>
          <SectionTitle
            index="02"
            subtitle="Flagship & Upcoming"
            title="Department Calendar."
            link="/events"
            linkText="All Events"
          />

          {/* Asymmetric Composition: Large Featured Event + Secondary Events */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Large Featured Event Card */}
            <article className="lg:col-span-7 bg-[#FAF8F3] border border-[#D4CEBF] p-8 sm:p-10 flex flex-col justify-between shadow-editorial relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#315F9F]/5 rounded-bl-full pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#D4CEBF]">
                  <span className="mono text-[10px] uppercase font-semibold px-2.5 py-0.5 bg-[#071A33] text-[#F5F2EA]">
                    FLAGSHIP EVENT
                  </span>
                  <span className="mono text-[11px] text-[#315F9F] font-semibold flex items-center gap-1">
                    <Calendar size={13} />
                    {flagshipEvent.date} · {flagshipEvent.time}
                  </span>
                </div>

                <div className="mt-8">
                  <span className="mono text-[10px] uppercase text-[#071A33]/50">
                    Venue: {flagshipEvent.venue}
                  </span>
                  <h3 className="display text-3xl sm:text-5xl font-medium tracking-tight text-[#071A33] mt-2 group-hover:text-[#315F9F] transition-colors">
                    {flagshipEvent.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-[#071A33]/75 leading-relaxed max-w-xl">
                    {flagshipEvent.description}
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-[#D4CEBF] flex flex-wrap items-center justify-between gap-4">
                <span className="mono text-xs text-[#071A33]/60">
                  Open to 1st, 2nd & 3rd Year IT Students
                </span>
                <MagneticButton href="/events#web-redesign">
                  <span className="btn btn-navy text-xs py-3 px-6 flex items-center gap-2">
                    <span>Register Now</span>
                    <ArrowUpRight size={14} />
                  </span>
                </MagneticButton>
              </div>
            </article>

            {/* Right: Stacked Secondary Events List */}
            <div className="lg:col-span-5 flex flex-col justify-between divide-y divide-[#D4CEBF] border border-[#D4CEBF] bg-[#FAF8F3]">
              {secondaryEvents.map((evt, idx) => (
                <Link
                  key={evt.id}
                  href={`/events#${evt.id}`}
                  className="p-6 transition-all duration-300 hover:bg-[#EDE9DF]/50 group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mono text-[10px]">
                    <span className="text-[#315F9F] font-semibold">{evt.date} · {evt.time}</span>
                    <span className="uppercase px-2 py-0.5 border border-[#D4CEBF] text-[#071A33]/70">{evt.type}</span>
                  </div>
                  
                  <h4 className="display text-xl sm:text-2xl font-medium text-[#071A33] mt-3 group-hover:text-[#315F9F] transition-colors">
                    {evt.title}
                  </h4>
                  
                  <div className="mt-4 flex items-center justify-between text-xs text-[#071A33]/60">
                    <span>{evt.venue}</span>
                    <span className="mono text-[10px] text-[#315F9F] group-hover:translate-x-1 transition-transform">
                      Details →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* 7. Section 04: Placements Dashboard */}
      <section className="container-grid rule-section">
        <ScrollReveal>
          <SectionTitle
            index="03"
            subtitle="Career Index"
            title="Campus to Offer."
            link="/placements"
            linkText="Full Report"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Highlight Metrics */}
            <div className="lg:col-span-7 bg-[#FAF8F3] border border-[#D4CEBF] p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#D4CEBF]">
                  <span className="mono text-[10px] font-bold uppercase text-[#315F9F]">
                    DEPARTMENT RECORD
                  </span>
                  <span className="mono text-[10px] uppercase text-[#071A33]/50">
                    Latest Assessment
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
                  <div>
                    <div className="display text-4xl sm:text-5xl font-medium text-[#071A33]">
                      <AnimatedCounter value="92%" />
                    </div>
                    <p className="mono text-[10px] uppercase text-[#071A33]/70 mt-1">
                      Placement Rate
                    </p>
                  </div>
                  <div>
                    <div className="display text-4xl sm:text-5xl font-medium text-[#071A33]">
                      8.4 <span className="text-xl">LPA</span>
                    </div>
                    <p className="mono text-[10px] uppercase text-[#071A33]/70 mt-1">
                      Median CTC
                    </p>
                  </div>
                  <div>
                    <div className="display text-4xl sm:text-5xl font-medium text-[#315F9F]">
                      18 <span className="text-xl">LPA</span>
                    </div>
                    <p className="mono text-[10px] uppercase text-[#071A33]/70 mt-1">
                      Highest CTC
                    </p>
                  </div>
                </div>

                {/* Progress bars */}
                <div className="mt-8 pt-6 border-t border-[#D4CEBF] space-y-4">
                  <div>
                    <div className="flex justify-between mono text-[10px] uppercase text-[#071A33]/80 mb-1.5">
                      <span>Placement Conversion</span>
                      <span className="font-bold">92%</span>
                    </div>
                    <div className="h-2 bg-[#EDE9DF] border border-[#D4CEBF]/60 overflow-hidden">
                      <div className="h-full bg-[#071A33] w-[92%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mono text-[10px] uppercase text-[#071A33]/80 mb-1.5">
                      <span>Internship Conversion</span>
                      <span className="font-bold">76%</span>
                    </div>
                    <div className="h-2 bg-[#EDE9DF] border border-[#D4CEBF]/60 overflow-hidden">
                      <div className="h-full bg-[#315F9F] w-[76%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 flex items-center justify-between text-xs text-[#071A33]/60">
                <span>Verified against department placement office archives</span>
                <Link href="/placements" className="mono text-[10px] uppercase text-[#315F9F] font-semibold hover:underline">
                  Career Resources →
                </Link>
              </div>
            </div>

            {/* Right: Key Recruiters Strip */}
            <div className="lg:col-span-5 border border-[#D4CEBF] bg-[#FAF8F3] p-8 flex flex-col justify-between">
              <div>
                <p className="eyebrow mb-2">Recruiter Network</p>
                <h3 className="display text-2xl font-medium text-[#071A33]">
                  Selected Hiring Partners
                </h3>
                <p className="text-xs text-[#071A33]/70 mt-1">
                  Leading technology firms, cloud platforms, and consulting groups actively recruiting IT engineers from SOE.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-6">
                  {recruiters.map((r) => (
                    <div
                      key={r}
                      className="border border-[#D4CEBF] bg-[#EDE9DF]/60 p-3 text-center mono text-xs font-semibold uppercase text-[#071A33] hover:bg-[#071A33] hover:text-[#F5F2EA] transition-all cursor-default"
                    >
                      {r}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D4CEBF]">
                <Link
                  href="/placements"
                  className="btn btn-outline w-full py-2.5 text-[10px] flex items-center justify-center gap-1.5"
                >
                  <span>Explore Career Preparation Desk</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* 8. Section 05: Hall of Fame / Proof of Work */}
      <section className="container-grid rule-section">
        <ScrollReveal>
          <SectionTitle
            index="04"
            subtitle="Proof of Work"
            title="Hall of Fame."
            link="/hall-of-fame"
            linkText="View All Wins"
          />

          <div className="divide-y divide-[#D4CEBF] border-y border-[#D4CEBF]">
            {featuredAchievements.map((item, idx) => (
              <div
                key={idx}
                className="py-6 sm:py-8 px-4 hover:bg-[#FAF8F3] transition-colors group grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
              >
                <div className="md:col-span-2 flex items-center gap-3">
                  <span className="mono text-xs font-bold text-[#071A33]/40">
                    {item[0]}
                  </span>
                  <span className="mono text-[10px] font-semibold uppercase px-2 py-0.5 bg-[#071A33]/5 border border-[#071A33]/15 text-[#315F9F]">
                    {item[1]}
                  </span>
                </div>

                <div className="md:col-span-6">
                  <h3 className="display text-2xl font-medium text-[#071A33] group-hover:text-[#315F9F] transition-colors">
                    {item[2]}
                  </h3>
                </div>

                <div className="md:col-span-4 text-xs text-[#071A33]/70 md:text-right mono uppercase">
                  {item[3]}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 9. Section 06: People / Student Leadership Spotlight */}
      <section className="container-grid rule-section">
        <ScrollReveal>
          <SectionTitle
            index="05"
            subtitle="Student Committee"
            title="The People Behind the Programme."
            link="/people"
            linkText="Full Directory"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredLeads.map((p) => {
              const initials = p.name
                .split(' ')
                .map((x) => x[0])
                .join('');

              return (
                <article
                  key={p.name}
                  className="bg-[#FAF8F3] border border-[#D4CEBF] p-6 hover:-translate-y-1 hover:shadow-editorial transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[4/3] bg-[#EDE9DF] border border-[#D4CEBF] flex items-end justify-between p-4 relative overflow-hidden">
                      <div className="absolute inset-0 paper-pattern opacity-30 pointer-events-none" />
                      <span className="display text-5xl font-light text-[#071A33]/30 select-none group-hover:text-[#315F9F]/60 transition-colors">
                        {initials}
                      </span>
                      <span className="mono text-[10px] font-semibold uppercase bg-[#071A33] text-[#F5F2EA] px-2 py-0.5 relative z-10">
                        {p.year}
                      </span>
                    </div>

                    <div className="mt-5 flex items-center justify-between mono text-[10px] uppercase">
                      <span className="text-[#315F9F] font-semibold">{p.team}</span>
                      <span className="text-[#071A33]/50">{p.role}</span>
                    </div>

                    <h3 className="display text-2xl font-medium text-[#071A33] mt-2 group-hover:text-[#315F9F] transition-colors">
                      {p.name}
                    </h3>

                    <p className="text-xs text-[#071A33]/70 leading-relaxed mt-3 pt-3 border-t border-[#D4CEBF]/60">
                      {p.bio}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#D4CEBF]/40 mono text-[9px] text-[#071A33]/40">
                    SAIT Committee · 2026
                  </div>
                </article>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* 10. Section 07: Alumni Spotlight */}
      <section className="container-grid rule-section">
        <ScrollReveal>
          <SectionTitle
            index="06"
            subtitle="Network & Reach"
            title="The Department Keeps Travelling."
            link="/alumni"
            linkText="Alumni Gallery"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredAlumni.map((alum) => (
              <article
                key={alum[1]}
                className="bg-[#FAF8F3] border border-[#D4CEBF] p-8 hover:shadow-editorial transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#D4CEBF] mono text-[10px]">
                    <span className="text-[#071A33]/50">Batch of {alum[0]}</span>
                    <span className="font-semibold px-2 py-0.5 bg-[#315F9F] text-white">
                      {alum[3]}
                    </span>
                  </div>

                  <h3 className="display text-2xl sm:text-3xl font-medium text-[#071A33] mt-6">
                    {alum[1]}
                  </h3>

                  <p className="mono text-[11px] text-[#315F9F] font-semibold uppercase mt-1">
                    {alum[2]}
                  </p>

                  <p className="text-xs sm:text-sm text-[#071A33]/70 leading-relaxed mt-4 pt-4 border-t border-[#D4CEBF]/60">
                    {alum[4]}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#D4CEBF]/40 mono text-[9px] uppercase text-[#071A33]/40">
                  SOE IT Alumni Network
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 11. Section 08: Latest Updates & Bulletin */}
      <section className="container-grid rule-section">
        <ScrollReveal>
          <SectionTitle
            index="07"
            subtitle="Department Journal"
            title="Latest Updates."
            link="/notifications"
            linkText="Full Bulletin"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {announcements.map((a, i) => (
              <Link
                key={i}
                href="/notifications"
                className="bg-[#FAF8F3] border border-[#D4CEBF] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-editorial group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#D4CEBF] mono text-[10px]">
                    <span className="text-[#071A33]/60">{a.date}</span>
                    <span className="font-semibold uppercase px-2 py-0.5 bg-[#071A33] text-[#F5F2EA]">
                      {a.tag}
                    </span>
                  </div>

                  <h3 className="display text-2xl font-medium text-[#071A33] mt-8 group-hover:text-[#315F9F] transition-colors leading-snug">
                    {a.title}
                  </h3>
                </div>

                <div className="mt-8 pt-4 border-t border-[#D4CEBF] flex items-center justify-between mono text-[10px] text-[#315F9F]">
                  <span>Read Notice</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>

    </main>
  );
}
