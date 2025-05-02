// components/ProductDetail.jsx
"use client";

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
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="p-8">
      <Link
        href="/webshop"
        className="inline-block mb-6 text-blue-500 hover:underline"
      >
        ← Back to Products
      </Link>

      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-xl font-semibold mb-4">{price} DKK</p>

      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={400}
          unoptimized
          className="rounded mb-6"
        />
      ) : (
        <p>No image available</p>
      )}

      <p className="whitespace-pre-line mb-6">{description}</p>

      <button
        onClick={() => setShowModal(true)}
        className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
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

      {others.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mt-12 mb-4">
            Our other S’25 limited edition clothes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/webshop/${o.slug}`}
                className="block border rounded overflow-hidden hover:shadow-lg transition"
              >
                {o.imageUrl && (
                  <Image
                    src={o.imageUrl}
                    alt={o.title}
                    width={200}
                    height={200}
                    unoptimized
                    className="w-full h-40 object-cover"
                  />
                )}
                <h3 className="p-2">{o.title}</h3>
              </Link>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
