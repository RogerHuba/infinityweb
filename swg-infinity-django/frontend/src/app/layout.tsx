import type { Metadata } from "next";
import { Coda } from "next/font/google";
import "./globals.css";

const coda = Coda({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SWG Infinity | Play Star Wars Galaxies Today | SWGEmu",
  description: "Play Star Wars Galaxies today. Infinity is a Pre-CU galaxy with over 800 active weekly players and a thriving community. SWGEmu, Play SWG: An Empire Divided",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={coda.className}>
        {children}
      </body>
    </html>
  );
}
