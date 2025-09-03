import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionProps = {
  className?: string;
  children: ReactNode;
  spacing?: "sm" | "base" | "lg";
  outerLayer?: boolean;
  outerClassName?: string;
};

export default function Section({
  children,
  className,
  spacing,
  outerLayer = false,
  outerClassName,
}: SectionProps) {
  if (!outerLayer) {
    return (
      <section
        className={cn(
          "w-full mx-auto max-w-screen-2xl px-6 2xl:px-0",
          spacing === "sm" && "py-10",
          spacing === "base" && "py-20",
          spacing === "lg" && "py-28",
          className
        )}
      >
        {children}
      </section>
    );
  }

  return (
    <section className={outerClassName}>
      <div
        className={cn(
          "w-full mx-auto max-w-screen-2xl px-6 2xl:px-0",
          spacing === "sm" && "py-10",
          spacing === "base" && "py-20",
          spacing === "lg" && "py-28",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}
