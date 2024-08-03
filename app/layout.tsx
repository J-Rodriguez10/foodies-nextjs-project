import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import MainHeader from "@/components/main-header/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextLevel Food",
  description: "With Typescript and Tailwind!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Main Header Components */}
        <MainHeader />

        {children}
      </body>
    </html>
  );
}
