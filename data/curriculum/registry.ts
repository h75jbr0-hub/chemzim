export interface LessonPart {
    id: string;
    title: string;
    type: 'text' | 'interactive' | 'simulation' | 'quiz';
    content: string;
    keyPoints?: string[];
    equations?: string[];
    simulationId?: string;
    equationVisualizer?: {
        reactants: [string, string][];
        products: [string, string][];
        description?: string;
    };
    gasLawSimulator?: {
        law: 'boyle' | 'charles' | 'gay-lussac';
    };
    avogadroScale?: boolean;
    massSpecSimulator?: boolean;
    titrationSimulator?: boolean;
    molecularShapeSimulator?: boolean;
    kineticsRatePlotter?: {
        initialOrder?: 'zero' | 'first' | 'second';
    };
    maxwellBoltzmannSimulator?: {
        initialTemp?: number;
        initialEa?: number;
    };
    arrheniusSimulator?: {
        initialEa?: number;
        initialA?: number;
    };
    rateMechanismBuilder?: boolean;
    disappearingCrossSimulator?: boolean;
    electrolysisSimulator?: boolean;
    bondingSimulator?: {
        initialMode?: 'ionic' | 'covalent';
    };
}


export interface LessonRegistryItem {
    title: string;
    number: number;
    theory: string;
    quiz: any[];
    parts?: LessonPart[];
}

