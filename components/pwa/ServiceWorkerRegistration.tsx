'use client';

import { useEffect, useState } from 'react';

export default function ServiceWorkerRegistration() {
    const [showUpdateBanner, setShowUpdateBanner] = useState(false);
    const [updateMessage, setUpdateMessage] = useState('New update available! 🔄');

    useEffect(() => {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            // Skip registration on localhost to avoid development caching issues
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                console.log('SW registration skipped on localhost');
                return;
            }

            // Register service worker
            navigator.serviceWorker
                .register('/sw.js')
                .then((registration) => {
                    console.log('SW registered:', registration.scope);

                    // Check for updates immediately
                    registration.update();

                    // Check for updates every 30 seconds
                    setInterval(() => {
                        registration.update();
                    }, 30000);

                    // Listen for new service worker
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        if (newWorker) {
                            newWorker.addEventListener('statechange', () => {
                                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                    // New version available - show update banner
                                    console.log('New version available!');
                                    setShowUpdateBanner(true);
                                }
                            });
                        }
                    });
                })
                .catch((error) => {
                    console.log('SW registration failed:', error);
                });

            // Listen for messages from service worker
            navigator.serviceWorker.addEventListener('message', (event) => {
                if (event.data && event.data.type === 'SW_UPDATED') {
                    console.log('SW updated to version:', event.data.version);
                    // Auto-refresh the page
                    window.location.reload();
                }
            });

            // Handle controller change (new SW activated)
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                console.log('New service worker activated, reloading...');
                window.location.reload();
            });
        }
    }, []);

    const handleUpdate = () => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistration().then((registration) => {
                if (registration && registration.waiting) {
                    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                    setUpdateMessage('Updating...');
                }
            });
        }
    };

    if (!showUpdateBanner) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: 12,
            boxShadow: '0 4px 20px rgba(139, 92, 246, 0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            zIndex: 9999,
            direction: 'ltr'
        }}>
            <span>{updateMessage}</span>
            <button
                onClick={handleUpdate}
                style={{
                    background: 'white',
                    color: '#8b5cf6',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: 8,
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}
            >
                Update Now
            </button>
        </div>
    );
}
