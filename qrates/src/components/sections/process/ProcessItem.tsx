import ItemHeading from "../../text/ItemHeading";
import Paragraph from "../../text/Paragraph";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

type ProcessItemProps = {
  id: number;
  heading: string;
  description: string;
  bg: string;
  link: string;
  badge: string;
  imgSrc: string;
};

export default function ProcessItem({
  id,
  heading,
  description,
  bg,
  link,
  badge,
  imgSrc,
}: ProcessItemProps) {
  return (
    <div
      className={cn(
        bg,
        "flex-grow border-black",
        id > 1 ? "border-l" : "border-r"
      )}
    >
      <div className="flex flex-col items-center max-w-lg gap-10 px-6 py-20 mx-auto xl:px-0">
        <Badge>{badge}</Badge>
        <ItemHeading>{heading}</ItemHeading>
        <Paragraph className="text-center">{description}</Paragraph>
        <AspectRatio ratio={4 / 3} className="relative inset-0 w-full">
          <img
            src={imgSrc}
            width={6000}
            height={4359}
            alt="PROCESS ILLUSTRATION"
            className="absolute object-contain w-full h-full"
          />
        </AspectRatio>
        <Button className="px-20 py-6 rounded-full md:text-base" asChild>
          <Link href={link}> LEARN MORE</Link>
        </Button>
      </div>
    </div>
  );
}
