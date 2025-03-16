'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface SponsorshipCardProps {
    businessName: string;
    businessUrl: string;
    businessDescription: string;
    formUrl: string;
    logoUrl?: string; // Optional logo URL
}

export default function SponsorshipCard({
    businessName,
    businessUrl,
    businessDescription,
    formUrl,
    logoUrl = '' // Default to empty string if not provided
}: SponsorshipCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-2xl bg-gray-50 dark:bg-gray-800 dark:bg-opacity-90 rounded-lg shadow-md p-4"
        >
            <div className="flex flex-col space-y-3">
                <h3 className="text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase font-semibold text-center">
                    Sponsored by <a
                        href={businessUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                    >
                        {businessName}
                    </a>
                </h3>

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    {/* Logo section - only render if logoUrl is provided */}
                    {logoUrl && (
                        <a
                            href={businessUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 w-24 h-24 sm:w-20 sm:h-20 relative overflow-hidden rounded-md border border-gray-200 dark:border-gray-700"
                        >
                            <Image
                                src={logoUrl}
                                alt={`${businessName} logo`}
                                fill
                                sizes="(max-width: 640px) 96px, 80px"
                                className="object-contain"
                            />
                        </a>
                    )}

                    {/* Description section */}
                    <div className="flex-1">
                        <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm text-center sm:text-left">
                            {businessDescription.split(businessName).map((part, index, array) => {
                                // If this is not the last part, we need to add the business name link
                                if (index < array.length - 1) {
                                    return (
                                        <span key={index}>
                                            {part}
                                            <a
                                                href={businessUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                                            >
                                                {businessName}
                                            </a>
                                        </span>
                                    );
                                }
                                return <span key={index}>{part}</span>;
                            })}
                        </p>
                    </div>
                </div>

                <div className="pt-2 border-t border-gray-200 dark:border-gray-700 mt-2 text-xs">
                    <a
                        href={formUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 flex flex-col items-center"
                    >
                        <div className="sm:hidden flex flex-col items-center">
                            <span>Interested in promoting your business?</span>
                            <span>Submit your request here</span>
                        </div>
                        <div className="hidden  flex-row sm:block">
                            <span>Interested in promoting your business? Submit your request here</span>
                        </div>
                    </a>
                </div>
            </div>
        </motion.div>
    );
} 