"use client";

import ItemHeading from "@/components/text/ItemHeading";
import Paragraph from "@/components/text/Paragraph";
import SectionHeading from "@/components/text/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import TestimonialImg from "./TestimonialImg";
import { twMerge } from "tailwind-merge";

const testimonialItems = [
  {
    id: 1,
    author: "SOL",
    testimonial:
      "The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time.",
    img: {
      src: "/testimonials/first-testimonial.jpg",
      width: 1326,
      height: 2000,
    },
    bg: "bg-brandYellow",
  },
  {
    id: 2,
    author: "Mason Lieberman (The Real Folk Blues, 2020)",
    testimonial:
      "We hit our goal of 100 Records in the first 32 minutes. And I have to be honest, I didn't expect that. There's no world where I would have thought that we were about to sell north of 2800 copies.",
    img: {
      src: "/testimonials/second-testimonial.jpg",
      width: 1500,
      height: 2000,
    },
    bg: "bg-brandOrange",
  },
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(1);

  const testimonialMenuEl = testimonialItems.map(({ id }) => {
    return (
      <Button
        className={cn(
          "rounded-full border-2 border-black py-5 px-4 font-bold",
          id !== currentTestimonial &&
            "bg-transparent text-black hover:bg-transparent"
        )}
        onClick={() => setCurrentTestimonial((prev) => id)}
        key={id}
      >
        {id}
      </Button>
    );
  });

  const testimonialObj = testimonialItems.find((item) => {
    return item.id === currentTestimonial;
  });

  const author = testimonialObj?.author;
  const testimonial = testimonialObj?.testimonial;
  const imgObj = testimonialObj?.img;
  const bgColor = testimonialObj?.bg;

  return (
    <section
      className={twMerge(
        "flex flex-col-reverse w-full xl:flex-row min-h-[90vh] border-black border-y-2 xl:px-0 xl:py-0 px-8 py-10",
        bgColor
      )}
    >
      <SectionHeading className="sr-only">Testimonials</SectionHeading>
      <div
        className={twMerge(
          "relative flex items-center flex-1 py-32 xl:border-r xl:border-black",
          bgColor
        )}
      >
        <div className="xl:px-8">
          <Badge className="absolute top-10 xl:left-8">ARTISTS ON QRATES</Badge>
          <div className="flex flex-col max-w-screen-lg gap-8">
            <ItemHeading className="text-lg sm:text-3xl">
              {`“${testimonial}”`}
            </ItemHeading>
            <Paragraph className="font-bold">
              -<span className="underline">{author}</span>
            </Paragraph>
          </div>
          <div className="absolute flex gap-2 bottom-10 xl:left-8">
            {testimonialMenuEl}
          </div>
        </div>
      </div>
      <div className="xl:border-l xl:border-black relative inset-0 flex-1 overflow-hidden min-h-[50vh] xl:max-w-full xl:max-h-[90vh] xl:border-0 border-black border-2">
        <TestimonialImg
          src={imgObj?.src}
          width={imgObj?.width}
          height={imgObj?.width}
        />
      </div>
    </section>
  );
}
