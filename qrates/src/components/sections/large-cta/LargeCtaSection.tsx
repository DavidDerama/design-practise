"use client";
import Section from "@/components/layouts/Section";
import Paragraph from "@/components/text/Paragraph";
import SectionHeading from "@/components/text/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import DisplayVinyl from "./DisplayVinyl";
import { useEffect, useState } from "react";

const vinylItems = [
  { id: 1, src: "/large-cta/first-vinyl.png", width: 775, height: 440 },
  { id: 2, src: "/large-cta/second-vinyl.png", width: 776, height: 440 },
  { id: 3, src: "/large-cta/third-vinyl.png", width: 775, height: 440 },
  { id: 4, src: "/large-cta/fourth-vinyl.png", width: 775, height: 440 },
];

export default function LargeCtaSection() {
  const [currentVinyl, setCurrentVinyl] = useState<number>(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVinyl((prev) => {
        return prev < 4 ? prev + 1 : 1;
      });
    }, 1250);

    return () => clearInterval(intervalId);
  }, [currentVinyl]);

  const currentVinylObj = vinylItems.find((item) => item.id === currentVinyl);

  return (
    <Section
      outerClassName="bg-black text-white flex"
      className="flex flex-col items-center gap-14"
      spacing="base"
    >
      <div className="flex flex-col items-center max-w-screen-sm gap-6 mx-auto">
        <Badge className="text-center text-white bg-transparent border-2 border-white">
          VINYL STUDIO
        </Badge>
        <SectionHeading className="text-center">
          Make it real with Qrates Vinyl Studio
        </SectionHeading>
        <Paragraph className="text-center">
          Design the look and feel of your vinyl and use the profit calculator
          to immediately see how much your project will cost, and how much
          you’ll earn.
        </Paragraph>
      </div>
      <DisplayVinyl {...currentVinylObj} />
      <Button className="py-8 font-bold text-black rounded-full px-28 bg-brandYellow hover:bg-brandYellow">
        TRY IT NOW
      </Button>
    </Section>
  );
}
