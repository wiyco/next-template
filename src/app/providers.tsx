"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

/** @see {@link https://github.com/pacocoursey/next-themes} */

export function Providers(props: {
  children: React.ReactNode;
  nextThemeProviderProps?: Omit<
    React.ComponentProps<typeof NextThemeProvider>,
    "children"
  >;
}) {
  return (
    <NextThemeProvider {...props.nextThemeProviderProps}>
      {props.children}
    </NextThemeProvider>
  );
}
