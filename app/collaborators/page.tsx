import { PageHero } from "@/components/PageHero";
import { collaborators } from "@/lib/site-data";

export default function CollaboratorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Collaborators"
        title="Research collaborators across AI, healthcare, IoT, and biometrics."
        description="Names below are drawn from recurring co-authorship and project context in the biodata and can be refined into profiles later."
      />
      <section className="page-band py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collaborators.map((name) => (
            <article key={name} className="content-card">
              <h2 className="text-2xl font-black text-ink">{name}</h2>
              <p className="mt-3 text-base text-ink/70">Collaborative research and publications</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
