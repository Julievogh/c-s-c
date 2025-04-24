// components/Header.jsx

'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // shrink header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerClasses = [
    'fixed w-full z-50 transition-all duration-300 bg-[var(--color-soft-beige)]',
    scrolled ? 'py-2 shadow-md' : 'py-6 shadow-lg',
  ].join(' ');

  return (
    <>
      <header className={headerClasses}>
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* desktop left links */}
          <div className="hidden md:flex space-x-8">
            <Link href="#popup" className="uppercase">
              Pop-up Experience
            </Link>
            <Link href="#fine-dining" className="uppercase">
              Fine-Dining
            </Link>
            <Link href="/blog" className="uppercase">Blog</Link>
          </div>

          {/* logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/imgs/logo.svg"
              alt="Cozy Social Club"
              width={scrolled ? 120 : 160}
              height={scrolled ? 120 : 160}
            />
          </Link>

          {/* desktop right links */}
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

          {/* mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(open => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
            </div>
          </button>
        </nav>
      </header>

      {/* mobile slide-down */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
