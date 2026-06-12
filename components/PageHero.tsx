type PageHeroProps = {
  title: string;
  eyebrow: string;
  description: string;
};

export function PageHero({ title, eyebrow, description }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-white">
      <div className="page-band py-12 sm:py-16">
        <p className="section-kicker animate-fade-up">{eyebrow}</p>
        <h1 className="animate-fade-up delay-100 mt-3 max-w-4xl text-3xl font-black tracking-normal text-ink sm:text-4xl lg:text-5xl leading-tight">
          {title}
        </h1>
        <p className="animate-fade-up delay-200 mt-5 max-w-3xl text-base leading-8 text-ink/75 sm:text-lg sm:leading-9">
          {description}
        </p>
      </div>
    </section>
  );
}
