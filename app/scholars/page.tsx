import { PageHero } from "@/components/PageHero";
import { phdScholars } from "@/lib/site-data";

const awarded = phdScholars.filter(s => s.status === "Awarded");
const inProgress = phdScholars.filter(s => s.status === "In Progress");

const scholarEmails: Record<string, string> = {
  "Ms. Ankita Chand":  "ankitachand.rs.cse24@itbhu.ac.in",
  "Ms. Anshu Kumari":  "anshukumari.rs.cse24@itbhu.ac.in",
  "Ms. Sweta Jha":     "swetajha.rs.cse25@itbhu.ac.in"
};

export default function ScholarsPage() {
  return (
    <>
      <PageHero
        eyebrow="Research Scholars"
        title="Ph.D. supervision — past and current."
        description="Prof. Sanjay Kumar Singh has supervised 24+ Ph.D. scholars at IIT (BHU) Varanasi across biometrics, AI, healthcare computing, IoT, and multimedia security."
      />

      {/* Stats bar */}
      <section className="border-b border-line bg-white py-8">
        <div className="page-band flex flex-wrap justify-center gap-8 text-center">
          <div>
            <p className="text-4xl font-black text-accent">{awarded.length}</p>
            <p className="mt-1 text-sm font-bold uppercase tracking-wide text-ink/55">Ph.D. Awarded</p>
          </div>
          <div className="w-px bg-line hidden sm:block" />
          <div>
            <p className="text-4xl font-black text-moss">{inProgress.length}</p>
            <p className="mt-1 text-sm font-bold uppercase tracking-wide text-ink/55">In Progress</p>
          </div>
          <div className="w-px bg-line hidden sm:block" />
          <div>
            <p className="text-4xl font-black text-ink">{phdScholars.length}</p>
            <p className="mt-1 text-sm font-bold uppercase tracking-wide text-ink/55">Total</p>
          </div>
        </div>
      </section>

      {/* Current / In-Progress */}
      <section className="page-band py-14">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse block" />
          <h2 className="section-title">Current Research Scholars</h2>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-line shadow-soft">
          <table className="w-full min-w-[520px] bg-white text-sm">
            <thead>
              <tr className="bg-ink text-white/70 text-xs uppercase tracking-widest">
                <th className="px-5 py-3 text-left w-12">S.No</th>
                <th className="px-5 py-3 text-left">Scholar Name</th>
                <th className="px-5 py-3 text-left">Research Interest</th>
                <th className="px-5 py-3 text-left">Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {inProgress.map((s, i) => (
                <tr key={s.name} className="group transition-colors hover:bg-accent/5">
                  <td className="px-5 py-4">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-line text-xs font-black text-ink/60 group-hover:bg-accent group-hover:text-white transition-all">
                      {i + 1}
                    </span>
                  </td>
                  <td className="px-5 py-4 font-bold text-ink group-hover:text-accent transition-colors">{s.name}</td>
                  <td className="px-5 py-4 text-ink/70">{s.area}</td>
                  <td className="px-5 py-4">
                    {scholarEmails[s.name]
                      ? <a href={`mailto:${scholarEmails[s.name]}`} className="text-accent hover:underline break-all">{scholarEmails[s.name]}</a>
                      : <span className="text-ink/40">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Awarded */}
      <section className="bg-white py-14">
        <div className="page-band">
          <h2 className="section-title mb-8">Ph.D. Awarded</h2>
          <div className="overflow-x-auto rounded-2xl border border-line shadow-soft">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="bg-ink text-white/70 text-xs uppercase tracking-widest">
                  <th className="px-5 py-3 text-left w-12">S.No</th>
                  <th className="px-5 py-3 text-left">Scholar Name</th>
                  <th className="px-5 py-3 text-left">Thesis / Research Area</th>
                  <th className="px-5 py-3 text-right w-28">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-white">
                {awarded.map((s) => (
                  <tr key={s.name} className="group transition-colors hover:bg-accent/5">
                    <td className="px-5 py-4 text-ink/50 font-mono text-xs">{String(s.sno).padStart(2, "0")}</td>
                    <td className="px-5 py-4 font-bold text-ink group-hover:text-accent transition-colors whitespace-nowrap">{s.name}</td>
                    <td className="px-5 py-4 text-ink/70 leading-6">{s.area}</td>
                    <td className="px-5 py-4 text-right">
                      <span className="inline-block rounded-full bg-accent/10 px-3 py-0.5 text-xs font-bold text-accent">
                        {s.year}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Abhinav Kumar highlight card */}
          <div className="mt-10">
            <p className="section-kicker mb-4">Notable Alumni</p>
            <div className="group relative overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-soft transition-all hover:border-accent hover:shadow-xl hover:-translate-y-1 max-w-xl">
              <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-accent to-moss transition-all duration-500 group-hover:w-full" />
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-lg font-black text-accent group-hover:bg-accent group-hover:text-white transition-all">AK</div>
              <h3 className="text-xl font-black text-ink group-hover:text-accent transition-colors">Dr. Abhinav Kumar</h3>
              <p className="mt-1 text-sm font-semibold text-moss">Medical Image Classification using ML &amp; Deep Learning • Awarded 2021</p>
              <p className="mt-4 text-sm leading-6 text-ink/65 border-t border-line pt-4">
                Assistant Professor, School of Artificial Intelligence and Data Engineering,<br />
                Indian Institute of Technology (Ropar), Rupnagar-140 001, Punjab, India
              </p>
              <div className="mt-3 flex flex-col gap-1">
                <a href="mailto:abhinavk@iitrpr.ac.in" className="text-sm text-accent hover:underline">✉ abhinavk@iitrpr.ac.in</a>
                <a href="tel:+917543008607" className="text-sm text-ink/55 hover:text-accent">☎ +91-7543008607</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
