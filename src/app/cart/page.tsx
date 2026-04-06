'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, ShoppingCart, ArrowLeft, ArrowRight } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  emoji: string;
}

const initialCart: CartItem[] = [
  { id: 'vitamin-d3-5000', name: '高效維生素 D3 5000IU', price: 890, quantity: 2, emoji: '☀️' },
  { id: 'omega3-fish-oil', name: '高濃度 rTG Omega-3 魚油', price: 1290, quantity: 1, emoji: '🐟' },
  { id: 'probiotic-30b', name: '300億活菌腸道益生菌', price: 1090, quantity: 1, emoji: '🦠' },
];

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialCart);

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 1000 ? 0 : 80;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-mist flex items-center justify-center px-4">
        <div className="text-center">
          <ShoppingCart size={48} className="text-text-secondary mx-auto mb-4" />
          <h2 className="text-xl font-bold text-text mb-2">購物車是空的</h2>
          <p className="text-text-secondary mb-6">去逛逛我們精選的保健食品吧</p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            瀏覽商品
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mist">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors mb-8"
        >
          <ArrowLeft size={16} /> 繼續購物
        </Link>

        <h1 className="text-3xl font-bold text-text mb-8">購物車</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-white rounded-2xl border border-border p-5 flex items-center gap-4"
              >
                <div className="w-16 h-16 bg-surface rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-3xl">{item.emoji}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-text truncate">{item.name}</h3>
                  <p className="text-sm text-primary font-semibold mt-1">
                    NT$ {item.price.toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.id, -1)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface hover:bg-surface-dark transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQty(item.id, 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface hover:bg-surface-dark transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <div className="text-right min-w-[80px]">
                  <div className="text-sm font-bold text-text">
                    NT$ {(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-text-secondary hover:text-red-500 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl border border-border p-6 h-fit sticky top-28">
            <h2 className="text-lg font-bold text-text mb-4">訂單摘要</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">小計</span>
                <span className="text-text font-medium">NT$ {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">運費</span>
                <span className="text-text font-medium">
                  {shipping === 0 ? (
                    <span className="text-primary">免運費</span>
                  ) : (
                    `NT$ ${shipping}`
                  )}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-text-secondary">
                  再消費 NT$ {(1000 - subtotal).toLocaleString()} 即可免運
                </p>
              )}
              <hr className="border-border" />
              <div className="flex justify-between text-base">
                <span className="font-bold text-text">合計</span>
                <span className="font-bold text-primary text-lg">
                  NT$ {total.toLocaleString()}
                </span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="mt-6 w-full py-3.5 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
            >
              前往結帳
              <ArrowRight size={16} />
            </Link>
            <p className="text-xs text-text-secondary text-center mt-3">
              支援信用卡、LINE Pay 付款
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
