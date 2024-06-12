import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/blocks/Navbar";
import Footer from "@/components/blocks/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axsoter",
  description: "Ilmaisia palvelimia ig",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"min-w-screen overflow-x-hidden text-white m-0 p-0 bodyBg " + inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
