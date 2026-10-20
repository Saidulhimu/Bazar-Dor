export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-xs animate-pulse flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 rounded-2xl bg-slate-200"></div>
          <div className="w-16 h-6 rounded-full bg-slate-200"></div>
        </div>
        <div className="h-5 w-3/4 bg-slate-200 rounded mb-2"></div>
        <div className="h-3 w-1/3 bg-slate-100 rounded"></div>
      </div>
      <div className="mt-5 pt-4 border-t border-slate-100 flex items-end justify-between">
        <div>
          <div className="h-3 w-16 bg-slate-100 rounded mb-1"></div>
          <div className="h-7 w-24 bg-slate-200 rounded"></div>
        </div>
        <div className="h-6 w-16 rounded-lg bg-slate-200"></div>
      </div>
    </div>
  );
}
