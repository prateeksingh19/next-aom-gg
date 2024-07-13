import type { Metadata } from "next";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Age of Mythology Stats",
  description: "Created by FitzBro",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className="dark">
        <head />

        <body className={cn("min-h-screen bg-background antialiased")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
