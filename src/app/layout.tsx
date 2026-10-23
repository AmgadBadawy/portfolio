import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amged Badawy | Junior Frontend Developer (React & Next.js)",
  description:
    "Portfolio of Amged Ibrahim Mohamed Badawy — Junior Frontend Developer specializing in React, Next.js (App Router), TypeScript, Tailwind CSS, and Arabic RTL web interfaces.",
  keywords: [
    "Amged Badawy",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Cairo Egypt",
  ],
  authors: [{ name: "Amged Badawy" }],
  openGraph: {
    title: "Amged Badawy | Junior Frontend Developer",
    description:
      "Building responsive, accessible web interfaces with React, Next.js, TypeScript, and Tailwind CSS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
