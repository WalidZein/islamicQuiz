'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserSettings } from '@/utils/userManager';
import { User } from '@/types/leaderboard';

interface InvitePageProps {
    params: {
        code: string;
    };
}

export default function InvitePage({ params }: InvitePageProps) {
    const router = useRouter();
    const [invitingUser, setInvitingUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkInvite = async () => {
            try {
                const userSettings = getUserSettings();
                const response = await fetch('/api/friends/accept', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        inviteCode: params.code,
                        userId: userSettings.uuid,
                    }),
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || 'Failed to accept invite');
                }

                setInvitingUser(data.friend);
                // Wait a bit before redirecting to show the success message
                setTimeout(() => {
                    router.push('/');
                }, 3000);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Failed to accept invite');
            } finally {
                setIsLoading(false);
            }
        };

        checkInvite();
    }, [params.code, router]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-md w-full text-center">
                    <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{error}</p>
                    <button
                        onClick={() => router.push('/')}
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                    >
                        Go to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-md w-full text-center">
                <h1 className="text-2xl font-bold text-green-500 mb-4">Success!</h1>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    You are now friends with {invitingUser?.name || 'the user'}! Redirecting to home...
                </p>
                <div className="animate-pulse">
                    <div className="h-2 bg-blue-200 rounded"></div>
                </div>
            </div>
        </div>
    );
} 