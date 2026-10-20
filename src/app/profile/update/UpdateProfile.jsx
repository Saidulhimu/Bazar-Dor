"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";
import { ArrowLeft, User, Save } from "lucide-react";

export default function UpdateProfile() {
  const router = useRouter();
  const { user, loading, updateUserProfile } = useAuth();
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      toast.error("তথ্য পরিবর্তন করতে সাইন ইন করুন");
      router.push("/signin?redirect=/profile/update");
    } else if (user) {
      setName(user.displayName || "");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("অনুগ্রহ করে আপনার নাম লিখুন");
      return;
    }

    try {
      setSubmitting(true);
      await updateUserProfile(name.trim());
      toast.success("প্রোফাইল তথ্য সফলভাবে আপডেট হয়েছে!");
      router.push("/profile");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "তথ্য আপডেট করতে ব্যর্থ হয়েছে");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <Navbar />

      <main className="flex-1 max-w-xl mx-auto px-4 py-12 w-full space-y-6">
        <Link
          href="/profile"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-700 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-2xs hover:shadow-sm transition"
        >
          <ArrowLeft className="w-4 h-4" />
          প্রোফাইলে ফিরে যান
        </Link>

        {/* Update Information Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm space-y-6">
          <div>
            <span className="badge badge-success text-white text-xs font-bold mb-2">
              Challenge C3
            </span>
            <h1 className="text-2xl font-black text-slate-900">
              তথ্য আপডেট করুন (Update Information)
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              আপনার অ্যাকাউন্টের প্রদর্শিত নাম পরিবর্তন করুন
            </p>
          </div>

          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                আপনার নাম (Full Name)
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="আপনার পূর্ণ নাম লিখুন"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                ইমেইল (পরিবর্তনযোগ্য নয়)
              </label>
              <input
                type="email"
                disabled
                value={user.email || ""}
                className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-500 cursor-not-allowed font-medium"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                {submitting ? "সংরক্ষণ করা হচ্ছে..." : "তথ্য আপডেট করুন"}
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
