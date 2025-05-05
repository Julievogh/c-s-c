// components/CheckoutModal.jsx
"use client";

import { useState } from "react";

export default function CheckoutModal({ title, price, slug, onClose }) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const placeOrder = async () => {
    setLoading(true);
    const res = await fetch("/api/purchase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, name, address, email }),
    });
    const { orderId } = await res.json();
    setOrderId(orderId);
    setStep(3);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 text-xl hover:text-black"
        >
          ✕
        </button>

        {step === 1 && (
          <>
            <h2 className="text-2xl font-semibold mb-2">Reserve Your Piece</h2>
            <p className="mb-4 text-gray-700">
              <strong>{title}</strong> — <strong>{price} DKK</strong>
            </p>
            <p className="text-sm text-gray-600 mb-6">
              This item is <strong>made to order</strong> and part of a{" "}
              <strong>limited edition</strong> run. You’re signing up to reserve
              your piece — confirmation will be sent via email.
            </p>
            <button
              onClick={() => setStep(2)}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Continue
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Your Information</h2>
            <label className="block mb-3">
              Name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 border border-gray-300 w-full p-2 rounded"
                placeholder="Full name"
              />
            </label>
            <label className="block mb-3">
              Email
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 border border-gray-300 w-full p-2 rounded"
                placeholder="you@example.com"
              />
            </label>
            <label className="block mb-4">
              Shipping Address
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 border border-gray-300 w-full p-2 rounded"
                placeholder="Street, City, Postal Code"
              />
            </label>
            <button
              onClick={placeOrder}
              disabled={!name || !email || !address || loading}
              className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Reserve Now"}
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-2xl font-bold mb-2">You're In!</h2>
            <p className="mb-4 text-gray-700">
              You've reserved your limited edition piece. A confirmation will be
              sent to your email shortly.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              (Mock Order ID: <strong>{orderId}</strong>)
            </p>
            <button
              onClick={onClose}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}
