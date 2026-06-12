import { PageHero } from "@/components/PageHero";
import {
  researchAreas,
  ongoingProjects,
  completedProjects,
  patentsList,
  guestEditorships,
  professionalActivities,
  journalPublications,
  bookChapters,
  books
} from "@/lib/site-data";

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="AI, biometrics, healthcare computing, and secure intelligent systems."
        description="Sponsored projects, patents, publications, and professional activities of Prof. Sanjay Kumar Singh."
      />

      {/* ── Research Areas ── */}
      <section className="page-band py-14">
        <h2 className="section-title">Research Areas</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {researchAreas.map((area, i) => (
            <article
              key={area.title}
              className={`animate-fade-up delay-${(i + 1) * 100} group rounded-2xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:border-accent hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-accent transition-all duration-300 group-hover:w-16" />
              <h3 className="text-xl font-black text-ink group-hover:text-accent transition-colors sm:text-2xl">{area.title}</h3>
              <p className="mt-3 text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Ongoing Projects ── */}
      <section className="bg-white py-14">
        <div className="page-band">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse block" />
            <h2 className="section-title">Ongoing Sponsored Projects</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-line shadow-soft">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="bg-ink text-white/70 text-xs uppercase tracking-widest">
                  <th className="px-5 py-3 text-left w-10">S.No</th>
                  <th className="px-5 py-3 text-left">Project Title</th>
                  <th className="px-5 py-3 text-left">Funding Agency</th>
                  <th className="px-5 py-3 text-right">Grant</th>
                  <th className="px-5 py-3 text-center">Duration</th>
                  <th className="px-5 py-3 text-center">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-white">
                {ongoingProjects.map((p, i) => (
                  <tr key={p.title} className="group hover:bg-accent/5 transition-colors">
                    <td className="px-5 py-4 text-ink/50 font-mono text-xs">{i + 1}</td>
                    <td className="px-5 py-4 font-semibold text-ink group-hover:text-accent transition-colors leading-6">{p.title}</td>
                    <td className="px-5 py-4 text-ink/65">{p.agency}</td>
                    <td className="px-5 py-4 text-right font-bold text-accent whitespace-nowrap">{p.cost}</td>
                    <td className="px-5 py-4 text-center text-ink/65 whitespace-nowrap">{p.duration}</td>
                    <td className="px-5 py-4 text-center">
                      <span className="rounded-full bg-accent/10 px-3 py-0.5 text-xs font-bold text-accent">PI</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Completed Projects ── */}
      <section className="page-band py-14">
        <h2 className="section-title mb-8">Completed Projects</h2>
        <div className="overflow-x-auto rounded-2xl border border-line shadow-soft">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-ink text-white/70 text-xs uppercase tracking-widest">
                <th className="px-5 py-3 text-left w-10">S.No</th>
                <th className="px-5 py-3 text-left">Project Title</th>
                <th className="px-5 py-3 text-left">Funding Agency</th>
                <th className="px-5 py-3 text-right">Grant</th>
                <th className="px-5 py-3 text-center">Duration</th>
                <th className="px-5 py-3 text-center">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line bg-white">
              {completedProjects.map((p, i) => (
                <tr key={p.title} className="group hover:bg-accent/5 transition-colors">
                  <td className="px-5 py-4 text-ink/50 font-mono text-xs">{i + 1}</td>
                  <td className="px-5 py-4 font-semibold text-ink group-hover:text-accent transition-colors leading-6">{p.title}</td>
                  <td className="px-5 py-4 text-ink/65">{p.agency}</td>
                  <td className="px-5 py-4 text-right font-bold text-moss whitespace-nowrap">{p.cost}</td>
                  <td className="px-5 py-4 text-center text-ink/65 whitespace-nowrap">{p.duration}</td>
                  <td className="px-5 py-4 text-center">
                    <span className="rounded-full bg-line px-3 py-0.5 text-xs font-bold text-ink/60">PI</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Patents ── */}
      <section className="bg-white py-14">
        <div className="page-band">
          <h2 className="section-title mb-8">Patents</h2>
          <div className="overflow-x-auto rounded-2xl border border-line shadow-soft">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="bg-ink text-white/70 text-xs uppercase tracking-widest">
                  <th className="px-5 py-3 text-left w-10">S.No</th>
                  <th className="px-5 py-3 text-left">Patent Title</th>
                  <th className="px-5 py-3 text-left">Applicant(s)</th>
                  <th className="px-5 py-3 text-left">App. No.</th>
                  <th className="px-5 py-3 text-left">Country</th>
                  <th className="px-5 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-white">
                {patentsList.map((p, i) => (
                  <tr key={p.appNo} className="group hover:bg-accent/5 transition-colors">
                    <td className="px-5 py-4 text-ink/50 font-mono text-xs">{i + 1}</td>
                    <td className="px-5 py-4 font-semibold text-ink group-hover:text-accent transition-colors leading-6">{p.title}</td>
                    <td className="px-5 py-4 text-ink/65">{p.applicants}</td>
                    <td className="px-5 py-4 font-mono text-xs text-ink/55">{p.appNo}</td>
                    <td className="px-5 py-4 text-ink/65">{p.country}</td>
                    <td className="px-5 py-4">
                      <span className={`rounded-full px-3 py-0.5 text-xs font-bold whitespace-nowrap ${
                        p.status.includes("Granted")
                          ? "bg-green-100 text-green-700"
                          : "bg-accent/10 text-accent"
                      }`}>
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Professional Activities ── */}
      <section className="page-band py-14">
        <h2 className="section-title mb-8">Professional Activities</h2>

        {/* Guest Editorships */}
        <h3 className="text-lg font-black text-ink mb-4">Guest Editor</h3>
        <div className="grid gap-4 sm:grid-cols-2 mb-10">
          {guestEditorships.map((g, i) => (
            <div
              key={g.title}
              className={`animate-fade-up delay-${(i % 4 + 1) * 100} group rounded-xl border border-line bg-white p-5 shadow-soft transition-all hover:border-accent hover:-translate-y-0.5`}
            >
              <p className="text-xs font-bold uppercase tracking-wider text-moss">{g.journal} · {g.year}</p>
              <p className="mt-2 font-semibold text-ink group-hover:text-accent transition-colors leading-snug">{g.title}</p>
            </div>
          ))}
        </div>

        {/* Other activities */}
        <h3 className="text-lg font-black text-ink mb-4">Other Activities</h3>
        <div className="rounded-2xl border border-line bg-white overflow-hidden shadow-soft">
          <ul className="divide-y divide-line">
            {professionalActivities.map((a, i) => (
              <li key={i} className="group flex items-start gap-4 px-6 py-4 transition-colors hover:bg-accent/5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-line text-xs font-black text-ink/60 group-hover:bg-accent group-hover:text-white transition-all">
                  {i + 1}
                </span>
                <span className="text-sm leading-7 text-ink/80 sm:text-base">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Journal Publications ── */}
      <section className="bg-white py-14">
        <div className="page-band">
          <h2 className="section-title mb-2">Journal Publications</h2>
          <p className="text-sm text-ink/50 mb-8">{journalPublications.length} selected entries</p>
          <div className="rounded-2xl border border-line overflow-hidden shadow-soft">
            <ul className="divide-y divide-line bg-white">
              {journalPublications.map((pub, i) => (
                <li key={i} className="group flex items-start gap-4 px-6 py-4 transition-colors hover:bg-accent/5">
                  <span className="mt-1 shrink-0 font-mono text-xs text-ink/35 w-8 text-right">{i + 1}</span>
                  <p className="text-sm leading-7 text-ink/80">{pub}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Book Chapters ── */}
      <section className="page-band py-14">
        <h2 className="section-title mb-8">Book Chapters</h2>
        <div className="rounded-2xl border border-line overflow-hidden shadow-soft">
          <ul className="divide-y divide-line bg-white">
            {bookChapters.map((ch, i) => (
              <li key={i} className="group flex items-start gap-4 px-6 py-4 transition-colors hover:bg-accent/5">
                <span className="mt-1 shrink-0 font-mono text-xs text-ink/35 w-8 text-right">{i + 1}</span>
                <p className="text-sm leading-7 text-ink/80">{ch}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Books ── */}
      <section className="bg-white py-14">
        <div className="page-band">
          <h2 className="section-title mb-8">Edited Books</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book, i) => {
              const parts = book.split(" — ");
              const authors = parts[0];
              const titlePub = parts.slice(1).join(" — ");
              return (
                <article key={i} className="group relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-soft transition-all hover:border-accent hover:shadow-xl hover:-translate-y-1">
                  <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-accent to-moss transition-all duration-500 group-hover:w-full" />
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-sm font-black text-accent group-hover:bg-accent group-hover:text-white transition-all">{i + 1}</div>
                  <p className="text-xs font-bold uppercase tracking-wider text-moss mb-2 leading-5">{authors}</p>
                  <p className="text-sm font-bold text-ink group-hover:text-accent transition-colors leading-snug">{titlePub}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
