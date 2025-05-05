// components/MobileMenu.jsx (unchanged)
"use client";
import Link from "next/link";

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div
      className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="bg-[var(--color-warm-white)] px-4 pt-2 pb-4 space-y-2 text-sm">
        <Link href="#popup" onClick={onClose} className="block uppercase">
          Pop-up
        </Link>
        <Link href="#fine-dining" onClick={onClose} className="block uppercase">
          Fine-Dining
        </Link>
        <Link href="/blog" onClick={onClose} className="block uppercase">
          Blog
        </Link>
        <Link href="#your-event" onClick={onClose} className="block uppercase">
          Event
        </Link>
        <Link href="#story" onClick={onClose} className="block uppercase">
          Story
        </Link>
        <Link href="/webshop" onClick={onClose} className="block mt-2">
          <span className="btn btn-primary uppercase w-full text-center py-1 text-xs">
            Shop
          </span>
        </Link>
      </div>
    </div>
  );
}
