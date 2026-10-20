"use client";

import { use, useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProduct, getCategories } from "@/lib/api";
import { toBengali, getUnitLabel } from "@/lib/bengali";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";
import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Building2,
  MapPin,
  Scale,
} from "lucide-react";

export default function ProductDetail({ params }) {
  const unwrappedParams = use(params);
  const productId = unwrappedParams.id;
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();

  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDivision, setSelectedDivision] = useState("all");

  // Authentication Protection check
  useEffect(() => {
    if (!authLoading && !user) {
      toast.error("পণ্যটির বিস্তারিত তথ্য দেখতে অনুগ্রহ করে সাইন ইন করুন", {
        id: "auth-protected-toast",
      });
      router.push(`/signin?redirect=/product/${productId}`);
    }
  }, [user, authLoading, router, productId]);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [prod, cats] = await Promise.all([
          getProduct(productId),
          getCategories(),
        ]);
        setProduct(prod);
        setCategories(cats || []);
      } catch (err) {
        console.error("Error loading product", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [productId]);

  // Market Calculations
  const marketStats = useMemo(() => {
    if (!product || !Array.isArray(product.markets) || product.markets.length === 0) {
      return { min: product?.today || 0, max: product?.today || 0, avg: product?.today || 0 };
    }
    const mins = product.markets.map((m) => Number(m.min) || product.today);
    const maxs = product.markets.map((m) => Number(m.max) || product.today);
    const minVal = Math.min(...mins);
    const maxVal = Math.max(...maxs);
    const avgVal = Math.round(
      product.markets.reduce((acc, m) => acc + (Number(m.min) + Number(m.max)) / 2, 0) /
        product.markets.length
    );
    return { min: minVal, max: maxVal, avg: avgVal };
  }, [product]);

  // Unique divisions for filtering
  const divisions = useMemo(() => {
    if (!product?.markets) return [];
    return Array.from(new Set(product.markets.map((m) => m.division).filter(Boolean)));
  }, [product]);

  // Filtered markets
  const filteredMarkets = useMemo(() => {
    if (!product?.markets) return [];
    if (selectedDivision === "all") return product.markets;
    return product.markets.filter((m) => m.division === selectedDivision);
  }, [product, selectedDivision]);

  if (authLoading || (!user && !product)) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50">
        <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-3xl border border-slate-200 shadow-md">
          <div className="w-12 h-12 rounded-full border-4 border-emerald-600 border-t-transparent animate-spin"></div>
          <p className="text-sm font-semibold text-slate-600">নিরাপত্তা ও তথ্য যাচাই করা হচ্ছে...</p>
        </div>
      </div>
    );
  }

  if (!loading && !product) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar categories={categories} />
        <main className="flex-1 max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <span className="text-6xl">⚠️</span>
            <h1 className="text-2xl font-bold text-slate-800">পণ্যটি খুঁজে পাওয়া যায়নি</h1>
            <p className="text-slate-500 text-sm">
              আপনার অনুরোধকৃত পণ্যটি বর্তমানে তালিকাভুক্ত নেই অথবা ভুল আইডি দেওয়া হয়েছে।
            </p>
            <Link href="/" className="inline-block mt-4 btn btn-primary text-white rounded-xl">
              হোম পেজে ফিরে যান
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const isUp = product?.change?.dir === "up";
  const isDown = product?.change?.dir === "down";

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <Navbar categories={categories} />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-8">
        {/* Breadcrumb & Back */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-700 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-2xs hover:shadow-sm transition"
          >
            <ArrowLeft className="w-4 h-4" />
             বাজারে ফিরে যান
          </Link>
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
            <Link href="/" className="hover:text-emerald-600">হোম</Link>
            <span>/</span>
            <span className="text-emerald-700 font-bold">{product?.nameBn}</span>
          </div>
        </div>

        {/* Top Product Summary Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-3xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-4xl shadow-sm">
                <span>{product?.image || product?.categoryIcon || "🛒"}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="badge badge-success badge-outline text-xs font-bold">
                    {product?.categoryNameBn || "নিত্যপণ্য"}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {getUnitLabel(product?.unit)}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {product?.nameBn}
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  আজকের সারা দেশের পাইকারি ও খুচরা বাজারদর বিশ্লেষণ
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right w-full sm:w-auto p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                আজকের বর্তমান দর
              </p>
              <div className="flex sm:justify-end items-baseline gap-2 mt-0.5">
                <span className="text-3xl font-black text-slate-900">
                  {toBengali(product?.today)}
                </span>
                <span className="text-sm font-bold text-slate-500">টাকা</span>
              </div>
              <div className="mt-1">
                {isUp && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
                    <TrendingUp className="w-3.5 h-3.5" />
                    ▲ {toBengali(Math.abs(product?.change?.pct || 0))}% গতদিনের চেয়ে বেশি
                  </span>
                )}
                {isDown && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700">
                    <TrendingDown className="w-3.5 h-3.5" />
                    ▼ {toBengali(Math.abs(product?.change?.pct || 0))}% গতদিনের চেয়ে কম
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Historical comparison chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <p className="text-xs text-slate-400 font-medium">আজকের দর</p>
              <p className="text-lg font-extrabold text-slate-800 mt-0.5">
                {toBengali(product?.today)} ৳
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <p className="text-xs text-slate-400 font-medium">গতকাল</p>
              <p className="text-lg font-bold text-slate-700 mt-0.5">
                {toBengali(product?.yesterday || product?.today)} ৳
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <p className="text-xs text-slate-400 font-medium">গত সপ্তাহে</p>
              <p className="text-lg font-bold text-slate-700 mt-0.5">
                {toBengali(product?.lastWeek || product?.today)} ৳
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <p className="text-xs text-slate-400 font-medium">গত মাসে</p>
              <p className="text-lg font-bold text-slate-700 mt-0.5">
                {toBengali(product?.lastMonth || product?.today)} ৳
              </p>
            </div>
          </div>
        </div>

        {/* Price - Summary Cards (Min, Max, Average) */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-emerald-600" />
            দামের সার্বিক পরিসংখান (Price Summary)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  সর্বনিম্ন দাম
                </p>
                <p className="text-3xl font-black text-emerald-600 mt-1">
                  {toBengali(marketStats.min)}{" "}
                  <span className="text-sm font-semibold text-slate-400">টাকা</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-1">সারাদেশের সবচেয়ে কম দর</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl">
                ↓
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  গড় দাম
                </p>
                <p className="text-3xl font-black text-slate-900 mt-1">
                  {toBengali(marketStats.avg)}{" "}
                  <span className="text-sm font-semibold text-slate-400">টাকা</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-1">সকল বাজারের গড় মূল্য</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xl">
                ~
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  সর্বোচ্চ দাম
                </p>
                <p className="text-3xl font-black text-rose-600 mt-1">
                  {toBengali(marketStats.max)}{" "}
                  <span className="text-sm font-semibold text-slate-400">টাকা</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-1">সারাদেশের সর্বোচ্চ দর</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xl">
                ↑
              </div>
            </div>
          </div>
        </div>

        {/* বাজারভিত্তিক আজকের দাম (Market Breakdown Table) */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-600" />
                বাজারভিত্তিক আজকের দাম
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                বিভিন্ন এলাকার বাজার অনুযায়ী সর্বনিম্ন ও সর্বোচ্চ খুচরা মূল্য
              </p>
            </div>

            {/* Division Filter */}
            {divisions.length > 0 && (
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
                <button
                  onClick={() => setSelectedDivision("all")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                    selectedDivision === "all"
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  সব বিভাগ
                </button>
                {divisions.map((div) => (
                  <button
                    key={div}
                    onClick={() => setSelectedDivision(div)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                      selectedDivision === div
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {div}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="table w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-bold text-xs uppercase bg-slate-50/50">
                  <th className="py-3 px-4 rounded-l-xl">বাজারের নাম</th>
                  <th className="py-3 px-4">বিভাগ</th>
                  <th className="py-3 px-4 text-center">সর্বনিম্ন দর</th>
                  <th className="py-3 px-4 text-center">সর্বোচ্চ দর</th>
                  <th className="py-3 px-4 text-center rounded-r-xl">অবস্থা</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredMarkets.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-slate-400">
                      কোনো বাজার তালিকাভুক্ত পাওয়া যায়নি
                    </td>
                  </tr>
                ) : (
                  filteredMarkets.map((m, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                        {m.market}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 font-medium">
                        <span className="badge badge-sm badge-ghost">{m.division || "ঢাকা"}</span>
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-emerald-700">
                        {toBengali(m.min)} টাকা
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-rose-700">
                        {toBengali(m.max)} টাকা
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="badge badge-xs badge-success text-[10px] text-white py-1.5 px-2">
                          স্বাভাবিক
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
