# 🛒 বাজার দর (Bazar Dor)

> **নিত্যপ্রয়োজনীয় পণ্যের নির্ভরযোগ্য ও সঠিক বাজারদর পর্যবেক্ষণ প্ল্যাটফর্ম**

---

## 📌 প্রজেক্ট পরিচিতি (Project Overview)

**বাজার দর (Bazar Dor)** হলো একটি আধুনিক, দ্রুতগতির ও রেসপন্সিভ ওয়েব অ্যাপ্লিকেশন যা ব্যবহারকারীদের প্রতিদিনের চাল, ডাল, তেল, শাকসবজি, মাছ ও মাংসের মতো নিত্যপ্রয়োজনীয় পণ্যের নির্ভরযোগ্য ও হালনাগাদ বাজারদর প্রদর্শন করে। ব্যবহারকারীরা যেকোনো বাজারে যাওয়ার আগেই দেশের বিভিন্ন বিভাগ ও পাইকারি/খুচরা বাজারের আসল মূল্য এক ক্লিকেই যাচাই করে নিতে পারেন।

---

## 🚀 গুরুত্বপূর্ণ লিংক (Important Links)

- **🌐 Live Deployment Link:** [https://bazar-dor.vercel.app](https://bazar-dor.vercel.app) *(আপনার ডেপ্লয়মেন্টের পর লিংক আপডেট করুন)*
- **📂 GitHub Repository:** [https://github.com/Saidulhimu/Bazar-Dor](https://github.com/Saidulhimu/Bazar-Dor)

---

## ✨ মূল বৈশিষ্ট্যসমূহ (Key Features)

1. **🔴 লাইভ প্রাইস টিকার (Live Infinite Price Ticker Marquee):**
   - ওয়েবসাইটের শীর্ষে অবিরাম স্ক্রলিং করা মূল্য তালিকা strip, যেখানে শীর্ষ পণ্যগুলোর বর্তমান দাম এবং দাম বৃদ্ধি/হ্রাসের শতকরা হার (▲/▼) দেখানো হয়।
   
2. **📈 আজ দাম বেড়েছে ও কমেছে (Top Risers & Fallers):**
   - স্বয়ংক্রিয়ভাবে ফিল্টার করা শীর্ষ ৬টি মূল্যবৃদ্ধি পাওয়া এবং শীর্ষ ৬টি মূল্যহ্রাস পাওয়া পণ্যের আলাদা সেকশন।

3. **🔢 বাংলা সংখ্যা সমর্থিত নির্ভুল সর্টিং (Numeric Price Sorting - Challenge C1):**
   - “দাম: কম থেকে বেশি” এবং “দাম: বেশি থেকে কম” ফিল্টারিং যা স্ট্রিং নয়, বরং আসল সংখ্যাসূচক মানের ভিত্তিতে সঠিকভাবে সর্ট করে।

4. **🏬 বাজারভিত্তিক বিস্তারিত দাম ও তুলনা (Market-wise Price Breakdown):**
   - প্রতিটি পণ্যের একক ও সার্বিক সর্বনিম্ন, সর্বোচ্চ ও গড় মূল্যসহ বিভিন্ন বাজার (কারওয়ান বাজার, মিরপুর, চট্টগ্রাম, রাজশাহী, সিলেট ইত্যাদি) অনুযায়ী বিভাগভিত্তিক তুলনামূলক চার্ট।

5. **🔐 নিরাপদ অথেন্টিকেশন ও প্রোফাইল আপডেট (Firebase Auth & Profile Update - Challenge C3):**
   - ইমেইল/পাসওয়ার্ড ও গুগল (Google Social Login) এর মাধ্যমে দ্রুত সাইন ইন/সাইন আপ।
   - লগইন ছাড়া প্রোডাক্ট ডিটেইলস সুরক্ষিত (Protected Route)।
   - প্রোফাইল থেকে ব্যবহারকারীর নাম সহজে আপডেট করার ডেডিকেটেড রুট (`/profile/update`)।

6. **📱 শতভাগ রেসপন্সিভ ডিজাইন ও ডেইজিইউআই থিম (100% Responsive with DaisyUI):**
   - মোবাইল, ট্যাবলেট ও ডেস্কটপ সব ডিভাইসের জন্য নিখুঁত গ্রিড লেআউট ও মসৃণ ইউজার এক্সপেরিয়েন্স।

---

## 🛠️ ব্যবহৃত প্রযুক্তিসমূহ (Technologies Used)

- **ফ্রেমওয়ার্ক:** [Next.js](https://nextjs.org/) (App Router, JavaScript)
- **লাইব্রেরি:** [React](https://react.dev/)
- **স্টাইলিং:** [Tailwind CSS (v3)](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **অথেন্টিকেশন:** [Firebase Authentication](https://firebase.google.com/) (Email/Password & Google OAuth)
- **টেলিমেট্রি ও টোস্ট:** [react-hot-toast](https://react-hot-toast.com/)
- **আইকন:** [Lucide React](https://lucide.dev/)
- **ডেটা সোর্স:** Programming Hero BazarDor REST API

---

## 💻 লোকাল মেশিনে রান করার নিয়ম (How to Run Locally)

১. রিপোজিটরিটি ক্লোন করুন:
```bash
git clone https://github.com/Saidulhimu/Bazar-Dor.git
cd Bazar-Dor
```

২. প্রয়োজনীয় ডিপেন্ডেন্সি ইনস্টল করুন:
```bash
npm install
```

৩. রুট ডিরেক্টরিতে একটি `.env.local` ফাইল তৈরি করুন এবং আপনার ফায়ারবেস ক্রেডেনশিয়াল যুক্ত করুন:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

৪. ডেভেলপমেন্ট সার্ভার চালু করুন:
```bash
npm run dev
```

৫. ব্রাউজারে [http://localhost:3000](http://localhost:3000) ওপেন করুন।
