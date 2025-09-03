import Image from "next/image";
import PageHeading from "../text/PageHeading";
import SectionDescription from "../text/SectionDescription";
import { Badge } from "../ui/badge";
import Section from "../layouts/Section";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export default function HeroSection() {
  return (
    <Section
      spacing="base"
      className="flex items-start xl:justify-between xl:flex-row flex-col xl:gap-0 gap-20 md:min-h-[260vh] xl:min-h-[160vh]"
    >
      <div className="flex flex-col items-start max-w-screen-sm gap-8 mt-32">
        <Badge>WHY QRATES?</Badge>
        <PageHeading>Your music on vinyl. Without the barriers.</PageHeading>
        <SectionDescription>
          Full-service pressing, a global retail network, customer support — and
          you keep up to 85% of profits. ↓
        </SectionDescription>
      </div>
      <div className="relative w-full max-w-screen-xl mx-auto aspect-[3/4]">
        <div className="absolute top-0 right-[0%] w-[60%] rotate-12">
          <AspectRatio
            ratio={3 / 4}
            className="relative inset-0 border-2 border-black"
          >
            <Image
              fill
              alt="HERO IMAGE"
              src="/hero/hero.png"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[60%] -rotate-12">
          <AspectRatio
            ratio={3 / 4}
            className="relative inset-0 border-2 border-black"
          >
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="SECOND HERO IMAGE"
              className="absolute w-full h-full"
              src="/hero/second-hero.png"
              priority
            />
          </AspectRatio>
        </div>
        <div className="absolute overflow-visible bottom-[10%] right-[10%] w-[25%]">
          <img
            alt="HERO ILLUSTRATION"
            width={464}
            height={514}
            src={"/hero/hero-illustration.png"}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </Section>
  );
}
