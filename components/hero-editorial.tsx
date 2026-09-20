'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Compass } from 'lucide-react';
import { useMouseParallax } from './interactive/use-mouse-parallax';
import { MagneticButton } from './interactive/magnetic-button';
import { MouseParticles } from './interactive/mouse-particles';

export function HeroEditorial() {
  const parallax = useMouseParallax(14);
  const [isVisualHovered, setIsVisualHovered] = useState(false);

  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14 md:pt-20 pb-16 md:pb-24 border-b border-[#D4CEBF]">
      {/* Editorial Grid Background Accents */}
      <MouseParticles />

      <div className="container-grid relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column: Asymmetric Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* 1. Small Metadata Label: SAIT / 2026 */}
            <div className="hero-reveal-1 flex items-center gap-3 text-[#315F9F]">
              <span className="inline-flex items-center gap-1.5 mono text-[11px] font-semibold tracking-[0.22em] uppercase px-2.5 py-1 bg-[#071A33]/5 border border-[#071A33]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#315F9F] animate-pulse" />
                SAIT / 2026
              </span>
              <span className="mono text-[10px] uppercase tracking-widest text-[#071A33]/60 hidden sm:inline-block">
                SOE · CUSAT
              </span>
            </div>

            {/* 2. Huge Headline with Sequential Reveal */}
            <div className="mt-8 sm:mt-10">
              <h1 className="display text-[clamp(3.8rem,9vw,8.4rem)] leading-[0.88] tracking-[-0.045em] text-[#071A33] font-normal select-none">
                <span className="block hero-reveal-2 overflow-hidden">
                  <span className="block italic font-light font-editorial text-[#071A33]/90">Students’</span>
                </span>
                <span className="block hero-reveal-3 overflow-visible mt-1 sm:mt-2 pt-2">
                  <span className="block font-semibold tracking-[-0.05em]">Association</span>
                </span>
                <span className="block hero-reveal-4 overflow-visible mt-1 sm:mt-2 pt-1 text-[#315F9F]">
                  <span className="block font-normal">of IT<span className="text-[#071A33]">.</span></span>
                </span>
              </h1>
            </div>

            {/* 3. Short Description */}
            <div className="hero-reveal-5 mt-8 sm:mt-10 max-w-xl">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#071A33]/85 font-sans font-normal">
                A student-led platform for the Information Technology community at the School of Engineering, CUSAT — where people build, publish, compete and find their people.
              </p>

              {/* Editorial Annotation & Coordinates */}
              <div className="mt-6 pt-5 border-t border-[#D4CEBF] flex flex-wrap items-center justify-between gap-4 mono text-[10px] uppercase text-[#071A33]/65">
                <span className="flex items-center gap-1.5">
                  <Compass size={13} className="text-[#315F9F]" />
                  10.044° N, 76.328° E · Kalamassery
                </span>
                <span>Established 2014</span>
              </div>

              {/* 4. Primary CTA with Magnetic Attraction */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton href="/notifications" ariaLabel="Explore Updates">
                  <span className="btn btn-navy text-xs sm:text-sm px-7 py-3.5 group flex items-center gap-3 shadow-md">
                    <span>Explore Updates</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </span>
                </MagneticButton>

                <MagneticButton href="/events" ariaLabel="View Calendar">
                  <span className="btn btn-outline text-xs sm:text-sm px-6 py-3.5 group flex items-center gap-2">
                    <span>Calendar</span>
                    <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#315F9F]" />
                  </span>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Right Column: Large Interactive Visual Composition */}
          <div className="lg:col-span-5 relative hero-reveal-6 mt-6 lg:mt-0">
            <div
              className="relative p-6 sm:p-8 bg-[#FAF8F3] border border-[#D4CEBF] shadow-editorial transition-all duration-500 group"
              onMouseEnter={() => setIsVisualHovered(true)}
              onMouseLeave={() => setIsVisualHovered(false)}
              style={{
                transform: `translate3d(${parallax.x * 0.7}px, ${parallax.y * 0.7}px, 0)`,
              }}
            >
              {/* Subtle top metadata stamp */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D4CEBF] mono text-[9px] uppercase tracking-widest text-[#071A33]/60">
                <span>Ref: IT/SOE/SAIT</span>
                <span>Dept. Archive</span>
              </div>

              {/* Central Organic Visual Stage */}
              <div className="relative aspect-square w-full max-w-[380px] mx-auto bg-[#071A33] overflow-hidden flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-[1.015]">
                {/* Decorative Thin Orbit Circles */}
                <div
                  className="absolute inset-4 border border-[#315F9F]/30 rounded-full animate-slow-spin pointer-events-none"
                  style={{
                    transform: `rotate(${parallax.x * 2}deg)`,
                  }}
                />
                <div
                  className="absolute inset-10 border border-dashed border-[#F5F2EA]/20 rounded-full animate-reverse-slow-spin pointer-events-none"
                />

                {/* Rotating Outer Technical Ring (Actual Asset) */}
                <div className="absolute inset-2 flex items-center justify-center pointer-events-none opacity-80 animate-slow-spin">
                  <Image
                    src="/assets/sait-logo-outer.svg"
                    alt="SAIT Technical Orbit"
                    width={340}
                    height={340}
                    className="hero-outer-logo w-full h-full object-contain opacity-90"
                    priority
                  />
                </div>

                {/* Real SAIT Crest Logo (Actual Asset) */}
                <div
                  className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 p-4 rounded-full bg-[#F5F2EA] flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  style={{
                    transform: `translate3d(${parallax.x * -0.5}px, ${parallax.y * -0.5}px, 0)`,
                  }}
                >
                  <Image
                    src="/assets/sait-logo-crest.svg"
                    alt="Official SAIT Crest"
                    width={140}
                    height={140}
                    className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
                    priority
                  />
                </div>

                {/* Corner Technical Marks */}
                <span className="absolute top-2 left-2 mono text-[8px] text-[#F5F2EA]/40">01//INIT</span>
                <span className="absolute bottom-2 right-2 mono text-[8px] text-[#F5F2EA]/40">CUSAT.AC.IN</span>
                <span className="absolute bottom-2 left-2 mono text-[8px] text-[#F5F2EA]/40">SOE-IT</span>
              </div>

              {/* Department caption and About link */}
              <div
                className="mt-6 bg-[#EDE9DF] border border-[#D4CEBF] p-4 transition-all duration-300"
                style={{
                  transform: isVisualHovered ? 'translateY(-4px)' : 'translateY(0)',
                }}
              >
                <p className="display text-lg text-[#071A33] font-medium leading-snug">
                  Department of Information Technology
                </p>
                <Link href="/about" className="mt-3 inline-flex mono text-[10px] uppercase text-[#315F9F] hover:underline items-center gap-1">
                  About SAIT →
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
