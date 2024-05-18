import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classNames: (string | null | undefined)[]) {
  return twMerge(clsx(classNames));
}
