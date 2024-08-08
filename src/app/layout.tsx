import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/blocks/Navbar";
import Footer from "@/components/blocks/Footer";
import Notification from "@/components/blocks/AdNotification";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import TawkTo from "@/components/blocks/tawkto";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Axsoter, Ilmaisia suomalaisia Minecraft pelipalvelimia ja muuta!",
    template: "Axsoter | %s"
  },
  description: "Ilmaisia palvelimia ig",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={"min-w-screen max-w-[100vw] overflow-x-hidden text-white m-0 p-0 bodyBg " + inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Notification />
          <Navbar />
          {children}
          <Footer />
          <TawkTo />
          <script src="/adv-socialbar-scroll.js" async></script>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
