import { forwardRef } from "react";
import { tv } from "tailwind-variants";

import { cn } from "@/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  aspectRatio?: "1/1" | "4/3" | "16/9" | "19/10" | "3/4" | "9/16";
}

const variants = tv({
  base: "relative overflow-clip rounded-3xl bg-neutral-100 shadow",
  variants: {
    aspectRatio: {
      "1/1": "aspect-1/1",
      "4/3": "aspect-4/3",
      "16/9": "aspect-16/9",
      "19/10": "aspect-19/10",
      "3/4": "aspect-3/4",
      "9/16": "aspect-9/16",
    },
  },
  defaultVariants: {
    aspectRatio: "16/9",
  },
});

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, aspectRatio, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(variants({ aspectRatio }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
