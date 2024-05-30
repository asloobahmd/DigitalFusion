import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/context/AuthProvider";
import { ThemeContextProvider } from "@/context/ThemeContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My first Next Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeContextProvider>
          <AuthProvider>
            <Navbar />
            <main className="">{children}</main>
            <Footer />
          </AuthProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
