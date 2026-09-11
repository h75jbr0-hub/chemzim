import { allCurricula } from '@/data/curriculum';
import { questionBank } from '@/data/exams';
import { curriculumRegistry } from '@/data/curriculum/registry';

export interface SearchResultItem {
  id: string;
  type: 'lesson' | 'unit' | 'question' | 'tool';
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  href: string;
  icon?: string;
}

export function searchKnowledgeBase(query: string, limit: number = 8): SearchResultItem[] {
  if (!query || !query.trim()) return [];

  const q = query.toLowerCase().trim();
  const results: SearchResultItem[] = [];

  // 1. Navigation / Fast Tools
  const tools: SearchResultItem[] = [
    {
      id: 'tool-mock-exam',
      type: 'tool',
      title: 'Mock Exam Simulator',
      subtitle: 'Timed IGCSE & A-Level authentic papers',
      badge: 'Simulator',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      href: '/dashboard/mock-exam',
      icon: '⏱️'
    },
    {
      id: 'tool-mistake-bank',
      type: 'tool',
      title: 'Mistake Bank & Spaced Review',
      subtitle: 'Review tricky questions scheduled with Leitner boxes',
      badge: 'Adaptive AI',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      href: '/dashboard/quizzes?mode=spaced',
      icon: '⚡'
    },
    {
      id: 'tool-worksheets',
      type: 'tool',
      title: 'Printable Worksheets Generator',
      subtitle: 'Create customizable PDF question papers & mark schemes',
      badge: 'Print/PDF',
      badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      href: '/dashboard/worksheet',
      icon: '🖨️'
    },
    {
      id: 'tool-quizzes-designer',
      type: 'tool',
      title: 'Practice Exam Designer',
      subtitle: 'Custom question bank filtering by topic and difficulty',
      badge: 'Exam Bank',
      badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
      href: '/dashboard/quizzes',
      icon: '🎯'
    }
  ];

  tools.forEach(tool => {
    if (tool.title.toLowerCase().includes(q) || tool.subtitle.toLowerCase().includes(q)) {
      results.push(tool);
    }
  });

  // 2. Curriculum Units & Subtopics
  for (const curr of allCurricula) {
    for (const topic of curr.topics) {
      const matchTopic = topic.title.toLowerCase().includes(q);
      const matchSubtopics = (topic.subtopics || []).some(sub => sub.toLowerCase().includes(q));

      if (matchTopic || matchSubtopics) {
        results.push({
          id: `unit-${curr.id}-${topic.id}`,
          type: 'unit',
          title: `Unit ${topic.number}: ${topic.title}`,
          subtitle: `${curr.title} • ${(topic.subtopics || []).slice(0, 3).join(', ')}`,
          badge: curr.code || 'Curriculum',
          badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
          href: `/dashboard/curriculum/${curr.id}/${topic.id}`,
          icon: '📚'
        });
      }
    }
  }

  // 3. Lessons in Curriculum Registry
  for (const [unitKey, lessonsMap] of Object.entries(curriculumRegistry)) {
    // e.g. cie-igcse-unit-1
    const match = unitKey.match(/^(cie-igcse|edexcel-alevel)-unit-(\d+)$/);
    if (!match) continue;
    const curriculumId = match[1];
    const unitNum = parseInt(match[2], 10);

    // Resolve matching curriculum topic to get correct topicId
    const curr = allCurricula.find(c => c.id.startsWith(curriculumId)) || allCurricula[0];
    const topic = curr.topics.find(t => t.number === unitNum);
    const topicId = topic ? topic.id : `unit-${unitNum}`;

    for (const [lessonNumStr, lessonItem] of Object.entries(lessonsMap)) {
      const lessonNum = parseInt(lessonNumStr, 10);
      const matchTitle = lessonItem.title.toLowerCase().includes(q);
      const matchParts = (lessonItem.parts || []).some(p => 
        p.title.toLowerCase().includes(q) || 
        (p.keyPoints && p.keyPoints.some(kp => kp.toLowerCase().includes(q)))
      );

      if (matchTitle || matchParts) {
        results.push({
          id: `lesson-${unitKey}-${lessonNum}`,
          type: 'lesson',
          title: lessonItem.title,
          subtitle: `Unit ${unitNum} • Lesson ${lessonNum} (${curr.title})`,
          badge: `Lesson ${lessonNum}`,
          badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
          href: `/dashboard/curriculum/${curriculumId}/${topicId}?lesson=${lessonNum}`,
          icon: '🧪'
        });
      }
    }
  }

  // 4. Questions in Question Bank (matching prompts)
  for (const question of questionBank) {
    if (results.length >= limit * 2) break;
    if (question.question && question.question.toLowerCase().includes(q)) {
      const cleanPrompt = question.question
        .replace(/\$+/g, '')
        .replace(/\n+/g, ' ')
        .slice(0, 70);

      const levelLabel = question.level === 3 ? 'Hard' : question.level === 2 ? 'Medium' : 'Easy';
      const levelBadgeColor = question.level === 3 
        ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' 
        : question.level === 2 
        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' 
        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';

      results.push({
        id: `q-${question.id}`,
        type: 'question',
        title: `${cleanPrompt}...`,
        subtitle: `Exam Question • Level: ${levelLabel} • ${question.curriculum || 'Chemistry'}`,
        badge: levelLabel,
        badgeColor: levelBadgeColor,
        href: `/dashboard/quizzes`,
        icon: '❓'
      });
    }
  }

  // Deduplicate and slice
  const seen = new Set<string>();
  const finalResults: SearchResultItem[] = [];
  for (const item of results) {
    if (!seen.has(item.id)) {
      seen.add(item.id);
      finalResults.push(item);
    }
    if (finalResults.length >= limit) break;
  }

  return finalResults;
}
