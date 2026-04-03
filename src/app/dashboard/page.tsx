'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain,
  Calendar,
  TrendingUp,
  Users,
  Clock,
  ChevronRight,
  Activity,
  Zap,
  BarChart3,
  FileText,
  AlertTriangle,
  CheckCircle2,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

const todayAppointments = [
  {
    time: '09:00',
    patient: '王小明',
    patientId: 'wang-xiaoming',
    type: '回診追蹤',
    duration: 30,
    status: 'completed',
    summary: '維生素 D 由 22→35 ng/mL（改善），鐵蛋白仍偏低需持續追蹤',
  },
  {
    time: '09:30',
    patient: '李美華',
    patientId: 'li-meihua',
    type: '回診追蹤',
    duration: 30,
    status: 'current',
    summary: '腸道菌相改善中，Omega-3 指數由 4.2→6.1%，建議調整益生菌配方',
  },
  {
    time: '10:00',
    patient: '陳志遠',
    patientId: 'chen-zhiyuan',
    type: '回診追蹤',
    duration: 30,
    status: 'upcoming',
    summary: 'HbA1c 由 6.2→5.8%（改善），血壓穩定，可減少回診頻率',
  },
  {
    time: '10:30',
    patient: '張淑芬',
    patientId: 'zhang-shufen',
    type: '回診追蹤',
    duration: 30,
    status: 'upcoming',
    summary: '荷爾蒙數值趨穩，皮質醇節律改善，睡眠品質上升',
  },
  {
    time: '11:00',
    patient: '林建宏',
    patientId: 'lin-jianhong',
    type: '回診追蹤',
    duration: 30,
    status: 'upcoming',
    summary: '同半胱胺酸由 15→11 μmol/L，B群補充有效，建議維持劑量',
  },
  {
    time: '14:00',
    patient: '黃雅婷',
    patientId: 'huang-yating',
    type: '初次諮詢',
    duration: 60,
    status: 'upcoming',
    summary: '新客戶，無歷史數據，需進行完整健康評估',
  },
  {
    time: '15:00',
    patient: '吳俊傑',
    patientId: 'wu-junjie',
    type: '回診追蹤',
    duration: 30,
    status: 'upcoming',
    summary: '甲狀腺 TSH 偏高 5.2 mIU/L，建議進一步檢測 Free T3/T4',
  },
  {
    time: '15:30',
    patient: '周芳如',
    patientId: 'zhou-fangru',
    type: '回診追蹤',
    duration: 30,
    status: 'upcoming',
    summary: '過敏原檢測結果出爐，IgG 顯示乳製品與麩質敏感',
  },
];

