import React from 'react';
import { PageHero } from '@/components/page-hero';
import { Logger } from '@/components/logger';

export default function LoggerPage() {
  return (
    <main>
      <PageHero
        kicker="Student System / 08"
        badge="Activity Verification"
        title="Log the work that happens between the headlines."
        description="Record participation in events, competitions, open-source projects, and academic activities. Data is persisted in your local browser session."
      />

      <div className="container-grid py-12 md:py-16 pb-24">
        <Logger />
      </div>
    </main>
  );
}
