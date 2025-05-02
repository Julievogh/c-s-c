"use client";

import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.data.map((item) => {
          // description flatten (unchanged)
          const description = Array.isArray(item.Description)
            ? item.Description.map((block) =>
                block.children.map((ch) => ch.text).join(" ")
              ).join("\n\n")
            : "No description";

          // ← HERE’S THE FIX for Strapi v5 shape: use item.Image.url, not nested .data.attributes
          const img = item.Image;
          const path = img?.formats?.small?.url ?? img?.url; // pick the small format if present, else the original
          const imageUrl = path
            ? `${process.env.NEXT_PUBLIC_API_URL}${path}` // prepend your Strapi host
            : "/imgs/placeholder.png"; // fallback

          return {
            id: item.id,
            title: item.Title,
            description,
            price: item.Price,
            image: imageUrl,
            slug: item.Slug,
          };
        });
        setProducts(formatted);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-8">Loading…</p>;
  if (!products.length) return <p className="p-8">No products available</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded shadow">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <p className="text-sm text-gray-600 whitespace-pre-line">
              {p.description}
            </p>
            <p className="text-xl font-bold mt-2">{p.price} DKK</p>
            <a href={`/webshop/${p.slug}`} className="text-blue-500">
              View Product
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
