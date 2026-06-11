import { PageHero } from "@/components/PageHero";
import { SectionList } from "@/components/SectionList";
import { patents, projects, publications, researchAreas } from "@/lib/site-data";

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="AI, biometrics, healthcare computing, and secure intelligent systems."
        description="A research profile built from sponsored projects, patents, and selected publications listed in Prof. S. K. Singh's biodata."
      />

      <section className="page-band py-14">
        <h2 className="section-title">Research Areas</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {researchAreas.map((area) => (
            <article key={area.title} className="content-card">
              <h3 className="text-2xl font-black text-ink">{area.title}</h3>
              <p className="mt-3 text-lg leading-8 text-ink/75">{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="page-band">
          <h2 className="section-title">Sponsored Projects</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="content-card">
                <p className="section-kicker">{project.agency}</p>
                <h3 className="mt-4 text-2xl font-black text-ink">{project.title}</h3>
                <dl className="mt-6 grid gap-3 text-base text-ink/75">
                  <div className="flex justify-between gap-4 border-b border-line pb-3">
                    <dt className="font-bold">Duration</dt>
                    <dd>{project.duration}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-line pb-3">
                    <dt className="font-bold">Role</dt>
                    <dd>{project.role}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-bold">Cost</dt>
                    <dd>{project.cost}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionList title="Patents" items={patents} />
      <SectionList title="Selected Publications" items={publications} />
    </>
  );
}
