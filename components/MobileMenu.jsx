// components/MobileMenu.jsx
"use client";
import Link from "next/link";

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div
      className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="bg-[var(--color-warm-white)] px-6 pt-4 pb-6 space-y-4">
        <Link
          href="#popup"
          onClick={onClose}
          className="block text-xl uppercase font-karla"
        >
          Pop-up Experience
        </Link>
        <Link
          href="#fine-dining"
          onClick={onClose}
          className="block text-xl uppercase font-karla"
        >
          Fine-Dining
        </Link>
        <Link
          href="/blog"
          onClick={onClose}
          className="block text-xl uppercase font-karla"
        >
          Blog
        </Link>
        <Link
          href="#your-event"
          onClick={onClose}
          className="block text-xl uppercase font-karla"
        >
          Your Event
        </Link>
        <Link
          href="#story"
          onClick={onClose}
          className="block text-xl uppercase font-karla"
        >
          The Story
        </Link>
        <Link href="/webshop" onClick={onClose} className="block mt-4">
          <span className="btn btn-primary uppercase w-full text-center">
            Webshop
          </span>
        </Link>
      </div>
    </div>
  );
}
