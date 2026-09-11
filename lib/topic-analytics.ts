import { allCurricula, CurriculumLevel, Topic } from '@/data/curriculum';
import { questionBank, Question } from '@/data/exams';
import { SolvedQuestionStatus, MistakeItem } from '@/contexts/GamificationContext';

export interface TopicDiagnostic {
  curriculumId: string;
  unitNumber: number;
  unitTitle: string;
  topicId: string;
  totalAttempts: number;
  correctAttempts: number;
  mistakesCount: number;
  accuracyPercent: number;
  weaknessPercent: number; // 100 - accuracy
  status: 'mastered' | 'proficient' | 'moderate' | 'critical' | 'unassessed';
  recommendedLessonNum: number;
  recommendedLessonTitle: string;
  subtopics: string[];
}

export interface SkillCategoryBreakdown {
  category: 'mcq' | 'practical' | 'structured';
  label: string;
  icon: string;
  totalAttempts: number;
  correctAttempts: number;
  accuracyPercent: number;
  status: 'strong' | 'moderate' | 'critical' | 'unassessed';
}

export interface StudentDiagnosticReport {
  overallAccuracy: number;
  readinessIndex: number;
  totalAttempts: number;
  totalMistakes: number;
  masteredUnitsCount: number;
  criticalUnitsCount: number;
  diagnostics: TopicDiagnostic[];
  topWeakSpots: TopicDiagnostic[];
  activeCurriculum: CurriculumLevel;
  skillsBreakdown: SkillCategoryBreakdown[];
}

// Cambridge canonical unit mapping fallback
const CAMBRIDGE_TOPIC_MAP: Record<string, number> = {
  'states-of-matter': 1,
  'atoms-elements': 2,
  'stoichiometry': 3,
  'electrochemistry': 4,
  'chemical-energetics': 5,
  'chemical-reactions': 6,
  'acids-bases-salts': 7,
  'periodic-table': 8,
  'metals': 9,
  'chemistry-environment': 10,
  'organic-chemistry': 11,
  'experimental-techniques': 12
};

// Fast lookup map for all questions in questionBank
let questionCache: Map<string, Question> | null = null;
function getQuestionMap(): Map<string, Question> {
  if (!questionCache) {
    questionCache = new Map();
    questionBank.forEach(q => {
      questionCache!.set(q.id, q);
    });
  }
  return questionCache;
}

/**
 * Resolves the unit number, track, and skill category for any given question ID
 */
