'use client';

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Trophy, ArrowLeft, Clock, CheckCircle2, XCircle, AlertCircle, 
  ChevronRight, ChevronLeft, Sparkles, Award, BarChart2, Lock, 
  BookOpen, Check, X, Flag, LayoutGrid, ShieldAlert, Maximize2, 
  Minimize2, RefreshCw, AlertTriangle, ExternalLink, HelpCircle, Printer
} from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { sanitizeKatex } from '@/lib/katex-sanitizer';

import { useAuth } from '@/contexts/AuthContext';
import { useGamification } from '@/contexts/GamificationContext';
import { allCurricula } from '@/data/curriculum';
import { examsRegistry, questionBank, Question } from '@/data/exams';
import { EXAM_PROFILES, ExamPaperProfile, calculateGrade } from '@/data/exams/grade-boundaries';
import { PeriodicTableModal } from '@/components/exam-simulator/PeriodicTableModal';
import { ProctorWarningModal } from '@/components/exam-simulator/ProctorWarningModal';
import { ExamReportCard } from '@/components/exam-simulator/ExamReportCard';
import { PrintExamModal } from '@/components/exam-simulator/PrintExamModal';
import { evaluateWrittenAnswer, MarkingEvaluationResult } from '@/lib/keyword-evaluator';
import InteractiveGraphPlotter from '@/components/InteractiveGraphPlotter';
import InteractiveScaleReader from '@/components/InteractiveScaleReader';
import SelfMarkingRubric from '@/components/SelfMarkingRubric';

type ExamPhase = 'SELECT' | 'CONFIRM_RULES' | 'EXAM' | 'REPORT' | 'REVIEW';

