import React from 'react';
import { PageHero } from '@/components/page-hero';
import { SectionTitle } from '@/components/section-title';
import { faculty, resources } from '@/data/site';
import { ScrollReveal } from '@/components/interactive/scroll-reveal';
import { ArrowUpRight, Award, Compass, GraduationCap, History } from 'lucide-react';

export default function About() {
  const milestones = [
    { year: '1995', title: 'Department Founded', desc: 'Department of Information Technology established at School of Engineering, CUSAT.' },
    { year: '2014', title: 'SAIT Founded', desc: 'Students’ Association of Information Technology chartered to organize department activities.' },
    { year: '2020', title: 'Digital Platforms Era', desc: 'Virtual hackathons, open tech sessions, and student mentor cohorts initiated.' },
    { year: '2024', title: 'Project Showcase Series', desc: 'Student research seminars and annual tech competition cycles introduced.' },
    { year: '2026', title: 'New Editorial Web Identity', desc: 'Comprehensive redesign and department journal archive launched.' },
  ];

  return (
    <main>
      <PageHero
        kicker="About / 01"
        badge="Charter & History"
        title="A student association with a point of view."
        description="SAIT connects the IT student community with technical learning, student representation, industry exposure and the culture that happens between classes."
      />

      <div className="container-grid">
        {/* Section 01: Vision & Mission */}
        <section className="rule-section">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-[#FAF8F3] border border-[#D4CEBF] p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="mono text-[10px] font-bold uppercase text-[#315F9F] tracking-widest">
                    OUR VISION
                  </span>
                  <h2 className="display text-3xl sm:text-4xl text-[#071A33] mt-4 font-medium leading-snug">
                    Build a department where curiosity has somewhere to go.
                  </h2>
                </div>
                <p className="mt-6 pt-6 border-t border-[#D4CEBF] text-sm text-[#071A33]/75 leading-relaxed">
                  Every student should have immediate access to code reviews, teammates, project mentorship, and the confidence to ship things publicly.
                </p>
              </div>

              <div className="bg-[#FAF8F3] border border-[#D4CEBF] p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="mono text-[10px] font-bold uppercase text-[#315F9F] tracking-widest">
                    OUR MISSION
                  </span>
                  <h2 className="display text-3xl sm:text-4xl text-[#071A33] mt-4 font-medium leading-snug">
                    Spaces to learn beyond the syllabus.
                  </h2>
                </div>
                <p className="mt-6 pt-6 border-t border-[#D4CEBF] text-sm text-[#071A33]/75 leading-relaxed">
                  Create accessible spaces to learn cutting-edge tools, collaborate across year cohorts, showcase student research, connect with alumni, and bridge campus life with engineering careers.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Section 02: Department History & Timeline */}
        <section className="rule-section">
          <ScrollReveal>
            <SectionTitle
              index="02"
              subtitle="Department Heritage"
              title="The Department, In Brief."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 text-base sm:text-lg text-[#071A33]/80 leading-relaxed space-y-4">
                <p>
                  The Information Technology community at the School of Engineering sits inside Cochin University of Science and Technology (CUSAT), one of Kerala’s premier technical universities.
                </p>
                <p>
                  SAIT acts as the student layer around that academic core: organizing technical sessions, cultural activities, career initiatives, hackathons, and peer-led study circles.
                </p>
                <div className="pt-4 flex items-center gap-3 mono text-xs text-[#315F9F]">
                  <Compass size={16} />
                  <span>Kalamassery, Kochi · 682022</span>
                </div>
              </div>

              <div className="lg:col-span-7 divide-y divide-[#D4CEBF] border border-[#D4CEBF] bg-[#FAF8F3]">
                {milestones.map((m) => (
                  <div key={m.year} className="p-5 sm:p-6 flex items-start gap-4 hover:bg-[#EDE9DF]/50 transition-colors">
                    <span className="mono text-sm font-bold text-[#315F9F] bg-[#071A33]/5 px-2.5 py-1 border border-[#071A33]/15">
                      {m.year}
                    </span>
                    <div>
                      <h4 className="display text-xl font-medium text-[#071A33]">
                        {m.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#071A33]/70 mt-1 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Section 03: Faculty Directory */}
        <section className="rule-section">
          <ScrollReveal>
            <SectionTitle
              index="03"
              subtitle="Academic Leadership"
              title="Faculty Directory."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {faculty.map(([name, role, desc]) => (
                <div
                  key={name}
                  className="bg-[#FAF8F3] border border-[#D4CEBF] p-8 hover:shadow-editorial transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#D4CEBF]">
                      <span className="mono text-[10px] uppercase font-semibold text-[#315F9F] flex items-center gap-1.5">
                        <GraduationCap size={14} />
                        {role}
                      </span>
                      <span className="mono text-[9px] uppercase text-[#071A33]/40">SOE · IT</span>
                    </div>

                    <h3 className="display text-2xl sm:text-3xl font-medium text-[#071A33] mt-4">
                      {name}
                    </h3>
                    <p className="text-sm text-[#071A33]/70 mt-2 leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#D4CEBF]/60 flex items-center justify-between mono text-[10px] text-[#071A33]/50">
                    <span>Department Coordinator</span>
                    <span>SOE CUSAT</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Section 04: Academic Resources Index */}
        <section className="rule-section pb-24">
          <ScrollReveal>
            <SectionTitle
              index="04"
              subtitle="University Portals"
              title="Academic Resources."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resources.map((r, i) => (
                <a
                  href="https://cusat.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  key={r}
                  className="bg-[#FAF8F3] border border-[#D4CEBF] p-5 flex items-center justify-between hover:bg-[#071A33] hover:text-[#F5F2EA] transition-all group"
                >
                  <span className="flex items-center gap-3">
                    <span className="mono text-[10px] text-[#315F9F] font-bold group-hover:text-[#F5F2EA]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-medium">{r}</span>
                  </span>
                  <ArrowUpRight size={15} className="text-[#315F9F] group-hover:text-[#F5F2EA] transition-colors" />
                </a>
              ))}
            </div>
          </ScrollReveal>
        </section>
      </div>
    </main>
  );
}
