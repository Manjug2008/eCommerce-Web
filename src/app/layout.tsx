import type { Metadata } from "next";
import "./globals.css";

import { fredoka, ubuntu } from "./fonts";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


export const metadata: Metadata = {
  title: "Ecommerce App",
  description: "Ecommerce web app task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${ubuntu.variable} ${fredoka.variable}`}>
      <body className=" min-h-screen flex flex-col font-ubuntu bg-lightgray">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
