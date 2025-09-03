import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

type DisplayVinylProps = {
  id?: number;
  src?: string;
  width?: number;
  height?: number;
};

export default function DisplayVinyl({
  src,
  height,
  width,
}: DisplayVinylProps) {
  return (
    src && (
      <div className="w-[40%] relative">
        <div className="absolute z-50 -top-12 xl:-top-14 -right-[70%] xl:-right-[50%]">
          <div className="relative inset-0 xl:size-52 size-24">
            <img
              width={4049}
              height={5316}
              alt="LARGE CTA DECORATION"
              src={"/large-cta/large-cta-decoration.png"}
              className="absolute object-contain w-full h-full"
            />
          </div>
        </div>
        <AspectRatio ratio={4 / 3} className="relative inset-0">
          <Image
            src={src}
            width={height}
            height={width}
            alt={"VINYL DISPLAY"}
            className="absolute object-contain w-full h-full"
          />
        </AspectRatio>
      </div>
    )
  );
}