export function resolveQuestionUnit(questionId: string): { 
  track: string; 
  unitNumber: number; 
  lessonNum?: number;
  paperType: 'mcq' | 'practical' | 'structured';
} | null {
  // 1. Direct cache check from questionBank
  const map = getQuestionMap();
  const q = map.get(questionId);

  if (q) {
    let track = (q.curriculum || 'cie-igcse').toLowerCase();
    if (track === 'igcse') track = 'cie-igcse';
    if (track === 'a-level') track = 'cie-alevel';
    if (track === 'as-level') track = 'cie-as';

    let unitNumber: number | undefined = undefined;

    // Check if topic is a direct edexcel unit
    const topicStr = (q.topic || '').toLowerCase();
    const matchEdxUnit = topicStr.match(/edexcel-unit-(\d+)/);
    if (matchEdxUnit) {
      unitNumber = parseInt(matchEdxUnit[1], 10);
      if (track === 'edexcel-alevel') {
        track = unitNumber >= 4 ? 'edexcel-a2' : 'edexcel-as';
      }
    } else if (CAMBRIDGE_TOPIC_MAP[topicStr]) {
      unitNumber = CAMBRIDGE_TOPIC_MAP[topicStr];
    }

    // Try regex on question ID if not resolved
    if (!unitNumber) {
      const matchId = questionId.match(/_u(\d+)_/i) || questionId.match(/-(?:u|unit-)(\d+)/i);
      if (matchId) {
        unitNumber = parseInt(matchId[1], 10);
      }
    }

    const isPractical = q.paperType === 'practical' || 
      topicStr.includes('unit-3') || 
      topicStr.includes('unit-6') || 
      (q.source && (q.source.includes('WCH13') || q.source.includes('WCH16') || q.source.includes('Paper 6') || q.source.includes('0620/6')));
    
    const isStructured = q.paperType === 'structured' || 
      (q.source && (q.source.includes('Paper 4') || q.source.includes('0620/4') || q.source.includes('Paper 3')));

    const paperType: 'mcq' | 'practical' | 'structured' = isPractical ? 'practical' : isStructured ? 'structured' : 'mcq';

    if (unitNumber) {
      return { track, unitNumber, lessonNum: q.lessonNum, paperType };
    }
  }

  // 2. Fallback heuristic pattern matching on question ID
  const mModular = questionId.match(/^ex_([a-z]{2})_u(\d+)_l(\d+)/i);
  if (mModular) {
    const code = mModular[1].toLowerCase();
    const unitNumber = parseInt(mModular[2], 10);
    const lessonNum = parseInt(mModular[3], 10);
    let track = 'cie-igcse';
    if (code === 'ed') {
      track = unitNumber >= 4 ? 'edexcel-a2' : 'edexcel-as';
    } else if (code === 'ca') {
      track = 'cie-alevel';
    }
    const paperType = (unitNumber === 3 || unitNumber === 6) ? 'practical' : 'mcq';
    return { track, unitNumber, lessonNum, paperType };
  }

  const matchGeneral = questionId.match(/^([a-z0-9\-]+?)-(?:u|unit-)(\d+)/i);
  if (matchGeneral) {
    const track = matchGeneral[1].toLowerCase();
    const unitNumber = parseInt(matchGeneral[2], 10);
    const paperType = (unitNumber === 3 || unitNumber === 6) ? 'practical' : 'mcq';
    return { track, unitNumber, paperType };
  }

  // Check som, atom, stoich prefixes
  if (questionId.startsWith('q_som_')) return { track: 'cie-igcse', unitNumber: 1, paperType: 'mcq' };
  if (questionId.startsWith('q_atom_') || questionId.startsWith('q_elem_')) return { track: 'cie-igcse', unitNumber: 2, paperType: 'mcq' };
  if (questionId.startsWith('q_stoich_') || questionId.startsWith('q_mole_')) return { track: 'cie-igcse', unitNumber: 3, paperType: 'mcq' };
  if (questionId.startsWith('q_elec_')) return { track: 'cie-igcse', unitNumber: 4, paperType: 'mcq' };
  if (questionId.startsWith('q_ener_')) return { track: 'cie-igcse', unitNumber: 5, paperType: 'mcq' };
  if (questionId.startsWith('q_rate_') || questionId.startsWith('q_react_')) return { track: 'cie-igcse', unitNumber: 6, paperType: 'mcq' };
  if (questionId.startsWith('q_acid_')) return { track: 'cie-igcse', unitNumber: 7, paperType: 'mcq' };
  if (questionId.startsWith('q_ptable_')) return { track: 'cie-igcse', unitNumber: 8, paperType: 'mcq' };
  if (questionId.startsWith('q_metal_')) return { track: 'cie-igcse', unitNumber: 9, paperType: 'mcq' };
  if (questionId.startsWith('q_env_')) return { track: 'cie-igcse', unitNumber: 10, paperType: 'mcq' };
  if (questionId.startsWith('q_org_')) return { track: 'cie-igcse', unitNumber: 11, paperType: 'mcq' };
  if (questionId.startsWith('q_exp_')) return { track: 'cie-igcse', unitNumber: 12, paperType: 'practical' };

  return null;
}

/**
 * Analyzes student question history and produces a structured diagnostic report
 */