import * as ci_u1_l1_theory from './cie-igcse/unit-1/lesson-1/index';
import * as ci_u1_l1_quiz from './cie-igcse/unit-1/lesson-1/quiz';
import * as ci_u1_l2_theory from './cie-igcse/unit-1/lesson-2/index';
import * as ci_u1_l2_quiz from './cie-igcse/unit-1/lesson-2/quiz';
import * as ci_u1_l3_theory from './cie-igcse/unit-1/lesson-3/index';
import * as ci_u1_l3_quiz from './cie-igcse/unit-1/lesson-3/quiz';
import * as ci_u1_l4_theory from './cie-igcse/unit-1/lesson-4/index';
import * as ci_u1_l4_quiz from './cie-igcse/unit-1/lesson-4/quiz';
import * as ci_u2_l1_theory from './cie-igcse/unit-2/lesson-1/index';
import * as ci_u2_l1_quiz from './cie-igcse/unit-2/lesson-1/quiz';
import * as ci_u2_l2_theory from './cie-igcse/unit-2/lesson-2/index';
import * as ci_u2_l2_quiz from './cie-igcse/unit-2/lesson-2/quiz';
import * as ci_u2_l3_theory from './cie-igcse/unit-2/lesson-3/index';
import * as ci_u2_l3_quiz from './cie-igcse/unit-2/lesson-3/quiz';
import * as ci_u2_l4_theory from './cie-igcse/unit-2/lesson-4/index';
import * as ci_u2_l4_quiz from './cie-igcse/unit-2/lesson-4/quiz';
import * as ci_u2_l5_theory from './cie-igcse/unit-2/lesson-5/index';
import * as ci_u2_l5_quiz from './cie-igcse/unit-2/lesson-5/quiz';
import * as ci_u3_l1_theory from './cie-igcse/unit-3/lesson-1/index';
import * as ci_u3_l1_quiz from './cie-igcse/unit-3/lesson-1/quiz';
import * as ci_u3_l2_theory from './cie-igcse/unit-3/lesson-2/index';
import * as ci_u3_l2_quiz from './cie-igcse/unit-3/lesson-2/quiz';
import * as ci_u3_l3_theory from './cie-igcse/unit-3/lesson-3/index';
import * as ci_u3_l3_quiz from './cie-igcse/unit-3/lesson-3/quiz';
import * as ci_u3_l4_theory from './cie-igcse/unit-3/lesson-4/index';
import * as ci_u3_l4_quiz from './cie-igcse/unit-3/lesson-4/quiz';
import * as ci_u3_l5_theory from './cie-igcse/unit-3/lesson-5/index';
import * as ci_u3_l5_quiz from './cie-igcse/unit-3/lesson-5/quiz';
import * as ci_u4_l1_theory from './cie-igcse/unit-4/lesson-1/index';
import * as ci_u4_l1_quiz from './cie-igcse/unit-4/lesson-1/quiz';
import * as ci_u4_l2_theory from './cie-igcse/unit-4/lesson-2/index';
import * as ci_u4_l2_quiz from './cie-igcse/unit-4/lesson-2/quiz';
import * as ci_u4_l3_theory from './cie-igcse/unit-4/lesson-3/index';
import * as ci_u4_l3_quiz from './cie-igcse/unit-4/lesson-3/quiz';
import * as ci_u4_l4_theory from './cie-igcse/unit-4/lesson-4/index';
import * as ci_u4_l4_quiz from './cie-igcse/unit-4/lesson-4/quiz';
import * as ci_u5_l1_theory from './cie-igcse/unit-5/lesson-1/index';
import * as ci_u5_l1_quiz from './cie-igcse/unit-5/lesson-1/quiz';
import * as ci_u5_l2_theory from './cie-igcse/unit-5/lesson-2/index';
import * as ci_u5_l2_quiz from './cie-igcse/unit-5/lesson-2/quiz';
import * as ci_u5_l3_theory from './cie-igcse/unit-5/lesson-3/index';
import * as ci_u5_l3_quiz from './cie-igcse/unit-5/lesson-3/quiz';
import * as ci_u5_l4_theory from './cie-igcse/unit-5/lesson-4/index';
import * as ci_u5_l4_quiz from './cie-igcse/unit-5/lesson-4/quiz';
import * as ci_u6_l1_theory from './cie-igcse/unit-6/lesson-1/index';
import * as ci_u6_l1_quiz from './cie-igcse/unit-6/lesson-1/quiz';
import * as ci_u6_l2_theory from './cie-igcse/unit-6/lesson-2/index';
import * as ci_u6_l2_quiz from './cie-igcse/unit-6/lesson-2/quiz';
import * as ci_u6_l3_theory from './cie-igcse/unit-6/lesson-3/index';
import * as ci_u6_l3_quiz from './cie-igcse/unit-6/lesson-3/quiz';
import * as ci_u6_l4_theory from './cie-igcse/unit-6/lesson-4/index';
import * as ci_u6_l4_quiz from './cie-igcse/unit-6/lesson-4/quiz';
import * as ci_u6_l5_theory from './cie-igcse/unit-6/lesson-5/index';
import * as ci_u6_l5_quiz from './cie-igcse/unit-6/lesson-5/quiz';
import * as ci_u7_l1_theory from './cie-igcse/unit-7/lesson-1/index';
import * as ci_u7_l1_quiz from './cie-igcse/unit-7/lesson-1/quiz';
import * as ci_u7_l2_theory from './cie-igcse/unit-7/lesson-2/index';
import * as ci_u7_l2_quiz from './cie-igcse/unit-7/lesson-2/quiz';
import * as ci_u7_l3_theory from './cie-igcse/unit-7/lesson-3/index';
import * as ci_u7_l3_quiz from './cie-igcse/unit-7/lesson-3/quiz';
import * as ci_u7_l4_theory from './cie-igcse/unit-7/lesson-4/index';
import * as ci_u7_l4_quiz from './cie-igcse/unit-7/lesson-4/quiz';
import * as ci_u7_l5_theory from './cie-igcse/unit-7/lesson-5/index';
import * as ci_u7_l5_quiz from './cie-igcse/unit-7/lesson-5/quiz';
import * as ci_u8_l1_theory from './cie-igcse/unit-8/lesson-1/index';
import * as ci_u8_l1_quiz from './cie-igcse/unit-8/lesson-1/quiz';
import * as ci_u8_l2_theory from './cie-igcse/unit-8/lesson-2/index';
import * as ci_u8_l2_quiz from './cie-igcse/unit-8/lesson-2/quiz';
import * as ci_u8_l3_theory from './cie-igcse/unit-8/lesson-3/index';
import * as ci_u8_l3_quiz from './cie-igcse/unit-8/lesson-3/quiz';
import * as ci_u8_l4_theory from './cie-igcse/unit-8/lesson-4/index';
import * as ci_u8_l4_quiz from './cie-igcse/unit-8/lesson-4/quiz';
import * as ci_u8_l5_theory from './cie-igcse/unit-8/lesson-5/index';
import * as ci_u8_l5_quiz from './cie-igcse/unit-8/lesson-5/quiz';
import * as ci_u9_l1_theory from './cie-igcse/unit-9/lesson-1/index';
import * as ci_u9_l1_quiz from './cie-igcse/unit-9/lesson-1/quiz';
import * as ci_u9_l2_theory from './cie-igcse/unit-9/lesson-2/index';
import * as ci_u9_l2_quiz from './cie-igcse/unit-9/lesson-2/quiz';
import * as ci_u9_l3_theory from './cie-igcse/unit-9/lesson-3/index';
import * as ci_u9_l3_quiz from './cie-igcse/unit-9/lesson-3/quiz';
import * as ci_u9_l4_theory from './cie-igcse/unit-9/lesson-4/index';
import * as ci_u9_l4_quiz from './cie-igcse/unit-9/lesson-4/quiz';
import * as ci_u9_l5_theory from './cie-igcse/unit-9/lesson-5/index';
import * as ci_u9_l5_quiz from './cie-igcse/unit-9/lesson-5/quiz';
import * as ci_u10_l1_theory from './cie-igcse/unit-10/lesson-1/index';
import * as ci_u10_l1_quiz from './cie-igcse/unit-10/lesson-1/quiz';
import * as ci_u10_l2_theory from './cie-igcse/unit-10/lesson-2/index';
import * as ci_u10_l2_quiz from './cie-igcse/unit-10/lesson-2/quiz';
import * as ci_u10_l3_theory from './cie-igcse/unit-10/lesson-3/index';
import * as ci_u10_l3_quiz from './cie-igcse/unit-10/lesson-3/quiz';
import * as ci_u10_l4_theory from './cie-igcse/unit-10/lesson-4/index';
import * as ci_u10_l4_quiz from './cie-igcse/unit-10/lesson-4/quiz';
import * as ci_u11_l1_theory from './cie-igcse/unit-11/lesson-1/index';
import * as ci_u11_l1_quiz from './cie-igcse/unit-11/lesson-1/quiz';
import * as ci_u11_l2_theory from './cie-igcse/unit-11/lesson-2/index';
import * as ci_u11_l2_quiz from './cie-igcse/unit-11/lesson-2/quiz';
import * as ci_u11_l3_theory from './cie-igcse/unit-11/lesson-3/index';
import * as ci_u11_l3_quiz from './cie-igcse/unit-11/lesson-3/quiz';
import * as ci_u11_l4_theory from './cie-igcse/unit-11/lesson-4/index';
import * as ci_u11_l4_quiz from './cie-igcse/unit-11/lesson-4/quiz';
import * as ci_u11_l5_theory from './cie-igcse/unit-11/lesson-5/index';
import * as ci_u11_l5_quiz from './cie-igcse/unit-11/lesson-5/quiz';
import * as ci_u11_l6_theory from './cie-igcse/unit-11/lesson-6/index';
import * as ci_u11_l6_quiz from './cie-igcse/unit-11/lesson-6/quiz';
import * as ci_u12_l1_theory from './cie-igcse/unit-12/lesson-1/index';
import * as ci_u12_l1_quiz from './cie-igcse/unit-12/lesson-1/quiz';
import * as ci_u12_l2_theory from './cie-igcse/unit-12/lesson-2/index';
import * as ci_u12_l2_quiz from './cie-igcse/unit-12/lesson-2/quiz';
import * as ci_u12_l3_theory from './cie-igcse/unit-12/lesson-3/index';
import * as ci_u12_l3_quiz from './cie-igcse/unit-12/lesson-3/quiz';
import * as ci_u12_l4_theory from './cie-igcse/unit-12/lesson-4/index';
import * as ci_u12_l4_quiz from './cie-igcse/unit-12/lesson-4/quiz';

