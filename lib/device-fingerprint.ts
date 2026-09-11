// Device Fingerprinting Library
// Creates a unique fingerprint for each device

export interface DeviceInfo {
    fingerprint: string;
    name: string;
    type: 'mobile' | 'tablet' | 'desktop' | 'unknown';
    browser: string;
    os: string;
    screenResolution: string;
    language: string;
    timezone: string;
}

// Detect device type
function getDeviceType(): 'mobile' | 'tablet' | 'desktop' | 'unknown' {
    if (typeof window === 'undefined') return 'unknown';

    const ua = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|ipod|android.*mobile|windows.*phone|blackberry/i.test(ua);
    const isTablet = /ipad|android(?!.*mobile)|tablet/i.test(ua);

    if (isMobile) return 'mobile';
    if (isTablet) return 'tablet';
    return 'desktop';
}

// Detect browser
function getBrowser(): string {
    if (typeof window === 'undefined') return 'Unknown';

    const ua = navigator.userAgent;

    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('SamsungBrowser')) return 'Samsung Browser';
    if (ua.includes('Opera') || ua.includes('OPR')) return 'Opera';
    if (ua.includes('Trident')) return 'Internet Explorer';
    if (ua.includes('Edge')) return 'Edge (Legacy)';
    if (ua.includes('Edg')) return 'Edge';
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Safari')) return 'Safari';

    return 'Unknown Browser';
}

// Detect OS
function getOS(): string {
    if (typeof window === 'undefined') return 'Unknown';

    const ua = navigator.userAgent;
    const platform = navigator.platform;

    if (/Win/i.test(platform)) {
        if (ua.includes('Windows NT 10')) return 'Windows 10/11';
        if (ua.includes('Windows NT 6.3')) return 'Windows 8.1';
        if (ua.includes('Windows NT 6.2')) return 'Windows 8';
        if (ua.includes('Windows NT 6.1')) return 'Windows 7';
        return 'Windows';
    }

    if (/Mac/i.test(platform)) return 'macOS';
    if (/Linux/i.test(platform)) return 'Linux';
    if (/Android/i.test(ua)) return 'Android';
    if (/iPhone|iPad|iPod/i.test(ua)) return 'iOS';

    return 'Unknown OS';
}

// Get device name
function getDeviceName(): string {
    if (typeof window === 'undefined') return 'Unknown Device';

    const ua = navigator.userAgent;
    const deviceType = getDeviceType();
    const browser = getBrowser();
    const os = getOS();

    // Try to get more specific device name for mobile
    if (deviceType === 'mobile' || deviceType === 'tablet') {
        // iPhone models
        if (/iPhone/i.test(ua)) {
            return 'iPhone';
        }

        // iPad
        if (/iPad/i.test(ua)) {
            return 'iPad';
        }

        // Samsung
        if (/Samsung/i.test(ua)) {
            const match = ua.match(/Samsung\s([\w-]+)/i);
            if (match) return `Samsung ${match[1]}`;
            return 'Samsung Device';
        }

        // Generic Android
        if (/Android/i.test(ua)) {
            const match = ua.match(/;\s*([^;)]+(?:Build|\)))/);
            if (match) {
                const device = match[1].replace(/Build.*/, '').trim();
                if (device && device.length < 30) return device;
            }
            return 'Android Device';
        }
    }

    return `${os} - ${browser}`;
}

// Generate a hash from string
async function generateHash(str: string): Promise<string> {
    if (typeof window === 'undefined') return str;

    const encoder = new TextEncoder();
    const data = encoder.encode(str);

    try {
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    } catch {
        // Fallback for older browsers
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash).toString(16);
    }
}

// Collect canvas fingerprint
function getCanvasFingerprint(): string {
    if (typeof window === 'undefined') return '';

    try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return '';

        canvas.width = 200;
        canvas.height = 50;

        // Draw text with specific styling
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.fillStyle = '#f60';
        ctx.fillRect(125, 1, 62, 20);
        ctx.fillStyle = '#069';
        ctx.fillText('ChemZimjo🧪', 2, 15);
        ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
        ctx.fillText('ChemZimjo🧪', 4, 17);

        return canvas.toDataURL();
    } catch {
        return '';
    }
}

// Collect WebGL fingerprint
function getWebGLFingerprint(): string {
    if (typeof window === 'undefined') return '';

    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) return '';

        const webgl = gl as WebGLRenderingContext;
        const debugInfo = webgl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
            const vendor = webgl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
            const renderer = webgl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            return `${vendor}~${renderer}`;
        }

        return webgl.getParameter(webgl.VERSION) || '';
    } catch {
        return '';
    }
}

