import { PageHero } from "@/components/PageHero";
import { books, profile } from "@/lib/site-data";

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Books, edited volumes, and research resources."
        description="Edited books and volumes authored or co-edited by Prof. Sanjay Kumar Singh."
      />

      {/* Books */}
      <section className="page-band py-14">
        <h2 className="section-title">Edited Books &amp; Volumes</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book, i) => {
            const [authors, ...rest] = book.split(" — ");
            const titlePub = rest.join(" — ");
            return (
              <article
                key={book}
                className="group relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:border-accent hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-accent to-moss transition-all duration-500 group-hover:w-full" />
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-base font-black text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  {i + 1}
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-moss mb-2">{authors}</p>
                <p className="text-base font-bold text-ink group-hover:text-accent transition-colors leading-snug">
                  {titlePub}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white py-14">
        <div className="page-band">
          <h2 className="section-title mb-8">Contact &amp; Links</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition-all hover:border-accent hover:-translate-y-1"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-lg group-hover:bg-accent group-hover:text-white transition-all">
                ✉
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-moss">Email</p>
                <p className="mt-0.5 text-sm font-semibold text-ink break-all">{profile.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-lg">
                🏛
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-moss">Department</p>
                <p className="mt-0.5 text-sm font-semibold text-ink">CSE, IIT (BHU), Varanasi</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-lg">
                📞
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-moss">Phone</p>
                <p className="mt-0.5 text-sm font-semibold text-ink">{profile.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
