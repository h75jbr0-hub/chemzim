'use client';

import React, { useEffect, useState, Suspense, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
    Users, 
    UserPlus,
    Smartphone, 
    BookOpen, 
    ShieldAlert,
    Activity,
    Search,
    Filter,
    MoreVertical,
    CheckCircle2,
    XCircle,
    Clock,
    Copy,
    Check,
    Shield,
    TrendingUp,
    Trophy,
    Megaphone,
    Send,
    Key,
    Mail,
    Phone,
    Calendar,
    Flame,
    Zap,
    Award,
    ShieldCheck,
    AlertTriangle,
    Edit2,
    Save,
    Printer
} from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { StudentParentReportModal } from '@/components/admin/StudentParentReportModal';

function StudentAvatar({ 
    name, 
    username, 
    image, 
    size = "w-9 h-9", 
    textClass = "text-xs",
    rounded = "rounded-full"
}: { 
    name: string; 
    username?: string; 
    image?: string; 
    size?: string; 
    textClass?: string;
    rounded?: string;
}) {
    const [imgError, setImgError] = useState(false);
    
    // Extract initials (up to 2 letters)
    const initials = (name || username || '?')
        .trim()
        .split(/\s+/)
        .map(p => p[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();

    // Deterministic pleasant gradient based on name/username
    const bgGradients = [
        'from-indigo-600 to-purple-600',
        'from-emerald-600 to-teal-600',
        'from-blue-600 to-cyan-600',
        'from-rose-600 to-pink-600',
        'from-amber-600 to-orange-600',
        'from-violet-600 to-fuchsia-600'
    ];
    const seed = (name || username || 'a');
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    const grad = bgGradients[Math.abs(hash) % bgGradients.length];

    const isUrl = (str?: string) => !!str && (str.startsWith('http') || str.startsWith('/') || str.startsWith('data:'));

    if (!image || imgError) {
        return (
            <div className={`${size} ${rounded} bg-gradient-to-tr ${grad} flex items-center justify-center font-bold text-white ${textClass} shadow-inner flex-shrink-0 select-none border border-white/10`}>
                {initials}
            </div>
        );
    }

    // If image is an emoji (e.g. ⚛️, 🧪, 🧑‍🔬)
    if (!isUrl(image)) {
        return (
            <div className={`${size} ${rounded} bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center ${textClass} select-none flex-shrink-0 shadow-sm leading-none`}>
                <span>{image}</span>
            </div>
        );
    }

    return (
        <img 
            src={image} 
            alt={name} 
            onError={() => setImgError(true)}
            className={`${size} ${rounded} object-cover flex-shrink-0`} 
        />
    );
}

function AdminContent() {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeTab = searchParams.get('tab') || 'overview';
    
    const setActiveTab = (tab: string) => {
        router.push(`/admin?tab=${tab}`);
    };
    
    // --- Student Creation State ---
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showQuickPaste, setShowQuickPaste] = useState(false);
    const [quickPasteText, setQuickPasteText] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        grade: 'cie-igcse',
        enrolledTracks: ['cie-igcse'] as string[],
        email: '',
        phone: '',
        notes: '',
        role: 'student' as 'student' | 'moderator'
    });
    const [createdCredentials, setCreatedCredentials] = useState<{ username: string; password?: string } | null>(null);
    const [copiedField, setCopiedField] = useState<string | null>(null);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, msg: string }>({ type: null, msg: '' });

    const handleQuickPaste = (text: string) => {
        setQuickPasteText(text);
        if (!text.trim()) return;

        const lines = text.split('\n').map(l => l.trim());
        let name = '';
        let email = '';
        let phone = '';
        let grade = formData.grade;
        let detectedTracks: string[] = [];

        // 1. Email extraction
        const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
        if (emailMatch) {
            email = emailMatch[0];
        }

        // 2. Phone extraction (robust matching, avoiding timestamps or dates)
        const phoneMatch = text.match(/\b(?:\+?|00)?[0-9]\d{8,13}\b/);
        if (phoneMatch) {
            phone = phoneMatch[0];
        }

        // 3. Grade/Curriculum extraction (English keywords)
        const lowerText = text.toLowerCase();
        if (lowerText.includes('edexcel')) {
            if (lowerText.includes('as-level') || lowerText.includes('as level') || lowerText.includes(' as ')) {
                grade = 'edexcel-as';
                detectedTracks.push('edexcel-as');
            } else if (lowerText.includes('a2-level') || lowerText.includes('a2 level') || lowerText.includes(' a2 ') || lowerText.includes(' a-level ') || lowerText.includes(' a level ')) {
                grade = 'edexcel-a2';
                detectedTracks.push('edexcel-a2');
            } else {
                grade = 'edexcel-igcse';
                detectedTracks.push('edexcel-igcse');
            }
        }
        if (lowerText.includes('cie') || lowerText.includes('cambridge') || (!lowerText.includes('edexcel') && (lowerText.includes('as-level') || lowerText.includes('igcse') || lowerText.includes('a-level')))) {
            if (lowerText.includes('as-level') || lowerText.includes('as level') || lowerText.includes(' as ')) {
                if (!grade || grade === 'cie-igcse') grade = 'cie-as';
                detectedTracks.push('cie-as');
            } else if (lowerText.includes('a-level') || lowerText.includes('a level') || lowerText.includes(' alevel ')) {
                if (!grade || grade === 'cie-igcse') grade = 'cie-alevel';
                detectedTracks.push('cie-alevel');
            } else if (lowerText.includes('igcse') || lowerText.includes('cie') || lowerText.includes('cambridge')) {
                detectedTracks.push('cie-igcse');
            }
        }

        // 4. Name extraction
        const nameLine = lines.find(line => {
            const lowerLine = line.toLowerCase();
            return lowerLine.startsWith('name:') || 
                   lowerLine.startsWith('full name:') || 
                   lowerLine.startsWith('student name:') ||
                   lowerLine.startsWith('student:');
        });

        if (nameLine) {
            name = nameLine.replace(/^(name:|full name:|student name:|student:)\s*/i, '').trim();
        } else {
            const fallback = lines.find(line => {
                const clean = line.trim();
                return clean.length > 2 && 
                       !clean.includes('@') && 
                       !/(?:\+?|00)?\d{9,15}/.test(clean) && 
                       !clean.toLowerCase().includes('curriculum') && 
                       !clean.toLowerCase().includes('track') && 
                       !clean.toLowerCase().includes('grade');
            });
            if (fallback) {
                name = fallback;
            }
        }

        let username = formData.username;
        if (name && !formData.username) {
            username = name.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 15);
        }

        const finalEnrolled = detectedTracks.length > 0 ? Array.from(new Set(detectedTracks)) : (grade ? [grade] : formData.enrolledTracks);

        setFormData(prev => ({
            ...prev,
            name: name || prev.name,
            email: email || prev.email,
            phone: phone || prev.phone,
            grade: grade || prev.grade,
            enrolledTracks: finalEnrolled,
            username: username || prev.username,
            notes: text.trim() ? `Imported from pasted text:\n"${text.trim()}"` : prev.notes
        }));
    };

    // --- Password Reset States & Handlers ---
    const [resetPasswordStudent, setResetPasswordStudent] = useState<any | null>(null);
    const [newStudentPassword, setNewStudentPassword] = useState('');
    const [isResettingPassword, setIsResettingPassword] = useState(false);
    const [resetCredentialsResult, setResetCredentialsResult] = useState<{ username: string; password?: string } | null>(null);

    // --- Edit Student Tracks Modal State ---
    const [editTracksStudent, setEditTracksStudent] = useState<any | null>(null);
    const [editingTracks, setEditingTracks] = useState<string[]>([]);
    const [isUpdatingTracks, setIsUpdatingTracks] = useState(false);

    // --- Student Profile Modal State ---
    const [selectedStudentProfile, setSelectedStudentProfile] = useState<any | null>(null);
    const [isParentReportOpen, setIsParentReportOpen] = useState(false);
    const [studentRemarksText, setStudentRemarksText] = useState('');
    const [isSavingRemarks, setIsSavingRemarks] = useState(false);
    const [remarksSavedSuccess, setRemarksSavedSuccess] = useState(false);

    // Direct Message State
    const [directMsgTitle, setDirectMsgTitle] = useState('');
    const [directMsgBody, setDirectMsgBody] = useState('');
    const [isSendingDirectMsg, setIsSendingDirectMsg] = useState(false);
    const [directMsgSentSuccess, setDirectMsgSentSuccess] = useState(false);

    // Force Logout State
    const [isTerminatingSessions, setIsTerminatingSessions] = useState(false);

    // Direct Student Profile Editing State
    const [isEditingDetails, setIsEditingDetails] = useState(false);
    const [editName, setEditName] = useState('');
    const [editEmail, setEditEmail] = useState('');
    const [editPhone, setEditPhone] = useState('');
    const [isSavingDetails, setIsSavingDetails] = useState(false);
    const [detailsSavedSuccess, setDetailsSavedSuccess] = useState(false);

    // Synchronize remarks and edit details text when student profile opens
    useEffect(() => {
        if (selectedStudentProfile) {
            setStudentRemarksText(selectedStudentProfile.notes || '');
            setEditName(selectedStudentProfile.name || '');
            setEditEmail(selectedStudentProfile.email || '');
            setEditPhone(selectedStudentProfile.phone || '');
            setIsEditingDetails(false);
            setDetailsSavedSuccess(false);
            setRemarksSavedSuccess(false);
            setDirectMsgSentSuccess(false);
            setDirectMsgTitle('');
            setDirectMsgBody('');
        }
    }, [selectedStudentProfile]);

    const handleSaveStudentDetails = async () => {
        if (!selectedStudentProfile || !editName.trim()) return;
        setIsSavingDetails(true);
        try {
            const res = await fetch('/api/admin/students', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'edit-profile',
                    studentId: selectedStudentProfile.id,
                    name: editName.trim(),
                    email: editEmail.trim(),
                    phone: editPhone.trim()
                })
            });
            const data = await res.json();
            if (data.success) {
                setDetailsSavedSuccess(true);
                setIsEditingDetails(false);
                setSelectedStudentProfile((prev: any) => ({
                    ...prev,
                    name: editName.trim(),
                    email: editEmail.trim(),
                    phone: editPhone.trim()
                }));
                // Update in students list state
                setStudents(prev => prev.map(s => s.id === selectedStudentProfile.id ? {
                    ...s,
                    name: editName.trim(),
                    email: editEmail.trim(),
                    phone: editPhone.trim()
                } : s));
                setTimeout(() => setDetailsSavedSuccess(false), 3000);
            } else {
                alert(data.error || 'Failed to update student details');
            }
        } catch (e) {
            console.error(e);
            alert('Failed to update student details');
        } finally {
            setIsSavingDetails(false);
        }
    };

    const handleSaveRemarks = async () => {
        if (!selectedStudentProfile) return;
        setIsSavingRemarks(true);
        try {
            const res = await fetch('/api/admin/students', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'update-notes',
                    studentId: selectedStudentProfile.id,
                    notes: studentRemarksText
                })
            });
            const data = await res.json();
            if (data.success) {
                setRemarksSavedSuccess(true);
                setTimeout(() => setRemarksSavedSuccess(false), 3000);
                setSelectedStudentProfile((prev: any) => prev ? { ...prev, notes: studentRemarksText } : null);
                fetchStudents();
            } else {
                alert(data.error || 'Failed to save notes');
            }
        } catch (e) {
            console.error(e);
            alert('Connection error');
        } finally {
            setIsSavingRemarks(false);
        }
    };

    const handleSendDirectNotification = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedStudentProfile || !directMsgBody.trim()) return;
        setIsSendingDirectMsg(true);
        try {
            const res = await fetch('/api/admin/students', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'send-message',
                    studentId: selectedStudentProfile.id,
                    title: directMsgTitle.trim() || 'Notice from Master Hazim',
                    message: directMsgBody.trim()
                })
            });
            const data = await res.json();
            if (data.success) {
                setDirectMsgSentSuccess(true);
                setDirectMsgTitle('');
                setDirectMsgBody('');
                setTimeout(() => setDirectMsgSentSuccess(false), 4000);
            } else {
                alert(data.error || 'Failed to send notification');
            }
        } catch (e) {
            console.error(e);
            alert('Connection error');
        } finally {
            setIsSendingDirectMsg(false);
        }
    };

    const handleForceLogoutAll = async () => {
        if (!selectedStudentProfile) return;
        if (!confirm(`Are you sure you want to terminate all active sessions and unlink all devices for ${selectedStudentProfile.name}? The student will need to log in and re-request device approval.`)) {
            return;
        }
        setIsTerminatingSessions(true);
        try {
            const res = await fetch('/api/admin/students', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'force-logout',
                    studentId: selectedStudentProfile.id
                })
            });
            const data = await res.json();
            if (data.success) {
                alert('All sessions terminated and devices disconnected successfully.');
                setSelectedStudentProfile((prev: any) => prev ? { ...prev, devices: [] } : null);
                fetchStudents();
                fetchDevices();
            } else {
                alert(data.error || 'Failed to terminate sessions');
            }
        } catch (e) {
            console.error(e);
            alert('Connection error');
        } finally {
            setIsTerminatingSessions(false);
        }
    };

    const handleResetPasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!resetPasswordStudent || !newStudentPassword.trim()) return;
        setIsResettingPassword(true);
        try {
            const res = await fetch('/api/admin/students', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'reset-password',
                    studentId: resetPasswordStudent.id,
                    newPassword: newStudentPassword
                })
            });
            const data = await res.json();
            if (data.success) {
                setResetCredentialsResult({
                    username: resetPasswordStudent.username,
                    password: newStudentPassword
                });
                setNewStudentPassword('');
            } else {
                alert(data.error || 'Failed to reset password');
            }
        } catch (err) {
            console.error(err);
            alert('Connection error');
        } finally {
            setIsResettingPassword(false);
        }
    };

    const handleCreateStudent = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsCreating(true);
        setStatus({ type: null, msg: '' });
        setCreatedCredentials(null);

        const primaryGrade = formData.enrolledTracks.length > 0 ? formData.enrolledTracks[0] : formData.grade;

        try {
            const res = await fetch('/api/auth/join', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    username: formData.username || undefined,
                    password: formData.password || undefined,
                    grade: primaryGrade,
                    enrolledTracks: formData.enrolledTracks.length > 0 ? formData.enrolledTracks : [primaryGrade],
                    email: formData.email,
                    phone: formData.phone,
                    notes: formData.notes,
                    role: formData.role
                })
            });
            const data = await res.json();

            if (data.success) {
                setStatus({ type: 'success', msg: `Student account created successfully!` });
                setCreatedCredentials(data.credentials);
                setFormData({
                    name: '',
                    username: '',
                    password: '',
                    grade: 'cie-igcse',
                    enrolledTracks: ['cie-igcse'],
                    email: '',
                    phone: '',
                    notes: '',
                    role: 'student'
                });
                fetchStudents();
            } else {
                setStatus({ type: 'error', msg: data.error || 'Failed to create student' });
            }
        } catch (err) {
            setStatus({ type: 'error', msg: 'Network error. Try again.' });
        } finally {
            setIsCreating(false);
        }
    };

    // --- Announcements State & Handlers ---
    const [announcements, setAnnouncements] = useState<any[]>([]);
    const [annTitle, setAnnTitle] = useState('');
    const [annContent, setAnnContent] = useState('');
    const [annCategory, setAnnCategory] = useState('Important');
    const [annTargetCurriculum, setAnnTargetCurriculum] = useState('all');
    const [annStartDate, setAnnStartDate] = useState('');
    const [annEndDate, setAnnEndDate] = useState('');

    // --- Audit Logs State & Handlers ---
    const [auditLogs, setAuditLogs] = useState<any[]>([]);
    const [isLoadingAuditLogs, setIsLoadingAuditLogs] = useState(false);
    const [auditCategoryFilter, setAuditCategoryFilter] = useState<string>('all');

    const fetchAuditLogs = useCallback(async () => {
        setIsLoadingAuditLogs(true);
        try {
            const res = await fetch('/api/admin/audit-logs');
            const data = await res.json();
            if (data.success) {
                setAuditLogs(data.logs || []);
            }
        } catch (e) {
            console.error('[fetchAuditLogs] Error:', e);
        } finally {
            setIsLoadingAuditLogs(false);
        }
    }, []);

    const fetchAnnouncements = useCallback(async () => {
        try {
            const res = await fetch('/api/announcements?curriculum=all');
            const data = await res.json();
            if (data.success) {
                setAnnouncements(data.announcements || []);
            }
        } catch (e) {
            console.error(e);
        }
    }, []);

    const handlePostAnnouncement = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!annTitle.trim() || !annContent.trim()) return;
        try {
            const res = await fetch('/api/announcements', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: annTitle,
                    content: annContent,
                    category: annCategory,
                    targetCurriculum: annTargetCurriculum,
                    startDate: annStartDate || null,
                    endDate: annEndDate || null
                })
            });
            const data = await res.json();
            if (data.success) {
                setAnnTitle('');
                setAnnContent('');
                setAnnTargetCurriculum('all');
                setAnnStartDate('');
                setAnnEndDate('');
                fetchAnnouncements();
                alert('Announcement broadcasted successfully to targeted students!');
            } else {
                alert(data.error || 'Failed to post announcement');
            }
        } catch (err) {
            console.error(err);
            alert('Connection error');
        }
    };
    const [deviceRequests, setDeviceRequests] = useState<any[]>([]);
    const [isLoadingDevices, setIsLoadingDevices] = useState(false);
    const [authStats, setAuthStats] = useState<any | null>(null);
    const [students, setStudents] = useState<any[]>([]);
    const [isLoadingStudents, setIsLoadingStudents] = useState(false);
    const [studentSearch, setStudentSearch] = useState('');
    const [deviceSubTab, setDeviceSubTab] = useState<'new' | 'all'>('new');
    const [deviceFilter, setDeviceFilter] = useState<'all' | 'approved' | 'pending' | 'blocked'>('all');


    const handleStudentDeviceAction = async (action: 'block' | 'unblock' | 'remove', studentId: string, deviceId: string) => {
        if (action === 'remove' && !confirm('Are you sure you want to disconnect and remove this device?')) {
            return;
        }
        try {
            const res = await fetch('/api/admin/devices', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action, studentId, deviceId })
            });
            const data = await res.json();
            if (data.success) {
                fetchDevices();
                fetchStudents();
            } else {
                alert(data.error || 'Failed to execute action');
            }
        } catch (e) {
            console.error(e);
            alert('Connection error');
        }
    };

    const allStudentDevices = React.useMemo(() => {
        const list: any[] = [];
        students.forEach(s => {
            if (s.devices) {
                s.devices.forEach((d: any) => {
                    list.push({
                        ...d,
                        studentId: s.id,
                        studentName: s.name,
                    });
                });
            }
        });
        return list;
    }, [students]);

    const filteredStudentDevices = React.useMemo(() => {
        if (deviceFilter === 'all') return allStudentDevices;
        return allStudentDevices.filter((d: any) => d.status === deviceFilter);
    }, [allStudentDevices, deviceFilter]);

    const dentalStats = React.useMemo(() => {
        const dentalStudents = students.filter(s => s.grade === 'dentistry' || (s.enrolledTracks && s.enrolledTracks.includes('dentistry')));
        const total = dentalStudents.length;
        const active = dentalStudents.filter(s => s.isActive).length;
        const totalXP = dentalStudents.reduce((sum, s) => sum + (s.xp || 0), 0);
        const totalBookmarks = dentalStudents.reduce((sum, s) => sum + (s.dentalBookmarks?.length || 0), 0);
        const totalMistakes = dentalStudents.reduce((sum, s) => sum + (s.dentalMistakes?.length || 0), 0);

        return {
            total,
            active,
            totalXP,
            totalBookmarks,
            totalMistakes
        };
    }, [students]);

    // Curriculum enrollment breakdown & activity analytics (Proposal 4)
    const curriculumBreakdown = React.useMemo(() => {
        const counts: Record<string, { label: string; count: number; active: number; color: string }> = {
            'cie-igcse': { label: 'Cambridge IGCSE', count: 0, active: 0, color: '#10b981' },
            'cie-as': { label: 'Cambridge AS-Level', count: 0, active: 0, color: '#3b82f6' },
            'cie-alevel': { label: 'Cambridge A-Level', count: 0, active: 0, color: '#6366f1' },
            'edexcel-igcse': { label: 'Edexcel IGCSE', count: 0, active: 0, color: '#06b6d4' },
            'edexcel-as': { label: 'Edexcel AS-Level', count: 0, active: 0, color: '#a855f7' },
            'edexcel-a2': { label: 'Edexcel A2-Level', count: 0, active: 0, color: '#ec4899' },
            'dentistry': { label: 'Dentistry Track 🦷', count: 0, active: 0, color: '#f59e0b' }
        };

        students.forEach(s => {
            const tracks = (s.enrolledTracks && s.enrolledTracks.length > 0) 
                ? s.enrolledTracks 
                : [s.grade || 'cie-igcse'];

            tracks.forEach((track: string) => {
                if (counts[track]) {
                    counts[track].count += 1;
                    if (s.isActive) counts[track].active += 1;
                }
            });
        });

        return counts;
    }, [students]);

    const fetchStudents = useCallback(async () => {
        setIsLoadingStudents(true);
        try {
            const res = await fetch('/api/admin/students');
            const data = await res.json();
            if (data.success) {
                setStudents(data.students || []);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoadingStudents(false);
        }
    }, []);

    const handleStudentAction = async (action: 'toggle-active' | 'delete', studentId: string) => {
        if (action === 'delete' && !confirm('Are you sure you want to delete this student account? This action cannot be undone.')) {
            return;
        }
        try {
            const res = await fetch('/api/admin/students', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action, studentId })
            });
            const data = await res.json();
            if (data.success) {
                fetchStudents();
                fetchDevices();
            } else {
                alert(data.error || 'Failed to execute action');
            }
        } catch (e) {
            console.error(e);
            alert('Connection error');
        }
    };

    const fetchDevices = useCallback(async () => {
        setIsLoadingDevices(true);
        try {
            const res = await fetch('/api/admin/devices');
            const data = await res.json();
            if (data.success) {
                setDeviceRequests(data.requests || []);
                setAuthStats(data.stats || null);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoadingDevices(false);
        }
    }, []);

    const handleDeviceAction = async (action: string, requestId: string) => {
        try {
            const res = await fetch('/api/admin/devices', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action, requestId })
            });
            const data = await res.json();
            if (data.success) {
                fetchDevices();
            } else {
                alert(data.error || 'Failed to perform action');
            }
        } catch (e) {
            console.error(e);
            alert('Connection error');
        }
    };

    useEffect(() => {
        if (!isLoading && (!user?.isAdmin)) {
            router.push('/dashboard');
        }
    }, [user, isLoading, router]);

    useEffect(() => {
        if (user?.isAdmin) {
            fetchDevices();
            if (activeTab === 'students' || activeTab === 'devices' || activeTab === 'progress' || activeTab === 'overview' || activeTab === 'analytics') {
                fetchStudents();
            }
            if (activeTab === 'announcements') {
                fetchAnnouncements();
            }
            if (activeTab === 'audit' || activeTab === 'overview') {
                fetchAuditLogs();
            }
        }
    }, [activeTab, user, fetchDevices, fetchStudents, fetchAnnouncements, fetchAuditLogs]);

    if (isLoading || !user?.isAdmin) {
        return (
            <div className="min-h-screen bg-[#050510] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
            </div>
        );
    }

    const stats = [
        { label: 'Total Students', value: authStats ? String(authStats.totalStudents) : '0', icon: Users, color: 'text-blue-400', tab: 'students' },
        { label: 'Active Today', value: authStats ? String(authStats.activeStudents) : '0', icon: Activity, color: 'text-emerald-400', tab: 'overview' },
        { label: 'Pending Devices', value: authStats ? String(authStats.pendingDevices) : '0', icon: Smartphone, color: 'text-amber-400', tab: 'devices' },
        { label: 'Security Alerts', value: 'None', icon: ShieldAlert, color: 'text-rose-400', tab: 'devices' },
    ];

    return (
        <div className="min-h-screen bg-[#050510] text-white font-sans p-6 lg:p-12">
            <div className="max-w-7xl mx-auto space-y-10">
                
                {/* Admin Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3 text-emerald-400 text-sm font-bold uppercase tracking-widest">
                            <ShieldAlert className="w-4 h-4" />
                            Admin Sovereign Access
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-black tracking-tight">System Control</h1>
                        <p className="text-slate-500 font-medium">Welcome back, Master Hazim. The platform is secure. {/* trigger rebuild */}</p>
                    </div>


                </div>

                {/* Quick Stats - Only show on Overview tab */}
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <div 
                                key={i} 
                                onClick={() => setActiveTab(stat.tab)}
                                className="bg-white/[0.03] border border-white/5 p-6 rounded-3xl hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all group cursor-pointer active:scale-98"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform`}>
                                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                    </div>
                                    <MoreVertical className="w-5 h-5 text-slate-700 hover:text-white" />
                                </div>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                                <p className="text-2xl font-black">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Main Control Panel Area */}
                <div className={activeTab === 'overview' ? "grid lg:grid-cols-3 gap-10" : "w-full"}>
                    
                    {/* Management Table / List placeholder */}
                    <div className={activeTab === 'overview' ? "lg:col-span-2 space-y-6" : "w-full space-y-6"}>
                        <div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] overflow-hidden">
                            <div className="p-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <h3 className="text-xl font-bold">
                                    {activeTab === 'students' ? 'Student Management' : 
                                     activeTab === 'devices' ? 'Device Security Requests' : 
                                     activeTab === 'progress' ? 'Student Academic Progress' :
                                     activeTab === 'analytics' ? 'Curriculum & Question Analytics' :
                                     activeTab === 'announcements' ? 'Broadcast Announcements' :
                                     activeTab === 'audit' ? 'Administrative Audit & Security Logs' :
                                     'Recent Platform Activity'}
                                </h3>
                                <div className="flex items-center gap-3 w-full md:w-auto">
                                    {activeTab === 'students' && (
                                        <button 
                                            onClick={() => setShowCreateForm(!showCreateForm)}
                                            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 border cursor-pointer ${
                                                showCreateForm 
                                                    ? 'bg-rose-500/10 hover:bg-rose-500/20 border-rose-500/20 text-rose-400' 
                                                    : 'bg-indigo-500 hover:bg-indigo-600 border-indigo-500/20 text-white shadow-lg shadow-indigo-500/20'
                                            }`}
                                        >
                                            <UserPlus className="w-3.5 h-3.5" />
                                            {showCreateForm ? 'Cancel' : 'New Student'}
                                        </button>
                                    )}
                                    <div className="relative w-full md:w-64">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input 
                                            type="text" 
                                            placeholder="Search..." 
                                            value={studentSearch}
                                            onChange={e => setStudentSearch(e.target.value)}
                                            className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:border-indigo-500 outline-none w-full transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                {activeTab === 'students' ? (
                                    <div className="space-y-8 animate-in fade-in duration-500">
                                        {showCreateForm && (
                                            <div className="bg-indigo-500/5 border border-indigo-500/10 p-6 rounded-3xl animate-in slide-in-from-top-4 duration-300">
                                            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                                                <h4 className="text-lg font-bold flex items-center gap-2">
                                                    <Users className="w-5 h-5 text-indigo-400" />
                                                    Create New Student
                                                </h4>
                                                <button
                                                    type="button"
                                                    onClick={() => setShowQuickPaste(!showQuickPaste)}
                                                    className="px-3 py-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-indigo-400 rounded-lg text-xs font-bold transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
                                                >
                                                    <span>⚡</span> {showQuickPaste ? 'Hide Smart Paste' : 'Smart Paste (WhatsApp/Email)'}
                                                </button>
                                            </div>

                                            {showQuickPaste && (
                                                <div className="mb-6 p-4 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl space-y-2 animate-in slide-in-from-top-2 duration-300">
                                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                                        <label className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest block">
                                                            Paste WhatsApp / Email Text here (English)
                                                        </label>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                const template = `Hello! Please send me your details in this format to create your ChemZim account:\n\nName: \nEmail: \nPhone: \nCurriculum: `;
                                                                navigator.clipboard.writeText(template);
                                                                setCopiedField('template');
                                                                setTimeout(() => setCopiedField(null), 1500);
                                                            }}
                                                            className="text-[10px] bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 text-indigo-300 hover:text-white px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 active:scale-95 cursor-pointer"
                                                        >
                                                            {copiedField === 'template' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                                                            Copy Request Template
                                                        </button>
                                                    </div>
                                                    <textarea
                                                        rows={4}
                                                        value={quickPasteText}
                                                        onChange={(e) => handleQuickPaste(e.target.value)}
                                                        placeholder={`Paste information here. E.g.:\nName: Sarah Connor\nEmail: sarah@sky.net\nPhone: +962791234567\nCurriculum: Edexcel IGCSE`}
                                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-xs text-white placeholder-slate-600 resize-none font-mono"
                                                    />
                                                    <span className="text-[10px] text-slate-500 block">
                                                        ⚡ Fields will automatically fill in as you paste or type. You can review them below before saving.
                                                    </span>
                                                </div>
                                            )}

                                            <form onSubmit={handleCreateStudent} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                 <div className="flex flex-col gap-1.5 md:col-span-2">
                                                     <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Full Name *</label>
                                                     <input 
                                                         type="text" 
                                                         placeholder="e.g. John Doe" 
                                                         required
                                                         value={formData.name}
                                                         onChange={e => setFormData({...formData, name: e.target.value})}
                                                         className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm text-white"
                                                     />
                                                 </div>

                                                 <div className="flex flex-col gap-1.5">
                                                     <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Username (Optional)</label>
                                                     <input 
                                                         type="text" 
                                                         placeholder="Auto-generated if left blank" 
                                                         value={formData.username}
                                                         onChange={e => setFormData({...formData, username: e.target.value})}
                                                         className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm text-white"
                                                     />
                                                 </div>

                                                 <div className="flex flex-col gap-1.5">
                                                     <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Password (Optional)</label>
                                                     <input 
                                                         type="text" 
                                                         placeholder="Auto-generated if left blank" 
                                                         value={formData.password}
                                                         onChange={e => setFormData({...formData, password: e.target.value})}
                                                         className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm text-white"
                                                     />
                                                 </div>

                                                 <div className="flex flex-col gap-2 md:col-span-2 bg-black/30 border border-white/10 p-4 rounded-2xl">
                                                     <div className="flex items-center justify-between">
                                                         <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                                                             <span>📚</span> Enrolled Curricula / Tracks (Multi-Select) *
                                                         </label>
                                                         <button
                                                             type="button"
                                                             onClick={() => {
                                                                 const allTrackKeys = ['cie-igcse', 'cie-as', 'cie-alevel', 'edexcel-igcse', 'edexcel-as', 'edexcel-a2'];
                                                                 const isAll = formData.enrolledTracks.length === allTrackKeys.length;
                                                                 const nextTracks = isAll ? ['cie-igcse'] : allTrackKeys;
                                                                 setFormData({
                                                                     ...formData,
                                                                     grade: nextTracks[0],
                                                                     enrolledTracks: nextTracks
                                                                 });
                                                             }}
                                                             className="text-[10px] font-bold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                                                         >
                                                             {formData.enrolledTracks.length === 6 ? 'Deselect All (Keep IGCSE)' : '⚡ Select All Curricula'}
                                                         </button>
                                                     </div>
                                                     <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                                                         {[
                                                             { id: 'cie-igcse', name: 'Cambridge IGCSE', color: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400' },
                                                             { id: 'cie-as', name: 'Cambridge AS-Level', color: 'border-blue-500/30 bg-blue-500/5 text-blue-400' },
                                                             { id: 'cie-alevel', name: 'Cambridge A-Level', color: 'border-indigo-500/30 bg-indigo-500/5 text-indigo-400' },
                                                             { id: 'edexcel-igcse', name: 'Edexcel IGCSE', color: 'border-cyan-500/30 bg-cyan-500/5 text-cyan-400' },
                                                             { id: 'edexcel-as', name: 'Edexcel AS-Level', color: 'border-purple-500/30 bg-purple-500/5 text-purple-400' },
                                                             { id: 'edexcel-a2', name: 'Edexcel A2-Level', color: 'border-pink-500/30 bg-pink-500/5 text-pink-400' }
                                                         ].map((track) => {
                                                             const isSelected = formData.enrolledTracks.includes(track.id);
                                                             return (
                                                                 <button
                                                                     key={track.id}
                                                                     type="button"
                                                                     onClick={() => {
                                                                         const next = isSelected 
                                                                             ? formData.enrolledTracks.filter(t => t !== track.id)
                                                                             : [...formData.enrolledTracks, track.id];
                                                                         const finalTracks = next.length > 0 ? next : [track.id];
                                                                         setFormData({
                                                                             ...formData,
                                                                             grade: finalTracks[0],
                                                                             enrolledTracks: finalTracks
                                                                         });
                                                                     }}
                                                                     className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer text-left ${
                                                                         isSelected 
                                                                             ? `${track.color} border-current ring-1 ring-current/20 shadow-sm` 
                                                                             : 'border-white/5 bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-slate-200'
                                                                     }`}
                                                                 >
                                                                     <div className={`w-3.5 h-3.5 rounded flex items-center justify-center border transition-all ${
                                                                         isSelected ? 'bg-indigo-500 border-indigo-500 text-white' : 'border-white/20 bg-black/40'
                                                                     }`}>
                                                                         {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                                                                     </div>
                                                                     <span className="truncate">{track.name}</span>
                                                                 </button>
                                                             );
                                                         })}
                                                     </div>
                                                 </div>

                                                 <div className="flex flex-col gap-1.5">
                                                     <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Role</label>
                                                     <select 
                                                         value={formData.role}
                                                         onChange={e => setFormData({...formData, role: e.target.value as any})}
                                                         className="bg-[#0b0b1a] text-slate-300 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm cursor-pointer"
                                                     >
                                                         <option value="student" className="bg-[#0b0b1a] text-slate-300">Student</option>
                                                         <option value="moderator" className="bg-[#0b0b1a] text-slate-300">Registration Moderator</option>
                                                     </select>
                                                 </div>

                                                 <div className="flex flex-col gap-1.5">
                                                     <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Email (Optional)</label>
                                                     <input 
                                                         type="email" 
                                                         placeholder="student@example.com" 
                                                         value={formData.email}
                                                         onChange={e => setFormData({...formData, email: e.target.value})}
                                                         className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm text-white"
                                                     />
                                                 </div>

                                                 <div className="flex flex-col gap-1.5">
                                                     <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Phone (Optional)</label>
                                                     <input 
                                                         type="text" 
                                                         placeholder="e.g. +96279000000" 
                                                         value={formData.phone}
                                                         onChange={e => setFormData({...formData, phone: e.target.value})}
                                                         className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm text-white"
                                                     />
                                                 </div>

                                                 <div className="flex flex-col gap-1.5 md:col-span-2">
                                                     <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Notes (Optional)</label>
                                                     <textarea 
                                                         placeholder="Add any internal student notes or details..." 
                                                         rows={2}
                                                         value={formData.notes}
                                                         onChange={e => setFormData({...formData, notes: e.target.value})}
                                                         className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm text-white resize-none"
                                                     />
                                                 </div>

                                                 <button 
                                                     disabled={isCreating}
                                                     className="md:col-span-2 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 py-3 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-95 mt-2"
                                                 >
                                                     {isCreating ? 'Creating...' : 'Create Student Account'}
                                                 </button>
                                             </form>
                                             {status.msg && (
                                                 <div className={`mt-4 p-3 rounded-xl text-xs font-bold ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                                                     {status.msg}
                                                 </div>
                                             )}

                                             {/* Generated Credentials Presentation */}
                                             {createdCredentials && (
                                                 <div className="mt-4 bg-emerald-500/5 border border-emerald-500/10 p-5 rounded-2xl space-y-4 animate-in fade-in duration-300">
                                                     <h5 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                                                         <CheckCircle2 className="w-4 h-4" />
                                                         Credentials Generated Successfully!
                                                     </h5>
                                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                                         <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex items-center justify-between">
                                                             <div>
                                                                 <span className="text-[10px] text-slate-500 font-bold uppercase block mb-1">Username</span>
                                                                 <code className="text-white font-mono font-bold">{createdCredentials.username}</code>
                                                             </div>
                                                             <button 
                                                                 onClick={() => {
                                                                     navigator.clipboard.writeText(createdCredentials.username);
                                                                     setCopiedField('username');
                                                                     setTimeout(() => setCopiedField(null), 1500);
                                                                 }}
                                                                 className="text-slate-400 hover:text-white p-1"
                                                             >
                                                                 {copiedField === 'username' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                                             </button>
                                                         </div>
                                                         <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex items-center justify-between">
                                                             <div>
                                                                 <span className="text-[10px] text-slate-500 font-bold uppercase block mb-1">Password</span>
                                                                 <code className="text-white font-mono font-bold">{createdCredentials.password || '••••••••'}</code>
                                                             </div>
                                                             <button 
                                                                 onClick={() => {
                                                                     if (createdCredentials.password) {
                                                                         navigator.clipboard.writeText(createdCredentials.password);
                                                                         setCopiedField('password');
                                                                         setTimeout(() => setCopiedField(null), 1500);
                                                                     }
                                                                 }}
                                                                 className="text-slate-400 hover:text-white p-1"
                                                                 disabled={!createdCredentials.password}
                                                             >
                                                                 {copiedField === 'password' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                                             </button>
                                                         </div>
                                                     </div>
                                                     <button 
                                                         onClick={() => {
                                                             const inviteMsg = `Welcome to ChemZim! 👋\n\nYour account has been created successfully.\n\n🔐 Credentials:\nUsername: ${createdCredentials.username}\nPassword: ${createdCredentials.password || '••••••••'}\n\n🔗 Access here: https://chemzim.vercel.app/`;
                                                             navigator.clipboard.writeText(inviteMsg);
                                                             setCopiedField('invite');
                                                             setTimeout(() => setCopiedField(null), 1500);
                                                         }}
                                                         className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                                                     >
                                                         {copiedField === 'invite' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                                         Copy Invite Message
                                                     </button>
                                                 </div>
                                             )}
                                         </div>
                                         )}

                                         {/* Student Accounts List */}
                                         <div className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl space-y-6">
                                             <h4 className="text-lg font-bold flex items-center gap-2 text-indigo-400">
                                                 <Users className="w-5 h-5" />
                                                 Registered Student Accounts
                                             </h4>

                                             {isLoadingStudents ? (
                                                 <div className="p-8 text-center text-slate-500 text-sm">
                                                     <div className="w-6 h-6 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin mx-auto mb-2" />
                                                     Loading students...
                                                 </div>
                                             ) : students.length === 0 ? (
                                                 <div className="p-8 text-center text-slate-500 text-sm">
                                                     No student accounts found.
                                                 </div>
                                             ) : (
                                                 <div className="overflow-x-auto">
                                                     <table className="w-full text-left border-collapse">
                                                         <thead>
                                                             <tr className="border-b border-white/5 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                                                                 <th className="pb-3 font-semibold">Student Info</th>
                                                                 <th className="pb-3 font-semibold">Username</th>
                                                                 <th className="pb-3 font-semibold">Curriculum</th>
                                                                 <th className="pb-3 font-semibold">Devices</th>
                                                                 <th className="pb-3 font-semibold">Status</th>
                                                                 <th className="pb-3 font-semibold text-right">Actions</th>
                                                             </tr>
                                                         </thead>
                                                         <tbody className="divide-y divide-white/5">
                                                             {students
                                                                 .filter(s => s.id && s.username)
                                                                 .filter(s => {
                                                                     if (!studentSearch) return true;
                                                                     const query = studentSearch.toLowerCase();
                                                                     return s.name.toLowerCase().includes(query) || 
                                                                            s.username.toLowerCase().includes(query) ||
                                                                            (s.email && s.email.toLowerCase().includes(query));
                                                                 })
                                                                 .map((student) => (
                                                                     <tr key={student.id} className="text-sm">
                                                                         <td className="py-4">
                                                                             <button
                                                                                 type="button"
                                                                                 onClick={() => setSelectedStudentProfile(student)}
                                                                                 className="flex items-center gap-3 text-left group cursor-pointer"
                                                                             >
                                                                                  <div className="group-hover:scale-105 transition-all shadow-sm">
                                                                                      <StudentAvatar 
                                                                                          name={student.name} 
                                                                                          username={student.username} 
                                                                                          image={student.image} 
                                                                                          size="w-9 h-9" 
                                                                                          textClass="text-xs" 
                                                                                      />
                                                                                  </div>
                                                                                 <div>
                                                                                     <p className="font-bold text-white leading-none mb-1 group-hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                                                                                         {student.name}
                                                                                         <span className="text-[10px] opacity-0 group-hover:opacity-100 text-indigo-400 transition-opacity">↗</span>
                                                                                     </p>
                                                                                     {student.email && <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">{student.email}</p>}
                                                                                 </div>
                                                                             </button>
                                                                         </td>
                                                                         <td className="py-4 font-mono text-xs text-slate-300">
                                                                             {student.username}
                                                                         </td>
                                                                         <td className="py-4">
                                                                             <div className="flex flex-wrap items-center gap-1.5 max-w-xs">
                                                                                 {(student.enrolledTracks && student.enrolledTracks.length > 0 
                                                                                     ? student.enrolledTracks 
                                                                                     : [student.grade || 'cie-igcse']
                                                                                 ).map((trackKey: string) => {
                                                                                     const trackNames: Record<string, string> = {
                                                                                         'cie-igcse': 'CIE IGCSE',
                                                                                         'cie-as': 'CIE AS',
                                                                                         'cie-alevel': 'CIE A-Level',
                                                                                         'edexcel-igcse': 'Edexcel IGCSE',
                                                                                         'edexcel-as': 'Edexcel AS',
                                                                                         'edexcel-a2': 'Edexcel A2',
                                                                                         'dentistry': 'Dental 🦷'
                                                                                     };
                                                                                     const trackColors: Record<string, string> = {
                                                                                         'cie-igcse': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
                                                                                         'cie-as': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
                                                                                         'cie-alevel': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
                                                                                         'edexcel-igcse': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
                                                                                         'edexcel-as': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
                                                                                         'edexcel-a2': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
                                                                                         'dentistry': 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                                                                     };
                                                                                     return (
                                                                                         <span 
                                                                                             key={trackKey} 
                                                                                             className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold border ${trackColors[trackKey] || 'bg-slate-500/10 text-slate-300 border-slate-500/20'}`}
                                                                                         >
                                                                                             {trackNames[trackKey] || trackKey}
                                                                                         </span>
                                                                                     );
                                                                                 })}
                                                                                 <button
                                                                                     type="button"
                                                                                     onClick={() => {
                                                                                         const currentTracks = student.enrolledTracks && student.enrolledTracks.length > 0
                                                                                             ? student.enrolledTracks
                                                                                             : [student.grade || 'cie-igcse'];
                                                                                         setEditTracksStudent(student);
                                                                                         setEditingTracks(currentTracks);
                                                                                     }}
                                                                                     className="text-[10px] text-indigo-400 hover:text-indigo-300 hover:underline font-bold px-1 py-0.5 cursor-pointer ml-1"
                                                                                 >
                                                                                     ✏️ Edit
                                                                                 </button>
                                                                             </div>
                                                                         </td>
                                                                         <td className="py-4 text-xs font-semibold text-slate-400">
                                                                             {student.devices?.length || 0} device(s)
                                                                         </td>
                                                                         <td className="py-4">
                                                                             <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold border ${student.isActive ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border-rose-500/20'}`}>
                                                                                 <span className={`w-1.5 h-1.5 rounded-full ${student.isActive ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`} />
                                                                                 {student.isActive ? 'Active' : 'Suspended'}
                                                                             </span>
                                                                         </td>
                                                                         <td className="py-4 text-right">
                                                                             <div className="flex items-center justify-end gap-2">
                                                                                 <button
                                                                                     onClick={() => {
                                                                                         setResetPasswordStudent(student);
                                                                                         setResetCredentialsResult(null);
                                                                                     }}
                                                                                     className="px-3 py-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-indigo-400 rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer flex items-center gap-1"
                                                                                 >
                                                                                     <Key className="w-3.5 h-3.5" />
                                                                                     Reset
                                                                                 </button>
                                                                                 <button
                                                                                     onClick={() => handleStudentAction('toggle-active', student.id)}
                                                                                     className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer border ${
                                                                                         student.isActive
                                                                                             ? 'bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/20 text-amber-400'
                                                                                             : 'bg-emerald-500/10 hover:bg-emerald-600/20 border-emerald-500/20 text-emerald-400'
                                                                                     }`}
                                                                                 >
                                                                                     {student.isActive ? 'Suspend' : 'Activate'}
                                                                                 </button>
                                                                                 <button
                                                                                     onClick={() => handleStudentAction('delete', student.id)}
                                                                                     className="px-3 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-400 hover:text-white rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer"
                                                                                 >
                                                                                     Delete
                                                                                 </button>
                                                                             </div>
                                                                         </td>
                                                                     </tr>
                                                                 ))}
                                                         </tbody>
                                                     </table>
                                                 </div>
                                             )}
                                         </div>
                                       </div>
                                   ) : activeTab === 'devices' ? (
                                    <div className="space-y-8 animate-in fade-in duration-500">
                                        {/* Device Stats Row */}
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <div 
                                                onClick={() => { setDeviceSubTab('all'); setDeviceFilter('all'); }}
                                                className={`p-4 rounded-2xl border transition-all cursor-pointer active:scale-98 ${
                                                    deviceSubTab === 'all' && deviceFilter === 'all'
                                                        ? 'bg-indigo-500/10 border-indigo-500/40 shadow-lg shadow-indigo-500/5'
                                                        : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]'
                                                }`}
                                            >
                                                <span className="text-slate-500 text-xs font-bold uppercase block mb-1">Total Devices</span>
                                                <span className="text-2xl font-black text-white">{authStats?.totalDevices || 0}</span>
                                            </div>
                                            <div 
                                                onClick={() => { setDeviceSubTab('all'); setDeviceFilter('approved'); }}
                                                className={`p-4 rounded-2xl border transition-all cursor-pointer active:scale-98 ${
                                                    deviceSubTab === 'all' && deviceFilter === 'approved'
                                                        ? 'bg-emerald-500/10 border-emerald-500/40 shadow-lg shadow-emerald-500/5'
                                                        : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]'
                                                }`}
                                            >
                                                <span className="text-slate-500 text-xs font-bold uppercase block mb-1">Approved</span>
                                                <span className="text-2xl font-black text-emerald-400">✓ {authStats?.approvedDevices || 0}</span>
                                            </div>
                                            <div 
                                                onClick={() => { setDeviceSubTab('new'); }}
                                                className={`p-4 rounded-2xl border transition-all cursor-pointer active:scale-98 ${
                                                    deviceSubTab === 'new'
                                                        ? 'bg-amber-500/10 border-amber-500/40 shadow-lg shadow-amber-500/5'
                                                        : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]'
                                                }`}
                                            >
                                                <span className="text-slate-500 text-xs font-bold uppercase block mb-1">Pending</span>
                                                <span className="text-2xl font-black text-amber-400">⏱ {authStats?.pendingDevices || 0}</span>
                                            </div>
                                            <div 
                                                onClick={() => { setDeviceSubTab('all'); setDeviceFilter('blocked'); }}
                                                className={`p-4 rounded-2xl border transition-all cursor-pointer active:scale-98 ${
                                                    deviceSubTab === 'all' && deviceFilter === 'blocked'
                                                        ? 'bg-rose-500/10 border-rose-500/40 shadow-lg shadow-rose-500/5'
                                                        : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]'
                                                }`}
                                            >
                                                <span className="text-slate-500 text-xs font-bold uppercase block mb-1">Blocked</span>
                                                <span className="text-2xl font-black text-rose-400">🚫 {authStats?.blockedDevices || 0}</span>
                                            </div>
                                        </div>

                                        {/* Tab Switcher */}
                                        <div className="flex bg-white/5 border border-white/10 p-1 rounded-2xl w-fit">
                                            <button
                                                onClick={() => setDeviceSubTab('new')}
                                                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                                                    deviceSubTab === 'new'
                                                        ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'
                                                        : 'text-slate-400 hover:text-white'
                                                }`}
                                            >
                                                New Requests ({deviceRequests.length})
                                            </button>
                                            <button
                                                onClick={() => { setDeviceSubTab('all'); setDeviceFilter('all'); }}
                                                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                                                    deviceSubTab === 'all'
                                                        ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'
                                                        : 'text-slate-400 hover:text-white'
                                                }`}
                                            >
                                                All Registered Devices ({allStudentDevices.length})
                                            </button>
                                        </div>

                                        {isLoadingDevices ? (
                                            <div className="p-10 text-center">
                                                <div className="w-10 h-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin mx-auto mb-4" />
                                                <p className="text-slate-500 text-sm">Loading...</p>
                                            </div>
                                        ) : deviceSubTab === 'new' ? (
                                            /* Pending Requests View */
                                            deviceRequests.length > 0 ? (
                                                <div className="grid gap-4">
                                                    {deviceRequests.map((req) => (
                                                        <div key={req.id} className="bg-white/[0.03] border border-white/5 p-6 rounded-3xl hover:border-white/10 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                                                            <div className="space-y-2">
                                                                <div className="flex items-center gap-3">
                                                                    <span className="font-bold text-lg text-white">{req.studentName}</span>
                                                                    <span className="bg-amber-500/10 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/20">Pending Approval</span>
                                                                </div>
                                                                <div className="text-sm text-slate-400 flex flex-wrap gap-x-4 gap-y-1">
                                                                    <span className="flex items-center gap-1.5"><Smartphone className="w-4 h-4 text-indigo-400" /> {req.device.name} ({req.device.os} - {req.device.browser})</span>
                                                                    {req.device.ipAddress && <span className="text-slate-500">• IP: {req.device.ipAddress}</span>}
                                                                </div>
                                                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1">
                                                                    <Clock className="w-3.5 h-3.5" /> Requested {new Date(req.requestedAt).toLocaleString()}
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <button 
                                                                    onClick={() => handleDeviceAction('approve', req.id)}
                                                                    className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition-all active:scale-95 shadow-md shadow-emerald-500/10 cursor-pointer"
                                                                >
                                                                    Approve
                                                                </button>
                                                                <button 
                                                                    onClick={() => handleDeviceAction('reject', req.id)}
                                                                    className="px-4 py-2.5 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-400 hover:text-white rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer"
                                                                >
                                                                    Reject
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="p-12 text-center bg-white/[0.01] border border-dashed border-white/5 rounded-3xl space-y-4">
                                                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                                                        ✓
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-lg text-white">All Devices Secure</h4>
                                                        <p className="text-slate-500 text-sm max-w-sm mx-auto mt-1">
                                                            There are no pending device registration requests at the moment.
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        ) : (
                                            /* All Registered Devices Table View */
                                            filteredStudentDevices.length > 0 ? (
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-left border-collapse">
                                                        <thead>
                                                            <tr className="border-b border-white/5 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                                                                <th className="pb-3 font-semibold">Student</th>
                                                                <th className="pb-3 font-semibold">Device / OS</th>
                                                                <th className="pb-3 font-semibold">Browser / IP</th>
                                                                <th className="pb-3 font-semibold">Last Active</th>
                                                                <th className="pb-3 font-semibold">Status</th>
                                                                <th className="pb-3 font-semibold text-right">Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-white/5">
                                                            {filteredStudentDevices.map((device: any) => (
                                                                <tr key={device.id} className="text-sm">
                                                                    <td className="py-4 font-bold text-white">
                                                                        {device.studentName}
                                                                    </td>
                                                                    <td className="py-4">
                                                                        <div className="flex items-center gap-2">
                                                                            <Smartphone className="w-4 h-4 text-indigo-400" />
                                                                            <div>
                                                                                <p className="font-bold leading-none mb-1 text-slate-200">{device.name}</p>
                                                                                <p className="text-[10px] text-slate-500">{device.os}</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="py-4">
                                                                        <div>
                                                                            <p className="font-medium text-slate-300 mb-0.5">{device.browser}</p>
                                                                            <p className="text-[10px] text-slate-500 font-mono">{device.ipAddress || 'Unknown IP'}</p>
                                                                        </div>
                                                                    </td>
                                                                    <td className="py-4 text-xs text-slate-400">
                                                                        {device.lastSeen ? new Date(device.lastSeen).toLocaleString() : 'N/A'}
                                                                    </td>
                                                                    <td className="py-4">
                                                                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                                                                            device.status === 'approved' 
                                                                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                                                                                : device.status === 'blocked'
                                                                                ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                                                                                : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                                                        }`}>
                                                                            {device.status}
                                                                        </span>
                                                                    </td>
                                                                    <td className="py-4 text-right">
                                                                        <div className="flex items-center justify-end gap-2">
                                                                            {device.status === 'approved' ? (
                                                                                <button
                                                                                    onClick={() => handleStudentDeviceAction('block', device.studentId, device.id)}
                                                                                    className="px-2.5 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 text-amber-400 rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer"
                                                                                >
                                                                                    Block
                                                                                </button>
                                                                            ) : device.status === 'blocked' ? (
                                                                                <button
                                                                                    onClick={() => handleStudentDeviceAction('unblock', device.studentId, device.id)}
                                                                                    className="px-2.5 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer"
                                                                                >
                                                                                    Unblock
                                                                                </button>
                                                                            ) : null}
                                                                            <button
                                                                                onClick={() => handleStudentDeviceAction('remove', device.studentId, device.id)}
                                                                                className="px-2.5 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-400 hover:text-white rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer"
                                                                            >
                                                                                Disconnect
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            ) : (
                                                <div className="p-8 text-center text-slate-500 text-sm">
                                                    No {deviceFilter !== 'all' ? `${deviceFilter} ` : ''}devices registered yet.
                                                </div>
                                            )
                                        )}
                                    </div>
                                ) : activeTab === 'progress' ? (
                                    <div className="p-8 space-y-6 animate-in fade-in duration-500">
                                        {students.length === 0 ? (
                                            <div className="p-8 text-center text-slate-500 text-sm">
                                                No students registered.
                                            </div>
                                        ) : (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {students.filter(s => s.id && s.username)
                                                    .filter(s => {
                                                        if (!studentSearch) return true;
                                                        const query = studentSearch.toLowerCase();
                                                        return s.name.toLowerCase().includes(query) || s.username.toLowerCase().includes(query);
                                                    })
                                                    .map((student) => {
                                                        const xp = student.xp || 0;
                                                        const level = student.level || 1;
                                                        const completed = student.completedLessons?.length || 0;
                                                        const total = 12;
                                                        const progressPct = Math.min(100, Math.round((completed / total) * 100));
                                                        const quizzesCount = Object.keys(student.quizScores || {}).length;

                                                        return (
                                                            <div 
                                                                key={student.id} 
                                                                onClick={() => setSelectedStudentProfile(student)}
                                                                className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl space-y-4 hover:border-indigo-500/30 transition-all hover:bg-white/[0.04] cursor-pointer group"
                                                            >
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex items-center gap-3">
                                                                        <div className="group-hover:scale-105 transition-transform">
                                                                            <StudentAvatar 
                                                                                name={student.name} 
                                                                                username={student.username} 
                                                                                image={student.image} 
                                                                                size="w-10 h-10" 
                                                                                textClass="text-sm" 
                                                                            />
                                                                        </div>
                                                                        <div>
                                                                            <h4 className="font-bold text-white text-base leading-tight group-hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                                                                                {student.name}
                                                                                <span className="text-[10px] opacity-0 group-hover:opacity-100 text-indigo-400 transition-opacity">↗</span>
                                                                            </h4>
                                                                            <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider">{student.grade || 'CIE IGCSE'}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-3 py-1 rounded-xl text-xs font-bold">
                                                                        Lvl {level}
                                                                    </div>
                                                                </div>
                                                                <div className="space-y-2">
                                                                    <div className="flex justify-between text-xs font-bold">
                                                                        <span className="text-slate-400">Course Progress</span>
                                                                        <span className="text-white">{progressPct}%</span>
                                                                    </div>
                                                                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                                                        <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full transition-all duration-1000" style={{ width: `${Math.max(5, progressPct)}%` }} />
                                                                    </div>
                                                                </div>
                                                                <div className="grid grid-cols-3 gap-2 pt-2 text-xs">
                                                                    <div className="bg-white/[0.02] border border-white/5 p-2.5 rounded-2xl flex flex-col items-center text-center">
                                                                        <span className="text-[9px] text-slate-500 font-bold uppercase mb-0.5">XP</span>
                                                                        <span className="font-black text-white flex items-center gap-1 text-xs"><Trophy className="w-3 h-3 text-amber-400" /> {xp}</span>
                                                                    </div>
                                                                    <div className="bg-white/[0.02] border border-white/5 p-2.5 rounded-2xl flex flex-col items-center text-center">
                                                                        <span className="text-[9px] text-slate-500 font-bold uppercase mb-0.5">Lessons</span>
                                                                        <span className="font-black text-white text-xs">{completed} / {total}</span>
                                                                    </div>
                                                                    <div className="bg-white/[0.02] border border-white/5 p-2.5 rounded-2xl flex flex-col items-center text-center">
                                                                        <span className="text-[9px] text-slate-500 font-bold uppercase mb-0.5">Quizzes</span>
                                                                        <span className="font-black text-emerald-400 text-xs">{quizzesCount} taken</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                            </div>
                                        )}
                                    </div>
                                ) : activeTab === 'analytics' ? (
                                    <div className="p-8 space-y-8 animate-in fade-in duration-500">
                                        {/* Analytics Stats Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl space-y-2">
                                                <span className="text-slate-500 text-xs font-bold uppercase block tracking-wider">Avg Student Engagement</span>
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-3xl font-black text-white">88%</span>
                                                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-0.5"><TrendingUp className="w-3.5 h-3.5" /> +4.2%</span>
                                                </div>
                                                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '88%' }} />
                                                </div>
                                            </div>
                                            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl space-y-2">
                                                <span className="text-slate-500 text-xs font-bold uppercase block tracking-wider">Avg Session Time</span>
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-3xl font-black text-white">34.8m</span>
                                                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-0.5"><TrendingUp className="w-3.5 h-3.5" /> +15%</span>
                                                </div>
                                                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: '70%' }} />
                                                </div>
                                            </div>
                                            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl space-y-2">
                                                <span className="text-slate-500 text-xs font-bold uppercase block tracking-wider">Total System XP Issued</span>
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-3xl font-black text-amber-400">18.4K</span>
                                                    <span className="text-xs font-bold text-slate-500">All-time</span>
                                                </div>
                                                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                    <div className="h-full bg-amber-400 rounded-full" style={{ width: '80%' }} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Weekly Study Trend Chart */}
                                        <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[2.5rem] space-y-4">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h4 className="font-bold text-white text-base">Weekly Platform Activity</h4>
                                                    <p className="text-xs text-slate-500">Daily student session tracking (in hours)</p>
                                                </div>
                                                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-slate-300">Last 7 Days</span>
                                            </div>
                                            <div className="w-full h-64 pt-4">
                                                <svg className="w-full h-full overflow-visible" viewBox="0 0 700 240" preserveAspectRatio="none">
                                                    <defs>
                                                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                                                            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                                                        </linearGradient>
                                                    </defs>
                                                    <line x1="0" y1="40" x2="700" y2="40" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                                                    <line x1="0" y1="100" x2="700" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                                                    <line x1="0" y1="160" x2="700" y2="160" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                                                    <line x1="0" y1="220" x2="700" y2="220" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
                                                    <path d="M 0 220 L 0 170 L 116 190 L 233 110 L 350 80 L 466 120 L 583 60 L 700 40 L 700 220 Z" fill="url(#chartGrad)" />
                                                    <path d="M 0 170 L 116 190 L 233 110 L 350 80 L 466 120 L 583 60 L 700 40" fill="none" stroke="#6366f1" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <circle cx="0" cy="170" r="5" fill="#6366f1" stroke="#050510" strokeWidth="2" />
                                                    <circle cx="116" cy="190" r="5" fill="#6366f1" stroke="#050510" strokeWidth="2" />
                                                    <circle cx="233" cy="110" r="5" fill="#6366f1" stroke="#050510" strokeWidth="2" />
                                                    <circle cx="350" cy="80" r="5" fill="#6366f1" stroke="#050510" strokeWidth="2" />
                                                    <circle cx="466" cy="120" r="5" fill="#6366f1" stroke="#050510" strokeWidth="2" />
                                                    <circle cx="583" cy="60" r="5" fill="#6366f1" stroke="#050510" strokeWidth="2" />
                                                    <circle cx="700" cy="40" r="5" fill="#6366f1" stroke="#050510" strokeWidth="2" />
                                                </svg>
                                            </div>
                                            <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-wider px-2 pt-2">
                                                <span>Mon</span>
                                                <span>Tue</span>
                                                <span>Wed</span>
                                                <span>Thu</span>
                                                <span>Fri</span>
                                                <span>Sat</span>
                                                <span>Sun</span>
                                            </div>
                                        </div>

                                        {/* 📚 Multi-Curriculum Enrollment & Distribution (Proposal 4) */}
                                        <div className="space-y-4 pt-4 border-t border-white/5">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-indigo-400 text-sm font-bold uppercase tracking-wider">
                                                    <BookOpen className="w-4 h-4 text-indigo-400" />
                                                    <span>Curriculum Enrollment &amp; Active Student Distribution</span>
                                                </div>
                                                <span className="text-xs text-slate-500 font-bold">{students.length} Total Registered</span>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                                {Object.entries(curriculumBreakdown).map(([trackId, data]) => {
                                                    const pct = students.length > 0 ? Math.round((data.count / students.length) * 100) : 0;
                                                    return (
                                                        <div key={trackId} className="bg-white/[0.02] border border-white/5 p-5 rounded-3xl space-y-2 hover:border-white/10 transition-all">
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-xs font-bold text-slate-200 truncate">{data.label}</span>
                                                                <span className="text-xs font-black text-white">{data.count}</span>
                                                            </div>
                                                            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                                <div 
                                                                    className="h-full rounded-full transition-all duration-700" 
                                                                    style={{ width: `${pct}%`, backgroundColor: data.color }} 
                                                                />
                                                            </div>
                                                            <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                                                                <span>{pct}% of platform</span>
                                                                <span className="text-emerald-400 font-semibold">{data.active} active</span>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* 🎯 Curriculum Academic Difficulty & Mistake Matrix (Proposal 4) */}
                                        <div className="space-y-4 pt-4 border-t border-white/5">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-amber-400 text-sm font-bold uppercase tracking-wider">
                                                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                                                    <span>Academic Heatmap: Challenging Topics &amp; Common Pitfalls</span>
                                                </div>
                                                <span className="text-xs text-slate-500">Based on student practice data</span>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div className="bg-rose-500/5 border border-rose-500/20 p-5 rounded-3xl space-y-2">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs font-bold text-rose-400">Stoichiometry &amp; Moles</span>
                                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold uppercase">Hardest</span>
                                                    </div>
                                                    <p className="text-xs text-slate-400 leading-relaxed">
                                                        Higher error rate in gas volume conversions and limiting reactant calculations.
                                                    </p>
                                                    <div className="pt-2 flex justify-between text-[10px] text-slate-500 font-medium border-t border-white/5">
                                                        <span>Avg Accuracy: 54%</span>
                                                        <span className="text-rose-400">High review frequency</span>
                                                    </div>
                                                </div>

                                                <div className="bg-amber-500/5 border border-amber-500/20 p-5 rounded-3xl space-y-2">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs font-bold text-amber-400">Equilibrium &amp; Le Chatelier</span>
                                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold uppercase">Moderate</span>
                                                    </div>
                                                    <p className="text-xs text-slate-400 leading-relaxed">
                                                        Frequent confusion between reaction rate increases and yield shift directions.
                                                    </p>
                                                    <div className="pt-2 flex justify-between text-[10px] text-slate-500 font-medium border-t border-white/5">
                                                        <span>Avg Accuracy: 68%</span>
                                                        <span className="text-amber-400">Moderate review frequency</span>
                                                    </div>
                                                </div>

                                                <div className="bg-emerald-500/5 border border-emerald-500/20 p-5 rounded-3xl space-y-2">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs font-bold text-emerald-400">Atomic Structure &amp; Periodic Table</span>
                                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold uppercase">Strong</span>
                                                    </div>
                                                    <p className="text-xs text-slate-400 leading-relaxed">
                                                        Highest student mastery and first-attempt quiz pass rates across all cohorts.
                                                    </p>
                                                    <div className="pt-2 flex justify-between text-[10px] text-slate-500 font-medium border-t border-white/5">
                                                        <span>Avg Accuracy: 89%</span>
                                                        <span className="text-emerald-400">Low review frequency</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : activeTab === 'announcements' ? (
                                    <div className="p-8 space-y-8 animate-in fade-in duration-500">
                                        {/* Create Announcement Form */}
                                        <div className="bg-indigo-500/5 border border-indigo-500/10 p-6 rounded-3xl space-y-4">
                                            <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                                <Megaphone className="w-5 h-5 text-indigo-400" />
                                                Broadcast New Announcement
                                            </h4>
                                            <form onSubmit={handlePostAnnouncement} className="space-y-4">
                                                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                                                    <div className="sm:col-span-2 flex flex-col gap-1.5">
                                                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Title</label>
                                                        <input 
                                                            type="text" 
                                                            placeholder="e.g. Scheduled Maintenance Notice" 
                                                            required
                                                            value={annTitle}
                                                            onChange={e => setAnnTitle(e.target.value)}
                                                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm text-white"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-1.5">
                                                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Category</label>
                                                        <select 
                                                            value={annCategory}
                                                            onChange={e => setAnnCategory(e.target.value)}
                                                            className="bg-[#0b0b1a] text-slate-300 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm cursor-pointer"
                                                        >
                                                            <option value="Important">Important 🚨</option>
                                                            <option value="Event">Event 📅</option>
                                                            <option value="Update">System Update ⚙️</option>
                                                            <option value="General">General Announcement 📣</option>
                                                        </select>
                                                    </div>
                                                    <div className="flex flex-col gap-1.5">
                                                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Target Curriculum</label>
                                                        <select 
                                                            value={annTargetCurriculum}
                                                            onChange={e => setAnnTargetCurriculum(e.target.value)}
                                                            className="bg-[#0b0b1a] text-slate-300 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm cursor-pointer"
                                                        >
                                                            <option value="all">All Curriculums 🌍</option>
                                                            <option value="cie-igcse">Cambridge IGCSE ⚛️</option>
                                                            <option value="cie-as">Cambridge AS-Level 🧪</option>
                                                            <option value="cie-alevel">Cambridge A-Level 💎</option>
                                                            <option value="edexcel-igcse">Edexcel IGCSE ⚡</option>
                                                            <option value="edexcel-as">Edexcel AS-Level 🧬</option>
                                                            <option value="edexcel-a2">Edexcel A2-Level 🛡️</option>
                                                            <option value="dentistry">Dental Board MCQs 🦷</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-1.5">
                                                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Message Details *</label>
                                                    <textarea 
                                                        placeholder="Write your announcement details here..." 
                                                        required
                                                        rows={3}
                                                        value={annContent}
                                                        onChange={e => setAnnContent(e.target.value)}
                                                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm text-white resize-none"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div className="flex flex-col gap-1.5">
                                                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Start Showing (Optional)</label>
                                                        <input 
                                                            type="datetime-local" 
                                                            value={annStartDate}
                                                            onChange={e => setAnnStartDate(e.target.value)}
                                                            onClick={(e) => e.currentTarget.showPicker()}
                                                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm text-white cursor-pointer"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-1.5">
                                                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Expire & Hide (Optional)</label>
                                                        <input 
                                                            type="datetime-local" 
                                                            value={annEndDate}
                                                            onChange={e => setAnnEndDate(e.target.value)}
                                                            onClick={(e) => e.currentTarget.showPicker()}
                                                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm text-white cursor-pointer"
                                                        />
                                                    </div>
                                                </div>
                                                <button className="flex items-center justify-center gap-2 px-5 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all active:scale-95 shadow-md shadow-indigo-500/20 cursor-pointer">
                                                    <Send className="w-4 h-4" />
                                                    Broadcast Announcement
                                                </button>
                                            </form>
                                        </div>

                                        {/* Announcement Feed */}
                                        <div className="space-y-4">
                                            <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest">Recent Broadcasts</h4>
                                            <div className="space-y-4">
                                                {announcements.map((ann) => (
                                                    <div key={ann.id} className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl space-y-3">
                                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                                            <h5 className="font-bold text-white text-base">{ann.title}</h5>
                                                            <div className="flex items-center gap-2">
                                                                <span className="px-2.5 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-[10px] font-bold">
                                                                    {ann.category}
                                                                </span>
                                                                <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase">
                                                                    {ann.targetCurriculum === 'all' ? 'All Curriculums' : ann.targetCurriculum}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <p className="text-sm text-slate-400 leading-relaxed">{ann.content}</p>
                                                        <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold uppercase pt-1 border-t border-white/5">
                                                            <span>By {ann.author}</span>
                                                            <span>{ann.date}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : activeTab === 'audit' ? (
                                    <div className="p-8 space-y-6 animate-in fade-in duration-500">
                                        {/* Audit Logs Filter & Controls */}
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                {['all', 'student', 'security', 'device', 'curriculum', 'announcement'].map((cat) => (
                                                    <button
                                                        key={cat}
                                                        type="button"
                                                        onClick={() => setAuditCategoryFilter(cat)}
                                                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all capitalize cursor-pointer border ${
                                                            auditCategoryFilter === cat
                                                                ? 'bg-indigo-500 text-white border-indigo-500 shadow-md shadow-indigo-500/20'
                                                                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                                                        }`}
                                                    >
                                                        {cat === 'all' ? 'All Activities' : cat}
                                                    </button>
                                                ))}
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => fetchAuditLogs()}
                                                className="px-3.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                                            >
                                                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                                                Refresh Logs
                                            </button>
                                        </div>

                                        {isLoadingAuditLogs ? (
                                            <div className="p-12 text-center">
                                                <div className="w-8 h-8 border-3 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin mx-auto mb-3" />
                                                <p className="text-slate-500 text-xs font-semibold">Loading security audit records...</p>
                                            </div>
                                        ) : auditLogs.length === 0 ? (
                                            <div className="p-12 text-center bg-white/[0.01] border border-dashed border-white/5 rounded-3xl space-y-3">
                                                <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto" />
                                                <h4 className="text-white font-bold text-sm">No Audit Logs Recorded</h4>
                                                <p className="text-slate-500 text-xs">Platform administrative events and actions will be securely logged here in real-time.</p>
                                            </div>
                                        ) : (
                                            <div className="space-y-3">
                                                {auditLogs
                                                    .filter(log => auditCategoryFilter === 'all' || log.category === auditCategoryFilter)
                                                    .map((log) => {
                                                        const categoryColors: Record<string, string> = {
                                                            security: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
                                                            student: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
                                                            device: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
                                                            curriculum: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
                                                            announcement: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                                        };
                                                        return (
                                                            <div key={log.id} className="p-4 bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 rounded-2xl transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                                                <div className="flex items-start gap-3.5 min-w-0">
                                                                    <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                                        {log.category === 'security' ? <ShieldAlert className="w-4 h-4 text-rose-400" /> :
                                                                         log.category === 'device' ? <Smartphone className="w-4 h-4 text-amber-400" /> :
                                                                         log.category === 'curriculum' ? <BookOpen className="w-4 h-4 text-emerald-400" /> :
                                                                         log.category === 'announcement' ? <Megaphone className="w-4 h-4 text-blue-400" /> :
                                                                         <Users className="w-4 h-4 text-indigo-400" />}
                                                                    </div>
                                                                    <div className="space-y-0.5 min-w-0">
                                                                        <div className="flex items-center gap-2 flex-wrap">
                                                                            <span className="font-bold text-white text-sm">{log.action}</span>
                                                                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold border uppercase ${categoryColors[log.category] || 'bg-slate-500/10 text-slate-400 border-slate-500/20'}`}>
                                                                                {log.category}
                                                                            </span>
                                                                        </div>
                                                                        <p className="text-xs text-slate-400 leading-relaxed break-words">{log.details}</p>
                                                                        <p className="text-[10px] text-slate-500 font-medium">
                                                                            Initiated by <span className="text-slate-300 font-bold">{log.performedBy}</span>
                                                                            {log.targetStudentName && (
                                                                                <> • Target: <span className="text-indigo-400 font-bold">{log.targetStudentName}</span></>
                                                                            )}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span className="text-[10px] font-mono text-slate-500 flex-shrink-0 self-start sm:self-center">
                                                                    {new Date(log.createdAt).toLocaleString()}
                                                                </span>
                                                            </div>
                                                        );
                                                    })}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="p-8 space-y-6 animate-in fade-in duration-500">
                                        <div className="bg-indigo-500/5 border border-indigo-500/10 p-6 rounded-3xl space-y-4">
                                            <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                                🚀 Welcome to ChemZim Admin Console
                                            </h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                This console allows you to manage student registrations, oversee active sessions, and verify security protocols.
                                            </p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                                <div 
                                                    onClick={() => setActiveTab('students')}
                                                    className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl cursor-pointer hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all active:scale-98"
                                                >
                                                    <span className="text-slate-500 text-xs font-bold uppercase block mb-1">Students Registered</span>
                                                    <span className="text-2xl font-black text-white">{authStats ? authStats.totalStudents : 0}</span>
                                                </div>
                                                <div 
                                                    onClick={() => setActiveTab('devices')}
                                                    className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl cursor-pointer hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all active:scale-98"
                                                >
                                                    <span className="text-slate-500 text-xs font-bold uppercase block mb-1">Pending Device Approvals</span>
                                                    <span className="text-2xl font-black text-amber-400">{authStats ? authStats.pendingDevices : 0}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Quick Actions & Log - Only show on Overview */}
                    {activeTab === 'overview' && (
                        <div className="space-y-8">
                            <section className="space-y-4">
                                <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">Quick Actions</h3>
                                <div className="grid gap-3">
                                    <button className="flex items-center gap-3 p-4 bg-indigo-500 hover:bg-indigo-600 rounded-2xl w-full text-left font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
                                        <BookOpen className="w-5 h-5" />
                                        Create New Lesson
                                    </button>
                                    <button className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl w-full text-left font-bold transition-all active:scale-95">
                                        <Users className="w-5 h-5 text-emerald-400" />
                                        Generate Student Passwords
                                    </button>
                                </div>
                            </section>

                            <section className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">Audit Activity</h3>
                                    <button 
                                        type="button"
                                        onClick={() => setActiveTab('audit')} 
                                        className="text-xs text-indigo-400 hover:text-indigo-300 font-bold hover:underline cursor-pointer"
                                    >
                                        View All
                                    </button>
                                </div>
                                <div className="space-y-3 bg-white/[0.02] border border-white/5 p-5 rounded-3xl">
                                    {auditLogs.length === 0 ? (
                                        <p className="text-xs text-slate-500 text-center py-4">No recent activity logged.</p>
                                    ) : (
                                        auditLogs.slice(0, 5).map((log, i) => (
                                            <div key={log.id || i} className="flex gap-3.5 group">
                                                <div className="relative">
                                                    <div className={`w-2 h-2 rounded-full mt-1.5 ${
                                                        log.category === 'security' ? 'bg-rose-400' :
                                                        log.category === 'device' ? 'bg-amber-400' :
                                                        log.category === 'curriculum' ? 'bg-emerald-400' :
                                                        'bg-indigo-500'
                                                    }`} />
                                                    {i < Math.min(auditLogs.length - 1, 4) && <div className="absolute top-3.5 left-[3px] w-[2px] h-full bg-white/5" />}
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="text-xs font-medium text-slate-300 truncate">{log.action}</p>
                                                    <p className="text-[11px] text-slate-500 line-clamp-1">{log.details}</p>
                                                    <p className="text-[9px] text-slate-600 font-bold uppercase tracking-tight mt-0.5">
                                                        {new Date(log.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • by {log.performedBy}
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </section>
                        </div>
                    )}

                </div>

            </div>

            {/* Password Reset Modal */}
            {resetPasswordStudent && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-[#0b0b1a] border border-white/10 rounded-[2rem] p-6 w-full max-w-md space-y-6 shadow-2xl animate-in zoom-in-95 duration-300">
                        <div className="flex items-center justify-between border-b border-white/5 pb-4">
                            <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                <Key className="w-5 h-5 text-indigo-400" />
                                Reset Password
                            </h4>
                            {!resetCredentialsResult && (
                                <button 
                                    onClick={() => {
                                        setResetPasswordStudent(null);
                                        setNewStudentPassword('');
                                    }}
                                    className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                                >
                                    <XCircle className="w-5 h-5" />
                                </button>
                            )}
                        </div>

                        {!resetCredentialsResult ? (
                            <form onSubmit={handleResetPasswordSubmit} className="space-y-4">
                                <div className="space-y-1">
                                    <span className="text-xs text-slate-500 font-bold block">Student</span>
                                    <span className="font-bold text-white block">{resetPasswordStudent.name} ({resetPasswordStudent.username})</span>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">New Password *</label>
                                    <div className="flex gap-2">
                                        <input 
                                            type="text" 
                                            placeholder="At least 6 characters" 
                                            required
                                            value={newStudentPassword}
                                            onChange={e => setNewStudentPassword(e.target.value)}
                                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm text-white flex-1"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';
                                                let pass = '';
                                                for (let i = 0; i < 8; i++) {
                                                    pass += chars.charAt(Math.floor(Math.random() * chars.length));
                                                }
                                                setNewStudentPassword(pass);
                                            }}
                                            className="px-3 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-indigo-400 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer"
                                        >
                                            Generate
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 pt-2">
                                    <button 
                                        type="submit"
                                        disabled={isResettingPassword || newStudentPassword.length < 6}
                                        className="flex-1 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 text-white py-3 rounded-xl text-xs font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-95 cursor-pointer"
                                    >
                                        {isResettingPassword ? 'Updating...' : 'Update Password'}
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={() => {
                                            setResetPasswordStudent(null);
                                            setNewStudentPassword('');
                                        }}
                                        className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <h5 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4" />
                                    Password Reset Successfully!
                                </h5>
                                <div className="grid grid-cols-1 gap-3 text-xs">
                                    <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex items-center justify-between">
                                        <div>
                                            <span className="text-[10px] text-slate-500 font-bold uppercase block mb-1">Username</span>
                                            <code className="text-white font-mono font-bold">{resetCredentialsResult.username}</code>
                                        </div>
                                        <button 
                                            type="button"
                                            onClick={() => {
                                                navigator.clipboard.writeText(resetCredentialsResult.username);
                                                setCopiedField('reset_username');
                                                setTimeout(() => setCopiedField(null), 1500);
                                            }}
                                            className="text-slate-400 hover:text-white p-1 cursor-pointer"
                                        >
                                            {copiedField === 'reset_username' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                        </button>
                                    </div>
                                    <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex items-center justify-between">
                                        <div>
                                            <span className="text-[10px] text-slate-500 font-bold uppercase block mb-1">New Password</span>
                                            <code className="text-white font-mono font-bold">{resetCredentialsResult.password}</code>
                                        </div>
                                        <button 
                                            type="button"
                                            onClick={() => {
                                                navigator.clipboard.writeText(resetCredentialsResult.password || '');
                                                setCopiedField('reset_password');
                                                setTimeout(() => setCopiedField(null), 1500);
                                            }}
                                            className="text-slate-400 hover:text-white p-1 cursor-pointer"
                                        >
                                            {copiedField === 'reset_password' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                        </button>
                                    </div>
                                </div>
                                <button 
                                    type="button"
                                    onClick={() => {
                                        const inviteMsg = `Hello! 👋\n\nYour password has been reset successfully.\n\n🔐 New Credentials:\nUsername: ${resetCredentialsResult.username}\nPassword: ${resetCredentialsResult.password}\n\n🔗 Access here: ${window.location.origin}/login`;
                                        navigator.clipboard.writeText(inviteMsg);
                                        setCopiedField('reset_invite');
                                        setTimeout(() => setCopiedField(null), 1500);
                                    }}
                                    className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    {copiedField === 'reset_invite' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                    Copy Invite Message
                                </button>
                                <button 
                                    type="button"
                                    onClick={() => {
                                        setResetPasswordStudent(null);
                                        setResetCredentialsResult(null);
                                    }}
                                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer mt-2"
                                >
                                    Done
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Edit Student Tracks Modal */}
            {editTracksStudent && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-[#0c0c1e] border border-white/10 p-6 rounded-3xl max-w-lg w-full shadow-2xl relative animate-in zoom-in-95 duration-200">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-base font-bold flex items-center gap-2 text-white">
                                <span className="text-lg">📚</span>
                                Edit Student Curricula / Tracks
                            </h4>
                            <button
                                type="button"
                                onClick={() => setEditTracksStudent(null)}
                                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="mb-4 p-3 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center gap-3">
                            <StudentAvatar 
                                name={editTracksStudent.name} 
                                username={editTracksStudent.username} 
                                image={editTracksStudent.image} 
                                size="w-9 h-9" 
                                textClass="text-xs" 
                            />
                            <div>
                                <p className="font-bold text-white text-sm">{editTracksStudent.name}</p>
                                <p className="text-xs text-slate-400 font-mono">@{editTracksStudent.username}</p>
                            </div>
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center justify-between">
                                <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                    Enrolled Curricula (Select all that apply)
                                </label>
                                <button
                                    type="button"
                                    onClick={() => {
                                        const allTrackKeys = ['cie-igcse', 'cie-as', 'cie-alevel', 'edexcel-igcse', 'edexcel-as', 'edexcel-a2'];
                                        const isAll = editingTracks.length === allTrackKeys.length;
                                        setEditingTracks(isAll ? ['cie-igcse'] : allTrackKeys);
                                    }}
                                    className="text-[10px] font-bold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                                >
                                    {editingTracks.length === 6 ? 'Deselect All' : '⚡ Select All'}
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { id: 'cie-igcse', name: 'Cambridge IGCSE', color: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400' },
                                    { id: 'cie-as', name: 'Cambridge AS-Level', color: 'border-blue-500/30 bg-blue-500/5 text-blue-400' },
                                    { id: 'cie-alevel', name: 'Cambridge A-Level', color: 'border-indigo-500/30 bg-indigo-500/5 text-indigo-400' },
                                    { id: 'edexcel-igcse', name: 'Edexcel IGCSE', color: 'border-cyan-500/30 bg-cyan-500/5 text-cyan-400' },
                                    { id: 'edexcel-as', name: 'Edexcel AS-Level', color: 'border-purple-500/30 bg-purple-500/5 text-purple-400' },
                                    { id: 'edexcel-a2', name: 'Edexcel A2-Level', color: 'border-pink-500/30 bg-pink-500/5 text-pink-400' }
                                ].map((track) => {
                                    const isSelected = editingTracks.includes(track.id);
                                    return (
                                        <button
                                            key={track.id}
                                            type="button"
                                            onClick={() => {
                                                const next = isSelected 
                                                    ? editingTracks.filter(t => t !== track.id)
                                                    : [...editingTracks, track.id];
                                                setEditingTracks(next.length > 0 ? next : [track.id]);
                                            }}
                                            className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer text-left ${
                                                isSelected 
                                                    ? `${track.color} border-current ring-1 ring-current/20 shadow-sm`
                                                    : 'border-white/5 bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-slate-200'
                                            }`}
                                        >
                                            <div className={`w-3.5 h-3.5 rounded flex items-center justify-center border transition-all ${
                                                isSelected ? 'bg-indigo-500 border-indigo-500 text-white' : 'border-white/20 bg-black/40'
                                            }`}>
                                                {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                                            </div>
                                            <span className="truncate">{track.name}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                disabled={isUpdatingTracks || editingTracks.length === 0}
                                onClick={async () => {
                                    if (!editTracksStudent || editingTracks.length === 0) return;
                                    setIsUpdatingTracks(true);
                                    try {
                                        const res = await fetch('/api/admin/students', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify({
                                                action: 'update-tracks',
                                                studentId: editTracksStudent.id,
                                                enrolledTracks: editingTracks,
                                                grade: editingTracks[0]
                                            })
                                        });
                                        const data = await res.json();
                                        if (data.success) {
                                            setEditTracksStudent(null);
                                            fetchStudents();
                                        } else {
                                            alert(data.error || 'Failed to update student tracks');
                                        }
                                    } catch (err) {
                                        console.error(err);
                                        alert('Connection error');
                                    } finally {
                                        setIsUpdatingTracks(false);
                                    }
                                }}
                                className="flex-1 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 text-white py-3 rounded-xl text-xs font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-95 cursor-pointer"
                            >
                                {isUpdatingTracks ? 'Saving Changes...' : 'Save Curricula Access'}
                            </button>
                            <button
                                type="button"
                                onClick={() => setEditTracksStudent(null)}
                                className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Student Profile Detail Modal */}
            {selectedStudentProfile && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
                    <div className="bg-[#0b0f19] border border-white/10 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-indigo-900/40 via-purple-900/20 to-slate-900/60 p-6 flex items-center justify-between border-b border-white/5 flex-shrink-0">
                            <div className="flex items-center gap-2.5">
                                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                                    Student Profile Dossier
                                </span>
                            </div>
                            <button
                                type="button"
                                onClick={() => setSelectedStudentProfile(null)}
                                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Profile Body */}
                        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                            {/* Avatar & Main Identity */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-white/5">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border-2 border-indigo-500/30 p-1 shadow-xl overflow-hidden flex-shrink-0 flex items-center justify-center">
                                    <StudentAvatar 
                                        name={selectedStudentProfile.name} 
                                        username={selectedStudentProfile.username} 
                                        image={selectedStudentProfile.image} 
                                        size="w-full h-full" 
                                        textClass="text-2xl" 
                                        rounded="rounded-xl"
                                    />
                                </div>
                                <div className="space-y-1.5 flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="text-2xl font-black text-white tracking-tight">{selectedStudentProfile.name}</h3>
                                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${selectedStudentProfile.isActive ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border-rose-500/20'}`}>
                                            {selectedStudentProfile.isActive ? 'Active Account' : 'Suspended'}
                                        </span>
                                        {selectedStudentProfile.role && (
                                            <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase">
                                                {selectedStudentProfile.role}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-slate-400 font-mono">@{selectedStudentProfile.username}</p>
                                </div>
                                <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                                    <button
                                        type="button"
                                        onClick={() => setIsEditingDetails(!isEditingDetails)}
                                        className={`flex-1 sm:flex-none px-3 py-2 border rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                                            isEditingDetails 
                                                ? 'bg-amber-500/20 border-amber-500/40 text-amber-300' 
                                                : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white'
                                        }`}
                                    >
                                        <Edit2 className="w-3.5 h-3.5" />
                                        {isEditingDetails ? 'Cancel Edit' : 'Edit Details'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsParentReportOpen(true)}
                                        className="flex-1 sm:flex-none px-3 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95"
                                        title="Print A4 Parent Progress Dossier"
                                    >
                                        <Printer className="w-3.5 h-3.5 text-emerald-400" />
                                        Parent Report
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setResetPasswordStudent(selectedStudentProfile);
                                            setResetCredentialsResult(null);
                                        }}
                                        className="flex-1 sm:flex-none px-3 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-indigo-400 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                                    >
                                        <Key className="w-3.5 h-3.5" />
                                        Reset Pass
                                    </button>
                                    <button
                                        type="button"
                                        disabled={isTerminatingSessions || !selectedStudentProfile.devices || selectedStudentProfile.devices.length === 0}
                                        onClick={handleForceLogoutAll}
                                        className="flex-1 sm:flex-none px-3 py-2 bg-rose-500/10 hover:bg-rose-500/20 disabled:opacity-40 border border-rose-500/20 text-rose-400 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95"
                                        title="Force log out and unlink all student devices"
                                    >
                                        <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                                        {isTerminatingSessions ? 'Terminating...' : 'Force Logout'}
                                    </button>
                                </div>
                            </div>

                            {/* Contact & Registration Info Cards (Editable) */}
                            {isEditingDetails ? (
                                <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl space-y-4 animate-in fade-in duration-200">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                                            <Edit2 className="w-3.5 h-3.5" /> Edit Student Information
                                        </span>
                                        {detailsSavedSuccess && (
                                            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                                                <Check className="w-3.5 h-3.5" /> Saved Successfully!
                                            </span>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        <div>
                                            <label className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Full Name</label>
                                            <input 
                                                type="text" 
                                                value={editName}
                                                onChange={e => setEditName(e.target.value)}
                                                className="w-full bg-[#050510] border border-white/15 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-indigo-400"
                                                placeholder="Student Name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Email</label>
                                            <input 
                                                type="email" 
                                                value={editEmail}
                                                onChange={e => setEditEmail(e.target.value)}
                                                className="w-full bg-[#050510] border border-white/15 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-indigo-400"
                                                placeholder="student@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Phone Number</label>
                                            <input 
                                                type="tel" 
                                                value={editPhone}
                                                onChange={e => setEditPhone(e.target.value)}
                                                className="w-full bg-[#050510] border border-white/15 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-indigo-400 font-mono"
                                                placeholder="+962 7..."
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-2 pt-1">
                                        <button
                                            type="button"
                                            onClick={() => setIsEditingDetails(false)}
                                            className="px-3.5 py-1.5 bg-white/5 hover:bg-white/10 text-slate-300 rounded-xl text-xs font-bold transition-all cursor-pointer"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            disabled={isSavingDetails || !editName.trim()}
                                            onClick={handleSaveStudentDetails}
                                            className="px-4 py-1.5 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-indigo-500/20 cursor-pointer"
                                        >
                                            <Save className="w-3.5 h-3.5" />
                                            {isSavingDetails ? 'Saving...' : 'Save Changes'}
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <div className="bg-white/[0.02] border border-white/5 p-3.5 rounded-2xl space-y-1">
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1">
                                            <Mail className="w-3 h-3 text-indigo-400" /> Email
                                        </span>
                                        <p className="text-xs font-semibold text-white truncate">
                                            {selectedStudentProfile.email || 'No email registered'}
                                        </p>
                                    </div>
                                    <div className="bg-white/[0.02] border border-white/5 p-3.5 rounded-2xl space-y-1">
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1">
                                            <Phone className="w-3 h-3 text-emerald-400" /> Phone
                                        </span>
                                        <p className="text-xs font-semibold text-white font-mono truncate">
                                            {selectedStudentProfile.phone || 'No phone registered'}
                                        </p>
                                    </div>
                                    <div className="bg-white/[0.02] border border-white/5 p-3.5 rounded-2xl space-y-1">
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1">
                                            <Calendar className="w-3 h-3 text-amber-400" /> Member Since
                                        </span>
                                        <p className="text-xs font-semibold text-white truncate">
                                            {selectedStudentProfile.createdAt ? new Date(selectedStudentProfile.createdAt).toLocaleDateString() : 'Unknown'}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Gamification & Academic Stats Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                <div className="bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20 p-3.5 rounded-2xl text-center">
                                    <span className="text-[10px] text-indigo-300/70 uppercase font-bold block mb-1">XP Points</span>
                                    <span className="text-xl font-black text-white flex items-center justify-center gap-1">
                                        <Zap className="w-4 h-4 text-indigo-400" />
                                        {selectedStudentProfile.xp || 0}
                                    </span>
                                </div>
                                <div className="bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 p-3.5 rounded-2xl text-center">
                                    <span className="text-[10px] text-amber-300/70 uppercase font-bold block mb-1">Level</span>
                                    <span className="text-xl font-black text-white flex items-center justify-center gap-1">
                                        <Trophy className="w-4 h-4 text-amber-400" />
                                        {selectedStudentProfile.level || 1}
                                    </span>
                                </div>
                                <div className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 p-3.5 rounded-2xl text-center">
                                    <span className="text-[10px] text-emerald-300/70 uppercase font-bold block mb-1">Authorized Devices</span>
                                    <span className="text-xl font-black text-white flex items-center justify-center gap-1">
                                        <Smartphone className="w-4 h-4 text-emerald-400" />
                                        {selectedStudentProfile.devices?.length || 0}
                                    </span>
                                </div>
                                <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 p-3.5 rounded-2xl text-center">
                                    <span className="text-[10px] text-purple-300/70 uppercase font-bold block mb-1">Last Active</span>
                                    <span className="text-xs font-bold text-slate-300 block truncate mt-1">
                                        {selectedStudentProfile.lastLogin ? new Date(selectedStudentProfile.lastLogin).toLocaleDateString() : 'Never'}
                                    </span>
                                </div>
                            </div>

                            {/* Enrolled Tracks / Curricula */}
                            <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl space-y-3">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                                        <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                                        Enrolled Tracks &amp; Curricula
                                    </h4>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const currentTracks = selectedStudentProfile.enrolledTracks && selectedStudentProfile.enrolledTracks.length > 0
                                                ? selectedStudentProfile.enrolledTracks
                                                : [selectedStudentProfile.grade || 'cie-igcse'];
                                            setEditTracksStudent(selectedStudentProfile);
                                            setEditingTracks(currentTracks);
                                        }}
                                        className="text-xs text-indigo-400 hover:text-indigo-300 font-bold hover:underline cursor-pointer"
                                    >
                                        ✏️ Edit Tracks
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {(selectedStudentProfile.enrolledTracks && selectedStudentProfile.enrolledTracks.length > 0 
                                        ? selectedStudentProfile.enrolledTracks 
                                        : [selectedStudentProfile.grade || 'cie-igcse']
                                    ).map((track: string) => {
                                        const trackNames: Record<string, string> = {
                                            'cie-igcse': 'Cambridge IGCSE',
                                            'cie-as': 'Cambridge AS-Level',
                                            'cie-alevel': 'Cambridge A-Level',
                                            'edexcel-igcse': 'Edexcel IGCSE',
                                            'edexcel-as': 'Edexcel AS-Level',
                                            'edexcel-a2': 'Edexcel A2-Level',
                                            'dentistry': 'Dental Program 🦷'
                                        };
                                        return (
                                            <span 
                                                key={track} 
                                                className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-xl text-xs font-bold"
                                            >
                                                {trackNames[track] || track}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Concurrent Device & Fraud Check Warning */}
                            {selectedStudentProfile.devices && selectedStudentProfile.devices.filter((d: any) => d.status === 'approved').length > 1 && (
                                <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center gap-3 text-amber-300 text-xs">
                                    <AlertTriangle className="w-4 h-4 flex-shrink-0 text-amber-400" />
                                    <div className="leading-snug">
                                        <span className="font-bold">Concurrent Device Notice: </span>
                                        Student has {selectedStudentProfile.devices.filter((d: any) => d.status === 'approved').length} active approved devices. If concurrent logins from different locations occur, use the Force Logout button above.
                                    </div>
                                </div>
                            )}

                            {/* Linked Devices Summary */}
                            <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl space-y-3">
                                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                                    <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                                    Active / Registered Devices ({selectedStudentProfile.devices?.length || 0})
                                </h4>
                                {selectedStudentProfile.devices && selectedStudentProfile.devices.length > 0 ? (
                                    <div className="space-y-2">
                                        {selectedStudentProfile.devices.map((dev: any) => (
                                            <div key={dev.id} className="p-3 bg-white/[0.02] border border-white/5 rounded-xl flex items-center justify-between text-xs">
                                                <div className="flex items-center gap-2.5">
                                                    <span className={`w-2 h-2 rounded-full ${dev.status === 'approved' ? 'bg-emerald-400' : dev.status === 'pending' ? 'bg-amber-400' : 'bg-rose-400'}`} />
                                                    <div>
                                                        <p className="font-bold text-white">{dev.name} <span className="text-slate-500 font-normal">({dev.os} • {dev.browser})</span></p>
                                                        <p className="text-[10px] text-slate-500 font-mono">
                                                            First seen: {new Date(dev.firstSeen).toLocaleDateString()} {dev.ipAddress ? `• IP: ${dev.ipAddress}` : ''}
                                                        </p>
                                                    </div>
                                                </div>
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                                    dev.status === 'approved' ? 'bg-emerald-500/10 text-emerald-400' :
                                                    dev.status === 'pending' ? 'bg-amber-500/10 text-amber-400' : 'bg-rose-500/10 text-rose-400'
                                                }`}>
                                                    {dev.status}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-xs text-slate-500 italic">No devices logged in yet.</p>
                                )}
                            </div>

                            {/* Academic Performance & Quiz Analytics (Proposal 1) */}
                            <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl space-y-3">
                                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                                    <Award className="w-3.5 h-3.5 text-amber-400" />
                                    Academic Practice &amp; Performance
                                </h4>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                                    <div className="p-2.5 bg-white/[0.02] rounded-xl border border-white/5">
                                        <span className="text-[10px] text-slate-500 font-bold uppercase block">Lessons Completed</span>
                                        <span className="text-base font-black text-white">{selectedStudentProfile.completedLessons?.length || 0}</span>
                                    </div>
                                    <div className="p-2.5 bg-white/[0.02] rounded-xl border border-white/5">
                                        <span className="text-[10px] text-slate-500 font-bold uppercase block">Quizzes Taken</span>
                                        <span className="text-base font-black text-emerald-400">{Object.keys(selectedStudentProfile.quizScores || {}).length}</span>
                                    </div>
                                    <div className="p-2.5 bg-white/[0.02] rounded-xl border border-white/5">
                                        <span className="text-[10px] text-slate-500 font-bold uppercase block">Mistake Inbox</span>
                                        <span className="text-base font-black text-rose-400">{selectedStudentProfile.mistakeInbox?.length || 0}</span>
                                    </div>
                                    <div className="p-2.5 bg-white/[0.02] rounded-xl border border-white/5">
                                        <span className="text-[10px] text-slate-500 font-bold uppercase block">Avg Quiz Score</span>
                                        <span className="text-base font-black text-indigo-400">
                                            {(() => {
                                                const scores = Object.values(selectedStudentProfile.quizScores || {}) as number[];
                                                if (scores.length === 0) return 'N/A';
                                                const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
                                                return `${avg}%`;
                                            })()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Editable Teacher Remarks (Proposal 5) */}
                            <div className="bg-amber-500/5 border border-amber-500/20 p-4 rounded-2xl space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                                        <span>📝 Teacher Remarks &amp; Internal Notes</span>
                                    </span>
                                    {remarksSavedSuccess && (
                                        <span className="text-[10px] text-emerald-400 font-bold animate-in fade-in flex items-center gap-1">
                                            <CheckCircle2 className="w-3 h-3" /> Saved!
                                        </span>
                                    )}
                                </div>
                                <textarea
                                    value={studentRemarksText}
                                    onChange={(e) => setStudentRemarksText(e.target.value)}
                                    placeholder="Write internal notes or teaching remarks about this student..."
                                    rows={3}
                                    className="w-full bg-[#050510]/80 border border-white/10 rounded-xl p-3 text-xs text-slate-200 outline-none focus:border-amber-500/50 resize-none transition-all placeholder:text-slate-600"
                                />
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        disabled={isSavingRemarks}
                                        onClick={handleSaveRemarks}
                                        className="px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 rounded-xl text-xs font-bold transition-all cursor-pointer active:scale-95 disabled:opacity-50"
                                    >
                                        {isSavingRemarks ? 'Saving...' : 'Save Remarks'}
                                    </button>
                                </div>
                            </div>

                            {/* Targeted Direct Push Notification (Proposal 5) */}
                            <div className="bg-indigo-500/5 border border-indigo-500/20 p-4 rounded-2xl space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                                        <Send className="w-3 h-3" />
                                        <span>Send Targeted Push Notification</span>
                                    </span>
                                    {directMsgSentSuccess && (
                                        <span className="text-[10px] text-emerald-400 font-bold animate-in fade-in flex items-center gap-1">
                                            <CheckCircle2 className="w-3 h-3" /> Notification Sent!
                                        </span>
                                    )}
                                </div>
                                <form onSubmit={handleSendDirectNotification} className="space-y-2">
                                    <input
                                        type="text"
                                        value={directMsgTitle}
                                        onChange={(e) => setDirectMsgTitle(e.target.value)}
                                        placeholder="Notification Title (e.g. Cambridge Exam Reminder)"
                                        className="w-full bg-[#050510]/80 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none focus:border-indigo-500 transition-all placeholder:text-slate-600"
                                    />
                                    <textarea
                                        value={directMsgBody}
                                        onChange={(e) => setDirectMsgBody(e.target.value)}
                                        placeholder="Message text directly sent to this student..."
                                        rows={2}
                                        required
                                        className="w-full bg-[#050510]/80 border border-white/10 rounded-xl p-3 text-xs text-slate-200 outline-none focus:border-indigo-500 resize-none transition-all placeholder:text-slate-600"
                                    />
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            disabled={isSendingDirectMsg || !directMsgBody.trim()}
                                            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-500/20 cursor-pointer active:scale-95 flex items-center gap-1.5"
                                        >
                                            <Send className="w-3 h-3" />
                                            {isSendingDirectMsg ? 'Sending...' : 'Send to Student'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 bg-white/[0.01] border-t border-white/5 flex justify-end">
                            <button
                                type="button"
                                onClick={() => setSelectedStudentProfile(null)}
                                className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                            >
                                Close Dossier
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Student Parent Printable Report Modal */}
            <StudentParentReportModal
                isOpen={isParentReportOpen}
                onClose={() => setIsParentReportOpen(false)}
                student={selectedStudentProfile}
                teacherRemarks={studentRemarksText}
            />
        </div>
    );
}


export default function AdminPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#050510] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
            </div>
        }>
            <AdminContent />
        </Suspense>
    );
}
