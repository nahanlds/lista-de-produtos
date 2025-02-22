import type { Metadata } from "next";
import "./globals.css";
import favicon from "../../public/assets/images/favicon-32x32.png"

export const metadata: Metadata = {
  title: "Product list",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      <body>
        {children}
      </body>
    </html>
  );
}
