import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "下載高校特約 APP | 官方網站",
  description:
    "下載高校特約聯盟官方 APP，享受數位會員卡、特約商店資訊及發票載具整合等服務。由高雄市各高中職學生會共同發起的特約商店計畫，目前已邁入第七屆。",
  keywords: [
    "高校特約聯盟",
    "APP下載",
    "數位會員卡",
    "學生優惠",
    "學生自治",
    "高雄學生",
  ],
  authors: [{ name: "第七屆 高雄高校特約聯盟" }],
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "https://ukhsc.org",
    siteName: "高校特約聯盟官方網站",
    title: "下載高校特約聯盟 APP",
    description: "立即下載高校特約聯盟官方 APP，享受數位會員卡與特約商店優惠",
    images: [
      {
        url: "/og-image.png",
        alt: "高校特約聯盟 APP 下載頁面",
      },
    ],
  },
  icons: {
    icon: "favicon.ico",
    apple: "favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
