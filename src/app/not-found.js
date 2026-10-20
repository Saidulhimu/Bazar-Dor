import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 px-4 text-center">
      <div className="bg-white p-10 sm:p-14 rounded-3xl border border-slate-200/80 shadow-md max-w-lg w-full space-y-6">
        <div className="w-24 h-24 bg-rose-50 text-rose-600 rounded-3xl flex items-center justify-center text-5xl mx-auto shadow-xs">
          ৪০৪
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            পৃষ্ঠাটি পাওয়া যায়নি
          </h1>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা মুছে ফেলা হয়েছে অথবা ভুল লিংক ব্যবহার করা হয়েছে।
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition text-sm"
          >
            <Home className="w-4 h-4" />
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
}
