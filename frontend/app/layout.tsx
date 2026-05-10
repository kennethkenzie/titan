import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { FloatingNavbar } from "@/components/navigation/FloatingNavbar";
import { TitanFooter } from "@/components/layout/TitanFooter";
import { ScrollProgressBar } from "@/components/animations/ScrollProgressBar";
import { NoiseBackground } from "@/components/animations/NoiseBackground";
import { AnimatedCursor } from "@/components/animations/AnimatedCursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
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
  themeColor: "#050505",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} dark`} suppressHydrationWarning>
      <body className="bg-background text-white antialiased overflow-x-hidden">
        <LenisProvider>
          <ScrollProgressBar />
          <AnimatedCursor />
          <NoiseBackground />
          <FloatingNavbar />
          <main className="relative z-10">{children}</main>
          <TitanFooter />
        </LenisProvider>
      </body>
    </html>
  );
}
