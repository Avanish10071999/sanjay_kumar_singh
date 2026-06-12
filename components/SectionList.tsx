type SectionListProps = {
  title: string;
  items: string[];
};

export function SectionList({ title, items }: SectionListProps) {
  return (
    <section className="page-band py-12">
      <h2 className="section-title">{title}</h2>
      <div className="mt-7 rounded-2xl border border-line bg-white shadow-soft overflow-hidden">
        <ul className="divide-y divide-line">
          {items.map((item, i) => (
            <li
              key={item}
              className="group flex items-start gap-4 px-6 py-5 transition-colors duration-200 hover:bg-accent/5 sm:px-8"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-line text-xs font-black text-ink/60 transition-all group-hover:bg-accent group-hover:text-white">
                {i + 1}
              </span>
              <span className="text-base leading-7 text-ink/85 sm:text-lg sm:leading-8">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
