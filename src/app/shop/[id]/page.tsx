'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Star,
  ShoppingCart,
  Minus,
  Plus,
  CheckCircle2,
  Truck,
  Shield,
  RotateCcw,
} from 'lucide-react';
import { use } from 'react';
import ProductImage from '@/components/ProductImage';

const productDetails: Record<
  string,
  {
    name: string;
    desc: string;
    longDesc: string;
    price: number;
    originalPrice: number | null;
    category: string;
    rating: number;
    reviews: number;
    emoji: string;
    specs: string[];
    ingredients: string;
  }
> = {
  'vitamin-d3-5000': {
    name: '高效維生素 D3 5000IU',
    desc: '每粒 5000IU，採用 D3 膽鈣化醇型態，搭配椰子油基底提升吸收率',
    longDesc:
      '維生素 D3 是人體維持骨骼健康、免疫功能與情緒調節的關鍵營養素。本產品採用膽鈣化醇（D3）型態，相較於 D2 具有更高的生物利用率。搭配椰子油軟膠囊基底，脂溶性維生素 D 的吸收率提升達 50%。每粒含有 5000IU，適合經醫師評估後需要補充的族群。',
    price: 890,
    originalPrice: 1200,
    category: '維生素',
    rating: 4.9,
    reviews: 328,
    emoji: '☀️',
    specs: ['每粒 5000IU', '120 粒/瓶', '椰子油基底', '無人工色素', 'GMP 認證'],
    ingredients: '膽鈣化醇（維生素 D3）、中鏈三酸甘油酯（椰子油來源）、明膠、甘油、純水',
  },
};

const defaultProduct = {
  name: '精選保健食品',
  desc: '醫師推薦的高品質保健品',
  longDesc:
    '本產品經過嚴格篩選，採用高品質原料與先進製程技術，確保每一粒都符合最高的品質標準。所有產品均通過第三方實驗室檢測，並取得 GMP 認證。',
  price: 990,
  originalPrice: null,
  category: '保健食品',
  rating: 4.7,
  reviews: 100,
  emoji: '💊',
  specs: ['高品質原料', '第三方檢測', 'GMP 認證', '無人工添加'],
  ingredients: '請參閱產品包裝標示',
};

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = productDetails[id] || defaultProduct;
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors mb-8"
        >
          <ArrowLeft size={16} /> 返回商品列表
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Product Image */}
          <div className="rounded-3xl h-80 lg:h-[480px] overflow-hidden">
            <ProductImage productId={id} className="scale-150" />
          </div>

          {/* Product Info */}
          <div>
            <span className="text-sm text-primary font-medium">{product.category}</span>
            <h1 className="text-3xl font-bold text-text mt-2 mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating) ? '#f59e0b' : 'none'}
                    className={
                      i < Math.floor(product.rating)
                        ? 'text-amber-400'
                        : 'text-gray-200'
                    }
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-text">{product.rating}</span>
              <span className="text-sm text-text-secondary">
                ({product.reviews} 則評價)
              </span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-primary">
                NT$ {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-text-secondary line-through">
                  NT$ {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-text-secondary leading-relaxed mb-6">
              {product.longDesc}
            </p>

            {/* Specs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {product.specs.map((spec) => (
                <span
                  key={spec}
                  className="px-3 py-1.5 bg-surface rounded-lg text-xs font-medium text-text-secondary"
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium text-text">數量</span>
              <div className="flex items-center gap-3 bg-surface rounded-xl px-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-white rounded-lg transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-medium text-text">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-white rounded-lg transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2 ${
                  added
                    ? 'bg-green-500 text-white'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                {added ? (
                  <>
                    <CheckCircle2 size={18} /> 已加入購物車
                  </>
                ) : (
                  <>
                    <ShoppingCart size={18} /> 加入購物車
                  </>
                )}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
              {[
                { icon: Truck, label: '滿千免運' },
                { icon: Shield, label: '品質保證' },
                { icon: RotateCcw, label: '7天鑑賞' },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <badge.icon size={20} className="text-primary" />
                  <span className="text-xs text-text-secondary">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Ingredients */}
        <div className="mt-16 bg-surface rounded-3xl p-8">
          <h2 className="text-xl font-bold text-text mb-4">成分資訊</h2>
          <p className="text-text-secondary leading-relaxed">{product.ingredients}</p>
        </div>
      </div>
    </div>
  );
}
