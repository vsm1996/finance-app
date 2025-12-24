import type { Metadata } from "next";
import { Suspense } from "react";

import { publicSans } from "@/utlis/font";

import { DesktopNavbar } from "@/components/navbar";

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
        <DesktopNavbar />
        <main className='p-200 md:p-500 bg-beige-100 w-full'>
          <Suspense fallback={<p>Looooader</p>}>
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  );
}
