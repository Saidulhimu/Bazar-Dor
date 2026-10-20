# 🛒 বাজার দর (Bazar Dor) — Daily Commodity Price Tracker

[![Next.js](https://img.shields.io/badge/Next.js-16.4.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-v4.12-5AD8E6?style=for-the-badge&logo=daisyui)](https://daisyui.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Auth-FFCA28?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://bazar-dor-lac.vercel.app)

> **নিত্যপ্রয়োজনীয় পণ্যের নির্ভরযোগ্য ও সঠিক বাজারদর পর্যবেক্ষণ প্ল্যাটফর্ম**  
> A full-stack web application tracking daily essential grocery and commodity prices across major markets and divisions in Bangladesh, built with **Next.js App Router**, **Tailwind CSS**, and **Firebase Authentication**.

---

## 📬 অ্যাসাইনমেন্ট সাবমিশন লিংক (Submission Links)

| বিবরণ | লিংক |
| :--- | :--- |
| **🌐 লাইভ ওয়েবসাইট (Live Link)** | **[https://bazar-dor-lac.vercel.app](https://bazar-dor-lac.vercel.app)** |
| **📂 গিটহাব রিপোজিটরি (GitHub Repo)** | **[https://github.com/Saidulhimu/Bazar-Dor](https://github.com/Saidulhimu/Bazar-Dor)** |

---

## ⚡ পরীক্ষকদের জন্য মূল্যায়ন ক্রেডেনশিয়াল (Examiner Demo Login)

পরীক্ষক যাতে কোনো ঝামেলা ছাড়াই সরাসরি প্রটেক্টেড রুট ও ফিচারগুলো পরীক্ষা করতে পারেন, সেজন্য সাইন ইন পেজে **১-ক্লিক ডেমো লগইন বাটন** রাখা হয়েছে:
1. **১-ক্লিক ডেমো লগইন:** [`/signin`](https://bazar-dor-lac.vercel.app/signin) পেজে যান এবং **"⚡ পরীক্ষক ডেমো অ্যাকাউন্ট দিয়ে সরাসরি লগইন"** বাটনে ক্লিক করুন।
2. **ইমেইল / পাসওয়ার্ড রেজিস্ট্রেশন:** যেকোনো বৈধ ইমেইল এবং কমপক্ষে ৬ অক্ষরের পাসওয়ার্ড দিয়ে নতুন অ্যাকাউন্ট খুলতে পারেন।
3. **গুগল লগইন:** এক ক্লিকে "Google দিয়ে চালিয়ে যান" বাটনের মাধ্যমে সরাসরি সাইন ইন করা সম্ভব।

---

## 📌 প্রজেক্ট পরিচিতি (Project Overview)

**বাজার দর (Bazar Dor)** হলো একটি আধুনিক, দ্রুতগতির ও রেসপন্সিভ ওয়েব অ্যাপ্লিকেশন যা ব্যবহারকারীদের প্রতিদিনের চাল, ডাল, তেল, শাকসবজি, মাছ ও মাংসের মতো নিত্যপ্রয়োজনীয় পণ্যের নির্ভরযোগ্য ও হালনাগাদ বাজারদর প্রদর্শন করে। সাধারণ ক্রেতারা বাজারে যাওয়ার আগেই পণ্যের ওঠানামা, গড় মূল্য, সর্বোচ্চ-সর্বনিম্ন দর এবং এলাকাভিত্তিক খুচরা ও পাইকারি বাজারদর এক ক্লিকেই পর্যবেক্ষণ করতে পারেন।

---

## ✨ মূল বৈশিষ্ট্যসমূহ (Key Features)

### ১. 🔴 লাইভ প্রাইস টিকার (Live Infinite Price Marquee)
- নেভিগেশন বারের নিচে চলমান একটি অসীম অ্যানিমেশন রিবন যা শীর্ষ পণ্যগুলোর নাম, বর্তমান দাম এবং দামের পরিবর্তন (▲ বৃদ্ধি / ▼ হ্রাস) শতকরা হারে লাইভ প্রদর্শন করে।

### ২. 📈 আজ দাম বেড়েছে ও দাম কমেছে (Section A & Section B)
- **আজ দাম বেড়েছে ▲:** বাজারের সর্বোচ্চ মূল্যবৃদ্ধি পাওয়া শীর্ষ ৬টি পণ্যের আলাদা সেকশন (লাল রঙের ঊর্ধ্বমুখী নির্দেশক)।
- **আজ দাম কমেছে ▼:** বাজারের সর্বোচ্চ মূল্যহ্রাস পাওয়া সুবিধাজনক শীর্ষ ৬টি পণ্যের আলাদা সেকশন (সবুজ রঙের নিম্নমুখী নির্দেশক)।

### ৩. 🔢 সংখ্যাগত সঠিক সর্টিং (Challenge C1 - Numeric Price Sorting)
- “সব পণ্য” এবং ক্যাটাগরি পেজে `ডিফল্ট`, `দাম: কম থেকে বেশি` এবং `দাম: বেশি থেকে কম` সর্টিং অপশন। এটি টেক্সট/স্ট্রিং নয়, বরং বাংলা সংখ্যার আসল সংখ্যাসূচক মানের ভিত্তিতে সঠিকভাবে সর্ট করে।

### ৪. 🏬 বাজারভিত্তিক বিস্তারিত দাম ও তুলনা (Market-wise Price Breakdown)
- পণ্য ডিটেইলস পেজে প্রতিটি পণ্যের জন্য সর্বোচ্চ দাম, সর্বনিম্ন দাম এবং গড় দামের সার্বিক পরিসংখ্যান কার্ড।
- বিভিন্ন বিভাগ (ঢাকা, চট্টগ্রাম, রাজশাহী, সিলেট ইত্যাদি) অনুযায়ী ফিল্টার করার সুবিধাসহ কারওয়ান বাজার, মিরপুর, নিউমার্কেট ইত্যাদি বাজারের সর্বনিম্ন ও সর্বোচ্চ খুচরা মূল্যের তুলনামূলক টেবিল।

### ৫. 🔐 সুরক্ষিত রুট ও অথেন্টিকেশন (Protected Routes & Auth)
- প্রোডাক্ট ডিটেইলস (`/product/[id]`) এবং প্রোফাইল (`/profile`) পেজ অথেন্টিকেশন দ্বারা সুরক্ষিত। লগইন ছাড়া প্রবেশ করতে চাইলে স্বয়ংক্রিয়ভাবে টোস্ট নোটিফিকেশন প্রদর্শন করে সাইন ইন পেজে রিডাইরেক্ট করে।

### ৬. 👤 প্রোফাইল আপডেট ফিচার (Challenge C3 - Update Information)
- প্রোফাইল পেজে ডেডিকেটেড "তথ্য আপডেট" বাটন রয়েছে, যা `/profile/update` রুটে নিয়ে যায়। সেখানে ব্যবহারকারী তার নাম পরিবর্তন করে রিয়েল-টাইমে আপডেট সংরক্ষণ করতে পারেন।

### ৭. 📱 শতভাগ রেসপন্সিভ ডিজাইন ও ডেইজিইউআই থিম (100% Responsive with DaisyUI)
- মোবাইল, ট্যাবলেট ও ডেস্কটপ সব ডিভাইসে স্বাচ্ছন্দ্যে ব্রাউজিং উপযোগী রেসপন্সিভ ৩/৪ কলাম গ্রিড লেআউট, লোডিং স্কেলিটন স্টেট এবং কাস্টম ৪-০-৪ পেজ।

---

## 🏆 চ্যালেঞ্জ রিকোয়ারমেন্টসমূহ (Challenge Checklist)

- [x] **Challenge C1 (Sort Dropdown):** বাংলা সংখ্যা সঠিকভাবে হ্যান্ডেল করে সংখ্যাগত মানের ভিত্তিতে `কম থেকে বেশি` ও `বেশি থেকে কম` সর্ট করা হয়েছে।
- [x] **Challenge C2 (GitHub README):** প্রজেক্টের নাম, বর্ণনা, ব্যবহৃত প্রযুক্তি, ন্যূনতম ৫টি মূল ফিচার এবং লাইভ লিংক সহ গোছানো ডকুমেন্টেশন।
- [x] **Challenge C3 (Update Information Feature):** `/profile/update` রুটে প্রোফাইল তথ্য পরিবর্তনের ফর্ম ও আপডেট হ্যান্ডলিং।

---

## 🛠️ ব্যবহৃত প্রযুক্তিসমূহ (Technologies Used)

| প্রযুক্তি | ব্যবহার ও উদ্দেশ্য |
| :--- | :--- |
| **Next.js 16 (App Router)** | পূর্ণাঙ্গ ফ্রন্টএন্ড UI, ফাইল-বেজড রাউটিং ও সার্ভার সাইড অপ্টিমাইজেশন |
| **React 19** | কম্পোনেন্ট-বেজড স্টেট ম্যানেজমেন্ট ও ইউজার ইন্টারফেস |
| **Tailwind CSS v3** | ইউটিলিটি-ফার্স্ট আধুনিক ও রেসপন্সিভ ডিজাইন |
| **DaisyUI v4** | প্রিমিয়াম UI কম্পোনেন্ট ও কালার সিস্টেম |
| **Firebase Auth** | ইমেইল/পাসওয়ার্ড ও গুগল পপআপ অথেন্টিকেশন |
| **react-hot-toast** | ব্যবহারকারীর ইন্টারঅ্যাকশনে তাৎক্ষণিক অ্যালার্ট ও ফিডব্যাক |
| **Lucide React** | আধুনিক ও নান্দনিক ভেক্টর আইকন |
| **Programming Hero API** | নিত্যপ্রয়োজনীয় পণ্যের লাইভ ডেটা সোর্স (`/api/bazardor`) |

---

## 📂 প্রজেক্ট ফাইল স্ট্রাকচার (Project Structure)

```text
B14-A7-Bazar-Dor/
├── public/                     # স্ট্যাটিক অ্যাসেটস (হিরো ইমেজ, লোগো)
│   ├── bazar-hero.png
│   └── logo-icon.png
├── src/
│   ├── app/                    # Next.js App Router পেজ ও রাউট
│   │   ├── category/[slug]/    # ক্যাটাগরি পেজ (Category.jsx + page.js)
│   │   ├── product/[id]/       # প্রোডাক্ট ডিটেইলস (ProductDetail.jsx + page.js)
│   │   ├── profile/            # প্রোফাইল পেজ (Profile.jsx + page.js)
│   │   │   └── update/         # প্রোফাইল আপডেট (UpdateProfile.jsx + page.js)
│   │   ├── signin/             # সাইন ইন পেজ (SignIn.jsx + page.js)
│   │   ├── signup/             # সাইন আপ পেজ (SignUp.jsx + page.js)
│   │   ├── Home.jsx            # হোম পেজ মূল কম্পোনেন্ট
│   │   ├── page.js             # হোম রুট এন্ট্রি
│   │   ├── layout.js           # রুট লেআউট ও অথ প্রোভাইডার
│   │   ├── loading.js          # গ্লোবাল লোডিং স্কেলিটন
│   │   ├── not-found.js        # কাস্টম ৪-০-৪ পেজ
│   │   └── globals.css         # টেইলউইন্ড ও চলমান অ্যানিমেশন
│   ├── components/             # রিইউজেবল UI কম্পোনেন্টসমূহ
│   │   ├── Navbar.jsx          # হেডার, লাইভ বাংলা তারিখ ও প্রাইস টিকার
│   │   ├── Hero.jsx            # হিরো ব্যানার ও স্মুথ স্ক্রোল CTA
│   │   ├── ProductCard.jsx     # পণ্যের কার্ড ও দাম পরিবর্তনের ব্যাজ
│   │   ├── SortDropdown.jsx    # সর্টিং ড্রপডাউন (Challenge C1)
│   │   ├── SkeletonCard.jsx    # লোডিং স্কেলিটন কার্ড
│   │   └── Footer.jsx          # ফিগমা অনুযায়ী ফুটার
│   ├── context/
│   │   └── AuthContext.js      # ফায়ারবেস অথেন্টিকেশন প্রোভাইডার
│   └── lib/
│       ├── api.js              # ডেটা ফেচিং ও ফলব্যাক লজিক
│       ├── bengali.js          # বাংলা সংখ্যা ও তারিখ কনভার্টার
│       └── firebase.js         # ফায়ারবেস অ্যাপ ইনিশিয়ালাইজেশন
├── .env.local                  # ক্লায়েন্ট এনভায়রনমেন্ট ভ্যারিয়েবল
├── tailwind.config.js          # টেইলউইন্ড ও ডেইজিইউআই কনফিগারেশন
└── README.md                   # পূর্ণাঙ্গ প্রজেক্ট ডকুমেন্টেশন
```

---

## 💻 লোকাল মেশিনে রান করার নিয়ম (How to Run Locally)

### ১. রিপোজিটরিটি ক্লোন করুন:
```bash
git clone https://github.com/Saidulhimu/Bazar-Dor.git
cd Bazar-Dor
```

### ২. প্রয়োজনীয় ডিপেন্ডেন্সি ইনস্টল করুন:
```bash
npm install
```

### ৩. এনভায়রনমেন্ট ভ্যারিয়েবল সেটআপ করুন:
রুট ডিরেক্টরিতে একটি `.env.local` ফাইল তৈরি করুন এবং নিচের মানগুলো যুক্ত করুন:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
```

### ৪. ডেভেলপমেন্ট সার্ভার চালু করুন:
```bash
npm run dev
```

### ৫. ব্রাউজারে ওপেন করুন:
ব্রাউজারে [http://localhost:3000](http://localhost:3000) ঠিকানায় প্রবেশ করে পুরো ওয়েবসাইটটি পরীক্ষা করুন।

---

## 👨‍💻 ডেভেলপার পরিচিতি (Author)

- **ডেভেলপার:** সাইদুল ইসলাম
- **কোর্স:** Programming Hero Web Development Course (Batch 14)
- **অ্যাসাইনমেন্ট:** Assignment 07 (Bazar Dor)
- **গিটহাব প্রোফাইল:** [@Saidulhimu](https://github.com/Saidulhimu)
