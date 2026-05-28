import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "@/components/ui/navbar";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: {
    default: "DominickCS",
    template: "%s | DominickCS",  // child pages just set the prefix
  },
  description: "Platform engineer, full-stack developer, security researcher.",
  icons: {
    icon: "/favicon.ico",
  },
}

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
