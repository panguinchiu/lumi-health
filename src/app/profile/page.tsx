'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  Calendar,
  Heart,
  ShoppingBag,
  ClipboardCheck,
  ChevronRight,
} from 'lucide-react';

const upcomingAppointments = [
  { date: '2026/04/10', time: '10:00', type: '回診追蹤', doctor: '陳醫師' },
  { date: '2026/04/25', time: '14:00', type: '回診追蹤', doctor: '陳醫師' },
];

const recommendedSupplements = [
  { name: '維生素 D3 2000IU', desc: '根據您的檢測結果推薦', href: '/shop' },
  { name: 'Omega-3 高濃度魚油', desc: '醫師建議補充', href: '/shop' },
  { name: '螯合鐵複方', desc: '搭配維生素C更好吸收', href: '/shop' },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-mist">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl border border-border p-8 mb-6"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-20 h-20 bg-primary-light rounded-2xl flex items-center justify-center">
              <User size={36} className="text-primary" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-text">王小明</h1>
              <p className="text-text-secondary mt-1">會員編號 LH-2026-0001</p>
              <div className="flex flex-wrap gap-4 mt-3">
                <span className="flex items-center gap-1.5 text-sm text-text-secondary">
                  <Mail size={14} /> wang@example.com
                </span>
                <span className="flex items-center gap-1.5 text-sm text-text-secondary">
                  <Phone size={14} /> 0912-345-678
                </span>
              </div>
            </div>
            <button className="px-6 py-2.5 bg-surface text-text text-sm font-medium rounded-full border border-border hover:bg-surface-dark transition-colors">
              編輯資料
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Health Management Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl border border-border p-6"
            >
              <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                <Heart size={20} className="text-primary" />
                健康管理
              </h2>
              <div className="bg-primary-light/30 rounded-2xl p-6 text-center">
                <ClipboardCheck size={40} className="text-primary mx-auto mb-3" />
                <p className="text-text font-medium mb-1">
                  您的檢測報告將由醫師於回診時為您解說
                </p>
                <p className="text-sm text-text-secondary mb-4">
                  如有疑問，歡迎於回診時與醫師討論
                </p>
                <Link
                  href="/booking"
                  className="inline-block px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-dark transition-colors"
                >
                  預約門診
                </Link>
              </div>
            </motion.div>

            {/* Recommended Supplements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl border border-border p-6"
            >
              <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                <ShoppingBag size={20} className="text-primary" />
                推薦保健品
              </h2>
              <div className="space-y-3">
                {recommendedSupplements.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between p-4 bg-surface rounded-2xl hover:bg-surface-dark transition-colors"
                  >
                    <div>
                      <div className="text-sm font-medium text-text">
                        {item.name}
                      </div>
                      <div className="text-xs text-text-secondary mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-text-secondary" />
                  </Link>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link
                  href="/shop"
                  className="text-sm text-primary font-medium hover:underline"
                >
                  查看更多保健品 →
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Appointments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl border border-border p-6"
            >
              <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                <Calendar size={20} className="text-primary" />
                即將到來
              </h2>
              <div className="space-y-3">
                {upcomingAppointments.map((apt) => (
                  <div
                    key={apt.date + apt.time}
                    className="p-4 bg-primary-light/30 rounded-2xl"
                  >
                    <div className="text-sm font-medium text-text">
                      {apt.date} {apt.time}
                    </div>
                    <div className="text-xs text-text-secondary mt-1">
                      {apt.type} · {apt.doctor}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Simplified Health Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl border border-border p-6"
            >
              <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                <ClipboardCheck size={20} className="text-primary" />
                健康追蹤
              </h2>
              <div className="space-y-4">
                <div className="bg-surface rounded-2xl p-4 text-center">
                  <div className="text-3xl font-bold text-text">12</div>
                  <div className="text-xs text-text-secondary mt-1">
                    已完成檢測次數
                  </div>
                </div>
                <div className="bg-surface rounded-2xl p-4 text-center">
                  <div className="text-lg font-bold text-primary">
                    2026/04/10
                  </div>
                  <div className="text-xs text-text-secondary mt-1">
                    下次回診日期
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
