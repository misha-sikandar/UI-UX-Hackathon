import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopHeader from "./components/top_header";
import Header from "./components/header";
import Belowheader from "./components/below_header";
import Footer from "./components/footer";
import BottomNavbar from "./components/bottom_footer";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopHeader/>
        <Header/>
        <Belowheader/>
        {children}
        <Footer/>
        <BottomNavbar/>
      </body>
    </html>
  );
}
