import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Footer from "@/components/Footer";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tasty-treat",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
