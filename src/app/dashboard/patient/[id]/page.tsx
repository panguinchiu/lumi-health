'use client';

import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  AlertTriangle,
  Brain,
  TrendingUp,
  TrendingDown,
  Calendar,
  FileText,
  Pill,
  Activity,
  CheckCircle2,
  Clock,
  ChevronRight,
  Minus,
} from 'lucide-react';
import { patientsDB, type Patient } from '@/data/patients';
import { patientHistories } from '@/data/patient-history';
import TrendChart from '@/components/TrendChart';

const defaultPatient: Patient = {
  name: '病患',
  gender: '—',
  age: 0,
  memberId: '—',
  phone: '—',
  visits: 0,
  lastVisit: '—',
  nextVisit: '—',
  status: '—',
  alerts: [],
  labResults: [],
  supplements: [],
  visitHistory: [],
  aiSummary: '暫無資料',
  aiRecommendations: [],
};

function getStatusColor(current: number, refLow: number, refHigh: number) {
  if (current < refLow || current > refHigh) return 'text-red-600 bg-red-50';
  const margin = (refHigh - refLow) * 0.15;
  if (current < refLow + margin || current > refHigh - margin) return 'text-amber-600 bg-amber-50';
  return 'text-green-600 bg-green-50';
}

function TrendIcon({ trend }: { trend: 'up' | 'down' | 'stable' }) {
  if (trend === 'up') return <TrendingUp size={14} className="text-red-400" />;
  if (trend === 'down') return <TrendingDown size={14} className="text-green-500" />;
  return <Minus size={14} className="text-gray-400" />;
}

