import "@/styles/globals.scss";

import type { Metadata } from "next";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "New Next.js App",
  description: "Welcome to Next.js!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Suppress hydration warning because of using `next-themes` provider.
    <html lang="en" suppressHydrationWarning>
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
