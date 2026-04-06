'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  User,
  CheckCircle2,
  CalendarDays,
} from 'lucide-react';

const VISIT_TYPES = [
  {
    id: 'first',
    label: '初次諮詢',
    duration: '60 分鐘',
    price: 'NT$ 3,000',
    desc: '完整健康評估與諮詢，適合初次來訪的客人',
  },
  {
    id: 'followup',
    label: '回診追蹤',
    duration: '30 分鐘',
    price: '含於檢測費用',
    desc: '追蹤檢測報告與數據解說',
  },
];

const TIME_SLOTS_AM = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'];
const TIME_SLOTS_PM = ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];

const MONTHS = [
  '一月', '二月', '三月', '四月', '五月', '六月',
  '七月', '八月', '九月', '十月', '十一月', '十二月',
];
const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六'];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function BookingPage() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [visitType, setVisitType] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6 || date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const availableSlots = visitType === 'first'
    ? ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']
    : [...TIME_SLOTS_AM, ...TIME_SLOTS_PM];

  const handleConfirm = () => {
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="min-h-screen bg-mist flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-10 max-w-md w-full text-center border border-border"
        >
          <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-primary" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-text mb-2">預約成功！</h2>
          <p className="text-text-secondary mb-6">
            我們已收到您的預約，確認信將寄送至您的信箱
          </p>
          <div className="bg-surface rounded-2xl p-6 text-left space-y-3">
            <div className="flex justify-between">
              <span className="text-text-secondary text-sm">門診類型</span>
              <span className="text-sm font-medium text-text">
                {visitType === 'first' ? '初次諮詢 (60分鐘)' : '回診追蹤 (30分鐘)'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary text-sm">日期</span>
              <span className="text-sm font-medium text-text">
                {currentYear}/{currentMonth + 1}/{selectedDate}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary text-sm">時間</span>
              <span className="text-sm font-medium text-text">{selectedTime}</span>
            </div>
          </div>
          <button
            onClick={() => {
              setConfirmed(false);
              setStep(1);
              setVisitType(null);
              setSelectedDate(null);
              setSelectedTime(null);
            }}
            className="mt-6 w-full py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            返回首頁
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mist">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-text">預約門診</h1>
          <p className="mt-3 text-text-secondary">
            選擇您方便的時間，輕鬆完成預約
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {[
            { num: 1, label: '選擇類型' },
            { num: 2, label: '選擇日期' },
            { num: 3, label: '選擇時間' },
          ].map((s, i) => (
            <div key={s.num} className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    step >= s.num
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-text-secondary'
                  }`}
                >
                  {step > s.num ? <CheckCircle2 size={16} /> : s.num}
                </div>
                <span
                  className={`text-sm font-medium hidden sm:inline ${
                    step >= s.num ? 'text-text' : 'text-text-secondary'
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < 2 && (
                <div
                  className={`w-12 h-0.5 ${
                    step > s.num ? 'bg-primary' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Visit Type */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {VISIT_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => {
                  setVisitType(type.id);
                  setStep(2);
                }}
                className={`text-left p-6 rounded-2xl border-2 transition-all hover:shadow-md ${
                  visitType === type.id
                    ? 'border-primary bg-primary-light/30'
                    : 'border-border bg-white hover:border-primary/30'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={18} className="text-primary" />
                  <span className="text-sm font-medium text-primary">
                    {type.duration}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-text mb-1">
                  {type.label}
                </h3>
                <p className="text-sm text-text-secondary mb-3">{type.desc}</p>
                <div className="text-lg font-semibold text-text">
                  {type.price}
                </div>
              </button>
            ))}
          </motion.div>
        )}

        {/* Step 2: Date Selection */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl border border-border p-6 sm:p-8 max-w-lg mx-auto"
          >
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-surface rounded-xl transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <h3 className="text-lg font-semibold text-text">
                {currentYear} 年 {MONTHS[currentMonth]}
              </h3>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-surface rounded-xl transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {WEEKDAYS.map((d) => (
                <div
                  key={d}
                  className="text-center text-xs font-medium text-text-secondary py-2"
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const disabled = isDateDisabled(day);
                const selected = selectedDate === day;
                return (
                  <button
                    key={day}
                    disabled={disabled}
                    onClick={() => {
                      setSelectedDate(day);
                      setStep(3);
                    }}
                    className={`aspect-square rounded-xl flex items-center justify-center text-sm font-medium transition-all ${
                      disabled
                        ? 'text-gray-300 cursor-not-allowed'
                        : selected
                        ? 'bg-primary text-white'
                        : 'text-text hover:bg-primary-light'
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setStep(1)}
              className="mt-6 text-sm text-text-secondary hover:text-text transition-colors"
            >
              &larr; 返回選擇類型
            </button>
          </motion.div>
        )}

        {/* Step 3: Time Selection */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mx-auto"
          >
            <div className="bg-white rounded-3xl border border-border p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <CalendarDays size={20} className="text-primary" />
                <span className="font-medium text-text">
                  {currentYear}/{currentMonth + 1}/{selectedDate}（
                  {visitType === 'first' ? '初次諮詢' : '回診追蹤'}）
                </span>
              </div>

              {/* AM slots */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-text-secondary mb-3">
                  上午時段 09:00 - 12:00
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {availableSlots
                    .filter((s) => parseInt(s) < 12)
                    .map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`py-3 rounded-xl text-sm font-medium transition-all ${
                          selectedTime === slot
                            ? 'bg-primary text-white'
                            : 'bg-surface text-text hover:bg-primary-light'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                </div>
              </div>

              {/* PM slots */}
              <div className="mb-8">
                <h4 className="text-sm font-medium text-text-secondary mb-3">
                  下午時段 14:00 - 17:00
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {availableSlots
                    .filter((s) => parseInt(s) >= 12)
                    .map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`py-3 rounded-xl text-sm font-medium transition-all ${
                          selectedTime === slot
                            ? 'bg-primary text-white'
                            : 'bg-surface text-text hover:bg-primary-light'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                </div>
              </div>

              <button
                disabled={!selectedTime}
                onClick={handleConfirm}
                className="w-full py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                確認預約
              </button>

              <button
                onClick={() => {
                  setStep(2);
                  setSelectedTime(null);
                }}
                className="mt-4 w-full text-sm text-text-secondary hover:text-text transition-colors text-center"
              >
                &larr; 返回選擇日期
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
