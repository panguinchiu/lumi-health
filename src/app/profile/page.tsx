'use client';

import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  Calendar,
  FileText,
  TrendingUp,
  ChevronRight,
  Activity,
} from 'lucide-react';

const healthRecords = [
  { date: '2026/03/15', type: '全套血液檢查', status: '已完成', result: '正常' },
  { date: '2026/02/20', type: '維生素D檢測', status: '已完成', result: '偏低' },
  { date: '2026/01/10', type: '腸道菌相分析', status: '已完成', result: '待改善' },
  { date: '2025/12/05', type: '荷爾蒙檢測', status: '已完成', result: '正常' },
];

const upcomingAppointments = [
  { date: '2026/04/10', time: '10:00', type: '回診追蹤', doctor: '陳醫師' },
  { date: '2026/04/25', time: '14:00', type: '回診追蹤', doctor: '陳醫師' },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-surface">
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
          {/* Left: Health Summary */}
          <div className="lg:col-span-2 space-y-6">
            {/* Health Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl border border-border p-6"
            >
              <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                <Activity size={20} className="text-primary" />
                健康摘要
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: '總檢測次數', value: '12', trend: '+2' },
                  { label: '追蹤項目', value: '8', trend: '' },
                  { label: '異常指標', value: '2', trend: '-1' },
                  { label: '健康評分', value: '85', trend: '+5' },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="bg-surface rounded-2xl p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-text">{m.value}</div>
                    <div className="text-xs text-text-secondary mt-1">
                      {m.label}
                    </div>
                    {m.trend && (
                      <div className="text-xs text-primary font-medium mt-1">
                        {m.trend}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Health Records */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl border border-border p-6"
            >
              <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                <FileText size={20} className="text-primary" />
                檢測紀錄
              </h2>
              <div className="space-y-3">
                {healthRecords.map((record) => (
                  <div
                    key={record.date + record.type}
                    className="flex items-center justify-between p-4 bg-surface rounded-2xl hover:bg-surface-dark transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-sm text-text-secondary w-24">
                        {record.date}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-text">
                          {record.type}
                        </div>
                        <div className="text-xs text-text-secondary">
                          {record.status}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          record.result === '正常'
                            ? 'bg-green-50 text-green-600'
                            : record.result === '偏低'
                            ? 'bg-amber-50 text-amber-600'
                            : 'bg-red-50 text-red-600'
                        }`}
                      >
                        {record.result}
                      </span>
                      <ChevronRight size={16} className="text-text-secondary" />
                    </div>
                  </div>
                ))}
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

            {/* Health Trend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl border border-border p-6"
            >
              <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-primary" />
                趨勢追蹤
              </h2>
              <div className="space-y-4">
                {[
                  { label: '維生素 D', value: 28, target: 40, unit: 'ng/mL' },
                  { label: '鐵蛋白', value: 65, target: 80, unit: 'ng/mL' },
                  { label: 'Omega-3 指數', value: 6.2, target: 8, unit: '%' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-text-secondary">{item.label}</span>
                      <span className="font-medium text-text">
                        {item.value} {item.unit}
                      </span>
                    </div>
                    <div className="h-2 bg-surface rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all"
                        style={{
                          width: `${Math.min((item.value / item.target) * 100, 100)}%`,
                        }}
                      />
                    </div>
                    <div className="text-xs text-text-secondary mt-1">
                      目標: {item.target} {item.unit}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
