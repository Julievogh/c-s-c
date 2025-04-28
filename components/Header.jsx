// components/Header.jsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClasses = [
    "sticky top-0 w-full z-50 transition-all duration-300",
    "bg-[var(--color-warm-white)] font-karla",
    scrolled ? "py-2 shadow-md" : "py-6 shadow-lg",
  ].join(" ");

  return (
    <>
      <header className={headerClasses}>
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Desktop left links */}
          <div className="hidden md:flex space-x-8">
            <Link href="#popup" className="uppercase">
              Pop-up Experience
            </Link>
            <Link href="#fine-dining" className="uppercase">
              Fine-Dining
            </Link>
            <Link href="/blog" className="uppercase">
              Blog
            </Link>
          </div>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/imgs/logo.svg"
              alt="Cozy Social Club"
              width={scrolled ? 120 : 160}
              height={scrolled ? 120 : 160}
            />
          </Link>

          {/* Desktop right links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#your-event" className="uppercase">
              Your Event
            </Link>
            <Link href="#story" className="uppercase">
              The Story
            </Link>
            <Link href="/webshop" className="btn btn-primary uppercase">
              Webshop
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-800 my-1 transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </button>
        </nav>

        <div className="max-w-7xl mx-auto h-px bg-[var(--color-deep-wine)] mb-0 md:mb-4 -mt-2"></div>

        {/* Fold-down menu panel */}
        <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </header>
    </>
  );
}
