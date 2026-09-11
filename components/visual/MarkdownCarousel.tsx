import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MarkdownCarouselProps {
    slides: React.ReactNode[];
}

export default function MarkdownCarousel({ slides }: MarkdownCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!slides || slides.length === 0) return null;

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full rounded-2xl border border-white/10 bg-[#0d0d26]/80 backdrop-blur-md overflow-hidden my-6 shadow-xl">
            {/* Carousel Content Container */}
            <div className="relative min-h-[300px] flex items-center justify-center p-6">
                {slides.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 p-6 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out overflow-y-auto ${
                            activeIndex === idx ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                        }`}
                    >
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            {slide}
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            {slides.length > 1 && (
                <>
                    {/* Previous Button */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors cursor-pointer"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors cursor-pointer"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={20} />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                                    activeIndex === idx ? 'bg-indigo-400 w-4' : 'bg-white/30 hover:bg-white/50'
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
