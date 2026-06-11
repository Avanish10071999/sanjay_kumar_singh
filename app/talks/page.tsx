import { PageHero } from "@/components/PageHero";
import { SectionList } from "@/components/SectionList";
import { conferenceItems } from "@/lib/site-data";

export default function TalksPage() {
  return (
    <>
      <PageHero
        eyebrow="Talks"
        title="Conference contributions and academic engagements."
        description="The biodata does not list a separate invited-talk section, so this page currently highlights selected conference publications and can be expanded with invited talks, seminars, and lecture details."
      />
      <SectionList title="Selected Conference Contributions" items={conferenceItems} />
    </>
  );
}
