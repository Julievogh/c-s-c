"use client";
import Image from "next/image";
import Link from "next/link";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const API_URL = process.env.API_URL || "http://localhost:1337";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.data.map((item) => {
          const description = Array.isArray(item.Description)
            ? item.Description.map((block) =>
                block.children.map((ch) => ch.text).join(" ")
              ).join("\n\n")
            : "No description";

          const img = item.Image;
          const path = img?.formats?.small?.url ?? img?.url;
          const imageUrl = path
            ? `${process.env.NEXT_PUBLIC_API_URL}${path}`
            : "/imgs/placeholder.png";

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
    <div className="p-8 max-w-7xl mx-auto flex flex-col gap-16">
      <div className="text-center max-w-2xl mx-auto">
        <p className="uppercase text-sm tracking-wide text-[var(--color-deep-wine)] font-semibold mb-2">
          Limited Edition · Made to Order
        </p>
        <h1 className="text-3xl font-bold mb-4">Cozy Social Club Webshop</h1>
        <p className="text-gray-700 leading-relaxed">
          Every item in our shop is a handcrafted experience. Designed for the
          inner circle, each drop is <strong>limited</strong>,{" "}
          <strong>made to order</strong>, and only available for a short time.
          When you reserve an item, you're not just buying—you’re becoming part
          of something rare. No mass production. No restocks.
        </p>
      </div>

      <div className="h-0.5 bg-[var(--color-dark-green)]"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/webshop/${p.slug}`}
            className="group block overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-200"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col p-4 h-64">
              <h2 className="text-lg font-semibold mb-2 transition-colors duration-200 group-hover:text-[var(--color-deep-wine)]">
                {p.title}
              </h2>
              <p className="text-sm text-gray-600 whitespace-pre-line flex-grow">
                {p.description}
              </p>
              <p className="text-sm text-[var(--color-deep-wine)] mt-2">
                Limited · Made to Order
              </p>
              <p className="text-xl font-bold mt-auto">{p.price} DKK</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="h-0.5 bg-[var(--color-dark-green)]"></div>

      <div className="mt-12">
        <Image
          src="/imgs/placeholder.png"
          alt="Merch promo"
          width={1200}
          height={400}
          className="rounded shadow mx-auto"
        />
      </div>

      <div className="h-0.5 bg-[var(--color-dark-green)]"></div>

      <div className="mt-12">
        <Image
          src="/imgs/logo-green.svg"
          alt="Cozy Social Club Logo"
          width={400}
          height={400}
          className="mx-auto"
        />
      </div>
      <Socials />
      <Footer className="mt-12" />
    </div>
  );
}
