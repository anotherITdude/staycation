import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AAF Staycation 2023",
  description: "AAF Staycation November 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="../public/favicon.png" />
      <body
        suppressHydrationWarning={true}
        className={`bg-webLiteGray ${inter.className}`}
      >
        {" "}
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
