import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/app/components/navigation-bat";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Melodia",
  description: "A music browsing application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable}  flex flex-col lg:flex-row`}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
