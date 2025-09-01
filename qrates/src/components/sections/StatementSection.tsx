import Section from "../layouts/Section";
import SectionDescription from "../text/SectionDescription";
import SectionHeading from "../text/SectionHeading";

export default function StatementSection() {
  return (
    <Section
      spacing="base"
      className="flex items-center justify-center max-w-full border-black border-y-2"
    >
      <SectionHeading className="sr-only">Statement</SectionHeading>
      <SectionDescription className="text-center">
        No matter where you’re at in your career, we’ve got a production model
        to suit you.
      </SectionDescription>
    </Section>
  );
}
