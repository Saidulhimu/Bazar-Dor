"use client";

import { ArrowUpDown, ChevronDown } from "lucide-react";

export default function SortDropdown({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort-select" className="text-sm font-semibold text-slate-700 flex items-center gap-1.5 whitespace-nowrap">
        <ArrowUpDown className="w-4 h-4 text-emerald-600" />
        সাজান:
      </label>
      <div className="relative inline-block">
        <select
          id="sort-select"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none bg-white border border-slate-200 hover:border-emerald-300 text-slate-800 text-sm font-medium rounded-xl py-2 pl-3 pr-8 shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition cursor-pointer"
        >
          <option value="default">ডিফল্ট</option>
          <option value="low-to-high">দাম: কম থেকে বেশি</option>
          <option value="high-to-low">দাম: বেশি থেকে কম</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
