const BASE_URLS = [
  "https://openapi.programming-hero.com/api/bazardor",
  "https://api.api-store.workers.dev/api/bazardor",
  "https://api.abcz.workers.dev/api/bazardor",
];

async function fetchFromApi(endpoint) {
  let lastError = null;

  for (const baseUrl of BASE_URLS) {
    try {
      const res = await fetch(`${baseUrl}${endpoint}`, {
        next: { revalidate: 60 },
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      lastError = err;
    }
  }

  console.error(`Failed to fetch from all endpoints for: ${endpoint}`, lastError);
  return null;
}

// Fetch all categories
export async function getCategories() {
  const data = await fetchFromApi("/categories");
  if (Array.isArray(data) && data.length > 0) {
    return data;
  }
  // Safe fallback
  return [
    { id: "chal", slug: "chal", nameBn: "চাল", icon: "🍚" },
    { id: "dal", slug: "dal", nameBn: "ডাল", icon: "🫘" },
    { id: "tel", slug: "tel", nameBn: "তেল", icon: "🛢️" },
    { id: "sobji", slug: "sobji", nameBn: "সবজি", icon: "🥬" },
    { id: "mach", slug: "mach", nameBn: "মাছ", icon: "🐟" },
    { id: "mangsho", slug: "mangsho", nameBn: "মাংস", icon: "🍗" },
    { id: "dim-dui", slug: "dim-dui", nameBn: "ডিম-দুধ", icon: "🥛" },
    { id: "mosla", slug: "mosla", nameBn: "মসলা", icon: "🌶️" },
  ];
}

// Fetch all products
export async function getProducts(category) {
  const endpoint = category ? `/products?category=${category}` : "/products";
  const data = await fetchFromApi(endpoint);
  return Array.isArray(data) ? data : [];
}

// Fetch single product by id or slug
export async function getProduct(idOrSlug) {
  // If it's numeric, try /products/:id
  if (!isNaN(idOrSlug)) {
    const data = await fetchFromApi(`/products/${idOrSlug}`);
    if (data && data.id) return data;
  }

  // Otherwise or fallback: fetch all products and find matching id or slug
  const all = await getProducts();
  return (
    all.find(
      (p) =>
        String(p.id) === String(idOrSlug) ||
        p.slug === idOrSlug ||
        p.nameBn === idOrSlug
    ) || null
  );
}

// Fetch single category info
export async function getCategory(slug) {
  const categories = await getCategories();
  return categories.find((c) => c.slug === slug || c.id === slug) || null;
}
