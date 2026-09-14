import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Porsche 911 Turbo S — The New Generation",
  description:
    "An immersive Porsche 911 Turbo S digital experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}