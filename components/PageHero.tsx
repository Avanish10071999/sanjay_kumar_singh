type PageHeroProps = {
  title: string;
  eyebrow: string;
  description: string;
};

export function PageHero({ title, eyebrow, description }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-white">
      <div className="page-band py-16">
        <p className="section-kicker">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black tracking-normal text-ink">{title}</h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-ink/80">{description}</p>
      </div>
    </section>
  );
}
