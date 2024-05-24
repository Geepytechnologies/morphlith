import type { Metadata } from "next";
import { Inter, Poppins, Cabin, Barlow, Jost } from "next/font/google";
import "./globals.css";
import ReactGA from "react-ga4";

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
const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barl",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const jost = Jost({
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-jost",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Morphlith",
  description: "Where Research Meets Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const measurementID = process.env.MEASUREMENTID || "";

  ReactGA.initialize(measurementID);
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cabin.variable} ${poppins.variable} ${barlow.variable} ${jost.variable} `}
    >
      <body>{children}</body>
    </html>
  );
}
