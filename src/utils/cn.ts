import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names and tailwind classes.
 * @param classNames - Class names to merge.
 * @returns Merged class names.
 */
export function cn(
  ...classNames: Parameters<typeof clsx> & Parameters<typeof twMerge>
): string {
  return twMerge(clsx(classNames));
}
