import Image from "next/image";
import PageHeading from "../text/PageHeading";
import SectionDescription from "../text/SectionDescription";
import { Badge } from "../ui/badge";
import Section from "./Section";

export default function Hero() {
  return (
    <div>
      <Section
        spacing="base"
        className="flex items-start justify-between min-h-[180vh] relative"
      >
        <div className="flex flex-col items-start gap-8 mt-32 max-w-96">
          <Badge className="px-4 py-2 text-sm font-bold text-black uppercase bg-transparent border-2 border-black rounded-none">
            WHY CRATES?
          </Badge>
          <PageHeading>Your music on vinyl. Without the barriers.</PageHeading>
          <SectionDescription>
            Full-service pressing, a global retail network, customer support —
            and you keep up to 85% of profits. ↓
          </SectionDescription>
        </div>
        <Image
          width={1200}
          height={1600}
          alt="HERO IMAGE"
          className="absolute max-w-screen-sm border-2 border-black right-20 rotate-12"
          src="/hero.png"
        />
        <Image
          width={1200}
          height={1600}
          alt="SECOND HERO IMAGE"
          className="absolute max-w-screen-sm border-2 border-black bottom-28 -rotate-12 left-64"
          src="/second-hero.png"
        />
        <div className="absolute overflow-visible right-56 bottom-64 h-80">
          <Image
            alt="HERO ILLUSTRATION"
            width={464}
            height={514}
            src={"/hero-illustration.png"}
            className="object-cover w-full h-full"
          />
        </div>
      </Section>
    </div>
  );
}
