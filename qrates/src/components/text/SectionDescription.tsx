import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionDescriptionProps = {
  children: ReactNode;
  className?: string;
};
export default function SectionDescription({
  children,
  className,
}: SectionDescriptionProps) {
  return (
    <p className={cn("text-xl leading-relaxed sm:text-2xl", className)}>
      {children}
    </p>
  );
}
