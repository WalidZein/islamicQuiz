'use client';

import { useState, FormEvent } from 'react';
import Popup from './ui/Popup';
import SocialLinks from './SocialLinks';

interface ConnectionsPopupProps {
    isOpen: boolean;
    onClose: () => void;
    userId: string;
}

export default function ConnectionsPopup({ isOpen, onClose, userId }: ConnectionsPopupProps) {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!email.trim()) {
            setErrorMessage('Please enter your email address.');
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const response = await fetch('/api/email/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, email }),
            });

            const data = await response.json();

            if (data.success) {
                setSubscribeStatus('success');
            } else {
                setSubscribeStatus('error');
                setErrorMessage(data.message || 'An error occurred while subscribing. Please try again.');
            }
        } catch (error) {
            console.error('Error subscribing email:', error);
            setSubscribeStatus('error');
            setErrorMessage('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Popup
            isOpen={isOpen}
            onClose={onClose}
            title="New Games Coming Soon!"
            maxWidth="max-w-lg"
            contentClassName="bg-white dark:bg-gray-800 rounded-lg w-full text-gray-800 dark:text-gray-200"
        >
            <div className="space-y-6">
                <p className="text-center leading-relaxed">
                    We're currently working on exciting new games to help test your knowledge in a fun and engaging way.
                    Subscribe to be the first to know when we release new content!
                </p>

                {subscribeStatus === 'success' ? (
                    <div className="bg-green-100 dark:bg-green-800/30 p-4 rounded-lg text-center">
                        <p className="text-green-700 dark:text-green-400 font-medium">Thank you for subscribing!</p>
                        <p className="text-sm mt-1">We'll notify you when new games are available.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="your.email@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled={isSubmitting}
                            />
                            {errorMessage && (
                                <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errorMessage}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                        </button>
                    </form>
                )}

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-center text-sm mb-4">Follow us for updates and announcements:</p>
                    <SocialLinks showTitle={false} iconSize={4} />
                </div>
            </div>
        </Popup>
    );
} 