import type { Metadata } from "next";
import { Inter, Poppins, Cabin } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-popp",
  weight: ["100", "200", "300", "500", "600", "700"],
});
const cabin = Cabin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cab",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Morphlith",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cabin.variable} ${poppins.variable} `}
    >
      <body>{children}</body>
    </html>
  );
}