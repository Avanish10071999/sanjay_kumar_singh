import { PageHero } from "@/components/PageHero";
import { collaborators } from "@/lib/site-data";

export default function CollaboratorsPage() {
  const initials = (name: string) =>
    name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

  return (
    <>
      <PageHero
        eyebrow="Collaborators"
        title="Research collaborators across AI, healthcare, IoT, and biometrics."
        description="Recurring co-authors and project collaborators from Prof. Singh's research network."
      />
      <section className="page-band py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collaborators.map((name, i) => (
            <article
              key={name}
              className={`animate-fade-up delay-${Math.min((i % 4 + 1) * 100, 400)} group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-base font-black text-accent transition-all group-hover:bg-accent group-hover:text-white sm:h-14 sm:w-14 sm:text-lg">
                {initials(name)}
              </div>
              <div>
                <h2 className="text-base font-black text-ink group-hover:text-accent transition-colors sm:text-lg">
                  {name}
                </h2>
                <p className="mt-0.5 text-xs text-ink/55 sm:text-sm">Research collaborator</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
