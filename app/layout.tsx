import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/themeprovider";
import { Navbar } from "./components/navbar";
import { ClerkProvider } from '@clerk/nextjs';
import  DashSide  from "./components/dashsidebar";

const inter = Inter({ subsets: ["latin"] });

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
    <ClerkProvider>
    <html lang="en">
      <body className={'${inter.className} theme-rose'}>
         <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > 
        <Navbar/>
           {children}
        </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}
