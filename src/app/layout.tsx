import "@/styles/globals.scss";

import type { Metadata } from "next";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Next.js Template",
  description:
    "Boilerplate of Next.js project with Lint, TypeScript, SASS, Tailwind, NextUI, Framer Motion, React Hook Form, Zod, SWR, Vitest, Storybook and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Providers
          nextThemeProviderProps={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
            disableTransitionOnChange: true,
          }}
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
