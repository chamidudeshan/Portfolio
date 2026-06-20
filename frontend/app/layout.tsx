import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chamidu Deshan — IT Student & Developer",
  description:
    "Portfolio of Chamidu Deshan — IT student passionate about building modern web applications and software solutions.",
  keywords: ["Chamidu Deshan", "IT Student", "Developer", "Portfolio", "Web Development"],
  authors: [{ name: "Chamidu Deshan" }],
  openGraph: {
    title: "Chamidu Deshan — IT Student & Developer",
    description: "Portfolio of Chamidu Deshan — IT student & developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-bg-primary text-text-primary antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
