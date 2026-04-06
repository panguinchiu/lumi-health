'use client';

import { type MetricHistory } from '@/data/patient-history';

function getColor(value: number, refLow: number, refHigh: number): string {
  if (value < refLow || value > refHigh) return '#ef4444';
  const margin = (refHigh - refLow) * 0.15;
  if (value < refLow + margin || value > refHigh - margin) return '#f59e0b';
  return '#d97b3a';
}

export default function TrendChart({ metric }: { metric: MetricHistory }) {
  const { data, refLow, refHigh, name, unit } = metric;
  if (data.length === 0) return null;

  const values = data.map((d) => d.value);
  const allValues = [...values, refLow, refHigh];
  const minVal = Math.min(...allValues) * 0.85;
  const maxVal = Math.max(...allValues) * 1.15;
  const range = maxVal - minVal || 1;

  const width = 100;
  const height = 50;
  const padding = { top: 4, bottom: 4, left: 0, right: 0 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const toX = (i: number) => padding.left + (i / (data.length - 1)) * chartW;
  const toY = (v: number) => padding.top + chartH - ((v - minVal) / range) * chartH;

  // Line path
  const linePath = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${toX(i).toFixed(1)} ${toY(d.value).toFixed(1)}`)
    .join(' ');

  // Area path
  const areaPath = `${linePath} L ${toX(data.length - 1).toFixed(1)} ${(padding.top + chartH).toFixed(1)} L ${padding.left} ${(padding.top + chartH).toFixed(1)} Z`;

  // Ref range
  const refHighY = toY(Math.min(refHigh, maxVal));
  const refLowY = toY(Math.max(refLow, minVal));

  const latestVal = data[data.length - 1].value;
  const firstVal = data[0].value;
  const changePercent = firstVal !== 0 ? (((latestVal - firstVal) / Math.abs(firstVal)) * 100).toFixed(0) : '—';
  const isImproved =
    (latestVal >= refLow && latestVal <= refHigh) ||
    (firstVal > refHigh && latestVal < firstVal) ||
    (firstVal < refLow && latestVal > firstVal);

  return (
    <div className="bg-white rounded-2xl border border-border p-5">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="text-sm font-bold text-text">{name}</h4>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span
              className="text-lg font-bold"
              style={{ color: getColor(latestVal, refLow, refHigh) }}
            >
              {latestVal} {unit}
            </span>
            <span className="text-xs text-text-secondary">
              參考 {refLow}-{refHigh}
            </span>
          </div>
        </div>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${
            isImproved
              ? 'bg-green-50 text-green-600'
              : 'bg-red-50 text-red-600'
          }`}
        >
          {Number(changePercent) > 0 ? '+' : ''}
          {changePercent}%
        </span>
      </div>

      {/* SVG Chart */}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-24"
        preserveAspectRatio="none"
      >
        {/* Reference range band */}
        <rect
          x={padding.left}
          y={refHighY}
          width={chartW}
          height={Math.max(refLowY - refHighY, 0)}
          fill="#d97b3a"
          opacity={0.06}
          rx={1}
        />
        {/* Ref lines */}
        <line
          x1={padding.left}
          y1={refHighY}
          x2={width - padding.right}
          y2={refHighY}
          stroke="#d97b3a"
          strokeWidth={0.3}
          strokeDasharray="1.5 1"
        />
        <line
          x1={padding.left}
          y1={refLowY}
          x2={width - padding.right}
          y2={refLowY}
          stroke="#d97b3a"
          strokeWidth={0.3}
          strokeDasharray="1.5 1"
        />

        {/* Area fill */}
        <path d={areaPath} fill="url(#gradient)" opacity={0.15} />

        {/* Line */}
        <path
          d={linePath}
          fill="none"
          stroke="#d97b3a"
          strokeWidth={1.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data points */}
        {data.map((d, i) => (
          <circle
            key={i}
            cx={toX(i)}
            cy={toY(d.value)}
            r={1.5}
            fill={getColor(d.value, refLow, refHigh)}
            stroke="white"
            strokeWidth={0.5}
          />
        ))}

        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d97b3a" />
            <stop offset="100%" stopColor="#d97b3a" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>

      {/* Date labels */}
      <div className="flex justify-between mt-1">
        <span className="text-[10px] text-text-secondary">{data[0].date}</span>
        <span className="text-[10px] text-text-secondary">{data[data.length - 1].date}</span>
      </div>

      {/* Mini data points */}
      <div className="flex gap-1 mt-2 overflow-x-auto">
        {data.map((d, i) => (
          <div
            key={i}
            className="text-[9px] text-text-secondary whitespace-nowrap px-1.5 py-0.5 bg-surface rounded"
          >
            {d.date.slice(2)}: <span className="font-medium" style={{ color: getColor(d.value, refLow, refHigh) }}>{d.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
