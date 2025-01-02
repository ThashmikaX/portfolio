import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Sudesh Thashmika",
  description: "I'm Sudesh Thashmika, and I am currently pursuing my undergraduate studies in Computer Engineering at the University of Ruhuna.",
};

const clash = localFont({
  src: [
    {
      path: "./OKAYSERIF-BOLD.ttf",
      weight: "500",
    },
  ],
  variable: "--font-clash",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={clash.className}>
            <div className="flex flex-col min-h-[100dvh]">
              <Navbar />
              {children}
              {/* <Footer /> */}
            </div>
      </body>
    </html>
  );
}
