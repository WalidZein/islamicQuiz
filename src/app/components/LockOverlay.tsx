import { useState } from 'react';
import { shareContent, trackShare } from '@/utils/shareUtils';
import { getUserSettings } from '@/utils/userManager';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface LockOverlayProps {
    onClose: () => void;
    isOpen: boolean;
}

export default function LockOverlay({ onClose, isOpen }: LockOverlayProps) {
    const [isSharing, setIsSharing] = useState(false);

    if (!isOpen) return null;

    const handleShare = async () => {
        setIsSharing(true);
        const userSettings = getUserSettings();

        const success = await shareContent({
            title: 'Islamic Quiz',
            text: 'Join me in testing your Islamic knowledge with daily quizzes!',
            url: window.location.origin,
        });

        if (success) {
            await trackShare(userSettings.uuid, 'invite');
        }

        setIsSharing(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4">
                <button
                    onClick={onClose}
                    className="absolute -top-3 -right-3 p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                    <XMarkIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>

                <h3 className="text-xl font-bold mb-4 text-gray-600 dark:text-gray-300">Quiz Locked</h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                    Share Islamic Quiz with friends to unlock more quizzes! Invite 3 friends to unlock all quizzes.
                </p>

                <button
                    onClick={handleShare}
                    disabled={isSharing}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                >
                    {isSharing ? 'Sharing...' : 'Share with Friends'}
                </button>
            </div>
        </div>
    );
} 