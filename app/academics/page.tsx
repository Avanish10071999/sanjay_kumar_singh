import { PageHero } from "@/components/PageHero";
import { SectionList } from "@/components/SectionList";
import { administration, experience, societies } from "@/lib/site-data";

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Teaching, leadership, and academic service at IIT (BHU)."
        description="This page presents academic appointments, departmental leadership, committee service, and professional society memberships from the biodata."
      />
      <SectionList title="Academic Experience" items={experience} />
      <SectionList title="Administrative Responsibilities" items={administration} />
      <SectionList title="Professional Societies" items={societies} />
    </>
  );
}
