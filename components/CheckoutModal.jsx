// components/CheckoutModal.jsx
"use client";

import { useState } from "react";

export default function CheckoutModal({ title, price, slug, onClose }) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const placeOrder = async () => {
    setLoading(true);
    const res = await fetch("/api/purchase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, name, address }),
    });
    const { orderId } = await res.json();
    setOrderId(orderId);
    setStep(3);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded w-full max-w-md">
        <button onClick={onClose} className="float-right text-gray-500">
          ✕
        </button>

        {step === 1 && (
          <>
            <h2 className="text-2xl mb-4">Confirm Purchase</h2>
            <p className="mb-4">
              Buying <strong>{title}</strong> for <strong>{price} DKK</strong>
            </p>
            <button
              onClick={() => setStep(2)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Continue
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl mb-4">Your Details</h2>
            <label className="block mb-2">
              Name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border w-full p-2 rounded"
              />
            </label>
            <label className="block mb-4">
              Address
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border w-full p-2 rounded"
              />
            </label>
            <button
              onClick={placeOrder}
              disabled={!name || !address || loading}
              className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              {loading ? "Processing…" : "Place Order"}
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-2xl mb-4">Thank You!</h2>
            <p className="mb-4">
              Your mock order ID: <strong>{orderId}</strong>
            </p>
            <button
              onClick={onClose}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}
