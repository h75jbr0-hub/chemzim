import { describe, it, expect } from 'vitest';
import { curriculumRegistry, edexcelRegistry, getLessonFromRegistry } from '@/data/curriculum/registry';

describe('Curriculum Registry Integrity', () => {
    it('should contain edexcel-alevel units in registry', () => {
        expect(edexcelRegistry).toBeDefined();
        expect(edexcelRegistry['edexcel-alevel-unit-1']).toBeDefined();
        expect(edexcelRegistry['edexcel-alevel-unit-4']).toBeDefined();
    });

    it('should retrieve lessons correctly using getLessonFromRegistry', () => {
        const lesson = getLessonFromRegistry('edexcel-alevel', 1, 1);
        expect(lesson).not.toBeNull();
        expect(lesson?.number).toBe(1);
        expect(typeof lesson?.title).toBe('string');
        expect(lesson?.title.length).toBeGreaterThan(0);
    });

    it('should support track resolution aliases (edexcel-as to edexcel-alevel)', () => {
        const lesson = getLessonFromRegistry('edexcel-as', 4, 1);
        expect(lesson).not.toBeNull();
        expect(lesson?.number).toBe(1);
    });

    it('should ensure all lesson parts have valid id, title, and type if present', () => {
        const unit1Lesson1 = getLessonFromRegistry('edexcel-alevel', 1, 1);
        if (unit1Lesson1?.parts) {
            unit1Lesson1.parts.forEach((part) => {
                expect(part.id).toBeTruthy();
                expect(part.title).toBeTruthy();
                expect(['text', 'interactive', 'simulation', 'quiz']).toContain(part.type);
            });
        }
    });
});
