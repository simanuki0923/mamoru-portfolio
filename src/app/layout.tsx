import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteConfig } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      `${siteConfig.name} | Portfolio`,

    template:
      `%s | ${siteConfig.siteName}`,
  },

  description:
    siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="flex min-h-screen flex-col">
          <Header />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}