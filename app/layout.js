import React from "react";
import Navigation from "./_components/Navigation";
import Logo from "@/app/_components/Logo";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "The Wild Oasis",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={josefin.className}>
      <body className="flex min-h-screen flex-col bg-primary-950 text-primary-100">
        <Header />
        <div className="flex-1">
          <main className="px-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
