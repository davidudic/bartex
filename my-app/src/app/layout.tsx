import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BARTEX - Stavební firma a nábytek na míru | Kuchyně, koupelny, pergoly",
  description: "Specializujeme se na kompletní řešení kuchyní, koupelen, vestavěných skříní na míru a pergol. Od výměry po realizaci. Kvalitní stavební práce a nábytek na zakázku.",
  keywords: "stavební firma, kuchyně na míru, koupelny, vestavěné skříně, pergoly, ploty, nábytek na zakázku, Bartex",
  robots: "index, follow",
  openGraph: {
    title: "BARTEX - Stavební firma a nábytek na míru",
    description: "Specializujeme se na kompletní řešení kuchyní, koupelen, vestavěných skříní na míru a pergol. Od výměry po realizaci.",
    type: "website",
    locale: "cs_CZ",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
