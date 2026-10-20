"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { getBengaliDate, toBengali, getUnitLabel } from "@/lib/bengali";
import toast from "react-hot-toast";
import {
  User,
  LogOut,
  ChevronDown,
  Menu,
  X,
  TrendingUp,
  TrendingDown,
  ShoppingCart,
} from "lucide-react";

export default function Navbar({ categories = [], tickerProducts = [] }) {
  const pathname = usePathname();
  const { user, logOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [banglaDate, setBanglaDate] = useState("");

  useEffect(() => {
    setBanglaDate(getBengaliDate());
  }, []);

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("সফলভাবে লগআউট হয়েছে");
    } catch {
      toast.error("লগআউট করতে সমস্যা হয়েছে");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo & Bangla Date */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-2xl shadow-sm group-hover:scale-105 transition-transform">
              <ShoppingCart className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-slate-800">
                  বাজার <span className="text-emerald-600">দর</span>
                </span>
                <span className="badge badge-xs badge-success text-[10px] text-white font-medium">
                  লাইভ
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium tracking-wide">
                {banglaDate || "দৈনিক নিত্যপ্রয়োজনীয় বাজারদর"}
              </p>
            </div>
          </Link>

          {/* Right: Auth Buttons / User Profile */}
          <div className="hidden sm:flex items-center gap-3">
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center gap-2.5 p-1.5 pr-3 rounded-full border border-slate-200 hover:border-emerald-300 hover:bg-slate-50 transition cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center overflow-hidden text-sm shadow-sm">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName || "User"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      (user.displayName || user.email || "U")
                        .charAt(0)
                        .toUpperCase()
                    )}
                  </div>
                  <span className="text-sm font-semibold text-slate-700 max-w-[120px] truncate">
                    {user.displayName || user.email?.split("@")[0]}
                  </span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-50 menu p-2 shadow-xl bg-white border border-slate-100 rounded-2xl w-56 mt-2 space-y-1"
                >
                  <li className="px-3 py-2 border-b border-slate-100">
                    <p className="text-xs text-slate-400">লগইন করা হয়েছে</p>
                    <p className="text-sm font-bold text-slate-800 truncate">
                      {user.displayName || user.email}
                    </p>
                  </li>
                  <li>
                    <Link
                      href="/profile"
                      className="flex items-center gap-2.5 py-2.5 rounded-xl hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 font-medium"
                    >
                      <User className="w-4 h-4" />
                      আমার প্রোফাইল
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/profile/update"
                      className="flex items-center gap-2.5 py-2.5 rounded-xl hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 font-medium"
                    >
                      <span>✏️</span>
                      তথ্য আপডেট করুন
                    </Link>
                  </li>
                  <div className="divider my-1"></div>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2.5 py-2.5 rounded-xl text-rose-600 hover:bg-rose-50 font-medium w-full text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      লগআউট
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <Link
                  href="/signin"
                  className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600 transition"
                >
                  সাইন ইন
                </Link>
                <Link
                  href="/signup"
                  className="px-5 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm hover:shadow transition"
                >
                  সাইন আপ
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Categories Navigation Strip */}
        <nav className="flex items-center gap-1.5 overflow-x-auto py-2.5 border-t border-slate-100 scrollbar-none text-sm font-medium">
          <Link
            href="/"
            className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              pathname === "/"
                ? "bg-emerald-600 text-white shadow-sm font-bold"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            সকল পণ্য
          </Link>
          {categories.map((cat) => {
            const isActive = pathname === `/category/${cat.slug}`;
            return (
              <Link
                key={cat.id || cat.slug}
                href={`/category/${cat.slug}`}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap flex items-center gap-1.5 transition-colors ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-sm font-bold"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.nameBn}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer/Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3">
          {user ? (
            <div className="space-y-2">
              <div className="p-3 bg-slate-50 rounded-xl">
                <p className="text-xs text-slate-500">লগইন প্রোফাইল</p>
                <p className="font-bold text-slate-800">{user.displayName || user.email}</p>
              </div>
              <Link
                href="/profile"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 font-medium"
              >
                আমার প্রোফাইল
              </Link>
              <Link
                href="/profile/update"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 font-medium"
              >
                তথ্য আপডেট
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-lg text-rose-600 hover:bg-rose-50 font-medium"
              >
                লগআউট
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 pt-2">
              <Link
                href="/signin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2.5 border border-slate-200 text-slate-700 font-semibold rounded-xl"
              >
                সাইন ইন
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2.5 bg-emerald-600 text-white font-semibold rounded-xl shadow-sm"
              >
                সাইন আপ
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Price Ticker (Infinite Marquee Ribbon) */}
      {tickerProducts && tickerProducts.length > 0 && (
        <div className="bg-slate-900 text-slate-200 overflow-hidden text-xs py-2 border-t border-slate-800 select-none">
          <div className="animate-marquee items-center gap-8 font-medium">
            {[...tickerProducts, ...tickerProducts].map((item, idx) => {
              const isUp = item.change?.dir === "up";
              const isDown = item.change?.dir === "down";
              return (
                <Link
                  key={`${item.id}-${idx}`}
                  href={`/product/${item.id}`}
                  className="flex items-center gap-2 hover:text-emerald-400 transition whitespace-nowrap cursor-pointer"
                >
                  <span className="text-sm">{item.image || item.categoryIcon || "🛒"}</span>
                  <span className="font-semibold text-white">{item.nameBn}</span>
                  <span className="text-slate-300">
                    {toBengali(item.today)} টাকা/{item.unit === "kg" ? "কেজি" : item.unit}
                  </span>
                  {isUp && (
                    <span className="flex items-center text-emerald-400 font-bold">
                      <TrendingUp className="w-3 h-3 mr-0.5" />
                      {toBengali(Math.abs(item.change.pct))}%
                    </span>
                  )}
                  {isDown && (
                    <span className="flex items-center text-rose-400 font-bold">
                      <TrendingDown className="w-3 h-3 mr-0.5" />
                      {toBengali(Math.abs(item.change.pct))}%
                    </span>
                  )}
                  <span className="text-slate-700 mx-2">•</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
