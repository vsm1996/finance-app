import type { Metadata } from "next";
import { Suspense } from "react";

import { publicSans } from "@/utlis/font";

import Navbar from "@/components/navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Money Tree | Track Your Finances",
  description: "track your budget, transactions, and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} flex `}>
        <Navbar />
        <main className='p-5'>
          <Suspense fallback={<p>Looooader</p>}>
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  );
}
