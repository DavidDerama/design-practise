import Section from "../layouts/Section";
import SectionDescription from "../text/SectionDescription";
import SectionHeading from "../text/SectionHeading";

export default function Statement() {
  return (
    <Section
      spacing="base"
      className="flex items-center justify-center max-w-full border-black border-y"
    >
      <SectionHeading className="sr-only">Statement</SectionHeading>
      <SectionDescription>
        No matter where you’re at in your career, we’ve got a production model
        to suit you.
      </SectionDescription>
    </Section>
  );
}
