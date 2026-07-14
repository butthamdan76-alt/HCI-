import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Disruptive Advertising Recreation",
  description:
    "A Next.js educational recreation of a performance marketing agency homepage."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
