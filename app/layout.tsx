import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pickleball Scorer App",
  description: "Keep track of Pickleball games, with the Pickleball Scorer app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gray-300`}
      >
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-center text-2xl">Pickleball Scorer</h1>
        </header>
        <main className="flex-grow p-8">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>version v0.0.1</p>
        </footer>
      </body>
    </html>
  );
}