export const curriculumRegistry: Record<string, Record<number, LessonRegistryItem>> = {
    'cie-igcse-unit-1': {
        1: {
            title: ci_u1_l1_theory.lessonTitle,
            number: ci_u1_l1_theory.lessonNumber,
            theory: ci_u1_l1_theory.theoryMarkdown,
            quiz: ci_u1_l1_quiz.lessonQuiz,
            parts: ci_u1_l1_theory.lessonParts,
        },
        2: {
            title: ci_u1_l2_theory.lessonTitle,
            number: ci_u1_l2_theory.lessonNumber,
            theory: ci_u1_l2_theory.theoryMarkdown,
            quiz: ci_u1_l2_quiz.lessonQuiz,
            parts: ci_u1_l2_theory.lessonParts,
        },
        3: {
            title: ci_u1_l3_theory.lessonTitle,
            number: ci_u1_l3_theory.lessonNumber,
            theory: ci_u1_l3_theory.theoryMarkdown,
            quiz: ci_u1_l3_quiz.lessonQuiz,
            parts: ci_u1_l3_theory.lessonParts,
        },
        4: {
            title: ci_u1_l4_theory.lessonTitle,
            number: ci_u1_l4_theory.lessonNumber,
            theory: ci_u1_l4_theory.theoryMarkdown,
            quiz: ci_u1_l4_quiz.lessonQuiz,
            parts: ci_u1_l4_theory.lessonParts,
        },
    },
    'cie-igcse-unit-2': {
        1: {
            title: ci_u2_l1_theory.lessonTitle,
            number: ci_u2_l1_theory.lessonNumber,
            theory: ci_u2_l1_theory.theoryMarkdown,
            quiz: ci_u2_l1_quiz.lessonQuiz,
            parts: ci_u2_l1_theory.lessonParts,
        },
        2: {
            title: ci_u2_l2_theory.lessonTitle,
            number: ci_u2_l2_theory.lessonNumber,
            theory: ci_u2_l2_theory.theoryMarkdown,
            quiz: ci_u2_l2_quiz.lessonQuiz,
            parts: ci_u2_l2_theory.lessonParts,
        },
        3: {
            title: ci_u2_l3_theory.lessonTitle,
            number: ci_u2_l3_theory.lessonNumber,
            theory: ci_u2_l3_theory.theoryMarkdown,
            quiz: ci_u2_l3_quiz.lessonQuiz,
            parts: ci_u2_l3_theory.lessonParts,
        },
        4: {
            title: ci_u2_l4_theory.lessonTitle,
            number: ci_u2_l4_theory.lessonNumber,
            theory: ci_u2_l4_theory.theoryMarkdown,
            quiz: ci_u2_l4_quiz.lessonQuiz,
            parts: ci_u2_l4_theory.lessonParts,
        },
        5: {
            title: ci_u2_l5_theory.lessonTitle,
            number: ci_u2_l5_theory.lessonNumber,
            theory: ci_u2_l5_theory.theoryMarkdown,
            quiz: ci_u2_l5_quiz.lessonQuiz,
            parts: ci_u2_l5_theory.lessonParts,
        },
    },
    'cie-igcse-unit-3': {
        1: {
            title: ci_u3_l1_theory.lessonTitle,
            number: ci_u3_l1_theory.lessonNumber,
            theory: ci_u3_l1_theory.theoryMarkdown,
            quiz: ci_u3_l1_quiz.lessonQuiz,
            parts: (ci_u3_l1_theory as any).lessonParts,
        },
        2: {
            title: ci_u3_l2_theory.lessonTitle,
            number: ci_u3_l2_theory.lessonNumber,
            theory: ci_u3_l2_theory.theoryMarkdown,
            quiz: ci_u3_l2_quiz.lessonQuiz,
            parts: (ci_u3_l2_theory as any).lessonParts,
        },
        3: {
            title: ci_u3_l3_theory.lessonTitle,
            number: ci_u3_l3_theory.lessonNumber,
            theory: ci_u3_l3_theory.theoryMarkdown,
            quiz: ci_u3_l3_quiz.lessonQuiz,
            parts: (ci_u3_l3_theory as any).lessonParts,
        },
        4: {
            title: ci_u3_l4_theory.lessonTitle,
            number: ci_u3_l4_theory.lessonNumber,
            theory: ci_u3_l4_theory.theoryMarkdown,
            quiz: ci_u3_l4_quiz.lessonQuiz,
            parts: (ci_u3_l4_theory as any).lessonParts,
        },
        5: {
            title: ci_u3_l5_theory.lessonTitle,
            number: ci_u3_l5_theory.lessonNumber,
            theory: ci_u3_l5_theory.theoryMarkdown,
            quiz: ci_u3_l5_quiz.lessonQuiz,
            parts: (ci_u3_l5_theory as any).lessonParts,
        },
    },
    'cie-igcse-unit-4': {
        1: {
            title: ci_u4_l1_theory.lessonTitle,
            number: ci_u4_l1_theory.lessonNumber,
            theory: ci_u4_l1_theory.theoryMarkdown,
            quiz: ci_u4_l1_quiz.lessonQuiz,
            parts: (ci_u4_l1_theory as any).lessonParts,
        },
        2: {
            title: ci_u4_l2_theory.lessonTitle,
            number: ci_u4_l2_theory.lessonNumber,
            theory: ci_u4_l2_theory.theoryMarkdown,
            quiz: ci_u4_l2_quiz.lessonQuiz,
            parts: (ci_u4_l2_theory as any).lessonParts,
        },
        3: {
            title: ci_u4_l3_theory.lessonTitle,
            number: ci_u4_l3_theory.lessonNumber,
            theory: ci_u4_l3_theory.theoryMarkdown,
            quiz: ci_u4_l3_quiz.lessonQuiz,
            parts: (ci_u4_l3_theory as any).lessonParts,
        },
        4: {
            title: ci_u4_l4_theory.lessonTitle,
            number: ci_u4_l4_theory.lessonNumber,
            theory: ci_u4_l4_theory.theoryMarkdown,
            quiz: ci_u4_l4_quiz.lessonQuiz,
            parts: (ci_u4_l4_theory as any).lessonParts,
        },
    },
    'cie-igcse-unit-5': {
        1: {
            title: ci_u5_l1_theory.lessonTitle,
            number: ci_u5_l1_theory.lessonNumber,
            theory: ci_u5_l1_theory.theoryMarkdown,
            quiz: ci_u5_l1_quiz.lessonQuiz,
            parts: (ci_u5_l1_theory as any).lessonParts,
        },
        2: {
            title: ci_u5_l2_theory.lessonTitle,
            number: ci_u5_l2_theory.lessonNumber,
            theory: ci_u5_l2_theory.theoryMarkdown,
            quiz: ci_u5_l2_quiz.lessonQuiz,
            parts: (ci_u5_l2_theory as any).lessonParts,
        },
        3: {
            title: ci_u5_l3_theory.lessonTitle,
            number: ci_u5_l3_theory.lessonNumber,
            theory: ci_u5_l3_theory.theoryMarkdown,
            quiz: ci_u5_l3_quiz.lessonQuiz,
            parts: (ci_u5_l3_theory as any).lessonParts,
        },
        4: {
            title: ci_u5_l4_theory.lessonTitle,
            number: ci_u5_l4_theory.lessonNumber,
            theory: ci_u5_l4_theory.theoryMarkdown,
            quiz: ci_u5_l4_quiz.lessonQuiz,
            parts: (ci_u5_l4_theory as any).lessonParts,
        },
    },
    'cie-igcse-unit-6': {
        1: {
            title: ci_u6_l1_theory.lessonTitle,
            number: ci_u6_l1_theory.lessonNumber,
            theory: ci_u6_l1_theory.theoryMarkdown,
            quiz: ci_u6_l1_quiz.lessonQuiz,
            parts: (ci_u6_l1_theory as any).lessonParts,
        },
        2: {
            title: ci_u6_l2_theory.lessonTitle,
            number: ci_u6_l2_theory.lessonNumber,
            theory: ci_u6_l2_theory.theoryMarkdown,
            quiz: ci_u6_l2_quiz.lessonQuiz,
            parts: (ci_u6_l2_theory as any).lessonParts,
        },
        3: {
            title: ci_u6_l3_theory.lessonTitle,
            number: ci_u6_l3_theory.lessonNumber,
            theory: ci_u6_l3_theory.theoryMarkdown,
            quiz: ci_u6_l3_quiz.lessonQuiz,
            parts: (ci_u6_l3_theory as any).lessonParts,
        },
        4: {
            title: ci_u6_l4_theory.lessonTitle,
            number: ci_u6_l4_theory.lessonNumber,
            theory: ci_u6_l4_theory.theoryMarkdown,
            quiz: ci_u6_l4_quiz.lessonQuiz,
            parts: (ci_u6_l4_theory as any).lessonParts,
        },
        5: {
            title: ci_u6_l5_theory.lessonTitle,
            number: ci_u6_l5_theory.lessonNumber,
            theory: ci_u6_l5_theory.theoryMarkdown,
            quiz: ci_u6_l5_quiz.lessonQuiz,
            parts: (ci_u6_l5_theory as any).lessonParts,
        },
    },
    'cie-igcse-unit-7': {
        1: {
            title: ci_u7_l1_theory.lessonTitle,
            number: ci_u7_l1_theory.lessonNumber,
            theory: ci_u7_l1_theory.theoryMarkdown,
            quiz: ci_u7_l1_quiz.lessonQuiz,
            parts: (ci_u7_l1_theory as any).lessonParts,
        },
        2: {
            title: ci_u7_l2_theory.lessonTitle,
            number: ci_u7_l2_theory.lessonNumber,
            theory: ci_u7_l2_theory.theoryMarkdown,
            quiz: ci_u7_l2_quiz.lessonQuiz,
            parts: (ci_u7_l2_theory as any).lessonParts,
        },
        3: {
            title: ci_u7_l3_theory.lessonTitle,
            number: ci_u7_l3_theory.lessonNumber,
            theory: ci_u7_l3_theory.theoryMarkdown,
            quiz: ci_u7_l3_quiz.lessonQuiz,
            parts: (ci_u7_l3_theory as any).lessonParts,
        },
        4: {
            title: ci_u7_l4_theory.lessonTitle,
            number: ci_u7_l4_theory.lessonNumber,
            theory: ci_u7_l4_theory.theoryMarkdown,
            quiz: ci_u7_l4_quiz.lessonQuiz,
            parts: (ci_u7_l4_theory as any).lessonParts,
        },
        5: {
            title: ci_u7_l5_theory.lessonTitle,
            number: ci_u7_l5_theory.lessonNumber,
            theory: ci_u7_l5_theory.theoryMarkdown,
            quiz: ci_u7_l5_quiz.lessonQuiz,
            parts: (ci_u7_l5_theory as any).lessonParts,
        },
    },
    'cie-igcse-unit-8': {
        1: {
            title: ci_u8_l1_theory.lessonTitle,
            number: ci_u8_l1_theory.lessonNumber,
            theory: ci_u8_l1_theory.theoryMarkdown,
            quiz: ci_u8_l1_quiz.lessonQuiz,
            parts: (ci_u8_l1_theory as any).lessonParts,
        },
        2: {
            title: ci_u8_l2_theory.lessonTitle,
            number: ci_u8_l2_theory.lessonNumber,
            theory: ci_u8_l2_theory.theoryMarkdown,
            quiz: ci_u8_l2_quiz.lessonQuiz,
            parts: (ci_u8_l2_theory as any).lessonParts,
        },
        3: {
            title: ci_u8_l3_theory.lessonTitle,
            number: ci_u8_l3_theory.lessonNumber,
            theory: ci_u8_l3_theory.theoryMarkdown,
            quiz: ci_u8_l3_quiz.lessonQuiz,
            parts: (ci_u8_l3_theory as any).lessonParts,
        },
        4: {
            title: ci_u8_l4_theory.lessonTitle,
            number: ci_u8_l4_theory.lessonNumber,
            theory: ci_u8_l4_theory.theoryMarkdown,
            quiz: ci_u8_l4_quiz.lessonQuiz,
            parts: (ci_u8_l4_theory as any).lessonParts,
        },
        5: {
            title: ci_u8_l5_theory.lessonTitle,
            number: ci_u8_l5_theory.lessonNumber,
            theory: ci_u8_l5_theory.theoryMarkdown,
            quiz: ci_u8_l5_quiz.lessonQuiz,
            parts: (ci_u8_l5_theory as any).lessonParts,
        },
    },
    'cie-igcse-unit-9': {
        1: {
            title: ci_u9_l1_theory.lessonTitle,
            number: ci_u9_l1_theory.lessonNumber,
            theory: ci_u9_l1_theory.theoryMarkdown,
            quiz: ci_u9_l1_quiz.lessonQuiz,
            parts: (ci_u9_l1_theory as any).lessonParts,
        },
        2: {
            title: ci_u9_l2_theory.lessonTitle,
            number: ci_u9_l2_theory.lessonNumber,
            theory: ci_u9_l2_theory.theoryMarkdown,
            quiz: ci_u9_l2_quiz.lessonQuiz,
            parts: (ci_u9_l2_theory as any).lessonParts,
        },
        3: {
            title: ci_u9_l3_theory.lessonTitle,
            number: ci_u9_l3_theory.lessonNumber,
            theory: ci_u9_l3_theory.theoryMarkdown,
            quiz: ci_u9_l3_quiz.lessonQuiz,
            parts: (ci_u9_l3_theory as any).lessonParts,
        },
        4: {
            title: ci_u9_l4_theory.lessonTitle,
            number: ci_u9_l4_theory.lessonNumber,
            theory: ci_u9_l4_theory.theoryMarkdown,
            quiz: ci_u9_l4_quiz.lessonQuiz,
            parts: (ci_u9_l4_theory as any).lessonParts,
        },
        5: {
            title: ci_u9_l5_theory.lessonTitle,
            number: ci_u9_l5_theory.lessonNumber,
            theory: ci_u9_l5_theory.theoryMarkdown,
            quiz: ci_u9_l5_quiz.lessonQuiz,
            parts: (ci_u9_l5_theory as any).lessonParts,
        },
    },
    'cie-igcse-unit-10': {
        1: {
            title: ci_u10_l1_theory.lessonTitle,
            number: ci_u10_l1_theory.lessonNumber,
            theory: ci_u10_l1_theory.theoryMarkdown,
            quiz: ci_u10_l1_quiz.lessonQuiz,
            parts: (ci_u10_l1_theory as any).lessonParts,
        },
        2: {
            title: ci_u10_l2_theory.lessonTitle,
            number: ci_u10_l2_theory.lessonNumber,
            theory: ci_u10_l2_theory.theoryMarkdown,
            quiz: ci_u10_l2_quiz.lessonQuiz,
            parts: (ci_u10_l2_theory as any).lessonParts,
        },
        3: {
            title: ci_u10_l3_theory.lessonTitle,
            number: ci_u10_l3_theory.lessonNumber,
            theory: ci_u10_l3_theory.theoryMarkdown,
            quiz: ci_u10_l3_quiz.lessonQuiz,
            parts: (ci_u10_l3_theory as any).lessonParts,
        },
        4: {
            title: ci_u10_l4_theory.lessonTitle,
            number: ci_u10_l4_theory.lessonNumber,
            theory: ci_u10_l4_theory.theoryMarkdown,
            quiz: ci_u10_l4_quiz.lessonQuiz,
            parts: (ci_u10_l4_theory as any).lessonParts,
        },
    },
    'cie-igcse-unit-11': {
        1: {
            title: ci_u11_l1_theory.lessonTitle,
            number: ci_u11_l1_theory.lessonNumber,
            theory: ci_u11_l1_theory.theoryMarkdown,
            quiz: ci_u11_l1_quiz.lessonQuiz,
            parts: (ci_u11_l1_theory as any).lessonParts,
        },
        2: {
            title: ci_u11_l2_theory.lessonTitle,
            number: ci_u11_l2_theory.lessonNumber,
            theory: ci_u11_l2_theory.theoryMarkdown,
            quiz: ci_u11_l2_quiz.lessonQuiz,
            parts: (ci_u11_l2_theory as any).lessonParts,
        },
        3: {
            title: ci_u11_l3_theory.lessonTitle,
            number: ci_u11_l3_theory.lessonNumber,
            theory: ci_u11_l3_theory.theoryMarkdown,
            quiz: ci_u11_l3_quiz.lessonQuiz,
            parts: (ci_u11_l3_theory as any).lessonParts,
        },
        4: {
            title: ci_u11_l4_theory.lessonTitle,
            number: ci_u11_l4_theory.lessonNumber,
            theory: ci_u11_l4_theory.theoryMarkdown,
            quiz: ci_u11_l4_quiz.lessonQuiz,
            parts: (ci_u11_l4_theory as any).lessonParts,
        },
        5: {
            title: ci_u11_l5_theory.lessonTitle,
            number: ci_u11_l5_theory.lessonNumber,
            theory: ci_u11_l5_theory.theoryMarkdown,
            quiz: ci_u11_l5_quiz.lessonQuiz,
            parts: (ci_u11_l5_theory as any).lessonParts,
        },
        6: {
            title: ci_u11_l6_theory.lessonTitle,
            number: ci_u11_l6_theory.lessonNumber,
            theory: ci_u11_l6_theory.theoryMarkdown,
            quiz: ci_u11_l6_quiz.lessonQuiz,
            parts: (ci_u11_l6_theory as any).lessonParts,
        },
    },
    'cie-igcse-unit-12': {
        1: {
            title: ci_u12_l1_theory.lessonTitle,
            number: ci_u12_l1_theory.lessonNumber,
            theory: ci_u12_l1_theory.theoryMarkdown,
            quiz: ci_u12_l1_quiz.lessonQuiz,
            parts: (ci_u12_l1_theory as any).lessonParts,
        },
        2: {
            title: ci_u12_l2_theory.lessonTitle,
            number: ci_u12_l2_theory.lessonNumber,
            theory: ci_u12_l2_theory.theoryMarkdown,
            quiz: ci_u12_l2_quiz.lessonQuiz,
            parts: (ci_u12_l2_theory as any).lessonParts,
        },
        3: {
            title: ci_u12_l3_theory.lessonTitle,
            number: ci_u12_l3_theory.lessonNumber,
            theory: ci_u12_l3_theory.theoryMarkdown,
            quiz: ci_u12_l3_quiz.lessonQuiz,
            parts: (ci_u12_l3_theory as any).lessonParts,
        },
        4: {
            title: ci_u12_l4_theory.lessonTitle,
            number: ci_u12_l4_theory.lessonNumber,
            theory: ci_u12_l4_theory.theoryMarkdown,
            quiz: ci_u12_l4_quiz.lessonQuiz,
            parts: (ci_u12_l4_theory as any).lessonParts,
        },
    },
};

