"use client";

import Image from "next/image";
import Link from "next/link";
import { useBasketStore } from "@/stores/useBasketStore";

export default function BasketPage() {
  const { items, removeItem, clear } = useBasketStore();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Your Basket</h1>
        <p>Your basket is empty.</p>
        <Link href="/webshop" className="text-blue-500 mt-4 inline-block">
          ← Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Your Basket</h1>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.slug} className="flex items-center gap-4">
            {item.imageUrl && (
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={80}
                height={80}
                unoptimized
                className="rounded"
              />
            )}
            <div className="flex-1">
              <h2 className="font-semibold">{item.title}</h2>
              <p>
                {item.quantity} × {item.price} DKK ={" "}
                <strong>{item.quantity * item.price} DKK</strong>
              </p>
            </div>
            <button
              onClick={() => removeItem(item.slug)}
              className="text-red-600 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <p className="text-xl font-semibold">Total: {total} DKK</p>
        <button
          onClick={() => alert("Pretend checkout complete!")}
          className="bg-green-600 text-white px-6 py-3 rounded mt-4"
        >
          Checkout
        </button>
        <button
          onClick={clear}
          className="ml-4 bg-gray-300 px-6 py-3 rounded mt-4"
        >
          Clear Basket
        </button>
      </div>
    </div>
  );
}
