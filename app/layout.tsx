import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider} from "./provider";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata: Metadata = {
  title: "Lucian's Portfolio",
  description: "A modern E-Portfolio",
  icons: {
    icon: "/public/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="32x32" type='image/png' href="/public/favicon.ico" />
      </head>
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
