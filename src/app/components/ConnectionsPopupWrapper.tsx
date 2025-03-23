'use client';

import { useState, useEffect } from 'react';
import { getUserSettings } from '@/utils/userManager';
import ConnectionsPopup from './ConnectionsPopup';

export default function ConnectionsPopupWrapper() {
    const [userId, setUserId] = useState<string | null>(null);
    const [showPopup, setShowPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Get user ID on client-side
    useEffect(() => {
        const settings = getUserSettings();
        setUserId(settings.uuid);
    }, []);

    useEffect(() => {
        // Check if user has already subscribed
        const checkSubscription = async () => {
            if (userId) {
                try {
                    const response = await fetch(`/api/email/is-subscribed?userId=${userId}`);
                    const data = await response.json();

                    if (data.success) {
                        // Only show popup if user is not subscribed
                        setShowPopup(!data.isSubscribed);
                    } else {
                        console.error('Error checking subscription:', data.message);
                        // Show popup by default if there's an error checking
                        setShowPopup(true);
                    }
                } catch (error) {
                    console.error('Error checking subscription:', error);
                    // Show popup by default if there's an error checking
                    setShowPopup(true);
                } finally {
                    setIsLoading(false);
                }
            } else {
                // Wait for user ID to be set
                if (userId === null) return;

                // If no user (which shouldn't happen with our userManager), show popup
                setShowPopup(true);
                setIsLoading(false);
            }
        };

        // Add a small delay to prevent popup from showing immediately when page loads
        const timer = setTimeout(() => {
            if (userId !== null) {
                checkSubscription();
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [userId]);


    const handleClose = () => {
        setShowPopup(false);
    };

    if (isLoading || !showPopup || !userId) {
        return null;
    }

    return (
        <ConnectionsPopup
            isOpen={showPopup}
            onClose={handleClose}
            userId={userId}
        />
    );
} 