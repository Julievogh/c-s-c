// components/MobileMenu.jsx
"use client";
import Link from 'next/link';

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 bg-black/50 z-40 transform ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      } transition-transform duration-300`}
      onClick={onClose}
    >
      <div
        className="bg-[var(--color-soft-beige)] w-full p-6 space-y-4 relative"
        onClick={e => e.stopPropagation()}
      >
        <CloseButton onClick={onClose} />

        <nav className="flex flex-col space-y-4 text-center">
          <Link href="#popup" className="uppercase" onClick={onClose}>
            Pop-up Experience
          </Link>
          <Link href="#fine-dining" className="uppercase" onClick={onClose}>
            Fine-Dining
          </Link>
          <Link href="#your-event" className="uppercase" onClick={onClose}>
            Your Event
          </Link>
          <Link href="#story" className="uppercase" onClick={onClose}>
            The Story
          </Link>
          <Link href="/webshop" className="btn btn-primary uppercase block mt-4" onClick={onClose}>
            Webshop
          </Link>
        </nav>
      </div>
    </div>
  );
}

function CloseButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-4 right-4 p-2 text-gray-700"
      aria-label="Close menu"
    >
      ✕
    </button>
  );
}
