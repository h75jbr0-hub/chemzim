// ===== ChemZim Exam Types =====
// Adapted for Cambridge IGCSE & A-Level Chemistry

/** Curriculum level */
export type CurriculumLevel = 
  | "igcse" 
  | "as-level" 
  | "a-level"
  | "edexcel-igcse"
  | "edexcel-as"
  | "edexcel-a2"
  | "edexcel-alevel"
  | "cie-igcse"
  | "cie-as"
  | "cie-alevel";

/** Paper type */
export type PaperType = "mcq" | "structured" | "practical";

/** Question difficulty */
export type DifficultyLevel = 1 | 2 | 3;

/** Game modes */
export type GameMode = "practice" | "timed" | "challenge";

/** IGCSE topic tags */
export type IGCSETopicTag =
  | "states-of-matter"
  | "atoms-elements"
  | "stoichiometry"
  | "electrochemistry"
  | "chemical-energetics"
  | "chemical-reactions"
  | "acids-bases-salts"
  | "periodic-table"
  | "metals"
  | "chemistry-environment"
  | "organic-chemistry"
  | "experimental-techniques"
  // Edexcel unit IDs
  | "edexcel-unit-1"
  | "edexcel-unit-2"
  | "edexcel-unit-3"
  | "edexcel-unit-4"
  | "edexcel-unit-5"
  | "edexcel-unit-6"
  // CIE AS & A Level IDs
  | "physical-chemistry"
  | "inorganic-chemistry"
  | "organic-chemistry-as"
  | "physical-chemistry-a2"
  | "inorganic-chemistry-a2"
  | "organic-chemistry-a2"
  | "analysis";

/** A single option in a question */
export interface QuestionOption {
  text: string;
  isCorrect?: boolean;
}

/** A question in the exam bank */
export interface Question {
  id: string;
  /** The question text (supports KaTeX with $ delimiters) */
  question: string;
  /** Array of options */
  options: QuestionOption[];
  /** Index of the correct answer (0-based) */
  correctAnswer: number;
  /** Detailed explanation shown after answering */
  explanation: string;
  /** Difficulty level: 1 = Easy, 2 = Medium, 3 = Hard */
  level: DifficultyLevel;
  /** IGCSE topic tag */
  topic: IGCSETopicTag;
  /** Curriculum level */
  curriculum: CurriculumLevel;
  /** Paper type (default: mcq) */
  paperType?: PaperType;
  /** Source reference (e.g. "0620/22/M/J/23 Q15") */
  source?: string;
  /** Creation date */
  createdAt: string;
  /** Optional HTML table support */
  tableHtml?: string;
  /** Optional HTML/SVG image/graph support */
  imageHtml?: string;
  /** Optional lesson number tag (e.g. 1 or 2) */
  lessonNum?: number;
  /** Optional structured marking scheme for paper 4 / written questions */
  markingScheme?: {
    marks: number;
    points: { mark: number; keyword: string; text: string }[];
    examinerTips?: string;
  };
  /** Optional interactive graph plotting configuration for Paper 6 / Practical questions */
  graphConfig?: {
    xAxis: {
      label: string;
      unit: string;
      min: number;
      max: number;
      step: number;
    };
    yAxis: {
      label: string;
      unit: string;
      min: number;
      max: number;
      step: number;
    };
    targetPoints: { x: number; y: number; label?: string }[];
    curveType: 'line' | 'curve';
    tolerance?: number; // Distance tolerance in data units
    anomalousPointIndex?: number;
    title?: string;
  };
  /** Optional interactive apparatus scale reader configuration for Paper 6 / Practical questions */
  apparatusScaleConfig?: {
    type: 'burette' | 'measuring-cylinder' | 'thermometer' | 'gas-syringe';
    targetValue: number;
    unit: string;
    minScale: number;
    maxScale: number;
    step: number;
    subdivision?: number;
    tolerance: number; // Accepted reading tolerance (e.g. 0.05 for burette)
    title?: string;
    initialReading?: number; // For titrations (delivering final - initial)
    liquidColor?: string;
  };
}

/** Exam configuration chosen by the user */
export interface ExamConfig {
  /** Selected topics */
  topics: IGCSETopicTag[];
  /** Difficulty level */
  level: DifficultyLevel;
  /** Number of questions */
  questionCount: number;
  /** Game mode */
  mode: GameMode;
  /** Time limit in minutes (for timed mode) */
  timeLimit?: number;
  /** Curriculum level */
  curriculum: CurriculumLevel;
}

/** A completed exam result */
export interface ExamResult {
  /** Unique result ID */
  id: string;
  /** Exam configuration */
  config: ExamConfig;
  /** Array of answered question IDs */
  answeredQuestions: AnsweredQuestion[];
  /** Total score (correct answers) */
  score: number;
  /** Total questions */
  total: number;
  /** Percentage score */
  percentage: number;
  /** XP earned */
  xpEarned: number;
  /** Time taken in seconds */
  timeTaken: number;
  /** Completion date */
  completedAt: string;
}

/** A single answered question */
export interface AnsweredQuestion {
  /** Question ID */
  questionId: string;
  /** Selected answer index */
  selectedAnswer: number;
  /** Whether the answer is correct */
  isCorrect: boolean;
  /** Time spent on this question (seconds) */
  timeSpent: number;
}

/** Level titles for gamification */
export const LEVEL_TITLES: Record<number, string> = {
  1: "Lab Assistant",
  2: "Lab Technician",
  3: "Chemistry Student",
  4: "Chemist",
  5: "Senior Chemist",
  6: "Research Chemist",
  7: "Research Fellow",
  8: "Associate Professor",
  9: "Professor",
  10: "Nobel Laureate",
};

/** XP requirements per level */
export const XP_PER_LEVEL: Record<number, number> = {
  1: 0,
  2: 100,
  3: 300,
  4: 600,
  5: 1000,
  6: 1500,
  7: 2200,
  8: 3000,
  9: 4000,
  10: 5500,
};

/** XP rewards per question */
export const XP_REWARDS = {
  correctAnswer: 10,
  perfectExam: 50,
  streakBonus: 5,
  firstTry: 3,
  speedBonus: 2,
} as const;

/** Difficulty labels */
export const DIFFICULTY_LABELS: Record<DifficultyLevel, string> = {
  1: "Easy",
  2: "Medium",
  3: "Hard",
};

/** Mode labels */
export const MODE_LABELS: Record<GameMode, string> = {
  practice: "Practice Mode",
  timed: "Timed Exam",
  challenge: "Challenge Mode",
};
