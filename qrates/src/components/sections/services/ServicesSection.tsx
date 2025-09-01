import Section from "@/components/layouts/Section";
import Paragraph from "@/components/text/Paragraph";
import SectionHeading from "@/components/text/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import ServicesFaq from "./ServicesFaq";

export default function ServicesSection() {
  return (
    <Section
      className="flex flex-col gap-10 xl:flex-row xl:justify-between"
      spacing="base"
    >
      <div className="flex flex-col items-center max-w-2xl gap-14">
        <div className="flex flex-col items-center max-w-sm gap-4">
          <Badge>Our Services</Badge>
          <SectionHeading className="text-center">
            YOU MAKE MUSIC. <br /> WE DO THE REST.
          </SectionHeading>
        </div>
        <div className="w-[70%]">
          <AspectRatio ratio={2 / 3} className="relative inset-0">
            <Image
              alt="SERVICES IMAGE"
              src="/services/services-piano-man.jpg"
              fill
              className="object-cover w-full h-full border-2 border-black -rotate-6"
            />
          </AspectRatio>
        </div>
        <div className="flex flex-col items-center gap-6">
          <Paragraph className="text-center">
            We want you to be able to put all your energy into the creative side
            of making music. So we created a one-stop shop for everything else.
          </Paragraph>
          <Button
            className="px-20 py-6 font-bold border-2 border-black rounded-full md:text-base"
            variant={"outline"}
            asChild
          >
            <Link href={"/"}> LEARN MORE</Link>
          </Button>
        </div>
      </div>
      <ServicesFaq />
    </Section>
  );
}
