export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center">
      <div className="w-12 h-12 rounded-full border-4 border-emerald-600 border-t-transparent animate-spin"></div>
      <p className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
        লোড হচ্ছে...
      </p>
    </div>
  );
}
