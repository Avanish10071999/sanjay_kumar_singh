import { PageHero } from "@/components/PageHero";
import { SectionList } from "@/components/SectionList";
import { books, profile } from "@/lib/site-data";

const resourceLinks = [
  `Contact: ${profile.email}`,
  "Department: Computer Science & Engineering, IIT (BHU), Varanasi",
  "Research materials can include publications, datasets, software links, and course pages as they become available."
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Books, edited volumes, and research resources."
        description="A focused resources page for publications, edited books, contact information, and future downloadable research or teaching materials."
      />
      <SectionList title="Books Edited" items={books} />
      <SectionList title="Useful Links" items={resourceLinks} />
    </>
  );
}
