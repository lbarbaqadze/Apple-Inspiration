import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ProfessionalFooter from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const BASE_URL = "https://apple-inspiration.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Apple Product Showcase",
    template: "%s | Apple Showcase",
  },
  description:
    "Explore the latest Apple technology and M-series power. Discover MacBooks, iPads, iPhones, iWatch and more.",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Apple Showcase",
    title: "Apple Product Showcase",
    description:
      "Explore the latest Apple technology and M-series power. Discover MacBooks, iPads, iPhones, iWatch and more.",
    images: [
      {
        url: "/bg.jpg", 
        width: 1200,
        height: 630,
        alt: "Apple Product Showcase",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Apple Product Showcase",
    description:
      "Explore the latest Apple technology and M-series power. Discover MacBooks, iPads, iPhones, iWatch and more.",
    images: ["/bg.jpg"],
  },

  keywords: ["Apple", "MacBook", "iPhone", "iPad", "M-series", "M4"],
  authors: [{ name: "Apple Showcase", url: BASE_URL }],
  creator: "Apple Showcase",
  publisher: "Apple Showcase",

  icons: {
    icon: [
      { url: "/apple.png" },
      { url: "/apple.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-dvh flex flex-col bg-[#fbfbfb] antialiased`}>
        <Navbar />
        <main className="grow w-full">
          {children}
        </main>
        <ProfessionalFooter />
      </body>
    </html>
  );
}
