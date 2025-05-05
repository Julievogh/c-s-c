"use client";
// components/ProductDetail.jsx
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CheckoutModal from "@/components/CheckoutModal";

export default function ProductDetail({
  title,
  price,
  description,
  imageUrl,
  slug,
  others,
  colors, // Accept colors prop
  note,
}) {
  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <main className="p-6 md:p-12 max-w-6xl mx-auto font-sans text-neutral-800">
      <Link
        href="/webshop"
        className="inline-block mb-8 text-sm text-neutral-500 hover:underline"
      >
        ← Back to all products
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              width={600}
              height={600}
              unoptimized
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          ) : (
            <p className="text-neutral-400">No image available</p>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">{title}</h1>
          <p className="text-2xl font-light text-neutral-700 mb-6">
            {price} DKK
          </p>

          <p className="text-neutral-600 whitespace-pre-line leading-relaxed mb-8">
            {description}
          </p>

          {colors && colors.length > 0 && (
            <div className="flex gap-4 mb-6">
              <p className="font-semibold text-neutral-700">Choose color:</p>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={`${slug}-${color.name}-${color.hex}`} // Ensure unique key
                    onClick={() => setSelectedColor(color.hex)}
                    style={{ backgroundColor: color.hex }}
                    className={`w-8 h-8 rounded-full border-2 border-white ${
                      selectedColor === color.hex ? "border-4" : ""
                    }`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => setShowModal(true)}
            className="bg-black text-white px-6 py-3 rounded-full w-fit hover:bg-neutral-800 transition"
          >
            Purchase
          </button>

          {showModal && (
            <CheckoutModal
              title={title}
              price={price}
              slug={slug}
              onClose={() => setShowModal(false)}
            />
          )}

          {note && <p className="mt-4 text-sm text-neutral-500">{note}</p>}
        </div>
      </div>

      {others.length > 0 && (
        <section className="mt-24 bg-neutral-100 p-8 md:p-12 rounded-xl">
          <h2 className="text-2xl font-semibold mb-6">
            More from the S’25 limited edition
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/webshop/${o.slug}`}
                className="block border border-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition bg-white"
              >
                {o.imageUrl && (
                  <Image
                    src={o.imageUrl}
                    alt={o.title}
                    width={400}
                    height={400}
                    unoptimized
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-medium">{o.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
