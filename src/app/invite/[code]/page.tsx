'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface InvitePageProps {
    params: {
        code: string;
    };
}

export default function InvitePage({ params }: InvitePageProps) {
    const router = useRouter();

    useEffect(() => {
        router.push(`/?invite=${params.code}`);
    }, [params.code, router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
    );
} 