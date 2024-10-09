"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

/** @see {@link https://nextui.org/docs/guide/installation#manual-installation} */
/** @see {@link https://github.com/pacocoursey/next-themes} */

export function Providers(props: {
  children: React.ReactNode;
  nextThemeProviderProps?: Omit<
    React.ComponentProps<typeof NextThemeProvider>,
    "children"
  >;
  nextUIProviderProps?: Omit<
    React.ComponentProps<typeof NextUIProvider>,
    "children"
  >;
}) {
  return (
    <NextUIProvider {...props.nextUIProviderProps}>
      <NextThemeProvider {...props.nextThemeProviderProps}>
        {props.children}
      </NextThemeProvider>
    </NextUIProvider>
  );
}
