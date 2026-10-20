// Helper to convert English numbers to Bengali numerals
export function toBengali(num) {
  if (num === null || num === undefined || isNaN(num)) return "০";
  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num
    .toString()
    .replace(/\d/g, (d) => bengaliDigits[parseInt(d, 10)]);
}

// Convert date to formatted Bangla string
export function getBengaliDate() {
  const days = [
    "রবিবার",
    "সোমবার",
    "মঙ্গলবার",
    "বুধবার",
    "বৃহস্পতিবার",
    "শুক্রবার",
    "শনিবার",
  ];
  const months = [
    "জানুয়ারি",
    "ফেব্রুয়ারি",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর",
  ];

  const now = new Date();
  const dayName = days[now.getDay()];
  const date = toBengali(now.getDate());
  const monthName = months[now.getMonth()];
  const year = toBengali(now.getFullYear());

  return `${dayName}, ${date} ${monthName} ${year}`;
}

// Map units to Bangla label
export function getUnitLabel(unit) {
  switch ((unit || "").toLowerCase()) {
    case "kg":
      return "প্রতি কেজি";
    case "liter":
    case "l":
      return "প্রতি লিটার";
    case "dozen":
      return "প্রতি ডজন";
    case "piece":
    case "pc":
      return "প্রতি পিস";
    case "gm":
    case "g":
      return "প্রতি গ্রাম";
    default:
      return unit ? `প্রতি ${unit}` : "প্রতি কেজি";
  }
}
