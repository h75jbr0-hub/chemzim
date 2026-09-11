import { Crosshair, Wand2, Zap, User, Waves, Bomb, Atom, Skull, Target, Crown, Beaker } from 'lucide-react';
import React from 'react';

/**
 * Title Icon Configuration Map
 * Centralized icon definitions for player titles in English
 */
export const TITLE_ICON_MAP: Record<string, React.ReactNode> = {
    // Sniper titles
    "Sniper": (
        <div className="relative w-5 h-5 flex items-center justify-center">
            <Crosshair size={18} className="text-red-500 absolute" />
            <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse" />
        </div>
    ),

    // Wizard titles
    "Wizard": (
        <div className="relative w-5 h-5 flex items-center justify-center">
            <Wand2 size={16} className="text-purple-400 -rotate-12" />
            <Zap size={8} className="text-yellow-400 absolute -top-1 -right-1 animate-pulse" fill="currentColor" />
        </div>
    ),

    // Survivor titles
    "Survivor": (
        <div className="relative w-6 h-5 flex items-center justify-center overflow-hidden" title="Sole Survivor">
            <User size={14} className="text-blue-200 absolute top-1" />
            <div className="absolute bottom-0 w-full flex text-blue-500">
                <Waves size={20} className="scale-150" />
            </div>
        </div>
    ),

    // Bomber titles
    "Bomber": <Bomb size={16} className="text-orange-500 animate-bounce" />,
    "Explosive": <Bomb size={16} className="text-orange-500 animate-bounce" />,

    // Mad/Nuclear titles
    "Mad": <Atom size={16} className="text-green-500 animate-spin-slow" />,
    "Nuclear": <Atom size={16} className="text-green-500 animate-spin-slow" />,

    // Destroyer titles
    "Destroyer": <Skull size={16} className="text-gray-400" />,

    // Precision titles
    "Precision": <Target size={16} className="text-blue-400" />,

    // King titles
    "King": <Crown size={16} className="text-yellow-500" fill="currentColor" />,
};

/**
 * Get the appropriate icon for a player title
 * Searches through keywords in the title to find a matching icon
 */
export function getTitleIcon(title: string): React.ReactNode {
    // Search for matching keyword in the title
    for (const [keyword, icon] of Object.entries(TITLE_ICON_MAP)) {
        if (title.toLowerCase().includes(keyword.toLowerCase())) {
            return icon;
        }
    }

    // Default fallback icon
    return <Beaker size={16} className="text-gray-400" />;
}

/**
 * Add a new title icon dynamically
 */
export function registerTitleIcon(keyword: string, icon: React.ReactNode): void {
    TITLE_ICON_MAP[keyword] = icon;
}
