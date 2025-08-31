import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type PageHeadingProps = {
  children: ReactNode;
  className?: string;
};
export default function PageHeading({ children, className }: PageHeadingProps) {
  return (
    <h1
      className={cn(
        "text-4xl sm:text-6xl tracking-tight font-bold leading-[1.0]",
        className
      )}
    >
      {children}
    </h1>
  );
}
