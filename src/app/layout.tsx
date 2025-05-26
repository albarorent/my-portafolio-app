import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-inter",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Alvaro Renteria - Frontend Engineer",
  description: "Portafolio de un desarrollador Frontend con experiencia en React, Next.js, TypeScript y TailwindCSS.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-slate-900 leading-relaxed text-slate-400 antialiased ${geistSans} selection:bg-teal-300 selection:text-teal-900`}
      >
        {children}
      </body>
    </html>
  );
}