// ===================== Edexcel IAL Chemistry Imports =====================
import * as ed_u1_l1_theory from './edexcel-alevel/unit-1/lesson-1/index';
import * as ed_u1_l1_quiz from './edexcel-alevel/unit-1/lesson-1/quiz';
import * as ed_u1_l2_theory from './edexcel-alevel/unit-1/lesson-2/index';
import * as ed_u1_l2_quiz from './edexcel-alevel/unit-1/lesson-2/quiz';
import * as ed_u1_l3_theory from './edexcel-alevel/unit-1/lesson-3/index';
import * as ed_u1_l3_quiz from './edexcel-alevel/unit-1/lesson-3/quiz';
import * as ed_u1_l4_theory from './edexcel-alevel/unit-1/lesson-4/index';
import * as ed_u1_l4_quiz from './edexcel-alevel/unit-1/lesson-4/quiz';
import * as ed_u1_l5_theory from './edexcel-alevel/unit-1/lesson-5/index';
import * as ed_u1_l5_quiz from './edexcel-alevel/unit-1/lesson-5/quiz';
import * as ed_u2_l1_theory from './edexcel-alevel/unit-2/lesson-1/index';
import * as ed_u2_l1_quiz from './edexcel-alevel/unit-2/lesson-1/quiz';
import * as ed_u2_l2_theory from './edexcel-alevel/unit-2/lesson-2/index';
import * as ed_u2_l2_quiz from './edexcel-alevel/unit-2/lesson-2/quiz';
import * as ed_u2_l3_theory from './edexcel-alevel/unit-2/lesson-3/index';
import * as ed_u2_l3_quiz from './edexcel-alevel/unit-2/lesson-3/quiz';
import * as ed_u2_l4_theory from './edexcel-alevel/unit-2/lesson-4/index';
import * as ed_u2_l4_quiz from './edexcel-alevel/unit-2/lesson-4/quiz';
import * as ed_u2_l5_theory from './edexcel-alevel/unit-2/lesson-5/index';
import * as ed_u2_l5_quiz from './edexcel-alevel/unit-2/lesson-5/quiz';
import * as ed_u2_l6_theory from './edexcel-alevel/unit-2/lesson-6/index';
import * as ed_u2_l6_quiz from './edexcel-alevel/unit-2/lesson-6/quiz';
import * as ed_u3_l1_theory from './edexcel-alevel/unit-3/lesson-1/index';
import * as ed_u3_l1_quiz from './edexcel-alevel/unit-3/lesson-1/quiz';
import * as ed_u4_l1_theory from './edexcel-alevel/unit-4/lesson-1/index';
import * as ed_u4_l1_quiz from './edexcel-alevel/unit-4/lesson-1/quiz';
import * as ed_u4_l2_theory from './edexcel-alevel/unit-4/lesson-2/index';
import * as ed_u4_l2_quiz from './edexcel-alevel/unit-4/lesson-2/quiz';
import * as ed_u4_l3_theory from './edexcel-alevel/unit-4/lesson-3/index';
import * as ed_u4_l3_quiz from './edexcel-alevel/unit-4/lesson-3/quiz';
import * as ed_u4_l4_theory from './edexcel-alevel/unit-4/lesson-4/index';
import * as ed_u4_l4_quiz from './edexcel-alevel/unit-4/lesson-4/quiz';
import * as ed_u4_l5_theory from './edexcel-alevel/unit-4/lesson-5/index';
import * as ed_u4_l5_quiz from './edexcel-alevel/unit-4/lesson-5/quiz';
import * as ed_u4_l6_theory from './edexcel-alevel/unit-4/lesson-6/index';
import * as ed_u4_l6_quiz from './edexcel-alevel/unit-4/lesson-6/quiz';
import * as ed_u5_l1_theory from './edexcel-alevel/unit-5/lesson-1/index';
import * as ed_u5_l1_quiz from './edexcel-alevel/unit-5/lesson-1/quiz';
import * as ed_u5_l2_theory from './edexcel-alevel/unit-5/lesson-2/index';
import * as ed_u5_l2_quiz from './edexcel-alevel/unit-5/lesson-2/quiz';
import * as ed_u5_l3_theory from './edexcel-alevel/unit-5/lesson-3/index';
import * as ed_u5_l3_quiz from './edexcel-alevel/unit-5/lesson-3/quiz';
import * as ed_u5_l4_theory from './edexcel-alevel/unit-5/lesson-4/index';
import * as ed_u5_l4_quiz from './edexcel-alevel/unit-5/lesson-4/quiz';
import * as ed_u5_l5_theory from './edexcel-alevel/unit-5/lesson-5/index';
import * as ed_u5_l5_quiz from './edexcel-alevel/unit-5/lesson-5/quiz';
import * as ed_u6_l1_theory from './edexcel-alevel/unit-6/lesson-1/index';
import * as ed_u6_l1_quiz from './edexcel-alevel/unit-6/lesson-1/quiz';

