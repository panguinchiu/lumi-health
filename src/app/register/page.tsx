'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<'patient' | 'doctor'>('patient');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-mist flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Image src="/logo.png" alt="Lumi Health" width={320} height={88} className="h-20 w-auto mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-text">建立帳戶</h1>
          <p className="text-text-secondary mt-2">加入 Lumi Health，開啟健康管理旅程</p>
        </div>

        <div className="bg-white rounded-3xl border border-border p-8">
          {/* Role Selector */}
          <div className="flex bg-surface rounded-xl p-1 mb-6">
            <button
              onClick={() => setRole('patient')}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                role === 'patient'
                  ? 'bg-white text-text shadow-sm'
                  : 'text-text-secondary'
              }`}
            >
              我是客戶
            </button>
            <button
              onClick={() => setRole('doctor')}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                role === 'doctor'
                  ? 'bg-white text-text shadow-sm'
                  : 'text-text-secondary'
              }`}
            >
              我是醫師
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text mb-2">姓名</label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                <input
                  type="text"
                  placeholder="您的姓名"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-2">電子信箱</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-2">手機號碼</label>
              <div className="relative">
                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                <input
                  type="tel"
                  placeholder="0912-345-678"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all"
                />
              </div>
            </div>

            {role === 'doctor' && (
              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  醫師執照號碼
                </label>
                <input
                  type="text"
                  placeholder="醫字第 XXXXXX 號"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-text mb-2">密碼</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="至少 8 位字元"
                  className="w-full pl-11 pr-11 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-0.5 rounded border-border text-primary focus:ring-primary/20"
                />
                <span className="text-sm text-text-secondary leading-relaxed">
                  我同意 Lumi Health 的{' '}
                  <Link href="/terms" className="text-primary hover:underline">
                    服務條款
                  </Link>{' '}
                  與{' '}
                  <Link href="/privacy" className="text-primary hover:underline">
                    隱私政策
                  </Link>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
            >
              建立帳戶
            </button>
          </form>
        </div>

        <p className="text-center mt-6 text-sm text-text-secondary">
          已有帳戶？{' '}
          <Link href="/login" className="text-primary font-medium hover:text-primary-dark">
            登入
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
