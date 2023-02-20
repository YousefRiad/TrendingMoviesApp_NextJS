import "./globals.css";
import { Montserrat } from "@next/font/google";
import Head from "./head";
import Link from "next/link";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`${montserrat.className} background`}>
        <div>
        <nav>
          <a href="https://movieland-mu.vercel.app/">
          <img src="\logoo.png" alt="logo" className="logo"/>
          </a>
        </nav>
        {children}
        </div>
      </body>
    </html>
  );
}
