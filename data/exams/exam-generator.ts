// ===== ChemZim Exam Generator =====
// Fisher-Yates shuffle + grouped randomization + option shuffling

import type { Question, ExamConfig, IGCSETopicTag, DifficultyLevel } from "./types";

/**
 * Fisher-Yates shuffle — unbiased in-place array shuffle.
 */
function fisherYatesShuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Shuffle options within a question while keeping track of the correct answer index.
 */
function shuffleOptions(question: Question): Question {
  const originalCorrectText = question.options[question.correctAnswer].text;

  const shuffledOptions = fisherYatesShuffle(question.options);

  const newCorrectIndex = shuffledOptions.findIndex(
    (opt) => opt.text === originalCorrectText
  );

  return {
    ...question,
    options: shuffledOptions,
    correctAnswer: newCorrectIndex,
  };
}

/**
 * Filter questions by topic and difficulty.
 */
function filterQuestions(
  allQuestions: Question[],
  topics: IGCSETopicTag[],
  level: DifficultyLevel
): Question[] {
  return allQuestions.filter(
    (q) => topics.includes(q.topic) && q.level === level
  );
}

/**
 * Generate an exam from a question bank based on the given configuration.
 *
 * @param allQuestions - The full question bank
 * @param config - Exam configuration from the user
 * @returns Array of shuffled questions with shuffled options
 */
export function generateExam(
  allQuestions: Question[],
  config: ExamConfig
): Question[] {
  // 1. Filter by topic and difficulty
  const filtered = filterQuestions(allQuestions, config.topics, config.level);

  // 2. Shuffle the filtered pool
  const shuffled = fisherYatesShuffle(filtered);

  // 3. Take the requested number of questions (or all if fewer available)
  const selected = shuffled.slice(0, config.questionCount);

  // 4. Shuffle options within each question
  const withShuffledOptions = selected.map(shuffleOptions);

  return withShuffledOptions;
}

/**
 * Generate a grouped exam where questions from each topic appear in random order,
 * but topics are grouped together.
 */
export function generateGroupedExam(
  allQuestions: Question[],
  config: ExamConfig
): Question[] {
  const questionsPerTopic = Math.ceil(
    config.questionCount / config.topics.length
  );

  const grouped: Question[] = [];

  for (const topic of config.topics) {
    const topicQuestions = allQuestions.filter(
      (q) => q.topic === topic && q.level === config.level
    );

    const shuffled = fisherYatesShuffle(topicQuestions);
    const selected = shuffled.slice(0, questionsPerTopic);
    grouped.push(...selected);
  }

  // Trim to exact count
  const trimmed = grouped.slice(0, config.questionCount);

  // Shuffle options
  return trimmed.map(shuffleOptions);
}

/**
 * Calculate XP earned from an exam.
 */
export function calculateXP(
  correctCount: number,
  totalCount: number,
  level: DifficultyLevel,
  timeTakenSeconds: number,
  timeLimitSeconds?: number
): number {
  const baseXP = correctCount * 10;

  // Difficulty multiplier
  const difficultyMultiplier = level === 1 ? 1 : level === 2 ? 1.5 : 2;

  // Perfect exam bonus
  const perfectBonus = correctCount === totalCount ? 50 : 0;

  // Speed bonus (if finished under half the time limit)
  let speedBonus = 0;
  if (timeLimitSeconds && timeTakenSeconds < timeLimitSeconds * 0.5) {
    speedBonus = Math.floor(correctCount * 2);
  }

  // High score bonus (80%+)
  const percentage = (correctCount / totalCount) * 100;
  const highScoreBonus = percentage >= 80 ? 20 : 0;

  const totalXP = Math.floor(
    baseXP * difficultyMultiplier + perfectBonus + speedBonus + highScoreBonus
  );

  return totalXP;
}
