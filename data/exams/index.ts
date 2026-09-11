import { Question } from './types';
import { questionBank as baseQuestionBank } from './question-bank';
import { examsRegistry } from './registry';

export * from './types';
export * from './exam-generator';
export * from './registry';

// Flatten all questions from the modular exams registry
const registeredQuestions: Question[] = [];
Object.values(examsRegistry).forEach(trackRegistry => {
    Object.values(trackRegistry).forEach(unitRegistry => {
        Object.values(unitRegistry).forEach(lessonQuestions => {
            registeredQuestions.push(...lessonQuestions);
        });
    });
});

export const questionBank: Question[] = [...baseQuestionBank, ...registeredQuestions];
