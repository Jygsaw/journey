import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getAuth } from '@/lib/authUtils';
import { GlobalContext } from '@/components/GlobalContext';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth = await getAuth();

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalContext auth={auth}>
          {children}
        </GlobalContext>
      </body>
    </html>
  );
}