// Get audio fingerprint using deterministic OfflineAudioContext (no user gesture or race conditions)
function getAudioFingerprint(): Promise<string> {
    return new Promise((resolve) => {
        try {
            if (typeof window === 'undefined') {
                resolve('');
                return;
            }

            const OfflineContext = window.OfflineAudioContext || (window as unknown as { webkitOfflineAudioContext?: typeof OfflineAudioContext }).webkitOfflineAudioContext;
            if (!OfflineContext) {
                resolve('');
                return;
            }

            const context = new OfflineContext(1, 44100, 44100);
            const oscillator = context.createOscillator();
            oscillator.type = 'triangle';
            oscillator.frequency.setValueAtTime(10000, context.currentTime);

            const compressor = context.createDynamicsCompressor();
            compressor.threshold.setValueAtTime(-50, context.currentTime);
            compressor.knee.setValueAtTime(40, context.currentTime);
            compressor.ratio.setValueAtTime(12, context.currentTime);
            compressor.attack.setValueAtTime(0, context.currentTime);
            compressor.release.setValueAtTime(0.25, context.currentTime);

            oscillator.connect(compressor);
            compressor.connect(context.destination);
            oscillator.start(0);

            context.oncomplete = (e) => {
                try {
                    const samples = e.renderedBuffer.getChannelData(0);
                    let sum = 0;
                    for (let i = 4500; i < 5000; i++) {
                        sum += Math.abs(samples[i] || 0);
                    }
                    resolve(sum.toFixed(6));
                } catch {
                    resolve('');
                }
            };
            context.startRendering();
        } catch {
            resolve('');
        }
    });
}

// Get fonts fingerprint
function getFontsFingerprint(): string {
    if (typeof window === 'undefined') return '';

    const baseFonts = ['monospace', 'sans-serif', 'serif'];
    const testFonts = [
        'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New',
        'Georgia', 'Impact', 'Times New Roman', 'Trebuchet MS',
        'Verdana', 'Lucida Console', 'Tahoma', 'Palatino Linotype'
    ];

    const testString = 'mmmmmmmmmmlli';
    const testSize = '72px';
    const h = document.createElement('span');
    h.style.position = 'absolute';
    h.style.left = '-9999px';
    h.style.fontSize = testSize;
    h.innerHTML = testString;

    const defaultWidths: { [key: string]: number } = {};
    baseFonts.forEach((font) => {
        h.style.fontFamily = font;
        document.body.appendChild(h);
        defaultWidths[font] = h.offsetWidth;
        document.body.removeChild(h);
    });

    const detected: string[] = [];
    testFonts.forEach((font) => {
        baseFonts.forEach((baseFont) => {
            h.style.fontFamily = `'${font}', ${baseFont}`;
            document.body.appendChild(h);
            if (h.offsetWidth !== defaultWidths[baseFont]) {
                detected.push(font);
            }
            document.body.removeChild(h);
        });
    });

    return [...new Set(detected)].join(',');
}

// Generate complete device fingerprint
export async function getDeviceFingerprint(): Promise<DeviceInfo> {
    if (typeof window === 'undefined') {
        return {
            fingerprint: 'server-side',
            name: 'Server',
            type: 'unknown',
            browser: 'Unknown',
            os: 'Unknown',
            screenResolution: '0x0',
            language: 'unknown',
            timezone: 'unknown',
        };
    }

    const deviceType = getDeviceType();
    const browser = getBrowser();
    const os = getOS();
    const deviceName = getDeviceName();
    const screenResolution = `${screen.width}x${screen.height}`;
    const language = navigator.language || '';
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';

    // Check if we already have a persisted stable fingerprint in localStorage
    const stored = getStoredFingerprint();
    if (stored && stored.length >= 16) {
        return {
            fingerprint: stored,
            name: deviceName,
            type: deviceType,
            browser,
            os,
            screenResolution,
            language,
            timezone,
        };
    }

    // Collect fingerprinting data
    const colorDepth = screen.colorDepth?.toString() || '';
    const platform = navigator.platform || '';
    const cookiesEnabled = navigator.cookieEnabled?.toString() || '';
    const doNotTrack = navigator.doNotTrack || '';
    const hardwareConcurrency = navigator.hardwareConcurrency?.toString() || '';
    const deviceMemory = (navigator as unknown as { deviceMemory?: number }).deviceMemory?.toString() || '';
    const touchSupport = ('ontouchstart' in window || navigator.maxTouchPoints > 0).toString();
    const plugins = Array.from(navigator.plugins || []).map(p => p.name).join(',');

    const canvas = getCanvasFingerprint();
    const webgl = getWebGLFingerprint();
    const audio = await getAudioFingerprint();
    const fonts = getFontsFingerprint();

    // Combine all fingerprinting data
    const fingerprintData = [
        screenResolution,
        colorDepth,
        language,
        timezone,
        platform,
        cookiesEnabled,
        doNotTrack,
        hardwareConcurrency,
        deviceMemory,
        touchSupport,
        plugins,
        canvas.substring(0, 100),
        webgl,
        audio,
        fonts,
        deviceType,
        browser,
        os,
    ].join('|');

    const rawHash = await generateHash(fingerprintData);
    const fingerprint = rawHash.substring(0, 32);

    // Persist to localStorage immediately
    storeFingerprint(fingerprint);

    return {
        fingerprint,
        name: deviceName,
        type: deviceType,
        browser,
        os,
        screenResolution,
        language,
        timezone,
    };
}

// Store fingerprint in localStorage for persistence
export function storeFingerprint(fingerprint: string): void {
    if (typeof window !== 'undefined') {
        localStorage.setItem('device_fingerprint', fingerprint);
    }
}

// Get stored fingerprint
export function getStoredFingerprint(): string | null {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('device_fingerprint');
    }
    return null;
}

// Clear stored fingerprint
export function clearFingerprint(): void {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('device_fingerprint');
    }
}
