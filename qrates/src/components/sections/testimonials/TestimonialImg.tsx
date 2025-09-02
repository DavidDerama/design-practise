import Image from "next/image";

type TestimonialImgProps = {
  src?: string;
  width?: number;
  height?: number;
};

export default function TestimonialImg({
  src,
  width,
  height,
}: TestimonialImgProps) {
  return (
    src && (
      <Image
        src={src}
        width={width}
        height={height}
        alt="TESTIMONIAL IMAGE"
        className="absolute object-cover w-full h-full"
      />
    )
  );
}