export default function PatientDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const patient = patientsDB[id] || defaultPatient;

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors mb-6"
        >
          <ArrowLeft size={16} /> 返回醫師後台
        </Link>

        {/* Patient Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl border border-border p-6 sm:p-8 mb-6"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">{patient.name[0]}</span>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold text-text">{patient.name}</h1>
                  <span className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-medium rounded-full">
                    {patient.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 mt-1 text-sm text-text-secondary">
                  <span>{patient.gender}・{patient.age} 歲</span>
                  <span>{patient.memberId}</span>
                  <span>{patient.visits} 次就診</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="text-sm text-text-secondary">
                上次：{patient.lastVisit}
              </span>
              <span className="text-sm text-text-secondary">·</span>
              <span className="text-sm font-medium text-primary">
                下次：{patient.nextVisit}
              </span>
            </div>
          </div>
        </motion.div>

        {/* AI Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-6 sm:p-8 text-white mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Brain size={20} />
            <h2 className="text-lg font-bold">AI 診前摘要</h2>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full ml-2">
              自動生成於 5 分鐘前
            </span>
          </div>
          <p className="text-white/90 leading-relaxed text-sm sm:text-base">
            {patient.aiSummary}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Alerts - 需關注重點 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-3xl border border-border p-6"
            >
              <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                <AlertTriangle size={20} className="text-amber-500" />
                需關注重點
                <span className="text-xs bg-red-50 text-red-600 px-2 py-0.5 rounded-full ml-2">
                  {patient.alerts.length} 項
                </span>
              </h2>
              <div className="space-y-4">
                {patient.alerts.map((alert, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-2xl border-l-4 ${
                      alert.level === 'critical'
                        ? 'bg-red-50/50 border-l-red-500'
                        : alert.level === 'warning'
                        ? 'bg-amber-50/50 border-l-amber-500'
                        : 'bg-blue-50/50 border-l-blue-500'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                              alert.level === 'critical'
                                ? 'bg-red-100 text-red-700'
                                : alert.level === 'warning'
                                ? 'bg-amber-100 text-amber-700'
                                : 'bg-blue-100 text-blue-700'
                            }`}
                          >
                            {alert.level === 'critical'
                              ? '高優先'
                              : alert.level === 'warning'
                              ? '中優先'
                              : '追蹤'}
                          </span>
                          <h3 className="text-sm font-bold text-text">{alert.title}</h3>
                        </div>
                        <p className="text-sm text-text-secondary leading-relaxed mt-2">
                          {alert.detail}
                        </p>
                        <span className="text-xs text-text-secondary mt-2 inline-block">
                          檢測日期：{alert.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Trend Charts */}
            {patientHistories[id] && patientHistories[id].length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
              >
                <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                  <TrendingUp size={20} className="text-primary" />
                  歷史趨勢
                  <span className="text-xs bg-surface text-text-secondary px-2 py-0.5 rounded-full ml-1">
                    2024-2026
                  </span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {patientHistories[id].map((metric) => (
                    <TrendChart key={metric.name} metric={metric} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Lab Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl border border-border p-6"
            >
              <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                <Activity size={20} className="text-primary" />
                檢測數據
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-2 text-text-secondary font-medium">
                        項目
                      </th>
                      <th className="text-right py-3 px-2 text-text-secondary font-medium">
                        本次
                      </th>
                      <th className="text-right py-3 px-2 text-text-secondary font-medium">
                        前次
                      </th>
                      <th className="text-center py-3 px-2 text-text-secondary font-medium">
                        趨勢
                      </th>
                      <th className="text-right py-3 px-2 text-text-secondary font-medium">
                        參考值
                      </th>
                      <th className="text-center py-3 px-2 text-text-secondary font-medium">
                        狀態
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {patient.labResults.map((lab) => {
                      const statusColor = getStatusColor(lab.current, lab.refLow, lab.refHigh);
                      const isAbnormal = lab.current < lab.refLow || lab.current > lab.refHigh;
                      return (
                        <tr
                          key={lab.name}
                          className={`border-b border-border/50 ${isAbnormal ? 'bg-red-50/30' : ''}`}
                        >
                          <td className="py-3 px-2 font-medium text-text">{lab.name}</td>
                          <td className={`py-3 px-2 text-right font-bold ${isAbnormal ? 'text-red-600' : 'text-text'}`}>
                            {lab.current} {lab.unit}
                          </td>
                          <td className="py-3 px-2 text-right text-text-secondary">
                            {lab.previous} {lab.unit}
                          </td>
                          <td className="py-3 px-2 text-center">
                            <span className="inline-flex items-center justify-center">
                              <TrendIcon trend={lab.trend} />
                            </span>
                          </td>
                          <td className="py-3 px-2 text-right text-text-secondary">
                            {lab.refLow}-{lab.refHigh}
                          </td>
                          <td className="py-3 px-2 text-center">
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor}`}>
                              {isAbnormal ? '異常' : '正常'}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Visit History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-white rounded-3xl border border-border p-6"
            >
              <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                <Calendar size={20} className="text-primary" />
                就診紀錄
              </h2>
              <div className="relative">
                <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-border" />
                <div className="space-y-6">
                  {patient.visitHistory.map((visit, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="relative">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                            i === 0 ? 'bg-primary text-white' : 'bg-surface text-text-secondary'
                          }`}
                        >
                          <Clock size={16} />
                        </div>
                      </div>
                      <div className="pb-2">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-bold text-text">{visit.date}</span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-surface text-text-secondary">
                            {visit.type}
                          </span>
                        </div>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {visit.summary}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* AI Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-3xl border border-border p-6"
            >
              <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                <Brain size={20} className="text-primary" />
                AI 建議行動
              </h2>
              <div className="space-y-3">
                {patient.aiRecommendations.map((rec, i) => (
                  <div
                    key={i}
                    className="p-3 bg-surface rounded-xl text-sm text-text leading-relaxed"
                  >
                    {rec}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Current Supplements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl border border-border p-6"
            >
              <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                <Pill size={20} className="text-primary" />
                目前補充方案
              </h2>
              <div className="space-y-3">
                {patient.supplements.map((sup, i) => (
                  <div key={i} className="p-4 bg-surface rounded-xl">
                    <div className="text-sm font-medium text-text">{sup.name}</div>
                    <div className="text-xs text-text-secondary mt-1">
                      {sup.dosage} · {sup.frequency}
                    </div>
                    <div className="text-xs text-text-secondary mt-0.5">
                      服用自 {sup.since}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-amber-50 rounded-xl">
                <div className="text-xs font-medium text-amber-700 flex items-center gap-1">
                  <AlertTriangle size={12} />
                  AI 建議調整
                </div>
                <p className="text-xs text-amber-600 mt-1">
                  D3 劑量不足（2000→5000IU），需新增活性 B 群
                </p>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-white rounded-3xl border border-border p-6"
            >
              <h2 className="text-sm font-bold text-text mb-4">快速操作</h2>
              <div className="space-y-2">
                {[
                  { label: '安排甲狀腺進階檢測', icon: FileText },
                  { label: '調整補充方案', icon: Pill },
                  { label: '發送追蹤提醒', icon: Calendar },
                  { label: '推薦保健品', icon: CheckCircle2 },
                ].map((action) => (
                  <button
                    key={action.label}
                    className="w-full flex items-center justify-between p-3 rounded-xl text-sm text-text hover:bg-surface transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <action.icon size={16} className="text-primary" />
                      {action.label}
                    </span>
                    <ChevronRight size={14} className="text-text-secondary" />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