export function analyzeStudentDiagnostics(
  solved: Record<string, SolvedQuestionStatus> = {},
  mistakes: MistakeItem[] = [],
  userTrack: string = 'cie-igcse'
): StudentDiagnosticReport {
  // Normalize student curriculum track
  let track = userTrack.toLowerCase().trim();
  if (track === 'igcse') track = 'cie-igcse';
  if (track === 'as level' || track === 'as-level') track = 'cie-as';
  if (track === 'a2 level' || track === 'a level' || track === 'a-level') track = 'cie-alevel';

  // Unified 6-unit curriculum for Edexcel IAL
  let activeCurriculum: CurriculumLevel;
  if (track === 'edexcel-alevel' || track === 'edexcel-ial' || track === 'edexcel') {
    const asCurriculum = allCurricula.find(c => c.id.startsWith('edexcel-as')) || allCurricula[0];
    const a2Curriculum = allCurricula.find(c => c.id.startsWith('edexcel-a2')) || allCurricula[0];
    activeCurriculum = {
      id: 'edexcel-alevel',
      code: 'WCH11-16',
      title: 'Pearson Edexcel IAL Chemistry (Units 1–6)',
      description: 'Pearson Edexcel International Advanced Level Chemistry Specification',
      topics: [
        ...asCurriculum.topics,
        ...a2Curriculum.topics
      ]
    };
  } else {
    activeCurriculum = allCurricula.find(c => c.id.toLowerCase().startsWith(track)) || allCurricula[0];
  }

  // Map each unit in the active curriculum
  const unitStats: Record<number, {
    totalAttempts: number;
    correctAttempts: number;
    mistakesCount: number;
    mistakeLessons: number[];
  }> = {};

  activeCurriculum.topics.forEach(t => {
    unitStats[t.number] = {
      totalAttempts: 0,
      correctAttempts: 0,
      mistakesCount: 0,
      mistakeLessons: []
    };
  });

  // Skills breakdown tracking
  const skillsStats = {
    mcq: { attempts: 0, correct: 0 },
    practical: { attempts: 0, correct: 0 },
    structured: { attempts: 0, correct: 0 }
  };

  // Aggregate from solvedQuestions
  Object.entries(solved).forEach(([qId, data]) => {
    const resolved = resolveQuestionUnit(qId);
    if (!resolved) return;

    // Track skills category
    skillsStats[resolved.paperType].attempts += (data.attemptsCount || 1);
    if (data.isCorrect) {
      skillsStats[resolved.paperType].correct += 1;
    }

    // Check if belongs to current curriculum (or general track matching)
    if (unitStats[resolved.unitNumber]) {
      unitStats[resolved.unitNumber].totalAttempts += (data.attemptsCount || 1);
      if (data.isCorrect) {
        unitStats[resolved.unitNumber].correctAttempts += 1;
      } else {
        unitStats[resolved.unitNumber].mistakesCount += 1;
        if (resolved.lessonNum) {
          unitStats[resolved.unitNumber].mistakeLessons.push(resolved.lessonNum);
        }
      }
    }
  });

  // Augment with mistakes in Leitner inbox
  mistakes.forEach(m => {
    const resolved = resolveQuestionUnit(m.questionId);
    if (!resolved) return;

    if (unitStats[resolved.unitNumber]) {
      if (unitStats[resolved.unitNumber].mistakesCount === 0) {
        unitStats[resolved.unitNumber].mistakesCount += m.wrongCount || 1;
        unitStats[resolved.unitNumber].totalAttempts = Math.max(
          unitStats[resolved.unitNumber].totalAttempts,
          unitStats[resolved.unitNumber].mistakesCount
        );
      }
      if (resolved.lessonNum && !unitStats[resolved.unitNumber].mistakeLessons.includes(resolved.lessonNum)) {
        unitStats[resolved.unitNumber].mistakeLessons.push(resolved.lessonNum);
      }
    }
  });

  let grandTotalAttempts = 0;
  let grandTotalCorrect = 0;
  let grandTotalMistakes = 0;

  const diagnostics: TopicDiagnostic[] = activeCurriculum.topics.map(topic => {
    const stat = unitStats[topic.number] || {
      totalAttempts: 0,
      correctAttempts: 0,
      mistakesCount: 0,
      mistakeLessons: []
    };

    grandTotalAttempts += stat.totalAttempts;
    grandTotalCorrect += stat.correctAttempts;
    grandTotalMistakes += stat.mistakesCount;

    const hasAttempts = stat.totalAttempts > 0;
    const accuracy = hasAttempts ? Math.round((stat.correctAttempts / stat.totalAttempts) * 100) : 0;
    const weakness = hasAttempts ? Math.max(0, 100 - accuracy) : 0;

    let status: TopicDiagnostic['status'] = 'unassessed';
    if (hasAttempts) {
      if (accuracy >= 85 && stat.mistakesCount === 0) {
        status = 'mastered';
      } else if (accuracy >= 70) {
        status = 'proficient';
      } else if (accuracy >= 50) {
        status = 'moderate';
      } else {
        status = 'critical';
      }
    }

    const subtopics = topic.subtopics || [];
    // Identify most needed lesson for review
    let recLessonNum = 1;
    if (stat.mistakeLessons.length > 0) {
      // most frequent mistake lesson
      recLessonNum = stat.mistakeLessons[0];
    } else if (stat.mistakesCount > 0) {
      recLessonNum = Math.min(stat.mistakesCount + 1, Math.max(1, subtopics.length));
    }
    const recLessonTitle = subtopics[recLessonNum - 1] || 'Core Concepts & Principles';

    return {
      curriculumId: topic.number >= 4 && activeCurriculum.id === 'edexcel-alevel' ? 'edexcel-a2' : (topic.number <= 3 && activeCurriculum.id === 'edexcel-alevel' ? 'edexcel-as' : activeCurriculum.id),
      unitNumber: topic.number,
      unitTitle: topic.title,
      topicId: topic.id,
      totalAttempts: stat.totalAttempts,
      correctAttempts: stat.correctAttempts,
      mistakesCount: stat.mistakesCount,
      accuracyPercent: accuracy,
      weaknessPercent: weakness,
      status,
      recommendedLessonNum: recLessonNum,
      recommendedLessonTitle: recLessonTitle,
      subtopics
    };
  });

  // Top weak spots sorted by weakness percent descending
  const topWeakSpots = diagnostics
    .filter(d => d.totalAttempts > 0 && d.weaknessPercent > 0)
    .sort((a, b) => b.weaknessPercent - a.weaknessPercent);

  const overallAccuracy = grandTotalAttempts > 0 ? Math.round((grandTotalCorrect / grandTotalAttempts) * 100) : 0;
  
  // Readiness index weights overall accuracy and coverage of syllabus topics
  const assessedCount = diagnostics.filter(d => d.totalAttempts > 0).length;
  const coverageRatio = diagnostics.length > 0 ? (assessedCount / diagnostics.length) : 0;
  const readinessIndex = grandTotalAttempts > 0 
    ? Math.round((overallAccuracy * 0.7) + (coverageRatio * 100 * 0.3))
    : 0;

  const masteredUnitsCount = diagnostics.filter(d => d.status === 'mastered').length;
  const criticalUnitsCount = diagnostics.filter(d => d.status === 'critical').length;

  // Build skills breakdown items
  const skillsBreakdown: SkillCategoryBreakdown[] = [
    {
      category: 'mcq',
      label: 'Multiple Choice & Recall',
      icon: '🔘',
      totalAttempts: skillsStats.mcq.attempts,
      correctAttempts: skillsStats.mcq.correct,
      accuracyPercent: skillsStats.mcq.attempts > 0 ? Math.round((skillsStats.mcq.correct / skillsStats.mcq.attempts) * 100) : 0,
      status: skillsStats.mcq.attempts === 0 ? 'unassessed' : (skillsStats.mcq.correct / skillsStats.mcq.attempts >= 0.8 ? 'strong' : skillsStats.mcq.correct / skillsStats.mcq.attempts >= 0.6 ? 'moderate' : 'critical')
    },
    {
      category: 'practical',
      label: 'Core Practicals & Lab Techniques',
      icon: '🧪',
      totalAttempts: skillsStats.practical.attempts,
      correctAttempts: skillsStats.practical.correct,
      accuracyPercent: skillsStats.practical.attempts > 0 ? Math.round((skillsStats.practical.correct / skillsStats.practical.attempts) * 100) : 0,
      status: skillsStats.practical.attempts === 0 ? 'unassessed' : (skillsStats.practical.correct / skillsStats.practical.attempts >= 0.8 ? 'strong' : skillsStats.practical.correct / skillsStats.practical.attempts >= 0.6 ? 'moderate' : 'critical')
    },
    {
      category: 'structured',
      label: 'Structured & Written Calculations',
      icon: '📝',
      totalAttempts: skillsStats.structured.attempts,
      correctAttempts: skillsStats.structured.correct,
      accuracyPercent: skillsStats.structured.attempts > 0 ? Math.round((skillsStats.structured.correct / skillsStats.structured.attempts) * 100) : 0,
      status: skillsStats.structured.attempts === 0 ? 'unassessed' : (skillsStats.structured.correct / skillsStats.structured.attempts >= 0.8 ? 'strong' : skillsStats.structured.correct / skillsStats.structured.attempts >= 0.6 ? 'moderate' : 'critical')
    }
  ];

  return {
    overallAccuracy,
    readinessIndex,
    totalAttempts: grandTotalAttempts,
    totalMistakes: grandTotalMistakes,
    masteredUnitsCount,
    criticalUnitsCount,
    diagnostics,
    topWeakSpots,
    activeCurriculum,
    skillsBreakdown
  };
}
