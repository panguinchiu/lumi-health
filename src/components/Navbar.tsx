'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, User, ShoppingCart, LogOut, LayoutDashboard, Heart } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, isLoggedIn, logout } = useAuth();

  const navLinks =
    isLoggedIn && user?.role === 'doctor'
      ? [
          { href: '/', label: '首頁' },
          { href: '/dashboard', label: '醫師後台' },
        ]
      : [
          { href: '/', label: '首頁' },
          { href: '/booking', label: '預約門診' },
          { href: '/blog', label: '健康知識' },
          { href: '/shop', label: '保健食品' },
        ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-border/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="Lumi Health"
            width={320}
            height={88}
            className="h-[72px] w-auto"
            priority
          />
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

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/cart"
            className="relative p-2 text-text-secondary hover:text-text transition-colors"
            aria-label="購物車"
          >
            <ShoppingCart size={18} />
          </Link>

          {isLoggedIn && user ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface hover:bg-surface-dark transition-colors"
              >
                <div className="w-7 h-7 bg-primary-light rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{user.avatar}</span>
                </div>
                <span className="text-sm font-medium text-text">{user.name}</span>
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-12 w-56 bg-white rounded-2xl border border-border shadow-lg py-2 z-50">
                  <div className="px-4 py-3 border-b border-border">
                    <div className="text-sm font-medium text-text">{user.name}</div>
                    <div className="text-xs text-text-secondary">{user.email}</div>
                    <div className="text-xs text-primary mt-0.5">
                      {user.role === 'doctor' ? '醫師帳號' : '會員帳號'} · {user.memberId}
                    </div>
                  </div>
                  {user.role === 'doctor' ? (
                    <Link
                      href="/dashboard"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-text hover:bg-surface transition-colors"
                    >
                      <LayoutDashboard size={16} /> 醫師後台
                    </Link>
                  ) : (
                    <Link
                      href="/profile"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-text hover:bg-surface transition-colors"
                    >
                      <Heart size={16} /> 我的健康
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      logout();
                      setProfileOpen(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors w-full"
                  >
                    <LogOut size={16} /> 登出
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
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
            </>
          )}
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

            {isLoggedIn && user ? (
              <>
                <div className="px-4 py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                      <span className="font-bold text-primary">{user.avatar}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text">{user.name}</div>
                      <div className="text-xs text-text-secondary">{user.email}</div>
                    </div>
                  </div>
                </div>
                <Link
                  href={user.role === 'doctor' ? '/dashboard' : '/profile'}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-text-secondary hover:text-text hover:bg-surface"
                >
                  {user.role === 'doctor' ? '醫師後台' : '我的健康'}
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-red-500 hover:bg-red-50"
                >
                  登出
                </button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
