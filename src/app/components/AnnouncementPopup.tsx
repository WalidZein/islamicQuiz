/**
 * Props interface for the AnnouncementPopup component
 * @interface AnnouncementPopupProps
 * @property {string} title - The title text shown in the popup header
 * @property {() => void} onClose - Function called when popup is closed
 * @property {string} ctaText - Text shown on the call-to-action button
 * @property {() => void} onCtaClick - Function called when CTA button is clicked
 * @property {ReactNode} children - Content to be rendered in the popup body
 */
import { ReactNode } from 'react';

interface AnnouncementPopupProps {
    title: string;
    onClose: () => void;
    ctaText: string;
    onCtaClick: () => void;
    children: ReactNode;
}

/**
 * A modal popup component for displaying announcements with a title, content, and CTA button
 * @param {AnnouncementPopupProps} props - Component props
 * @returns {JSX.Element} The announcement popup component
 */
export default function AnnouncementPopup({
    title,
    onClose,
    ctaText,
    onCtaClick,
    children,
}: AnnouncementPopupProps) {
    return (
        // Overlay backdrop with centered popup
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            {/* Main popup container with animation */}
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-xl animate-fade-in">
                {/* Header section with title and close button */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                        aria-label="Close"
                    >
                        <svg
                            className="w-6 h-6 text-gray-500 dark:text-gray-400"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                {/* Content section */}
                <div className="p-4 text-gray-600 dark:text-gray-300">
                    {children}
                </div>

                {/* Footer section with CTA button */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                        onClick={onCtaClick}
                        className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
                    >
                        {ctaText}
                    </button>
                </div>
            </div>
        </div>
    );
} 