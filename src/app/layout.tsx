import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteConfig } from "@/data/site";

import "./globals.css";

const siteUrl = "https://mamoru-portfolio.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      `${siteConfig.name} | Web Engineer Portfolio`,

    template:
      `%s | ${siteConfig.name} Portfolio`,
  },

  description:
    siteConfig.description,

  keywords: [
    "島貫 守",
    "Webエンジニア",
    "システムエンジニア",
    "フロントエンドエンジニア",
    "バックエンドエンジニア",
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
    "PHP",
    "PostgreSQL",
    "MySQL",
    "Webアプリケーション",
    "業務システム",
    "ポートフォリオ",
  ],

  authors: [
    {
      name: siteConfig.name,
      url: siteUrl,
    },
  ],

  creator:
    siteConfig.name,

  publisher:
    siteConfig.name,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",

    locale: "ja_JP",

    url: siteUrl,

    siteName:
      siteConfig.siteName,

    title:
      `${siteConfig.name} | Web Engineer Portfolio`,

    description:
      siteConfig.description,

    images: [
      {
        url: "/images/ogp.png",

        width: 1200,

        height: 630,

        alt:
          `${siteConfig.name} Web Engineer Portfolio`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      `${siteConfig.name} | Web Engineer Portfolio`,

    description:
      siteConfig.description,

    images: [
      "/images/ogp.png",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview":
        "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category:
    "technology",
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