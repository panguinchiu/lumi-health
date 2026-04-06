'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  CreditCard,
  CheckCircle2,
  Lock,
  ShieldCheck,
  Truck,
  User,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

type PaymentMethod = 'credit-card' | 'line-pay' | 'apple-pay';

const orderItems = [
  { name: '高效維生素 D3 5000IU', qty: 2, price: 890, emoji: '☀️' },
  { name: '高濃度 rTG Omega-3 魚油', qty: 1, price: 1290, emoji: '🐟' },
  { name: '300億活菌腸道益生菌', qty: 1, price: 1090, emoji: '🦠' },
];

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit-card');
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 16);
    return cleaned.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const formatExpiry = (value: string) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 4);
    if (cleaned.length >= 2) return cleaned.slice(0, 2) + '/' + cleaned.slice(2);
    return cleaned;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    setTimeout(() => setStep('success'), 2000);
  };

  if (step === 'processing') {
    return (
      <div className="min-h-screen bg-mist flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-6" />
          <h2 className="text-xl font-bold text-text mb-2">付款處理中...</h2>
          <p className="text-text-secondary">
            {paymentMethod === 'line-pay' ? '正在連接 LINE Pay...' : '正在驗證付款資訊...'}
          </p>
        </motion.div>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-mist flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl border border-border p-10 max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-green-500" size={40} />
          </div>
          <h2 className="text-2xl font-bold text-text mb-2">付款成功！</h2>
          <p className="text-text-secondary mb-2">感謝您的訂購</p>
          <p className="text-sm text-text-secondary mb-6">
            訂單編號 #LH-20260403-001
          </p>

          <div className="bg-surface rounded-2xl p-5 text-left space-y-3 mb-6">
            {orderItems.map((item) => (
              <div key={item.name} className="flex justify-between text-sm">
                <span className="text-text-secondary">
                  {item.emoji} {item.name} x{item.qty}
                </span>
                <span className="font-medium text-text">
                  NT$ {(item.price * item.qty).toLocaleString()}
                </span>
              </div>
            ))}
            <hr className="border-border" />
            <div className="flex justify-between">
              <span className="font-bold text-text">合計</span>
              <span className="font-bold text-primary">NT$ {total.toLocaleString()}</span>
            </div>
          </div>

          <div className="bg-primary-light/30 rounded-xl p-4 text-sm text-text-secondary mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Truck size={14} className="text-primary" />
              <span className="font-medium text-text">預計配送時間</span>
            </div>
            2-3 個工作天內送達，出貨後將以簡訊通知追蹤編號
          </div>

          <div className="flex gap-3">
            <Link
              href="/shop"
              className="flex-1 py-3 bg-surface text-text rounded-full font-medium border border-border hover:bg-surface-dark transition-colors text-center"
            >
              繼續購物
            </Link>
            <Link
              href="/profile"
              className="flex-1 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors text-center"
            >
              查看訂單
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mist">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/cart"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors mb-8"
        >
          <ArrowLeft size={16} /> 返回購物車
        </Link>

        <h1 className="text-3xl font-bold text-text mb-8">結帳</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border border-border p-6"
              >
                <h2 className="text-lg font-bold text-text mb-5 flex items-center gap-2">
                  <MapPin size={20} className="text-primary" />
                  收件資訊
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      收件人姓名
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                      <input
                        type="text"
                        required
                        placeholder="王小明"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      手機號碼
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                      <input
                        type="tel"
                        required
                        placeholder="0912-345-678"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-text mb-1.5">
                      電子信箱
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-text mb-1.5">
                      收件地址
                    </label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-3 top-3 text-text-secondary" />
                      <input
                        type="text"
                        required
                        placeholder="台北市大安區忠孝東路四段 123 號 5 樓"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Payment Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl border border-border p-6"
              >
                <h2 className="text-lg font-bold text-text mb-5 flex items-center gap-2">
                  <CreditCard size={20} className="text-primary" />
                  付款方式
                </h2>

                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                  {/* Credit Card */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('credit-card')}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      paymentMethod === 'credit-card'
                        ? 'border-primary bg-primary-light/30'
                        : 'border-border hover:border-primary/30'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CreditCard size={20} className="text-text" />
                    </div>
                    <div className="text-sm font-bold text-text">信用卡</div>
                    <div className="text-xs text-text-secondary mt-0.5">
                      Visa / Mastercard / JCB
                    </div>
                  </button>

                  {/* LINE Pay */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('line-pay')}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      paymentMethod === 'line-pay'
                        ? 'border-[#06C755] bg-[#06C755]/5'
                        : 'border-border hover:border-[#06C755]/30'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-[#06C755] rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">L</span>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-text">LINE Pay</div>
                    <div className="text-xs text-text-secondary mt-0.5">
                      LINE 錢包快速付款
                    </div>
                  </button>

                  {/* Apple Pay */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('apple-pay')}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      paymentMethod === 'apple-pay'
                        ? 'border-black bg-gray-50'
                        : 'border-border hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                      </svg>
                    </div>
                    <div className="text-sm font-bold text-text">Apple Pay</div>
                    <div className="text-xs text-text-secondary mt-0.5">
                      Touch ID / Face ID
                    </div>
                  </button>
                </div>

                {/* Credit Card Form */}
                {paymentMethod === 'credit-card' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">
                        卡號
                      </label>
                      <div className="relative">
                        <CreditCard size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm tracking-wider"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                          <div className="w-8 h-5 bg-blue-600 rounded text-white text-[6px] font-bold flex items-center justify-center">
                            VISA
                          </div>
                          <div className="w-8 h-5 bg-red-500 rounded text-white text-[6px] font-bold flex items-center justify-center">
                            MC
                          </div>
                          <div className="w-8 h-5 bg-blue-800 rounded text-white text-[6px] font-bold flex items-center justify-center">
                            JCB
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text mb-1.5">
                          有效日期
                        </label>
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(formatExpiry(e.target.value))}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm tracking-wider"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text mb-1.5">
                          安全碼
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={cardCvc}
                            onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, '').slice(0, 3))}
                            placeholder="CVC"
                            maxLength={3}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm tracking-wider"
                          />
                          <Lock size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* LINE Pay Info */}
                {paymentMethod === 'line-pay' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 bg-[#06C755]/5 rounded-xl border border-[#06C755]/20"
                  >
                    <p className="text-sm text-text-secondary">
                      點擊「確認付款」後，將跳轉至 LINE Pay 頁面完成付款。
                      請確認您的 LINE 帳號已綁定付款方式。
                    </p>
                  </motion.div>
                )}

                {/* Apple Pay Info */}
                {paymentMethod === 'apple-pay' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 bg-gray-50 rounded-xl border border-gray-200"
                  >
                    <p className="text-sm text-text-secondary">
                      點擊「確認付款」後，將使用 Touch ID 或 Face ID 驗證。
                      請確認您的 Apple Wallet 已設定信用卡。
                    </p>
                  </motion.div>
                )}

                {/* Security Badge */}
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                  <ShieldCheck size={16} className="text-green-500" />
                  <span className="text-xs text-text-secondary">
                    所有付款資訊均經 256-bit SSL 加密傳輸
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl border border-border p-6 sticky top-28"
              >
                <h2 className="text-lg font-bold text-text mb-4">訂單明細</h2>
                <div className="space-y-3 mb-4">
                  {orderItems.map((item) => (
                    <div key={item.name} className="flex items-center gap-3">
                      <span className="text-xl">{item.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-text truncate">
                          {item.name}
                        </div>
                        <div className="text-xs text-text-secondary">x{item.qty}</div>
                      </div>
                      <div className="text-sm font-medium text-text">
                        NT$ {(item.price * item.qty).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>

                <hr className="border-border mb-4" />

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">小計</span>
                    <span className="text-text">NT$ {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">運費</span>
                    <span className="text-primary font-medium">免運費</span>
                  </div>
                </div>

                <hr className="border-border mb-4" />

                <div className="flex justify-between mb-6">
                  <span className="text-lg font-bold text-text">合計</span>
                  <span className="text-lg font-bold text-primary">
                    NT$ {total.toLocaleString()}
                  </span>
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className={`w-full py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2 ${
                    paymentMethod === 'line-pay'
                      ? 'bg-[#06C755] hover:bg-[#05b34c] text-white'
                      : paymentMethod === 'apple-pay'
                      ? 'bg-black hover:bg-gray-800 text-white'
                      : 'bg-primary hover:bg-primary-dark text-white'
                  }`}
                >
                  <Lock size={16} />
                  {paymentMethod === 'line-pay'
                    ? '使用 LINE Pay 付款'
                    : paymentMethod === 'apple-pay'
                    ? '使用 Apple Pay 付款'
                    : `確認付款 NT$ ${total.toLocaleString()}`}
                </button>
              </motion.div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
