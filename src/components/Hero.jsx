import Image from "next/image";
import { ArrowDown, CheckCircle2, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 via-slate-50 to-white py-12 md:py-16 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              দৈনিক বাজার দর পর্যবেক্ষণ প্ল্যাটফর্ম
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              সঠিক দামে <span className="text-emerald-600 underline decoration-emerald-300 decoration-wavy decoration-2">সঠিক বাজার</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              প্রতিদিনের নিত্যপ্রয়োজনীয় চাল, ডাল, মাছ, মাংস ও শাকসবজির নির্ভরযোগ্য ও হালনাগাদ
              বাজারদর এক নজরে জানুন। বাজারে যাওয়ার আগেই যাচাই করে নিন আসল খুচরা ও পাইকারি দর।
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#সব-পণ্য"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-base"
              >
                সব পণ্য দেখুন
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="#আজ-দাম-বেড়েছে"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-xs transition-all text-base"
              >
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                মূল্য পরিবর্তন
              </a>
            </div>

            {/* Badges / Micro features */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>দৈনিক হালনাগাদ মূল্যতালিকা</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>১২টি প্রধান পাইকারি ও খুচরা বাজার</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>শতভাগ সঠিক তথ্য</span>
              </div>
            </div>
          </div>

          {/* Right Banner Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center p-6">
              {/* Decorative background glow */}
              <div className="absolute inset-4 rounded-full bg-emerald-200/50 filter blur-3xl -z-10 animate-pulse"></div>

              <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/bazar-hero.png"
                  alt="বাজার দর ফলমূল ও শাকসবজি"
                  fill
                  priority
                  className="object-contain drop-shadow-xl"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
