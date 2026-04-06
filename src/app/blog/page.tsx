'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import ArticleImage from '@/components/ArticleImage';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const categories = ['全部', '預防醫學', '營養知識', '檢測解讀', '生活習慣', '保健食品'];

const articles = [
  {
    slug: 'vitamin-d-guide',
    title: '維生素 D 不足？完整補充攻略與檢測指南',
    excerpt:
      '維生素 D 是人體不可或缺的營養素，卻有超過 60% 的國人攝取不足。本文帶你了解如何檢測、補充與維持最佳水平。',
    category: '營養知識',
    readTime: '8 分鐘',
    date: '2026/03/28',
    featured: true,
  },
  {
    slug: 'preventive-medicine-101',
    title: '預防醫學入門：為什麼定期健檢不等於預防醫學？',
    excerpt:
      '很多人以為做了健檢就是預防醫學，但其實兩者有根本的差異。預防醫學更重視個人化的風險評估與主動介入。',
    category: '預防醫學',
    readTime: '6 分鐘',
    date: '2026/03/20',
    featured: true,
  },
  {
    slug: 'gut-health-microbiome',
    title: '腸道菌相失衡怎麼辦？從檢測到改善的完整路徑',
    excerpt:
      '腸道被稱為「第二個大腦」，菌相平衡直接影響免疫、情緒與代謝。學習如何透過檢測了解你的腸道健康。',
    category: '檢測解讀',
    readTime: '10 分鐘',
    date: '2026/03/15',
    featured: false,
  },
  {
    slug: 'omega3-benefits',
    title: 'Omega-3 脂肪酸：你吃對了嗎？',
    excerpt:
      'EPA 和 DHA 的比例、來源選擇、每日建議攝取量，一次搞懂 Omega-3 的正確補充方式。',
    category: '保健食品',
    readTime: '5 分鐘',
    date: '2026/03/10',
    featured: false,
  },
  {
    slug: 'sleep-optimization',
    title: '睡眠品質優化：從荷爾蒙角度理解失眠',
    excerpt:
      '皮質醇、褪黑激素、生長激素的節律如何影響你的睡眠？了解背後的科學，找到改善的方法。',
    category: '生活習慣',
    readTime: '7 分鐘',
    date: '2026/03/05',
    featured: false,
  },
  {
    slug: 'blood-test-reading',
    title: '看懂血液檢查報告：醫師教你解讀關鍵指標',
    excerpt:
      '白血球、紅血球、肝功能、腎功能...報告上密密麻麻的數字代表什麼？本文用白話文幫你解讀。',
    category: '檢測解讀',
    readTime: '12 分鐘',
    date: '2026/02/28',
    featured: false,
  },
];

export default function BlogPage() {
  const featured = articles.filter((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen bg-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-text">健康知識</h1>
          <p className="mt-3 text-text-secondary text-lg">
            由專業醫師團隊撰寫，帶你掌握最新的預防醫學觀點
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                cat === '全部'
                  ? 'bg-primary text-white'
                  : 'bg-white text-text-secondary border border-border hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Articles */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {featured.map((article) => (
            <motion.div key={article.slug} variants={fadeUp}>
              <Link
                href={`/blog/${article.slug}`}
                className="block bg-white rounded-3xl border border-border overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <ArticleImage slug={article.slug} className="h-48" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary-light px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-text-secondary">
                      <Clock size={12} /> {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                    閱讀全文 <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Article Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {rest.map((article) => (
            <motion.div key={article.slug} variants={fadeUp}>
              <Link
                href={`/blog/${article.slug}`}
                className="block bg-white rounded-2xl border border-border p-5 hover:shadow-md transition-shadow group h-full"
              >
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary-light px-2.5 py-1 rounded-full mb-3">
                  <Tag size={10} /> {article.category}
                </span>
                <h3 className="text-base font-bold text-text mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-text-secondary">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {article.readTime}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
