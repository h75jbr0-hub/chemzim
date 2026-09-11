'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>('dark'); // Default to dark for premium look initially

    useEffect(() => {
        // Read theme from localStorage or system preferences on mount
        const storedTheme = localStorage.getItem('theme') as Theme | null;
        if (storedTheme) {
            setThemeState(storedTheme);
            applyTheme(storedTheme);
        } else {
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const initialTheme: Theme = systemPrefersDark ? 'dark' : 'light';
            setThemeState(initialTheme);
            applyTheme(initialTheme);
        }
    }, []);

    const applyTheme = (t: Theme) => {
        const root = window.document.documentElement;
        console.log('applyTheme called with:', t);
        if (t === 'dark') {
            root.classList.add('dark');
            console.log('Class list after adding dark:', root.classList.toString());
        } else {
            root.classList.remove('dark');
            console.log('Class list after removing dark:', root.classList.toString());
        }
    };

    const setTheme = (t: Theme) => {
        setThemeState(t);
        localStorage.setItem('theme', t);
        applyTheme(t);
    };

    const toggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
