import { motion } from 'framer-motion';

export default function ConnectionsGameSkeleton() {
    return (
        <div className="flex flex-col items-center py-10">
            <div className="w-full max-w-2xl mb-4">
                {/* Back button skeleton */}
                <div className="w-32 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-2xl bg-gray-50 dark:bg-gray-800 dark:bg-opacity-90 rounded-lg shadow-md p-5"
            >
                {/* Header skeleton */}
                <div className="flex justify-between items-center mb-3">
                    <div className="w-48 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
                </div>

                {/* Grid skeleton */}
                <div className="grid grid-cols-4 gap-1 mb-4">
                    {Array.from({ length: 16 }).map((_, index) => (
                        <div
                            key={index}
                            className="rounded bg-gray-200 dark:bg-gray-700 min-h-[70px] animate-pulse"
                        />
                    ))}
                </div>

                {/* Mistakes indicator skeleton */}
                <div className="mb-4">
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-36 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                        <div className="flex gap-2">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Buttons skeleton */}
                <div className="flex gap-2">
                    <div className="w-24 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
                    <div className="flex-1 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
                </div>
            </motion.div>
        </div>
    );
} 