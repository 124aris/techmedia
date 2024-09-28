import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import TopBar from "@/components/TopBar";
import LeftSideBar from "@/components/LeftSideBar";
import BottomBar from "@/components/BottomBar";
import RightSideBar from "@/components/RightSideBar";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechMedia",
  description: "A Next.js 14 Meta TechMedia Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopBar/>
          <main className="flex flex-row">
            <LeftSideBar/>
              <section className="main-container">
                <div className="w-full max-w-4xl">
                  {children}
                </div>
              </section>
            <RightSideBar/>
          </main>
          <BottomBar/>
        </body>
      </html>
    </ClerkProvider>
  );
}
