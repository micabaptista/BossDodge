import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Boss Dodge",
  description: "Application for managing boss dodging in Workday.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>{children}</body>
    </html>
  );
}
