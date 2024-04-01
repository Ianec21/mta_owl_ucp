import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SideNavigation from "@/components/ui/side_nav";
import TopNavigation from "@/components/ui/top_nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MTA OWL UCP",
  description: "A custom UCP for OWL Gamemode ( MTA ) made by Ianec.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <div>
            <TopNavigation/>
            <div className="flex flex-row pl-10 pr-10">
              <SideNavigation/>
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
