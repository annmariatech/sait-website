import React from 'react';
import { PageHero } from '@/components/page-hero';
import { PeopleGrid } from '@/components/people-grid';

export default function People() {
  return (
    <main>
      <PageHero
        kicker="Association / 02"
        badge="Elected Committee"
        title="The people behind the programme."
        description="Executive committee and student teams across technology, media, events, public relations and editorial documentation."
      />

      <div className="container-grid py-12 md:py-16 pb-24">
        <PeopleGrid />
      </div>
    </main>
  );
}
