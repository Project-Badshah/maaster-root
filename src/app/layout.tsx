import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maaster | Digitizing Experiences",
  description: "The digital-first SaaS portfolio and technology incubator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
