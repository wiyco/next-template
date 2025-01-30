import { forwardRef } from "react";
import { tv } from "tailwind-variants";

import { cn } from "@/utils";

export interface CardTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  lineClamp?: 1 | 2 | 3 | 4 | 5 | 6 | "none";
}

const variants = tv({
  base: "absolute inset-0 grid place-content-center p-5 backdrop-blur text-center text-neutral-900 text-base",
});

const CardText = forwardRef<HTMLParagraphElement, CardTextProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn(variants(), className)} {...props}>
        <span className="line-clamp-3 leading-relaxed whitespace-pre-line">
          {children}
        </span>
      </p>
    );
  }
);

CardText.displayName = "CardText";

export default CardText;
