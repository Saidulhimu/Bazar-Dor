"use client";

import { useEffect, useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import SortDropdown from "@/components/SortDropdown";
import SkeletonCard from "@/components/SkeletonCard";
import Footer from "@/components/Footer";
import { getCategories, getProducts } from "@/lib/api";
import { toBengali } from "@/lib/bengali";
import { TrendingUp, TrendingDown, Package, Search } from "lucide-react";

export default function HomePage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [cats, prods] = await Promise.all([getCategories(), getProducts()]);
        setCategories(cats || []);
        setProducts(prods || []);
      } catch (err) {
        console.error("Failed to load home data", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Section A: Top 6 Risers ("আজ দাম বেড়েছে ▲")
  const risers = useMemo(() => {
    return products
      .filter((p) => p.change?.dir === "up" && p.change?.pct > 0)
      .sort((a, b) => (b.change?.pct || 0) - (a.change?.pct || 0))
      .slice(0, 6);
  }, [products]);

  // Section B: Top 6 Fallers ("আজ দাম কমেছে ▼")
  const fallers = useMemo(() => {
    return products
      .filter((p) => p.change?.dir === "down" || (p.change?.pct || 0) < 0)
      .sort((a, b) => (a.change?.pct || 0) - (b.change?.pct || 0))
      .slice(0, 6);
  }, [products]);

  // Filtered & Sorted products for Section C: "সব পণ্য"
  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Filter by Category
    if (selectedCategory !== "all") {
      list = list.filter(
        (p) =>
          p.category === selectedCategory ||
          p.categorySlug === selectedCategory
      );
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.nameBn?.toLowerCase().includes(q) ||
          p.slug?.toLowerCase().includes(q) ||
          p.categoryNameBn?.toLowerCase().includes(q)
      );
    }

    // Challenge C1: Sort dropdown handling numeric today's price correctly
    if (sortOrder === "low-to-high") {
      list.sort((a, b) => (Number(a.today) || 0) - (Number(b.today) || 0));
    } else if (sortOrder === "high-to-low") {
      list.sort((a, b) => (Number(b.today) || 0) - (Number(a.today) || 0));
    }

    return list;
  }, [products, selectedCategory, sortOrder, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      {/* Navbar with Categories and Price Ticker */}
      <Navbar categories={categories} tickerProducts={products} />

      {/* Hero / Banner Section */}
      <Hero />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Section A: আজ দাম বেড়েছে ▲ (Top 6 Risers) */}
        <section id="আজ-দাম-বেড়েছে" className="scroll-mt-28">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-xs">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  আজ দাম বেড়েছে <span className="text-emerald-600 font-bold">▲</span>
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  বাজারের সর্বোচ্চ মূল্যবৃদ্ধি পাওয়া শীর্ষ পণ্যসমূহ
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-flex badge badge-success text-white font-semibold text-xs py-2 px-3">
              শীর্ষ {toBengali(risers.length)}টি পণ্য
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
              : risers.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>
        </section>

        {/* Section B: আজ দাম কমেছে ▼ (Top 6 Fallers) */}
        <section id="আজ-দাম-কমেছে" className="scroll-mt-28">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700 shadow-xs">
                <TrendingDown className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  আজ দাম কমেছে <span className="text-rose-600 font-bold">▼</span>
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  বাজারের সর্বোচ্চ মূল্যহ্রাস পাওয়া সুবিধাজনক পণ্যসমূহ
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-flex badge badge-error text-white font-semibold text-xs py-2 px-3">
              শীর্ষ {toBengali(fallers.length)}টি পণ্য
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
              : fallers.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>
        </section>

        {/* Section C: সব পণ্য (#সব-পণ্য) */}
        <section id="সব-পণ্য" className="scroll-mt-28 pt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-2">
                <Package className="w-3.5 h-3.5 text-emerald-600" />
                মোট পণ্য: {toBengali(filteredProducts.length)}টি
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                সব পণ্য
              </h2>
              <p className="text-sm text-slate-500 font-medium">
                সকল নিত্যপ্রয়োজনীয় পণ্যের পূর্ণাঙ্গ ও হালনাগাদ তালিকা
              </p>
            </div>

            {/* Filter and Sort Toolbar */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="পণ্য খুঁজুন (যেমন: চাল, তেল)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 w-52 sm:w-64 transition"
                />
              </div>

              {/* Challenge Requirement C1: Sort Dropdown */}
              <SortDropdown value={sortOrder} onChange={setSortOrder} />
            </div>
          </div>

          {/* Inline Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              সব ক্যাটাগরি
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id || cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.slug
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.nameBn}</span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
              <span className="text-5xl">🔍</span>
              <h3 className="text-lg font-bold text-slate-800 mt-4">
                কোনো পণ্য খুঁজে পাওয়া যায়নি
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                অন্য কোনো নামে অথবা ক্যাটাগরি পরিবর্তন করে আবার চেষ্টা করুন।
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 btn btn-sm btn-outline btn-primary rounded-xl"
              >
                ফিল্টার রিসেট করুন
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
