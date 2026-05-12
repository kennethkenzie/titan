import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { FloatingNavbar } from "@/components/navigation/FloatingNavbar";
import { TitanFooter } from "@/components/layout/TitanFooter";
import { ScrollProgressBar } from "@/components/animations/ScrollProgressBar";
import { NoiseBackground } from "@/components/animations/NoiseBackground";
import { AnimatedCursor } from "@/components/animations/AnimatedCursor";
import { PageTransition } from "@/components/layout/PageTransition";

const fagoSans = localFont({
  src: [
    {
      path: "../public/fonts/FagoSans.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/FagoSans-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/FagoSans-Medium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/FagoSans-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-fago",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smari Creative — Let's move your brand.",
  description:
    "Smari Creative (c/o Tytan Group / BQ Magazine Limited) is a creative, marketing, branding, events management, and promotional services agency based in Kampala and Brussels.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "Smari Creative — Corporate Identity, Branding, Print & Events",
    description:
      "Corporate identity, branding, creative marketing, print, web, and events for ambitious organisations — Kampala · Brussels.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fagoSans.variable} dark`} suppressHydrationWarning>
      <body className="bg-background text-white antialiased overflow-x-hidden">
        <LenisProvider>
          <ScrollProgressBar />
          <AnimatedCursor />
          <NoiseBackground />
          <FloatingNavbar />
          <main className="relative z-10">
            <PageTransition>{children}</PageTransition>
          </main>
          <TitanFooter />
        </LenisProvider>
      </body>
    </html>
  );
}
