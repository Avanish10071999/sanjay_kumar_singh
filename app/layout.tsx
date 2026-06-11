import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { Header } from "@/components/Header";
import { profile } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: `${profile.name} | IIT (BHU)`,
  description: profile.summary
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable} font-sans`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
