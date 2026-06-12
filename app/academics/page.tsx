import { PageHero } from "@/components/PageHero";
import { SectionList } from "@/components/SectionList";
import {
  administration,
  administrationOutside,
  experience,
  societies,
  academicQualifications,
  otherQualifications,
  memberships,
  subjectsTaught
} from "@/lib/site-data";

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Teaching, leadership, and academic service at IIT (BHU)."
        description="Academic appointments, qualifications, departmental leadership, committee service, and professional society memberships."
      />

      {/* Qualifications */}
      <section className="page-band pt-14 pb-4">
        <div className="grid gap-6 sm:grid-cols-3">
          {/* Academic Degrees */}
          <div className="rounded-2xl border border-line bg-white p-6 shadow-soft">
            <h2 className="section-kicker mb-4">Academic Degrees</h2>
            <ul className="space-y-3">
              {academicQualifications.map((q) => (
                <li key={q} className="flex items-start gap-3 text-base text-ink/85">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {q}
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="rounded-2xl border border-line bg-white p-6 shadow-soft">
            <h2 className="section-kicker mb-4">Certifications</h2>
            <ul className="space-y-3">
              {otherQualifications.map((q) => (
                <li key={q} className="flex items-start gap-3 text-base text-ink/85">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-moss" />
                  {q}
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects Taught */}
          <div className="rounded-2xl border border-line bg-white p-6 shadow-soft">
            <h2 className="section-kicker mb-4">Subjects Taught</h2>
            <ul className="space-y-3">
              {subjectsTaught.map((s) => (
                <li key={s} className="flex items-start gap-3 text-base text-ink/85">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-ink/40" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SectionList title="Academic & Industrial Experience" items={experience} />

      {/* Memberships */}
      <section className="page-band pb-12">
        <h2 className="section-title">Professional Memberships</h2>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {memberships.map((m, i) => (
            <div
              key={m}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition-all hover:border-accent hover:-translate-y-1"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-black text-accent transition-all group-hover:bg-accent group-hover:text-white">
                {["IEEE", "ACM", "CSI", "ISTE"][i]}
              </span>
              <span className="text-base font-semibold text-ink/85">{m}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Administrative — split into two groups */}
      <section className="bg-white py-14">
        <div className="page-band">
          <h2 className="section-title">Administrative Responsibilities</h2>
          <p className="mt-2 text-sm font-bold uppercase tracking-widest text-moss">At Institute Level</p>
          <div className="mt-6 rounded-2xl border border-line overflow-hidden shadow-soft">
            <ul className="divide-y divide-line">
              {administration.map((item, i) => (
                <li key={item} className="group flex items-start gap-4 px-6 py-4 transition-colors hover:bg-accent/5 sm:px-8">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-line text-xs font-black text-ink/60 transition-all group-hover:bg-accent group-hover:text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-7 text-ink/85 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 text-sm font-bold uppercase tracking-widest text-moss">Outside Institute Level</p>
          <div className="mt-6 rounded-2xl border border-line overflow-hidden shadow-soft">
            <ul className="divide-y divide-line">
              {administrationOutside.map((item, i) => (
                <li key={item} className="group flex items-start gap-4 px-6 py-4 transition-colors hover:bg-accent/5 sm:px-8">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-line text-xs font-black text-ink/60 transition-all group-hover:bg-accent group-hover:text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-7 text-ink/85 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
