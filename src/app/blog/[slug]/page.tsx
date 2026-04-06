'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Share2, Bookmark } from 'lucide-react';
import ArticleImage from '@/components/ArticleImage';
import { use } from 'react';

const articleData: Record<string, { title: string; category: string; readTime: string; date: string; content: string[] }> = {
  'vitamin-d-guide': {
    title: '維生素 D 不足？完整補充攻略與檢測指南',
    category: '營養知識',
    readTime: '8 分鐘',
    date: '2026/03/28',
    content: [
      '維生素 D 是一種脂溶性維生素，也被稱為「陽光維生素」，因為我們的身體可以透過陽光照射來合成它。然而，在現代生活中，許多人因為長時間待在室內、防曬措施做得好，反而導致體內維生素 D 嚴重不足。',
      '根據國民健康署的調查，台灣超過 60% 的成年人維生素 D 攝取不足，其中女性的比例更高達 70%。維生素 D 不僅影響骨骼健康，更與免疫功能、情緒調節、心血管健康密切相關。',
      '## 如何知道自己是否缺乏？',
      '最準確的方式是透過血液檢測 25(OH)D 的濃度。一般建議的最佳範圍是 40-60 ng/mL。低於 20 ng/mL 為缺乏，20-30 ng/mL 為不足。',
      '## 補充建議',
      '1. **日曬**：每天 10-15 分鐘的陽光照射（避開正午強光）。手臂和腿部暴露即可。',
      '2. **飲食來源**：鮭魚、鯖魚、蛋黃、菇類都含有維生素 D，但通常難以達到建議攝取量。',
      '3. **補充劑**：維生素 D3（膽鈣化醇）的生物利用率優於 D2。建議搭配含油脂的餐食服用以提高吸收率。',
      '## 補充劑量參考',
      '一般成人每日建議攝取 1000-2000 IU，若檢測結果嚴重不足，醫師可能會建議短期高劑量補充（每日 5000-10000 IU），之後再降為維持劑量。',
      '## 注意事項',
      '維生素 D 過量也可能造成中毒，導致高血鈣症。因此建議定期追蹤血液濃度，在醫師指導下調整劑量。這正是 Lumi Health 能幫助你的地方 — 透過系統化的追蹤與提醒，確保你的補充方案安全有效。',
    ],
  },
};

const defaultArticle = {
  title: '文章載入中...',
  category: '預防醫學',
  readTime: '5 分鐘',
  date: '2026/03/01',
  content: [
    '本篇文章的詳細內容正在準備中，請稍後再回來查看。',
    '在 Lumi Health，我們致力於提供最專業、最易懂的預防醫學知識，幫助每個人掌握自己的健康數據，做出更好的健康決策。',
    '## 為什麼預防醫學很重要？',
    '傳統醫療著重在「生病後治療」，而預防醫學則是「在生病前預防」。透過定期的功能性檢測、個人化的營養建議與生活方式調整，我們可以在疾病發生前就進行介入。',
    '## Lumi Health 如何幫助你？',
    '我們整合了 AI 技術與醫師專業，為你提供：智慧化的健康數據追蹤、個人化的檢測解讀、以及科學實證的保健建議。讓健康管理不再是一件複雜的事。',
  ],
};

export default function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const article = articleData[slug] || defaultArticle;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors mb-8"
        >
          <ArrowLeft size={16} /> 返回文章列表
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-primary bg-primary-light px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-text-secondary">
              <Clock size={12} /> {article.readTime}
            </span>
            <span className="text-xs text-text-secondary">{article.date}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-text leading-tight mb-6">
            {article.title}
          </h1>

          <ArticleImage slug={slug} className="w-full h-64 sm:h-80 rounded-2xl mb-8" />

          {/* Author */}
          <div className="flex items-center justify-between pb-8 border-b border-border mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                <span className="text-primary text-sm font-bold">陳</span>
              </div>
              <div>
                <div className="text-sm font-medium text-text">陳醫師</div>
                <div className="text-xs text-text-secondary">預防醫學科主治醫師</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-surface transition-colors">
                <Bookmark size={18} className="text-text-secondary" />
              </button>
              <button className="p-2 rounded-full hover:bg-surface transition-colors">
                <Share2 size={18} className="text-text-secondary" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {article.content.map((paragraph, i) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2
                    key={i}
                    className="text-xl font-bold text-text mt-8 mb-4"
                  >
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              return (
                <p
                  key={i}
                  className="text-text-secondary leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{
                    __html: paragraph.replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-text">$1</strong>'
                    ),
                  }}
                />
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary-light/30 rounded-3xl p-8 text-center">
            <h3 className="text-xl font-bold text-text mb-2">
              想了解更多個人化健康建議？
            </h3>
            <p className="text-text-secondary mb-6">
              透過 Lumi Health 預約專業諮詢，取得專屬於你的健康管理方案
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
            >
              立即預約諮詢
            </Link>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
