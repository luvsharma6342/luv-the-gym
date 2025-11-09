"use client";
import { useState } from "react";
import { Dumbbell, Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-linear-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <Link href="/#hero">
                <Dumbbell className="w-6 h-6 text-black hover:cursor-pointer" />
              </Link>
            </div>
            <div>
              <Link href="/#hero">
                <div className="text-xl font-bold text-white hover:cursor-pointer">
                  Luv the Gym
                </div>
              </Link>
              <div className="text-xs text-gray-400">Luv, Bareilly</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex md:flex items-center justify-center gap-8">
            <Link href="/#benefits" className="text-gray-300 hover:text-white transition">
              Gym Benefits
            </Link>
            <Link href="/#membership" className="text-gray-300 hover:text-white transition">
              Membership
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition">
              Contact
            </Link>
            <button className="px-6 py-2.5 bg-green-500 hover:bg-green-600 cursor-pointer text-black font-semibold rounded-full transition">
              Start 7 day free trial
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
              className="text-gray-300 focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-black/95 text-white flex flex-col items-center gap-4 py-6 border-t border-gray-800 animate-slideDown">
          <Link href="/#benefits" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white transition">
            Gym Benefits
          </Link>
          <Link href="/#membership" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white transition">
            Membership
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white transition">
            About
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white transition">
            Contact
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="px-6 py-2.5 bg-green-500 hover:bg-green-600 cursor-pointer text-black font-semibold rounded-full transition"
          >
            Start 7 day free trial
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
