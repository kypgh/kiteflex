// components/Navbar.js
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              KiteFlex
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/kiteboard-brands"
              className="text-blue-600 font-medium border-b-2 border-blue-600"
            >
              Brands
            </Link>
            <Link
              href="https://shop.kitesurfingcyprus.org/"
              target="_blank"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              KiteFlex Shop
            </Link>
            <Link
              href="mailto:info@kiteflex.com"
              className="btn-primary text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/kiteboard-brands"
              className="block py-2 text-blue-600 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Brands
            </Link>
            <Link
              href="https://shop.kitesurfingcyprus.org/"
              target="_blank"
              className="block py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              KiteFlex Shop
            </Link>
            <Link
              href="mailto:info@kiteflex.com"
              className="block py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