export default function MockExamPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { addXP, saveQuestionAttempts } = useGamification();

  // Selected paper profile
  const [selectedProfileId, setSelectedProfileId] = useState<string>('cie-0620-p2');
  const activeProfile: ExamPaperProfile = EXAM_PROFILES[selectedProfileId] || EXAM_PROFILES['cie-0620-p2'];

  // Exam phase
  const [phase, setPhase] = useState<ExamPhase>('SELECT');

  // Exam Questions & Responses (both MCQ and Written)
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [writtenAnswers, setWrittenAnswers] = useState<Record<number, string>>({});
  const [writtenEvaluations, setWrittenEvaluations] = useState<Record<number, MarkingEvaluationResult>>({});
  const [flaggedIndices, setFlaggedIndices] = useState<Set<number>>(new Set());

  // Timer state
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState<number>(0);
  const examStartTimestamp = useRef<number>(0);

  // Proctoring / Anti-Cheat state
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [strikes, setStrikes] = useState<number>(0);
  const [warningModalOpen, setWarningModalOpen] = useState<boolean>(false);
  const [warningType, setWarningType] = useState<'tab-switch' | 'fullscreen-exit' | 'blur'>('tab-switch');
  const [wasTerminated, setWasTerminated] = useState<boolean>(false);
  const MAX_STRIKES = 3;

  // Modals
  const [periodicTableOpen, setPeriodicTableOpen] = useState<boolean>(false);
  const [paletteOpen, setPaletteOpen] = useState<boolean>(false);
  const [finishConfirmOpen, setFinishConfirmOpen] = useState<boolean>(false);
  const [printModalOpen, setPrintModalOpen] = useState<boolean>(false);

  // Filter profiles based on student enrollment, or show all for admin
  const availableProfiles = useMemo(() => {
    if (!user) return Object.values(EXAM_PROFILES);
    if (user.isAdmin) return Object.values(EXAM_PROFILES);

    const enrolled = (user.enrolledTracks && user.enrolledTracks.length > 0)
      ? user.enrolledTracks.map(t => t.toLowerCase().trim())
      : [(user.track || user.grade || '').toLowerCase().trim()];

    const filtered = Object.values(EXAM_PROFILES).filter(profile => {
      return enrolled.some(e => {
        if (e === 'cie-igcse' || e === 'igcse' || e === 'cie') return profile.curriculumTrack === 'cie-igcse';
        if (e.includes('edexcel-a2') || e.includes('a2')) return profile.curriculumTrack === 'edexcel-a2';
        if (e.includes('edexcel-as') || e.includes('edexcel')) return profile.curriculumTrack === 'edexcel-as';
        return profile.curriculumTrack === e;
      });
    });

    return filtered.length > 0 ? filtered : Object.values(EXAM_PROFILES);
  }, [user]);

  // Detect student's primary track to auto-select best default paper
  useEffect(() => {
    if (availableProfiles.length > 0) {
      setSelectedProfileId(availableProfiles[0].id);
    }
  }, [availableProfiles]);

  // Math renderer helper
  const renderTextWithMath = (text: string): React.ReactNode => {
    if (!text) return null;
    
    if (text.includes('$$')) {
      const parts = text.split('$$');
      return (
        <React.Fragment>
          {parts.map((part, i) => (
            i % 2 === 1 ? <BlockMath key={i} math={sanitizeKatex(part)} /> : <span key={i}>{renderTextWithMath(part)}</span>
          ))}
        </React.Fragment>
      );
    }

    if (text.includes('$')) {
      const parts = text.split('$');
      return (
        <React.Fragment>
          {parts.map((part, i) => (
            i % 2 === 1 ? <InlineMath key={i} math={sanitizeKatex(part)} /> : <span key={i}>{part}</span>
          ))}
        </React.Fragment>
      );
    }
    
    return text;
  };

  // Filter tab state
  const [activeTab, setActiveTab] = useState<'all' | 'oct2026' | 'june2026' | 'jan2026' | 'oct2025' | 'june2025' | 'jan2025' | 'specimen' | 'edexcel-as' | 'edexcel-a2' | 'cambridge' | 'cie-2025' | 'cie-2024' | 'cie-2023'>('all');

  // Filtered profiles for current tab
  const displayedProfiles = useMemo(() => {
    return availableProfiles.filter(profile => {
      if (activeTab === 'all') return true;
      if (activeTab === 'oct2026') return profile.id.includes('oct2026');
      if (activeTab === 'june2026') return profile.id.includes('june2026');
      if (activeTab === 'jan2026') return profile.id.includes('jan2026');
      if (activeTab === 'oct2025') return profile.id.includes('oct2025');
      if (activeTab === 'june2025') return profile.id.includes('june2025');
      if (activeTab === 'jan2025') return profile.id.includes('jan2025');
      if (activeTab === 'specimen') return profile.id.includes('specimen');
      if (activeTab === 'cie-2025') return profile.id.includes('cie') && profile.id.includes('2025');
      if (activeTab === 'cie-2024') return profile.id.includes('cie') && profile.id.includes('2024');
      if (activeTab === 'cie-2023') return profile.id.includes('cie') && profile.id.includes('2023');
      if (activeTab === 'edexcel-as') return profile.board === 'edexcel' && profile.curriculumTrack === 'edexcel-as';
      if (activeTab === 'edexcel-a2') return profile.board === 'edexcel' && profile.curriculumTrack === 'edexcel-a2';
      if (activeTab === 'cambridge') return profile.board === 'cambridge';
      return true;
    });
  }, [availableProfiles, activeTab]);

  // Build question pool matching the chosen profile
  const generateExamQuestions = useCallback((profile: ExamPaperProfile): Question[] => {
    let pool: Question[] = [];

    if (profile.board === 'cambridge') {
      const cieQuestions = questionBank.filter(q => 
        q.curriculum === 'igcse' || q.curriculum === 'cie-igcse' || (q.source && q.source.toLowerCase().includes('cambridge'))
      );

      const isJune2025 = profile.id.includes('june2025');
      const isJune2024 = profile.id.includes('june2024');
      const isJune2023 = profile.id.includes('june2023');

      if (profile.paperType === 'structured') {
        let structuredPool = cieQuestions.filter(q => q.paperType === 'structured' || (q.source && (q.source.includes('Paper 4') || q.source.includes('Paper 3') || q.source.includes('0620/4') || q.source.includes('0620/3'))));
        if (isJune2025) {
          const y25 = structuredPool.filter(q => q.id.includes('2025') || (q.source && q.source.includes('2025')));
          if (y25.length >= 5) structuredPool = y25;
        }
        pool = structuredPool.length >= 5 ? structuredPool : cieQuestions;
      } else if (profile.paperType === 'practical') {
        let practicalPool = cieQuestions.filter(q => q.paperType === 'practical' || (q.source && (q.source.includes('Paper 6') || q.source.includes('0620/6'))));
        if (isJune2025) {
          const y25 = practicalPool.filter(q => q.id.includes('2025') || (q.source && q.source.includes('2025')));
          if (y25.length >= 5) practicalPool = y25;
        }
        pool = practicalPool.length >= 5 ? practicalPool : cieQuestions;
      } else if (isJune2025) {
        const y25Questions = cieQuestions.filter(q => q.id.includes('2025') || (q.source && q.source.includes('2025')));
        const nonY25 = cieQuestions.filter(q => !q.id.includes('2025') && (!q.source || !q.source.includes('2025')));
        const shuffledNon = [...nonY25].sort(() => Math.random() - 0.5);
        const needed = Math.max(0, profile.defaultQuestionCount - y25Questions.length);
        pool = [...y25Questions, ...shuffledNon.slice(0, needed)];
      } else if (isJune2024) {
        const y24Questions = cieQuestions.filter(q => q.id.includes('2024') || (q.source && q.source.includes('2024')));
        const nonY24 = cieQuestions.filter(q => !q.id.includes('2024') && (!q.source || !q.source.includes('2024')));
        const shuffledNon = [...nonY24].sort(() => Math.random() - 0.5);
        const needed = Math.max(0, profile.defaultQuestionCount - y24Questions.length);
        pool = [...y24Questions, ...shuffledNon.slice(0, needed)];
      } else if (isJune2023) {
        const y23Questions = cieQuestions.filter(q => q.id.includes('2023') || (q.source && q.source.includes('2023')));
        const nonY23 = cieQuestions.filter(q => !q.id.includes('2023') && (!q.source || !q.source.includes('2023')));
        const shuffledNon = [...nonY23].sort(() => Math.random() - 0.5);
        const needed = Math.max(0, profile.defaultQuestionCount - y23Questions.length);
        pool = [...y23Questions, ...shuffledNon.slice(0, needed)];
      } else {
        // MCQ (Paper 1 / Paper 2 general mock)
        const mcqPool = cieQuestions.filter(q => !q.paperType || q.paperType === 'mcq' || (q.source && (q.source.includes('Paper 2') || q.source.includes('Paper 1') || q.source.includes('0620/2') || q.source.includes('0620/1'))));
        pool = mcqPool.length >= profile.defaultQuestionCount ? mcqPool : cieQuestions;
      }
    } else {
      // Edexcel
      const isOct2026 = profile.id.includes('oct2026');
      const isJune2026 = profile.id.includes('june2026');
      const isJan2026 = profile.id.includes('jan2026');
      const isOct2025 = profile.id.includes('oct2025');
      const isJune2025 = profile.id.includes('june2025');
      const isJan2025 = profile.id.includes('jan2025');
      const isSpecimen = profile.id.includes('specimen');
      let targetUnit = '';
      if (profile.id.includes('u1')) targetUnit = 'edexcel-unit-1';
      else if (profile.id.includes('u2')) targetUnit = 'edexcel-unit-2';
      else if (profile.id.includes('u3')) targetUnit = 'edexcel-unit-3';
      else if (profile.id.includes('u4')) targetUnit = 'edexcel-unit-4';
      else if (profile.id.includes('u5')) targetUnit = 'edexcel-unit-5';
      else if (profile.id.includes('u6')) targetUnit = 'edexcel-unit-6';

      const isA2 = profile.id === 'edexcel-ial-a2' || targetUnit === 'edexcel-unit-4' || targetUnit === 'edexcel-unit-5' || targetUnit === 'edexcel-unit-6';

      let unitQuestions = questionBank.filter(q => {
        const isEdx = q.curriculum?.includes('edexcel') || (q.source && q.source.toLowerCase().includes('edexcel'));
        if (!isEdx) return false;
        if (targetUnit) {
          return q.topic === targetUnit || q.topic?.includes(targetUnit);
        }
        if (isA2) {
          return q.topic?.includes('unit-4') || q.topic?.includes('unit-5') || q.topic?.includes('unit-6');
        }
        return q.topic?.includes('unit-1') || q.topic?.includes('unit-2') || q.topic?.includes('unit-3') || q.curriculum === 'edexcel-as';
      });

      if (profile.paperType === 'practical') {
        const practicalOnly = unitQuestions.filter(q => q.paperType === 'practical' || (q.source && (q.source.includes('WCH13') || q.source.includes('WCH16') || q.source.toLowerCase().includes('practical'))));
        if (practicalOnly.length >= 10) {
          unitQuestions = practicalOnly;
        }
      }

      if (isOct2026) {
        const oct26Questions = unitQuestions.filter(q => q.source && q.source.includes('Oct 2026'));
        const nonOct26Questions = unitQuestions.filter(q => !q.source || !q.source.includes('Oct 2026'));
        const shuffledNon = [...nonOct26Questions].sort(() => Math.random() - 0.5);
        const needed = Math.max(0, profile.defaultQuestionCount - oct26Questions.length);
        const combined = [...oct26Questions, ...shuffledNon.slice(0, needed)];
        pool = combined.length > 0 ? combined : unitQuestions;
      } else if (isSpecimen) {
        const specQuestions = unitQuestions.filter(q => q.source && (q.source.includes('Specimen') || q.source.includes('Sample')));
        const nonSpecQuestions = unitQuestions.filter(q => !q.source || (!q.source.includes('Specimen') && !q.source.includes('Sample')));
        const shuffledNon = [...nonSpecQuestions].sort(() => Math.random() - 0.5);
        const needed = Math.max(0, profile.defaultQuestionCount - specQuestions.length);
        const combined = [...specQuestions, ...shuffledNon.slice(0, needed)];
        pool = combined.length > 0 ? combined : unitQuestions;
      } else if (isJan2025) {
        const jan25Questions = unitQuestions.filter(q => q.source && q.source.includes('Jan 2025'));
        const nonJan25Questions = unitQuestions.filter(q => !q.source || !q.source.includes('Jan 2025'));
        const shuffledNon = [...nonJan25Questions].sort(() => Math.random() - 0.5);
        const needed = Math.max(0, profile.defaultQuestionCount - jan25Questions.length);
        const combined = [...jan25Questions, ...shuffledNon.slice(0, needed)];
        pool = combined.length > 0 ? combined : unitQuestions;
      } else if (isJune2025) {
        const june25Questions = unitQuestions.filter(q => q.source && q.source.includes('June 2025'));
        const nonJune25Questions = unitQuestions.filter(q => !q.source || !q.source.includes('June 2025'));
        const shuffledNon = [...nonJune25Questions].sort(() => Math.random() - 0.5);
        const needed = Math.max(0, profile.defaultQuestionCount - june25Questions.length);
        const combined = [...june25Questions, ...shuffledNon.slice(0, needed)];
        pool = combined.length > 0 ? combined : unitQuestions;
      } else if (isOct2025) {
        const octQuestions = unitQuestions.filter(q => q.source && q.source.includes('Oct 2025'));
        const nonOctQuestions = unitQuestions.filter(q => !q.source || !q.source.includes('Oct 2025'));
        const shuffledNonOct = [...nonOctQuestions].sort(() => Math.random() - 0.5);
        const needed = Math.max(0, profile.defaultQuestionCount - octQuestions.length);
        const combined = [...octQuestions, ...shuffledNonOct.slice(0, needed)];
        pool = combined.length > 0 ? combined : unitQuestions;
      } else if (isJan2026) {
        const janQuestions = unitQuestions.filter(q => q.source && q.source.includes('Jan 2026'));
        const nonJanQuestions = unitQuestions.filter(q => !q.source || !q.source.includes('Jan 2026'));
        const shuffledNonJan = [...nonJanQuestions].sort(() => Math.random() - 0.5);
        const needed = Math.max(0, profile.defaultQuestionCount - janQuestions.length);
        const combined = [...janQuestions, ...shuffledNonJan.slice(0, needed)];
        pool = combined.length > 0 ? combined : unitQuestions;
      } else if (isJune2026) {
        const juneQuestions = unitQuestions.filter(q => q.source && q.source.includes('June 2026'));
        const nonJuneQuestions = unitQuestions.filter(q => !q.source || !q.source.includes('June 2026'));
        const shuffledNonJune = [...nonJuneQuestions].sort(() => Math.random() - 0.5);
        const needed = Math.max(0, profile.defaultQuestionCount - juneQuestions.length);
        const combined = [...juneQuestions, ...shuffledNonJune.slice(0, needed)];
        pool = combined.length > 0 ? combined : unitQuestions;
      } else {
        pool = unitQuestions.length >= profile.defaultQuestionCount 
          ? unitQuestions 
          : questionBank.filter(q => q.curriculum?.includes('edexcel') || q.curriculum === 'igcse');
      }
    }

    if (profile.id.includes('oct2026') || profile.id.includes('june2026') || profile.id.includes('jan2026') || profile.id.includes('oct2025') || profile.id.includes('june2025') || profile.id.includes('jan2025') || profile.id.includes('specimen')) {
      return [...pool].sort(() => Math.random() - 0.5);
    }

    // Shuffle and pick desired count
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(profile.defaultQuestionCount, shuffled.length));
  }, []);

  // Request fullscreen
  const requestFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      }
    } catch (err) {
      console.warn('Fullscreen request bypassed or denied:', err);
    }
  };

  // Exit fullscreen
  const exitFullscreen = async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.warn('Exit fullscreen error:', err);
    }
  };

  // Start Exam after Rules Confirmation
  const handleStartExam = async () => {
    const examQuestions = generateExamQuestions(activeProfile);
    if (examQuestions.length === 0) {
      alert("No questions found for this exam profile. Please choose another paper.");
      return;
    }

    setQuestions(examQuestions);
    setAnswers({});
    setFlaggedIndices(new Set());
    setCurrentIndex(0);
    setStrikes(0);
    setWasTerminated(false);
    setSecondsRemaining(activeProfile.durationMinutes * 60);
    examStartTimestamp.current = Date.now();

    await requestFullscreen();
    setPhase('EXAM');
  };

  // Anti-cheat: Visibility change (Tab switch / minimize)
  useEffect(() => {
    if (phase !== 'EXAM') return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setStrikes(prev => {
          const nextStrikes = prev + 1;
          setWarningType('tab-switch');
          setWarningModalOpen(true);
          if (nextStrikes >= MAX_STRIKES) {
            handleForceSubmitOnViolation();
          }
          return nextStrikes;
        });
      }
    };

    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!document.fullscreenElement;
      setIsFullscreen(isCurrentlyFullscreen);
      if (!isCurrentlyFullscreen && phase === 'EXAM') {
        setStrikes(prev => {
          const nextStrikes = prev + 1;
          setWarningType('fullscreen-exit');
          setWarningModalOpen(true);
          if (nextStrikes >= MAX_STRIKES) {
            handleForceSubmitOnViolation();
          }
          return nextStrikes;
        });
      }
    };

    // Keyboard shortcut suppression (Ctrl+C, Ctrl+V, F12, etc.)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 't' || e.key === 'w' || e.key === 'u')) ||
        e.key === 'F12'
      ) {
        e.preventDefault();
      }
    };

    // Right-click context menu suppression
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [phase]);

  // Exam Countdown Timer
  useEffect(() => {
    if (phase !== 'EXAM' || secondsRemaining <= 0) return;

    const interval = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinishExam(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [phase, secondsRemaining]);

  // Finish exam and compute score
  const handleFinishExam = (isTimeout: boolean = false) => {
    setFinishConfirmOpen(false);
    setPaletteOpen(false);
    setWarningModalOpen(false);
    exitFullscreen();

    const elapsed = Math.floor((Date.now() - examStartTimestamp.current) / 1000);
    setTimeSpentSeconds(elapsed);

    // Evaluate all structured/practical written questions against official marking scheme
    const evaluations: Record<number, MarkingEvaluationResult> = {};
    questions.forEach((q, idx) => {
      const isWritten = q.paperType === 'structured' || q.paperType === 'practical' || !!q.markingScheme;
      if (isWritten && q.markingScheme) {
        const studentText = writtenAnswers[idx] || '';
        evaluations[idx] = evaluateWrittenAnswer(studentText, q.markingScheme);
      }
    });
    setWrittenEvaluations(evaluations);

    // Save questions attempts to Gamification
    let earnedXP = 0;
    const finalAttempts = questions.map((q, idx) => {
      const isWritten = q.paperType === 'structured' || q.paperType === 'practical' || !!q.markingScheme;
      let isCorrect = false;

      if (isWritten && evaluations[idx]) {
        isCorrect = evaluations[idx].awardedMarks > 0;
        earnedXP += evaluations[idx].awardedMarks * 10;
      } else {
        const selected = answers[idx];
        isCorrect = selected !== undefined && selected === q.correctAnswer;
        if (isCorrect) earnedXP += 20;
      }

      return {
        questionId: q.id,
        difficulty: q.level || 2,
        isCorrect
      };
    });

    if (earnedXP > 0) {
      addXP(earnedXP);
    }
    saveQuestionAttempts(finalAttempts);

    setPhase('REPORT');
  };

  const handleForceSubmitOnViolation = () => {
    setWasTerminated(true);
    handleFinishExam(false);
  };

  // Score computation: handles both MCQ marks and evaluated written marks
  const totalScore = useMemo(() => {
    return questions.reduce((acc, q, idx) => {
      const isWritten = q.paperType === 'structured' || q.paperType === 'practical' || !!q.markingScheme;
      if (isWritten) {
        return acc + (writtenEvaluations[idx]?.awardedMarks || 0);
      }
      return answers[idx] === q.correctAnswer ? acc + 1 : acc;
    }, 0);
  }, [questions, answers, writtenEvaluations]);

  // Maximum possible marks on the paper
  const totalPossibleMarks = useMemo(() => {
    return questions.reduce((acc, q) => {
      if (q.markingScheme?.marks) return acc + q.markingScheme.marks;
      return acc + 1;
    }, 0);
  }, [questions]);

  // Syllabus topic performance calculation
  const topicBreakdown = useMemo(() => {
    const stats: Record<string, { correct: number; total: number }> = {};
    questions.forEach((q, idx) => {
      const topicName = (q.topic || 'General Chemistry').replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());
      if (!stats[topicName]) {
        stats[topicName] = { correct: 0, total: 0 };
      }
      const isWritten = q.paperType === 'structured' || q.paperType === 'practical' || !!q.markingScheme;
      const qMax = q.markingScheme?.marks || 1;
      stats[topicName].total += qMax;

      if (isWritten) {
        stats[topicName].correct += writtenEvaluations[idx]?.awardedMarks || 0;
      } else if (answers[idx] === q.correctAnswer) {
        stats[topicName].correct += 1;
      }
    });

    return Object.entries(stats).map(([topic, data]) => ({
      topic,
      correct: data.correct,
      total: data.total,
      percentage: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0
    }));
  }, [questions, answers, writtenEvaluations]);

  // Current question data
  const currentQ = questions[currentIndex];
  const isCurrentQWritten = currentQ ? (currentQ.paperType === 'structured' || currentQ.paperType === 'practical' || !!currentQ.markingScheme) : false;
  const answeredCount = useMemo(() => {
    return questions.reduce((count, q, idx) => {
      const isWritten = q.paperType === 'structured' || q.paperType === 'practical' || !!q.markingScheme;
      if (isWritten) {
        return (writtenAnswers[idx] && writtenAnswers[idx].trim().length > 0) ? count + 1 : count;
      }
      return answers[idx] !== undefined ? count + 1 : count;
    }, 0);
  }, [questions, answers, writtenAnswers]);
  const unansweredCount = questions.length - answeredCount;

  // Pacing clock formatting
  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-white font-sans selection:bg-indigo-500/30 selection:text-white">
      
      {/* ========================================================================= */}
      {/* PHASE 1: PAPER SELECTION                                                  */}
      {/* ========================================================================= */}
      {phase === 'SELECT' && (
        <div className="w-full max-w-5xl mx-auto px-4 py-10 space-y-10 animate-in fade-in duration-300">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/5 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-full">
                  Official Exam Simulator
                </span>
                <span className="text-[10px] font-bold px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full">
                  Strict Proctoring Mode
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Authentic Mock Paper Simulator
              </h1>
              <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                Experience the real Pearson Edexcel and Cambridge IGCSE examination conditions with timed papers, strict screen-lock, and official Grade Boundaries calculation.
              </p>
            </div>

            <Link
              href="/dashboard/quizzes"
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-bold transition-all flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Practice Bank</span>
            </Link>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-2">
            {[
              { id: 'all', label: 'All Papers' },
              { id: 'cie-2025', label: '🏛️ CIE June 2025', highlightCie25: true },
              { id: 'cie-2024', label: '🏛️ CIE June 2024', highlightCie24: true },
              { id: 'cie-2023', label: '🏛️ CIE June 2023', highlightCie23: true },
              { id: 'oct2026', label: '🍁 Oct 2026 Series', highlightOct26: true },
              { id: 'june2026', label: '✨ June 2026 Series', highlightJune: true },
              { id: 'jan2026', label: '❄️ Jan 2026 Series', highlightJan: true },
              { id: 'oct2025', label: '🍂 Oct 2025 Series', highlightOct: true },
              { id: 'june2025', label: '☀️ June 2025 Series', highlightJune25: true },
              { id: 'jan2025', label: '🧊 Jan 2025 Series', highlightJan25: true },
              { id: 'specimen', label: '📜 Specimen Papers', highlightSpecimen: true },
              { id: 'cambridge', label: 'Cambridge IGCSE (All)' },
              { id: 'edexcel-as', label: 'Pearson Edexcel AS' },
              { id: 'edexcel-a2', label: 'Pearson Edexcel A2' },
            ].map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? (tab as any).highlightCie25
                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-lg shadow-emerald-500/20'
                        : (tab as any).highlightCie24
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                        : (tab as any).highlightCie23
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20'
                        : tab.highlightOct26
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/20'
                        : tab.highlightJune
                        ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg shadow-rose-500/20'
                        : tab.highlightJan
                        ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/20'
                        : tab.highlightOct
                        ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/20'
                        : tab.highlightJune25
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20'
                        : tab.highlightJan25
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                        : tab.highlightSpecimen
                        ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/20'
                        : 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                      : (tab as any).highlightCie25
                      ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/20'
                      : (tab as any).highlightCie24
                      ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/20'
                      : (tab as any).highlightCie23
                      ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20'
                      : tab.highlightOct26
                      ? 'bg-orange-500/10 text-orange-300 border border-orange-500/20 hover:bg-orange-500/20'
                      : tab.highlightJune
                      ? 'bg-rose-500/10 text-rose-300 border border-rose-500/20 hover:bg-rose-500/20'
                      : tab.highlightJan
                      ? 'bg-sky-500/10 text-sky-300 border border-sky-500/20 hover:bg-sky-500/20'
                      : tab.highlightOct
                      ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20 hover:bg-amber-500/20'
                      : tab.highlightJune25
                      ? 'bg-teal-500/10 text-teal-300 border border-teal-500/20 hover:bg-teal-500/20'
                      : tab.highlightJan25
                      ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/20'
                      : tab.highlightSpecimen
                      ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/20'
                      : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {tab.id === 'june2026' && <Sparkles className="w-3.5 h-3.5 text-amber-300" />}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Exam Profiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedProfiles.map(profile => {
              const isSelected = selectedProfileId === profile.id;
              const isCambridge = profile.board === 'cambridge';
              const isOct2026 = profile.id.includes('oct2026');
              const isJune2026 = profile.id.includes('june2026');
              const isJan2026 = profile.id.includes('jan2026');
              const isOct2025 = profile.id.includes('oct2025');
              const isJune2025 = profile.id.includes('june2025');
              const isJan2025 = profile.id.includes('jan2025');
              const isSpecimen = profile.id.includes('specimen');

              return (
                <div
                  key={profile.id}
                  onClick={() => setSelectedProfileId(profile.id)}
                  className={`relative p-6 md:p-8 rounded-3xl border text-left cursor-pointer transition-all duration-300 flex flex-col justify-between h-80 ${
                    isSelected
                      ? profile.id.includes('cie') && profile.id.includes('2025')
                        ? 'bg-gradient-to-br from-emerald-950/40 via-[#0a201c] to-[#070b14] border-emerald-500/50 shadow-2xl shadow-emerald-500/15 ring-2 ring-emerald-500/30'
                        : profile.id.includes('cie') && profile.id.includes('2024')
                        ? 'bg-gradient-to-br from-cyan-950/40 via-[#081e2b] to-[#070b14] border-cyan-500/50 shadow-2xl shadow-cyan-500/15 ring-2 ring-cyan-500/30'
                        : profile.id.includes('cie') && profile.id.includes('2023')
                        ? 'bg-gradient-to-br from-blue-950/40 via-[#0a1832] to-[#070b14] border-blue-500/50 shadow-2xl shadow-blue-500/15 ring-2 ring-blue-500/30'
                        : isOct2026
                        ? 'bg-gradient-to-br from-orange-950/40 via-[#20100a] to-[#070b14] border-orange-500/50 shadow-2xl shadow-orange-500/15 ring-2 ring-orange-500/30'
                        : isJan2026
                        ? 'bg-gradient-to-br from-sky-950/40 via-[#0a1832] to-[#070b14] border-sky-500/50 shadow-2xl shadow-sky-500/15 ring-2 ring-sky-500/30'
                        : isJan2025
                        ? 'bg-gradient-to-br from-cyan-950/40 via-[#081e2b] to-[#070b14] border-cyan-500/50 shadow-2xl shadow-cyan-500/15 ring-2 ring-cyan-500/30'
                        : isOct2025
                        ? 'bg-gradient-to-br from-amber-950/40 via-[#1e140a] to-[#070b14] border-amber-500/50 shadow-2xl shadow-amber-500/15 ring-2 ring-amber-500/30'
                        : isJune2025
                        ? 'bg-gradient-to-br from-teal-950/40 via-[#0a201c] to-[#070b14] border-teal-500/50 shadow-2xl shadow-teal-500/15 ring-2 ring-teal-500/30'
                        : isJune2026
                        ? 'bg-gradient-to-br from-rose-950/40 via-[#161028] to-[#070b14] border-rose-500/50 shadow-2xl shadow-rose-500/15 ring-2 ring-rose-500/30'
                        : isSpecimen
                        ? 'bg-gradient-to-br from-purple-950/40 via-[#180a2b] to-[#070b14] border-purple-500/50 shadow-2xl shadow-purple-500/15 ring-2 ring-purple-500/30'
                        : 'bg-gradient-to-br from-indigo-950/40 via-[#0d1428] to-[#070b14] border-indigo-500/50 shadow-2xl shadow-indigo-500/10 ring-2 ring-indigo-500/30'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                  }`}
                >
                  {/* Top Bar with Badges */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold border ${
                        isCambridge
                          ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300'
                          : isOct2026
                          ? 'bg-orange-500/10 border-orange-500/30 text-orange-300'
                          : isOct2025
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                          : isJan2026
                          ? 'bg-sky-500/10 border-sky-500/30 text-sky-300'
                          : isJan2025
                          ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300'
                          : isJune2025
                          ? 'bg-teal-500/10 border-teal-500/30 text-teal-300'
                          : isJune2026
                          ? 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                          : isSpecimen
                          ? 'bg-purple-500/10 border-purple-500/30 text-purple-300'
                          : 'bg-purple-500/10 border-purple-500/30 text-purple-300'
                      }`}>
                        {isCambridge ? '🏛️' : isOct2026 ? '🍁' : isSpecimen ? '📜' : isOct2025 ? '🍂' : isJan2026 ? '❄️' : isJan2025 ? '🧊' : isJune2025 ? '☀️' : isJune2026 ? '🌟' : '🎓'}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider block">
                            {profile.paperCode}
                          </span>
                          {profile.id.includes('cie') && profile.id.includes('2025') && (
                            <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
                              June 2025 Series
                            </span>
                          )}
                          {profile.id.includes('cie') && profile.id.includes('2024') && (
                            <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300">
                              June 2024 Series
                            </span>
                          )}
                          {profile.id.includes('cie') && profile.id.includes('2023') && (
                            <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300">
                              June 2023 Series
                            </span>
                          )}
                          {isOct2026 && (
                            <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300">
                              Oct 2026
                            </span>
                          )}
                          {isJan2025 && (
                            <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300">
                              Jan 2025
                            </span>
                          )}
                          {isJune2025 && (
                            <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300">
                              June 2025
                            </span>
                          )}
                          {isOct2025 && (
                            <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300">
                              Oct 2025
                            </span>
                          )}
                          {isJan2026 && (
                            <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-300">
                              Jan 2026
                            </span>
                          )}
                          {isJune2026 && (
                            <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300">
                              June 2026
                            </span>
                          )}
                          {isSpecimen && (
                            <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300">
                              Specimen
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-white">{profile.title}</h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {profile.paperType && (
                        <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full border ${
                          profile.paperType === 'structured' 
                            ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' 
                            : profile.paperType === 'practical'
                            ? 'bg-purple-500/10 border-purple-500/30 text-purple-400'
                            : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                        }`}>
                          {profile.paperType === 'structured' ? '📝 Theory / Written' : profile.paperType === 'practical' ? '🧪 Practical Skills' : '🔘 MCQ'}
                        </span>
                      )}
                      <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        {profile.gradeScale === 'numbers' ? '9–1 Scale' : 'A*–U Scale'}
                      </span>
                    </div>
                  </div>

                  {/* Middle: Details */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-slate-200">{profile.paperName}</h4>
                    <p className="text-xs text-slate-400 line-clamp-2">{profile.instructions[0]}</p>
                    
                    <div className="flex items-center gap-4 pt-2 text-xs font-semibold text-slate-300">
                      <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                        <Clock className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{profile.durationMinutes} Minutes</span>
                      </span>
                      <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                        <Trophy className="w-3.5 h-3.5 text-amber-400" />
                        <span>{profile.defaultQuestionCount} Questions</span>
                      </span>
                    </div>
                  </div>

                  {/* Bottom: Select indicator */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      {profile.id.includes('cie') && profile.id.includes('2025') ? 'Official Cambridge June 2025 Exam Series' : profile.id.includes('cie') && profile.id.includes('2024') ? 'Official Cambridge June 2024 Exam Series' : profile.id.includes('cie') && profile.id.includes('2023') ? 'Official Cambridge June 2023 Exam Series' : isCambridge ? 'Cambridge International Standards' : isOct2026 ? 'Autumn 2026 Examination Series' : isSpecimen ? 'Official Pearson Specimen Assessment' : isOct2025 ? 'Autumn 2025 Examination Series' : isJan2026 ? 'Winter 2026 Examination Series' : isJan2025 ? 'Winter 2025 Examination Series' : isJune2025 ? 'Summer 2025 Examination Series' : isJune2026 ? 'Summer 2026 Examination Series' : 'Pearson Edexcel IAL Specification'}
                    </span>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                      isSelected 
                        ? profile.id.includes('cie') && profile.id.includes('2025') ? 'bg-emerald-500 border-emerald-400 text-white' : profile.id.includes('cie') && profile.id.includes('2024') ? 'bg-cyan-500 border-cyan-400 text-white' : profile.id.includes('cie') && profile.id.includes('2023') ? 'bg-blue-500 border-blue-400 text-white' : isOct2026 ? 'bg-orange-500 border-orange-400 text-white' : isJan2026 ? 'bg-sky-500 border-sky-400 text-white' : isJan2025 ? 'bg-cyan-500 border-cyan-400 text-white' : isOct2025 ? 'bg-amber-500 border-amber-400 text-white' : isJune2025 ? 'bg-teal-500 border-teal-400 text-white' : isJune2026 ? 'bg-rose-500 border-rose-400 text-white' : isSpecimen ? 'bg-purple-500 border-purple-400 text-white' : 'bg-indigo-500 border-indigo-400 text-white' 
                        : 'border-white/20'
                    }`}>
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Proceed & Print Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
            <button
              onClick={() => setPrintModalOpen(true)}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-all active:scale-95"
            >
              <Printer className="w-4 h-4 text-emerald-400" />
              <span>Print Paper / Save PDF</span>
            </button>

            <button
              onClick={() => setPhase('CONFIRM_RULES')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-98"
            >
              <span>Review Examination Instructions</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* PHASE 2: CONFIRM RULES & PROCTORING WARNING                               */}
      {/* ========================================================================= */}
      {phase === 'CONFIRM_RULES' && (
        <div className="w-full max-w-3xl mx-auto px-4 py-12 space-y-8 animate-in zoom-in-95 duration-200">
          
          <div className="bg-[#0c1222] border border-white/10 rounded-3xl p-8 md:p-10 space-y-6 shadow-2xl">
            
            {/* Header */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto text-2xl">
                🛡️
              </div>
              <h2 className="text-2xl font-black">Examination Regulations & Anti-Cheat Notice</h2>
              <p className="text-xs text-slate-400 max-w-lg mx-auto">
                You are about to launch <strong className="text-white">{activeProfile.paperCode}: {activeProfile.paperName}</strong>. 
                Please read the proctoring protocol carefully.
              </p>
            </div>

            {/* Official Instructions List */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 space-y-3">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">Official Paper Rules:</span>
              <ul className="space-y-2 text-xs text-slate-300">
                {activeProfile.instructions.map((inst, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>{inst}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security Protocol Warning Box */}
            <div className="bg-rose-500/10 border border-rose-500/30 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>Active Proctoring Enforcement</span>
              </div>
              <div className="space-y-1.5 text-xs text-rose-300/90 leading-relaxed">
                <p>1. <strong>Fullscreen Required:</strong> The examination will immediately trigger full-screen mode.</p>
                <p>2. <strong>Screen-Exit Strike System:</strong> Leaving this browser tab, minimizing, or pressing Alt+Tab will record a violation. Upon <strong>3 strikes</strong>, your exam is terminated and auto-submitted.</p>
                <p>3. <strong>Automatic Submission:</strong> When the timer expires ({activeProfile.durationMinutes} minutes), all answered questions are graded automatically.</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
              <button
                onClick={() => setPhase('SELECT')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold transition-all"
              >
                Change Paper
              </button>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setPrintModalOpen(true)}
                  className="flex-1 sm:flex-initial px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Printer className="w-4 h-4 text-emerald-400" />
                  <span>Print Paper PDF</span>
                </button>

                <button
                  onClick={handleStartExam}
                  className="flex-1 sm:flex-initial px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-sm shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-98"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>Accept & Enter Examination</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* PHASE 3: AUTHENTIC EXAM RUNTIME (DISTRACTION-FREE)                         */}
      {/* ========================================================================= */}
      {phase === 'EXAM' && currentQ && (
        <div className="w-full min-h-screen flex flex-col bg-[#060913] text-white select-none">
          
          {/* Authentic Top Header */}
          <header className="bg-[#0b0f1d] border-b border-white/10 px-4 md:px-8 py-3 flex items-center justify-between sticky top-0 z-30 shadow-md">
            
            {/* Exam Details */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex w-9 h-9 rounded-xl bg-white/5 border border-white/10 items-center justify-center font-bold text-sm">
                {activeProfile.board === 'cambridge' ? '🏛️' : '🎓'}
              </div>
              <div>
                <span className="text-xs font-black tracking-wider text-indigo-400 block uppercase">
                  {activeProfile.paperCode} • {activeProfile.board.toUpperCase()}
                </span>
                <span className="text-xs text-slate-300 font-semibold truncate max-w-xs sm:max-w-md block">
                  {activeProfile.paperName}
                </span>
              </div>
            </div>

            {/* Middle: Live Timer */}
            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-base font-black border transition-all ${
              secondsRemaining <= 300
                ? 'bg-rose-500/20 text-rose-400 border-rose-500/40 animate-pulse'
                : 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20'
            }`}>
              <Clock className="w-4 h-4" />
              <span>{formatTimer(secondsRemaining)}</span>
            </div>

            {/* Right Tools: Periodic Table + Palette + Finish */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPeriodicTableOpen(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-bold transition-all"
                title="Open Official Periodic Table"
              >
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                <span className="hidden sm:inline">Periodic Table</span>
              </button>

              <button
                onClick={() => setPaletteOpen(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-bold transition-all"
              >
                <LayoutGrid className="w-3.5 h-3.5 text-indigo-400" />
                <span className="hidden sm:inline">Questions</span>
                <span className="text-[10px] text-indigo-400 font-black">({answeredCount}/{questions.length})</span>
              </button>

              <button
                onClick={() => setFinishConfirmOpen(true)}
                className="px-4 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/30 text-rose-300 font-bold text-xs transition-all"
              >
                Finish Paper
              </button>
            </div>

          </header>

          {/* Exam Body */}
          <main className="flex-1 max-w-4xl w-full mx-auto p-4 md:p-8 flex flex-col justify-between">
            
            {/* Question Card */}
            <div className="space-y-6">
              
              {/* Question Number & Flag action */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-black text-white">
                    Question {currentIndex + 1}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    of {questions.length} [{currentQ.markingScheme?.marks || 1} {currentQ.markingScheme?.marks === 1 ? 'Mark' : 'Marks'}]
                  </span>
                </div>

                <button
                  onClick={() => {
                    setFlaggedIndices(prev => {
                      const next = new Set(prev);
                      if (next.has(currentIndex)) next.delete(currentIndex);
                      else next.add(currentIndex);
                      return next;
                    });
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                    flaggedIndices.has(currentIndex)
                      ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <Flag className="w-3.5 h-3.5" />
                  <span>{flaggedIndices.has(currentIndex) ? 'Flagged for Review' : 'Flag Question'}</span>
                </button>
              </div>

              {/* Question Statement */}
              <div className="text-base md:text-lg font-medium text-slate-100 leading-relaxed">
                {renderTextWithMath(currentQ.question)}
              </div>

              {/* Optional Graph / Image or Interactive Graph Plotter */}
              {currentQ.graphConfig ? (
                <div className="my-6">
                  <InteractiveGraphPlotter config={currentQ.graphConfig} />
                </div>
              ) : currentQ.apparatusScaleConfig ? (
                <div className="my-6">
                  <InteractiveScaleReader config={currentQ.apparatusScaleConfig} />
                </div>
              ) : currentQ.imageHtml ? (
                <div 
                  className="my-4 p-4 bg-[#0a0f1d] border border-white/10 rounded-2xl flex justify-center"
                  dangerouslySetInnerHTML={{ __html: currentQ.imageHtml }}
                />
              ) : null}

              {/* Question Input Section: Either Structured Written Area or Multiple Choice Options */}
              {isCurrentQWritten ? (
                <div className="space-y-4 pt-2">
                  <div className="bg-[#0b1224] border border-indigo-500/20 rounded-2xl p-5 space-y-3 shadow-inner">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
                        <span>📝 Student Written Response</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono">
                          {currentQ.markingScheme?.marks || 1} Marks Allocated
                        </span>
                      </label>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {(writtenAnswers[currentIndex] || '').length} characters
                      </span>
                    </div>

                    <textarea
                      value={writtenAnswers[currentIndex] || ''}
                      onChange={(e) => setWrittenAnswers(prev => ({ ...prev, [currentIndex]: e.target.value }))}
                      placeholder="Write your complete chemical explanation, balanced chemical equations, or quantitative calculations here. Your response is automatically evaluated against Cambridge mark scheme keywords..."
                      rows={6}
                      className="w-full bg-[#060913] border border-white/10 rounded-xl p-4 text-sm md:text-base text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-y leading-relaxed font-sans"
                    />

                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                      <span className="flex items-center gap-1.5">
                        <span className="text-amber-400">💡</span>
                        <span>Include key scientific terms, state symbols, and correct units.</span>
                      </span>

                      {writtenAnswers[currentIndex] && (
                        <button
                          onClick={() => {
                            setWrittenAnswers(prev => {
                              const updated = { ...prev };
                              delete updated[currentIndex];
                              return updated;
                            });
                          }}
                          className="text-xs text-rose-400 hover:text-rose-300 transition-colors"
                        >
                          Clear text
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 pt-2">
                  {currentQ.options.map((opt, optIdx) => {
                    const isSelected = answers[currentIndex] === optIdx;
                    const letter = String.fromCharCode(65 + optIdx);

                    return (
                      <button
                        key={optIdx}
                        onClick={() => setAnswers(prev => ({ ...prev, [currentIndex]: optIdx }))}
                        className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center gap-4 group ${
                          isSelected
                            ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-400'
                            : 'bg-white/[0.02] border-white/5 text-slate-300 hover:bg-white/5 hover:border-white/10'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-indigo-500 text-white'
                            : 'bg-white/5 text-slate-400 group-hover:text-white'
                        }`}>
                          {letter}
                        </div>
                        <div className="flex-1 text-sm md:text-base font-normal">
                          {renderTextWithMath(opt.text)}
                        </div>
                      </button>
                    );
                  })}

                  {/* Clear answer option */}
                  {answers[currentIndex] !== undefined && (
                    <div className="flex justify-end">
                      <button
                        onClick={() => {
                          setAnswers(prev => {
                            const updated = { ...prev };
                            delete updated[currentIndex];
                            return updated;
                          });
                        }}
                        className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                      >
                        Clear selection
                      </button>
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* Bottom Question Navigation Footer */}
            <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-8">
              <button
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-bold text-xs disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Question</span>
              </button>

              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                {unansweredCount} questions remaining
              </span>

              {currentIndex < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-xs shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
                >
                  <span>Next Question</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setFinishConfirmOpen(true)}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
                >
                  <span>Submit Paper</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              )}
            </div>

          </main>

          {/* Question Palette Modal */}
          {paletteOpen && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center p-4">
              <div className="bg-[#0c1222] border border-white/10 rounded-3xl p-6 md:p-8 max-w-lg w-full max-h-[80vh] flex flex-col shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4 text-indigo-400" />
                    <span>Question Palette Overview</span>
                  </h3>
                  <button onClick={() => setPaletteOpen(false)} className="text-slate-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-3 gap-2 py-4 text-[11px] text-center border-b border-white/5">
                  <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                    {answeredCount} Answered
                  </div>
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold">
                    {flaggedIndices.size} Flagged
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 font-bold">
                    {unansweredCount} Unanswered
                  </div>
                </div>

                {/* Grid */}
                <div className="flex-1 overflow-y-auto py-4 grid grid-cols-5 sm:grid-cols-8 gap-2">
                  {questions.map((q, idx) => {
                    const isWritten = q.paperType === 'structured' || q.paperType === 'practical' || !!q.markingScheme;
                    const isAnswered = isWritten ? !!(writtenAnswers[idx] && writtenAnswers[idx].trim().length > 0) : answers[idx] !== undefined;
                    const isFlagged = flaggedIndices.has(idx);
                    const isCurrent = idx === currentIndex;

                    let btnStyle = 'bg-white/5 border-white/10 text-slate-400';
                    if (isCurrent) btnStyle = 'bg-indigo-600 border-indigo-400 text-white ring-2 ring-indigo-400';
                    else if (isFlagged && isAnswered) btnStyle = 'bg-amber-500/20 border-amber-500/40 text-amber-300';
                    else if (isFlagged) btnStyle = 'bg-amber-500/15 border-amber-500/30 text-amber-400';
                    else if (isAnswered) btnStyle = 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300';

                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentIndex(idx);
                          setPaletteOpen(false);
                        }}
                        className={`aspect-square rounded-xl border font-bold text-xs flex items-center justify-center transition-all hover:scale-105 ${btnStyle}`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => setPaletteOpen(false)}
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition-all"
                >
                  Return to Active Question
                </button>
              </div>
            </div>
          )}

          {/* Finish Confirmation Modal */}
          {finishConfirmOpen && (
            <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-40 flex items-center justify-center p-4">
              <div className="bg-[#0c1222] border border-white/10 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl text-center space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto text-2xl">
                  📝
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">Finalize & Submit Paper?</h3>
                  <div className="text-xs text-slate-400 space-y-1">
                    <p>You have answered <strong className="text-white">{answeredCount}</strong> of <strong className="text-white">{questions.length}</strong> questions.</p>
                    {unansweredCount > 0 && (
                      <p className="text-amber-400 font-semibold">⚠️ {unansweredCount} questions remain unattempted!</p>
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setFinishConfirmOpen(false)}
                    className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-bold transition-all"
                  >
                    Keep Working
                  </button>
                  <button
                    onClick={() => handleFinishExam(false)}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-xs font-bold shadow-lg shadow-indigo-500/25 hover:opacity-90 active:scale-95 transition-all"
                  >
                    Submit Paper
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Anti-Cheat Proctor Warning Modal */}
          <ProctorWarningModal
            isOpen={warningModalOpen}
            strikes={strikes}
            maxStrikes={MAX_STRIKES}
            type={warningType}
            onDismiss={async () => {
              setWarningModalOpen(false);
              await requestFullscreen();
            }}
            onForceSubmit={handleForceSubmitOnViolation}
          />

          {/* Periodic Table Reference Modal */}
          <PeriodicTableModal
            isOpen={periodicTableOpen}
            onClose={() => setPeriodicTableOpen(false)}
            boardName={activeProfile.board === 'cambridge' ? 'Cambridge 0620' : 'Pearson Edexcel'}
          />

        </div>
      )}

      {/* ========================================================================= */}
      {/* PHASE 4: OFFICIAL GRADE REPORT CARD                                       */}
      {/* ========================================================================= */}
      {phase === 'REPORT' && (
        <div className="w-full max-w-5xl mx-auto px-4 py-12">
          <ExamReportCard
            score={totalScore}
            total={totalPossibleMarks}
            timeSpentSeconds={timeSpentSeconds}
            profile={activeProfile}
            strikeCount={strikes}
            wasTerminated={wasTerminated}
            topicBreakdown={topicBreakdown}
            studentName={user?.name || user?.username || 'ChemZim Scholar'}
            onRetry={() => setPhase('SELECT')}
            onReviewQuestions={() => setPhase('REVIEW')}
            onExit={() => router.push('/dashboard')}
          />
        </div>
      )}

      {/* ========================================================================= */}
      {/* PHASE 5: DETAILED SOLUTIONS REVIEW                                        */}
      {/* ========================================================================= */}
      {phase === 'REVIEW' && (
        <div className="w-full max-w-4xl mx-auto px-4 py-10 space-y-8 animate-in fade-in duration-300 pb-20">
          
          <div className="flex items-center justify-between border-b border-white/5 pb-6">
            <div>
              <h2 className="text-2xl font-black text-white">Paper Solutions & Examiner Explanations</h2>
              <p className="text-xs text-slate-400 mt-1">{activeProfile.paperCode} — Comprehensive Mark Scheme Review</p>
            </div>
            <button
              onClick={() => setPhase('REPORT')}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-bold text-xs transition-all flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Report Card</span>
            </button>
          </div>

          <div className="space-y-6">
            {questions.map((q, idx) => {
              const isWritten = q.paperType === 'structured' || q.paperType === 'practical' || !!q.markingScheme;
              const evaluation = writtenEvaluations[idx];
              const studentChoice = answers[idx];
              const isMcqCorrect = studentChoice === q.correctAnswer;
              const awardedMarks = isWritten ? (evaluation?.awardedMarks || 0) : (isMcqCorrect ? 1 : 0);
              const maxMarks = q.markingScheme?.marks || 1;

              return (
                <div key={q.id} className="bg-[#0b0f1d] border border-white/5 rounded-3xl p-6 md:p-8 space-y-5 shadow-xl">
                  
                  {/* Status header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-4 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-black text-white text-sm">Question {idx + 1}</span>
                      {q.paperType && (
                        <span className="px-2 py-0.5 rounded-md bg-white/5 text-slate-400 font-mono text-[10px] uppercase">
                          {q.paperType}
                        </span>
                      )}
                      {q.source && (
                        <span className="text-[11px] text-slate-500 truncate max-w-xs sm:max-w-md">
                          ({q.source})
                        </span>
                      )}
                    </div>

                    <span className={`font-black px-3.5 py-1.5 rounded-full border text-xs flex items-center gap-1.5 ${
                      awardedMarks === maxMarks
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                        : awardedMarks > 0
                        ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                        : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                    }`}>
                      {awardedMarks === maxMarks ? (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      ) : (
                        <AlertCircle className="w-3.5 h-3.5" />
                      )}
                      <span>
                        {awardedMarks} / {maxMarks} {maxMarks === 1 ? 'Mark' : 'Marks'}
                      </span>
                    </span>
                  </div>

                  {/* Question prompt */}
                  <div className="text-base text-white font-medium leading-relaxed">
                    {renderTextWithMath(q.question)}
                  </div>

                  {/* Optional Graph / Image or Interactive Graph Plotter */}
                  {q.graphConfig ? (
                    <div className="my-6">
                      <InteractiveGraphPlotter config={q.graphConfig} />
                    </div>
                  ) : q.apparatusScaleConfig ? (
                    <div className="my-6">
                      <InteractiveScaleReader config={q.apparatusScaleConfig} />
                    </div>
                  ) : q.imageHtml ? (
                    <div 
                      className="my-3 p-4 bg-[#0a0f1d] border border-white/10 rounded-2xl flex justify-center"
                      dangerouslySetInnerHTML={{ __html: q.imageHtml }}
                    />
                  ) : null}

                  {/* Written Answer Review vs MCQ Review */}
                  {isWritten ? (
                    <div className="space-y-4 pt-1">
                      {/* Student's written answer */}
                      <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-4 space-y-2">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Your Submitted Written Response:
                        </span>
                        <div className="text-sm text-slate-200 whitespace-pre-wrap font-sans leading-relaxed bg-[#060913] p-3.5 rounded-xl border border-white/5 min-h-[60px]">
                          {writtenAnswers[idx] && writtenAnswers[idx].trim().length > 0 ? (
                            writtenAnswers[idx]
                          ) : (
                            <span className="text-slate-500 italic">No response submitted for this question.</span>
                          )}
                        </div>
                      </div>

                      {/* Interactive Self-Marking Checklist Rubric */}
                      {q.markingScheme && (
                        <SelfMarkingRubric 
                          markingScheme={q.markingScheme}
                          studentText={writtenAnswers[idx] || ''}
                          autoEvaluation={evaluation ? {
                            awardedMarks: evaluation.awardedMarks,
                            pointResults: evaluation.pointResults
                          } : undefined}
                        />
                      )}
                    </div>
                  ) : (
                    /* Multiple Choice Review */
                    <div className="space-y-2 pt-2">
                      {q.options.map((opt, optIdx) => {
                        const isCorrectOpt = optIdx === q.correctAnswer;
                        const isStudentOpt = optIdx === studentChoice;

                        let optStyle = 'bg-white/[0.01] border-white/5 text-slate-400';
                        if (isCorrectOpt) {
                          optStyle = 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-semibold';
                        } else if (isStudentOpt && !isMcqCorrect) {
                          optStyle = 'bg-rose-500/15 border-rose-500/40 text-rose-300';
                        }

                        return (
                          <div key={optIdx} className={`p-3.5 rounded-xl border text-sm flex items-center gap-3 ${optStyle}`}>
                            <span className="font-bold">{String.fromCharCode(65 + optIdx)}.</span>
                            <span className="flex-1">{renderTextWithMath(opt.text)}</span>
                            {isCorrectOpt && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                            {isStudentOpt && !isMcqCorrect && <XCircle className="w-4 h-4 text-rose-400" />}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* General Explanation */}
                  {q.explanation && (
                    <div className="mt-4 bg-indigo-500/5 border border-indigo-500/15 rounded-2xl p-4 text-xs text-indigo-200/90 leading-relaxed">
                      <span className="font-bold text-indigo-400 uppercase tracking-widest text-[10px] block mb-1">
                        Examiner Note & Mark Scheme:
                      </span>
                      {renderTextWithMath(q.explanation)}
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* Print Paper Modal */}
      {printModalOpen && (
        <PrintExamModal
          isOpen={printModalOpen}
          onClose={() => setPrintModalOpen(false)}
          questions={generateExamQuestions(activeProfile)}
          defaultExamTitle={`${activeProfile.paperCode}: ${activeProfile.paperName}`}
          defaultCurriculumTitle={activeProfile.board === 'cambridge' ? 'Cambridge International IGCSE' : 'Pearson Edexcel International A-Level'}
          defaultTopicTitle={activeProfile.title}
        />
      )}

    </div>
  );
}
