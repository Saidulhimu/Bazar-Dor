export default function Home() {
  return (
    <main className="min-h-screen bg-base-200 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header / Navbar sample */}
        <div className="navbar bg-base-100 rounded-box shadow-md px-6 flex justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🛒</span>
            <span className="font-bold text-xl text-primary">বাজার দর (Bazar Dor)</span>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-outline btn-sm">সাইন ইন</button>
            <button className="btn btn-primary btn-sm">সাইন আপ</button>
          </div>
        </div>

        {/* Hero Card */}
        <div className="hero bg-base-100 rounded-box shadow-md p-8 md:p-12">
          <div className="hero-content flex-col lg:flex-row-reverse gap-8">
            <div className="text-6xl text-center">🌾 🍚 🥔 🐟</div>
            <div>
              <div className="badge badge-success gap-2 mb-3">
                ✓ Next.js + Tailwind CSS + DaisyUI Ready
              </div>
              <h1 className="text-4xl font-extrabold text-base-content">
                বাজার দর প্ল্যাটফর্মে স্বাগতম!
              </h1>
              <p className="py-4 text-base-content/80">
                নিত্যপ্রয়োজনীয় পণ্যের নির্ভরযোগ্য বাজারদর এক নজরে যাচাই করুন।
                Next.js App Router, Tailwind CSS এবং DaisyUI সফলভাবে সেটআপ করা হয়েছে।
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="btn btn-primary">আজকের বাজারদর দেখুন</button>
                <button className="btn btn-secondary">ক্যাটাগরি</button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title text-success">
                <span>▲</span> আজ দাম বেড়েছে
              </h2>
              <p className="text-sm text-base-content/70">
                বাজারের ঊর্ধ্বমুখী পণ্যগুলোর হালনাগাদ তালিকা।
              </p>
              <div className="card-actions justify-end mt-2">
                <span className="badge badge-error badge-outline">+২.৫%</span>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title text-error">
                <span>▼</span> আজ দাম কমেছে
              </h2>
              <p className="text-sm text-base-content/70">
                বাজারের নিম্নমুখী পণ্যগুলোর হালনাগাদ তালিকা।
              </p>
              <div className="card-actions justify-end mt-2">
                <span className="badge badge-success badge-outline">-১.৮%</span>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title text-info">
                <span>📦</span> সব পণ্য
              </h2>
              <p className="text-sm text-base-content/70">
                চাল, ডাল, মাছ, মাংস ও শাকসবজির সার্বিক দাম।
              </p>
              <div className="card-actions justify-end mt-2">
                <span className="badge badge-info badge-outline">API তৈরি</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
