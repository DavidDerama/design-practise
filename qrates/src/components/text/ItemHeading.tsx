import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ItemHeadingProps = {
  children: ReactNode;
  className?: string;
};
export default function ItemHeading({ children, className }: ItemHeadingProps) {
  return (
    <h3
      className={cn(
        "text-2xl sm:text-4xl tracking-tight font-bold leading-[1.0]",
        className
      )}
    >
      {children}
    </h3>
  );
}
