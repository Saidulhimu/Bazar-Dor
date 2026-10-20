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

export const metadata = {
  title: "বাজার দর (Bazar Dor) - নিত্যপ্রয়োজনীয় পণ্যের বাজারদর",
  description: "নিত্যপ্রয়োজনীয় পণ্যের সঠিক ও নির্ভরযোগ্য বাজারদর",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      data-theme="emerald"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-base-100 text-base-content">
        {children}
      </body>
    </html>
  );
}
