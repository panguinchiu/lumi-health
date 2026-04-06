'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Filter, Search } from 'lucide-react';
import ProductImage from '@/components/ProductImage';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.06 } },
};

const categories = ['全部', '維生素', 'Omega-3', '益生菌', '礦物質', '複方保健'];

const products = [
  {
    id: 'vitamin-d3-5000',
    name: '高效維生素 D3 5000IU',
    desc: '每粒 5000IU，採用 D3 膽鈣化醇型態，搭配椰子油基底提升吸收率',
    price: 890,
    originalPrice: 1200,
    category: '維生素',
    rating: 4.9,
    reviews: 328,
    badge: '熱銷',
    emoji: '☀️',
  },
  {
    id: 'omega3-fish-oil',
    name: '高濃度 rTG Omega-3 魚油',
    desc: 'rTG 型態 84% 高濃度，EPA+DHA 每份 1000mg，小分子好吸收',
    price: 1290,
    originalPrice: 1600,
    category: 'Omega-3',
    rating: 4.8,
    reviews: 256,
    badge: '醫師推薦',
    emoji: '🐟',
  },
  {
    id: 'probiotic-30b',
    name: '300億活菌腸道益生菌',
    desc: '嚴選 12 株功能益生菌，專利包埋技術確保活菌直達腸道',
    price: 1090,
    originalPrice: null,
    category: '益生菌',
    rating: 4.7,
    reviews: 189,
    badge: null,
    emoji: '🦠',
  },
  {
    id: 'magnesium-glycinate',
    name: '甘胺酸鎂 400mg',
    desc: '高生物利用率的螯合鎂型態，幫助放鬆、改善睡眠品質',
    price: 790,
    originalPrice: 990,
    category: '礦物質',
    rating: 4.8,
    reviews: 145,
    badge: null,
    emoji: '💎',
  },
  {
    id: 'vitamin-b-complex',
    name: '活性 B 群複合配方',
    desc: '採用活性型態 B 群（甲基葉酸、甲鈷胺），提升能量代謝',
    price: 690,
    originalPrice: null,
    category: '維生素',
    rating: 4.6,
    reviews: 203,
    badge: null,
    emoji: '⚡',
  },
  {
    id: 'coq10-ubiquinol',
    name: 'CoQ10 還原型輔酶 Q10',
    desc: '還原型 Ubiquinol 200mg，抗氧化、支持心血管與細胞能量',
    price: 1590,
    originalPrice: 1890,
    category: '複方保健',
    rating: 4.9,
    reviews: 98,
    badge: '新品',
    emoji: '❤️',
  },
  {
    id: 'zinc-picolinate',
    name: '吡啶甲酸鋅 30mg',
    desc: '高吸收率鋅型態，支持免疫功能、皮膚健康與荷爾蒙平衡',
    price: 490,
    originalPrice: null,
    category: '礦物質',
    rating: 4.5,
    reviews: 167,
    badge: null,
    emoji: '🛡️',
  },
  {
    id: 'curcumin-complex',
    name: '薑黃素複方 BCM-95',
    desc: '專利 BCM-95 薑黃素，吸收率提升 7 倍，抗發炎與抗氧化',
    price: 1190,
    originalPrice: 1490,
    category: '複方保健',
    rating: 4.7,
    reviews: 134,
    badge: null,
    emoji: '🌿',
  },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);

  const filtered = products.filter((p) => {
    const matchCategory =
      activeCategory === '全部' || p.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-text">保健食品</h1>
            <p className="mt-2 text-text-secondary">
              醫師精選，科學實證的高品質保健品
            </p>
          </div>
          <Link href="/cart" className="relative flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-border hover:bg-surface-dark transition-colors">
            <ShoppingCart size={18} />
            <span className="text-sm font-medium">購物車</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜尋保健食品..."
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-white text-text-secondary border border-border hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {filtered.map((product) => (
            <motion.div key={product.id} variants={fadeUp}>
              <Link
                href={`/shop/${product.id}`}
                className="block bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow group"
              >
                {/* Product Image Placeholder */}
                <div className="relative h-48 flex items-center justify-center">
                  <ProductImage productId={product.id} />
                  {product.badge && (
                    <span className="absolute top-3 left-3 text-xs font-medium text-white bg-primary px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="text-xs text-text-secondary mb-1">
                    {product.category}
                  </div>
                  <h3 className="text-base font-bold text-text mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-2 mb-3">
                    {product.desc}
                  </p>
                  <div className="flex items-center gap-1 mb-3">
                    <Star
                      size={14}
                      fill="#f59e0b"
                      className="text-amber-400"
                    />
                    <span className="text-sm font-medium text-text">
                      {product.rating}
                    </span>
                    <span className="text-xs text-text-secondary">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">
                      NT$ {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-text-secondary line-through">
                        NT$ {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCartCount((c) => c + 1);
                }}
                className="mt-2 w-full py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-dark transition-colors"
              >
                加入購物車
              </button>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-secondary">找不到符合的商品，試試其他關鍵字吧</p>
          </div>
        )}
      </div>
    </div>
  );
}