const alertPatients = [
  {
    name: '吳俊傑',
    alert: 'TSH 5.2 mIU/L 偏高',
    severity: 'warning',
  },
  {
    name: '王小明',
    alert: '鐵蛋白持續偏低 (15 ng/mL)',
    severity: 'warning',
  },
  {
    name: '周芳如',
    alert: '新過敏原檢測結果需解說',
    severity: 'info',
  },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'today' | 'patients' | 'analytics'>('today');
  const completedCount = todayAppointments.filter((a) => a.status === 'completed').length;
  const totalCount = todayAppointments.length;

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-text">
              早安，陳醫師 👋
            </h1>
            <p className="text-text-secondary mt-1">
              今天有 {totalCount} 位病患，已完成 {completedCount} 位
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-primary-light rounded-full">
            <Zap size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              AI 摘要已就緒
            </span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              icon: Calendar,
              label: '今日門診',
              value: `${totalCount} 診`,
              change: '+2',
              up: true,
            },
            {
              icon: Clock,
              label: '平均準備時間',
              value: '4.5 分鐘',
              change: '-83%',
              up: false,
            },
            {
              icon: Users,
              label: '本月病患數',
              value: '128 位',
              change: '+12%',
              up: true,
            },
            {
              icon: TrendingUp,
              label: '效率評分',
              value: '94 分',
              change: '+8',
              up: true,
            },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-border p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <stat.icon size={20} className="text-primary" />
                <span
                  className={`flex items-center gap-0.5 text-xs font-medium ${
                    stat.up ? 'text-green-500' : 'text-primary'
                  }`}
                >
                  {stat.up ? (
                    <ArrowUpRight size={12} />
                  ) : (
                    <ArrowDownRight size={12} />
                  )}
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-text">{stat.value}</div>
              <div className="text-xs text-text-secondary mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-white rounded-xl p-1 border border-border mb-6 w-fit">
          {[
            { id: 'today' as const, label: '今日排程', icon: Calendar },
            { id: 'patients' as const, label: '病患總覽', icon: Users },
            { id: 'analytics' as const, label: '效能分析', icon: BarChart3 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-primary text-white'
                  : 'text-text-secondary hover:text-text'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4">
            {activeTab === 'today' && (
              <>
                {/* Time blocks */}
                <div className="bg-white rounded-2xl border border-border p-4">
                  <h3 className="text-sm font-semibold text-text-secondary mb-4 px-2">
                    上午時段 09:00 - 12:00
                  </h3>
                  <div className="space-y-2">
                    {todayAppointments
                      .filter((a) => parseInt(a.time) < 12)
                      .map((apt) => (
                        <Link
                          href={`/dashboard/patient/${apt.patientId}`}
                          key={apt.time + apt.patient}
                          className={`block p-4 rounded-xl transition-colors cursor-pointer ${
                            apt.status === 'completed'
                              ? 'bg-green-50/50'
                              : apt.status === 'current'
                              ? 'bg-primary-light/50 border border-primary/20'
                              : 'bg-surface hover:bg-surface-dark'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3">
                              <div className="text-center min-w-[52px]">
                                <div className="text-sm font-bold text-text">
                                  {apt.time}
                                </div>
                                <div className="text-xs text-text-secondary">
                                  {apt.duration}分
                                </div>
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-text">
                                    {apt.patient}
                                  </span>
                                  <span
                                    className={`text-xs px-2 py-0.5 rounded-full ${
                                      apt.type === '初次諮詢'
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'bg-gray-100 text-text-secondary'
                                    }`}
                                  >
                                    {apt.type}
                                  </span>
                                  {apt.status === 'completed' && (
                                    <CheckCircle2
                                      size={14}
                                      className="text-green-500"
                                    />
                                  )}
                                  {apt.status === 'current' && (
                                    <span className="flex items-center gap-1 text-xs text-primary font-medium">
                                      <Activity size={12} /> 進行中
                                    </span>
                                  )}
                                </div>
                                {/* AI Summary */}
                                <div className="flex items-start gap-1.5 mt-2">
                                  <Brain
                                    size={14}
                                    className="text-primary shrink-0 mt-0.5"
                                  />
                                  <p className="text-xs text-text-secondary leading-relaxed">
                                    {apt.summary}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <ChevronRight
                              size={16}
                              className="text-text-secondary mt-1"
                            />
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-border p-4">
                  <h3 className="text-sm font-semibold text-text-secondary mb-4 px-2">
                    下午時段 14:00 - 17:00
                  </h3>
                  <div className="space-y-2">
                    {todayAppointments
                      .filter((a) => parseInt(a.time) >= 12)
                      .map((apt) => (
                        <Link
                          href={`/dashboard/patient/${apt.patientId}`}
                          key={apt.time + apt.patient}
                          className="block p-4 rounded-xl bg-surface hover:bg-surface-dark transition-colors cursor-pointer"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3">
                              <div className="text-center min-w-[52px]">
                                <div className="text-sm font-bold text-text">
                                  {apt.time}
                                </div>
                                <div className="text-xs text-text-secondary">
                                  {apt.duration}分
                                </div>
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-text">
                                    {apt.patient}
                                  </span>
                                  <span
                                    className={`text-xs px-2 py-0.5 rounded-full ${
                                      apt.type === '初次諮詢'
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'bg-gray-100 text-text-secondary'
                                    }`}
                                  >
                                    {apt.type}
                                  </span>
                                </div>
                                <div className="flex items-start gap-1.5 mt-2">
                                  <Brain
                                    size={14}
                                    className="text-primary shrink-0 mt-0.5"
                                  />
                                  <p className="text-xs text-text-secondary leading-relaxed">
                                    {apt.summary}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <ChevronRight
                              size={16}
                              className="text-text-secondary mt-1"
                            />
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'patients' && (
              <div className="bg-white rounded-2xl border border-border p-6">
                <h3 className="text-lg font-bold text-text mb-4">病患列表</h3>
                <div className="space-y-3">
                  {[
                    { name: '王小明', id: 'wang-xiaoming', visits: 12, lastVisit: '2026/03/15', status: '追蹤中' },
                    { name: '李美華', id: 'li-meihua', visits: 8, lastVisit: '2026/03/20', status: '追蹤中' },
                    { name: '陳志遠', id: 'chen-zhiyuan', visits: 6, lastVisit: '2026/03/01', status: '穩定' },
                    { name: '張淑芬', id: 'zhang-shufen', visits: 4, lastVisit: '2026/02/25', status: '追蹤中' },
                    { name: '林建宏', id: 'lin-jianhong', visits: 10, lastVisit: '2026/03/10', status: '穩定' },
                    { name: '吳俊傑', id: 'wu-junjie', visits: 3, lastVisit: '2026/02/15', status: '需關注' },
                    { name: '周芳如', id: 'zhou-fangru', visits: 5, lastVisit: '2026/03/18', status: '追蹤中' },
                  ].map((p) => (
                    <Link
                      href={`/dashboard/patient/${p.id}`}
                      key={p.name}
                      className="flex items-center justify-between p-4 bg-surface rounded-xl hover:bg-surface-dark transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">
                            {p.name[0]}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-text">{p.name}</div>
                          <div className="text-xs text-text-secondary">
                            {p.visits} 次就診 · 上次：{p.lastVisit}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                            p.status === '穩定'
                              ? 'bg-green-50 text-green-600'
                              : p.status === '需關注'
                              ? 'bg-amber-50 text-amber-600'
                              : 'bg-blue-50 text-blue-600'
                          }`}
                        >
                          {p.status}
                        </span>
                        <ChevronRight size={16} className="text-text-secondary" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-border p-6">
                  <h3 className="text-lg font-bold text-text mb-6">效率趨勢（近 4 週）</h3>
                  <div className="space-y-4">
                    {[
                      { week: '第一週', prepTime: 28, patients: 24 },
                      { week: '第二週', prepTime: 15, patients: 30 },
                      { week: '第三週', prepTime: 8, patients: 36 },
                      { week: '第四週', prepTime: 5, patients: 40 },
                    ].map((w) => (
                      <div key={w.week}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-text-secondary">{w.week}</span>
                          <span className="text-text font-medium">
                            平均準備 {w.prepTime} 分 · {w.patients} 位病患
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1 h-3 bg-surface rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full transition-all"
                              style={{
                                width: `${(w.patients / 45) * 100}%`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl border border-border p-6">
                    <h4 className="text-sm font-semibold text-text-secondary mb-4">
                      門診類型分佈
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-text">回診追蹤</span>
                          <span className="font-medium text-text">78%</span>
                        </div>
                        <div className="h-2 bg-surface rounded-full overflow-hidden">
                          <div className="h-full w-[78%] bg-primary rounded-full" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-text">初次諮詢</span>
                          <span className="font-medium text-text">22%</span>
                        </div>
                        <div className="h-2 bg-surface rounded-full overflow-hidden">
                          <div className="h-full w-[22%] bg-accent rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-border p-6">
                    <h4 className="text-sm font-semibold text-text-secondary mb-4">
                      營收概覽（本月）
                    </h4>
                    <div className="text-3xl font-bold text-text mb-1">
                      NT$ 486,000
                    </div>
                    <span className="flex items-center gap-1 text-sm text-green-500 font-medium">
                      <ArrowUpRight size={14} /> +42% vs 上月
                    </span>
                    <div className="mt-4 text-xs text-text-secondary">
                      檢測費用 NT$ 382,000 · 初診費 NT$ 54,000 · 保健品 NT$ 50,000
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Alerts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border border-border p-5"
            >
              <h3 className="text-sm font-bold text-text mb-4 flex items-center gap-2">
                <AlertTriangle size={16} className="text-amber-500" />
                需關注事項
              </h3>
              <div className="space-y-3">
                {alertPatients.map((alert) => (
                  <div
                    key={alert.name}
                    className={`p-3 rounded-xl text-sm ${
                      alert.severity === 'warning'
                        ? 'bg-amber-50'
                        : 'bg-blue-50'
                    }`}
                  >
                    <div className="font-medium text-text">{alert.name}</div>
                    <div className="text-xs text-text-secondary mt-0.5">
                      {alert.alert}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* AI Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-5 text-white"
            >
              <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
                <Brain size={16} />
                AI 洞察
              </h3>
              <ul className="space-y-3 text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="shrink-0 mt-0.5" />
                  <span>本月維生素 D 不足患者比例下降 15%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="shrink-0 mt-0.5" />
                  <span>建議為吳俊傑安排甲狀腺進階檢測</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="shrink-0 mt-0.5" />
                  <span>週四下午有空檔，可安排額外回診</span>
                </li>
              </ul>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl border border-border p-5"
            >
              <h3 className="text-sm font-bold text-text mb-4 flex items-center gap-2">
                <FileText size={16} className="text-primary" />
                今日摘要狀態
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">AI 摘要生成</span>
                  <span className="font-medium text-green-500">7/7 完成</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">新數據匯入</span>
                  <span className="font-medium text-green-500">5 筆</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">待確認報告</span>
                  <span className="font-medium text-amber-500">2 筆</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
