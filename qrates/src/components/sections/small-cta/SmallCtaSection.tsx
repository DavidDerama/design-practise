import Section from "@/components/layouts/Section";
import ItemHeading from "@/components/text/ItemHeading";
import SectionHeading from "@/components/text/SectionHeading";
import Link from "next/link";

export default function SmallCtaSection() {
  return (
    <Section className="max-w-full text-white bg-black" spacing="base">
      <SectionHeading className="sr-only">Cta</SectionHeading>
      <div className="flex flex-col items-center justify-between gap-6 mx-auto xl:flex-row max-w-screen-2xl">
        <ItemHeading className="max-w-screen-md text-xl font-normal text-center sm:text-2xl xl:text-left">
          Just after straight up vinyl pressing? We do that too. Records are
          shipped in bulk to wherever you need.
        </ItemHeading>
        <Link
          href={"/"}
          className="text-xl text-center underline sm:text-2xl xl:text-left"
        >
          START A PRESS ONLY PROJECT
        </Link>
      </div>
    </Section>
  );
}
