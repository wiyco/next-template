import Image from "next/image";
import { forwardRef } from "react";
import { tv } from "tailwind-variants";

import { cn } from "@/utils";

type AlignHorizontal = "left" | "center" | "right";
type AlignVertical = "top" | "center" | "bottom";

/**
 * Allow `center` alignment for either `horizontal` or `vertical`, but not both.
 *
 * @see {@link https://tailwindcss.com/docs/object-position | Tailwind CSS: `object-position`}
 */
export type AlignOptions =
  | {
      horizontal?: "center";
      vertical?: Exclude<AlignVertical, "center">;
    }
  | {
      horizontal?: Exclude<AlignHorizontal, "center">;
      vertical?: "center";
    }
  | {
      horizontal?: Exclude<AlignHorizontal, "center">;
      vertical?: Exclude<AlignVertical, "center">;
    };

export interface CardImageProps
  extends React.ComponentPropsWithoutRef<typeof Image> {
  align?: AlignOptions;
}

const variants = tv({
  base: "object-cover",
  variants: {
    horizontal: {
      left: "object-left",
      center: "object-center",
      right: "object-right",
    },
    vertical: {
      top: "object-top",
      center: "object-center",
      bottom: "object-bottom",
    },
  },
  defaultVariants: {
    horizontal: "center",
  },
  compoundVariants: [
    {
      horizontal: "left",
      vertical: "top",
      className: "object-left-top",
    },
    {
      horizontal: "left",
      vertical: "bottom",
      className: "object-left-bottom",
    },
    {
      horizontal: "right",
      vertical: "top",
      className: "object-right-top",
    },
    {
      horizontal: "right",
      vertical: "bottom",
      className: "object-right-bottom",
    },
  ],
});

const CardImage = forwardRef<HTMLImageElement, CardImageProps>(
  ({ className, src, alt, align, ...props }, ref) => {
    return (
      <Image
        ref={ref}
        className={cn(
          variants({
            horizontal: align?.horizontal,
            vertical: align?.vertical,
          }),
          className
        )}
        src={src}
        alt={alt}
        fill
        {...props}
      />
    );
  }
);

CardImage.displayName = "CardImage";

export default CardImage;
