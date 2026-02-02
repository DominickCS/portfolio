import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "@/components/ui/navbar";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Dominick Smith - Developer Portfolio",
  description: "Hello! Nice to meet you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear()
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavigationBar />
          {children}
          <footer className="text-center text-blue-500 font-extrabold py-12">
            Copyright © {year} DominickCS, All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
