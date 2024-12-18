import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/block/navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import QueryProvider from "@/providers/query-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nextflix - Home",
  description: "Next.js movie application powered by TMDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="fav icon" href="/favicon.svg" type="image/svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <Navbar />
            <main className="min-h-[calc(100vh-64px)] mt-16">{children}</main>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
