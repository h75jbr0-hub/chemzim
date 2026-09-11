export type DentalCategory = 
  | 'General Dentistry'
  | 'Restorative & Endodontics'
  | 'Oral Surgery & Pathology'
  | 'Pharmacology & General Medicine'
  | 'Prosthodontics & Radiology'
  | 'Periodontics';

export type DentalLevel = 'Level 1' | 'Level 2' | 'Level 3';

export interface DentalQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: DentalCategory;
  level: DentalLevel;
}

export interface DentalExamSession {
  id: string;
  title: string;
  questions: DentalQuestion[];
  userAnswers: Record<number, number>; // questionId -> selectedOptionIdx
  startTime: number;
  durationSeconds: number;
  completedTime?: number;
  score?: number;
}

export interface DentalUserStats {
  answeredCount: number;
  correctCount: number;
  categoryStats: Record<string, { answered: number; correct: number }>;
  bookmarkedIds: number[];
  mistakeIds: number[];
}
