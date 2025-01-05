import type { Metadata } from "next";
import { Roboto_Flex } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";

const roboto = Roboto_Flex({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "RUBlogs",
  description: "The Latest Gossip around Campus!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
