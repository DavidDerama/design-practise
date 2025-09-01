import ItemHeading from "@/components/text/ItemHeading";
import Paragraph from "@/components/text/Paragraph";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type ServiceGroupProps = {
  groupName: string;
  groupItems: {
    id: number;
    name: string;
    description: string;
    link: string;
  }[];
};

export default function ServiceGroup({
  groupName,
  groupItems,
}: ServiceGroupProps) {
  const groupItemsEl = groupItems.map(({ id, name, description, link }) => {
    return (
      <AccordionItem
        value={`item-${id}`}
        className={twMerge(
          "py-2 px-7",
          id > 1 && "border-t-2 border-b-0 border-black"
        )}
        key={name}
      >
        <AccordionTrigger className="text-lg font-bold">
          {name}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-5 text-balance">
          <Paragraph>{description}</Paragraph>
          <Link
            href={link}
            className="flex items-center gap-0 mr-auto text-base border-b border-black"
          >
            Learn More
            <ArrowRight className="h-4" />
          </Link>
        </AccordionContent>
      </AccordionItem>
    );
  });

  return (
    <div>
      <div className="w-full pt-5 text-white bg-black pb-14 px-7">
        <ItemHeading className="text-2xl xl:text-2xl">{groupName}</ItemHeading>
      </div>
      <Accordion type="multiple" className="w-full">
        {groupItemsEl}
      </Accordion>
    </div>
  );
}
