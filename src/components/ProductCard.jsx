import Link from "next/link";
import { toBengali, getUnitLabel } from "@/lib/bengali";
import { TrendingUp, TrendingDown, Minus, ArrowRight } from "lucide-react";

export default function ProductCard({ product }) {
  if (!product) return null;

  const isUp = product.change?.dir === "up";
  const isDown = product.change?.dir === "down";
  const isFlat = !isUp && !isDown;
  const changePct = Math.abs(product.change?.pct || 0);

  return (
    <Link
      href={`/product/${product.id}`}
      className="group bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top bar: Category badge + Emoji icon */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-emerald-50 transition-transform">
            <span>{product.image || product.categoryIcon || "🛒"}</span>
          </div>

          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-800 transition-colors">
            {product.categoryNameBn || "সাধারণ"}
          </span>
        </div>

        {/* Product Title & Unit */}
        <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
          {product.nameBn}
        </h3>
        <p className="text-xs text-slate-500 font-medium mt-0.5">
          {getUnitLabel(product.unit)}
        </p>
      </div>

      {/* Price Section */}
      <div className="mt-5 pt-4 border-t border-slate-100">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              আজকের দাম
            </p>
            <p className="text-2xl font-black text-slate-900 leading-tight">
              {toBengali(product.today)}{" "}
              <span className="text-sm font-semibold text-slate-500">টাকা</span>
            </p>
          </div>

          {/* Change Badge */}
          <div>
            {isUp && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs">
                <TrendingUp className="w-3.5 h-3.5" />
                ▲ {toBengali(changePct)}%
              </span>
            )}
            {isDown && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200/80 shadow-2xs">
                <TrendingDown className="w-3.5 h-3.5" />
                ▼ {toBengali(changePct)}%
              </span>
            )}
            {isFlat && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200 shadow-2xs">
                <Minus className="w-3.5 h-3.5" />
                — {toBengali(0.0)}%
              </span>
            )}
          </div>
        </div>

        {/* View Details Link Hint */}
        <div className="mt-3 flex items-center justify-between text-xs text-emerald-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          <span>বাজারভিত্তিক দর দেখুন</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
