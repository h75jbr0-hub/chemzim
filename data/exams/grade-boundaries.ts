// ===== Official Grade Boundaries Engine =====
// Covers Cambridge (CIE 0620 IGCSE, 9701 AS/A Level)
// and Pearson Edexcel (IAL Chemistry Units 1-6, IGCSE 4CH1)

export interface GradeThreshold {
  grade: string;
  minPercent: number;
  label: string;
  color: string;
  badgeBg: string;
  description: string;
}

export interface ExamPaperProfile {
  id: string;
  title: string;
  board: 'cambridge' | 'edexcel';
  curriculumTrack: string; // 'cie-igcse' | 'edexcel-as' | 'edexcel-a2'
  paperCode: string;
  paperName: string;
  paperType?: 'mcq' | 'structured' | 'practical';
  defaultQuestionCount: number;
  durationMinutes: number;
  totalMarks: number;
  instructions: string[];
  gradeScale: 'letters' | 'numbers'; // 'letters' for A*-U, 'numbers' for 9-1
  thresholds: GradeThreshold[];
}

export const EXAM_PROFILES: Record<string, ExamPaperProfile> = {
  // 1. Cambridge IGCSE Chemistry 0620 - Paper 2 (Extended MCQ - Comprehensive)
  'cie-0620-p2': {
    id: 'cie-0620-p2',
    title: 'Cambridge IGCSE Chemistry (0620)',
    board: 'cambridge',
    curriculumTrack: 'cie-igcse',
    paperCode: '0620/22',
    paperName: 'Paper 2 Multiple Choice (Extended Mock)',
    paperType: 'mcq',
    defaultQuestionCount: 40,
    durationMinutes: 45,
    totalMarks: 40,
    instructions: [
      'There are forty questions on this paper. Answer all questions.',
      'For each question there are four possible answers A, B, C and D.',
      'Choose the one you consider correct and select it on the screen.',
      'Each correct answer will score one mark. A mark will not be deducted for a wrong answer.',
      'You may use a calculator and the interactive Periodic Table provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 85, label: 'Grade A* (Exceptional)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of core & extended chemistry concepts.' },
      { grade: 'A',  minPercent: 72, label: 'Grade A (Excellent)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Excellent command of concepts and quantitative relationships.' },
      { grade: 'B',  minPercent: 60, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong knowledge of definitions, reactions and trends.' },
      { grade: 'C',  minPercent: 50, label: 'Grade C (Good / Standard Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid understanding of fundamental chemistry principles.' },
      { grade: 'D',  minPercent: 40, label: 'Grade D (Satisfactory)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Satisfactory basic knowledge with some conceptual gaps.' },
      { grade: 'E',  minPercent: 30, label: 'Grade E (Sufficient)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum pass standard. Needs intensive review.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below minimum passing threshold.' },
    ]
  },

  // 1a. Cambridge IGCSE Chemistry 0620 - June 2025 Paper 23
  'cie-0620-p2-june2025': {
    id: 'cie-0620-p2-june2025',
    title: 'Cambridge IGCSE Chemistry (June 2025)',
    board: 'cambridge',
    curriculumTrack: 'cie-igcse',
    paperCode: '0620/23',
    paperName: 'Paper 2 Multiple Choice Extended (June 2025 Series)',
    paperType: 'mcq',
    defaultQuestionCount: 40,
    durationMinutes: 45,
    totalMarks: 40,
    instructions: [
      'Official Cambridge IGCSE June 2025 Series Simulation (Paper 2 Extended).',
      'There are forty questions on this paper. Answer all questions.',
      'Questions cover the latest syllabus updates with authentic 2025 past exam items.',
      'Standard Grade Boundaries: A* (34/40 ~ 85%), A (29/40 ~ 72%), B (24/40 ~ 60%), C (20/40 ~ 50%).'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 85, label: 'Grade A* (Top Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of June 2025 examination questions.' },
      { grade: 'A',  minPercent: 72, label: 'Grade A (Excellent)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Excellent command of 2025 syllabus and quantitative calculations.' },
      { grade: 'B',  minPercent: 60, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong knowledge of chemical trends and apparatus.' },
      { grade: 'C',  minPercent: 50, label: 'Grade C (Standard Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid understanding of core chemistry topics.' },
      { grade: 'D',  minPercent: 40, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Satisfactory basic knowledge.' },
      { grade: 'E',  minPercent: 30, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing threshold.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below passing threshold.' },
    ]
  },

  // 1b. Cambridge IGCSE Chemistry 0620 - June 2024 Paper 22
  'cie-0620-p2-june2024': {
    id: 'cie-0620-p2-june2024',
    title: 'Cambridge IGCSE Chemistry (June 2024)',
    board: 'cambridge',
    curriculumTrack: 'cie-igcse',
    paperCode: '0620/22',
    paperName: 'Paper 2 Multiple Choice Extended (June 2024 Series)',
    paperType: 'mcq',
    defaultQuestionCount: 40,
    durationMinutes: 45,
    totalMarks: 40,
    instructions: [
      'Official Cambridge IGCSE June 2024 Series Simulation (Paper 2 Extended).',
      'Forty multiple choice questions selected from the authentic June 2024 examinations.',
      'Manage your time strictly: 45 minutes for 40 questions (approx. 1 minute per question).'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 84, label: 'Grade A* (Top Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Exceptional performance matching June 2024 official grade thresholds.' },
      { grade: 'A',  minPercent: 71, label: 'Grade A (Excellent)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'High precision across inorganic, physical and organic chemistry.' },
      { grade: 'B',  minPercent: 59, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound mastery of stoichiometry and electrolysis.' },
      { grade: 'C',  minPercent: 49, label: 'Grade C (Standard Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Standard benchmark pass.' },
      { grade: 'D',  minPercent: 39, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass.' },
      { grade: 'E',  minPercent: 29, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below passing threshold.' },
    ]
  },

  // 1c. Cambridge IGCSE Chemistry 0620 - June 2023 Paper 21
  'cie-0620-p2-june2023': {
    id: 'cie-0620-p2-june2023',
    title: 'Cambridge IGCSE Chemistry (June 2023)',
    board: 'cambridge',
    curriculumTrack: 'cie-igcse',
    paperCode: '0620/21',
    paperName: 'Paper 2 Multiple Choice Extended (June 2023 Series)',
    paperType: 'mcq',
    defaultQuestionCount: 40,
    durationMinutes: 45,
    totalMarks: 40,
    instructions: [
      'Official Cambridge IGCSE June 2023 Series Simulation (First exam of the updated 2023 syllabus).',
      'Includes questions on new syllabus requirements (e.g. enhanced environmental chemistry and separation techniques).',
      'Calculators and interactive Periodic Table permitted.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 83, label: 'Grade A* (Top Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding command of the 2023 syllabus revision.' },
      { grade: 'A',  minPercent: 70, label: 'Grade A (Excellent)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Excellent analytical and calculation performance.' },
      { grade: 'B',  minPercent: 58, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong understanding of reaction rates, equilibrium, and polymers.' },
      { grade: 'C',  minPercent: 48, label: 'Grade C (Standard Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid pass across all 12 syllabus sections.' },
      { grade: 'D',  minPercent: 38, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic pass standard.' },
      { grade: 'E',  minPercent: 28, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable threshold.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below passing threshold.' },
    ]
  },

  // 2. Cambridge IGCSE Chemistry 0620 - Paper 4 (Theory / Structured - Comprehensive)
  'cie-0620-p4': {
    id: 'cie-0620-p4',
    title: 'Cambridge IGCSE Chemistry (0620)',
    board: 'cambridge',
    curriculumTrack: 'cie-igcse',
    paperCode: '0620/42',
    paperName: 'Paper 4 Theory & Structured Written Exam',
    paperType: 'structured',
    defaultQuestionCount: 15,
    durationMinutes: 75,
    totalMarks: 50,
    instructions: [
      'Authentic Written Paper: Write your answers directly in the provided response areas.',
      'Your responses are automatically evaluated against the official Cambridge mark scheme keywords and scientific terminology.',
      'Show all calculation steps and include correct state symbols and units where appropriate.',
      'Detailed mark allocation, examiner tips, and official model answers will be provided in your final performance report.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 82, label: 'Grade A* (Top Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Flawless recall, precise scientific keywords, and high mathematical accuracy.' },
      { grade: 'A',  minPercent: 70, label: 'Grade A (Excellent)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Comprehensive coverage of core chemical mechanisms and explanations.' },
      { grade: 'B',  minPercent: 58, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong conceptual understanding with minor terminology omissions.' },
      { grade: 'C',  minPercent: 48, label: 'Grade C (Standard Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Satisfactory mastery of fundamental structured questions.' },
      { grade: 'D',  minPercent: 38, label: 'Grade D (Basic)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Marginal pass with several key definitions omitted.' },
      { grade: 'E',  minPercent: 28, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable standard for Paper 4.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below passing threshold.' },
    ]
  },

  // 2a. Cambridge IGCSE Chemistry 0620 - Paper 4 (June 2025 Series)
  'cie-0620-p4-june2025': {
    id: 'cie-0620-p4-june2025',
    title: 'Cambridge IGCSE Chemistry (June 2025)',
    board: 'cambridge',
    curriculumTrack: 'cie-igcse',
    paperCode: '0620/41',
    paperName: 'Paper 4 Theory Extended (June 2025 Series)',
    paperType: 'structured',
    defaultQuestionCount: 10,
    durationMinutes: 75,
    totalMarks: 40,
    instructions: [
      'Official Cambridge IGCSE June 2025 Written Theory Paper.',
      'Answer structured questions on chemical energetics, equilibrium, stoichiometry calculations, and organic synthesis.',
      'Show full numerical working and include units.',
      'Automatic grading against official Cambridge June 2025 mark scheme keywords.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 82, label: 'Grade A* (Top Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding recall and rigorous calculation accuracy.' },
      { grade: 'A',  minPercent: 70, label: 'Grade A (Excellent)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'High competence across all structured syllabus sections.' },
      { grade: 'B',  minPercent: 58, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Good conceptual and mathematical command.' },
      { grade: 'C',  minPercent: 48, label: 'Grade C (Standard Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Standard pass benchmark.' },
      { grade: 'D',  minPercent: 38, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass.' },
      { grade: 'E',  minPercent: 28, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable score.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below passing threshold.' },
    ]
  },

  // 3. Cambridge IGCSE Chemistry 0620 - Paper 6 (Alternative to Practical - Comprehensive)
  'cie-0620-p6': {
    id: 'cie-0620-p6',
    title: 'Cambridge IGCSE Chemistry (0620)',
    board: 'cambridge',
    curriculumTrack: 'cie-igcse',
    paperCode: '0620/62',
    paperName: 'Paper 6 Alternative to Practical Written Paper',
    paperType: 'practical',
    defaultQuestionCount: 15,
    durationMinutes: 60,
    totalMarks: 40,
    instructions: [
      'Laboratory & Experimental Investigation Paper.',
      'Answer written questions on apparatus readings, qualitative tests (cations/anions/gases), and experimental planning.',
      'State specific laboratory apparatus, controlled variables, and observations with exact precipitate colors.',
      'Evaluated using official Cambridge Paper 6 mark schemes and investigation criteria.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 84, label: 'Grade A*', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Flawless qualitative analysis and experimental design.' },
      { grade: 'A',  minPercent: 72, label: 'Grade A', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Precise apparatus reading and rigorous control of variables.' },
      { grade: 'B',  minPercent: 60, label: 'Grade B', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound experimental logic and correct reagent identification.' },
      { grade: 'C',  minPercent: 50, label: 'Grade C', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Standard pass on laboratory techniques.' },
      { grade: 'D',  minPercent: 40, label: 'Grade D', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass.' },
      { grade: 'E',  minPercent: 30, label: 'Grade E', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Ungraded.' },
    ]
  },

  // 3a. Cambridge IGCSE Chemistry 0620 - Paper 6 (June 2025 Series)
  'cie-0620-p6-june2025': {
    id: 'cie-0620-p6-june2025',
    title: 'Cambridge IGCSE Chemistry (June 2025)',
    board: 'cambridge',
    curriculumTrack: 'cie-igcse',
    paperCode: '0620/61',
    paperName: 'Paper 6 Alternative to Practical (June 2025 Series)',
    paperType: 'practical',
    defaultQuestionCount: 10,
    durationMinutes: 60,
    totalMarks: 40,
    instructions: [
      'Official Cambridge IGCSE June 2025 Laboratory Skills Paper.',
      'Covers flame tests, cation/anion precipitation, rate investigation graphs, and 6-mark experimental planning.',
      'Evaluated against official Cambridge June 2025 practical mark schemes.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 84, label: 'Grade A*', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding practical technique and experimental logic.' },
      { grade: 'A',  minPercent: 72, label: 'Grade A', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Strong understanding of lab tests and apparatus measurements.' },
      { grade: 'B',  minPercent: 60, label: 'Grade B', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Good command of variables and observations.' },
      { grade: 'C',  minPercent: 50, label: 'Grade C', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Standard benchmark pass.' },
      { grade: 'D',  minPercent: 40, label: 'Grade D', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass.' },
      { grade: 'E',  minPercent: 30, label: 'Grade E', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Ungraded.' },
    ]
  },

  // 2. Pearson Edexcel IAL Chemistry Unit 1 - Section A (MCQs)
  'edexcel-ial-u1': {
    id: 'edexcel-ial-u1',
    title: 'Pearson Edexcel IAL Chemistry (AS)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH11/01',
    paperName: 'Unit 1: Structure, Bonding and Introduction to Organic Chemistry',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'This examination simulates Section A of Pearson Edexcel WCH11/01.',
      'Answer all questions. Select one option (A, B, C or D) for each question.',
      'Each question carries 1 mark. No negative marking is applied.',
      'Refer to the official Edexcel Periodic Table & Data Formulae provided on the toolbar.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A',  minPercent: 75, label: 'Grade A (Top AS Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'High UMS standard (80%+ UMS equivalent for AS).' },
      { grade: 'B',  minPercent: 65, label: 'Grade B (Very Good)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Strong command of energetics, bonding and organic mechanisms.' },
      { grade: 'C',  minPercent: 55, label: 'Grade C (Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Competent application of chemistry principles.' },
      { grade: 'D',  minPercent: 45, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for Unit 1.' },
      { grade: 'E',  minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable score to achieve AS qualification credit.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Insufficient score for certification.' },
    ]
  },

  // 3. Pearson Edexcel IAL Chemistry Unit 2 - Section A (MCQs)
  'edexcel-ial-u2': {
    id: 'edexcel-ial-u2',
    title: 'Pearson Edexcel IAL Chemistry (AS)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH12/01',
    paperName: 'Unit 2: Energetics, Group Chemistry, Halogenoalkanes and Alcohols',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Simulates Section A (Multiple Choice) for Pearson Edexcel Unit 2.',
      'Answer all questions. Select one response for each question.',
      'Each question carries 1 mark. Manage your time efficiently.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A',  minPercent: 75, label: 'Grade A', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Top tier AS performance.' },
      { grade: 'B',  minPercent: 65, label: 'Grade B', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Very good performance across redox & group chemistry.' },
      { grade: 'C',  minPercent: 55, label: 'Grade C', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound foundational knowledge.' },
      { grade: 'D',  minPercent: 45, label: 'Grade D', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Satisfactory grasp of main trends.' },
      { grade: 'E',  minPercent: 35, label: 'Grade E', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Unclassified performance.' },
    ]
  },

  // 4. Pearson Edexcel IAL Chemistry Unit 3 - Practical Skills in Chemistry I
  'edexcel-ial-u3': {
    id: 'edexcel-ial-u3',
    title: 'Pearson Edexcel IAL Chemistry (AS Practical)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH13/01',
    paperName: 'Unit 3: Practical Skills in Chemistry I',
    paperType: 'practical',
    defaultQuestionCount: 15,
    durationMinutes: 80,
    totalMarks: 50,
    instructions: [
      'Written practical examination assessing Core Practicals 1 to 8.',
      'Answer all questions. Show working in all mathematical calculations with units.',
      'Responses are evaluated against official Pearson Edexcel practical mark scheme keywords and procedures.',
      'Refer to the Periodic Table and Data Formulae provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A',  minPercent: 70, label: 'Grade A', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding laboratory technique, precise observations, and accurate error analysis.' },
      { grade: 'B',  minPercent: 60, label: 'Grade B', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Strong experimental reasoning and correct apparatus identification.' },
      { grade: 'C',  minPercent: 52, label: 'Grade C', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound understanding of standard laboratory procedures.' },
      { grade: 'D',  minPercent: 44, label: 'Grade D', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for AS Practical Skills.' },
      { grade: 'E',  minPercent: 36, label: 'Grade E', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Ungraded.' },
    ]
  },

  // 5. Pearson Edexcel IAL Chemistry Unit 4 & 5 (A2)
  'edexcel-ial-a2': {
    id: 'edexcel-ial-a2',
    title: 'Pearson Edexcel IAL Chemistry (A2 Level)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH14/01',
    paperName: 'Unit 4 & 5: Kinetics, Equilibria and Advanced Organic Chemistry',
    defaultQuestionCount: 25,
    durationMinutes: 40,
    totalMarks: 25,
    instructions: [
      'Advanced A2 Mock Exam covering Units 4 and 5.',
      'Tests advanced concepts including Arrhenius kinetics, buffer systems, and transition metals.',
      'A* grade is achievable on full A2 qualification with 90%+ UMS.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 86, label: 'Grade A* (Top A2 Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Mastery of advanced A2 mathematical and mechanistic chemistry.' },
      { grade: 'A',  minPercent: 74, label: 'Grade A (Excellent)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'High-level synthesis and mathematical accuracy.' },
      { grade: 'B',  minPercent: 62, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Good understanding of thermodynamic and kinetic models.' },
      { grade: 'C',  minPercent: 52, label: 'Grade C (Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid core A2 pass.' },
      { grade: 'D',  minPercent: 42, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Marginal pass.' },
      { grade: 'E',  minPercent: 32, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable standard for A2.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below grading standard.' },
    ]
  },

  // 6. Pearson Edexcel IAL Chemistry Unit 6 - Practical Skills in Chemistry II
  'edexcel-ial-u6': {
    id: 'edexcel-ial-u6',
    title: 'Pearson Edexcel IAL Chemistry (A2 Practical)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH16/01',
    paperName: 'Unit 6: Practical Skills in Chemistry II',
    paperType: 'practical',
    defaultQuestionCount: 15,
    durationMinutes: 80,
    totalMarks: 50,
    instructions: [
      'Written practical examination assessing A2 Core Practicals 9 to 16.',
      'Answer all questions. Show working in all mathematical calculations with units.',
      'Responses are evaluated against official Pearson Edexcel A2 practical mark scheme keywords and procedures.',
      'Refer to the Periodic Table and Data Formulae provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 82, label: 'Grade A* (Exceptional A2 Practical)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of advanced organic synthesis, kinetics, and transition metal analysis.' },
      { grade: 'A',  minPercent: 70, label: 'Grade A (Top A2 Tier)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Comprehensive experimental reasoning and quantitative precision.' },
      { grade: 'B',  minPercent: 60, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong understanding of recrystallisation, redox titrations, and spectroscopy.' },
      { grade: 'C',  minPercent: 50, label: 'Grade C (Standard Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid core knowledge of standard laboratory techniques.' },
      { grade: 'D',  minPercent: 42, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for A2 Practical Skills.' },
      { grade: 'E',  minPercent: 34, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Ungraded.' },
    ]
  },

  // 5. Pearson Edexcel International GCSE (4CH1) - 9 to 1 grading
  'edexcel-igcse-4ch1': {
    id: 'edexcel-igcse-4ch1',
    title: 'Pearson Edexcel International GCSE (4CH1)',
    board: 'edexcel',
    curriculumTrack: 'cie-igcse',
    paperCode: '4CH1/1C',
    paperName: 'Chemistry Paper 1C & 2C Comprehensive Mock',
    defaultQuestionCount: 30,
    durationMinutes: 40,
    totalMarks: 30,
    instructions: [
      'Graded using the official Pearson 9–1 scale.',
      'Grade 9 and 8 represent A* standard, Grade 7 is A, Grade 4 is standard pass (C).',
      'Answer all questions and observe the strict time limit.'
    ],
    gradeScale: 'numbers',
    thresholds: [
      { grade: '9', minPercent: 88, label: 'Grade 9 (Highest Performance)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Exceptional performance, beyond standard A*.' },
      { grade: '8', minPercent: 78, label: 'Grade 8 (High A*)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Equal to solid A* performance.' },
      { grade: '7', minPercent: 68, label: 'Grade 7 (Grade A)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong command of syllabus, equivalent to Grade A.' },
      { grade: '6', minPercent: 58, label: 'Grade 6 (High Grade B)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Good performance across quantitative and qualitative chemistry.' },
      { grade: '5', minPercent: 48, label: 'Grade 5 (Strong Pass / High C)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Recognised as a strong pass.' },
      { grade: '4', minPercent: 40, label: 'Grade 4 (Standard Pass / Grade C)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Standard benchmark pass mark.' },
      { grade: '3', minPercent: 30, label: 'Grade 3 (Grade D equivalent)', color: '#eab308', badgeBg: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30', description: 'Below standard pass.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Did not meet minimum threshold.' },
    ]
  },

  // ===== Pearson Edexcel IAL June 2026 Series Profiles =====
  // 6. Unit 1 June 2026 (WCH11/01)
  'edexcel-ial-u1-june2026': {
    id: 'edexcel-ial-u1-june2026',
    title: 'Pearson Edexcel IAL Chemistry (June 2026)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH11/01',
    paperName: 'Unit 1: Structure, Bonding and Introduction to Organic Chemistry (June 2026)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL June 2026 Series Simulation (WCH11/01 Section A).',
      'Answer all questions. Select one option (A, B, C or D) for each question.',
      'Each question carries 1 mark. No negative marking is applied.',
      'Refer to the Periodic Table and formula data sheets provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 75, label: 'Grade A (Top AS Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'High UMS standard (80%+ UMS equivalent for AS).' },
      { grade: 'B', minPercent: 65, label: 'Grade B (Very Good)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Strong command of energetics, bonding, and organic mechanisms.' },
      { grade: 'C', minPercent: 55, label: 'Grade C (Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Competent application of chemistry principles.' },
      { grade: 'D', minPercent: 45, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for Unit 1.' },
      { grade: 'E', minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable score to achieve AS qualification credit.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Insufficient score for certification.' },
    ]
  },

  // 7. Unit 2 June 2026 (WCH12/01)
  'edexcel-ial-u2-june2026': {
    id: 'edexcel-ial-u2-june2026',
    title: 'Pearson Edexcel IAL Chemistry (June 2026)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH12/01',
    paperName: 'Unit 2: Energetics, Group Chemistry, Halogenoalkanes and Alcohols (June 2026)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL June 2026 Series Simulation (WCH12/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Each question carries 1 mark. Manage your time efficiently.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 75, label: 'Grade A', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Top tier AS performance.' },
      { grade: 'B', minPercent: 65, label: 'Grade B', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Very good performance across redox, kinetics and group chemistry.' },
      { grade: 'C', minPercent: 55, label: 'Grade C', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound foundational knowledge.' },
      { grade: 'D', minPercent: 45, label: 'Grade D', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Satisfactory grasp of main trends.' },
      { grade: 'E', minPercent: 35, label: 'Grade E', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Unclassified performance.' },
    ]
  },

  // 8. Unit 3 June 2026 (WCH13/01 Practical I)
  'edexcel-ial-u3-june2026': {
    id: 'edexcel-ial-u3-june2026',
    title: 'Pearson Edexcel IAL Chemistry (June 2026 Practical I)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH13/01',
    paperName: 'Unit 3: Practical Skills in Chemistry I (June 2026 Series)',
    paperType: 'practical',
    defaultQuestionCount: 15,
    durationMinutes: 80,
    totalMarks: 50,
    instructions: [
      'Official Pearson Edexcel IAL June 2026 Written Practical Paper (Core Practicals 1 to 8).',
      'Answer all questions. Show working in all mathematical calculations with units.',
      'Responses are evaluated against official Pearson Edexcel practical mark scheme keywords and procedures.',
      'Refer to the Periodic Table and Data Formulae provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 70, label: 'Grade A', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding laboratory technique, precise observations, and accurate error analysis.' },
      { grade: 'B', minPercent: 60, label: 'Grade B', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Strong experimental reasoning and correct apparatus identification.' },
      { grade: 'C', minPercent: 52, label: 'Grade C', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound understanding of standard laboratory procedures.' },
      { grade: 'D', minPercent: 44, label: 'Grade D', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for AS Practical Skills.' },
      { grade: 'E', minPercent: 36, label: 'Grade E', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Ungraded.' },
    ]
  },

  // 9. Unit 4 June 2026 (WCH14/01 A2)
  'edexcel-ial-u4-june2026': {
    id: 'edexcel-ial-u4-june2026',
    title: 'Pearson Edexcel IAL Chemistry (June 2026 A2)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH14/01',
    paperName: 'Unit 4: Rates, Equilibria and Further Organic Chemistry (June 2026)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL June 2026 Series Simulation (WCH14/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Tests advanced A2 kinetics, entropy, equilibria, and organic mechanisms.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 86, label: 'Grade A* (Top A2 Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of advanced A2 mathematical rates, equilibria, and carbonyl chemistry.' },
      { grade: 'A',  minPercent: 74, label: 'Grade A (Excellent)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'High-level synthesis and mathematical accuracy.' },
      { grade: 'B',  minPercent: 62, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Good understanding of thermodynamic and kinetic models.' },
      { grade: 'C',  minPercent: 52, label: 'Grade C (Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid core A2 pass.' },
      { grade: 'D',  minPercent: 42, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Marginal pass.' },
      { grade: 'E',  minPercent: 32, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable standard for A2.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below grading standard.' },
    ]
  },

  // 10. Unit 5 June 2026 (WCH15/01 A2)
  'edexcel-ial-u5-june2026': {
    id: 'edexcel-ial-u5-june2026',
    title: 'Pearson Edexcel IAL Chemistry (June 2026 A2)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH15/01',
    paperName: 'Unit 5: Transition Metals and Organic Nitrogen Chemistry (June 2026)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL June 2026 Series Simulation (WCH15/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Tests transition metal complexes, redox titrations, aromatic compounds, and amino acids.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 86, label: 'Grade A* (Top A2 Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of d-block chemistry, electrode potentials, and organic synthesis pathways.' },
      { grade: 'A',  minPercent: 74, label: 'Grade A (Excellent)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'High-level synthesis and redox precision.' },
      { grade: 'B',  minPercent: 62, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Good understanding of coordination chemistry and synthetic routes.' },
      { grade: 'C',  minPercent: 52, label: 'Grade C (Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid core A2 pass.' },
      { grade: 'D',  minPercent: 42, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Marginal pass.' },
      { grade: 'E',  minPercent: 32, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable standard for A2.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below grading standard.' },
    ]
  },

  // 11. Unit 6 June 2026 (WCH16/01 Practical II)
  'edexcel-ial-u6-june2026': {
    id: 'edexcel-ial-u6-june2026',
    title: 'Pearson Edexcel IAL Chemistry (June 2026 Practical II)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH16/01',
    paperName: 'Unit 6: Practical Skills in Chemistry II (June 2026 Series)',
    paperType: 'practical',
    defaultQuestionCount: 15,
    durationMinutes: 80,
    totalMarks: 50,
    instructions: [
      'Official Pearson Edexcel IAL June 2026 Written Practical Paper (A2 Core Practicals 9 to 16).',
      'Answer all questions. Show working in all mathematical calculations with units.',
      'Responses are evaluated against official Pearson Edexcel A2 practical mark scheme keywords and procedures.',
      'Refer to the Periodic Table and Data Formulae provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 82, label: 'Grade A* (Exceptional A2 Practical)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of advanced organic synthesis, kinetics, and transition metal analysis.' },
      { grade: 'A',  minPercent: 70, label: 'Grade A (Top A2 Tier)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Comprehensive experimental reasoning and quantitative precision.' },
      { grade: 'B',  minPercent: 60, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong understanding of recrystallisation, redox titrations, and spectroscopy.' },
      { grade: 'C',  minPercent: 50, label: 'Grade C (Standard Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid core knowledge of standard laboratory techniques.' },
      { grade: 'D',  minPercent: 42, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for A2 Practical Skills.' },
      { grade: 'E',  minPercent: 34, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Ungraded.' },
    ]
  },

  // ===== Pearson Edexcel IAL January 2026 Series Profiles =====
  // 12. Unit 1 January 2026 (WCH11/01)
  'edexcel-ial-u1-jan2026': {
    id: 'edexcel-ial-u1-jan2026',
    title: 'Pearson Edexcel IAL Chemistry (January 2026)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH11/01',
    paperName: 'Unit 1: Structure, Bonding and Introduction to Organic Chemistry (January 2026)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL January 2026 Series Simulation (WCH11/01 Section A).',
      'Answer all questions. Select one option (A, B, C or D) for each question.',
      'Each question carries 1 mark. No negative marking is applied.',
      'Refer to the Periodic Table and formula data sheets provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 75, label: 'Grade A (Top AS Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'High UMS standard (80%+ UMS equivalent for AS).' },
      { grade: 'B', minPercent: 65, label: 'Grade B (Very Good)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Strong command of energetics, bonding, and organic mechanisms.' },
      { grade: 'C', minPercent: 55, label: 'Grade C (Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Competent application of chemistry principles.' },
      { grade: 'D', minPercent: 45, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for Unit 1.' },
      { grade: 'E', minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable score to achieve AS qualification credit.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Insufficient score for certification.' },
    ]
  },

  // 13. Unit 2 January 2026 (WCH12/01)
  'edexcel-ial-u2-jan2026': {
    id: 'edexcel-ial-u2-jan2026',
    title: 'Pearson Edexcel IAL Chemistry (January 2026)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH12/01',
    paperName: 'Unit 2: Energetics, Group Chemistry, Halogenoalkanes and Alcohols (January 2026)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL January 2026 Series Simulation (WCH12/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Each question carries 1 mark. Manage your time efficiently.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 75, label: 'Grade A', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Top tier AS performance.' },
      { grade: 'B', minPercent: 65, label: 'Grade B', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Very good performance across redox, kinetics and group chemistry.' },
      { grade: 'C', minPercent: 55, label: 'Grade C', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound foundational knowledge.' },
      { grade: 'D', minPercent: 45, label: 'Grade D', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Satisfactory grasp of main trends.' },
      { grade: 'E', minPercent: 35, label: 'Grade E', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Unclassified performance.' },
    ]
  },

  // 14. Unit 3 January 2026 (WCH13/01 Practical I)
  'edexcel-ial-u3-jan2026': {
    id: 'edexcel-ial-u3-jan2026',
    title: 'Pearson Edexcel IAL Chemistry (January 2026 Practical I)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH13/01',
    paperName: 'Unit 3: Practical Skills in Chemistry I (January 2026 Series)',
    paperType: 'practical',
    defaultQuestionCount: 15,
    durationMinutes: 80,
    totalMarks: 50,
    instructions: [
      'Official Pearson Edexcel IAL January 2026 Written Practical Paper (Core Practicals 1 to 8).',
      'Answer all questions. Show working in all mathematical calculations with units.',
      'Responses are evaluated against official Pearson Edexcel practical mark scheme keywords and procedures.',
      'Refer to the Periodic Table and Data Formulae provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 70, label: 'Grade A', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding laboratory technique, precise observations, and accurate error analysis.' },
      { grade: 'B', minPercent: 60, label: 'Grade B', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Strong experimental reasoning and correct apparatus identification.' },
      { grade: 'C', minPercent: 52, label: 'Grade C', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound understanding of standard laboratory procedures.' },
      { grade: 'D', minPercent: 44, label: 'Grade D', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for AS Practical Skills.' },
      { grade: 'E', minPercent: 36, label: 'Grade E', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Ungraded.' },
    ]
  },

  // 15. Unit 4 January 2026 (WCH14/01 A2)
  'edexcel-ial-u4-jan2026': {
    id: 'edexcel-ial-u4-jan2026',
    title: 'Pearson Edexcel IAL Chemistry (January 2026 A2)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH14/01',
    paperName: 'Unit 4: Rates, Equilibria and Further Organic Chemistry (January 2026)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL January 2026 Series Simulation (WCH14/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Tests advanced A2 kinetics, entropy, equilibria, and organic mechanisms.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 86, label: 'Grade A* (Top A2 Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of advanced A2 mathematical rates, equilibria, and carbonyl chemistry.' },
      { grade: 'A',  minPercent: 74, label: 'Grade A (Excellent)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'High-level synthesis and mathematical accuracy.' },
      { grade: 'B',  minPercent: 62, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Good understanding of thermodynamic and kinetic models.' },
      { grade: 'C',  minPercent: 52, label: 'Grade C (Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid core A2 pass.' },
      { grade: 'D',  minPercent: 42, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Marginal pass.' },
      { grade: 'E',  minPercent: 32, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable standard for A2.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below grading standard.' },
    ]
  },

  // 16. Unit 5 January 2026 (WCH15/01 A2)
  'edexcel-ial-u5-jan2026': {
    id: 'edexcel-ial-u5-jan2026',
    title: 'Pearson Edexcel IAL Chemistry (January 2026 A2)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH15/01',
    paperName: 'Unit 5: Transition Metals and Organic Nitrogen Chemistry (January 2026)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL January 2026 Series Simulation (WCH15/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Tests transition metal complexes, redox titrations, aromatic compounds, and amino acids.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 86, label: 'Grade A* (Top A2 Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of d-block chemistry, electrode potentials, and organic synthesis pathways.' },
      { grade: 'A',  minPercent: 74, label: 'Grade A (Excellent)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'High-level synthesis and redox precision.' },
      { grade: 'B',  minPercent: 62, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Good understanding of coordination chemistry and synthetic routes.' },
      { grade: 'C',  minPercent: 52, label: 'Grade C (Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid core A2 pass.' },
      { grade: 'D',  minPercent: 42, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Marginal pass.' },
      { grade: 'E',  minPercent: 32, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable standard for A2.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below grading standard.' },
    ]
  },

  // 17. Unit 6 January 2026 (WCH16/01 Practical II)
  'edexcel-ial-u6-jan2026': {
    id: 'edexcel-ial-u6-jan2026',
    title: 'Pearson Edexcel IAL Chemistry (January 2026 Practical II)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH16/01',
    paperName: 'Unit 6: Practical Skills in Chemistry II (January 2026 Series)',
    paperType: 'practical',
    defaultQuestionCount: 15,
    durationMinutes: 80,
    totalMarks: 50,
    instructions: [
      'Official Pearson Edexcel IAL January 2026 Written Practical Paper (A2 Core Practicals 9 to 16).',
      'Answer all questions. Show working in all mathematical calculations with units.',
      'Responses are evaluated against official Pearson Edexcel A2 practical mark scheme keywords and procedures.',
      'Refer to the Periodic Table and Data Formulae provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 82, label: 'Grade A* (Exceptional A2 Practical)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of advanced organic synthesis, kinetics, and transition metal analysis.' },
      { grade: 'A',  minPercent: 70, label: 'Grade A (Top A2 Tier)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Comprehensive experimental reasoning and quantitative precision.' },
      { grade: 'B',  minPercent: 60, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong understanding of recrystallisation, redox titrations, and spectroscopy.' },
      { grade: 'C',  minPercent: 50, label: 'Grade C (Standard Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid core knowledge of standard laboratory techniques.' },
      { grade: 'D',  minPercent: 42, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for A2 Practical Skills.' },
      { grade: 'E',  minPercent: 34, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Ungraded.' },
    ]
  },

  // 18. Unit 1 October 2025 (WCH11/01)
  'edexcel-ial-u1-oct2025': {
    id: 'edexcel-ial-u1-oct2025',
    title: 'Pearson Edexcel IAL Chemistry (October 2025)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH11/01',
    paperName: 'Unit 1: Structure, Bonding and Introduction to Organic Chemistry (October 2025)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL October 2025 Series Simulation (WCH11/01 Section A).',
      'Answer all questions. Select one option (A, B, C or D) for each question.',
      'Each question carries 1 mark. No negative marking is applied.',
      'Refer to the Periodic Table and formula data sheets provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 75, label: 'Grade A (Top AS Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'High UMS standard (80%+ UMS equivalent for AS).' },
      { grade: 'B', minPercent: 65, label: 'Grade B (Very Good)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Strong command of energetics, bonding, and organic mechanisms.' },
      { grade: 'C', minPercent: 55, label: 'Grade C (Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Competent application of chemistry principles.' },
      { grade: 'D', minPercent: 45, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for Unit 1.' },
      { grade: 'E', minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable score to achieve AS qualification credit.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Insufficient score for certification.' },
    ]
  },

  // 19. Unit 2 October 2025 (WCH12/01)
  'edexcel-ial-u2-oct2025': {
    id: 'edexcel-ial-u2-oct2025',
    title: 'Pearson Edexcel IAL Chemistry (October 2025)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH12/01',
    paperName: 'Unit 2: Energetics, Group Chemistry, Halogenoalkanes and Alcohols (October 2025)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL October 2025 Series Simulation (WCH12/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Each question carries 1 mark. Manage your time efficiently.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 75, label: 'Grade A', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Top tier AS performance.' },
      { grade: 'B', minPercent: 65, label: 'Grade B', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Very good performance across redox, kinetics and group chemistry.' },
      { grade: 'C', minPercent: 55, label: 'Grade C', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound foundational knowledge.' },
      { grade: 'D', minPercent: 45, label: 'Grade D', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Satisfactory grasp of main trends.' },
      { grade: 'E', minPercent: 35, label: 'Grade E', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Unclassified performance.' },
    ]
  },

  // 20. Unit 3 October 2025 (WCH13/01 Practical I)
  'edexcel-ial-u3-oct2025': {
    id: 'edexcel-ial-u3-oct2025',
    title: 'Pearson Edexcel IAL Chemistry (October 2025 Practical I)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH13/01',
    paperName: 'Unit 3: Practical Skills in Chemistry I (October 2025 Series)',
    paperType: 'practical',
    defaultQuestionCount: 15,
    durationMinutes: 80,
    totalMarks: 50,
    instructions: [
      'Official Pearson Edexcel IAL October 2025 Written Practical Paper (Core Practicals 1 to 8).',
      'Answer all questions. Show working in all mathematical calculations with units.',
      'Responses are evaluated against official Pearson Edexcel practical mark scheme keywords and procedures.',
      'Refer to the Periodic Table and Data Formulae provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 74, label: 'Grade A (Distinction Practical)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Mastery of titration errors, enthalpy calorimetry, and qualitative ion analysis.' },
      { grade: 'B', minPercent: 64, label: 'Grade B (Merit)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Solid laboratory procedural understanding and accurate quantitative calculations.' },
      { grade: 'C', minPercent: 54, label: 'Grade C (Pass)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound grasp of experimental hazards and standard observations.' },
      { grade: 'D', minPercent: 44, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold for AS practical evaluation.' },
      { grade: 'E', minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing standard.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Insufficient score for qualification credit.' },
    ]
  },

  // 21. Unit 4 October 2025 (WCH14/01)
  'edexcel-ial-u4-oct2025': {
    id: 'edexcel-ial-u4-oct2025',
    title: 'Pearson Edexcel IAL Chemistry (October 2025)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH14/01',
    paperName: 'Unit 4: Rates, Equilibria and Further Organic Chemistry (October 2025)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL October 2025 Series Simulation (WCH14/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Each question carries 1 mark. Manage your time efficiently.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 88, label: 'Grade A* (Elite A2 Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of advanced kinetics, entropy, equilibria, and organic mechanisms.' },
      { grade: 'A',  minPercent: 76, label: 'Grade A (Top A2 Tier)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'High UMS standard for A2 certification.' },
      { grade: 'B',  minPercent: 66, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong command of thermodynamics and carbonyl chemistry.' },
      { grade: 'C',  minPercent: 55, label: 'Grade C (Good)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Competent grasp of acid-base equilibria and optical isomerism.' },
      { grade: 'D',  minPercent: 45, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Standard pass for Unit 4.' },
      { grade: 'E',  minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below pass threshold.' },
    ]
  },

  // 22. Unit 5 October 2025 (WCH15/01)
  'edexcel-ial-u5-oct2025': {
    id: 'edexcel-ial-u5-oct2025',
    title: 'Pearson Edexcel IAL Chemistry (October 2025)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH15/01',
    paperName: 'Unit 5: Transition Metals and Organic Nitrogen Chemistry (October 2025)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL October 2025 Series Simulation (WCH15/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Each question carries 1 mark. Manage your time efficiently.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 86, label: 'Grade A* (Top A2 Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of d-block chemistry, electrode potentials, and organic synthesis pathways.' },
      { grade: 'A',  minPercent: 74, label: 'Grade A (Excellent)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'High-level synthesis and redox precision.' },
      { grade: 'B',  minPercent: 62, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Good understanding of coordination chemistry and synthetic routes.' },
      { grade: 'C',  minPercent: 52, label: 'Grade C (Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid core A2 pass.' },
      { grade: 'D',  minPercent: 42, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Marginal pass.' },
      { grade: 'E',  minPercent: 32, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable standard for A2.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below grading standard.' },
    ]
  },

  // 23. Unit 6 October 2025 (WCH16/01 Practical II)
  'edexcel-ial-u6-oct2025': {
    id: 'edexcel-ial-u6-oct2025',
    title: 'Pearson Edexcel IAL Chemistry (October 2025 Practical II)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH16/01',
    paperName: 'Unit 6: Practical Skills in Chemistry II (October 2025 Series)',
    paperType: 'practical',
    defaultQuestionCount: 15,
    durationMinutes: 80,
    totalMarks: 50,
    instructions: [
      'Official Pearson Edexcel IAL October 2025 Written Practical Paper (A2 Core Practicals 9 to 16).',
      'Answer all questions. Show working in all mathematical calculations with units.',
      'Responses are evaluated against official Pearson Edexcel A2 practical mark scheme keywords and procedures.',
      'Refer to the Periodic Table and Data Formulae provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 82, label: 'Grade A* (Exceptional A2 Practical)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of advanced organic synthesis, kinetics, and transition metal analysis.' },
      { grade: 'A',  minPercent: 70, label: 'Grade A (Top A2 Tier)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Comprehensive experimental reasoning and quantitative precision.' },
      { grade: 'B',  minPercent: 60, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong understanding of recrystallisation, redox titrations, and spectroscopy.' },
      { grade: 'C',  minPercent: 50, label: 'Grade C (Standard Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid core knowledge of standard laboratory techniques.' },
      { grade: 'D',  minPercent: 42, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for A2 Practical Skills.' },
      { grade: 'E',  minPercent: 34, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Ungraded.' },
    ]
  },

  // 24. Unit 1 June 2025 (WCH11/01)
  'edexcel-ial-u1-june2025': {
    id: 'edexcel-ial-u1-june2025',
    title: 'Pearson Edexcel IAL Chemistry (June 2025)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH11/01',
    paperName: 'Unit 1: Structure, Bonding and Introduction to Organic Chemistry (June 2025)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL June 2025 Series Simulation (WCH11/01 Section A).',
      'Answer all questions. Select one option (A, B, C or D) for each question.',
      'Each question carries 1 mark. No negative marking is applied.',
      'Refer to the Periodic Table and formula data sheets provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 75, label: 'Grade A (Top AS Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'High UMS standard (80%+ UMS equivalent for AS).' },
      { grade: 'B', minPercent: 65, label: 'Grade B (Very Good)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Strong command of energetics, bonding, and organic mechanisms.' },
      { grade: 'C', minPercent: 55, label: 'Grade C (Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Competent application of chemistry principles.' },
      { grade: 'D', minPercent: 45, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for Unit 1.' },
      { grade: 'E', minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable score to achieve AS qualification credit.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Insufficient score for certification.' },
    ]
  },

  // 25. Unit 2 June 2025 (WCH12/01)
  'edexcel-ial-u2-june2025': {
    id: 'edexcel-ial-u2-june2025',
    title: 'Pearson Edexcel IAL Chemistry (June 2025)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH12/01',
    paperName: 'Unit 2: Energetics, Group Chemistry, Halogenoalkanes and Alcohols (June 2025)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL June 2025 Series Simulation (WCH12/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Each question carries 1 mark. Manage your time efficiently.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 75, label: 'Grade A', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Top tier AS performance.' },
      { grade: 'B', minPercent: 65, label: 'Grade B', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Very good performance across redox, kinetics and group chemistry.' },
      { grade: 'C', minPercent: 55, label: 'Grade C', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound foundational knowledge.' },
      { grade: 'D', minPercent: 45, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Satisfactory grasp of main trends.' },
      { grade: 'E', minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Unclassified performance.' },
    ]
  },

  // 26. Unit 3 June 2025 (WCH13/01 Practical I)
  'edexcel-ial-u3-june2025': {
    id: 'edexcel-ial-u3-june2025',
    title: 'Pearson Edexcel IAL Chemistry (June 2025 Practical I)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH13/01',
    paperName: 'Unit 3: Practical Skills in Chemistry I (June 2025 Series)',
    paperType: 'practical',
    defaultQuestionCount: 15,
    durationMinutes: 80,
    totalMarks: 50,
    instructions: [
      'Official Pearson Edexcel IAL June 2025 Written Practical Paper (Core Practicals 1 to 8).',
      'Answer all questions. Show working in all mathematical calculations with units.',
      'Responses are evaluated against official Pearson Edexcel practical mark scheme keywords and procedures.',
      'Refer to the Periodic Table and Data Formulae provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 74, label: 'Grade A (Distinction Practical)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Mastery of titration errors, enthalpy calorimetry, and qualitative ion analysis.' },
      { grade: 'B', minPercent: 64, label: 'Grade B (Merit)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Solid laboratory procedural understanding and accurate quantitative calculations.' },
      { grade: 'C', minPercent: 54, label: 'Grade C (Pass)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound grasp of experimental hazards and standard observations.' },
      { grade: 'D', minPercent: 44, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold for AS practical evaluation.' },
      { grade: 'E', minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing standard.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Insufficient score for qualification credit.' },
    ]
  },

  // 27. Unit 4 June 2025 (WCH14/01)
  'edexcel-ial-u4-june2025': {
    id: 'edexcel-ial-u4-june2025',
    title: 'Pearson Edexcel IAL Chemistry (June 2025)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH14/01',
    paperName: 'Unit 4: Rates, Equilibria and Further Organic Chemistry (June 2025)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL June 2025 Series Simulation (WCH14/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Each question carries 1 mark. Manage your time efficiently.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 88, label: 'Grade A* (Elite A2 Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of advanced kinetics, entropy, equilibria, and organic mechanisms.' },
      { grade: 'A',  minPercent: 76, label: 'Grade A (Top A2 Tier)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'High UMS standard for A2 certification.' },
      { grade: 'B',  minPercent: 66, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong command of thermodynamics and carbonyl chemistry.' },
      { grade: 'C',  minPercent: 55, label: 'Grade C (Good)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Competent grasp of acid-base equilibria and optical isomerism.' },
      { grade: 'D',  minPercent: 45, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Standard pass for Unit 4.' },
      { grade: 'E',  minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below pass threshold.' },
    ]
  },

  // 28. Unit 5 June 2025 (WCH15/01)
  'edexcel-ial-u5-june2025': {
    id: 'edexcel-ial-u5-june2025',
    title: 'Pearson Edexcel IAL Chemistry (June 2025)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH15/01',
    paperName: 'Unit 5: Transition Metals and Organic Nitrogen Chemistry (June 2025)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL June 2025 Series Simulation (WCH15/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Each question carries 1 mark. Manage your time efficiently.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 86, label: 'Grade A* (Top A2 Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of d-block chemistry, electrode potentials, and organic synthesis pathways.' },
      { grade: 'A',  minPercent: 74, label: 'Grade A (Excellent)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'High-level synthesis and redox precision.' },
      { grade: 'B',  minPercent: 62, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Good understanding of coordination chemistry and synthetic routes.' },
      { grade: 'C',  minPercent: 52, label: 'Grade C (Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid core A2 pass.' },
      { grade: 'D',  minPercent: 42, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Marginal pass.' },
      { grade: 'E',  minPercent: 32, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable standard for A2.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below grading standard.' },
    ]
  },

  // 29. Unit 6 June 2025 (WCH16/01 Practical II)
  'edexcel-ial-u6-june2025': {
    id: 'edexcel-ial-u6-june2025',
    title: 'Pearson Edexcel IAL Chemistry (June 2025 Practical II)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH16/01',
    paperName: 'Unit 6: Practical Skills in Chemistry II (June 2025 Series)',
    paperType: 'practical',
    defaultQuestionCount: 15,
    durationMinutes: 80,
    totalMarks: 50,
    instructions: [
      'Official Pearson Edexcel IAL June 2025 Written Practical Paper (A2 Core Practicals 9 to 16).',
      'Answer all questions. Show working in all mathematical calculations with units.',
      'Responses are evaluated against official Pearson Edexcel A2 practical mark scheme keywords and procedures.',
      'Refer to the Periodic Table and Data Formulae provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 82, label: 'Grade A* (Exceptional A2 Practical)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of advanced organic synthesis, kinetics, and transition metal analysis.' },
      { grade: 'A',  minPercent: 70, label: 'Grade A (Top A2 Tier)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Comprehensive experimental reasoning and quantitative precision.' },
      { grade: 'B',  minPercent: 60, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong understanding of recrystallisation, redox titrations, and spectroscopy.' },
      { grade: 'C',  minPercent: 50, label: 'Grade C (Standard Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid core knowledge of standard laboratory techniques.' },
      { grade: 'D',  minPercent: 42, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for A2 Practical Skills.' },
      { grade: 'E',  minPercent: 34, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Ungraded.' },
    ]
  },

  // 30. Unit 1 January 2025 (WCH11/01)
  'edexcel-ial-u1-jan2025': {
    id: 'edexcel-ial-u1-jan2025',
    title: 'Pearson Edexcel IAL Chemistry (January 2025)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH11/01',
    paperName: 'Unit 1: Structure, Bonding and Introduction to Organic Chemistry (January 2025)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL January 2025 Series Simulation (WCH11/01 Section A).',
      'Answer all questions. Select one option (A, B, C or D) for each question.',
      'Each question carries 1 mark. No negative marking is applied.',
      'Refer to the Periodic Table and formula data sheets provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 75, label: 'Grade A (Top AS Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'High UMS standard (80%+ UMS equivalent for AS).' },
      { grade: 'B', minPercent: 65, label: 'Grade B (Very Good)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Strong command of energetics, bonding, and organic mechanisms.' },
      { grade: 'C', minPercent: 55, label: 'Grade C (Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Competent application of chemistry principles.' },
      { grade: 'D', minPercent: 45, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for Unit 1.' },
      { grade: 'E', minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable score to achieve AS qualification credit.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Insufficient score for certification.' },
    ]
  },

  // 31. Unit 2 January 2025 (WCH12/01)
  'edexcel-ial-u2-jan2025': {
    id: 'edexcel-ial-u2-jan2025',
    title: 'Pearson Edexcel IAL Chemistry (January 2025)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH12/01',
    paperName: 'Unit 2: Energetics, Group Chemistry, Halogenoalkanes and Alcohols (January 2025)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL January 2025 Series Simulation (WCH12/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Each question carries 1 mark. Manage your time efficiently.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 75, label: 'Grade A', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Top tier AS performance.' },
      { grade: 'B', minPercent: 65, label: 'Grade B', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Very good performance across redox, kinetics and group chemistry.' },
      { grade: 'C', minPercent: 55, label: 'Grade C', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound foundational knowledge.' },
      { grade: 'D', minPercent: 45, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Satisfactory grasp of main trends.' },
      { grade: 'E', minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Unclassified performance.' },
    ]
  },

  // 32. Unit 3 January 2025 (WCH13/01 Practical I)
  'edexcel-ial-u3-jan2025': {
    id: 'edexcel-ial-u3-jan2025',
    title: 'Pearson Edexcel IAL Chemistry (January 2025 Practical I)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH13/01',
    paperName: 'Unit 3: Practical Skills in Chemistry I (January 2025 Series)',
    paperType: 'practical',
    defaultQuestionCount: 15,
    durationMinutes: 80,
    totalMarks: 50,
    instructions: [
      'Official Pearson Edexcel IAL January 2025 Written Practical Paper (Core Practicals 1 to 8).',
      'Answer all questions. Show working in all mathematical calculations with units.',
      'Responses are evaluated against official Pearson Edexcel practical mark scheme keywords and procedures.',
      'Refer to the Periodic Table and Data Formulae provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 74, label: 'Grade A (Distinction Practical)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Mastery of titration errors, enthalpy calorimetry, and qualitative ion analysis.' },
      { grade: 'B', minPercent: 64, label: 'Grade B (Merit)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Solid laboratory procedural understanding and accurate quantitative calculations.' },
      { grade: 'C', minPercent: 54, label: 'Grade C (Pass)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound grasp of experimental hazards and standard observations.' },
      { grade: 'D', minPercent: 44, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold for AS practical evaluation.' },
      { grade: 'E', minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing standard.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Insufficient score for qualification credit.' },
    ]
  },

  // 33. Unit 4 January 2025 (WCH14/01)
  'edexcel-ial-u4-jan2025': {
    id: 'edexcel-ial-u4-jan2025',
    title: 'Pearson Edexcel IAL Chemistry (January 2025)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH14/01',
    paperName: 'Unit 4: Rates, Equilibria and Further Organic Chemistry (January 2025)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL January 2025 Series Simulation (WCH14/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Each question carries 1 mark. Manage your time efficiently.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 88, label: 'Grade A* (Elite A2 Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of advanced kinetics, entropy, equilibria, and organic mechanisms.' },
      { grade: 'A',  minPercent: 76, label: 'Grade A (Top A2 Tier)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'High UMS standard for A2 certification.' },
      { grade: 'B',  minPercent: 66, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong command of thermodynamics and carbonyl chemistry.' },
      { grade: 'C',  minPercent: 55, label: 'Grade C (Good)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Competent grasp of acid-base equilibria and optical isomerism.' },
      { grade: 'D',  minPercent: 45, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Standard pass for Unit 4.' },
      { grade: 'E',  minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below pass threshold.' },
    ]
  },

  // 34. Unit 5 January 2025 (WCH15/01)
  'edexcel-ial-u5-jan2025': {
    id: 'edexcel-ial-u5-jan2025',
    title: 'Pearson Edexcel IAL Chemistry (January 2025)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH15/01',
    paperName: 'Unit 5: Transition Metals and Organic Nitrogen Chemistry (January 2025)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL January 2025 Series Simulation (WCH15/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Each question carries 1 mark. Manage your time efficiently.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 86, label: 'Grade A* (Top A2 Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of d-block chemistry, electrode potentials, and organic synthesis pathways.' },
      { grade: 'A',  minPercent: 74, label: 'Grade A (Excellent)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'High-level synthesis and redox precision.' },
      { grade: 'B',  minPercent: 62, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Good understanding of coordination chemistry and synthetic routes.' },
      { grade: 'C',  minPercent: 52, label: 'Grade C (Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid core A2 pass.' },
      { grade: 'D',  minPercent: 42, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Marginal pass.' },
      { grade: 'E',  minPercent: 32, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable standard for A2.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below grading standard.' },
    ]
  },

  // 35. Unit 6 January 2025 (WCH16/01 Practical II)
  'edexcel-ial-u6-jan2025': {
    id: 'edexcel-ial-u6-jan2025',
    title: 'Pearson Edexcel IAL Chemistry (January 2025 Practical II)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH16/01',
    paperName: 'Unit 6: Practical Skills in Chemistry II (January 2025 Series)',
    paperType: 'practical',
    defaultQuestionCount: 15,
    durationMinutes: 80,
    totalMarks: 50,
    instructions: [
      'Official Pearson Edexcel IAL January 2025 Written Practical Paper (A2 Core Practicals 9 to 16).',
      'Answer all questions. Show working in all mathematical calculations with units.',
      'Responses are evaluated against official Pearson Edexcel A2 practical mark scheme keywords and procedures.',
      'Refer to the Periodic Table and Data Formulae provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 82, label: 'Grade A* (Exceptional A2 Practical)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of advanced organic synthesis, kinetics, and transition metal analysis.' },
      { grade: 'A',  minPercent: 70, label: 'Grade A (Top A2 Tier)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Comprehensive experimental reasoning and quantitative precision.' },
      { grade: 'B',  minPercent: 60, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong understanding of recrystallisation, redox titrations, and spectroscopy.' },
      { grade: 'C',  minPercent: 50, label: 'Grade C (Standard Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid core knowledge of standard laboratory techniques.' },
      { grade: 'D',  minPercent: 42, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for A2 Practical Skills.' },
      { grade: 'E',  minPercent: 34, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Ungraded.' },
    ]
  },

  // 36. Unit 1 Specimen Paper (WCH11/01)
  'edexcel-ial-u1-specimen': {
    id: 'edexcel-ial-u1-specimen',
    title: 'Pearson Edexcel IAL Chemistry (Specimen Paper)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH11/01',
    paperName: 'Unit 1: Structure, Bonding and Introduction to Organic Chemistry (Official Specimen Paper)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL Benchmark Specimen Paper (WCH11/01 Section A).',
      'Answer all questions. Select one option (A, B, C or D) for each question.',
      'Each question carries 1 mark. No negative marking is applied.',
      'Refer to the Periodic Table and formula data sheets provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 75, label: 'Grade A (Top AS Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'High UMS standard (80%+ UMS equivalent for AS).' },
      { grade: 'B', minPercent: 65, label: 'Grade B (Very Good)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Strong command of energetics, bonding, and organic mechanisms.' },
      { grade: 'C', minPercent: 55, label: 'Grade C (Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Competent application of chemistry principles.' },
      { grade: 'D', minPercent: 45, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for Unit 1.' },
      { grade: 'E', minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable score to achieve AS qualification credit.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Insufficient score for certification.' },
    ]
  },

  // 37. Unit 2 Specimen Paper (WCH12/01)
  'edexcel-ial-u2-specimen': {
    id: 'edexcel-ial-u2-specimen',
    title: 'Pearson Edexcel IAL Chemistry (Specimen Paper)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH12/01',
    paperName: 'Unit 2: Energetics, Group Chemistry, Halogenoalkanes and Alcohols (Official Specimen Paper)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL Benchmark Specimen Paper (WCH12/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Each question carries 1 mark. Manage your time efficiently.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 75, label: 'Grade A', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Top tier AS performance.' },
      { grade: 'B', minPercent: 65, label: 'Grade B', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Very good performance across redox, kinetics and group chemistry.' },
      { grade: 'C', minPercent: 55, label: 'Grade C', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound foundational knowledge.' },
      { grade: 'D', minPercent: 45, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Satisfactory grasp of main trends.' },
      { grade: 'E', minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Unclassified performance.' },
    ]
  },

  // 38. Unit 3 Specimen Paper (WCH13/01 Practical I)
  'edexcel-ial-u3-specimen': {
    id: 'edexcel-ial-u3-specimen',
    title: 'Pearson Edexcel IAL Chemistry (Specimen Practical I)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH13/01',
    paperName: 'Unit 3: Practical Skills in Chemistry I (Official Specimen Paper)',
    paperType: 'practical',
    defaultQuestionCount: 15,
    durationMinutes: 80,
    totalMarks: 50,
    instructions: [
      'Official Pearson Edexcel IAL Benchmark Practical Paper (Core Practicals 1 to 8).',
      'Answer all questions. Show working in all mathematical calculations with units.',
      'Responses are evaluated against official Pearson Edexcel practical mark scheme keywords and procedures.',
      'Refer to the Periodic Table and Data Formulae provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 74, label: 'Grade A (Distinction Practical)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Mastery of titration errors, enthalpy calorimetry, and qualitative ion analysis.' },
      { grade: 'B', minPercent: 64, label: 'Grade B (Merit)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Solid laboratory procedural understanding and accurate quantitative calculations.' },
      { grade: 'C', minPercent: 54, label: 'Grade C (Pass)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound grasp of experimental hazards and standard observations.' },
      { grade: 'D', minPercent: 44, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold for AS practical evaluation.' },
      { grade: 'E', minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing standard.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Insufficient score for qualification credit.' },
    ]
  },

  // 39. Unit 4 Specimen Paper (WCH14/01)
  'edexcel-ial-u4-specimen': {
    id: 'edexcel-ial-u4-specimen',
    title: 'Pearson Edexcel IAL Chemistry (Specimen Paper)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH14/01',
    paperName: 'Unit 4: Rates, Equilibria and Further Organic Chemistry (Official Specimen Paper)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL Benchmark Specimen Paper (WCH14/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Each question carries 1 mark. Manage your time efficiently.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 88, label: 'Grade A* (Elite A2 Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of advanced kinetics, entropy, equilibria, and organic mechanisms.' },
      { grade: 'A',  minPercent: 76, label: 'Grade A (Top A2 Tier)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'High UMS standard for A2 certification.' },
      { grade: 'B',  minPercent: 66, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong command of thermodynamics and carbonyl chemistry.' },
      { grade: 'C',  minPercent: 55, label: 'Grade C (Good)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Competent grasp of acid-base equilibria and optical isomerism.' },
      { grade: 'D',  minPercent: 45, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Standard pass for Unit 4.' },
      { grade: 'E',  minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below pass threshold.' },
    ]
  },

  // 40. Unit 5 Specimen Paper (WCH15/01)
  'edexcel-ial-u5-specimen': {
    id: 'edexcel-ial-u5-specimen',
    title: 'Pearson Edexcel IAL Chemistry (Specimen Paper)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH15/01',
    paperName: 'Unit 5: Transition Metals and Organic Nitrogen Chemistry (Official Specimen Paper)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL Benchmark Specimen Paper (WCH15/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Each question carries 1 mark. Manage your time efficiently.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 86, label: 'Grade A* (Top A2 Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of d-block chemistry, electrode potentials, and organic synthesis pathways.' },
      { grade: 'A',  minPercent: 74, label: 'Grade A (Excellent)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'High-level synthesis and redox precision.' },
      { grade: 'B',  minPercent: 62, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Good understanding of coordination chemistry and synthetic routes.' },
      { grade: 'C',  minPercent: 52, label: 'Grade C (Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid core A2 pass.' },
      { grade: 'D',  minPercent: 42, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Marginal pass.' },
      { grade: 'E',  minPercent: 32, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable standard for A2.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below grading standard.' },
    ]
  },

  // 41. Unit 6 Specimen Paper (WCH16/01 Practical II)
  'edexcel-ial-u6-specimen': {
    id: 'edexcel-ial-u6-specimen',
    title: 'Pearson Edexcel IAL Chemistry (Specimen Practical II)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH16/01',
    paperName: 'Unit 6: Practical Skills in Chemistry II (Official Specimen Paper)',
    paperType: 'practical',
    defaultQuestionCount: 15,
    durationMinutes: 80,
    totalMarks: 50,
    instructions: [
      'Official Pearson Edexcel IAL Benchmark Practical Paper (A2 Core Practicals 9 to 16).',
      'Answer all questions. Show working in all mathematical calculations with units.',
      'Responses are evaluated against official Pearson Edexcel A2 practical mark scheme keywords and procedures.',
      'Refer to the Periodic Table and Data Formulae provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 82, label: 'Grade A* (Exceptional A2 Practical)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of advanced organic synthesis, kinetics, and transition metal analysis.' },
      { grade: 'A',  minPercent: 70, label: 'Grade A (Top A2 Tier)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Comprehensive experimental reasoning and quantitative precision.' },
      { grade: 'B',  minPercent: 60, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong understanding of recrystallisation, redox titrations, and spectroscopy.' },
      { grade: 'C',  minPercent: 50, label: 'Grade C (Standard Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid core knowledge of standard laboratory techniques.' },
      { grade: 'D',  minPercent: 42, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for A2 Practical Skills.' },
      { grade: 'E',  minPercent: 34, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Ungraded.' },
    ]
  },

  // 42. Unit 1 October 2026 (WCH11/01)
  'edexcel-ial-u1-oct2026': {
    id: 'edexcel-ial-u1-oct2026',
    title: 'Pearson Edexcel IAL Chemistry (October 2026)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH11/01',
    paperName: 'Unit 1: Structure, Bonding and Introduction to Organic Chemistry (October 2026)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL October 2026 Series Simulation (WCH11/01 Section A).',
      'Answer all questions. Select one option (A, B, C or D) for each question.',
      'Each question carries 1 mark. No negative marking is applied.',
      'Refer to the Periodic Table and formula data sheets provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 75, label: 'Grade A (Top AS Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'High UMS standard (80%+ UMS equivalent for AS).' },
      { grade: 'B', minPercent: 65, label: 'Grade B (Very Good)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Strong command of energetics, bonding, and organic mechanisms.' },
      { grade: 'C', minPercent: 55, label: 'Grade C (Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Competent application of chemistry principles.' },
      { grade: 'D', minPercent: 45, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for Unit 1.' },
      { grade: 'E', minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable score to achieve AS qualification credit.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Insufficient score for certification.' },
    ]
  },

  // 43. Unit 2 October 2026 (WCH12/01)
  'edexcel-ial-u2-oct2026': {
    id: 'edexcel-ial-u2-oct2026',
    title: 'Pearson Edexcel IAL Chemistry (October 2026)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH12/01',
    paperName: 'Unit 2: Energetics, Group Chemistry, Halogenoalkanes and Alcohols (October 2026)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL October 2026 Series Simulation (WCH12/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Each question carries 1 mark. Manage your time efficiently.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 75, label: 'Grade A', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Top tier AS performance.' },
      { grade: 'B', minPercent: 65, label: 'Grade B (Very Good)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Very good performance across redox, kinetics and group chemistry.' },
      { grade: 'C', minPercent: 55, label: 'Grade C', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound foundational knowledge.' },
      { grade: 'D', minPercent: 45, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Satisfactory grasp of main trends.' },
      { grade: 'E', minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Unclassified performance.' },
    ]
  },

  // 44. Unit 3 October 2026 (WCH13/01 Practical I)
  'edexcel-ial-u3-oct2026': {
    id: 'edexcel-ial-u3-oct2026',
    title: 'Pearson Edexcel IAL Chemistry (October 2026 Practical I)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH13/01',
    paperName: 'Unit 3: Practical Skills in Chemistry I (October 2026 Series)',
    paperType: 'practical',
    defaultQuestionCount: 15,
    durationMinutes: 80,
    totalMarks: 50,
    instructions: [
      'Official Pearson Edexcel IAL October 2026 Written Practical Paper (Core Practicals 1 to 8).',
      'Answer all questions. Show working in all mathematical calculations with units.',
      'Responses are evaluated against official Pearson Edexcel practical mark scheme keywords and procedures.',
      'Refer to the Periodic Table and Data Formulae provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A', minPercent: 74, label: 'Grade A (Distinction Practical)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Mastery of titration errors, enthalpy calorimetry, and qualitative ion analysis.' },
      { grade: 'B', minPercent: 64, label: 'Grade B (Merit)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Solid laboratory procedural understanding and accurate quantitative calculations.' },
      { grade: 'C', minPercent: 54, label: 'Grade C (Pass)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound grasp of experimental hazards and standard observations.' },
      { grade: 'D', minPercent: 44, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold for AS practical evaluation.' },
      { grade: 'E', minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing standard.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Insufficient score for qualification credit.' },
    ]
  },

  // 45. Unit 4 October 2026 (WCH14/01)
  'edexcel-ial-u4-oct2026': {
    id: 'edexcel-ial-u4-oct2026',
    title: 'Pearson Edexcel IAL Chemistry (October 2026)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH14/01',
    paperName: 'Unit 4: Rates, Equilibria and Further Organic Chemistry (October 2026)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL October 2026 Series Simulation (WCH14/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Each question carries 1 mark. Manage your time efficiently.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 88, label: 'Grade A* (Elite A2 Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of advanced kinetics, entropy, equilibria, and organic mechanisms.' },
      { grade: 'A',  minPercent: 76, label: 'Grade A (Top A2 Tier)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'High UMS standard for A2 certification.' },
      { grade: 'B',  minPercent: 66, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong command of thermodynamics and carbonyl chemistry.' },
      { grade: 'C',  minPercent: 55, label: 'Grade C (Good)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Competent grasp of acid-base equilibria and optical isomerism.' },
      { grade: 'D',  minPercent: 45, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Standard pass for Unit 4.' },
      { grade: 'E',  minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below pass threshold.' },
    ]
  },

  // 46. Unit 5 October 2026 (WCH15/01)
  'edexcel-ial-u5-oct2026': {
    id: 'edexcel-ial-u5-oct2026',
    title: 'Pearson Edexcel IAL Chemistry (October 2026)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH15/01',
    paperName: 'Unit 5: Transition Metals and Organic Nitrogen Chemistry (October 2026)',
    paperType: 'mcq',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Official Pearson Edexcel IAL October 2026 Series Simulation (WCH15/01 Section A).',
      'Answer all questions. Select one response for each question.',
      'Each question carries 1 mark. Manage your time efficiently.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 86, label: 'Grade A* (Top A2 Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of d-block chemistry, electrode potentials, and organic synthesis pathways.' },
      { grade: 'A',  minPercent: 74, label: 'Grade A (Excellent)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'High-level synthesis and redox precision.' },
      { grade: 'B',  minPercent: 62, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Good understanding of coordination chemistry and synthetic routes.' },
      { grade: 'C',  minPercent: 52, label: 'Grade C (Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid core A2 pass.' },
      { grade: 'D',  minPercent: 42, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Marginal pass.' },
      { grade: 'E',  minPercent: 32, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable standard for A2.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below grading standard.' },
    ]
  },

  // 47. Unit 6 October 2026 (WCH16/01 Practical II)
  'edexcel-ial-u6-oct2026': {
    id: 'edexcel-ial-u6-oct2026',
    title: 'Pearson Edexcel IAL Chemistry (October 2026 Practical II)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH16/01',
    paperName: 'Unit 6: Practical Skills in Chemistry II (October 2026 Series)',
    paperType: 'practical',
    defaultQuestionCount: 15,
    durationMinutes: 80,
    totalMarks: 50,
    instructions: [
      'Official Pearson Edexcel IAL October 2026 Written Practical Paper (A2 Core Practicals 9 to 16).',
      'Answer all questions. Show working in all mathematical calculations with units.',
      'Responses are evaluated against official Pearson Edexcel A2 practical mark scheme keywords and procedures.',
      'Refer to the Periodic Table and Data Formulae provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 82, label: 'Grade A* (Exceptional A2 Practical)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of advanced organic synthesis, kinetics, and transition metal analysis.' },
      { grade: 'A',  minPercent: 70, label: 'Grade A (Top A2 Tier)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Comprehensive experimental reasoning and quantitative precision.' },
      { grade: 'B',  minPercent: 60, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong understanding of recrystallisation, redox titrations, and spectroscopy.' },
      { grade: 'C',  minPercent: 50, label: 'Grade C (Standard Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid core knowledge of standard laboratory techniques.' },
      { grade: 'D',  minPercent: 42, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for A2 Practical Skills.' },
      { grade: 'E',  minPercent: 34, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Ungraded.' },
    ]
  }
};

/**
 * Calculates the exact grade, percentage, and distance to next higher grade
 */
export function calculateGrade(score: number, total: number, profileId: string): {
  percentage: number;
  grade: string;
  threshold: GradeThreshold;
  nextThreshold?: {
    grade: string;
    marksNeeded: number;
    percentNeeded: number;
  };
  isTopGrade: boolean;
} {
  const profile = EXAM_PROFILES[profileId] || EXAM_PROFILES['cie-0620-p2'];
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  // Sorted from highest minPercent to lowest
  const sortedThresholds = [...profile.thresholds].sort((a, b) => b.minPercent - a.minPercent);

  let awardedThreshold = sortedThresholds[sortedThresholds.length - 1]; // default to lowest (U)
  let awardedIndex = sortedThresholds.length - 1;

  for (let i = 0; i < sortedThresholds.length; i++) {
    if (percentage >= sortedThresholds[i].minPercent) {
      awardedThreshold = sortedThresholds[i];
      awardedIndex = i;
      break;
    }
  }

  const isTopGrade = awardedIndex === 0;
  let nextThreshold: { grade: string; marksNeeded: number; percentNeeded: number } | undefined = undefined;

  if (!isTopGrade && awardedIndex > 0) {
    const nextTarget = sortedThresholds[awardedIndex - 1];
    const targetMarks = Math.ceil((nextTarget.minPercent / 100) * total);
    const marksNeeded = Math.max(1, targetMarks - score);
    const percentNeeded = nextTarget.minPercent - percentage;
    nextThreshold = {
      grade: nextTarget.grade,
      marksNeeded,
      percentNeeded
    };
  }

  return {
    percentage,
    grade: awardedThreshold.grade,
    threshold: awardedThreshold,
    nextThreshold,
    isTopGrade
  };
}
