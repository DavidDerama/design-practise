import ItemHeading from "@/components/text/ItemHeading";
import Paragraph from "@/components/text/Paragraph";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

type SupportItemProps = {
  id: number;
  heading: string;
  description: string;
  bg: string;
  badge: string;
  img: {
    src: string;
    width: number;
    height: number;
  };
};

export default function SupportItem({
  heading,
  description,
  bg,
  badge,
  img,
  id,
}: SupportItemProps) {
  const { src, width, height } = img;

  return (
    <div
      className={cn(
        "pt-8 px-10 pb-24 xl:flex-1",
        bg,
        id > 1 ? "text-black" : "text-white"
      )}
    >
      <div className="flex flex-col items-center gap-20 mx-auto">
        <div className="w-full">
          <AspectRatio ratio={16 / 9} className="relative inset-0">
            <Image
              alt="SUPPORT IMAGE"
              width={width}
              height={height}
              className="absolute object-cover w-full h-full border-2 border-black"
              src={src}
            />
          </AspectRatio>
        </div>
        <div className="flex flex-col items-center max-w-xl gap-6 text-center">
          <Badge>{badge}</Badge>
          <ItemHeading className="max-w-sm">{heading}</ItemHeading>
          <Paragraph>{description}</Paragraph>
        </div>
      </div>
    </div>
  );
}
