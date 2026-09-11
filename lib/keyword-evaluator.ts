/**
 * Intelligent Keyword & Marking Scheme Evaluator for Chemistry Answers
 * Evaluates student written responses against official Cambridge mark schemes.
 */

export interface MarkingPoint {
  mark: number;
  keyword: string;
  text: string;
}

export interface MarkingEvaluationResult {
  awardedMarks: number;
  totalMarks: number;
  percentage: number;
  pointResults: {
    point: MarkingPoint;
    matched: boolean;
    matchedKeywords: string[];
    feedback: string;
  }[];
}

/**
 * Normalizes chemical text by stripping extra spaces, lowercasing,
 * and normalizing unicode superscripts/subscripts and arrows.
 */
export function normalizeChemicalText(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/->|→|⇌/g, ' -> ')
    .replace(/₀/g, '0').replace(/₁/g, '1').replace(/₂/g, '2').replace(/₃/g, '3')
    .replace(/₄/g, '4').replace(/₅/g, '5').replace(/₆/g, '6').replace(/₇/g, '7')
    .replace(/₈/g, '8').replace(/₉/g, '9')
    .replace(/⁺/g, '+').replace(/⁻/g, '-').replace(/²/g, '2').replace(/³/g, '3')
    .replace(/[,\.;:\(\)\[\]\{\}]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Extracts candidate keyword tokens/phrases from a mark point.
 */
export function extractKeywordsFromPoint(point: MarkingPoint): string[] {
  const parts: string[] = [];
  
  if (point.keyword) {
    const rawTokens = point.keyword.split(/\s*\/\s*|\s*or\s*/i);
    rawTokens.forEach(t => {
      const clean = normalizeChemicalText(t);
      if (clean && clean.length > 1) parts.push(clean);
    });
  }

  if (parts.length === 0 && point.text) {
    const clean = normalizeChemicalText(point.text);
    if (clean) parts.push(clean);
  }

  return parts;
}

/**
 * Checks if a candidate keyword or synonym pattern matches within the student text.
 */
function isKeywordMatched(studentNormalized: string, keywordNormalized: string): boolean {
  if (!studentNormalized || !keywordNormalized) return false;

  if (studentNormalized.includes(keywordNormalized)) {
    return true;
  }

  const keywordWords = keywordNormalized.split(' ').filter(w => w.length > 2);
  if (keywordWords.length > 1) {
    const matchedCount = keywordWords.filter(w => studentNormalized.includes(w)).length;
    if (matchedCount / keywordWords.length >= 0.75) {
      return true;
    }
  }

  return false;
}

/**
 * Evaluates a student's answer against a structured question's marking scheme.
 */
export function evaluateWrittenAnswer(
  studentAnswer: string,
  markingScheme: {
    marks: number;
    points: MarkingPoint[];
    examinerTips?: string;
  }
): MarkingEvaluationResult {
  const studentNorm = normalizeChemicalText(studentAnswer);
  let awarded = 0;

  const pointResults = markingScheme.points.map(point => {
    const keywords = extractKeywordsFromPoint(point);
    const matchedKeywords: string[] = [];

    for (const kw of keywords) {
      if (isKeywordMatched(studentNorm, kw)) {
        matchedKeywords.push(kw);
      }
    }

    const matched = matchedKeywords.length > 0;
    if (matched) {
      awarded += point.mark;
    }

    return {
      point,
      matched,
      matchedKeywords,
      feedback: matched 
        ? `Awarded ${point.mark} mark(s): Identified required keyword/concept.` 
        : `Mark not awarded: Expected concept: "${point.keyword || point.text}".`
    };
  });

  const finalAwarded = Math.min(markingScheme.marks, awarded);

  return {
    awardedMarks: finalAwarded,
    totalMarks: markingScheme.marks,
    percentage: markingScheme.marks > 0 ? Math.round((finalAwarded / markingScheme.marks) * 100) : 0,
    pointResults
  };
}