export const edexcelRegistry: Record<string, Record<number, LessonRegistryItem>> = {
    'edexcel-alevel-unit-1': {
        1: { title: ed_u1_l1_theory.lessonTitle, number: ed_u1_l1_theory.lessonNumber, theory: ed_u1_l1_theory.theoryMarkdown, quiz: ed_u1_l1_quiz.lessonQuiz, parts: ed_u1_l1_theory.parts },
        2: { title: ed_u1_l2_theory.lessonTitle, number: ed_u1_l2_theory.lessonNumber, theory: ed_u1_l2_theory.theoryMarkdown, quiz: ed_u1_l2_quiz.lessonQuiz, parts: ed_u1_l2_theory.parts },
        3: { title: ed_u1_l3_theory.lessonTitle, number: ed_u1_l3_theory.lessonNumber, theory: ed_u1_l3_theory.theoryMarkdown, quiz: ed_u1_l3_quiz.lessonQuiz, parts: ed_u1_l3_theory.parts },
        4: { title: ed_u1_l4_theory.lessonTitle, number: ed_u1_l4_theory.lessonNumber, theory: ed_u1_l4_theory.theoryMarkdown, quiz: ed_u1_l4_quiz.lessonQuiz, parts: ed_u1_l4_theory.parts },
        5: { title: ed_u1_l5_theory.lessonTitle, number: ed_u1_l5_theory.lessonNumber, theory: ed_u1_l5_theory.theoryMarkdown, quiz: ed_u1_l5_quiz.lessonQuiz, parts: ed_u1_l5_theory.parts },
    },
    'edexcel-alevel-unit-2': {
        1: { title: ed_u2_l1_theory.lessonTitle, number: ed_u2_l1_theory.lessonNumber, theory: ed_u2_l1_theory.theoryMarkdown, quiz: ed_u2_l1_quiz.lessonQuiz, parts: ed_u2_l1_theory.parts },
        2: { title: ed_u2_l2_theory.lessonTitle, number: ed_u2_l2_theory.lessonNumber, theory: ed_u2_l2_theory.theoryMarkdown, quiz: ed_u2_l2_quiz.lessonQuiz, parts: ed_u2_l2_theory.parts },
        3: { title: ed_u2_l3_theory.lessonTitle, number: ed_u2_l3_theory.lessonNumber, theory: ed_u2_l3_theory.theoryMarkdown, quiz: ed_u2_l3_quiz.lessonQuiz, parts: ed_u2_l3_theory.parts },
        4: { title: ed_u2_l4_theory.lessonTitle, number: ed_u2_l4_theory.lessonNumber, theory: ed_u2_l4_theory.theoryMarkdown, quiz: ed_u2_l4_quiz.lessonQuiz, parts: ed_u2_l4_theory.parts },
        5: { title: ed_u2_l5_theory.lessonTitle, number: ed_u2_l5_theory.lessonNumber, theory: ed_u2_l5_theory.theoryMarkdown, quiz: ed_u2_l5_quiz.lessonQuiz, parts: ed_u2_l5_theory.parts },
        6: { title: ed_u2_l6_theory.lessonTitle, number: ed_u2_l6_theory.lessonNumber, theory: ed_u2_l6_theory.theoryMarkdown, quiz: ed_u2_l6_quiz.lessonQuiz, parts: ed_u2_l6_theory.parts },
    },
    'edexcel-alevel-unit-3': {
        1: { title: ed_u3_l1_theory.lessonTitle, number: ed_u3_l1_theory.lessonNumber, theory: ed_u3_l1_theory.theoryMarkdown, quiz: ed_u3_l1_quiz.lessonQuiz, parts: ed_u3_l1_theory.parts },
    },
    'edexcel-alevel-unit-4': {
        1: { title: ed_u4_l1_theory.lessonTitle, number: ed_u4_l1_theory.lessonNumber, theory: ed_u4_l1_theory.theoryMarkdown, quiz: ed_u4_l1_quiz.lessonQuiz, parts: ed_u4_l1_theory.parts },
        2: { title: ed_u4_l2_theory.lessonTitle, number: ed_u4_l2_theory.lessonNumber, theory: ed_u4_l2_theory.theoryMarkdown, quiz: ed_u4_l2_quiz.lessonQuiz, parts: ed_u4_l2_theory.parts },
        3: { title: ed_u4_l3_theory.lessonTitle, number: ed_u4_l3_theory.lessonNumber, theory: ed_u4_l3_theory.theoryMarkdown, quiz: ed_u4_l3_quiz.lessonQuiz, parts: ed_u4_l3_theory.parts },
        4: { title: ed_u4_l4_theory.lessonTitle, number: ed_u4_l4_theory.lessonNumber, theory: ed_u4_l4_theory.theoryMarkdown, quiz: ed_u4_l4_quiz.lessonQuiz, parts: ed_u4_l4_theory.parts },
        5: { title: ed_u4_l5_theory.lessonTitle, number: ed_u4_l5_theory.lessonNumber, theory: ed_u4_l5_theory.theoryMarkdown, quiz: ed_u4_l5_quiz.lessonQuiz, parts: ed_u4_l5_theory.parts },
        6: { title: ed_u4_l6_theory.lessonTitle, number: ed_u4_l6_theory.lessonNumber, theory: ed_u4_l6_theory.theoryMarkdown, quiz: ed_u4_l6_quiz.lessonQuiz, parts: ed_u4_l6_theory.parts },
    },
    'edexcel-alevel-unit-5': {
        1: { title: ed_u5_l1_theory.lessonTitle, number: ed_u5_l1_theory.lessonNumber, theory: ed_u5_l1_theory.theoryMarkdown, quiz: ed_u5_l1_quiz.lessonQuiz, parts: ed_u5_l1_theory.parts },
        2: { title: ed_u5_l2_theory.lessonTitle, number: ed_u5_l2_theory.lessonNumber, theory: ed_u5_l2_theory.theoryMarkdown, quiz: ed_u5_l2_quiz.lessonQuiz, parts: ed_u5_l2_theory.parts },
        3: { title: ed_u5_l3_theory.lessonTitle, number: ed_u5_l3_theory.lessonNumber, theory: ed_u5_l3_theory.theoryMarkdown, quiz: ed_u5_l3_quiz.lessonQuiz, parts: ed_u5_l3_theory.parts },
        4: { title: ed_u5_l4_theory.lessonTitle, number: ed_u5_l4_theory.lessonNumber, theory: ed_u5_l4_theory.theoryMarkdown, quiz: ed_u5_l4_quiz.lessonQuiz, parts: ed_u5_l4_theory.parts },
        5: { title: ed_u5_l5_theory.lessonTitle, number: ed_u5_l5_theory.lessonNumber, theory: ed_u5_l5_theory.theoryMarkdown, quiz: ed_u5_l5_quiz.lessonQuiz, parts: ed_u5_l5_theory.parts },
    },
    'edexcel-alevel-unit-6': {
        1: { title: ed_u6_l1_theory.lessonTitle, number: ed_u6_l1_theory.lessonNumber, theory: ed_u6_l1_theory.theoryMarkdown, quiz: ed_u6_l1_quiz.lessonQuiz, parts: ed_u6_l1_theory.parts },
    },
};

// Merge Edexcel into main registry
Object.assign(curriculumRegistry, edexcelRegistry);

export function getLessonFromRegistry(track: string, unitNumber: number, lessonNumber: number): LessonRegistryItem | null {
    let resolvedTrack = track.replace(/-20260106$/, '');
    if (resolvedTrack === 'edexcel-as' || resolvedTrack === 'edexcel-a2') {
        resolvedTrack = 'edexcel-alevel';
    }
    if (resolvedTrack === 'cie-as') {
        resolvedTrack = 'cie-alevel';
    }
    const key = `${resolvedTrack}-unit-${unitNumber}`;
    return curriculumRegistry[key]?.[lessonNumber] || null;
}
// Trigger rebuild for quiz expansion 20260627

