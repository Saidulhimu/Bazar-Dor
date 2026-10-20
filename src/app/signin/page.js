"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";
import { ShoppingCart, Mail, Lock, LogIn, ArrowRight } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/";
  const { signInUser, signInWithGoogle, signInAsDemoUser } = useAuth();

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("ইমেইল ও পাসওয়ার্ড উভয়টি প্রদান করুন");
      return;
    }

    try {
      setSubmitting(true);
      await signInUser(email, password);
      toast.success("সফলভাবে লগইন হয়েছে!");
      router.push(redirectUrl);
    } catch (err) {
      console.error(err);
      if (err.code === "auth/invalid-credential" || err.code === "auth/wrong-password") {
        toast.error("ভুল ইমেইল অথবা পাসওয়ার্ড দেওয়া হয়েছে");
      } else if (err.code === "auth/user-not-found") {
        toast.error("এই ইমেইলে কোনো অ্যাকাউন্ট পাওয়া যায়নি");
      } else {
        toast.error(err.message || "লগইন করতে সমস্যা হয়েছে");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setSubmitting(true);
      await signInWithGoogle();
      toast.success("গুগল দিয়ে সফলভাবে লগইন হয়েছে!");
      router.push(redirectUrl);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "গুগল সাইন ইন সম্পন্ন করা যায়নি");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <span className="text-3xl font-black text-slate-900 tracking-tight">
              বাজার <span className="text-emerald-600">দর</span>
            </span>
          </Link>
          <h2 className="text-2xl font-black text-slate-900 mt-4">
            সাইন ইন করুন
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            আপনার অ্যাকাউন্টে প্রবেশ করে দৈনিক বাজারদর পর্যবেক্ষণ করুন
          </p>
        </div>

        {/* Card Box */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm">
          <form onSubmit={handleEmailSignIn} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                ইমেইল এড্রেস
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                পাসওয়ার্ড
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <LogIn className="w-4 h-4" />
              {submitting ? "প্রবেশ করা হচ্ছে..." : "লগইন"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <span className="relative bg-white px-3 text-xs font-semibold text-slate-400">
              অথবা
            </span>
          </div>

          {/* Social Google Login Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={submitting}
            className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-slate-700 text-sm font-semibold flex items-center justify-center gap-3 shadow-2xs hover:border-slate-300 transition cursor-pointer disabled:opacity-50"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            Google দিয়ে চালিয়ে যান
          </button>

          {/* Quick Demo Login for Examiner */}
          <button
            type="button"
            onClick={() => {
              signInAsDemoUser();
              toast.success("ডেমো মোডে সফলভাবে লগইন হয়েছে!");
              router.push(redirectUrl);
            }}
            className="w-full mt-2.5 py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>⚡</span>
            পরীক্ষক ডেমো অ্যাকাউন্ট দিয়ে সরাসরি লগইন
          </button>

          {/* Bottom Switch Link */}
          <div className="mt-6 pt-5 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500 font-medium">
              অ্যাকাউন্ট নেই?{" "}
              <Link
                href="/signup"
                className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
              >
                সাইন আপ করুন
                <ArrowRight className="w-3 h-3" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
