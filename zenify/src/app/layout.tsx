import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const siteFont = Figtree({
  subsets: ["latin"],
  preload: true,
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Zenify",
  description:
    "A personalized approach to wellness with adaptive AI tracking that tailors routines based on personal goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased ${siteFont.className} min-h-screen flex flex-col`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
