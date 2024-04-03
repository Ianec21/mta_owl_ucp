import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SideNavigation from "@/components/ui/side_nav";
import TopNavigation from "@/components/ui/top_nav";
import { AuthProvider, TAuth } from "@/components/providers/auth-provider";
import { useState } from "react";

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
  const initialSession: TAuth = {
    loggedIn: true,
    name: "Jora"
  }

  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundImage: `url(https://i.imgur.com/MlP0U7p.png)`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <AuthProvider initialSession={initialSession}>
              <TopNavigation/>
              <div className="flex flex-row pl-10 pr-10">
                <SideNavigation/>
                {children}
              </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
