import React from 'react';
import { PageHero } from '@/components/page-hero';
import { SectionTitle } from '@/components/section-title';
import { recruiters } from '@/data/site';
import { AnimatedCounter } from '@/components/interactive/animated-counter';
import { ScrollReveal } from '@/components/interactive/scroll-reveal';
import { ArrowUpRight, Award, Briefcase, FileCheck, HelpCircle } from 'lucide-react';

export default function Placements() {
  const metrics = [
    { value: '92%', label: 'Placed Students', sub: 'Department Placement Rate' },
    { value: '8.4 LPA', label: 'Median CTC', sub: 'Across Core & Software Roles' },
    { value: '18 LPA', label: 'Highest CTC', sub: 'Product Engineering Offer' },
    { value: '41', label: 'Total Offers', sub: 'Recruitment Season' },
  ];

  const careerResources = [
    {
      title: 'Resume & Portfolio Review',
      desc: 'Peer-led feedback on resumes, GitHub profiles, projects, and personal websites.',
      tag: 'Tooling & Feedback',
    },
    {
      title: 'Interview Preparation Archive',
      desc: 'Coding interview question repository, systems design questions, and mock sessions.',
      tag: 'Technical Practice',
    },
    {
      title: 'Internship Application Tracker',
      desc: 'A curated spreadsheet of internship opportunities, stipends, and deadlines for 2nd & 3rd years.',
      tag: 'Opportunities',
    },
  ];

  return (
    <main>
      <PageHero
        kicker="Placements / 04"
        badge="Career Index"
        title="From campus to first offer."
        description="Placement metrics, recruiter indices and career resources designed as a clean department dashboard — not a corporate brochure."
      />

      <div className="container-grid">
        {/* Section 01: Placement Report Metrics */}
        <section className="rule-section">
          <ScrollReveal>
            <SectionTitle
              index="01"
              subtitle="Department Statistics"
              title="Placement Report."
            />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-[#FAF8F3] border border-[#D4CEBF] p-8 flex flex-col justify-between hover:shadow-editorial transition-all"
                >
                  <div className="display text-4xl sm:text-5xl lg:text-6xl font-medium text-[#071A33]">
                    <AnimatedCounter value={m.value} />
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#D4CEBF]/60">
                    <p className="mono text-xs font-semibold uppercase text-[#315F9F]">
                      {m.label}
                    </p>
                    <p className="mono text-[10px] uppercase text-[#071A33]/50 mt-1">
                      {m.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Conversion Bars */}
            <div className="mt-12 bg-[#FAF8F3] border border-[#D4CEBF] p-8 sm:p-10 max-w-3xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#D4CEBF]">
                <span className="mono text-[10px] uppercase font-bold text-[#315F9F]">
                  CONVERSION ANALYSIS
                </span>
                <span className="mono text-[10px] text-[#071A33]/50">Academic Cycle</span>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <div className="flex justify-between mono text-xs uppercase text-[#071A33] mb-2 font-medium">
                    <span>Final Placement Conversion</span>
                    <span className="font-bold text-[#315F9F]">92%</span>
                  </div>
                  <div className="h-2.5 bg-[#EDE9DF] border border-[#D4CEBF] overflow-hidden">
                    <div className="h-full bg-[#071A33] w-[92%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mono text-xs uppercase text-[#071A33] mb-2 font-medium">
                    <span>Pre-Final Year Internship Conversion</span>
                    <span className="font-bold text-[#315F9F]">76%</span>
                  </div>
                  <div className="h-2.5 bg-[#EDE9DF] border border-[#D4CEBF] overflow-hidden">
                    <div className="h-full bg-[#315F9F] w-[76%]" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Section 02: Recruiter Index */}
        <section className="rule-section">
          <ScrollReveal>
            <SectionTitle
              index="02"
              subtitle="Partner Companies"
              title="Recruiter Index."
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {recruiters.map((r) => (
                <div
                  key={r}
                  className="bg-[#FAF8F3] border border-[#D4CEBF] p-6 text-center flex items-center justify-center display text-xl font-medium text-[#071A33] hover:bg-[#071A33] hover:text-[#F5F2EA] transition-all cursor-default"
                >
                  {r}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Section 03: Career Desk */}
        <section className="rule-section pb-24">
          <ScrollReveal>
            <SectionTitle
              index="03"
              subtitle="Student Tools"
              title="Career Desk."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {careerResources.map((res, i) => (
                <div
                  key={res.title}
                  className="bg-[#FAF8F3] border border-[#D4CEBF] p-8 flex flex-col justify-between hover:shadow-editorial transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#D4CEBF] mono text-[10px]">
                      <span className="text-[#315F9F] font-bold">0{i + 1}</span>
                      <span className="uppercase text-[#071A33]/50">{res.tag}</span>
                    </div>

                    <h3 className="display text-2xl font-medium text-[#071A33] mt-6 group-hover:text-[#315F9F] transition-colors">
                      {res.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#071A33]/70 leading-relaxed mt-3">
                      {res.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#D4CEBF]/60">
                    <a
                      href="https://cusat.ac.in"
                      target="_blank"
                      rel="noreferrer"
                      className="mono text-xs uppercase text-[#315F9F] font-semibold flex items-center gap-1 hover:underline"
                    >
                      <span>Open Resource</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      </div>
    </main>
  );
}
