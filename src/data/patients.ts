export interface Alert {
  level: 'critical' | 'warning' | 'info';
  title: string;
  detail: string;
  date: string;
}

export interface LabResult {
  name: string;
  current: number;
  previous: number;
  unit: string;
  refLow: number;
  refHigh: number;
  trend: 'up' | 'down' | 'stable';
}

export interface Supplement {
  name: string;
  dosage: string;
  frequency: string;
  since: string;
}

export interface Visit {
  date: string;
  type: string;
  summary: string;
}

export interface Patient {
  name: string;
  gender: string;
  age: number;
  memberId: string;
  phone: string;
  visits: number;
  lastVisit: string;
  nextVisit: string;
  status: string;
  alerts: Alert[];
  labResults: LabResult[];
  supplements: Supplement[];
  visitHistory: Visit[];
  aiSummary: string;
  aiRecommendations: string[];
}

export const patientsDB: Record<string, Patient> = {
  'wu-junjie': {
    name: '吳俊傑',
    gender: '男',
    age: 45,
    memberId: 'LH-2024-0042',
    phone: '0922-XXX-XXX',
    visits: 9,
    lastVisit: '2026/02/15',
    nextVisit: '2026/04/03',
    status: '需關注',
    alerts: [
      {
        level: 'critical',
        title: 'TSH 偏高 — 疑似亞臨床甲狀腺低下',
        detail:
          'TSH 5.2 mIU/L（正常 0.4-4.0），已連續三次檢測偏高（2024/08: 4.5 → 2025/06: 4.8 → 2026/02: 5.2）。呈持續上升趨勢，建議進一步檢測 Free T3、Free T4、甲狀腺抗體（Anti-TPO, Anti-TG）以排除橋本氏甲狀腺炎。',
        date: '2026/02/15',
      },
      {
        level: 'warning',
        title: '維生素 D 長期不足',
        detail:
          '25(OH)D 由 2024 年的 12 ng/mL 緩慢上升至 18 ng/mL（建議 40-60），補充劑量不足。目前 2000IU/日持續 14 個月僅提升 6 ng/mL，建議調升至 5000IU/日並搭配 K2。',
        date: '2026/02/15',
      },
      {
        level: 'warning',
        title: '慢性低度發炎持續',
        detail:
          'hs-CRP 3.2 mg/L（理想 <1.0），雖較 2024 年的 5.8 有改善，但仍偏高。Omega-3 Index 僅 4.2%（目標 >8%），魚油劑量需加強。',
        date: '2026/02/15',
      },
      {
        level: 'info',
        title: '同半胱胺酸改善中',
        detail:
          'Homocysteine 由 2024 年 18.5 降至 12.5 μmol/L（理想 <10），B 群補充有效但劑量可再調整。建議轉用活性型態 B 群。',
        date: '2026/02/15',
      },
    ],
    labResults: [
      { name: 'TSH', current: 5.2, previous: 4.8, unit: 'mIU/L', refLow: 0.4, refHigh: 4.0, trend: 'up' },
      { name: '25(OH)D', current: 18, previous: 15, unit: 'ng/mL', refLow: 40, refHigh: 60, trend: 'up' },
      { name: 'hs-CRP', current: 3.2, previous: 4.1, unit: 'mg/L', refLow: 0, refHigh: 1.0, trend: 'down' },
      { name: 'Homocysteine', current: 12.5, previous: 14.0, unit: 'μmol/L', refLow: 0, refHigh: 10, trend: 'down' },
      { name: '空腹血糖', current: 95, previous: 98, unit: 'mg/dL', refLow: 70, refHigh: 100, trend: 'down' },
      { name: 'HbA1c', current: 5.6, previous: 5.7, unit: '%', refLow: 4.0, refHigh: 5.6, trend: 'down' },
      { name: '鐵蛋白', current: 45, previous: 42, unit: 'ng/mL', refLow: 30, refHigh: 300, trend: 'up' },
      { name: 'Omega-3 Index', current: 4.2, previous: 3.8, unit: '%', refLow: 8, refHigh: 12, trend: 'up' },
      { name: '總膽固醇', current: 215, previous: 228, unit: 'mg/dL', refLow: 0, refHigh: 200, trend: 'down' },
      { name: 'LDL-C', current: 138, previous: 148, unit: 'mg/dL', refLow: 0, refHigh: 130, trend: 'down' },
      { name: 'HDL-C', current: 48, previous: 45, unit: 'mg/dL', refLow: 40, refHigh: 999, trend: 'up' },
      { name: '三酸甘油酯', current: 145, previous: 168, unit: 'mg/dL', refLow: 0, refHigh: 150, trend: 'down' },
    ],
    supplements: [
      { name: '維生素 D3', dosage: '2000 IU', frequency: '每日一次', since: '2024/12' },
      { name: '魚油 Omega-3', dosage: '1000 mg', frequency: '每日一次', since: '2024/12' },
      { name: 'B 群', dosage: '一顆', frequency: '每日一次', since: '2025/06' },
    ],
    visitHistory: [
      { date: '2026/02/15', type: '回診追蹤', summary: 'TSH 持續上升至 5.2，維生素 D 補充效果不佳僅 18 ng/mL。hs-CRP 改善但仍偏高。建議加強補充方案並安排甲狀腺進階檢測。' },
      { date: '2025/10/20', type: '回診追蹤', summary: '維生素 D 略升至 15 ng/mL，Homocysteine 由 16.2 降至 14.0。TSH 4.8 仍偏高。開始補充 B 群。' },
      { date: '2025/06/15', type: '回診追蹤', summary: '半年追蹤。TSH 由 4.5 微升至 4.8，開始關注。維生素 D 從 12 升至 14 ng/mL，補充效果有限。Homocysteine 16.2。' },
      { date: '2025/02/10', type: '回診追蹤', summary: '補充 D3 與魚油 2 個月後首次回診。CRP 由 5.8 降至 5.1，Omega-3 Index 由 3.0 升至 3.5%。方向正確但需時間。' },
      { date: '2024/12/05', type: '回診追蹤', summary: '檢測結果解說：維生素 D 嚴重缺乏 12 ng/mL、hs-CRP 5.8 慢性發炎、Homocysteine 18.5 偏高。開始補充 D3 2000IU + Omega-3 1000mg。' },
      { date: '2024/10/15', type: '初次諮詢', summary: '45歲男性，主訴長期疲勞、體重過去一年增加 5kg、怕冷、注意力不集中。BMI 26.8。安排全套血液檢查、甲狀腺、維生素、發炎指標、脂質代謝等 15 項檢測。' },
    ],
    aiSummary:
      '吳俊傑先生，45歲男性，自 2024 年 10 月開始追蹤，至今 9 次就診。核心問題為亞臨床甲狀腺低下（TSH 連續三次上升 4.5→4.8→5.2）合併維生素 D 長期缺乏（12→15→18 ng/mL，補充劑量不足）與慢性低度發炎（hs-CRP 由 5.8 改善至 3.2 但仍偏高）。同半胱胺酸從 18.5 降至 12.5，B 群補充有效。脂質代謝有改善趨勢但 LDL 仍偏高。此次回診重點：1) TSH 持續上升需甲狀腺進階檢測確認是否為自體免疫性甲狀腺炎；2) D3 劑量需從 2000 提高至 5000IU；3) 評估是否需要開始低劑量甲狀腺素治療。',
    aiRecommendations: [
      '🔴 緊急安排甲狀腺進階檢測：Free T3、Free T4、Anti-TPO、Anti-TG',
      '🔴 將維生素 D3 劑量從 2000IU 提高至 5000IU/日，加入 K2 100μg',
      '🟠 Omega-3 魚油從 1000mg 提高至 2000mg/日（rTG 型態）',
      '🟠 B 群轉換為活性型態（甲基葉酸 800μg + 甲鈷胺 1000μg）',
      '🟡 建議減少精緻碳水化合物，增加抗發炎食物（深色蔬菜、莓果類）',
      '🟡 評估是否需要低劑量甲狀腺素（L-T4）治療',
      '🔵 6 週後回診複驗 TSH、FT3、FT4、甲狀腺抗體',
      '🔵 3 個月後複驗 25(OH)D、hs-CRP、Omega-3 Index',
    ],
  },

  'wang-xiaoming': {
    name: '王小明',
    gender: '男',
    age: 38,
    memberId: 'LH-2024-0001',
    phone: '0912-XXX-XXX',
    visits: 12,
    lastVisit: '2026/03/15',
    nextVisit: '2026/04/10',
    status: '追蹤中',
    alerts: [
      {
        level: 'warning',
        title: '鐵蛋白持續偏低',
        detail:
          '鐵蛋白 15 ng/mL（理想 50-150），雖從 2024 年的 8 ng/mL 有改善，但仍為缺鐵狀態。需排查吸收問題或潛在出血原因。',
        date: '2026/03/15',
      },
      {
        level: 'info',
        title: '維生素 D 已達標，維持觀察',
        detail:
          '25(OH)D 由 2024 年 22 ng/mL 提升至 35 ng/mL，改善顯著。目標繼續提升至 40-60 ng/mL，維持目前 D3 3000IU/日。',
        date: '2026/03/15',
      },
      {
        level: 'info',
        title: 'Omega-3 指數接近目標',
        detail: 'Omega-3 Index 由 3.5% 上升至 6.1%，持續改善中。目標 8% 以上，維持魚油 2000mg/日。',
        date: '2026/03/15',
      },
    ],
    labResults: [
      { name: 'TSH', current: 2.1, previous: 2.3, unit: 'mIU/L', refLow: 0.4, refHigh: 4.0, trend: 'down' },
      { name: '25(OH)D', current: 35, previous: 28, unit: 'ng/mL', refLow: 40, refHigh: 60, trend: 'up' },
      { name: 'hs-CRP', current: 0.8, previous: 1.2, unit: 'mg/L', refLow: 0, refHigh: 1.0, trend: 'down' },
      { name: 'Homocysteine', current: 8.5, previous: 9.2, unit: 'μmol/L', refLow: 0, refHigh: 10, trend: 'down' },
      { name: '空腹血糖', current: 88, previous: 90, unit: 'mg/dL', refLow: 70, refHigh: 100, trend: 'down' },
      { name: 'HbA1c', current: 5.2, previous: 5.3, unit: '%', refLow: 4.0, refHigh: 5.6, trend: 'down' },
      { name: '鐵蛋白', current: 15, previous: 12, unit: 'ng/mL', refLow: 30, refHigh: 300, trend: 'up' },
      { name: 'Omega-3 Index', current: 6.1, previous: 5.2, unit: '%', refLow: 8, refHigh: 12, trend: 'up' },
      { name: '總膽固醇', current: 185, previous: 192, unit: 'mg/dL', refLow: 0, refHigh: 200, trend: 'down' },
      { name: 'LDL-C', current: 108, previous: 118, unit: 'mg/dL', refLow: 0, refHigh: 130, trend: 'down' },
      { name: 'HDL-C', current: 55, previous: 52, unit: 'mg/dL', refLow: 40, refHigh: 999, trend: 'up' },
      { name: '維生素 B12', current: 520, previous: 480, unit: 'pg/mL', refLow: 200, refHigh: 900, trend: 'up' },
    ],
    supplements: [
      { name: '維生素 D3', dosage: '3000 IU', frequency: '每日一次', since: '2024/06' },
      { name: '魚油 Omega-3', dosage: '2000 mg', frequency: '每日一次', since: '2024/06' },
      { name: '鐵劑（甘胺酸亞鐵）', dosage: '36 mg', frequency: '隔日一次', since: '2025/01' },
      { name: '維生素 C', dosage: '500 mg', frequency: '每日一次（搭配鐵劑）', since: '2025/01' },
    ],
    visitHistory: [
      { date: '2026/03/15', type: '回診追蹤', summary: '維生素 D 35 ng/mL 持續進步。鐵蛋白 15 仍偏低，補充 14 個月提升緩慢，需考慮腸道吸收問題。hs-CRP 首次降至 1.0 以下。' },
      { date: '2025/12/10', type: '回診追蹤', summary: '年度全面檢測。各項指標穩定改善中。鐵蛋白 12，補充速度偏慢。建議加入維生素 C 促進吸收。' },
      { date: '2025/09/05', type: '回診追蹤', summary: 'Omega-3 Index 由 4.5 升至 5.2%，魚油加量有效。維生素 D 28 ng/mL，持續進步。' },
      { date: '2025/06/10', type: '回診追蹤', summary: '半年追蹤。鐵蛋白仍偏低 10 ng/mL，開始鐵劑已 5 個月效果有限，排除腸胃道出血後懷疑吸收問題。' },
      { date: '2025/03/15', type: '回診追蹤', summary: '維生素 D 由 22 升至 25 ng/mL。開始補充鐵劑 3 個月，鐵蛋白由 8 升至 9。Omega-3 Index 4.2%。' },
      { date: '2024/12/20', type: '回診追蹤', summary: '初次檢測後 3 個月回診。維生素 D 補充效果初現。鐵蛋白 8 ng/mL 嚴重不足，開始鐵劑補充。' },
      { date: '2024/09/10', type: '回診追蹤', summary: '檢測結果解說。維生素 D 22 不足、鐵蛋白 8 嚴重缺乏、Omega-3 Index 3.5% 偏低。開始 D3+Omega-3 補充。' },
      { date: '2024/07/15', type: '初次諮詢', summary: '38歲男性工程師，主訴容易疲勞、掉髮增加、運動恢復慢。安排全套血液、維生素、礦物質、甲狀腺、發炎指標檢測。' },
    ],
    aiSummary:
      '王小明先生，38歲男性，自 2024 年 7 月開始追蹤，至今 12 次就診。整體健康趨勢正向：維生素 D 從 22 提升至 35 ng/mL（接近達標）、hs-CRP 從 2.5 降至 0.8（已正常化）、Omega-3 Index 從 3.5 升至 6.1%（持續進步）。主要待解決問題為鐵蛋白長期偏低（8→15 ng/mL，補充 14 個月仍未達標），需評估是否存在腸道吸收障礙，可考慮安排腸道通透性檢測或乳糜瀉篩檢。',
    aiRecommendations: [
      '🟠 評估鐵劑吸收問題：建議安排腸道通透性檢測（Zonulin）',
      '🟠 考慮改用液態鐵劑或靜脈鐵劑以提升吸收效率',
      '🟡 維生素 D3 維持 3000IU/日，目標 40 ng/mL 以上',
      '🟡 魚油維持 2000mg/日，Omega-3 Index 持續朝 8% 目標前進',
      '🔵 下次回診安排乳糜瀉篩檢（tTG-IgA）',
      '🔵 4 週後回診，重點追蹤鐵蛋白與新檢測結果',
    ],
  },

  'li-meihua': {
    name: '李美華',
    gender: '女',
    age: 52,
    memberId: 'LH-2024-0015',
    phone: '0933-XXX-XXX',
    visits: 8,
    lastVisit: '2026/03/20',
    nextVisit: '2026/04/15',
    status: '追蹤中',
    alerts: [
      {
        level: 'warning',
        title: '雌二醇下降，更年期相關症狀',
        detail:
          'E2 由 2024 年 85 pg/mL 降至 32 pg/mL，FSH 上升至 45 mIU/mL，確認進入更年期。主訴潮熱、失眠加重。需討論荷爾蒙替代療法。',
        date: '2026/03/20',
      },
      {
        level: 'warning',
        title: '骨密度 T-score 邊緣值',
        detail:
          'DEXA 檢測 T-score -1.3（骨質減少前期）。結合維生素 D 偏低與更年期雌激素下降，骨質流失風險高。',
        date: '2026/03/20',
      },
      {
        level: 'info',
        title: '腸道菌相改善中',
        detail:
          '腸道菌相多樣性指數由 3.2 提升至 5.8（目標 >7），益生菌補充加上飲食調整有成效。Firmicutes/Bacteroidetes 比值趨近正常。',
        date: '2026/03/20',
      },
    ],
    labResults: [
      { name: 'E2（雌二醇）', current: 32, previous: 55, unit: 'pg/mL', refLow: 30, refHigh: 400, trend: 'down' },
      { name: 'FSH', current: 45, previous: 28, unit: 'mIU/mL', refLow: 0, refHigh: 25, trend: 'up' },
      { name: '25(OH)D', current: 38, previous: 30, unit: 'ng/mL', refLow: 40, refHigh: 60, trend: 'up' },
      { name: '鈣', current: 9.2, previous: 9.0, unit: 'mg/dL', refLow: 8.5, refHigh: 10.5, trend: 'up' },
      { name: 'TSH', current: 2.8, previous: 2.5, unit: 'mIU/L', refLow: 0.4, refHigh: 4.0, trend: 'up' },
      { name: 'hs-CRP', current: 1.5, previous: 2.0, unit: 'mg/L', refLow: 0, refHigh: 1.0, trend: 'down' },
      { name: '空腹血糖', current: 92, previous: 88, unit: 'mg/dL', refLow: 70, refHigh: 100, trend: 'up' },
      { name: 'HbA1c', current: 5.5, previous: 5.4, unit: '%', refLow: 4.0, refHigh: 5.6, trend: 'up' },
      { name: 'Omega-3 Index', current: 6.8, previous: 5.5, unit: '%', refLow: 8, refHigh: 12, trend: 'up' },
      { name: '鐵蛋白', current: 52, previous: 48, unit: 'ng/mL', refLow: 30, refHigh: 300, trend: 'up' },
    ],
    supplements: [
      { name: '維生素 D3 + K2', dosage: '4000 IU + 100μg', frequency: '每日一次', since: '2024/09' },
      { name: '魚油 Omega-3', dosage: '2000 mg', frequency: '每日一次', since: '2024/09' },
      { name: '益生菌（多株複方）', dosage: '300 億 CFU', frequency: '每日一次', since: '2025/01' },
      { name: '鈣 + 鎂', dosage: '600mg + 300mg', frequency: '每日一次', since: '2025/06' },
    ],
    visitHistory: [
      { date: '2026/03/20', type: '回診追蹤', summary: '更年期症狀加重，E2 降至 32、FSH 升至 45。潮熱每日 5-6 次、失眠惡化。討論荷爾蒙替代療法可行性。骨密度 T-score -1.3。' },
      { date: '2025/12/15', type: '回診追蹤', summary: '年度全面檢測含 DEXA。腸道菌相改善顯著。E2 開始下降至 55 pg/mL。維生素 D 30 ng/mL。' },
      { date: '2025/09/10', type: '回診追蹤', summary: '腸道菌相第二次檢測，多樣性指數由 3.2 升至 4.5。消化不良症狀改善。維生素 D 28 ng/mL。' },
      { date: '2025/06/05', type: '回診追蹤', summary: '補充方案半年追蹤。hs-CRP 由 3.0 降至 2.0。開始補充鈣鎂。FSH 開始上升。' },
      { date: '2025/03/01', type: '回診追蹤', summary: '腸道菌相檢測結果解說：多樣性指數 3.2 偏低，開始益生菌與飲食調整。維生素 D 22 ng/mL。' },
      { date: '2024/12/10', type: '回診追蹤', summary: '初次檢測結果回診。開始 D3+K2 與魚油補充。安排腸道菌相分析。' },
      { date: '2024/09/20', type: '回診追蹤', summary: '檢測報告解說。維生素 D 18 ng/mL 不足、E2 85 pg/mL 尚正常但已偏低。hs-CRP 3.0。' },
      { date: '2024/07/01', type: '初次諮詢', summary: '52歲女性，主訴消化不良、腹脹、偶有潮熱。擔心更年期健康。安排全套血液、荷爾蒙、維生素、腸道菌相等檢測。' },
    ],
    aiSummary:
      '李美華女士，52歲，自 2024 年 7 月開始追蹤，至今 8 次就診。目前處於更年期過渡期，E2 持續下降（85→55→32 pg/mL），FSH 上升至 45，更年期症狀（潮熱、失眠）明顯加重。骨密度 T-score -1.3 已達骨質減少前期。積極面是：腸道菌相在益生菌和飲食調整後顯著改善（多樣性 3.2→5.8），消化問題緩解。維生素 D 穩定上升至 38 ng/mL 接近達標。此次回診核心議題：評估荷爾蒙替代療法 (HRT) 的風險與效益，並加強骨質保護方案。',
    aiRecommendations: [
      '🔴 評估荷爾蒙替代療法 (HRT)：建議低劑量經皮雌二醇 + 天然黃體素',
      '🔴 骨密度保護：維生素 D 目標提高至 50 ng/mL、維持鈣鎂補充',
      '🟠 追蹤乳房超音波與子宮內膜厚度（HRT 前基線檢查）',
      '🟡 維持腸道菌相改善方案，3 個月後複檢',
      '🟡 增加負重運動處方，每週 3 次以上',
      '🔵 6 週後回診追蹤 HRT 反應，複驗 E2、FSH',
    ],
  },

  'chen-zhiyuan': {
    name: '陳志遠',
    gender: '男',
    age: 55,
    memberId: 'LH-2024-0023',
    phone: '0955-XXX-XXX',
    visits: 6,
    lastVisit: '2026/03/01',
    nextVisit: '2026/05/01',
    status: '穩定',
    alerts: [
      {
        level: 'info',
        title: 'HbA1c 大幅改善，脫離糖尿病前期',
        detail:
          'HbA1c 由 2024 年 6.4%（糖尿病前期）降至 5.8%（正常高值），空腹血糖由 118 降至 95 mg/dL。飲食與運動介入非常成功。',
        date: '2026/03/01',
      },
      {
        level: 'info',
        title: '血壓穩定控制中',
        detail: '居家血壓平均 128/82 mmHg，較 2024 年 145/92 大幅改善。體重減輕 8kg 後血壓自然下降，可考慮減藥評估。',
        date: '2026/03/01',
      },
    ],
    labResults: [
      { name: 'HbA1c', current: 5.8, previous: 6.0, unit: '%', refLow: 4.0, refHigh: 5.6, trend: 'down' },
      { name: '空腹血糖', current: 95, previous: 102, unit: 'mg/dL', refLow: 70, refHigh: 100, trend: 'down' },
      { name: '空腹胰島素', current: 8.5, previous: 12.0, unit: 'μU/mL', refLow: 2, refHigh: 12, trend: 'down' },
      { name: 'HOMA-IR', current: 2.0, previous: 3.0, unit: '', refLow: 0, refHigh: 2.5, trend: 'down' },
      { name: '總膽固醇', current: 188, previous: 210, unit: 'mg/dL', refLow: 0, refHigh: 200, trend: 'down' },
      { name: 'LDL-C', current: 110, previous: 135, unit: 'mg/dL', refLow: 0, refHigh: 130, trend: 'down' },
      { name: 'HDL-C', current: 52, previous: 42, unit: 'mg/dL', refLow: 40, refHigh: 999, trend: 'up' },
      { name: '三酸甘油酯', current: 130, previous: 185, unit: 'mg/dL', refLow: 0, refHigh: 150, trend: 'down' },
      { name: 'hs-CRP', current: 0.9, previous: 2.8, unit: 'mg/L', refLow: 0, refHigh: 1.0, trend: 'down' },
      { name: '25(OH)D', current: 45, previous: 38, unit: 'ng/mL', refLow: 40, refHigh: 60, trend: 'up' },
      { name: 'ALT', current: 25, previous: 42, unit: 'U/L', refLow: 0, refHigh: 40, trend: 'down' },
      { name: 'GGT', current: 28, previous: 55, unit: 'U/L', refLow: 0, refHigh: 50, trend: 'down' },
    ],
    supplements: [
      { name: '鉻（吡啶甲酸鉻）', dosage: '200 μg', frequency: '每日一次', since: '2024/10' },
      { name: '維生素 D3', dosage: '3000 IU', frequency: '每日一次', since: '2024/10' },
      { name: '魚油 Omega-3', dosage: '2000 mg', frequency: '每日一次', since: '2024/10' },
      { name: '肉桂萃取物', dosage: '500 mg', frequency: '每日一次', since: '2025/03' },
    ],
    visitHistory: [
      { date: '2026/03/01', type: '回診追蹤', summary: 'HbA1c 5.8% 大幅改善！空腹血糖 95、HOMA-IR 2.0。肝指數 ALT 25 正常化。體重從 88kg 降至 80kg。建議可延長回診間隔。' },
      { date: '2025/10/15', type: '回診追蹤', summary: 'HbA1c 6.0% 持續下降。體重減至 82kg。血壓 130/84。脂質代謝全面改善。運動習慣已建立。' },
      { date: '2025/06/20', type: '回診追蹤', summary: '半年追蹤。HbA1c 由 6.4 降至 6.2。體重減 4kg 至 84kg。開始肉桂萃取物輔助。' },
      { date: '2025/03/10', type: '回診追蹤', summary: '飲食調整 2 個月成效初現。空腹血糖 110。體重 86kg（-2kg）。肝指數改善中。' },
      { date: '2024/12/15', type: '回診追蹤', summary: '檢測結果解說。代謝症候群確診：HbA1c 6.4、空腹血糖 118、HOMA-IR 3.8、ALT 42、體重 88kg。制定低碳飲食+運動計劃。' },
      { date: '2024/10/01', type: '初次諮詢', summary: '55歲男性，體檢發現血糖偏高轉介。BMI 28.5、腰圍 95cm。安排代謝症候群完整評估：血糖、胰島素、脂質、肝功能、發炎指標。' },
    ],
    aiSummary:
      '陳志遠先生，55歲，代謝症候群成功逆轉案例。自 2024 年 10 月至今 6 次就診。透過飲食調整（低碳高纖）、規律運動（每週 4 次快走+重訓）與精準營養補充，HbA1c 從 6.4% 降至 5.8%，成功脫離糖尿病前期。體重減輕 8kg（88→80kg），脂質代謝全面正常化，肝指數恢復正常。hs-CRP 降至 0.9 達標。此為預防醫學介入的最佳範例。建議逐步延長回診間隔至 2 個月，持續監測維持成效。',
    aiRecommendations: [
      '✅ HbA1c 與血糖已達標，持續目前飲食與運動方案',
      '🟡 評估是否可與家醫科討論降壓藥減量',
      '🟡 維持目前補充方案不調整',
      '🔵 延長回診間隔至 2 個月',
      '🔵 下次回診加驗空腹胰島素確認 HOMA-IR 持續改善',
    ],
  },

  'zhang-shufen': {
    name: '張淑芬',
    gender: '女',
    age: 42,
    memberId: 'LH-2025-0008',
    phone: '0966-XXX-XXX',
    visits: 4,
    lastVisit: '2026/02/25',
    nextVisit: '2026/04/08',
    status: '追蹤中',
    alerts: [
      {
        level: 'warning',
        title: '皮質醇節律異常',
        detail:
          '唾液皮質醇四點檢測顯示：晨間偏低（8.2 nmol/L，正常 13-24）、夜間偏高（5.5 nmol/L，正常 <3.5）。典型的皮質醇節律扁平化，與長期壓力相關。',
        date: '2026/02/25',
      },
      {
        level: 'warning',
        title: 'DHEA-S 偏低',
        detail:
          'DHEA-S 120 μg/dL（同齡女性理想 180-350），腎上腺功能偏弱。與皮質醇異常一致，支持腎上腺疲勞的判斷。',
        date: '2026/02/25',
      },
      {
        level: 'info',
        title: '睡眠品質指標改善中',
        detail: '褪黑激素代謝物（6-sulfatoxymelatonin）由 12 上升至 18 μg（正常 20-45），補充鎂和改善睡眠衛生有部分成效。',
        date: '2026/02/25',
      },
    ],
    labResults: [
      { name: '晨間皮質醇', current: 8.2, previous: 7.5, unit: 'nmol/L', refLow: 13, refHigh: 24, trend: 'up' },
      { name: '夜間皮質醇', current: 5.5, previous: 6.8, unit: 'nmol/L', refLow: 0, refHigh: 3.5, trend: 'down' },
      { name: 'DHEA-S', current: 120, previous: 105, unit: 'μg/dL', refLow: 180, refHigh: 350, trend: 'up' },
      { name: '25(OH)D', current: 30, previous: 22, unit: 'ng/mL', refLow: 40, refHigh: 60, trend: 'up' },
      { name: '鎂（RBC）', current: 4.8, previous: 4.2, unit: 'mg/dL', refLow: 4.2, refHigh: 6.8, trend: 'up' },
      { name: 'TSH', current: 3.2, previous: 3.5, unit: 'mIU/L', refLow: 0.4, refHigh: 4.0, trend: 'down' },
      { name: '鐵蛋白', current: 38, previous: 32, unit: 'ng/mL', refLow: 30, refHigh: 300, trend: 'up' },
      { name: 'hs-CRP', current: 1.8, previous: 2.2, unit: 'mg/L', refLow: 0, refHigh: 1.0, trend: 'down' },
    ],
    supplements: [
      { name: '甘胺酸鎂', dosage: '400 mg', frequency: '睡前一次', since: '2025/06' },
      { name: '維生素 D3', dosage: '4000 IU', frequency: '每日一次', since: '2025/06' },
      { name: '南非醉茄（Ashwagandha）', dosage: '300 mg KSM-66', frequency: '每日兩次', since: '2025/10' },
      { name: '磷脂絲胺酸', dosage: '100 mg', frequency: '睡前一次', since: '2025/10' },
    ],
    visitHistory: [
      { date: '2026/02/25', type: '回診追蹤', summary: '皮質醇節律有改善但仍異常。晨間皮質醇略升、夜間略降。DHEA-S 仍偏低。睡眠自評由 3/10 提升至 5/10。南非醉茄補充 4 個月有感改善焦慮。' },
      { date: '2025/10/05', type: '回診追蹤', summary: '皮質醇仍異常。睡眠改善緩慢。加入南非醉茄與磷脂絲胺酸。維生素 D 25 ng/mL，持續補充中。' },
      { date: '2025/06/20', type: '回診追蹤', summary: '檢測結果解說。皮質醇節律扁平化確認。DHEA-S 105 偏低。開始壓力管理方案與補充品。' },
      { date: '2025/04/15', type: '初次諮詢', summary: '42歲女性高階主管，主訴嚴重失眠（入睡困難+早醒）、白天極度疲勞但夜間亢奮、體重集中腰腹。安排荷爾蒙、腎上腺、維生素、甲狀腺檢測。' },
    ],
    aiSummary:
      '張淑芬女士，42歲，自 2025 年 4 月開始追蹤，至今 4 次就診。核心問題為腎上腺功能失調（皮質醇節律扁平化 + DHEA-S 偏低），與長期高壓工作環境相關。經 8 個月的介入（鎂、南非醉茄、磷脂絲胺酸、睡眠衛生改善），皮質醇節律有部分恢復，焦慮與睡眠自評改善。但晨間皮質醇仍低、夜間仍偏高，需持續追蹤。維生素 D 穩定上升。下一步考慮加入 DHEA 低劑量補充並強化壓力管理策略。',
    aiRecommendations: [
      '🟠 考慮低劑量 DHEA 補充（5-10mg/日），需監測雄性素指標',
      '🟠 強化睡眠衛生：建議 10pm 後避免藍光、加入睡前冥想',
      '🟡 維持南非醉茄 + 磷脂絲胺酸方案',
      '🟡 評估是否需加入 L-Theanine 100mg 輔助',
      '🔵 建議進行心率變異度（HRV）評估，客觀量化壓力指標',
      '🔵 6 週後複驗唾液皮質醇四點與 DHEA-S',
    ],
  },

  'lin-jianhong': {
    name: '林建宏',
    gender: '男',
    age: 48,
    memberId: 'LH-2024-0010',
    phone: '0977-XXX-XXX',
    visits: 10,
    lastVisit: '2026/03/10',
    nextVisit: '2026/05/10',
    status: '穩定',
    alerts: [
      {
        level: 'info',
        title: '同半胱胺酸已達標',
        detail:
          'Homocysteine 由 2024 年 15.8 降至 8.2 μmol/L（理想 <10），活性 B 群補充非常成功。心血管風險因子已正常化。',
        date: '2026/03/10',
      },
      {
        level: 'info',
        title: '全面指標穩定，進入維持期',
        detail:
          '維生素 D 48 ng/mL、Omega-3 Index 8.5%、hs-CRP 0.6 — 三大核心指標均達標。可延長回診間隔。',
        date: '2026/03/10',
      },
    ],
    labResults: [
      { name: 'Homocysteine', current: 8.2, previous: 9.5, unit: 'μmol/L', refLow: 0, refHigh: 10, trend: 'down' },
      { name: '25(OH)D', current: 48, previous: 42, unit: 'ng/mL', refLow: 40, refHigh: 60, trend: 'up' },
      { name: 'Omega-3 Index', current: 8.5, previous: 7.2, unit: '%', refLow: 8, refHigh: 12, trend: 'up' },
      { name: 'hs-CRP', current: 0.6, previous: 0.8, unit: 'mg/L', refLow: 0, refHigh: 1.0, trend: 'down' },
      { name: 'TSH', current: 1.8, previous: 2.0, unit: 'mIU/L', refLow: 0.4, refHigh: 4.0, trend: 'down' },
      { name: '空腹血糖', current: 85, previous: 88, unit: 'mg/dL', refLow: 70, refHigh: 100, trend: 'down' },
      { name: 'HbA1c', current: 5.1, previous: 5.2, unit: '%', refLow: 4.0, refHigh: 5.6, trend: 'down' },
      { name: '總膽固醇', current: 178, previous: 185, unit: 'mg/dL', refLow: 0, refHigh: 200, trend: 'down' },
      { name: 'LDL-C', current: 98, previous: 105, unit: 'mg/dL', refLow: 0, refHigh: 130, trend: 'down' },
      { name: 'HDL-C', current: 58, previous: 55, unit: 'mg/dL', refLow: 40, refHigh: 999, trend: 'up' },
    ],
    supplements: [
      { name: '活性 B 群', dosage: '甲基葉酸 800μg + B12 1000μg', frequency: '每日一次', since: '2024/08' },
      { name: '維生素 D3 + K2', dosage: '3000IU + 100μg', frequency: '每日一次', since: '2024/08' },
      { name: '魚油 Omega-3', dosage: '2000 mg', frequency: '每日一次', since: '2024/08' },
      { name: 'CoQ10', dosage: '200 mg', frequency: '每日一次', since: '2025/02' },
    ],
    visitHistory: [
      { date: '2026/03/10', type: '回診追蹤', summary: '全面達標！Homocysteine 8.2、維生素 D 48、Omega-3 Index 8.5%、hs-CRP 0.6。所有核心指標正常。建議延長回診至 2 個月。' },
      { date: '2025/12/05', type: '回診追蹤', summary: 'Homocysteine 9.5 接近達標。Omega-3 Index 7.2% 持續上升。加入 CoQ10 後自覺精力提升。' },
      { date: '2025/09/01', type: '回診追蹤', summary: '穩定進步中。各項指標持續改善。維生素 D 38 ng/mL。' },
      { date: '2025/06/10', type: '回診追蹤', summary: 'Homocysteine 由 15.8 降至 12.0，B 群效果顯著。開始 CoQ10 補充。' },
      { date: '2025/03/05', type: '回診追蹤', summary: 'B 群補充 4 個月。Homocysteine 13.5。維生素 D 30 ng/mL。' },
      { date: '2024/12/01', type: '回診追蹤', summary: '初次補充方案啟動 4 個月。Homocysteine 由 15.8 降至 14.2。' },
      { date: '2024/10/15', type: '回診追蹤', summary: '檢測結果解說。Homocysteine 15.8 偏高、維生素 D 20 不足。開始活性 B 群 + D3 + 魚油。' },
      { date: '2024/08/01', type: '初次諮詢', summary: '48歲男性，家族有心血管疾病史（父親 60 歲心肌梗塞）。主動求診評估心血管風險。安排全套心血管風險因子檢測。' },
    ],
    aiSummary:
      '林建宏先生，48歲，自 2024 年 8 月開始追蹤，至今 10 次就診。因家族心血管病史主動求診，是高度配合的模範病患。經 18 個月精準營養介入，所有核心心血管風險指標均已正常化：Homocysteine 15.8→8.2、維生素 D 20→48、Omega-3 Index 4.0→8.5%、hs-CRP 2.5→0.6。已進入維持期，建議延長回診間隔並持續目前補充方案。',
    aiRecommendations: [
      '✅ 所有核心指標達標，恭喜！',
      '✅ 維持目前補充方案不調整',
      '🔵 延長回診間隔至 2 個月',
      '🔵 年度追蹤加驗：頸動脈超音波、冠狀動脈鈣化指數（CAC score）',
    ],
  },

  'zhou-fangru': {
    name: '周芳如',
    gender: '女',
    age: 35,
    memberId: 'LH-2025-0020',
    phone: '0988-XXX-XXX',
    visits: 5,
    lastVisit: '2026/03/18',
    nextVisit: '2026/04/12',
    status: '追蹤中',
    alerts: [
      {
        level: 'warning',
        title: '食物敏感：乳製品與麩質 IgG 偏高',
        detail:
          '食物過敏原 IgG 檢測：牛奶 Class 4（>50 μg/mL）、小麥麩質 Class 3（25-50 μg/mL）、雞蛋白 Class 2（10-25 μg/mL）。與長期腸胃不適、皮膚問題高度相關。',
        date: '2026/03/18',
      },
      {
        level: 'warning',
        title: '腸道通透性異常（Leaky Gut）',
        detail:
          'Zonulin 85 ng/mL（正常 <30），腸道屏障功能受損。需配合排除飲食與腸道修復方案。',
        date: '2026/03/18',
      },
      {
        level: 'info',
        title: '甲狀腺抗體陽性',
        detail:
          'Anti-TPO 62 IU/mL（正常 <35），TSH 3.8 仍在正常範圍但偏高。需定期追蹤，腸道修復可能有助改善自體免疫。',
        date: '2026/03/18',
      },
    ],
    labResults: [
      { name: 'Zonulin', current: 85, previous: 92, unit: 'ng/mL', refLow: 0, refHigh: 30, trend: 'down' },
      { name: 'Anti-TPO', current: 62, previous: 68, unit: 'IU/mL', refLow: 0, refHigh: 35, trend: 'down' },
      { name: 'TSH', current: 3.8, previous: 3.5, unit: 'mIU/L', refLow: 0.4, refHigh: 4.0, trend: 'up' },
      { name: '25(OH)D', current: 28, previous: 20, unit: 'ng/mL', refLow: 40, refHigh: 60, trend: 'up' },
      { name: 'hs-CRP', current: 2.5, previous: 3.8, unit: 'mg/L', refLow: 0, refHigh: 1.0, trend: 'down' },
      { name: '鐵蛋白', current: 22, previous: 18, unit: 'ng/mL', refLow: 30, refHigh: 300, trend: 'up' },
      { name: '鋅', current: 68, previous: 62, unit: 'μg/dL', refLow: 70, refHigh: 120, trend: 'up' },
      { name: '維生素 B12', current: 350, previous: 280, unit: 'pg/mL', refLow: 200, refHigh: 900, trend: 'up' },
      { name: 'IgG 牛奶', current: 52, previous: 58, unit: 'μg/mL', refLow: 0, refHigh: 10, trend: 'down' },
      { name: 'IgG 小麥', current: 38, previous: 45, unit: 'μg/mL', refLow: 0, refHigh: 10, trend: 'down' },
    ],
    supplements: [
      { name: 'L-Glutamine', dosage: '5g', frequency: '每日兩次（空腹）', since: '2025/10' },
      { name: '維生素 D3', dosage: '5000 IU', frequency: '每日一次', since: '2025/07' },
      { name: '鋅（吡啶甲酸鋅）', dosage: '30 mg', frequency: '每日一次', since: '2025/10' },
      { name: '益生菌（特定菌株）', dosage: '500 億 CFU', frequency: '每日一次', since: '2025/10' },
      { name: '消化酵素', dosage: '1 顆', frequency: '每餐隨餐', since: '2025/10' },
    ],
    visitHistory: [
      { date: '2026/03/18', type: '回診追蹤', summary: '食物敏感 IgG 結果出爐：牛奶 Class 4、小麥 Class 3、蛋白 Class 2。Zonulin 由 92 降至 85，腸道修復方案有部分成效。hs-CRP 由 3.8 降至 2.5。Anti-TPO 略降至 62。' },
      { date: '2025/12/20', type: '回診追蹤', summary: '腸道修復方案 2 個月追蹤。消化症狀改善約 40%。安排食物過敏原 IgG 檢測。Zonulin 92 仍偏高。' },
      { date: '2025/10/01', type: '回診追蹤', summary: '腸道通透性檢測結果：Zonulin 95 嚴重偏高。Anti-TPO 68 陽性。開始腸道修復方案（L-Glutamine + 益生菌 + 鋅 + 消化酵素）。' },
      { date: '2025/07/15', type: '回診追蹤', summary: '初次檢測結果解說。維生素 D 20 嚴重不足、鐵蛋白 18 偏低、鋅 62 不足。hs-CRP 3.8。安排腸道通透性與甲狀腺抗體檢測。' },
      { date: '2025/05/10', type: '初次諮詢', summary: '35歲女性，主訴反覆腹脹腹瀉、皮膚過敏（濕疹反覆發作）、慢性疲勞。西醫檢查「正常」但症狀持續。安排全套血液、維生素、礦物質、甲狀腺含抗體檢測。' },
    ],
    aiSummary:
      '周芳如女士，35歲，自 2025 年 5 月開始追蹤，至今 5 次就診。核心問題為腸道通透性異常（Leaky Gut）合併多種食物敏感（乳製品、麩質），並已觸發甲狀腺自體免疫反應（Anti-TPO 陽性）。經 5 個月的腸道修復方案（L-Glutamine、特定菌株益生菌、鋅、消化酵素），Zonulin 由 95 降至 85、hs-CRP 由 3.8 降至 2.5，方向正確但仍需持續。食物敏感 IgG 確認後，需開始 3 個月排除飲食計劃。鐵蛋白與鋅偏低可能與腸道吸收障礙相關。',
    aiRecommendations: [
      '🔴 立即開始排除飲食：完全避免乳製品與含麩質食物至少 3 個月',
      '🔴 減少雞蛋攝取頻率（由每日→每週 2-3 次）',
      '🟠 持續腸道修復方案，L-Glutamine 維持 10g/日',
      '🟠 追蹤鐵蛋白：考慮液態鐵劑 + 維生素 C 促進吸收',
      '🟡 維生素 D 維持 5000IU/日，目標 40 ng/mL 以上',
      '🟡 3 個月後複驗 Zonulin、食物 IgG、Anti-TPO',
      '🔵 建議記錄飲食日記，追蹤排除飲食後症狀變化',
    ],
  },
};
