"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";
import { User, Mail, Edit3, LogOut, ShieldCheck, ArrowLeft } from "lucide-react";

export default function Profile() {
  const router = useRouter();
  const { user, loading, logOut } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      toast.error("প্রোফাইল দেখতে অনুগ্রহ করে সাইন ইন করুন");
      router.push("/signin?redirect=/profile");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const handleLogout = async () => {
    await logOut();
    toast.success("লগআউট সফল হয়েছে");
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto px-4 py-12 w-full space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-700 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-2xs hover:shadow-sm transition"
        >
          <ArrowLeft className="w-4 h-4" />
          হোমে ফিরে যান
        </Link>

        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm">
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-slate-100 text-center sm:text-left">
            <div className="w-24 h-24 rounded-full bg-emerald-600 text-white text-3xl font-black flex items-center justify-center shadow-md overflow-hidden shrink-0">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User"}
                  className="w-full h-full object-cover"
                />
              ) : (
                (user.displayName || user.email || "U").charAt(0).toUpperCase()
              )}
            </div>

            <div className="space-y-1 flex-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                যাচাইকৃত ব্যবহারকারী
              </div>
              <h1 className="text-2xl font-black text-slate-900">
                {user.displayName || "নাম দেওয়া হয়নি"}
              </h1>
              <p className="text-sm text-slate-500 font-medium">{user.email}</p>
            </div>

            {/* Requirement C3: Update Information Button */}
            <div>
              <Link
                href="/profile/update"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition text-sm cursor-pointer"
              >
                <Edit3 className="w-4 h-4" />
                তথ্য আপডেট
              </Link>
            </div>
          </div>

          {/* Account Details */}
          <div className="py-6 space-y-4">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
              অ্যাকাউন্ট বিবরণ
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
                <User className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-xs text-slate-400 font-semibold">নাম</p>
                  <p className="text-sm font-bold text-slate-800">
                    {user.displayName || "সেট করা হয়নি"}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-xs text-slate-400 font-semibold">ইমেইল</p>
                  <p className="text-sm font-bold text-slate-800 truncate">{user.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logout Action */}
          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-rose-600 hover:bg-rose-50 border border-rose-200 rounded-xl font-bold text-sm transition"
            >
              <LogOut className="w-4 h-4" />
              লগআউট
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
