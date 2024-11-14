import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { ThemeToggle } from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sudesh Thashmika",
  description: "I'm Sudesh Thashmika, and I am currently pursuing my undergraduate studies in Computer Engineering at the University of Ruhuna.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`} suppressHydrationWarning>
        <ThemeProvider>
          <div className="relative">
            <ThemeToggle />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}