'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, User, ShoppingCart } from 'lucide-react';

const navLinks = [
  { href: '/', label: '首頁' },
  { href: '/booking', label: '預約門診' },
  { href: '/blog', label: '健康知識' },
  { href: '/shop', label: '保健食品' },
  { href: '/dashboard', label: '醫師後台' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <span className="text-xl font-semibold tracking-tight text-text">
            Lumi Health
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-text-secondary hover:text-text hover:bg-surface transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/cart"
            className="relative p-2 text-text-secondary hover:text-text transition-colors"
            aria-label="購物車"
          >
            <ShoppingCart size={18} />
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary hover:text-text transition-colors"
          >
            <User size={16} />
            登入
          </Link>
          <Link
            href="/booking"
            className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-dark transition-colors"
          >
            立即預約
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-surface transition-colors"
          aria-label="切換選單"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white border-b border-border">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-text-secondary hover:text-text hover:bg-surface transition-all"
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-3 border-border" />
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium text-text-secondary hover:text-text hover:bg-surface"
            >
              登入 / 註冊
            </Link>
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="block text-center px-4 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
            >
              立即預約
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
