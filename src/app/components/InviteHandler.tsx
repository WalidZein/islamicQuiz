'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getUserSettings } from '@/utils/userManager';
import { User } from '@/types/leaderboard';
import AnnouncementPopup from './AnnouncementPopup';

interface InviteHandlerProps {
    children: React.ReactNode;
}

export default function InviteHandler({ children }: InviteHandlerProps) {
    const searchParams = useSearchParams();
    const [invitingUser, setInvitingUser] = useState<User | null>(null);
    const [showPopup, setShowPopup] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const inviteCode = searchParams.get('invite');
        if (!inviteCode) return;

        const fetchInviteDetails = async () => {
            try {
                const response = await fetch(`/api/friends/details?code=${inviteCode}`);
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || 'Failed to get invite details');
                }

                setInvitingUser(data.friend);
                setShowPopup(true);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Failed to get invite details');
                setShowPopup(true);
            }
        };

        fetchInviteDetails();
    }, [searchParams]);

    const handleAcceptInvite = async () => {
        if (!invitingUser) return;

        try {
            const userSettings = getUserSettings();
            const inviteCode = searchParams.get('invite');

            const response = await fetch('/api/friends/accept', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    inviteCode,
                    userId: userSettings.uuid,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to accept invite');
            }

            setShowPopup(false);
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Failed to accept invite');
        }
    };

    return (
        <>
            {children}

            {showPopup && (error ? (
                <AnnouncementPopup
                    title="Error"
                    onClose={() => setShowPopup(false)}
                    ctaText="Close"
                    onCtaClick={() => setShowPopup(false)}
                >
                    <p className="text-red-500">{error}</p>
                </AnnouncementPopup>
            ) : (
                <AnnouncementPopup
                    title="Friend Request"
                    onClose={() => setShowPopup(false)}
                    ctaText="Accept Friend Request"
                    onCtaClick={handleAcceptInvite}
                >
                    <div className="space-y-4">
                        <p>
                            {invitingUser?.name} would like to add you as a friend on The Muslim Box!
                            Accept to compete together and see each other's progress.
                        </p>
                    </div>
                </AnnouncementPopup>
            ))}
        </>
    );
} 