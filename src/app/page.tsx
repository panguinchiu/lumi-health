'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Clock,
  TrendingUp,
  Brain,
  Calendar,
  ShieldCheck,
  Pill,
  ArrowRight,
  CheckCircle2,
  Zap,
  BarChart3,
  Users,
  Stethoscope,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-white via-primary-light/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light rounded-full text-primary text-sm font-medium mb-8"
            >
              <Zap size={14} />
              AI 驅動的預防醫學平台
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text leading-[1.1]"
            >
              讓醫師專注於
              <br />
              <span className="text-primary">真正重要的事</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl"
            >
              透過 AI 智慧診前準備，將準備時間從 30 分鐘縮短至 5 分鐘。
              更多時間留給病患，更高效率帶來更好的照護品質。
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-all text-base"
              >
                立即預約門診
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-text font-medium rounded-full border border-border hover:bg-surface transition-all text-base"
              >
                醫師端體驗
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-40 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      </section>

      {/* Stats Bar */}
      <section className="bg-text py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50%', label: '效率提升' },
              { value: '5 分鐘', label: '診前準備時間' },
              { value: '6 診', label: '每時段最高門診' },
              { value: '98%', label: '醫師滿意度' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid — Apple-style tiles */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-text"
            >
              一個平台，全面守護
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto"
            >
              從智慧診前準備到健康數據追蹤，Lumi Health 提供完整的預防醫學解決方案
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {/* Large feature tile */}
            <motion.div
              variants={fadeUp}
              className="md:col-span-2 bg-white rounded-3xl p-8 lg:p-10 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-primary-light rounded-2xl flex items-center justify-center mb-6">
                    <Brain className="text-primary" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-text mb-3">
                    AI 智慧診前摘要
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    自動彙整病患歷史檢測數據，生成趨勢分析與重點摘要。
                    醫師只需 5 分鐘即可完成過去需要 30 分鐘的準備工作。
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      '自動比對歷次檢測數據變化',
                      '標記異常指標與風險趨勢',
                      '生成個人化建議草稿',
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-text-secondary"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-primary shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-80 h-48 bg-gradient-to-br from-primary-light to-primary/10 rounded-2xl flex items-center justify-center">
                  <BarChart3 size={64} className="text-primary/40" />
                </div>
              </div>
            </motion.div>

            {/* Small tiles */}
            {[
              {
                icon: Calendar,
                title: '智慧預約',
                desc: '30 分鐘回診與 60 分鐘初診，自動配置最佳時段排程',
                color: 'bg-blue-50',
                iconColor: 'text-blue-500',
              },
              {
                icon: Stethoscope,
                title: '健康數據追蹤',
                desc: '完整記錄每次檢測結果，視覺化呈現健康趨勢',
                color: 'bg-purple-50',
                iconColor: 'text-purple-500',
              },
              {
                icon: Pill,
                title: '保健品推薦',
                desc: '根據檢測結果，智慧推薦適合的保健食品方案',
                color: 'bg-amber-50',
                iconColor: 'text-amber-500',
              },
              {
                icon: ShieldCheck,
                title: '隱私安全',
                desc: '醫療級資料加密，符合 HIPAA 標準的安全防護',
                color: 'bg-green-50',
                iconColor: 'text-green-600',
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="bg-white rounded-3xl p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <feature.icon className={feature.iconColor} size={24} />
                </div>
                <h3 className="text-lg font-bold text-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Before / After Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-text"
            >
              效率，看得見的改變
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-text-secondary text-lg"
            >
              以每日兩個時段（上午 9-12、下午 14-17）的回診為例
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Before */}
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border-2 border-border p-8 relative"
            >
              <div className="absolute -top-4 left-8 px-4 py-1 bg-gray-100 rounded-full text-sm font-medium text-text-secondary">
                導入前
              </div>
              <div className="mt-4 space-y-6">
                <div className="flex items-center gap-4">
                  <Clock size={20} className="text-text-secondary" />
                  <div>
                    <div className="text-sm text-text-secondary">診前準備</div>
                    <div className="text-2xl font-bold text-text">
                      20-30 分鐘
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users size={20} className="text-text-secondary" />
                  <div>
                    <div className="text-sm text-text-secondary">
                      每時段回診數
                    </div>
                    <div className="text-2xl font-bold text-text">3-4 診</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <TrendingUp size={20} className="text-text-secondary" />
                  <div>
                    <div className="text-sm text-text-secondary">
                      每日最高門診數
                    </div>
                    <div className="text-2xl font-bold text-text">6-8 診</div>
                  </div>
                </div>
                {/* Visual bar */}
                <div className="pt-4">
                  <div className="text-xs text-text-secondary mb-2">
                    時間利用率
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[55%] bg-gray-300 rounded-full" />
                  </div>
                  <div className="text-right text-xs text-text-secondary mt-1">
                    55%
                  </div>
                </div>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border-2 border-primary p-8 relative bg-primary-light/20"
            >
              <div className="absolute -top-4 left-8 px-4 py-1 bg-primary rounded-full text-sm font-medium text-white">
                導入後
              </div>
              <div className="mt-4 space-y-6">
                <div className="flex items-center gap-4">
                  <Clock size={20} className="text-primary" />
                  <div>
                    <div className="text-sm text-text-secondary">診前準備</div>
                    <div className="text-2xl font-bold text-primary">
                      5 分鐘
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users size={20} className="text-primary" />
                  <div>
                    <div className="text-sm text-text-secondary">
                      每時段回診數
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      5-6 診
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <TrendingUp size={20} className="text-primary" />
                  <div>
                    <div className="text-sm text-text-secondary">
                      每日最高門診數
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      10-12 診
                    </div>
                  </div>
                </div>
                {/* Visual bar */}
                <div className="pt-4">
                  <div className="text-xs text-text-secondary mb-2">
                    時間利用率
                  </div>
                  <div className="h-3 bg-primary/10 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-primary rounded-full" />
                  </div>
                  <div className="text-right text-xs text-primary font-semibold mt-1">
                    85% (+50%)
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-text text-center mb-16"
          >
            來自醫師的真實回饋
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                quote:
                  '以前每個回診病人要翻閱大量資料，現在打開摘要就能直接進入診間，病患等候時間明顯縮短了。',
                name: '陳醫師',
                role: '預防醫學科主治醫師',
              },
              {
                quote:
                  '最讓我驚豔的是趨勢分析功能，系統能自動標記連續惡化的指標，讓我不會遺漏任何關鍵變化。',
                name: '林醫師',
                role: '功能醫學診所院長',
              },
              {
                quote:
                  '導入 Lumi Health 後，我們每天多看了 4-5 個病人，整體營收提升超過 40%，投資報酬率非常高。',
                name: '張醫師',
                role: '健康管理中心負責人',
              },
            ].map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className="bg-white rounded-3xl p-8 border border-border"
              >
                <p className="text-text-secondary leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-text">{t.name}</div>
                  <div className="text-sm text-text-secondary">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-text"
            >
              準備好提升您的診所效率了嗎？
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-text-secondary"
            >
              立即體驗 Lumi Health，讓 AI 成為您最可靠的診前助手
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-all text-base"
              >
                免費預約體驗
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface text-text font-medium rounded-full border border-border hover:bg-surface-dark transition-all text-base"
              >
                聯絡業務團隊
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
