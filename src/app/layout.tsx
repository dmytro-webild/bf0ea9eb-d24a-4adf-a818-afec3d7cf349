import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";
import { Roboto } from "next/font/google";
import { Raleway } from "next/font/google";



export const metadata: Metadata = {
  title: "Newmoda Textile",
  description: "Newmoda Textile ile yüksek kaliteli kumaş ve yenilikçi tekstil çözümlerini keşfedin. Sektör lideri üretim standartlarımızla markanıza değer katıyoruz. Hemen inceleyin.",
  openGraph: {
    "title": "NEWMODA TEXTILE",
    "siteName": "NEWMODA TEXTILE"
  },
};




const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${raleway.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
