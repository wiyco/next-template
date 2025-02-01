"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { ComponentProps, ReactNode } from "react";

/** @see {@link https://github.com/pacocoursey/next-themes} */

export function Providers({
  children,
  ...props
}: {
  children: ReactNode;
  nextThemeProviderProps?: Omit<
    ComponentProps<typeof NextThemeProvider>,
    "children"
  >;
}) {
  return (
    <NextThemeProvider {...props.nextThemeProviderProps}>
      {children}
    </NextThemeProvider>
  );
}
