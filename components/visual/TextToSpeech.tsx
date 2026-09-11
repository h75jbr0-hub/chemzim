'use client';

import { useState, useEffect, useRef } from 'react';
import { Volume2, StopCircle, Pause, Play, AlertCircle } from 'lucide-react';

interface TextToSpeechProps {
    text: string;
    title?: string;
}

export default function TextToSpeech({ text, title }: TextToSpeechProps) {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isSupported, setIsSupported] = useState(false);
    const [hasEnglishVoice, setHasEnglishVoice] = useState(false);
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            setIsSupported(true);

            const loadVoices = () => {
                const availableVoices = window.speechSynthesis.getVoices();
                setVoices(availableVoices);

                const englishVoice = availableVoices.find(v =>
                    v.lang.includes('en') ||
                    v.name.includes('English')
                );
                setHasEnglishVoice(!!englishVoice);
            };

            loadVoices();

            if (window.speechSynthesis.onvoiceschanged !== undefined) {
                window.speechSynthesis.onvoiceschanged = loadVoices;
            }
        }
    }, []);

    const getEnglishVoice = (): SpeechSynthesisVoice | undefined => {
        return voices.find(v => v.lang === 'en-GB') ||
            voices.find(v => v.lang === 'en-US') ||
            voices.find(v => v.lang.startsWith('en')) ||
            voices.find(v => v.name.toLowerCase().includes('english'));
    };

    const handlePlay = () => {
        if (!isSupported) return;

        if (isPaused) {
            window.speechSynthesis.resume();
            setIsPaused(false);
            setIsSpeaking(true);
            return;
        }

        if (isSpeaking) {
            window.speechSynthesis.pause();
            setIsPaused(true);
            setIsSpeaking(false);
            return;
        }

        window.speechSynthesis.cancel();

        const cleanText = text.replace(/[#_*`$-]/g, ' '); // Strip markdown elements
        const fullText = title ? `${title}. ${cleanText}` : cleanText;
        const utterance = new SpeechSynthesisUtterance(fullText);

        const englishVoice = getEnglishVoice();
        if (englishVoice) {
            utterance.voice = englishVoice;
            utterance.lang = englishVoice.lang;
        } else {
            utterance.lang = 'en-US';
        }

        utterance.rate = 0.95;
        utterance.pitch = 1;
        utterance.volume = 1;

        utterance.onend = () => {
            setIsSpeaking(false);
            setIsPaused(false);
        };

        utterance.onerror = (e) => {
            console.error('Speech synthesis error:', e);
            setIsSpeaking(false);
            setIsPaused(false);
        };

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
    };

    const handleStop = () => {
        if (!isSupported) return;
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        setIsPaused(false);
    };

    if (!isSupported) return null;

    return (
        <div className="flex items-center gap-2 px-3.5 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full w-fit">
            <button
                onClick={handlePlay}
                className="p-1.5 rounded-full hover:bg-indigo-500/10 text-indigo-400 transition-colors cursor-pointer flex items-center justify-center"
                title={isSpeaking ? "Pause" : "Listen to Lesson"}
            >
                {isSpeaking ? <Pause size={18} /> : <Volume2 size={18} />}
            </button>

            {!hasEnglishVoice && (
                <span className="text-[10px] text-amber-400 flex items-center gap-1 font-medium">
                    <AlertCircle size={12} />
                    English voice unavailable
                </span>
            )}

            {(isSpeaking || isPaused) && (
                <button
                    onClick={handleStop}
                    className="p-1.5 rounded-full hover:bg-red-500/10 text-red-400 transition-colors cursor-pointer flex items-center justify-center"
                    title="Stop Listening"
                >
                    <StopCircle size={18} />
                </button>
            )}
        </div>
    );
}
