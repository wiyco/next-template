import { forwardRef } from "react";
import { tv } from "tailwind-variants";

import { cn } from "@/utils";

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

const variants = tv({
  base: "absolute inset-x-0 left-3 right-3 bottom-3 h-[clamp(fit-content,25%,5rem)] grid place-content-center px-4 py-3.5 rounded-xl overflow-clip bg-white/60 backdrop-blur-lg text-center text-neutral-900 text-sm",
});

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(variants(), className)} {...props}>
        <span className="line-clamp-2 whitespace-pre-line">{children}</span>
      </div>
    );
  }
);

CardFooter.displayName = "CardFooter";

export default CardFooter;
