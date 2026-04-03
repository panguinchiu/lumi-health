export interface HistoryPoint {
  date: string;
  value: number;
}

export interface MetricHistory {
  name: string;
  unit: string;
  refLow: number;
  refHigh: number;
  data: HistoryPoint[];
}

export const patientHistories: Record<string, MetricHistory[]> = {
  'wu-junjie': [
    {
      name: 'TSH',
      unit: 'mIU/L',
      refLow: 0.4,
      refHigh: 4.0,
      data: [
        { date: '2024/10', value: 4.2 },
        { date: '2024/12', value: 4.5 },
        { date: '2025/06', value: 4.8 },
        { date: '2025/10', value: 4.9 },
        { date: '2026/02', value: 5.2 },
      ],
    },
    {
      name: '25(OH)D',
      unit: 'ng/mL',
      refLow: 40,
      refHigh: 60,
      data: [
        { date: '2024/10', value: 12 },
        { date: '2024/12', value: 12 },
        { date: '2025/02', value: 13 },
        { date: '2025/06', value: 14 },
        { date: '2025/10', value: 15 },
        { date: '2026/02', value: 18 },
      ],
    },
    {
      name: 'hs-CRP',
      unit: 'mg/L',
      refLow: 0,
      refHigh: 1.0,
      data: [
        { date: '2024/10', value: 5.8 },
        { date: '2024/12', value: 5.8 },
        { date: '2025/02', value: 5.1 },
        { date: '2025/06', value: 4.5 },
        { date: '2025/10', value: 4.1 },
        { date: '2026/02', value: 3.2 },
      ],
    },
    {
      name: 'Homocysteine',
      unit: 'μmol/L',
      refLow: 0,
      refHigh: 10,
      data: [
        { date: '2024/10', value: 18.5 },
        { date: '2024/12', value: 18.5 },
        { date: '2025/06', value: 16.2 },
        { date: '2025/10', value: 14.0 },
        { date: '2026/02', value: 12.5 },
      ],
    },
  ],

  'wang-xiaoming': [
    {
      name: '鐵蛋白',
      unit: 'ng/mL',
      refLow: 30,
      refHigh: 300,
      data: [
        { date: '2024/07', value: 8 },
        { date: '2024/09', value: 8 },
        { date: '2024/12', value: 9 },
        { date: '2025/03', value: 9 },
        { date: '2025/06', value: 10 },
        { date: '2025/09', value: 11 },
        { date: '2025/12', value: 12 },
        { date: '2026/03', value: 15 },
      ],
    },
    {
      name: '25(OH)D',
      unit: 'ng/mL',
      refLow: 40,
      refHigh: 60,
      data: [
        { date: '2024/07', value: 22 },
        { date: '2024/09', value: 22 },
        { date: '2024/12', value: 24 },
        { date: '2025/03', value: 25 },
        { date: '2025/06', value: 26 },
        { date: '2025/09', value: 28 },
        { date: '2025/12', value: 30 },
        { date: '2026/03', value: 35 },
      ],
    },
    {
      name: 'Omega-3 Index',
      unit: '%',
      refLow: 8,
      refHigh: 12,
      data: [
        { date: '2024/07', value: 3.5 },
        { date: '2024/09', value: 3.5 },
        { date: '2024/12', value: 3.8 },
        { date: '2025/03', value: 4.2 },
        { date: '2025/06', value: 4.5 },
        { date: '2025/09', value: 5.2 },
        { date: '2025/12', value: 5.5 },
        { date: '2026/03', value: 6.1 },
      ],
    },
    {
      name: 'hs-CRP',
      unit: 'mg/L',
      refLow: 0,
      refHigh: 1.0,
      data: [
        { date: '2024/07', value: 2.5 },
        { date: '2024/12', value: 2.2 },
        { date: '2025/06', value: 1.8 },
        { date: '2025/09', value: 1.5 },
        { date: '2025/12', value: 1.2 },
        { date: '2026/03', value: 0.8 },
      ],
    },
  ],

  'li-meihua': [
    {
      name: 'E2（雌二醇）',
      unit: 'pg/mL',
      refLow: 30,
      refHigh: 400,
      data: [
        { date: '2024/07', value: 95 },
        { date: '2024/09', value: 85 },
        { date: '2025/03', value: 72 },
        { date: '2025/06', value: 65 },
        { date: '2025/09', value: 60 },
        { date: '2025/12', value: 55 },
        { date: '2026/03', value: 32 },
      ],
    },
    {
      name: 'FSH',
      unit: 'mIU/mL',
      refLow: 0,
      refHigh: 25,
      data: [
        { date: '2024/07', value: 12 },
        { date: '2024/09', value: 15 },
        { date: '2025/03', value: 18 },
        { date: '2025/06', value: 22 },
        { date: '2025/12', value: 28 },
        { date: '2026/03', value: 45 },
      ],
    },
    {
      name: '25(OH)D',
      unit: 'ng/mL',
      refLow: 40,
      refHigh: 60,
      data: [
        { date: '2024/07', value: 18 },
        { date: '2024/12', value: 20 },
        { date: '2025/03', value: 22 },
        { date: '2025/06', value: 25 },
        { date: '2025/09', value: 28 },
        { date: '2025/12', value: 30 },
        { date: '2026/03', value: 38 },
      ],
    },
  ],

  'chen-zhiyuan': [
    {
      name: 'HbA1c',
      unit: '%',
      refLow: 4.0,
      refHigh: 5.6,
      data: [
        { date: '2024/10', value: 6.4 },
        { date: '2024/12', value: 6.4 },
        { date: '2025/03', value: 6.3 },
        { date: '2025/06', value: 6.2 },
        { date: '2025/10', value: 6.0 },
        { date: '2026/03', value: 5.8 },
      ],
    },
    {
      name: '空腹血糖',
      unit: 'mg/dL',
      refLow: 70,
      refHigh: 100,
      data: [
        { date: '2024/10', value: 118 },
        { date: '2024/12', value: 118 },
        { date: '2025/03', value: 110 },
        { date: '2025/06', value: 105 },
        { date: '2025/10', value: 102 },
        { date: '2026/03', value: 95 },
      ],
    },
    {
      name: '體重',
      unit: 'kg',
      refLow: 65,
      refHigh: 78,
      data: [
        { date: '2024/10', value: 88 },
        { date: '2024/12', value: 88 },
        { date: '2025/03', value: 86 },
        { date: '2025/06', value: 84 },
        { date: '2025/10', value: 82 },
        { date: '2026/03', value: 80 },
      ],
    },
    {
      name: 'hs-CRP',
      unit: 'mg/L',
      refLow: 0,
      refHigh: 1.0,
      data: [
        { date: '2024/10', value: 4.2 },
        { date: '2024/12', value: 4.2 },
        { date: '2025/03', value: 3.5 },
        { date: '2025/06', value: 2.8 },
        { date: '2025/10', value: 1.5 },
        { date: '2026/03', value: 0.9 },
      ],
    },
  ],

  'zhang-shufen': [
    {
      name: '晨間皮質醇',
      unit: 'nmol/L',
      refLow: 13,
      refHigh: 24,
      data: [
        { date: '2025/06', value: 6.5 },
        { date: '2025/10', value: 7.5 },
        { date: '2026/02', value: 8.2 },
      ],
    },
    {
      name: '夜間皮質醇',
      unit: 'nmol/L',
      refLow: 0,
      refHigh: 3.5,
      data: [
        { date: '2025/06', value: 8.2 },
        { date: '2025/10', value: 6.8 },
        { date: '2026/02', value: 5.5 },
      ],
    },
    {
      name: 'DHEA-S',
      unit: 'μg/dL',
      refLow: 180,
      refHigh: 350,
      data: [
        { date: '2025/06', value: 95 },
        { date: '2025/10', value: 105 },
        { date: '2026/02', value: 120 },
      ],
    },
  ],

  'lin-jianhong': [
    {
      name: 'Homocysteine',
      unit: 'μmol/L',
      refLow: 0,
      refHigh: 10,
      data: [
        { date: '2024/08', value: 15.8 },
        { date: '2024/10', value: 15.8 },
        { date: '2024/12', value: 14.2 },
        { date: '2025/03', value: 13.5 },
        { date: '2025/06', value: 12.0 },
        { date: '2025/09', value: 10.5 },
        { date: '2025/12', value: 9.5 },
        { date: '2026/03', value: 8.2 },
      ],
    },
    {
      name: '25(OH)D',
      unit: 'ng/mL',
      refLow: 40,
      refHigh: 60,
      data: [
        { date: '2024/08', value: 20 },
        { date: '2024/12', value: 25 },
        { date: '2025/03', value: 30 },
        { date: '2025/06', value: 35 },
        { date: '2025/09', value: 38 },
        { date: '2025/12', value: 42 },
        { date: '2026/03', value: 48 },
      ],
    },
    {
      name: 'Omega-3 Index',
      unit: '%',
      refLow: 8,
      refHigh: 12,
      data: [
        { date: '2024/08', value: 4.0 },
        { date: '2024/12', value: 4.8 },
        { date: '2025/03', value: 5.5 },
        { date: '2025/06', value: 6.2 },
        { date: '2025/09', value: 6.8 },
        { date: '2025/12', value: 7.2 },
        { date: '2026/03', value: 8.5 },
      ],
    },
  ],

  'zhou-fangru': [
    {
      name: 'Zonulin',
      unit: 'ng/mL',
      refLow: 0,
      refHigh: 30,
      data: [
        { date: '2025/10', value: 95 },
        { date: '2025/12', value: 92 },
        { date: '2026/03', value: 85 },
      ],
    },
    {
      name: 'hs-CRP',
      unit: 'mg/L',
      refLow: 0,
      refHigh: 1.0,
      data: [
        { date: '2025/07', value: 3.8 },
        { date: '2025/10', value: 3.5 },
        { date: '2025/12', value: 3.0 },
        { date: '2026/03', value: 2.5 },
      ],
    },
    {
      name: 'Anti-TPO',
      unit: 'IU/mL',
      refLow: 0,
      refHigh: 35,
      data: [
        { date: '2025/10', value: 72 },
        { date: '2025/12', value: 68 },
        { date: '2026/03', value: 62 },
      ],
    },
    {
      name: '25(OH)D',
      unit: 'ng/mL',
      refLow: 40,
      refHigh: 60,
      data: [
        { date: '2025/07', value: 20 },
        { date: '2025/10', value: 22 },
        { date: '2025/12', value: 25 },
        { date: '2026/03', value: 28 },
      ],
    },
  ],
};
