'use client';

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    showCloseButton?: boolean;
    children: ReactNode;
    footer?: ReactNode;
    maxWidth?: string;
    closeOnOverlayClick?: boolean;
    animationProps?: {
        initial?: any;
        animate?: any;
        exit?: any;
    };
    overlayClassName?: string;
    contentClassName?: string;
    headerClassName?: string;
    bodyClassName?: string;
    footerClassName?: string;
}

export default function Popup({
    isOpen,
    onClose,
    title,
    showCloseButton = true,
    children,
    footer,
    maxWidth = 'max-w-md',
    closeOnOverlayClick = true,
    animationProps = {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 }
    },
    overlayClassName = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
    contentClassName = "bg-white dark:bg-gray-800 rounded-lg w-full",
    headerClassName = "border-b border-gray-200 dark:border-gray-700 p-4",
    bodyClassName = "p-4 space-y-3",
    footerClassName = "border-t border-gray-200 dark:border-gray-700 p-4"
}: PopupProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div
                className={overlayClassName}
                onClick={(e) => {
                    if (closeOnOverlayClick && e.target === e.currentTarget) {
                        onClose();
                    }
                }}
            >
                <motion.div
                    initial={animationProps.initial}
                    animate={animationProps.animate}
                    exit={animationProps.exit}
                    className={`${contentClassName} ${maxWidth} relative`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button - Moved outside the header */}
                    {showCloseButton && (
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 z-10"
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>
                    )}

                    {/* Header */}
                    {title && (
                        <div className={headerClassName}>
                            <div className="flex justify-center items-center pt-1">
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    {title}
                                </h2>
                            </div>
                        </div>
                    )}

                    {/* Content */}
                    <div className={bodyClassName}>
                        {children}
                    </div>

                    {/* Footer */}
                    {footer && (
                        <div className={footerClassName}>
                            {footer}
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
} 