import type { Metadata } from "next";
import StructuredData from "./components/StructuredData";

import {
  Cormorant_Garamond,
  Inter,
  Noto_Sans_Devanagari,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seeratmemories.vercel.app"),

  title: "SEERAT | 3D Hand & Foot Casting Studio in Delhi NCR",

  description:
    "SEERAT creates handcrafted 3D hand and foot casts, couple sculptures, family keepsakes, baby casts, memory frames and personalized sculptures in Delhi NCR.",

  verification: {
    google: "cv_R3dN63mJBt8Ziv_16eIu9Xt9Rl2Fw6Du5eyjlUfI",
  },

  keywords: [
    // Brand
    "SEERAT",
    "Seerat memories",
    "Seerat casting",

    // Core services
    "3D hand casting",
    "3D foot casting",
    "hand casting",
    "foot casting",
    "hand and foot casting",
    "3D casting studio",
    "hand casting studio",
    "3D hand sculpture",
    "3D foot sculpture",

    // Location
    "3D hand casting Delhi",
    "3D hand casting Delhi NCR",
    "3D foot casting Delhi",
    "hand casting Delhi",
    "hand casting Delhi NCR",
    "3D casting studio Delhi",
    "hand casting studio Delhi",
    "hand casting Kundli",
    "hand casting Sonepat",

    // Couples & weddings
    "couple hand casting",
    "couple hand casting Delhi",
    "couple 3D hand sculpture",
    "wedding hand casting",
    "wedding keepsake",
    "anniversary keepsake",

    // Family & children
    "family hand casting",
    "parent child hand casting",
    "baby hand casting",
    "baby hand casting Delhi",

    // Gifts & memories
    "personalized hand casting",
    "custom hand sculpture",
    "memory casting",
    "memory keepsake",
    "personalized 3D sculpture",
    "couple gift",
    "unique wedding gift",
    "family keepsake",
    "memories",
    "preserve",
    "preserve memories",

    // General
    "3D hand casting India",
    "3D foot casting India",
    "hand casting near me",
    "3D hand casting near me",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "SEERAT | 3D Hand & Foot Casting Studio in Delhi NCR",

    description:
      "Preserve the moments that matter with handcrafted 3D hand and foot casting, couple sculptures, family keepsakes and personalized memories.",

    url: "https://seeratmemories.vercel.app",

    siteName: "SEERAT",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "/seerat-og.png",
        width: 1200,
        height: 630,
        alt: "SEERAT — Handcrafted 3D Hand and Foot Casting",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "SEERAT | 3D Hand & Foot Casting Studio",

    description:
      "Preserve the moments that matter with handcrafted 3D hand and foot casting in Delhi NCR.",

    images: ["/seerat-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${inter.variable} ${devanagari.variable}`}
      >
          <StructuredData />

        {children}
      </body>
    </html>
  );
}