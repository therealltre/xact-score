"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Xact Score",
  description: "Check Your Credit Score & Report"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Xact Score | Check Your Credit Score & Report </title>
        <meta name="description" content="created by Tre" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={inter.className}>
        <ChakraProvider>
          <Navbar />
          {children}{" "}
        </ChakraProvider>
      </body>
    </html>
  );
}
