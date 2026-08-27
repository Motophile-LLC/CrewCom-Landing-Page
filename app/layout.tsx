import type { Metadata } from "next";
import { Oswald, Barlow } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "CrewCom — Rider to Rider Comms for Any Bike, Any Phone",
  description:
    "CrewCom connects your crew over the internet using any phone and any Bluetooth headset — no brand lock-in. Road Captain ducking, live next-destination sharing, QR crew joining, and a big-glove-friendly layout built for the road.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${barlow.variable}`}>
      <body className="bg-grit antialiased">{children}</body>
    </html>
  );
}
