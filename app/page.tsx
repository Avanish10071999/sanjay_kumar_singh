"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects, profile, recognitions, researchAreas, stats } from "@/lib/site-data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  const [activeArea, setActiveArea] = useState(0);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[88vh] overflow-hidden bg-white">
        <Image
          src={`${basePath}/images/campus-hero.png`}
          alt="IIT BHU campus"
          fill
          priority
          className="object-cover opacity-40 grayscale scale-105 transition-transform duration-[8s] hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/10" />

        <div className="page-band relative flex min-h-[88vh] items-center py-14">
          <div className="w-full max-w-2xl">
            {/* Profile card */}
            <div className="animate-fade-up rounded-2xl border border-line bg-white/90 p-6 shadow-soft backdrop-blur-sm sm:p-10">
              {/* Photo + name row */}
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
                {/* Photo — larger */}
                <div className="group shrink-0 overflow-hidden rounded-2xl border-4 border-line shadow-lg transition-all duration-300 hover:border-accent hover:shadow-xl">
                  <Image
                    src={`${basePath}/images/sk-sir.png`}
                    alt="Prof. Sanjay Kumar Singh"
                    width={176}
                    height={176}
                    className="h-36 w-36 object-cover object-top transition-transform duration-500 group-hover:scale-105 sm:h-44 sm:w-44"
                  />
                </div>

                <div className="text-center sm:text-left">
                  <span className="section-kicker block">IIT (BHU) Varanasi</span>
                  <h1 className="mt-2 text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
                    {profile.name}
                  </h1>
                  <p className="mt-2 text-base font-semibold text-accent sm:text-lg">
                    {profile.title}
                  </p>
                  <p className="mt-1 text-sm text-ink/60">{profile.department}</p>
                </div>
              </div>

              {/* Bio */}
              <p className="mt-6 text-base leading-8 text-ink/80 sm:text-lg sm:leading-9">
                {profile.summary}
              </p>

              {/* Stats pills */}
              <div className="mt-6 flex flex-wrap gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-full border border-line bg-paper px-4 py-1.5 text-center transition-all hover:border-accent hover:bg-accent/5"
                  >
                    <span className="text-lg font-black text-accent">{s.value}</span>
                    <span className="ml-1.5 text-xs font-semibold text-ink/60">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/research"
                  className="group flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-bold text-white transition-all duration-200 hover:bg-accent hover:scale-105 active:scale-95"
                >
                  See Research
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-full border-2 border-ink px-6 py-3 font-bold text-ink transition-all duration-200 hover:bg-ink hover:text-white hover:scale-105 active:scale-95"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="border-y border-line bg-white py-10">
        <div className="page-band grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((item, i) => (
            <div
              key={item.label}
              className={`animate-fade-up delay-${(i + 1) * 100} group rounded-xl border border-line p-5 text-center transition-all duration-300 hover:border-accent hover:shadow-md hover:-translate-y-1 cursor-default`}
            >
              <p className="text-4xl font-black text-accent transition-transform duration-300 group-hover:scale-110 sm:text-5xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-ink/60">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── RESEARCH OVERVIEW ── */}
      <section className="page-band py-20">
        <div className="animate-fade-up text-center">
          <span className="section-kicker">Focus Areas</span>
          <h2 className="mt-3 section-title">Research Themes</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-ink/70">{profile.focus}</p>
        </div>

        {/* Tab navigation */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {researchAreas.map((area, i) => (
            <button
              key={area.title}
              onClick={() => setActiveArea(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200
                ${activeArea === i
                  ? "bg-accent text-white shadow-md scale-105"
                  : "border border-line bg-white text-ink/70 hover:border-accent hover:text-accent hover:scale-105"
                }`}
            >
              {area.title}
            </button>
          ))}
        </div>

        {/* Active panel */}
        <div key={activeArea} className="animate-scale-in mt-8 rounded-2xl border border-accent/20 bg-white p-8 shadow-soft">
          <h3 className="text-2xl font-black text-ink sm:text-3xl">{researchAreas[activeArea].title}</h3>
          <p className="mt-4 text-lg leading-8 text-ink/75">{researchAreas[activeArea].text}</p>
          <Link
            href="/research"
            className="mt-6 inline-flex items-center gap-2 font-bold text-accent transition-all hover:gap-3"
          >
            Explore full research <span>→</span>
          </Link>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="bg-white py-20">
        <div className="page-band">
          <div className="text-center">
            <span className="section-kicker">Sponsored Work</span>
            <h2 className="mt-3 section-title">Highlighted Projects</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <article
                key={project.title}
                className={`animate-fade-up delay-${(i + 1) * 100} group relative overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:border-accent hover:shadow-xl hover:-translate-y-2 cursor-default`}
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-accent to-moss transition-all duration-500 group-hover:w-full rounded-t-2xl" />
                <span className="section-kicker block">{project.agency}</span>
                <span className="mt-1 block text-xs text-ink/50">{project.duration}</span>
                <h3 className="mt-4 text-xl font-black leading-snug text-ink group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-line pt-4">
                  <span className="rounded-full bg-paper px-3 py-1 text-xs font-semibold text-ink/70">
                    {project.role}
                  </span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                    {project.cost}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECOGNITION ── */}
      <section className="bg-ink py-20">
        <div className="page-band">
          <div className="text-center">
            <span className="section-kicker text-moss/80">Achievements</span>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Recognition & Awards</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {recognitions.map((item, i) => (
              <div
                key={item}
                className={`animate-fade-up delay-${(i + 1) * 100} group flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-accent/40 hover:bg-white/10 hover:-translate-y-1`}
              >
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent text-sm font-black group-hover:bg-accent group-hover:text-white transition-all">
                  {i + 1}
                </span>
                <p className="text-base leading-7 text-white/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="border-t border-line bg-paper py-16 text-center">
        <div className="page-band">
          <h2 className="text-2xl font-black text-ink sm:text-3xl">Interested in collaboration?</h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-ink/65 sm:text-lg">
            Reach out for research collaborations, speaking engagements, or student inquiries.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-bold text-white transition-all hover:bg-ink hover:scale-105 active:scale-95"
          >
            ✉ {profile.email}
          </a>
        </div>
      </section>
    </>
  );
}
