"use client";

import { use, useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import SortDropdown from "@/components/SortDropdown";
import SkeletonCard from "@/components/SkeletonCard";
import { getCategory, getProducts, getCategories } from "@/lib/api";
import { toBengali } from "@/lib/bengali";
import { ArrowLeft, Home, PackageOpen } from "lucide-react";

export default function CategoryPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;

  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [cat, allCats, catProducts, allProds] = await Promise.all([
          getCategory(slug),
          getCategories(),
          getProducts(slug),
          getProducts(),
        ]);
        setCategory(cat);
        setCategories(allCats || []);
        setProducts(catProducts || []);
        setAllProducts(allProds || []);
      } catch (err) {
        console.error("Error loading category", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [slug]);

  // Challenge C1: Sort dropdown handling numeric today's price correctly
  const sortedProducts = useMemo(() => {
    let list = [...products];
    if (sortOrder === "low-to-high") {
      list.sort((a, b) => (Number(a.today) || 0) - (Number(b.today) || 0));
    } else if (sortOrder === "high-to-low") {
      list.sort((a, b) => (Number(b.today) || 0) - (Number(a.today) || 0));
    }
    return list;
  }, [products, sortOrder]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <Navbar categories={categories} tickerProducts={allProducts} />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-700 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-2xs hover:shadow-sm transition"
          >
            <ArrowLeft className="w-4 h-4" />
            হোম পেজে ফিরে যান
          </Link>
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
            <Link href="/" className="hover:text-emerald-600">হোম</Link>
            <span>/</span>
            <span className="text-slate-500">ক্যাটাগরি</span>
            <span>/</span>
            <span className="text-emerald-700 font-bold">{category?.nameBn || slug}</span>
          </div>
        </div>

        {/* Empty State / Invalid category handling */}
        {!loading && (!category || products.length === 0) ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-2xl mx-auto shadow-sm my-12 space-y-5">
            <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center text-4xl mx-auto text-slate-400">
              <PackageOpen className="w-10 h-10" />
            </div>
            <h1 className="text-2xl font-black text-slate-900">
              এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি
            </h1>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              অনুগ্রহ করে অন্য কোনো ক্যাটাগরি নির্বাচন করুন অথবা হোম পেজে ফিরে সকল পণ্যের তালিকা
              যাচাই করুন।
            </p>
            <div className="pt-2">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition"
              >
                <Home className="w-4 h-4" />
                হোম পেজে ফিরে যান
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Category Header Banner */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-18 h-18 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-4xl shadow-xs">
                  <span>{category?.icon || "🛒"}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="badge badge-success text-white text-xs font-semibold">
                      ক্যাটাগরি
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      মোট {toBengali(products.length)}টি পণ্য
                    </span>
                  </div>
                  <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                    {category?.nameBn}
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    {category?.nameBn} সম্পর্কিত সকল পণ্যের নির্ভরযোগ্য দৈনিক দর
                  </p>
                </div>
              </div>

              {/* Challenge Requirement C1: Sort Dropdown */}
              <div>
                <SortDropdown value={sortOrder} onChange={setSortOrder} />
              </div>
            </div>

            {/* Product Cards Grid */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
