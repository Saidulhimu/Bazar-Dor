import Link from "next/link";
import { ShoppingCart, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/80 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* Left Side */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-xs">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-black text-slate-900">
                বাজার <span className="text-emerald-600">দর</span>
              </span>
              <p className="text-xs text-slate-500 font-medium">
                বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
              </p>
            </div>
          </div>

          {/* Right Side Disclaimer */}
          <div className="text-center md:text-right">
            <p className="text-xs text-slate-500 max-w-md italic leading-relaxed">
              * সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
            </p>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} বাজার দর (Bazar Dor). সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="flex items-center gap-1">
            তৈরি করেছেন <span className="font-semibold text-slate-600">Saidul Islam</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
