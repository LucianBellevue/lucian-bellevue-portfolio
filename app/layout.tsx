
import React from "react";
import type  Metadata  from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider} from "./provider";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });

export type Metadata = {
  title: string;
  description: string;
  icons: {
    icon: string;
  };
  image: {
    source: string;
  };
};

export const metadata: Metadata = {
  title: "Lucian's Portfolio",
  description: "A modern portfolio with some of my recent projects and experience.",
  icons: {
    icon: "/favicon.ico",
  },
  image: {
    source: "/social-img.png",
  },
} as Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
      </body>
    </html>
  );
}
