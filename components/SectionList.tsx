type SectionListProps = {
  title: string;
  items: string[];
};

export function SectionList({ title, items }: SectionListProps) {
  return (
    <section className="page-band py-12">
      <h2 className="section-title">{title}</h2>
      <div className="mt-7 content-card">
        <ul className="grid gap-4 text-lg leading-8 text-ink/85">
          {items.map((item) => (
            <li key={item} className="border-b border-line pb-4 last:border-0 last:pb-0">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
