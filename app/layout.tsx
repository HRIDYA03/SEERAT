import type { Metadata } from "next";
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
  title: "SEERAT — हर स्पर्श में एक कहानी",
  description:
    "Preserve the moments that matter with handcrafted 3D hand and foot casting by SEERAT.",

  keywords: [
    "3D hand casting",
    "3D foot casting",
    "hand casting India",
    "couple hand casting",
    "baby hand casting",
    "memory casting",
    "SEERAT",
  ],

  openGraph: {
    title: "SEERAT — हर स्पर्श में एक कहानी",
    description:
      "Preserve the moments that matter with handcrafted 3D hand and foot casting.",
    siteName: "SEERAT",
    type: "website",
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
    title: "SEERAT — हर स्पर्श में एक कहानी",
    description:
      "Preserve the moments that matter with handcrafted 3D hand and foot casting.",
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
        {children}
      </body>
    </html>
  );
}