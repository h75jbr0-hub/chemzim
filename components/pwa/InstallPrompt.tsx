'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Download, X } from 'lucide-react';

export default function InstallPrompt() {
    const [mounted, setMounted] = useState(false);
    const [showPrompt, setShowPrompt] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isAlreadyInstalled, setIsAlreadyInstalled] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Check if already in standalone mode
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;
        if (isStandalone) {
            setIsAlreadyInstalled(true);
            return;
        }

        const checkInstalled = async () => {
            if ('getInstalledRelatedApps' in navigator) {
                try {
                    const relatedApps = await (navigator as any).getInstalledRelatedApps();
                    if (relatedApps && relatedApps.length > 0) {
                        setIsAlreadyInstalled(true);
                    }
                } catch (e) {
                    // Ignore errors
                }
            }
        };

        checkInstalled();

        const handleBeforeInstallPrompt = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
            // Show prompt after a short delay
            setTimeout(() => setShowPrompt(true), 2000);
        };

        const handleAppInstalled = () => {
            setIsAlreadyInstalled(true);
            setShowPrompt(false);
            setDeferredPrompt(null);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.addEventListener('appinstalled', handleAppInstalled);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
            window.removeEventListener('appinstalled', handleAppInstalled);
        };
    }, []);

    const handleInstall = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            await deferredPrompt.userChoice;
            setDeferredPrompt(null);
        }
        setShowPrompt(false);
    };

    // Wait for mount
    if (!mounted) return null;

    // Don't show if already installed
    if (isAlreadyInstalled) return null;

    // Don't show if dismissed
    if (!showPrompt) return null;

    return createPortal(
        <div
            style={{
                position: 'fixed',
                bottom: '30px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 999999,
                background: 'rgba(15, 23, 42, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '16px',
                padding: '16px 20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                minWidth: '320px',
                maxWidth: '400px',
                direction: 'ltr'
            }}
        >
            <div style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                padding: '12px',
                borderRadius: '12px'
            }}>
                <Download size={20} color="white" />
            </div>

            <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '14px' }}>
                    Install App 🚀
                </div>
                <div style={{ color: '#9ca3af', fontSize: '11px', marginTop: '4px' }}>
                    For quick access and offline study
                </div>
            </div>

            <button
                onClick={handleInstall}
                style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '12px',
                    cursor: 'pointer'
                }}
            >
                Install
            </button>

            <button
                onClick={() => setShowPrompt(false)}
                style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: 'none',
                    padding: '8px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex'
                }}
            >
                <X size={16} color="#9ca3af" />
            </button>
        </div>,
        document.body
    );
}
