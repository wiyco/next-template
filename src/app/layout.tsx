import "@styles/globals.scss";

import type { Metadata } from "next";

import { Provider } from "./provider";

export const metadata: Metadata = {
  title: "Next.js Template",
  description:
    "Boilerplate of Next.js project with SWR, Lint, TypeScript, SASS, Tailwind, NextUI, Framer Motion, CI/CD, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Provider
          nextThemeProviderProps={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
            disableTransitionOnChange: true,
          }}
        >
          {children}
        </Provider>
      </body>
    </html>
  );
}
