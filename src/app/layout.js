import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";

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
      <body className="min-h-full flex flex-col font-sans bg-slate-50/50 text-slate-800">
        <AuthProvider>
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 3500,
              style: {
                background: "#ffffff",
                color: "#1e293b",
                borderRadius: "14px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08)",
                fontSize: "14px",
                fontWeight: "500",
              },
            }}
          />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
