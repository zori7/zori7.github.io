import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Zori — Senior Full-Stack Software Engineer",
  description:
    "8+ years of hands-on experience building web, mobile and infrastructure. Expert in TypeScript, Next.js, React Native, Node.js, PostgreSQL, Docker and AI integrations.",
  keywords: [
    "full-stack developer",
    "next.js",
    "react native",
    "typescript",
    "node.js",
    "postgresql",
    "docker",
    "ai integration",
    "freelance developer",
  ],
  authors: [{ name: "Zori" }],
  openGraph: {
    title: "Zori — Senior Full-Stack Software Engineer",
    description:
      "8+ years building web, mobile and infrastructure. TypeScript, Next.js, React Native, Node.js, PostgreSQL, Docker & AI.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-[#0e1624] text-base">
        {children}
      </body>
    </html>
  );
}
