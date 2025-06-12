import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FredComp MTB: Fredericksburg Composite Mountain Bike Team",
  description:
    "Fredericksburg Composite MTB Team is supported by Fredericksburg Area Interscholastic Cycling Team, a nonprofit 501c3 (EIN 87-2871561). Every donation you make is tax deductible and directly supports the team and student athletes.",
  keywords: [
    "fredcomp",
    "fredericksburg mountain biking team",
    "nica team fredericksburg",
    "nica",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} text-black antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
